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
  copyMembersEmail: () => (state, actions) => {
    console.log(state)
    console.log(actions)
    const clipboard = state.data.map(m => m.email).join('\t')
    console.log('copyMembersEmail')
    console.log('Clipboard : ', clipboard)
    copyToClipboard(clipboard)
  }
}
