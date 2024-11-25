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