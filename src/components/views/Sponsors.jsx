import { h } from 'hyperapp'
import SponsorsHeader from '../SponsorsHeader'
import SponsorsList from '../SponsorsList'

export default (/* state, actions */) => {
  return (
    <div>
      <SponsorsHeader />
      <SponsorsList />
    </div>
  )
}
