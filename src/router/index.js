import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Register from '../views/register.vue'
import User from '../views/user.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component : Admin
  },
  {
    path: '/register',
    name: 'Register',
    component : Register
  },
  {
    path: '/user',
    name: 'User',
    component : User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
