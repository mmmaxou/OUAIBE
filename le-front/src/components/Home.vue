<template>
    <div id="main">

      <h1>{{ msg }}</h1>
      <h2 v-on:click="test">Modules here</h2>

      <Modules />
    </div>
</template>

<script>
import Modules from '@/components/Modules'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'GITHUB'
    }
  },
  components: {
    Modules
  },
  methods: {
    test: function () {
      this.msg += 'mdr'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
