import Vue from 'vue'
import Router from 'vue-router'
import CompletedItems from './components/CompletedItems.vue'
import UncompletedItems from './components/UncompletedItems.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'base',
      component: UncompletedItems
    },
    {
      path: '/uncompleted',
      name: 'uncompleted',
      component: UncompletedItems
    },
    {
      path: '/completed',
      name: 'completed',
      component: CompletedItems
    }
  ]
})
