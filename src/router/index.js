import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SearchToursComponent from '@/components/SearchTours/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/searchTours',
      name: 'Search',
      component: SearchToursComponent
    }
  ]
})
