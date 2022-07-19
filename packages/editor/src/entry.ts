import Editor from '@/components/Editor.vue'
import '@/assets/styles.scss'
import { router } from '@/routing'
import 'virtual:windi.css'
import { createApp } from 'vue'

const app = createApp(Editor)
app.use(router)
app.mount('#app')
