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
          <div class='mdl-cell mdl-cell--12-col'>
            <span class='bank'>{lastElementOf(state.transactions.chartData.datasets[0].data) || 0}€</span>
          </div>
          <button class='mdl-cell mdl-cell--3-col mdl-button mdl-button--raised'>
            Déposer le bilan
          </button>
          <button
            onclick={() => actions.helpers.injectError({data: { message: 'Elle est occupée :/' }})}
            class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent'>
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
              Commander de la race
            </button>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
              Vendre la sangria
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
                Commander de la race
            </button>
            <button class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                Vendre la sangria
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}
