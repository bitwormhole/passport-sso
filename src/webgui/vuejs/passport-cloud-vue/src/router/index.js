import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const viewsDir = "@/views/"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(viewsDir + 'About.vue')
  },

  { path: '/login', component: () => import('../views/Login.vue') },
  { path: '/change-password', component: () => import('../views/ChangePassword.vue') },
  { path: '/reset-password', component: () => import('../views/ResetPassword.vue') },
  { path: '/sign-up', component: () => import('../views/SignUp.vue') },

  { path: '/admin/users', component: () => import(viewsDir + 'About.vue') },
  { path: '/admin/roles', component: () => import(viewsDir + 'About.vue') },
  { path: '/admin/permissions', component: () => import(viewsDir + 'About.vue') },
  { path: '/admin/apps', component: () => import(viewsDir + 'About.vue') },

  { path: '/apps', component: () => import(viewsDir + 'About.vue') },
  { path: '/apps/:id', component: () => import(viewsDir + 'About.vue') },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
