import { h } from 'hyperapp'
import MemberChange from './MemberChange'
import Dropdown from '../Generic/Dropdown'

export default (props) => {
  return (
    <div class="bdi-table-line bdi-table-line-open mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
      <div class="bdi-table-line-fields mdl-cell mdl-cell--7-col mdl-cell--11-col-desktop mdl-cell--3-col-phone mdl-grid">
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Nom</div>
          <div>
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
                <input class="mdl-textfield__input" type="text" id="member4lastname"
                  value={props.lastName || ''}
                  oninput={(e) => props.onChange({lastName: e.target.value})}
                />
              </div>
            </form>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Prénom</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4firstname"
                value={props.firstName || ''}
                oninput={(e) => props.onChange({firstName: e.target.value})}
              />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Rôle</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <select id="member4role" onchange={(e) => { props.onChange({role_id: e.target.value}) }} >
                {
                  props.roles.map(elem => {
                    return (
                      <option value={elem.id} selected={elem.id === props.role_id}>
                        {elem.name}
                      </option>
                    )
                  })
                }
              </select>

            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Téléphone</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4phone"
                value={props.phoneNumber || ''}
                oninput={(e) => props.onChange({phoneNumber: e.target.value})}
              />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Mail</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4mail"
                value={props.email || ''}
                oninput={(e) => props.onChange({email: e.target.value})}
              />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Dernier paiment</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4lastpayment"
                value={props.lastPaymentDate || ''}
                oninput={(e) => props.onChange({lastPaymentDate: e.target.value})}
              />
            </div>
          </form>
        </div>
        <button onclick={() => props.update()}
          class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-upgraded=",MaterialButton,MaterialRipple">
          Enregistrer
          <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span>
        </button>
      </div>
      {
        <div class="bdi-table-line-fields mdl-cell mdl-cell--5-col mdl-cell--1-col-desktop mdl-cell--3-col-phone mdl-grid">
          <Dropdown
            message=''
            icon='more_vert'
            options={[
              { message: 'annuler', handler: () => props.cancel() },
              { message: 'supprimer', handler: () => props.delete() }
            ]}
          />
        </div>
      }
    </div>
  )
}
