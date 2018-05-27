<template>
    <div class="container">
      <div class="Bar__chart">
        <div class="Chart">
          <h2>Matériel</h2>
          <Bar></Bar>
        </div>
      </div>
    </div>
</template>

<script>
import BarChart from './figures/BarChart.js'
export default {
  name: 'app',
  components: {
    BarChart
  }
}
</script>

<style>

.Chart h2{
  text-align: center;
}
.container {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
.Chart {
  background: #23262D;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin: 0;
  margin-bottom: 20px;
  padding: 10px;
}
/*.Chart__list {
  flex-grow: 1;
  margin-right: 20px;

}*/
</style>