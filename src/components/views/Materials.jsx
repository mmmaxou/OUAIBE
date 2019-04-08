import { h } from 'hyperapp'
import MaterialsHeader from '../MaterialsHeader'
import MaterialsList from '../MaterialsList'

export default (/* state, actions */) => {
  return (
    <div>
      <MaterialsHeader />
      <MaterialsList />
    </div>
  )
}
