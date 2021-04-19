<template>
  <div class="app">
    <Hello :name="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({ name: 'admin ui' })
    return {
      ...toRefs(state)
    }
  }
})
</script>
