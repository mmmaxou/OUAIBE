import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader'
import MembersList from '../Members/MembersList'

export default ({location, match}) => {
  const params = match.params || {}
  return (
    <div>
      <p>Member view</p>
      <h3>Location: {location.pathname}</h3>
      <p>Les params : </p>
      {console.log(match)}
      {
        Object.keys(params).map(key => (
          <li>
            {key} : {params[key]}
          </li>
        ))
      }
      <MembersHeader />
      <MembersList />
    </div>
  )
}
