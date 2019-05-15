import eventbus from '../events'

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  // eslint-disable-next-line fp/no-mutation
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export default {
  copyMembersEmail: () => (state) => {
    const clipboard = state.data.map(m => m.email).join('\t')
    copyToClipboard(clipboard)
    eventbus.emit('message', 'Les mails ont été copiés')
    return state
  }
}
