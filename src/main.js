import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import './style/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleHalfStroke, faBarsStaggered, faUser, faWandSparkles, faSquareShareNodes, faBriefcase, faIdCard } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleHalfStroke, faBarsStaggered, faUser, faWandSparkles, faSquareShareNodes, faBriefcase, faIdCard)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
