import { h } from 'hyperapp'
import MemberShortEntry from './MemberShortEntry'
import MemberEntry from './MemberEntry'
import MemberForm from './MemberForm'

import Loader from '../Generic/Loader'

export default (props) => {
  return (
    <div class='bdi-table-content'>
      <div class='bdi-table-titles mdl-cell mdl-cell--12-col mdl-grid'>
        <div class='bdi-table-line mdl-cell mdl-cell--12-col mdl-grid'>
          <div class='mdl-cell mdl-cell--7-col mdl-cell--11-col-desktop mdl-cell--3-col-phone mdl-grid'>
            <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-typography--title'>Nom</div>
            <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-typography--title'>Rôle</div>
            <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-typography--title'>Mail</div>
            <div class='mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone mdl-typography--title'>Téléphone</div>
          </div>
        </div>
      </div>

      <div class='bdi-table-content mdl-grid'>
        {
          // Loading bar
          props.isLoading ? <Loader /> : ''
        }
        {
          props.data.map(elem => {
            if (props.selectedId === elem.id && props.currentAction === 'show') {
              return (
                <MemberEntry key={'membres-' + elem.id}
                  firstName={elem.firstName}
                  lastName={elem.lastName}
                  email={elem.email}
                  roleName={elem.role.name}
                  phoneNumber={elem.phoneNumber}
                  lastPaymentDate={elem.lastPaymentDate}
                  showDropDown={elem.id > 1}
                  delete={() => props.delete(elem.id)}
                  edit={() => props.select({id: elem.id, action: 'edit'})}
                />
              )
            }
            if (props.selectedId === elem.id && props.currentAction === 'edit') {
              props.getRoles()
              return (
                <MemberForm key={'membres-' + elem.id}
                  firstName={elem.firstName}
                  lastName={elem.lastName}
                  email={elem.email}
                  roleName={elem.role.name}
                  phoneNumber={elem.phoneNumber}
                  lastPaymentDate={elem.lastPaymentDate}
                  role_id={elem.role_id}
                  roles={props.roles}
                  update={() => props.update(elem.id)}
                  onChange={(data) => props.onChange({id: elem.id, data: data})}
                  cancel={() => props.select({id: elem.id, action: 'show'})}
                />
              )
            }
            return (
              <MemberShortEntry key={'membres-' + elem.id}
                onclick={() => props.select({id: elem.id})}
                firstName={elem.firstName}
                lastName={elem.lastName}
                email={elem.email}
                roleName={elem.role.name}
                phoneNumber={elem.phoneNumber}
              />
            )
          })
        }
      </div>

    </div>
  )
}
