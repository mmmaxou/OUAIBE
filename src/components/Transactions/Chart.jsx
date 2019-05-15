/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import { h } from 'hyperapp'
import Chart from 'chart.js'

let chart
const initChartJS = (e) => {
  Chart.defaults.global.defaultFontColor = 'white'
  const ctx = e.getContext('2d')
  chart = new Chart(ctx, {
    type: 'line',
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Compte en banque'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Mois'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Valeur'
          }
        }]
      }
    }
  })
}
const updateChartJS = (data) => {
  console.log('From chart : Data : ', data)
  if (data.labels.length === 0) {
    return
  }
  chart.data = data
  chart.update()
}

export default (props) => {
  return (
    <div style="position: relative; height:100%; width:100%">
      <canvas
        data-count={props.data.labels.length}
        id='transactionChart'
        width='1000'
        height='1000'
        class='chartjs'
        oncreate={e => initChartJS(e, props.data)}
        onupdate={() => { updateChartJS(props.data) }}></canvas>
    </div>
  )
}
