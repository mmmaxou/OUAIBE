import { BASE_URL } from './Config'

export default {
  Login (email, password) {
    return new Promise((resolve, reject) => {
      if (!email) {
        reject(new Error('The email option is required\nUse : ConnextionInterface.Login(<email>, <password>);'))
      }
      if (!password) {
        reject(new Error('The password option is required\nUse : ConnextionInterface.Login(<email>, <password>);'))
      }

      const settings = {
        url: BASE_URL + `login?email=${email}&password=${password}`,
        method: 'POST',
        mode: 'cors',
        cache: 'default'
      }
      console.log(settings)
      fetch(settings)
        .then(res => resolve(res))
    })
  }
}
