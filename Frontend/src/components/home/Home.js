/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 16/12/2024
  Descrição: Configuração dos metodos, dados e validações.
  Tecnologias: Node.js e Vue.Js.
  Funções:
    swal - Função que cria uma caixa de diálogo
    useVuelidate - Função que permite a validação de campos.
    required - Função que seta um campo como obrigatório.
    Api - Importação da configuração do Axios.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import Api from '../../services/Api'
import { required, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'

// ==> pegarToken - Pega o token, decodifica ele e mostra as informações para o usuário.
// ==> exitAccount - Sai da conta e tira o token do cookie.
export default {
  name: 'HomeComponent',
  data() {
    return {
      v$: useVuelidate(),
      name: null,
      email: null,
      msgPadrão: 'Por favor, se cadastre ou faça o login',
      tokenExists: null,
      dataCall: {
        title: null,
        description: null,
        idCallUser: null,
        nameCall: null,
      },
    }
  },
  methods: {
    async pegarToken() {
      const token = await Api().get('/return')
      if (token.data == '') {
        this.tokenExists = false
      } else {
        this.tokenExists = true
        this.dataCall.idCallUser = token.data._id
        this.name = token.data.name
        this.dataCall.nameCall = token.data.name
        this.email = token.data.email
      }
    },
    async exitAccount() {
      await Api().get('/exitAccount')
      this.$router.push('/login')
    },
    async sendCall() {
      const state = await this.v$.$validate()
      if (state) {
        await Api().post('/createCall', this.dataCall)
        swal({
          title: 'Yay!',
          text: 'Request send!',
          icon: 'success',
        })
      } else {
        swal({
          title: 'Oops!',
          text: 'Fill in the form of your request correctly!',
          icon: 'error',
        })
      }
    },
  },
  validations() {
    return {
      dataCall: {
        title: { required, maxLength: maxLength(30) },
        description: { required },
      },
    }
  },
  mounted() {
    this.pegarToken()
  },
}
