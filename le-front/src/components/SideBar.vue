<template lang="pug">
.sidebar
  h2.sidebar__item(v-for="item, index in menu" :key="index") {{ item.name }}
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      "menu" : [
        { name: "home", url: "" },
        { name: "membres", url: "members" },
        { name: "matériel", url: "equipment" },
        { name: "trésorerie", url: "funds" },
        { name: "sponsors", url: "sponsors" },
        { name: "configuration", url: "config" },
        { name: "agenda", url: "agenda" },
        { name: "déconnexion", url: "logout" }
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
  width 250px
  height 90vh
  background #23262d
  
  &__item
    background #30333c
    width 100%
    padding 20px 0 20px 20px
</style>
