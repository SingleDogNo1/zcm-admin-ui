<template>
  <div class="app">
    <Hello :name="name"></Hello>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'app',
  setup(props, ctx) {
    const state = reactive({
      name: 'hello, app11kjdasjkdhjksahdkas1'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>