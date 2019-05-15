import { h } from 'hyperapp'
import Progress from '../Generic/Progress'

export default (props) => {
  // 1000 * 60 * 60 * 24 * 365
  const isOutOfDate = (date) => (new Date() - date >= 31536000000)
  const unpayingArray = props.data.filter(e => {
    if (e.lastPaymentDate == null) {
      return true
    } else {
      return isOutOfDate(new Date(e.lastPaymentDate))
    }
  })
  console.log('unpaying :', unpayingArray)
  const unpaying = unpayingArray.length
  const percent = unpaying / props.data.length * 100

  return (
    <div class="bdi-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-grid">
      <div class="bdi-card-header mdl-grid">
        <div class="mdl-cell mdl-cell--12-col mdl-card__title-text">Membres</div>
      </div>

      {console.log(props)}
      <div class="bdi-card-content mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
          Il y a {props.data.length || '0'} membres
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          { unpaying } ont payés il y a plus d'un an
          <Progress value={ percent } height='12'/>
        </div>

        <button
          class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
          data-upgraded=',MaterialButton,MaterialRipple'
          onclick={() => {
            props.copyMembersEmail()
          }}>
          Copier tous les mails
          <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
        </button>

        <a
          class='mdl-cell mdl-cell--6-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
          href='/members'>
          Ajouter
        </a>
      </div>
    </div>
  )
}
