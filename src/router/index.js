import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import Cookies from 'js-cookie'

// Importa tus vistas protegidas

import MisionVisionView from '../views/Mision_visionView.vue'
import EliminarView from '../views/EliminarView.vue'
import RestablecerView from '../views/RestablecerView.vue'
import EditarView from '../views/EditarView.vue'
import CrearMaquinaView from "../views/CrearMaquinaView.vue";
import InicioView from "../views/InicioView.vue";
import BusquedaView from "../views/BusquedaView.vue";
import GraficaView from "../views/GraficaView.vue"

const routes = [

  {
    path: '/gra',
    name: 'gra',
    component: GraficaView
  },

  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/objectivos',
    name: 'objectivos',
    component: MisionVisionView
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView,
    // meta: {requireAuth: true}

  },
  {
    // path: '/buscar/:Numero_serial ',
    path: '/buscar/',
    name: 'buscar',
    component: BusquedaView,
    meta: { requireAuth: true },
    // props: true  
  },
 
  {
    path: '/crear',
    name: 'crear',
    component:CrearMaquinaView,
    meta: { requireAuth: true }
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: EliminarView,
    meta: {requireAuth: true}

  },
  {
    path: '/restablecer',
    name: 'restablecer',
    component: RestablecerView
  },
  {
    path: '/editar',
    name: 'editar',
    component: EditarView,
    meta: {requireAuth: true}

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})  

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)
  const isAuthenticated = Cookies.get('token')

  if (requireAuth && !isAuthenticated) {
    next('/') // Redirige al inicio si no está autenticado en una ruta protegida
  } else {
    next()
  }
})

export default router
