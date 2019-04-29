import {
  CACHE_TIME
} from '../../config.json'

const isOutOfDate = (date) => (new Date() - date >= CACHE_TIME)
const deleteById = (props, id) => props.filter(i => i.id !== id)

export default (promises) => ({
  getAll: (forceRefresh = false) => (state, actions) => {
    if (isOutOfDate(state.lastRefresh) || forceRefresh) {
      promises.getAll()
        .then(response => actions.set(response.data))
        .catch(err => console.log('error :', err.message))
    }
    return state
  },
  getOne: (id, forceRefresh = false) => (state, actions) => {
    const actualData = state.data.filter(i => i.id === id)[0] || false
    if (!actualData || isOutOfDate(actualData.lastRefresh) || forceRefresh) {
      promises.getOne(id)
        .then(response => actions.setOne({id: id, data: response.data}))
        .catch(err => console.log('error :', err.message))
    } else {
      console.log('no')
    }
    return state
  },
  set: (data) => (state) => {
    const lastRefresh = new Date().getTime()
    const dataWithRefresh = data.map(elem => ({...elem, lastRefresh: lastRefresh}))
    return ({
      ...state,
      lastRefresh: lastRefresh,
      data: dataWithRefresh
    })
  },
  setOne: ({id, data}) => (state) => {
    const lastRefresh = new Date().getTime()
    console.log('setOne state')
    console.log(id)
    return ({
      ...state,
      data: [
        ...deleteById(state.data, id),
        {...data, lastRefresh: lastRefresh}
      ]
    })
  }
})
