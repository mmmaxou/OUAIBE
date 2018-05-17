<template lang="pug">
.app
  StaticUI
  router-view
</template>

<script>
import StaticUI from '@/components/StaticUI'

export default {
  name: 'App',
  components: {
    StaticUI
  }
}
</script>

<style lang="stylus">
html
  margin 0
  padding 0
  box-sizing border-box

*
  margin inherit
  padding inherit
  box-sizing inherit
</style>
