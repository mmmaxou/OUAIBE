<template lang="pug">
.app
  TopBar.app__topbar
  .main
    SideBar.main__sidebar
    .router-container.main__router-container(ref="container")
      router-view
</template>

<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
    TopBar, SideBar
  }
}
</script>

<style lang="stylus">
html
  margin 0
  padding 0
  box-sizing border-box
  background #222328
  width 100vw
  overflow-x hidden

*
  margin inherit
  padding inherit
  box-sizing inherit

.app
  display flex
  flex-direction column

  .main
    display flex
    flex-direction row

    .topbar
      width 100%
      flex-grow 1

    .router-container
      padding 20px
      width 100%
</style>
