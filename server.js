/* eslint-disable no-param-reassign */
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = express()

const ITEMS_DATA_FILE = path.join(__dirname, 'items.json')
// const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json')

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  next()
})

// A fake API token our server validates
// const API_TOKEN = 'D6W69PRgCoDKgHZGJmRUNA'

// const extractToken = (req) => (
//   req.query.token
// )

// const authenticatedRoute = ((req, res, next) => {
//   const token = extractToken(req)
//
//   if (token) {
//     if (token === API_TOKEN) {
//       return next()
//     } else {
//       return res.status(403).json({
//         success: false,
//         error: 'Invalid token provided'
//       })
//     }
//   } else {
//     return res.status(403).json({
//       success: false,
//       error: 'No token provided. Supply token as query param `token`'
//     })
//   }
// })

// Make things more noticeable in the UI by introducing a fake delay

// IT MAY BE USEFUL
// to logins
// const FAKE_DELAY = 500 // ms
// app.post('/login', (req, res) => {
//   setTimeout(() => (
//     res.json({
//       success: true,
//       token: API_TOKEN
//     })
//   ), FAKE_DELAY)
// })

app.get('/items', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache')
    res.json(JSON.parse(data))
  })
})

// app.get('/cart', authenticatedRoute, (req, res) => {
//   fs.readFile(CART_DATA_FILE, (err, data) => {
//     res.setHeader('Cache-Control', 'no-cache')
//     res.json(JSON.parse(data))
//   })
// })

app.post('/items', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    const items = JSON.parse(data)
    const newItem = {
      id: req.body.id,
      value: req.body.value,
      completed: req.body.completed
    }
    items.push(newItem)
    // if (act === 'complete') {
    //   items.map((item) => {
    //     if (item.id === req.body.id) item.completed = true
    //   })
    // }
    // if (act === 'update') {
    //   items.map((item) => {
    //     if (item.id === req.body.id) item.value = req.body.value
    //   })
    // }
    fs.writeFile(ITEMS_DATA_FILE, JSON.stringify(items, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(items)
    })
  })
})

app.post('/items/complete', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    const items = JSON.parse(data)
    items.map((item) => {
      if (item.id === req.body.id) item.completed = true
    })
    fs.writeFile(ITEMS_DATA_FILE, JSON.stringify(items, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(items)
    })
  })
})

app.post('/items/update', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    const items = JSON.parse(data)
    items.map((item) => {
      if (item.id === req.body.id) item.value = req.body.value
    })
    fs.writeFile(ITEMS_DATA_FILE, JSON.stringify(items, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(items)
    })
  })
})

app.post('/items/delete', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    const items = JSON.parse(data)

    const indexToRemove = items.findIndex(item => item.id === req.body.id)
    items.splice(indexToRemove, 1)
    fs.writeFile(ITEMS_DATA_FILE, JSON.stringify(items, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(items)
    })
  })
})

// app.post('/cart/delete', (req, res) => {
//   fs.readFile(CART_DATA_FILE, (err, data) => {
//     let cartProducts = JSON.parse(data)
//     cartProducts.map((cartProduct) => {
//       if (cartProduct.id === req.body.id && cartProduct.quantity > 1) {
//         cartProduct.quantity--
//       } else if (cartProduct.id === req.body.id && cartProduct.quantity === 1) {
//         const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === req.body.id)
//         cartProducts.splice(cartIndexToRemove, 1)
//       }
//     })
//     fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
//       res.setHeader('Cache-Control', 'no-cache')
//       res.json(cartProducts)
//     })
//   })
// })

// app.post('/cart/delete/all', (req, res) => {
//   fs.readFile(CART_DATA_FILE, () => {
//     let emptyCart = []
//     fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
//       res.json(emptyCart)
//     })
//   })
// })

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
