import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LandingComponent from './components/LandingComponent/LandingComponent.vue'


const routes = [
    { path: '/', component: LandingComponent },
  ]

const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: createWebHashHistory(),
routes, // short for `routes: routes`
})

app = createApp(App)

app.use(router)

app.mount('#app')
