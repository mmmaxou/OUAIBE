import { h } from 'hyperapp'

export default ({pageName}) => (
  <header class='bdi-header mdl-layout__header'>
    <div class='mdl-layout__header-row'>
      <span class='mdl-layout-title'>
        {pageName || 'Home'}
      </span>
      <div class='mdl-layout-spacer'></div>
      <div class='mdl-textfield mdl-js-textfield mdl-textfield--expandable'>
        <label class='mdl-button mdl-js-button mdl-button--icon' for='search'>
          <i class='material-icons'>search</i>
        </label>
        <div class='mdl-textfield__expandable-holder'>
          <input class='mdl-textfield__input' type='text' id='search' />
          <label class='mdl-textfield__label' for='search'>Enter your query...</label>
        </div>
      </div>
      <button class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon' id='hdrbtn'>
        <i class='material-icons'>more_vert</i>
      </button>
      <ul class='mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right' for='hdrbtn'>
        <li class='mdl-menu__item'>A propos</li>
        <li class='mdl-menu__item'>informations légales</li>
      </ul>
    </div>
  </header>
)
