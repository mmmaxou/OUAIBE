import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Race', 'Manger', 'Vaiselle', 'Matériel'],
      datasets: [
        {
          backgroundColor: [
            '#B71A42',
            '#3C153B',
            '#6F112A',
            '#6F114B'
          ],
          data: [1000, 250, 10, 150]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}