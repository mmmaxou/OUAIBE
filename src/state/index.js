import { location } from '@hyperapp/router'

export default {
  location: location.state,
  actualPage: '',
  metadatas: {
    lastRefresh: 0,
    siteTitle: 'MyAssociation',
    siteDescription: '',
    siteColor: '#333',
    siteLogo: ''
  },
  members: {
    lastRefresh: 0,
    selectedId: -1,
    data: []
  },
  sponsors: {
    lastRefresh: 0,
    selectedId: -1,
    data: []
  }
}
