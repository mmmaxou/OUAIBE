import API from './API'

export default () => {
  console.log('running test for api call')
  console.log('API : ', API)
  API.Connect.Login('admin', 'admin')
    .then(json => {
      console.log('json', json)
      setCookie('token', json.access_token, json.expires_in)
      const token = json.access_token
      console.log(token)
    })
    .catch(err => {
      console.error(err)
    })
}
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  const newCookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  // document.cookie = newCookie
  console.log('cookie : ', newCookie)
}
