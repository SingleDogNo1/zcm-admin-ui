<template>
  <div class="grid" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <div ref="meta" class="demo-box">
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
        <el-icon :name="iconName" />
        <span v-show="hovering">{{ hoveringText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import hljs from 'highlight.js'
import { computed, nextTick, reactive, toRefs } from 'vue'

export default {
  name: 'DemoBlock',
  setup(props, { slots }) {
    const state = reactive({
      metaShow: false,
      hovering: false
    })

    const iconName = computed(() => (state.metaShow ? 'icon-sort-up' : 'icon-sort-down'))
    const hoveringText = computed(() => {
      const lang = sessionStorage.getItem('lang')
      if (state.metaShow) {
        return lang === 'en-US' ? 'Hide' : '收起'
      } else {
        return lang === 'en-US' ? 'Expand' : '展开'
      }
    })

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
      showMeta
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  width: 90%;
  padding-top: 10px;

  .demo-box {
    width: 100%;
    height: auto;
    margin: 10px;
    border: 1px solid #eaeefb;
    border-radius: 3px;
    transition: 0.2s;
    flex: 1;

    .source {
      padding: 10px 20px 10px 20px;
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
      margin-top: -1px;
      color: #d3dce6;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
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
