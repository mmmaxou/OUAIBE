/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import { h } from 'hyperapp'
import Chart from 'chart.js'

let chart
const transformToData = (transactions) => {
  // Filter unused dates
  const filteredByDates = transactions.filter(t => !!t.dateTransaction)

  // Compute the sum
  const summed = filteredByDates.map(t => ({
    ...t,
    sum: +(((t.input || 0) - (t.output || 0)).toFixed(2))
  }))

  // Sort by date
  // eslint-disable-next-line fp/no-mutating-methods
  const sortedByDate = summed.sort((a, b) => (new Date(a.dateTransaction)) > (new Date(b.dateTransaction)))

  const labels = []
  const values = []
  const inputs = []
  const outputs = []
  sortedByDate.forEach(t => {
    const index = labels.length - 1
    const month = t.dateTransaction.substring(0, 7)
    if (labels[index] !== month) {
      // Add the point
      labels[index + 1] = month
      values[index + 1] = t.sum
      inputs[index + 1] = t.input
      outputs[index + 1] = -t.output
    } else {
      values[index] += t.sum
      values[index] = +(values[index].toFixed(2))
      inputs[index] += t.input
      inputs[index] = +(inputs[index].toFixed(2))
      outputs[index] -= t.output
      outputs[index] = +(outputs[index].toFixed(2))
    }
  })

  // Compute sum
  const sum = []
  values.reduce((acc, inc, i) => {
    sum[i] = acc + inc
    return acc + inc
  }, 0)

  /// Helpers
  const chartColors = {
    red: 'rgb(255, 99, 132, 0.1)',
    redPlain: 'rgb(255, 99, 132)',
    green: 'rgba(145, 255, 123, 0.1)',
    greenPlain: 'rgba(145, 255, 123)',
    blue: 'rgba(54, 162, 235, 0.1)',
    bluePlain: 'rgb(54, 162, 235)',
    yellow: 'rgb(250, 214, 54)'
  }
  const datasets = [
    {
      label: 'Balance',
      backgroundColor: chartColors.blue,
      borderColor: chartColors.bluePlain,
      fill: true,
      pointRadius: 10,
      pointStyle: 'cross',
      borderWidth: 6,
      data: sum
    },
    {
      label: 'Différence',
      borderColor: chartColors.yellow,
      fill: false,
      pointRadius: 6,
      pointStyle: 'cross',
      data: values
    },
    {
      label: 'Gains',
      backgroundColor: chartColors.green,
      borderColor: chartColors.greenPlain,
      fill: true,
      pointRadius: 6,
      pointStyle: 'cross',
      borderWidth: 1,
      data: inputs
    },
    {
      label: 'Pertes',
      backgroundColor: chartColors.red,
      borderColor: chartColors.redPlain,
      fill: true,
      pointRadius: 6,
      pointStyle: 'cross',
      borderWidth: 1,
      data: outputs
    }
  ]
  const data = {
    labels,
    datasets
  }
  return data
}
const initChartJS = (e, transactions) => {
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
  if (transactions.length > 0) {
    updateChartJS(transactions)
  }
}
const updateChartJS = (transactions) => {
  if (transactions.length === 0) {
    return
  }
  const data = transformToData(transactions)
  chart.data = data
  chart.update()
}

export default (props) => {
  return (
    <div style="position: relative; height:100%; width:100%">
      <canvas
        data-count={props.data.length}
        id='transactionChart'
        width='1000'
        height='1000'
        class='chartjs'
        oncreate={e => initChartJS(e, props.data)}
        onupdate={() => {
          if (props.data.length >= 0) {
            updateChartJS(props.data)
          }
        }}></canvas>
    </div>
  )
}
