<template lang="pug">
.topbar
  img.topbar__logo(src="../assets/logo.png")
  h1.topbar__title BDI
  topbar__right
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
  height: 100px
  width 100%
  background #23262d
  display flex
  align-items center
  justify-content space-between

  &__right
    display flex
    align-items center
    justify-content space-between

</style>
