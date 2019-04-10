import {
  createUri,
  setCookie,
  getCookie,
  serverError,
  deleteCookie,
  error,
  success
} from './_helpers'

import {
  createMember
} from '../structures/Member'

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

    const url = createUriLogin({
      email,
      password
    })
    const opt = {
      mode: 'cors',
      method: 'POST'
    }
    fetch(url, opt)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => {
        // Erreur serveur
        serverError(err)
        reject(err)
      })
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
            reject(error(json.message))
          } else {
            // Identification reussie
            setCookie(TOKEN_NAME, json.access_token, json.expires_in)
            resolve(success(json.access_token))
          }
        })
        .catch(err => {
          // Erreur serveur
          serverError(err)
          reject(err)
        })
    })
  },

  /**
   * Return the stored Token or create a new one
   *
   * Creation is debug purpose only
   * @return {Promise}
   */
  async getToken () {
    const token = getCookie(TOKEN_NAME) || await Connect.loginAndStoreToken('admin', 'admin').catch(serverError)
    return token
  },

  /**
   * Logout the user
   *
   * @return {Promise}
   */
  logout () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri('logout', {
        token
      })
      const opt = {
        mode: 'cors',
        method: 'POST'
      }
      fetch(url, opt)
        .then(res => {
          if (res.status === 200) {
            // Logout successfull
            res.json().then(json => resolve(success(json.message)))
            deleteCookie(TOKEN_NAME)
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(err => {
          // Erreur serveur
          serverError(err)
          reject(err)
        })
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
      const url = createUri('refresh', {
        token
      })
      const opt = {
        mode: 'cors',
        method: 'POST'
      }
      fetch(url, opt)
        .then(res => {
          if (res.status === 200) {
            // Logout successfull
            res.json()
              .then(json => {
                resolve(success(json.access_token))
                setCookie(TOKEN_NAME, json.access_token, json.expires_in)
              })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(err => {
          // Erreur serveur
          serverError(err)
          reject(err)
        })
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
      const url = createUri('me', {
        token
      })
      const opt = {
        mode: 'cors',
        method: 'POST'
      }
      fetch(url, opt)
        .then(res => {
          if (res.status === 200) {
            // Logout successfull
            res.json()
              .then(json => {
                const user = createMember(json)
                resolve(success(user))
              })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(err => {
          // Erreur serveur
          serverError(err)
          reject(err)
        })
    })
  }
}
