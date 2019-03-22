/* eslint-disable no-param-reassign */
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = express()

const ITEMS_DATA_FILE = path.join(__dirname, 'items.json')

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  next()
})

app.get('/items', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache')
    res.json(JSON.parse(data))
  })
})

app.post('/items', (req, res) => {
  fs.readFile(ITEMS_DATA_FILE, (err, data) => {
    const items = JSON.parse(data)
    const newItem = {
      id: req.body.id,
      value: req.body.value,
      completed: req.body.completed
    }
    items.push(newItem)
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

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
