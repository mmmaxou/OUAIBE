import { h } from 'hyperapp'
import MaterialsHeader from '../Materials/MaterialsHeader'
import MaterialsList from '../Materials/MaterialsList'

export default (/* state, actions */) => {
  return (
    <div>
      <p>Material view</p>
      <MaterialsHeader />
      <MaterialsList />
    </div>
  )
}
