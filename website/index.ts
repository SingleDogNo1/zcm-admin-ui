import {createApp} from 'vue'
import App from './index.vue'
// import AdminUI from '../packages/admin-ui'
import AdminUI from '../lib/index.js'

createApp(App).use(AdminUI).mount('#app')