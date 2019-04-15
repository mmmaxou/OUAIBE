import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader'
import MembersList from '../Members/MembersList'

export default (/* state, actions */) => {
  return (
    <div>
      <MembersHeader />
      <MembersList />
    </div>
  )
}
