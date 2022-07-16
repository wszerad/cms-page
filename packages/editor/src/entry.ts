import App from '@/App.vue'
import '@/assets/styles.scss'
import { router } from '@/routing'
import 'virtual:windi.css'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
