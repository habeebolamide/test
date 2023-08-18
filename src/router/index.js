import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingPage/Index.vue'
import Dashboard from '../views/Dashboard/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: Landing
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
