/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 14/12/2024
  Descrição: Configuração da requisição HTTP da rota "http://localhost:3000/api/return".
  Tecnologias: Vue.Js.
  Bliblioteca:
    Api - É o axios configurado.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import Api from '@/services/Api'

//==> Retorna as informações de user decodificadas
export default {
  async PegarAPI() {
    return Api().get('/return')
  }
}
