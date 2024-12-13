import Api from './Api'
import swal from 'sweetalert'

export default {
  async registerUser(newUser) {
    try {
      await Api().post('/register', newUser)
      swal({
        title: 'Excelent!',
        text: `Usuário registered!`,
        icon: 'error',
      })
    } catch {
      swal({
        title: 'Oops!',
        text: `User already registered!`,
        icon: 'error',
      })
    }
  },
}
