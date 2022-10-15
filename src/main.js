import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/styles/main.scss';
import '@/assets/styles/tailwind.css';

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
