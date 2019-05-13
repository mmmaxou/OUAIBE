import { h } from 'hyperapp'
import MemberChange from './MemberChange'

export default (props) => {
  console.log(props.roles)
  return (
    <div class="bdi-table-line bdi-table-line-open mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
      <div class="bdi-table-line-fields mdl-cell mdl-cell--7-col mdl-cell--11-col-desktop mdl-cell--3-col-phone mdl-grid">
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Nom</div>
          <div>
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
                <input class="mdl-textfield__input" type="text" id="member4lastname" value={props.lastName || ''} />
              </div>
            </form>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Prénom</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4firstname" value={props.firstName || ''} />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Rôle</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <select id="member4role">
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
              <input class="mdl-textfield__input" type="text" id="member4phone" value={props.phoneNumber || ''} />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Mail</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4mail" value={props.email || ''} />
            </div>
          </form>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
          <div class="mdl-typography--title">Dernier paiment</div>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
              <input class="mdl-textfield__input" type="text" id="member4lastpayment" value={props.lastPaymentDate || ''} />
            </div>
          </form>
        </div>
      </div>
      <div class="bdi-table-line-edit mdl-cell mdl-cell--1-col mdl-grid">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="memberbtn4" data-upgraded=",MaterialButton,MaterialRipple">
          <i class="material-icons">more_vert</i>
          <span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 92.5097px; height: 92.5097px; transform: translate(-50%, -50%) translate(15px, 14px);"></span></span>
        </button>
        <div class="mdl-menu__container is-upgraded" style="right: 73.25px; top: 856px; width: 124px; height: 112px;"><div class="mdl-menu__outline mdl-menu--bottom-right" style="width: 124px; height: 112px;"></div>
          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-js-ripple-effect--ignore-events" for="memberbtn4" data-upgraded=",MaterialMenu,MaterialRipple" style="clip: rect(0px, 124px, 0px, 124px);">
            <li class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="">éditer<span class="mdl-menu__item-ripple-container"><span class="mdl-ripple"></span></span></li>
            <li class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="">supprimer<span class="mdl-menu__item-ripple-container"><span class="mdl-ripple"></span></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
