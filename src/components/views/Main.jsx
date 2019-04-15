import { h } from 'hyperapp'
import { Route } from '@hyperapp/router'
import Menu from '../Layout/Menu'
import Members from './Members'
import Materials from './Materials'
import Roles from './Roles'
import Sponsors from './Sponsors'
import Home from './Home'

export default () => {
  return (
    <div>
      <Menu />RoleEntryRoleEntry
      <Route path='/' render={Home}></Route>
      <Route path='/members' render={Members}></Route>
      <Route path='/materials' render={Materials}></Route>
      <Route path='/roles' render={Roles}></Route>
      <Route path='/sponsors' render={Sponsors}></Route>
    </div>
  )
}
