import {
  CACHE_TIME
} from '../../config.json'
import eventbus from '../events'

const isOutOfDate = (date) => (new Date() - date >= CACHE_TIME)
const deleteById = (props, id) => props.filter(i => i.id !== id)
const getById = (props, id) => props.filter(i => i.id === id)
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
  getOne: ({id, forceRefresh = false}) => (state, actions) => {
    const actualData = state.data.filter(i => i.id === id)[0] || false
    if (!actualData || isOutOfDate(actualData.lastRefresh) || forceRefresh) {
      promises.getOne(id)
        .then(helpers.handleResponse)
        .then(response => actions.setOne({id: id, data: response.data, refresh: true}))
        .catch(err => {
          eventbus.emit('error', err)
          helpers.injectError(err)
        })
    }
    return state
  },
  update: (id) => (state) => {
    const actualData = getById(state.data, id)[0] || false
    if (actualData) {
      promises.update(id, actualData)
        .then(helpers.handleResponse)
        .then(res => {
          if (res.successful) {
            console.log('update : ' + res)
          } else {
            helpers.injectError(res)
          }
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
  setOne: ({id, data, refresh = false}) => (state) => {
    const newLastRefresh = new Date().getTime()
    const newData = {...getById(state.data, id)[0] || {}, ...data}
    return ({
      ...state,
      data: sortById([
        ...deleteById(state.data, id),
        {
          ...newData,
          lastRefresh: refresh ? newLastRefresh : newData.lastRefresh
        }
      ])
    })
  },
  select: ({id, action = 'show'}) => (state, actions) => {
    if (id >= 0) {
      actions.getOne({id: id, forceRefresh: true})
    }
    return ({
      ...state,
      currentAction: action,
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
