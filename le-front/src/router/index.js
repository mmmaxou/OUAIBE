import Vue from 'vue'
import Router from 'vue-router'
import Other from '@/components/Other'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Other',
      component: Other
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
