import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingPage/LandingPage.vue'
import Dashboard from '../views/Dashboard/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
  {
    path: '/dashboard',
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
