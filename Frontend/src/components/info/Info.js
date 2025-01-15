/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 16/12/2024
  Descrição: Configuração dos metodos, dados e validações.
  Tecnologias: Node.js e Vue.Js.
  Funções/Bliblioteca:
    InfoService - Blilioteca que contém as requisições HTTP com as suas respectivas funções.
    swal -  Função que cria uma caixa de diálogo
  Instruções: Nenhuma
------------------------------------------------------------------------*/

import InfoService from '@/services/InfoService'
import swal from 'sweetalert'

// ==> getInfosOfCalls - Função que irá retornar as informações das chamadas
// ==> removeCall - Função que remove uma chamada
// ==> modifyCall - Função que modifica uma chamada
export default {
  name: 'InfoComponent',
  data() {
    return {
      isAdmin: null,
      calls: null,
      doesCallsExist: null,
    }
  },
  methods: {
    async getInfosOfCalls() {
      const data = await InfoService.showData()
      var state = data.dataOfUser.admin
      if (state == true) {
        this.isAdmin = true
        this.calls = data.calls
        const sizeOfCalls = data.calls.length
        if (sizeOfCalls == 0) {
          this.doesCallsExist = false
        } else {
          this.doesCallsExist = true
        }
      } else {
        this.isAdmin = false
      }
    },
    async removeCall() {
      for (let i = 0; i < this.calls.length; i++) {
        var teste = document.getElementById('flexCheckDefault' + i).checked
        if (teste == true) {
          var valor = this.calls[i]._id
          await InfoService.removeCall(valor)
          await this.getInfosOfCalls()
          break
        }
      }
    },
    async modifyCall() {
      const arrayValor = []
      for (let i = 0; i < this.calls.length; i++) {
        const teste = document.getElementById('flexCheckDefault' + i).checked
        if (teste == true) {
          arrayValor.push(teste)
        }
      }
      const size = arrayValor.length
      if (size > 1 || size == 0) {
        swal({
          title: 'Oops',
          text: 'Please, select just one!',
          icon: 'error',
        })
      } else {
        const statusValue = document.getElementById('state').value
        var id = ''
        for (let i = 0; i < this.calls.length; i++) {
          const checkValueOfTrue = document.getElementById('flexCheckDefault' + i).checked
          if (checkValueOfTrue == true) {
            id = this.calls[i]._id
            InfoService.modifyCall(id, statusValue)
            break
          }
        }
      }
      await this.getInfosOfCalls()
      await this.getInfosOfCalls() // Atualizar os dados mais de uma vez
    },
  },
  mounted() {
    this.getInfosOfCalls()
  },
}
