<template lang="pug">
.notifications
  img.notifications__img(src="../assets/bell.png")
  .count.notifications__count 2
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
  &__count
    position absolute
    background #b91a43
    width 24px
    height 24px
    border-radius 12px
</style>
