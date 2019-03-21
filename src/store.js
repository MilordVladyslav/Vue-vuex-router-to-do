import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
    ]
  },
  mutations: {
    UPDATE_ITEMS (state, payload) {
      state.items = payload
    }
  },
  actions: {
    getItems ({ commit }) {
      axios.get('/api/items').then((response) => {
        commit('UPDATE_ITEMS', response.data)
      })
    },
    addItem ({ commit }, addedItem) {
      return axios.post('/api/items', addedItem).then((response) => {
        commit('UPDATE_ITEMS', response.data)
      })
    }
  },
  getters: {
    items: state => state.items,
    itemsFromId: (state) => (id) => {
      return state.items.find(item => item.id === id)
    }
  }
})
