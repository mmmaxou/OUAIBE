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
    clearTimeout(state.timeout)
    return {
      ...state,
      timeout: setTimeout(actions.discardMessage, 20000),
      message
    }
  },
  injectError: error => (state, actions) => {
    clearTimeout(state.timeout)
    return {
      ...state,
      timeout: setTimeout(actions.discardMessage, 20000),
      error: error.data.message
    }
  },
  discardMessage: () => state => {
    clearTimeout(state.timeout)
    return {
      ...state,
      timeout: 0,
      message: '',
      error: ''
    }
  }
}
