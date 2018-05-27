<template lang="pug">
.equipment
  p matériel
  EquipmentDetails
</template>

<script>
import EquipmentDetails from '../components/EquipmentDetails'
export default {
  name: 'Equipment',
  data () {
    return {}
  },
  components: {
  	EquipmentDetails
  }
}
</script>

<style lang="stylus">

</style>
