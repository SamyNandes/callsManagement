<!------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 07/12/2024
  Descrição: Importação do componente de home.
  Tecnologias: Vue.Js.
  Dependências:
    RegisterComponent - Um componente de home.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <div>
    <HomeComponent />
  </div>
</template>


<script>
import HomeComponent from "@/components/home/HomeComponent.vue";

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
  },
}
</script>
