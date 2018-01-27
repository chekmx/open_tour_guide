import Vue from 'vue'
import Router from 'vue-router'
import MyToursComponent from '@/components/MyTours/index.vue'
import SearchToursComponent from '@/components/SearchTours/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyTours',
      component: MyToursComponent
    },
    {
      path: '/searchTours',
      name: 'Search',
      component: SearchToursComponent
    }
  ]
})
