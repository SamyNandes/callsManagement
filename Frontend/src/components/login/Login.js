/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 16/12/2024
  Descrição: Configuração dos metodos, dados e validações.
  Tecnologias: Node.js e Vue.Js.
  Funções:
    useVuelidate - Função que permite o uso de validações nos campos
    swal -  Função que cria uma caixa de diálogo
    LoginService - Função que irá fazer o login do usuário
    HomeComponent - Componente do home.
    minLength - Função que recebe o tamanho mínimo dos campos
    required - Função que seta o campo como requerido
    email - Função que recebe seta o campo para aceitar apenas emails
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import { required, email, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'
import LoginService from '@/services/LoginService'
import HomeComponent from '@/components/home/HomeComponent.vue'

// ==> submitLoginInfos - Função para enviar os dados de login.
// ==> verifyLogged - Função para verificar se o usuário está logado.
export default {
  name: 'LoginComponent',
  data() {
    return {
      v$: useVuelidate(),
      dataUserLogin: {
        email: null,
        password: null,
      },
      isLogged: null
    }
  },
  validations() {
    return {
      dataUserLogin: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
      },
    }
  },
  components: {
    HomeComponent
  },
  methods: {
    async submitLoginInfos() {
      const estado = await this.v$.$validate()
      if (estado) {
        const infoUserLogin = this.dataUserLogin
        const isLogged = await LoginService.loginUser(infoUserLogin, this.$router)
        this.isLogged = isLogged
      } else {
        swal({
          title: 'Oops!',
          text: 'Não foi possivel logar',
          icon: 'error',
        })
      }
    },
    async verifyLogged(){
      const state = await LoginService.verifyLogged()
      this.isLogged = state
    }
  },
  mounted(){
    this.verifyLogged()
  }
}
