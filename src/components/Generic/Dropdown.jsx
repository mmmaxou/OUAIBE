import { h } from 'hyperapp'
import nestable from 'hyperapp-nestable'

const Dropdown = nestable(
  {
    revealed: false
  },
  {
    reveal: () => () => ({ revealed: true }),
    hide: () => () => ({ revealed: false }),
    switch: () => state => ({ revealed: !state.revealed })
  },
  (state, actions) => ({ message, options }) => (
    <div class='bdi-dropdown'>
      <div class='message'>
        <p>{message}</p>
        <button class='mdl-button mdl-js-ripple-effect mdl-button--icon' onclick={actions.switch}>
          <i class='material-icons' role='presentation'>arrow_drop_down</i>
        </button>
      </div>
      <ul class={'options bdi-navigation mdl-navigation mdl-shadow--2dp' + (state.revealed ? ' revealed' : '')}>
        {
          options.map(option => (
            <li class='item mdl-navigation__link mdl-js-ripple-effect' onclick={() => {
              actions.hide()
              option.handler()
            }}>
              {option.message}
            </li>
          ))
        }
      </ul>
    </div>
  ),
  'dropdown-'
)

export default Dropdown
