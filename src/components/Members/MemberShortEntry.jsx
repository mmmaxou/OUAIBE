import { h } from 'hyperapp'
import MemberChange from './MemberChange.jsx'

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
      </div>
    </div>
  )
}
