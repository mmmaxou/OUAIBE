import { h } from 'hyperapp'
import MembersHeader from '../MembersHeader'
import MembersList from '../MembersList'

export default (/* state, actions */) => {
  return (
    <div>
      <MembersHeader />
      <MembersList />
    </div>
  )
}
