import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './views/HomePage.vue'
import PageVerification from './views/PageVerification.vue'

const routes = [
  { path: '/honor/', component: HomePage },
  { path: '/honor/verification/', component: PageVerification },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
