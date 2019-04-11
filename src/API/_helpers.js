import {
  BASE_URL
} from './Config'

/**
 * Create a URL with the given object correctly formatted for the server
 *
 * @param {string} route
 * @param {Object} object
 */
export const createUri = (route, object) => {
  /// https://github.com/Freeboard/thingproxy
  const uri = BASE_URL + route + '?'
  const params = Object.entries(object)
    .map(pair => {
      if (pair[1] instanceof Array) {
        const flatted = pair[1].map(e => [pair[0], e].join('=')).join('&')
        return flatted
      } else {
        return pair.join('=')
      }
    })
    .join('&')
  return uri + params
  // const proxy = 'https://thingproxy.freeboard.io/fetch/'
  // return proxy + uri + params
}

/**
 * Add a cookie to the browser
 *
 * @param {string} cookieName
 * @param {string} cookieValue
 * @param {number} expirationSecond
 * @returns {string} Cookie created
 */
export const setCookie = (cookieName, cookieValue, expirationSecond) => {
  const d = new Date()
  d.setTime(d.getTime() + (expirationSecond * 1000))
  const expires = 'expires=' + d.toUTCString()
  const newCookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
  // eslint-disable-next-line fp/no-mutation
  document.cookie = newCookie
  return newCookie
}

/**
 * Return a cookie with the given cookieName
 *
 * @param {string} cookieName Name of the cookie
 * @returns {string} cookie found
 * @returns {null} cookie not found
 */
export const getCookie = (cookieName) => {
  const v = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

/**
 * Delete a cookie from the browser
 *
 * @param {string} cookieName Name of the cookie
 */
export const deleteCookie = (cookieName) => {
  setCookie(cookieName, '', -1)
}

/**
 * Throws a server error
 * @throws
 * @param {*} err Server error
 */
export const serverError = (err) => {
  console.trace('Error Trace')
  // eslint-disable-next-line fp/no-throw
  throw new Error('Server Error :', err)
}

export const success = (obj) => ({
  data: obj,
  successful: true
})

export const error = (obj) => ({
  data: obj,
  successful: false
})

export const handleServerResponse = (resolve) => (res) => {
  if (res.status >= 200 && res.status < 300) {
    // Get all successful
    res.json().then(json => {
      resolve(success(json.data))
    })
  } else if (res.status >= 400 && res.status < 500) {
    res.json().then(json => {
      resolve(error(json))
    })
  } else {
    // Unauthorized
    resolve(error(res))
  }
}
export const handleServerError = (reject) => (err) => {
  // Erreur serveur
  serverError(err)
  reject(err)
}
export const createOpt = (method) => ({
  method,
  mode: 'cors'
})
