<!------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 12/12/2024
  Descrição: Componente principal do Vue.
  Tecnologias: Vue.Js.
  Dependências:
    RegisterComponent - Um componente de registro.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <RegisterComponent />
</template>

<script>

import RegisterComponent from '@/components/register/RegisterComponent.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterComponent,
  },
};

</script>
