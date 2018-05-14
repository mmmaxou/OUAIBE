<template>
  <div id="app">
    <TopBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style>
#app {

}
</style>
