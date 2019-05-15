import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader.jsx'
import MembersList from '../Members/MembersList.jsx'

export default (state, actions) => {
  return (
    <div class="mdl-grid bdi-content">
      <div key="members" class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid' oncreate={() => actions.members.getAll()}>
        <MembersHeader
          count={state.members.data.length}
          copyMembersEmail={actions.members.copyMembersEmail}/>
        <MembersList
          data={state.members.data}
          roles={state.roles.data}
          isLoading={state.members.lastRefresh === 0}
          select={(id) => actions.members.select(id)}
          selectedId={state.members.selectedId}
          currentAction={state.members.currentAction}
          getRoles={actions.getRoles}
          delete={actions.members.deleteOne}
          update={actions.members.update}
          onChange={actions.members.setOne}
        />
      </div>
    </div>
  )
}
