import { h } from 'hyperapp'
import Header from '../Layout/Header'
import Menu from '../Layout/Menu'
import Message from '../Layout/Message'
import { Route, Switch } from '@hyperapp/router'
import Members from './Members'
import Materials from './Materials'
import Roles from './Roles'
import Sponsors from './Sponsors'
import Home from './Home'

export default (state, actions) => {
  return (
    <div class="mdl-layout__container">
      <div class="bdi-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Menu />
        <main class="mdl-layout__content">
          <Header pageName={state.actualPage} />
          <Message
            error={state.helpers.error}
            message={state.helpers.message}
            discardMessage={actions.helpers.discardMessage} />
          <Switch>
            <Route path='/'
              render={() => {
                actions.setPageName('')
                return Home(state, actions)
              }}
            />
            <Route path='/members'
              render={() => {
                actions.setPageName('Members')
                return Members(
                  {members: state.members, roles: state.roles},
                  {members: actions.members, getRoles: actions.roles.getAll}
                )
              }}
            />
            <Route path='/materials'
              render={() => {
                actions.setPageName('Materials')
                return Materials(state, actions)
              }}
            />
            <Route path='/roles'
              render={() => {
                actions.setPageName('Roles')
                return Roles(state, actions)
              }}
            />
            <Route path='/sponsors'
              render={() => {
                actions.setPageName('Sponsors')
                return Sponsors(state, actions)
              }}
            />
            <Route path='/members/:id' render={Members}></Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}
