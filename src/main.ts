import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import PageVerification from './components/PageVerification.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/verification', component: PageVerification },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

app.use(createPinia())
app.use(router)
app.mount('#app')
