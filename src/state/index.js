import { location } from '@hyperapp/router'

export default {
  location: location.state,
  members: {
    lastRefresh: 0,
    data: []
  },
  sponsors: {
    lastRefresh: 0,
    data: []
  }
}
