import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import i18n from './locales/index'
// admin-ui
import AdminUI from '../packages/admin-ui'
import '../packages/styles/src/index.scss'

console.log('AdminUI :>> ', AdminUI)
// components
import DemoBlock from './components/DemoBlock/index.vue'
import DtIcon from '@packages/icon'
// reset-css
import 'highlight.js/styles/color-brewer.css'
import './styles/common.scss'

createApp(App)
  .use(AdminUI)
  .use(i18n)
  .component('demo-block', DemoBlock)
  .component('dt-icon', DtIcon)
  .use(router)
  .mount('#app')
