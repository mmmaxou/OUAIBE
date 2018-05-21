<template>
<section>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
    </table>
  </div>

  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>Justine</td>
          <td>Présidente </td>
          <td>Justine</td>
          <td>06.06.06.06</td>
        </tr>
        <tr>
          <td>Guillaume</td>
          <td>Vice-Président</td>
          <td>PTDR</td>
          <td>06.06.06.06</td>
        </tr>

        <tr>
          <td>Guillaume</td>
          <td>Vice-Président</td>
          <td>PTDR</td>
          <td>06.06.06.06</td>
        </tr>
        <tr>
          <td>Guillaume</td>
          <td>Vice-Président</td>
          <td>PTDR</td>
          <td>06.06.06.06</td>
        </tr>
        <tr>
          <td>Guillaume</td>
          <td>Vice-Président</td>
          <td>PTDR</td>
          <td>06.06.06.06</td>
        </tr>
        <tr>
          <td>Guillaume</td>
          <td>Vice-Président</td>
          <td>PTDR</td>
          <td>06.06.06.06</td>
        </tr>
      </tbody>
    </table>
  </div>

</section>

</template>

<script>
    import Vue from 'vue'
    export default {
      name: 'Table'
      }

</script>

<style lang="css">

.tbl-header{
  margin: 0;
  padding: 0;
}
 .tbl-content{
  border: 1.5px solid rgba(183,26,66,0.7);
}

th{
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: #B71A42;
  font-weight: bold;
  text-transform: uppercase;

}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}


</style>
