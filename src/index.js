import {
  app
} from 'hyperapp'

import { location } from '@hyperapp/router'
import actions from './actions'
import state from './state'
import view from './components/views/Main'
import runTestAPI from './API/Tests'
import eventbus from './events'

runTestAPI()

const main = app(state, actions, view, document)

// Event Error handling
eventbus.on('error', err => main.helpers.injectError(err))

// Router Hyperapp
const unsubscribe = location.subscribe(main.location)
console.assert('unsubscribe: ', unsubscribe)
