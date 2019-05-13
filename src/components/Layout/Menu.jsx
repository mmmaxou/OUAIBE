import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import Dropdown from '../Generic/Dropdown'

/** EXEMPLE */
const fakeGenericDisconnectHandler = () => console.log('TODO !!!')

export default () => (
  <div class='bdi-drawer mdl-layout__drawer'>
    <header class='bdi-drawer-header'>
      <div class='mdl-layout__header-row'>
        <span class='mdl-layout-title mdl'>Trésorier</span>
        <div class='mdl-layout-spacer'></div>
        <img src='/src/images/ios-desktop.png' class='bdi-avatar' />
      </div>
      <Dropdown
        message='Guillaume Lollier'
        options={[
          { message: 'Déconnexion', handler: fakeGenericDisconnectHandler }
        ]} />
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
      <Link to='/transactions' class='mdl-navigation__link'>
        <i class='material-icons' role='presentation'>monetization_on</i>
        Transactions
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
