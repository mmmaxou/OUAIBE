import { h } from 'hyperapp'

export default ({message, discardMessage}) => {
  const withMessage = <div>
    <p>{message}</p>
    <button onclick={discardMessage}>x</button>
  </div>
  return message ? withMessage : <div />
}
