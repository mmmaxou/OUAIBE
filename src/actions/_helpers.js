export default {
  handleResponse: response => {
    return new Promise((resolve, reject) => {
      if (response.successful) {
        resolve(response)
      } else {
        reject(response.data)
      }
    })
  },
  injectError: error => state => {
    return {
      ...state,
      message: error.data.message
    }
  },
  discardMessage: () => state => {
    return {
      ...state,
      message: ''
    }
  }
}
