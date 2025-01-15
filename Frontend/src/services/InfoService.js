/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 15/12/2024
  Descrição: Configuração da requisição HTTP para as rotas:
    - "http://localhost:3000/api/info".
    - "http://localhost:3000/api/removeCall/:id".
    - "http://localhost:3000/api/callModify/:id".
  Tecnologias: Vue.Js.
  Bliblioteca:
    Api - É o axios configurado.
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import Api from '../services/Api'

//==> showData - retorna as informações das chamadas.
//==> removeCall - Remove determinada chamada.
//==> modifyCall - Modifica determinada chamada.
export default {
  async showData() {
    const data = await Api().get('/info')
    return data.data
  },
  async getInfoOfCallById() {
    const data = await Api().get(`/returnCallsById`)
    return data.data
  },
  async removeCall(id) {
    var path = `/removeCall/${id}`
    await Api().delete(path)
  },
  async modifyCall(id, state) {
    var path = `/callModify/${id}`
    const stateOfUser = { stateCall: state }
    await Api().patch(path, stateOfUser)
  },
}
