import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import LandingComponent from './components/pages/LandingComponent/Landing.vue'
import RentQuestionnaire from './components/pages/RentQuestionnaire/RentQuestionnaire.vue'

const routes = [
  { path: '/', component: LandingComponent },
  { path: '/mietspiegel', component: RentQuestionnaire },
]
  
const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: createWebHashHistory(),
routes, // short for `routes: routes`
})

app = createApp(App)

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(router)

app.mount('#app')
