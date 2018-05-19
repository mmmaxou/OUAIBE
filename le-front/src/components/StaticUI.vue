<template lang="pug">
.staticui
  TopBar
  SideBar
</template>

<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'StaticUI',
  components: {
    TopBar,
    SideBar
  }
}

</script>

<style lang="stylus">

</style>
