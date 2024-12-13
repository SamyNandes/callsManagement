import swal from 'sweetalert'
import Api from '@/services/Api'

export default {
  async loginUser(loginUser) {
    try {
      await Api().post('/login', loginUser)
    } catch (error) {
      console.log(error)
      swal({
        title: 'Oops!',
        text: 'An error ocurred! :(',
        icon: 'error',
      })
    }
  },
}
