import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader'
import MembersList from '../Members/MembersList'

export default (/* state, actions */) => {
  return (
    <div>
      <p>Member view</p>
      <MembersHeader />
      <MembersList />
    </div>
  )
}
