/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 16/12/2024
  Descrição: Configuração dos componentes e das suas respectivas rotas.
  Tecnologias: Node.js e Vue.Js.
  Funções:
    useVuelidate - Função que permite o uso de validações nos campos
    swal -  Função que cria uma caixa de diálogo
    RegisterService - Função que irá registrar o usuário
    minLength - Função que recebe o tamanho mínimo dos campos
    required - Função que seta o campo como requerido
    email - Função que recebe seta o campo para aceitar apenas emails
    maxLength - Função que recebe o tamanho máximo dos campos
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import { minLength, required, email, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'
import RegisterService from '@/services/RegisterService'

// ==> buttonRegister - Função que registra o usuário e verifica se os campos estão corretos
export default {
  name: 'RegisterComponent',
  data() {
    return {
      v$: useVuelidate(),
      dataUserRegister: {
        name: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async buttonRegister() {
      const state = await this.v$.$validate()
      if (!state) {
        swal({
          title: 'Oops!',
          text: 'Please, fill in the fields correctly.',
          icon: 'error',
        })
      } else {
        RegisterService.registerUser(this.dataUserRegister)
      }
    },
  },
  validations() {
    return {
      dataUserRegister: {
        name: { required, maxLength: maxLength(30) },
        email: { required, email },
        password: { required, minLength: minLength(8) },
      },
    }
  },
}
