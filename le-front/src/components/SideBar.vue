<template lang="pug">
.sidebar
  h2.sidebar__item(v-for="item in menu") {{ item }}
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
@import "../styles/texts"

.sidebar
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  padding 10px 0 10px 10px
  max-width 250px
  height 90vh
  background #23262d
  
  &__item
    background #30333c
    width 100%
    padding 20px 0 20px 20px
</style>
