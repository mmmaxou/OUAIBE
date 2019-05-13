import { location } from '@hyperapp/router'

import API from '../API/API'
import CRUD from './CRUD'
import helpers from './_helpers'
import members from './members'

export default {
  location: location.actions,
  exampleSetState: (value) => (state) => ({
    ...state,
    input: {...state.input, value: value}
  }),
  logEvent: (payload) => (state) => {
    console.log(payload.name, payload.event)
    return state
  },
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
  helpers
}
