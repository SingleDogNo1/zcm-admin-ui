<template>
  <div>
    <h2>Hello, {{ name }} !</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface State {
  msg: string
}

export default defineComponent({
  name: 'Hello',
  props: {
    name: {
      type: String,
      default: 'admin UI'
    }
  },
  setup() {
    const state = reactive<State>({
      msg: 'aaa'
    })

    console.log('state.msg :>> ', state.msg)

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
h2 {
  color: red;
}
</style>
