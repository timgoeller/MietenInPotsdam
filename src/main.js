import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import LandingComponent from './components/pages/LandingComponent/Landing.vue'
import RentQuestionnaire from './components/pages/RentQuestionnaire/RentQuestionnaire.vue'
import AboutUs from './components/pages/AboutUs/AboutUs.vue'
import Map from './components/pages/Map/Map.vue'
import Forum from './components/pages/Forum/Forum.vue'
import Rights from './components/pages/Rights/Rights.vue'

const routes = [
  { path: '/', component: LandingComponent },
  { path: '/mietspiegel', component: RentQuestionnaire },
  { path: '/about_us', component: AboutUs },
  { path: '/map', component: Map },
  { path: '/forum', component: Forum },
  { path: '/rights', component: Rights },
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
