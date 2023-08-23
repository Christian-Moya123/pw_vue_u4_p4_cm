import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
