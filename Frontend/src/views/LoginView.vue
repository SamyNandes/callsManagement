<!------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 07/12/2024
  Descrição: Importação do componente de login.
  Tecnologias: Vue.Js.
  Dependências:
    RegisterComponent - Um componente de login.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <loginComponent />
</template>

<script>

import LoginComponent from '@/components/login/LoginComponent.vue';

export default {
  name: "LoginView",
  components: {
    LoginComponent,
  },
};

</script>
