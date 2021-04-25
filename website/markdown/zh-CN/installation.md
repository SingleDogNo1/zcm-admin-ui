## 安装

### npm 安装

```shell
npm install zcm-admin-ui
// or
yarn add zcm-admin-ui
```

:::danger
admin-ui 基于 vue3.x 开发, 不要在 2.x 版本使用
:::

### 引入

可以整体引用,或根据需要按需导入

#### 完整引用

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import AdminUI from 'zcm-admin-ui';
import 'zcm-admin-ui/lib/theme/index.css'

createApp(App).use(AdminUI).mount('#app);
```

#### 按需引用

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { Button } from 'zcm-admin-ui';
import 'zcm-admin-ui/lib/theme/button.css'

createApp(App).use(AdminUI).mount('#app);
```
