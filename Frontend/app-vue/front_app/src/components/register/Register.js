import { minLength, required, email, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import swal from 'sweetalert'
import RegisterService from '@/services/RegisterService'

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
        console.log(this.dataUserRegister)
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
