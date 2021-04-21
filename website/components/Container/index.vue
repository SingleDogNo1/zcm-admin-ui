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
.container {
  overflow: hidden auto;
  color: #34495e;
  box-sizing: border-box;

  .doc-content--,
  .doc-content--about {
    h1 {
      img {
        margin: 5px;
      }
    }
  }

  .doc-content {
    flex: 1;
    position: relative;
    padding: 30px 60px 75px 60px;

    .card {
      padding: 24px;
      margin-bottom: 24px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 8px 12px #ebedf0;
    }

    a {
      color: #1989fa;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 400;
      line-height: 1.5;
      color: #455a64;
      cursor: pointer;
    }

    h1 {
      margin-top: 8px;
      margin-bottom: 20px;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-size: 30px;
      font-weight: 500;
      line-height: 38px;
    }

    h2 {
      margin: 1em 0 0.6em;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-size: 26px;
      font-weight: 500;
    }

    h3 {
      margin: 1em 0 0.6em;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-size: 22px;
      font-weight: 500;
    }

    h4 {
      margin: 1em 0 0.6em;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-size: 18px;
      font-weight: 500;
    }

    h5 {
      margin: 1em 0 0.6em;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin: 10px;
      font-size: 16px;
      line-height: 26px;
      color: #34495e;
    }

    pre {
      padding: 18px 20px;
      font-size: 14px;
      background: #fafafa;
    }

    code {
      padding: 0;
      margin: 0;
      overflow: auto;
      font-size: 14px;
      line-height: 20px;
      background: #fafafa;
      border: none;
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
