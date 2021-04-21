import { createApp } from 'vue'
import App from './app.vue'
import AdminUI from '../packages/admin-ui'
import '../packages/styles/src/index.scss'
import 'highlight.js/styles/color-brewer.css'

import router from './router'
import DemoBlock from './components/DemoBlock/index.vue'
import DtIcon from '@packages/icon'
import './styles/common.scss'

createApp(App)
  .use(AdminUI)
  .component('demo-block', DemoBlock)
  .component('dt-icon', DtIcon)
  .use(router)
  .mount('#app')
