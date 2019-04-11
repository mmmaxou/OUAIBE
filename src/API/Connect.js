import {
  createUri,
  setCookie,
  getCookie,
  deleteCookie,
  createOpt,
  error,
  success,
  handleServerError
} from './_helpers'
import {
  Structures
} from '../structures/Structures'

const createUriLogin = (params) => createUri('login', params)
const TOKEN_NAME = 'OUAIBE_TOKEN'
const login = (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email) {
      reject(new Error('The email option is required\nUse : ConnexionInterface.Login(<email>, <password>);'))
    }
    if (!password) {
      reject(new Error('The password option is required\nUse : ConnexionInterface.Login(<email>, <password>);'))
    }

    const url = createUriLogin({ email, password })
    const opt = createOpt('POST')

    fetch(url, opt)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(handleServerError(reject))
  })
}
export const Connect = {
  /**
   * Login and store the token
   *
   * @param {string} email The email
   * @param {string} password The password
   * @return {Promise}
   */
  loginAndStoreToken (email, password) {
    return new Promise((resolve, reject) => {
      login(email, password)
        .then(json => {
          if (json.message) {
            // Mot de passe ou identifiant incorrect
            reject(error(json))
          } else {
            // Identification reussie
            setCookie(TOKEN_NAME, json.access_token, json.expires_in)
            resolve(success(json.access_token))
          }
        })
        .catch(handleServerError(reject))
    })
  },

  /**
   * Return the stored Token or create a new one
   *
   * Creation is debug purpose only
   * @return {Promise}
   */
  async getToken () {
    const token = getCookie(TOKEN_NAME)
    if (token) {
      return token
    }
    const response = await Connect.loginAndStoreToken('admin', 'admin')
    const createdToken = response.data
    return createdToken
  },

  /**
   * Logout the user
   *
   * @return {Promise}
   */
  logout () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri('logout', { token })
      const opt = createOpt('POST')
      fetch(url, opt)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            // Logout successfull
            res.json().then(json => resolve(success(json.message)))
            deleteCookie(TOKEN_NAME)
          } else if (res.status >= 400 && res.status < 500) {
            res.json().then(json => {
              resolve(error(json))
            })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(handleServerError(reject))
    })
  },

  /**
   * Refresh the token
   *
   * @return {Promise}
   */
  refresh () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri('refresh', { token })
      const opt = createOpt('POST')
      fetch(url, opt)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            // refresh successful
            res.json().then(json => {
              resolve(success(json.access_token))
              setCookie(TOKEN_NAME, json.access_token, json.expires_in)
            })
          } else if (res.status >= 400 && res.status < 500) {
            console.log('res', res)
            /*
            res.json().then(json => {
              resolve(error(json))
            })
            */
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(handleServerError(reject))
    })
  },

  /**
   * Give information about the currently connected token
   *
   * @return {Promise}
   */
  me () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri('me', { token })
      const opt = createOpt('POST')
      fetch(url, opt)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            // Logout successfull
            res.json()
              .then(json => {
                const user = Structures.Member.create(json)
                resolve(success(user))
              })
          } else if (res.status >= 400 && res.status < 500) {
            res.json().then(json => {
              resolve(error(json))
            })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(handleServerError(reject))
    })
  }
}
