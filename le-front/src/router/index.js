import Vue from 'vue'
import Router from 'vue-router'

import Equipment from '@/components/Equipment'
import Funds from '@/components/Funds'
import Home from '@/components/Home'
import Sponsors from '@/components/Sponsors'
import UserProfile from '@/components/UserProfile'
import UserPicture from '@/components/UserPicture'

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
      component: UserProfile,
      children: [
        {
          path: 'picture',
          component: UserPicture
        }
      ]
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
