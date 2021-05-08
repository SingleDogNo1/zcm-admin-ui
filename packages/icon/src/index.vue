<template>
  <i :class="['iconfont', 'icon-' + name]"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>
