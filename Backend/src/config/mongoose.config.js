/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Programação destinado para a conexão do MongoDb com a aplicação via
    Mongoose.
  Tecnologias: Node.js.
  Dependências: Mongoose, Db.Config      
  Instruções: Nenhuma.  
------------------------------------------------------------------------*/

const mongoose = require('mongoose')
const uri = require('./db.config')


const conexao = async () => {
        await mongoose.connect(uri).then( () => {
                console.log('Banco de dados conectado com êxito!')
            }
    ).catch((err) => {
            console.log(`Conexão do banco de dados falhou :( -> ${err}`)
    })
} 

module.exports = conexao