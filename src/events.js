const events = {}

export default {
  emit (eventName, payload) {
    if (!events[eventName]) {
      return
    }
    events[eventName].forEach(listener => {
      listener(payload)
    })
  },
  on (eventName, callback) {
    if (!events[eventName]) {
    // eslint-disable-next-line fp/no-mutation
      events[eventName] = []
    }
    // eslint-disable-next-line fp/no-mutating-methods
    events[eventName].push(callback)
  }
}
