import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Count',
      component: Count
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
