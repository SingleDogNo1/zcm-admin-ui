<template>
  <button
    :class="[
      'dt-button',
      type ? 'dt-button--' + type : '',
      {
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
type IButtonType = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
>

export default defineComponent({
  name: 'DtButton',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text'].includes(val)
      }
    },
    disabled: Boolean
  },
  emits: ['click'],
  setup(props, ctx) {
    //methods
    const handleClick = evt => {
      ctx.emit('click', evt)
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index';
</style>
