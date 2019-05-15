import { h } from 'hyperapp'
import MemberForm from './MemberForm'

export default (props) => {
  return (
    <div class='bdi-table-header mdl-grid'>
      <div class='bdi-table-header mdl-grid'>
        <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-card__title-text'>
          {props.count} membres
        </div>

        <button
          class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
          data-upgraded=',MaterialButton,MaterialRipple'
          onclick={props.copyMembersEmail}>
          Copier tous les mails
          <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
        </button>
        {
          !props.showAdd ? (
            <button class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' data-upgraded=',MaterialButton,MaterialRipple'
              onclick={props.onAdd}
            >
              Ajouter un membre
              <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
            </button>
          ) : ''
        }
      </div>
      {
        props.showAdd ? (
          <MemberForm key={'new-membres'}
            firstName={props.newElement.firstName}
            lastName={props.newElement.lastName}
            email={props.newElement.email}
            phoneNumber={props.newElement.phoneNumber}
            lastPaymentDate={props.newElement.lastPaymentDate}
            role_id={props.newElement.role_id}
            roles={props.roles}
            getRoles={props.getRoles}
            save={() => props.add()}
            onChange={props.onChange}
            cancel={() => props.select({id: -1, action: 'show'})}
          />
        ) : ''
      }
    </div>
  )
}
