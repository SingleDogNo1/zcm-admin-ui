<template>
  <div class="container">
    <div :class="['doc-content', `doc-content--${currentPage}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Container',
  setup() {
    const route = useRoute()

    const currentPage = computed(() =>
      route.path ? route.path.split('/').slice(-1)[0] : route.name
    )

    return {
      currentPage
    }
  }
})
</script>

<style lang="scss">
@import '../../styles/var.scss';

.container {
  overflow: hidden auto;
  color: #34495e;
  box-sizing: border-box;

  .doc-content {
    flex: 1;
    position: relative;
    padding: 20px 50px 20px;

    a {
      color: $--color-primary;
    }

    %quote {
      padding: 8px 16px;
      margin: 20px 0;
      border-radius: 4px;
    }

    .tip {
      background-color: #f3f5f7;
      border-left: #42b983 5px solid;
      @extend %quote;

      p {
        color: #445368;
      }
    }

    .warning {
      background-color: rgba(255, 229, 100, 0.3);
      border-left: #e7c000 5px solid;
      @extend %quote;

      p {
        color: #6b5900;
      }
    }

    .danger {
      background-color: #ffe6e6;
      border-left: #c00 5px solid;
      @extend %quote;

      p {
        color: #4d0000;
      }
    }

    .card {
      padding: 24px;
      margin-bottom: 24px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 8px 12px #ebedf0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-weight: 500;
      line-height: 1.5;
      color: $--color-font;
      cursor: pointer;
    }

    h1 {
      margin: 8px 0 20px;
      font-size: 30px;
    }

    h2 {
      margin: 1em 0 0.6em;
      font-size: 26px;
    }

    h3 {
      margin: 1em 0 0.6em;
      font-size: 22px;
    }

    h4 {
      margin: 1em 0 0.6em;
      font-size: 18px;
    }

    h5 {
      margin: 1em 0 0.6em;
      font-size: 14px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      color: #34495e;
    }

    code {
      padding: 18px 20px;
      margin: 0;
      overflow: auto;
      background: transparent;
      border: none;
      box-shadow: inset -2px -2px 4px #fff, inset 2px 2px 4px #dde4ef;
    }

    table {
      width: 100%;
      border-spacing: 0;

      thead {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        line-height: 20px;
        color: #8e8e93;
        text-align: left;

        th {
          height: 20px;
          padding: 10px 0;
          background: #fff;
          border-bottom: 1px solid #f2f2f5;
        }
      }

      tbody {
        background: #fff;

        tr {
          height: 46px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #575757;

          td {
            padding: 13px 0;
            border-bottom: 1px solid #f2f2f5;
          }
        }

        :hover {
          cursor: pointer;
          background: #f2faff;
        }
      }

      code {
        padding: 0 8px;
        font-family: inherit;
        font-size: 13px;
        word-break: keep-all;
      }
    }

    hr {
      margin: 30px 0;
      border: 0 none;
      border-top: 1px solid #eee;
    }

    p > code,
    li > code,
    table code {
      display: inline;
      padding: 2px 5px;
      margin: 2px 3px;
      background-color: #f0f2f5;
      box-shadow: none;
    }

    section {
      overflow: hidden;
    }

    blockquote {
      padding: 16px;
      margin: 20px 0 0;
      font-size: 14px;
      color: rgba(52, 73, 94, 0.8);
      background-color: #ecf9ff;
      border-left: 5px solid #50bfff;
      border-radius: 4px;
    }

    &--changelog {
      strong {
        display: block;
        margin: 12px 0;
        font-size: 15px;
        font-weight: 500;
      }

      h3 {
        font-size: 20px;

        + p code {
          margin: 0;
        }

        a {
          color: inherit;
        }
      }
    }
  }
}
</style>
