<template>
<section>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Role</th>
          <th>Facebook</th>
          <th>Numéro</th>
        </tr>
      </thead>
    </table>
  </div>
 
 <div class="scrollbar" id="scrollbar">
    <div class="force-overflow">
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
    </div>
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

 .tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
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

#scrollbar::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

</style>
