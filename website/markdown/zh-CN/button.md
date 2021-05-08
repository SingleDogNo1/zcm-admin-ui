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
      <z-button type="default">Default</z-button>
      <z-button type="primary" @click="handleClick">Primary</z-button>
      <z-button type="success">Success</z-button>
      <z-button type="warning">Warning</z-button>
      <z-button type="info">Info</z-button>
      <z-button type="danger">Danger</z-button>
    </li>

    <li style="margin-bottom: 30px;">
      <z-button round type="default">Default</z-button>
      <z-button round type="primary">Primary</z-button>
      <z-button round type="success">Success</z-button>
      <z-button round type="warning">Warning</z-button>
      <z-button round type="info">Info</z-button>
      <z-button round type="danger">Danger</z-button>
    </li>

    <li>
      <z-button circle type="default" icon="success" />
      <z-button circle type="primary" icon="qrcode" />
      <z-button circle type="success" icon="key" />
      <z-button circle type="warning" icon="warning" />
      <z-button circle type="info" icon="info" />
      <z-button circle type="danger" icon="error" />
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
      <z-button disabled type="default" @click="handleClick">Default</z-button>
      <z-button round disabled type="success">Success</z-button>
      <z-button circle disabled type="danger" icon="error" />
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
    <z-button>default</z-button>
    <z-button type="success" size="medium">medium</z-button>
    <z-button type="warning" size="small">small</z-button>
    <z-button type="info" disabled size="mini">mini</z-button>
  </li>
</ul>
```

:::

## 图标按钮

:::demo

```html
<z-button circle type="default" icon="success" />
<z-button circle type="success" icon="key" />
<z-button type="primary" icon="qrcode">二维码</z-button>
<z-button type="primary" >二维码 <i class="iconfont icon-qrcode" style="margin-left: 5px"></i> </z-button>
```

:::

## 按钮组

:::demo

```html
<ul>
  <li style="margin-bottom: 30px">
    <z-button-group>
      <z-button type="primary" icon="arrow-left">上一页</z-button>
      <z-button type="primary">下一页<i class="iconfont icon-arrow-right" style="margin-left: 0.5em;"></i></z-button>
    </z-button-group>
  </li>
  <li>
    <z-button-group>
      <z-button type="primary" icon="edit" />
      <z-button type="primary" icon="delete" />
      <z-button type="primary" icon="qrcode" />
    </z-button-group>
  <li>
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
