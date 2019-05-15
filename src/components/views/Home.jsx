import { h } from 'hyperapp'
import MembersCard from '../Members/MembersCard'

export default (state, actions) => {
  return (
    <div>
      <p>Home view</p>

      <main class="mdl-layout__content">
        <div class="mdl-grid bdi-content">

          <div oncreate={() => actions.members.getAll()}>
            <MembersCard data={state.members.data}/>
          </div>

          <div class="bdi-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--6-col-desktop mdl-grid">
            <div class="bdi-card-header mdl-grid">
              <div class="mdl-cell mdl-cell--12-col mdl-card__title-text">
                Trésorerie
              </div>
            </div>

            <div class="bdi-card-content mdl-grid">
              <div class="mdl-cell mdl-cell--6-col">
                0€ dans la banque
              </div>
              <div class="mdl-cell mdl-cell--6-col">
                100 000 000€ de dettes au BDE ESIPE
              </div>
              <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Déposer le bilan
              </button>
              <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Appeler Sylvie Donard à l'aide
              </button>
            </div>
          </div>

          <div class="bdi-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--6-col-desktop mdl-grid">
            <div class="bdi-card-header mdl-grid">
              <div class="mdl-cell mdl-cell--12-col mdl-card__title-text">
                Stocks
              </div>
            </div>

            <div class="bdi-card-content mdl-grid">
              <div class="mdl-cell mdl-cell--6-col">
                1000 bouteilles de Sangria du WEIMAC 2015
              </div>
              <div class="mdl-cell mdl-cell--6-col">
                Plein de rouleux de PQ jsp pourquoi
              </div>
              <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                commander de la race
              </button>
              <button class="mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                vendre la sangria
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
