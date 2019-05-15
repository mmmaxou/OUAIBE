import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader.jsx'
import MembersList from '../Members/MembersList.jsx'

export default (state, actions) => {
  return (
    <div class='mdl-grid'>
      <div key="members" class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid' oncreate={() => actions.members.getAll()}>
        <MembersHeader
          count={state.members.data.length}
          copyMembersEmail={actions.members.copyMembersEmail}
          showAdd={state.members.currentAction === 'add'}
          onAdd={() => actions.members.select({id: -1, action: 'add'})}
          roles={state.roles.data}
          onChange={actions.members.setNew}
          newElement={state.members.newElement}
          getRoles={actions.getRoles}
          add={actions.members.add}
        />
        <MembersList
          data={state.members.data}
          roles={state.roles.data}
          isLoading={state.members.lastRefresh === 0}
          select={actions.members.select}
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
