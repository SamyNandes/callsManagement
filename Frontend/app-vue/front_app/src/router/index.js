import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
    },
  ],
})

export default router
