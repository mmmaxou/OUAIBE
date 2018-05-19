<template>
    <div class="module-instance">
        {{ text }}
    </div>
</template>

<script>

export default {
  props: ['text'],
  data () {
  }
}

</script>

<style>
.module-instance {
  display: flex;
  border: 1px solid black;
}
</style>
