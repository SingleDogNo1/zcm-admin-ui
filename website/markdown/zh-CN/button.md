# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型

:::demo 使用 `type`、`round`、`circle` 定义 button 的样式

```html
<template>
  <ul>
    <li style="margin-bottom: 30px;">
      <dt-button type="default">Default</dt-button>
      <dt-button type="primary" @click="handleClick">Primary</dt-button>
      <dt-button type="success">Success</dt-button>
      <dt-button type="warning">Warning</dt-button>
      <dt-button type="info">Info</dt-button>
      <dt-button type="danger">Danger</dt-button>
    </li>

    <li style="margin-bottom: 30px;">
      <dt-button round type="default">Default</dt-button>
      <dt-button round type="primary">Primary</dt-button>
      <dt-button round type="success">Success</dt-button>
      <dt-button round type="warning">Warning</dt-button>
      <dt-button round type="info">Info</dt-button>
      <dt-button round type="danger">Danger</dt-button>
    </li>

    <li>
      <dt-button circle type="default" icon="success" />
      <dt-button circle type="primary" icon="qrcode" />
      <dt-button circle type="success" icon="key" />
      <dt-button circle type="warning" icon="warning" />
      <dt-button circle type="info" icon="info" />
      <dt-button circle type="danger" icon="error" />
    </li>
  </ul>
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

## 禁用状态

按钮不可用

:::demo

```html
<template>
  <ul>
    <li style="margin-bottom: 30px;">
      <dt-button disabled type="default" @click="handleClick">Default</dt-button>
      <dt-button round disabled type="success">Success</dt-button>
      <dt-button circle disabled type="danger" icon="error" />
    </li>
  </ul>
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

## 不同尺寸

提供三种尺寸，不同场景下选择合适的尺寸

:::demo

```html
<ul>
  <li style="margin-bottom: 30px;">
    <dt-button>default</dt-button>
    <dt-button type="success" size="medium">medium</dt-button>
    <dt-button type="warning" size="small">small</dt-button>
    <dt-button type="info" disabled size="mini">mini</dt-button>
  </li>
</ul>
```

:::

## Attributes

|   参数   |                                    说明                                    |  类型   | 默认值  |
| :------: | :------------------------------------------------------------------------: | :-----: | :-----: |
|   type   | 按钮类型，可选择值`default`,`primary`,`success`,`warning`,`danger`, `info` | String  | default |
|  round   |                               是否是圆角按钮                               | Boolean |  false  |
|  circle  |                               是否是圆形按钮                               | Boolean |  false  |
| disabled |                                  禁用状态                                  | Boolean |  false  |
|   icon   |                                  图标类名                                  | String  |   --    |
|   size   |                  按钮尺寸，可选值`medium`,`small`,`mini`                   | String  |   --    |
