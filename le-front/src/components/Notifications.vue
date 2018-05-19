<template lang="pug">
.notifications
  img.notifications__img(src="../assets/bell.png")
  .notifications__count
  .notifications__text 2
</template>

<script>
export default {
  name: 'UserPicture',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.notifications
  position relative
    
  &__count
    position absolute
    top -10px
    right 10px
    background #b91a43
    width 20px
    height 20px
    border-radius 50%

  &__text
    position absolute
    top -10px
    right 8px
    line-height 20px
    font-size 0.6em
    font-weight 900
</style>
