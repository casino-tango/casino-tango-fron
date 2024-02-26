import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// impor de axios para el consumo de apis
import axios from 'axios'
import VueAxios from 'vue-axios'
import "sweetalert2"
// impor de bostrap para los estilos y templaces
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
