import { createApp } from 'vue'
import '@/assets/css/style.css'
import '@/assets/scss/style.scss'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  easing: 'ease-in-out', // Animation easing
  once: true, // Animation happens only once
  mirror: false // Elements animate when scrolling past them
})
