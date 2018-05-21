import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Race', 'Manger', 'Vaiselle', 'Matériel'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [1000, 250, 10, 150]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}