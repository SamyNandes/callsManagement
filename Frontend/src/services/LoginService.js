/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 07/12/2024
  Descrição: Configuração da requisição HTTP para as rotas:
    - "http://localhost:3000/api/login".
    - "http://localhost:3000/api/return".
  Tecnologias: Vue.Js.
  Bliblioteca:
    Api - É o axios configurado.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import swal from 'sweetalert'
import Api from '@/services/Api'


//==> loginUser - Irá fazer o login do usuário.
//==> verifyLogged - Verifica se o usuário está logado.
export default {
  toHome(router) {
    router.push('/home')
  },
  async loginUser(loginUser, router) {
    try {
      await Api().post('/login', loginUser)
      this.toHome(router)
    } catch {
      swal({
        title: 'Oops!',
        text: 'An error ocurred! :(',
        icon: 'error',
      })
    }
  },
  async verifyLogged() {
    const retornoDadosLogin = await Api().get('/return')
    if (retornoDadosLogin.data) {
      return true
    } else {
      return false
    }
  },
}
