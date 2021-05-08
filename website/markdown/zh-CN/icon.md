# Icon 图标

提供了一套常用的图标集合。

## 使用方法

通过设置`name`使用，也可以结合`button`设置`icon`属性使用

:::demo

```html
<z-icon name="warning"></z-icon>
<z-icon name="scan"></z-icon>
<z-icon name="drag"></z-icon>
<z-button icon="key">搜索</z-button>
```

:::

## 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <div>
      <i :class="['iconfont', 'icon-' + name]"></i>
      <span class="icon-name">{{ name }}</span>
      </div>
  </li>
</ul>
