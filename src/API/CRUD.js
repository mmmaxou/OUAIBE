import {
  Connect
} from './Connect'
import {
  createUri,
  serverError,
  success,
  error
} from './_helpers'

export default (endpoint) => {
  return {
    getAll () {
      return new Promise(async (resolve) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint, {
          token
        })
        const opt = {
          mode: 'cors',
          method: 'GET'
        }
        fetch(url, opt)
          .then(res => {
            if (res.status === 200) {
              // Get all successful
              res.json().then(json => {
                resolve(success(json.data))
              })
            } else {
              // Unauthorized
              resolve(error(res))
            }
          })
          .catch(serverError)
      })
    },
    getOne (id) {
      console.assert(id, 'No id given')
      return new Promise(async (resolve) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/' + id, {
          token
        })
        const opt = {
          mode: 'cors',
          method: 'GET'
        }
        fetch(url, opt)
          .then(res => {
            if (res.status === 200) {
              // Get one
              res.json().then(json => {
                resolve(success(json.data))
              })
            } else {
              // Unauthorized
              resolve(error(res))
            }
          })
          .catch(serverError)
      })
    },
    create (obj) {
      console.assert(obj, 'No obj given')
      return new Promise(async (resolve) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint, {
          token,
          ...obj
        })
        const opt = {
          mode: 'cors',
          method: 'POST'
        }
        fetch(url, opt)
          .then(res => {
            if (res.status === 200) {
              res.json().then(json => {
                // Je ne sais pas si c'est mieux de mettre.data ou juste data
                resolve(success(json.data))
              })
            } else if (res.status === 422) {
              res.json().then(json => {
                resolve(error(json))
              })
            } else {
              // Unauthorized
              resolve(error(res))
            }
          })
          .catch(serverError)
      })
    },
    delete (id) {
      console.assert(id, 'No id given')
      return new Promise(async (resolve) => {
        const token = await Connect.getToken()
        const url = createUri(endpoint + '/' + id, {
          token
        })
        const opt = {
          mode: 'cors',
          method: 'DELETE'
        }
        fetch(url, opt)
          .then(res => {
            console.log('res', res)
            if (res.status === 200) {
              // Get one
              res.json().then(json => {
                resolve(success(json.data))
              })
            } else {
              // Unauthorized
              resolve(error(res))
            }
          })
          .catch(serverError)
      })
    }
  }
}
