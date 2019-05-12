import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default () => (
  <div class='bdi-drawer mdl-layout__drawer'>
    <header class='bdi-drawer-header'>
      <div class='mdl-layout__header-row'>
        <span class='mdl-layout-title mdl'>Trésorier</span>
        <div class='mdl-layout-spacer'></div>
        <img src='/src/images/ios-desktop.png' class='bdi-avatar' />
      </div>
      <div class='bdi-avatar-dropdown'>
        <span><strong>Guillaume Lollier</strong></span>
        <div class='mdl-layout-spacer'></div>
        <button id='accbtn' class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>
          <i class='material-icons' role='presentation'>arrow_drop_down</i>
        </button>
        <ul class='mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect' for='accbtn'>
          <li class='mdl-menu__item'>Déconnexion</li>
        </ul>
      </div>
    </header>
    <nav class='bdi-navigation mdl-navigation'>
      <Link to='/' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>home</i>
        Home
      </Link>
      <Link to='/members' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>contacts</i>
        Membres
      </Link>
      <Link to='/materials' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>shopping_cart</i>
        Materials
      </Link>
      <Link to='/roles' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>supervisor_account</i>
        Roles
      </Link>
      <Link to='/sponsors' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>airport_shuttle</i>
        Sponsors
      </Link>
    </nav>
  </div>
)
