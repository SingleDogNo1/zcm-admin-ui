<template>
  <button
    :class="[
      'z-button',
      type ? 'z-button--' + type : '',
      size ? 'z-button--' + size : '',
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="['iconfont', 'icon-' + icon]"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
type ButtonSize = 'medium' | 'small' | 'mini'

export default defineComponent({
  name: 'ZButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean,
    size: {
      type: String as PropType<ButtonSize>,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    const handleClick = (evt: MouseEvent) => {
      ctx.emit('click', evt)
    }

    return {
      handleClick
    }
  }
})
</script>
