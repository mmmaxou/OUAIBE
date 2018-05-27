import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['8.6', '1664', 'Blue Vodka', 'Wisky', 'Rhum'],
      datasets: [
        {
          label: 'Alcools',
          backgroundColor: '#f87979',
          data: [86, 16666, 1000, 589, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
