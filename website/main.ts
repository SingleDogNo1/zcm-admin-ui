import { createApp } from 'vue'
import App from './app.vue'
import AdminUI from '../packages/admin-ui'

createApp(App).use(AdminUI).mount('#app')
