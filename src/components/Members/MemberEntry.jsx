import { h } from 'hyperapp'
import MemberChange from './MemberChange.jsx'
import Dropdown from '../Generic/Dropdown'

export default (props) => (
  <div class="bdi-table-line bdi-table-line-open mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
    <div class="bdi-table-line-fields mdl-cell mdl-cell--7-col mdl-cell--11-col-desktop mdl-cell--3-col-phone mdl-grid">
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Nom</div>
        <div>{props.lastName}</div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Prénom</div>
        <div>{props.firstName}</div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Rôle</div>
        <div>{props.roleName}</div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Téléphone</div>
        <div>{props.phoneNumber}</div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Mail</div>
        <div>{props.email}</div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--2-col-phone">
        <div class="mdl-typography--title">Dernier paiment</div>
        <div>{props.lastPaymentDate}</div>
      </div>
    </div>
    {
      props.showDropDown ? (
        <div class="bdi-table-line-fields mdl-cell mdl-cell--5-col mdl-cell--1-col-desktop mdl-cell--3-col-phone mdl-grid">
          <Dropdown
            message=''
            icon='more_vert'
            options={[
              { message: 'éditer', handler: () => props.edit() },
              { message: 'supprimer', handler: () => props.delete() }
            ]}
          />
        </div>
      ) : ''
    }
  </div>
)
