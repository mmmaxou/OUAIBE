import {
  BASE_URL
} from './Config'

export const createUri = (route, object) => {
  /// https://github.com/Freeboard/thingproxy
  const proxy = 'https://thingproxy.freeboard.io/fetch/'
  const uri = BASE_URL + route + '?'
  const params = Object.entries(object).map(pair => pair.join('=')).join('&')
  return proxy + uri + params
}

export const setCookie = (name, value, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 1000))
  const expires = 'expires=' + d.toUTCString()
  const newCookie = name + '=' + value + ';' + expires + ';path=/'
  // eslint-disable-next-line fp/no-mutation
  document.cookie = newCookie
  return newCookie
}

export const getCookie = (name) => {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

export const deleteCookie = (name) => {
  setCookie(name, '', -1)
}

export const serverError = (err) => {
  console.trace('Error Trace')
  // eslint-disable-next-line fp/no-throw
  throw new Error('Server Error :', err)
}
