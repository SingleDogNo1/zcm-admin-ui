<template>
  <div class="app">
    <Hello :name="name"></Hello>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'app',
  setup(props, ctx) {
    const state = reactive({
      name: 'admin ui'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>