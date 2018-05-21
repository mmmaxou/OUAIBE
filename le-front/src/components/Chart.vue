<template>
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Trésorerie</h2>
          <line-example></line-example>
        </div>

        <div class="Chart">
          <h2>Bureau</h2>
          <Table></Table>
        </div>
      </div>
      <div class="Chart__list">
        <div class="Chart">
          <h2>Matériel</h2>
          <Doughnut></Doughnut>
        </div>
        <div class="Chart">
          <h2>Calendar</h2>
          <p>placeholder for the real one</p>
          <Agenda></Agenda>
        </div>
      </div>


    </div>
</template>

<script>
import LineExample from './figures/LineChart.js'
import Doughnut from './figures/DoughnutChart.js'
import Table from './figures/Table.vue'
import Agenda from './figures/Agenda.vue'
export default {
  name: 'app',
  components: {
    LineExample,
    Doughnut,
    Table,
    Agenda

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
.Chart__list {
  flex-grow: 1;
  margin-right: 20px;

}
</style>