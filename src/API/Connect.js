import {
  createUri,
  setCookie,
  getCookie,
  serverError,
  deleteCookie
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
      .catch(serverError)
  })
}
const Connect = {
  /**
   * @brief
   * Login and store the token
   *
   * @param {string} email
   * @param {string} password
   *
   * If successful, return the token :
   * @return {string}
   * If there is a server error, return the server error :
   * @return {Error}
   * If there is a connection error, return the message
   * @return {Error}
   */
  loginAndStoreToken (email, password) {
    return new Promise((resolve, reject) => {
      login(email, password)
        .then(json => {
          if (json.message) {
            // Mot de passe ou identifiant incorrect
            reject(json.message)
            console.error(json.message)
          } else {
            // Identification reussie
            setCookie(TOKEN_NAME, json.access_token, json.expires_in)
            resolve(json.access_token)
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
   * @brief
   * Return the stored Token or create a new one
   *
   * Creation is debug purpose only
   * @return {string}
   */
  async getToken () {
    const token = getCookie(TOKEN_NAME) || await Connect.loginAndStoreToken('admin', 'admin').catch(serverError)
    return token
  },

  /**
   * @brief
   * Logout the user
   *
   * @param {string=} userToken
   *
   * If successful, return the message :
   * @return {string}
   * If there is a server error, return the server error :
   * @return {Error}
   * If the token is invalid, return the message
   * @return {Error}
   */
  logout () {
    return new Promise(async (resolve) => {
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
            res.json().then(json => resolve(json.message))
            deleteCookie(TOKEN_NAME)
          } else {
            // Unauthorized
            resolve(res)
          }
        })
        .catch(serverError)
    })
  },

  /**
   * @brief
   * Refresh the token
   *
   * @param {string=} userToken
   *
   * If successful, return the new token :
   * @return {string}
   * If there is a server error, return the server error :
   * @return {Error}
   */
  refresh () {
    return new Promise(async (resolve) => {
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
                resolve(json.access_token)
                setCookie(TOKEN_NAME, json.access_token, json.expires_in)
              })
          } else {
            // Unauthorized
            resolve(res)
          }
        })
        .catch(serverError)
    })
  },

  me () {
    return new Promise(async (resolve) => {
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
                resolve(user)
              })
          } else {
            // Unauthorized
            resolve(res)
          }
        })
        .catch(serverError)
    })
  }
}

export default Connect
