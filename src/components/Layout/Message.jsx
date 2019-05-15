import { h } from 'hyperapp'

export default ({error, message, discardMessage}) => {
  const withMessage = <div class='message-valid mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid'>
    <p class='mdl-cell mdl-cell--11-col'>{message}</p>
    <div class='mdl-cell mdl-cell--1-col bdi-table-line-edit'>
      <button onclick={discardMessage} class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>
        <i class='material-icons' role='presentation'>close</i>
      </button>
    </div>
  </div>
  const withError = <div class='message-error mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid'>
    <p class='mdl-cell mdl-cell--11-col'>{error}</p>
    <div class='mdl-cell mdl-cell--1-col bdi-table-line-edit'>
      <button onclick={discardMessage} class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>
        <i class='material-icons' role='presentation'>close</i>
      </button>
    </div>
  </div>
  if (message || error) {
    return <div id='message-wrapper' class='mdl-grid'>
      {message ? withMessage : null}
      {error ? withError : null}
    </div>
  } else {
    return <div />
  }
}
