/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 07/12/2024
  Descrição: Configuração da requisição HTTP para a rota:
    - "http://localhost:3000/api/register".
  Tecnologias: Vue.Js.
  Bliblioteca:
    sweetalert - Uma bliblioteca para mostrar caixas de diálogo.
    Api - É o axios configurado.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import Api from './Api'
import swal from 'sweetalert'

//==> registerUser - Registra o usuário.
export default {
  async registerUser(newUser) {
    try {
      await Api().post('/register', newUser)
      swal({
        title: 'Excelent!',
        text: `Usuário registered!`,
        icon: 'success',
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
