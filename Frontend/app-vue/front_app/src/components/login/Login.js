import { required, email, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'
import LoginService from '@/services/LoginService'

export default {
  name: 'LoginComponent',
  data() {
    return {
      v$: useVuelidate(),
      dataUserLogin: {
        email: null,
        password: null,
      },
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
  methods: {
    async submitLoginInfos() {
      const estado = await this.v$.$validate()
      if (estado) {
        const infoUserLogin = this.dataUserLogin
        LoginService.loginUser(infoUserLogin)
      } else {
        swal({
          title: 'Oops!',
          text: 'Não foi possivel logar',
          icon: 'error',
        })
      }
    },
  },
}
