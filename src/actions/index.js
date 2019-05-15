import { location } from '@hyperapp/router'

import API from '../API/API'
import CRUD from './CRUD'
import helpers from './_helpers'
import members from './members'
import transactions from './transactions'

export default {
  location: location.actions,
  setPageName: (name) => (state) => {
    if (state.actualPage === name) {
      return state
    }
    return ({
      ...state,
      actualPage: name
    })
  },
  members: {...CRUD(API.Members, helpers), ...members},
  roles: CRUD(API.Roles, helpers),
  sponsors: CRUD(API.Sponsors, helpers),
  transactions: {...CRUD(API.Transactions, helpers), ...transactions},
  helpers
}
