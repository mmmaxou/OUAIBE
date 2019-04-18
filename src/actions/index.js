import { location } from '@hyperapp/router'

import API from '../API/API'
import CRUD from './CRUD'

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
  members: CRUD(API.Members),
  sponsors: CRUD(API.Sponsors)
}
