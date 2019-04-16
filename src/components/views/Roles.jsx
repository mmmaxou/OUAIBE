import { h } from 'hyperapp'
import RolesHeader from '../Roles/RolesHeader'
import RolesList from '../Roles/RolesList'

export default (/* state, actions */) => {
  return (
    <div>
      <p>Role view</p>
      <RolesHeader />
      <RolesList />
    </div>
  )
}
