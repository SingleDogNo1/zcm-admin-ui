import { createApp } from 'vue'
import App from './app.vue'
import AdminUI from '../packages/admin-ui'
import 'highlight.js/styles/color-brewer.css'

import router from './router'
import DemoBlock from './components/DemoBlock/index.vue'
import './styles/common.scss'

createApp(App).use(AdminUI).component('demo-block', DemoBlock).use(router).mount('#app')
