import { h } from 'hyperapp'

export default ({message, discardMessage}) => {
  const withMessage = <div class='error-message mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid'>
    <p class='mdl-cell mdl-cell--11-col'>{message}</p>
    <div class='mdl-cell mdl-cell--1-col bdi-table-line-edit'>
      <button onclick={discardMessage} class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>
        <i class='material-icons' role='presentation'>close</i>
      </button>
    </div>
  </div>
  return message ? withMessage : <div />
}
