import { h } from 'hyperapp'

const Dropdown = ({value, height = 6}) => (
  <div class='progress' style={'height: ' + height + 'px;'}>
    <div class='progressbar bar' style={'width: ' + value + '%;'}></div>
    <div class='bufferbar bar'></div>
  </div>
)

export default Dropdown
