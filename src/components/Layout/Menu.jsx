import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/members'>Members</Link>
    <Link to='/materials'>Materials</Link>
    <Link to='/roles'>Roles</Link>
    <Link to='/sponsors'>Sponsors</Link>
  </div>
)
