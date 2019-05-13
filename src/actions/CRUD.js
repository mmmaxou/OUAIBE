import {
  CACHE_TIME
} from '../../config.json'
import eventbus from '../events'

const isOutOfDate = (date) => (new Date() - date >= CACHE_TIME)
const deleteById = (props, id) => props.filter(i => i.id !== id)
// eslint-disable-next-line fp/no-mutating-methods
const sortById = (props) => [...props].sort((a, b) => a.id > b.id)

export default (promises, helpers) => ({
  getAll: (forceRefresh = false) => (state, actions) => {
    if (isOutOfDate(state.lastRefresh) || forceRefresh) {
      promises.getAll()
        .then(response => actions.set(response.data))
        .catch(helpers.injectError)
    }
    return state
  },
  getOne: (id, forceRefresh = false) => (state, actions) => {
    const userId = id
    const actualData = state.data.filter(i => i.id === userId)[0] || false
    if (!actualData || isOutOfDate(actualData.lastRefresh) || forceRefresh) {
      promises.getOne(userId)
        .then(helpers.handleResponse)
        .then(response => actions.setOne({id: userId, data: response.data}))
        .catch(err => {
          eventbus.emit('error', err)
          helpers.injectError(err)
        })
    }
    return state
  },
  set: (data) => (state) => {
    const lastRefresh = new Date().getTime()
    const dataWithRefresh = data.map(elem => ({...elem, lastRefresh: lastRefresh}))
    return ({
      ...state,
      lastRefresh: lastRefresh,
      data: sortById(dataWithRefresh)
    })
  },
  setOne: ({id, data}) => (state) => {
    const lastRefresh = new Date().getTime()
    return ({
      ...state,
      data: sortById([
        ...deleteById(state.data, id),
        {...data, lastRefresh: lastRefresh}
      ])
    })
  },
  select: (id) => (state, actions) => {
    if (id >= 0) {
      actions.getOne(id)
    }
    return ({
      ...state,
      selectedId: id
    })
  },
  deleteOne: (id) => (state, actions) => {
    const userId = id
    console.log('Try to delete : ', id)
    promises.delete(userId)
      .then(helpers.handleResponse)
      .then(res => {
        if (res.successful) {
          const newData = deleteById(state.data, id)
          actions.set(newData)
        } else {
          helpers.injectError(res)
        }
      })
    return state
  }
})
