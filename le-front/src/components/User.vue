<template lang="pug">
.user
  img.user__picture(src="../assets/user.png")
  .user__text
    p.text__name {{ user.name }}
    p.text__role {{ user.role }}
</template>

<script>
export default {
  name: 'UserPicture',
  data () {
    return {
      user: {
        name: "Guillaume Lollier",
        role: "Vice-président",
      }
    }
  }
}

</script>

<style lang="stylus">
.user
  display flex
  align-items center

  &__picture
    height 50px
    border-radius 50%

  &__text
    .text__name
      font-weight 700

    .text__role
      color #a3a3a3
</style>
