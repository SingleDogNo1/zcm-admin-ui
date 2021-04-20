<template>
  <div class="nav">sidebar</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Nav',
  setup() {
    const state = reactive({
      msg: 'hello, nav'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss">
.nav {
  color: red;
}
</style>
