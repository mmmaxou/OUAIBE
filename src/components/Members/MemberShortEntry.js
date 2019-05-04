import { h } from 'hyperapp'
import MemberChange from './MemberChange'

export default (props) => {
  return (
    <div onclick={() => props.onclick()} class='bdi-table-line mdl-cell mdl-cell--12-col mdl-grid'>
      <div class='bdi-table-line mdl-cell mdl-cell--12-col mdl-grid'>
        <div class='bdi-table-line-fields mdl-cell mdl-cell--7-col mdl-cell--11-col-desktop mdl-cell--3-col-phone mdl-grid'>
          <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone'>
            {props.lastName.toUpperCase()} {props.firstName}
          </div>
          <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone'>
            {props.roleName}
          </div>
          <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone'>
            {props.email}
          </div>
          <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone'>
            {props.phoneNumber}
          </div>
        </div>
        <div class='bdi-table-line-edit mdl-cell mdl-cell--1-col mdl-grid'>
          <button class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon' id='memberbtn0' data-upgraded=',MaterialButton,MaterialRipple'>
            <i class='material-icons'>more_vert</i>
            <span class='mdl-button__ripple-container'><span class='mdl-ripple'></span></span>
          </button>
          <div class='mdl-menu__container is-upgraded'><div class='mdl-menu__outline mdl-menu--bottom-right'></div><ul class='mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-js-ripple-effect--ignore-events' for='memberbtn0' data-upgraded=',MaterialMenu,MaterialRipple'>
            <li class='mdl-menu__item mdl-js-ripple-effect' tabindex='-1' data-upgraded=',MaterialRipple'>éditer<span class='mdl-menu__item-ripple-container'><span class='mdl-ripple'></span></span></li>
            <li class='mdl-menu__item mdl-js-ripple-effect' tabindex='-1' data-upgraded=',MaterialRipple'>supprimer<span class='mdl-menu__item-ripple-container'><span class='mdl-ripple'></span></span></li>
          </ul></div>
        </div>
      </div>
    </div>
  )
}
