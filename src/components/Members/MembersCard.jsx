import { h } from 'hyperapp'

export default (data) => {
  return (
    <div class="bdi-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--6-col-desktop  mdl-grid">
      <div class="bdi-card-header mdl-grid">
        <div class="mdl-cell mdl-cell--12-col mdl-card__title-text">
          Membres
        </div>
      </div>
      <div class="bdi-card-content mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
          {console.log(data)}
          {data.length || '0'} membres
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          21 membres au bureau
        </div>
        <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Copier tous les mails
        </button>
        <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Ajouter un membre
        </button>
      </div>
    </div>
  )
}
