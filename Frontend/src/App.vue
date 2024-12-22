<!------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 12/12/2024
  Descrição: Componente principal do Vue.
  Tecnologias: Vue.Js.
  Blibliotecas e suas funções:
    RouterLink - Um componente do Vue Router para links navegáveis.
    RouterView - Componente do Vue Router que renderiza o componente de determinada rota, determinado na pasta router.
  Instruções:
    1. Abra o terminal.
    2. Esteja dentro do diretório "../Frontend"
    3. Digite "npm install" para realizar a instalação de todas as dependencias
    4. Digite "npm run start" para iniciar a aplicação
    5. Pronto! Sua aplicação já está rodando
------------------------------------------------------------------------>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">API Internship</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/home" class="nav-link">Home</RouterLink>
            </li>
            <div v-if="!isLoggedApp">
              <li class="nav-item">
                <RouterLink to="/login" class="nav-link">Login</RouterLink>
              </li>
            </div>
            <div v-if="!isLoggedApp">
              <li class="nav-item">
                <RouterLink to="/register" class="nav-link">Register</RouterLink>
              </li>
            </div>
            <li class="nav-item">
              <RouterLink to="/info" class="nav-link">Informations</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>
<script>
import Api from '../src/services/Api'

export default {
  data() {
    return {
      isLoggedApp: null
    }
  },
  methods: {
    async isLogged() {
      const returnIsLogged = await Api().get('/return')
      if (returnIsLogged) {
        this.isLoggedApp = returnIsLogged
      }
    }
  },
  mounted() {
    this.isLogged()
  }
}
</script>
<style>
@import url('https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
