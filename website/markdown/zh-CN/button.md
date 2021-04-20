# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型

:::demo 按钮有五种类型：默认按钮、主按钮、链接按钮、幽灵按钮、微妙按钮。

```html
<template>
  <dt-button type="default">
    Default
  </dt-button>
  <dt-button type="primary" @click="handleClick">
    Primary
  </dt-button>
  <dt-button type="success">
    Link
  </dt-button>
  <dt-button type="warning">
    Ghost
  </dt-button>
  <dt-button type="text">
    Delicate
  </dt-button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('hello,world')
    }
  }
}
</script>

```

:::

## API

|   参数   |                                        说明                                        |  类型   | 默认值  |
| :------: | :--------------------------------------------------------------------------------: | :-----: | :-----: |
|   type   | 按钮类型，可选择值`default`,`primary`,`success`,`warning`,`danger`, `info`, `text` | String  | default |
| disabled |                                      禁用状态                                      | Boolean |  false  |
