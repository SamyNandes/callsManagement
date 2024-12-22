<!------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 15/12/2024
  Descrição: Importação do componente de info.
  Tecnologias: Vue.Js.
  Dependências:
    RegisterComponent - Um componente de info.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <div>
    <InfoComponent />
  </div>
</template>


<script>
import InfoComponent from "@/components/info/InfoComponent.vue";

export default {
  name: 'InfoView',
  components: {
    InfoComponent,
  },
}
</script>
