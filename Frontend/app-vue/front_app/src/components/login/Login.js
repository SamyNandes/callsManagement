import { required, email, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'

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
      if (!estado) {
        swal({
          title: 'Oops!',
          text: 'Preencha os campos corretamente',
          icon: 'error',
        })
      } else {
        swal({
          title: 'Oba!',
          text: 'Login realizado com sucesso!',
          icon: 'success',
        })
      }
    },
  },
}
