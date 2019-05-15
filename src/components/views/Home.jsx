import { h } from 'hyperapp'
import MembersCard from '../Members/MembersCard'
import LinksCard from '../Home/LinksCard'
import TransactionChart from '../Transactions/Chart'

const lastElementOf = (array) => {
  if (array.length === 0) return undefined
  return array[array.length - 1]
}

export default (state, actions) => {
  return (
    <main oncreate={() => {
      actions.members.getAll()
      actions.transactions.getAll()
    }} class='mdl-grid'>

      {console.log(state.transactions)}

      <MembersCard
        data={state.members.data}
        copyMembersEmail={actions.members.copyMembersEmail}/>

      <LinksCard />

      <div class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--8-col mdl-grid'>
        <div class='bdi-card-header mdl-grid'>
          <div class='mdl-cell mdl-cell--12-col mdl-card__title-text'>
            Trésorerie
          </div>
        </div>

        <div class='bdi-card-content mdl-grid'>
          <div class='mdl-cell mdl-cell--6-col'>
            <span class='bank'>{lastElementOf(state.transactions.chartData.datasets[0].data) || 0}€</span>
          </div>
          <div class='mdl-cell mdl-cell--6-col'>
                100 000 000€ de dettes au BDE ESIPE
          </div>
          <button class='mdl-cell mdl-cell--2-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                Déposer le bilan
          </button>
          <button class='mdl-cell mdl-cell--2-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                Appeler Sylvie Donard à l'aide
          </button>
          <TransactionChart
            data={state.transactions.chartData}/>
        </div>
      </div>

      <div class='mdl-grid mdl-grid-flat mdl-cell mdl-cell--4-col'>

        <div class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid'>
          <div class='bdi-card-header mdl-grid'>
            <div class='mdl-cell mdl-cell--12-col mdl-card__title-text'>
              Stocks
            </div>
          </div>

          <div class='bdi-card-content mdl-grid'>
            <div class='mdl-cell mdl-cell--6-col'>
              1000 bouteilles de Sangria du WEIMAC 2015
            </div>
            <div class='mdl-cell mdl-cell--6-col'>
              Plein de rouleux de PQ jsp pourquoi
            </div>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
              commander de la race
            </button>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
              vendre la sangria
            </button>
          </div>
        </div>

        <div class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid'>
          <div class='bdi-card-header mdl-grid'>
            <div class='mdl-cell mdl-cell--12-col mdl-card__title-text'>
                Stocks
            </div>
          </div>

          <div class='bdi-card-content mdl-grid'>
            <div class='mdl-cell mdl-cell--6-col'>
                1000 bouteilles de Sangria du WEIMAC 2015
            </div>
            <div class='mdl-cell mdl-cell--6-col'>
                Plein de rouleux de PQ jsp pourquoi
            </div>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                commander de la race
            </button>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                vendre la sangria
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}
