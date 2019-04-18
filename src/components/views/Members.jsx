import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader'
import MembersList from '../Members/MembersList'

export default (state, actions) => {
  console.log("state")
  console.log(state.members.data)
  
  return (
    <div oncreate={() => actions.members.getAll()}>
      <p>Member view</p>
      <h3>Members </h3>
      <MembersHeader />
      <MembersList />
    </div>
  )
}
