export default {
  handleResponse: response => {
    return new Promise((resolve, reject) => {
      if (response.successful) {
        resolve(response)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          data: {
            message: JSON.stringify(response.data).replace(/\{"'\}/g, '')
          }
        })
      }
    })
  },
  injectMessage: message => (state, actions) => {
    setTimeout(actions.discardMessage, 20000)
    return {
      ...state,
      message
    }
  },
  injectError: error => (state, actions) => {
    setTimeout(actions.discardMessage, 20000)
    return {
      ...state,
      error: error.data.message
    }
  },
  discardMessage: () => state => {
    return {
      ...state,
      message: '',
      error: ''
    }
  }
}
