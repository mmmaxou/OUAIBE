import { h } from 'hyperapp'
import SponsorsHeader from '../Sponsors/SponsorsHeader'
import SponsorsList from '../Sponsors/SponsorsList'

export default (/* state, actions */) => {
  return (
    <div>
      <SponsorsHeader />
      <SponsorsList />
    </div>
  )
}
