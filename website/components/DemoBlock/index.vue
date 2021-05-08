<template>
  <div class="grid">
    <div ref="meta" :class="['demo-box', className]">
      <div v-if="$slots.default && metaShow" class="description">
        <slot></slot>
      </div>
      <div class="source">
        <slot name="source"></slot>
      </div>

      <div v-show="metaShow" class="highlight">
        <slot name="highlight"></slot>
      </div>
      <div class="demo-block-control" @click="showMeta">
        <z-icon :name="iconName" />
        <span>{{ hoveringText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import hljs from 'highlight.js'
import { computed, nextTick, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'DemoBlock',
  setup(props, { slots }) {
    const route = useRoute()

    const state = reactive({
      metaShow: false
    })

    const iconName = computed(() => (state.metaShow ? 'sort-up' : 'sort-down'))
    const hoveringText = computed(() => {
      const lang = sessionStorage.getItem('lang')
      if (state.metaShow) {
        return lang === 'en-US' ? 'Hide' : '收起'
      } else {
        return lang === 'en-US' ? 'Expand' : '展开'
      }
    })

    const className = computed(() => route.name.toString().toLowerCase())

    const highlight = slots.highlight
    if (highlight) {
      nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)')
        Array.prototype.forEach.call(blocks, hljs.highlightBlock)
      })
    }

    const showMeta = () => {
      state.metaShow = !state.metaShow
    }

    return {
      ...toRefs(state),
      iconName,
      hoveringText,
      showMeta,
      className
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  padding-top: 10px;

  .demo-box {
    width: 100%;
    height: auto;
    padding-top: 1px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: inset -5px -5px 5px #fff, inset 5px 5px 5px #dde4ef;
    transition: 0.2s;
    flex: 1;

    .description {
      padding: 10px 20px 0;
    }

    .source {
      padding: 20px;
    }

    .meta {
      height: auto;
      overflow: hidden;
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      transition: height 0.2s;

      .p {
        padding: 20px;
        margin: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        background-color: #fff;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        box-sizing: border-box;
      }
    }

    .demo-block-control {
      position: relative;
      height: 44px;
      padding-top: 10px;
      color: #d3dce6;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      border-radius: 0 0 10px 10px;
      box-sizing: border-box;

      &:focus,
      &:hover {
        color: #34c3ff;
      }

      .demo-button {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>
