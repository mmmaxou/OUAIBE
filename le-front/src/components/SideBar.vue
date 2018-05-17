<template lang="pug">
.sidebar
  h2(v-for="item in menu") {{ item }}
</template>

<script>

export default {
  name: 'SideBar',
  data () {
    return {
      "menu" : [
        "home",
        "membres",
        "matériel",
        "trésorerie",
        "sponsors",
        "configuration",
        "agenda",
        "déconnexion"
      ]
    }
  }
}

</script>

<style lang="stylus">
.sidebar
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 200px
  background #000
</style>
