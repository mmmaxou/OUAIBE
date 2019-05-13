import { h } from 'hyperapp'
import MembersHeader from '../Members/MembersHeader.jsx'
import MembersList from '../Members/MembersList.jsx'

export default (state, actions) => {
  return (
    <div key="members" class='bdi-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid' oncreate={() => actions.getAll()}>
      <MembersHeader count={state.data.length} />
      <MembersList
        data={state.data}
        isLoading={state.lastRefresh === 0}
        onElementClick={(id) => actions.select(id)}
        selectedId={state.selectedId}
      />
    </div>
  )
}
