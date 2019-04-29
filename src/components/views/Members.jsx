import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader'
import MembersList from '../Members/MembersList'

export default (state, actions) => {
  console.log('state')
  console.log(state.data)
  return (
    <div oncreate={() => actions.getAll()}>
      <p>Member view</p>
      <h3>Members </h3>
      <MembersHeader />
      <MembersList />
    </div>
  )
}
