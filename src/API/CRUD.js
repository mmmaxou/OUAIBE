import {
  Connect
} from './Connect'
import {
  createUri,
  createOpt,
  handleServerResponse,
  handleServerError
} from './_helpers'

export default (endpoint) => {
  return {
    getAll () {
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint, { token })
        const opt = createOpt('GET')
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    },
    getOne (id) {
      console.assert(id, 'No id given')
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/' + id, { token })
        const opt = createOpt('GET')
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    },
    count () {
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/count', { token })
        const opt = createOpt('GET')
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    },
    create (obj) {
      console.assert(obj, 'No obj given')
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint, { token, ...obj })
        const opt = createOpt('POST')
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    },
    delete (id) {
      console.assert(id, 'No id given')
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/' + id, { token })
        const opt = createOpt('DELETE')
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    },
    update (id, obj) {
      console.assert(id, 'No id given')
      return new Promise(async (resolve, reject) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/' + id, { token, ...obj })
        const opt = createOpt('PUT')
        // console.log('opt : ', opt)
        fetch(url, opt)
          .then(handleServerResponse(resolve))
          .catch(handleServerError(reject))
      })
    }
  }
}
