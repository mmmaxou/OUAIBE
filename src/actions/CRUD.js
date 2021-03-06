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
        })
    }
    return state
  },
  update: (id) => async (state, actions) => {
    const m = getById(state.data, id)[0] || false
    if (m) {
      const generated = actions.generator(m)
      const res = await promises.update(id, generated)
      helpers.handleResponse(res)
        .then(success => {
          eventbus.emit('message', `L'entrée à bien été modifié`)
          actions.setOne({ id, data: success.data, refresh: true, deselect: true })
        })
        .catch(err => {
          eventbus.emit('error', err)
        })
    }
    return state
  },
  add: () => async (state, actions) => {
    const data = {
      ...state.newElement
    }
    const generated = actions.generator(data)
    console.log(generated)
    if (!generated) {
      eventbus.emit('error', { data: { message: 'L\'entrée que vous souhaitez créer est invalide :/' } })
      return state
    }
    const res = await promises.create(generated)
    helpers.handleResponse(res)
      .then(success => {
        console.log('success: ', success)
        eventbus.emit('message', `L'entrée à bien été ajouté`)
        actions.getAll()
      })
      .catch(err => {
        eventbus.emit('error', err)
      })
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
  setNew: (data) => (state) => {
    const newElement = {...state.newElement, ...data}
    return ({
      ...state,
      newElement: newElement
    })
  },
  setOne: ({id, data, refresh = false, deselect = false}) => (state) => {
    const newLastRefresh = new Date().getTime()
    const newData = {...getById(state.data, id)[0] || {}, ...data}
    return ({
      ...state,
      selectedId: deselect ? -1 : state.selectedId,
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
    promises.delete(userId)
      .then(helpers.handleResponse)
      .then(res => {
        if (res.successful) {
          const newData = deleteById(state.data, id)
          actions.set(newData)
          eventbus.emit('message', 'L\'entrée à bien été supprimé')
        } else {
          eventbus.emit('error', res)
        }
      })
    return state
  }
})
