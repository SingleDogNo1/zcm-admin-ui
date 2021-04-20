<template>
  <header class="admin-header">header</header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'AdminHeader',
  setup() {
    const state = reactive({
      msg: 'hello, admin-header'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss">
.admin-header {
  height: 50px;
  background: green;
}
</style>
