import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import i18n from './locales/index'
// admin-ui
import AdminUI from '../packages/admin-ui'
import '../packages/styles/src/index.scss'

import icon from './icon'

// components
import DemoBlock from './components/DemoBlock/index.vue'
import ZIcon from '@packages/icon'
// reset-css
import 'highlight.js/styles/color-brewer.css'
import './styles/index.scss'

const app = createApp(App)

app.config.globalProperties.$icon = icon

app
  .use(AdminUI)
  .use(i18n)
  .component('demo-block', DemoBlock)
  .component('z-icon', ZIcon)
  .use(router)
  .mount('#app')
