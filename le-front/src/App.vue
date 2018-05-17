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
.app
  color red
</style>
