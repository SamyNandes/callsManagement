import Api from './Api'
import swal from 'sweetalert'

export default {
  async registerUser(newUser) {
    try {
      await Api().post('/register', newUser)
    } catch {
      swal({
        title: 'Oops!',
        text: `Usuário já cadastrado!`,
        icon: 'error',
      })
    }
  },
}
