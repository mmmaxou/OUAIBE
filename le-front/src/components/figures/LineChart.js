import {Line} from 'vue-chartjs'

export default Line.extend({
  data () {
    return {
      gradient: null,
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    


    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
      datasets: [
        {
          label: 'Bank account',
          borderColor: '#B91A43',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [1000, 500, 450, 400, 600, 750, 350, 550, 780, 200,450, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
})