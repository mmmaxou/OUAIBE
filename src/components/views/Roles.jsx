import { h } from 'hyperapp'
import RolesHeader from '../RolesHeader'
import RolesList from '../RolesList'

export default (/* state, actions */) => {
  return (
    <div>
      <RolesHeader />
      <RolesList />
    </div>
  )
}
