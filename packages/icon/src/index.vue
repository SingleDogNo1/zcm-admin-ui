<template>
  <i :class="['iconfont', name]"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DtIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>
