<template>
    <div>
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
  components: {
    ModuleInstance
  },
  data () {
    return {
        moduleList: [
        { id: 0, text: 'module 0' },
        { id: 1, text: 'module 1' },
        { id: 2, text: 'module 2' }
      ]
    }
  },
}

</script>

<style>

</style>
