import Vue from 'vue'
import Router from 'vue-router'

import Equipment from '@/views/Equipment'
import Funds from '@/views/Funds'
import Home from '@/views/Home'
import Sponsors from '@/views/Sponsors'
import UserProfile from '@/views/UserProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/funds',
      name: 'Funds',
      component: Funds
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    }
  ]
})
