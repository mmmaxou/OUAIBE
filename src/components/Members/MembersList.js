import { h } from 'hyperapp'
import MemberShortEntry from './MemberShortEntry'

export default (props) => {
  return (
    <div>
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

      <div class='bdi-table-content mdl-cell mdl-cell--12-col mdl-grid'>
        {
          props.data.map(elem => {
            return <div key={'membres-' + elem.id} class='bdi-table-line mdl-cell mdl-cell--12-col mdl-grid'>
              <MemberShortEntry
                firstName={elem.firstName}
                lastName={elem.lastName}
                email={elem.email}
                roleName={elem.role.name}
                phoneNumber={elem.phoneNumber}
              />
            </div>
          })
        }
      </div>
    </div>
  )
}
