import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import LandingComponent from './components/pages/LandingComponent/Landing.vue'
import RentQuestionnaire from './components/pages/RentQuestionnaire/RentQuestionnaire.vue'
import AboutUs from './components/pages/AboutUs/AboutUs.vue'
import Map from './components/pages/Map/Map.vue'
import Forum from './components/pages/Forum/Forum.vue'
import Rights from './components/pages/Rights/Rights.vue'
import translations from './i18n/translations.json'

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

const vueApp = createApp(App)

const i18n = createI18n({
  messages: translations,
  locale: 'de',
  legacy: false,
})

vueApp.component('Form', Form)
vueApp.component('Field', Field)
vueApp.component('ErrorMessage', ErrorMessage)

vueApp.use(router)
vueApp.use(i18n)

vueApp.mount('#app')
