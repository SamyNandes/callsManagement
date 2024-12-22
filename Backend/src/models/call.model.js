/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Criação do esqueleto da entidade Call.
  Tecnologias: Node.js.
  Dependências: 
    mongoose - Módulo que faz a conexão com o MongoDB e gerenciamento de entidades.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const mongoose = require('mongoose')

const callSchema = new mongoose.Schema({
    title: {
        type: String, required: true, maxLength: 30
    },
    description: {
        type: String, required: true
    },
    idCallUser: {
        type: String,
    },
    nameCall: {
        type: String,
    },
    stateCall: {
        type: String,
    }
}, {  
    collection: 'calls'
})

module.exports = mongoose.model('calls', callSchema )