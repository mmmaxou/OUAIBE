import API from './API'

export default async () => {
  console.log('running test for api call')
  console.log('API : ', API)
  // console.log('LOGIN : ', await API.Connect.loginAndStoreToken('admin', 'admin'))
  // console.log('TOKEN : ', await API.Connect.getToken())
  // console.log('LOGOUT : ', await API.Connect.logout())
  // console.log('REFRESH : ', await API.Connect.refresh())
  console.log('ME : ', await API.Connect.me())
}
