/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 15/12/2024
  Descrição: Configuração do Axios.
  Tecnologias: Vue.Js.
  Bliblioteca:
    axios - Bliblioteca que envia requisições HTTP apartir de promisses.
  Instruções: Nenhuma
------------------------------------------------------------------------*/
import axios from 'axios'

export default () =>
  axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
  })
