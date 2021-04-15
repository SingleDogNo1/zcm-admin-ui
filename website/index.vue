<template>
  <div class="app">
    <Hello :name="msg"></Hello>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import Hello from '../packages/hello'

export default defineComponent({
  name: 'app',
  components: {
    Hello
  },
  setup(props, ctx) {
    const state = reactive({
      msg: 'hello, app11kjdasjkdhjksahdkas1'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>