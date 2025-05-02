import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import FlagIcon from 'vue-flag-icon'

const app = createApp(App)
app.use(router)
app.use(FlagIcon)
app.mount('#app') 