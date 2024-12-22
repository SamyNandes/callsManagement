/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 14/12/2024
  Descrição: Configuração dos componentes e das suas respectivas rotas.
  Tecnologias: Vue.Js.
  Funções:
    createRouter - Função da biblioteca Vue Router que cria uma instância do roteador
    createWebHistory -  Configura o histórico sem `#`
    LoginView - Componente do login.
    RegisterView - Componente do registro.
    InfoView - Componente do info.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import InfoView from '../views/InfoView.vue'

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
      path: '/info',
      name: 'InfoView',
      component: InfoView,
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
    },
  ],
})

export default router
