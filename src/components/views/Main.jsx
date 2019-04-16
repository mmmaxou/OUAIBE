import { h } from 'hyperapp'
import Menu from '../Layout/Menu'
import { Route, Switch } from '@hyperapp/router'
import Members from './Members'
import Materials from './Materials'
import Roles from './Roles'
import Sponsors from './Sponsors'
import Home from './Home'

export default () => {
  return (
    <div>
      <Menu />
      <p>Le menu</p>
      <Switch>
        <Route path='/' render={Home}></Route>
        <Route path='/members' render={Members}></Route>
        <Route path='/materials' render={Materials}></Route>
        <Route path='/roles' render={Roles}></Route>
        <Route path='/sponsors' render={Sponsors}></Route>
        <Route path='/members/:id' render={Members}></Route>
      </Switch>
    </div>
  )
}
