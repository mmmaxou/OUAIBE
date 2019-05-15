/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import {
  Structures
} from '../structures/Structures'

const deleteById = (props, id) => props.filter(i => i.id !== id)
const getById = (props, id) => props.filter(i => i.id === id)
// eslint-disable-next-line fp/no-mutating-methods
const sortById = (props) => [...props].sort((a, b) => a.id > b.id)

const transformToChartData = (transactions) => {
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
    let s = +((acc + inc).toFixed(2))
    sum[i] = s
    return s
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
  const datasets = [{
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
  const chartData = {
    labels,
    datasets
  }
  return chartData
}

export default {
  set: (data) => (state) => {
    const lastRefresh = new Date().getTime()
    const dataWithRefresh = data.map(elem => ({
      ...elem,
      lastRefresh: lastRefresh
    }))

    /// NEW
    const newData = sortById(dataWithRefresh)
    const chartData = transformToChartData(newData)

    const newState = ({
      ...state,
      lastRefresh: lastRefresh,
      chartData,
      data: newData
    })
    return newState
    /// END NEW
  },
  setOne: ({ id, data, refresh = false, deselect = false }) => (state) => {
    const newLastRefresh = new Date().getTime()
    const newData = {
      ...getById(state.data, id)[0] || {},
      ...data
    }
    const newState = ({
      ...state,
      selectedId: deselect ? -1 : state.selectedId,
      data: sortById([
        ...deleteById(state.data, id),
        {
          ...newData,
          lastRefresh: refresh ? newLastRefresh : newData.lastRefresh
        }
      ])
    })
    const chartData = transformToChartData(newState.data)
    newState.chartData = chartData
    return newState
  },
  generator: (m) => {
    return Structures.Transaction.createNew(m.dateTransaction, m.output, m.input, m.shortDescription)
  }
}
