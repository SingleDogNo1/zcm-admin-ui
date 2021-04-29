# Icon 图标

提供了一套常用的图标集合。

## 使用方法

通过设置`name`使用，也可以结合`button`设置`icon`属性使用

:::demo

```html
<dt-icon name="warning"></dt-icon>
<dt-icon name="scan"></dt-icon>
<dt-icon name="drag"></dt-icon>
<dt-button name="key">搜索</dt-button>
```

:::

## 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <div>
      <i :class="['iconfont', 'icon-' + name]"></i>
      <span class="icon-name">{{name}}</span>
      </div>
  </li>
</ul>