<template lang="pug">
.topbar
  img.topbar__logo(src="../assets/logo.png")
  h1.topbar__title BDI
  .topbar__right
    Notifications
    User
</template>

<script>
import Notifications from '@/components/Notifications'
import User from '@/components/User'

export default {
  name: 'TopBar',
  components: {
    Notifications,
    User
  }
}
</script>

<style lang="stylus">
.topbar
  height: 80px
  width 100vw
  background #23262d
  display flex
  align-items center
  justify-content space-between
  padding 0 10px
  
  &__logo
    padding 0

  &__right
    display flex
    align-items center
    justify-content space-between
</style>
