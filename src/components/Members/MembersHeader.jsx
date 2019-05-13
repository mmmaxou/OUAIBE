import { h } from 'hyperapp'

export default ({count, copyMembersEmail}) => {
  return (
    <div class='bdi-table-header mdl-grid'>
      <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-card__title-text'>
        {count} membres
      </div>

      <button
        class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
        data-upgraded=',MaterialButton,MaterialRipple'
        onclick={copyMembersEmail}>
        Copier tous les mails
        <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
      </button>

      <button class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' data-upgraded=',MaterialButton,MaterialRipple'>
        Ajouter un membre
        <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
      </button>
    </div>
  )
}
