<template>
    <div id="main">

      <h1>{{ msg }}</h1>
      <h2 v-on:click="test">Modules here</h2>

      <ModuleInstance
          v-for="instance in moduleList"
          v-bind:text="instance.text"
          v-bind:key="instance.id">
      </ModuleInstance>
    </div>
</template>

<script>
import ModuleInstance from '@/components/ModuleInstance'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'GITHUB',
      moduleList: [
        { id: 0, text: 'module 0' },
        { id: 1, text: 'module 1' },
        { id: 2, text: 'module 2' }
      ]
    }
  },
  components: {
    ModuleInstance
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
