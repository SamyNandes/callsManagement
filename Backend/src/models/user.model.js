/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Criação do esqueleto da entidade User.
  Tecnologias: Node.js.
  Dependências: 
    Dotenv - Módulo que permite guardar senhas e logins em um arquivo .env e em seguida processa-los em outros arquivos.
    bcrypt - Módulo que criptografia senhas.
    jwt - Módulo que transforma informações em token em uma estrutura de Payload, Header e Verify Signature.
    mongoose - Módulo que faz a conexão com o MongoDB e gerenciamento de entidades.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: {
        type: String, maxlength: 30, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true, minLength: 8
    },
    admin: {
        type: Boolean
    },
    tokens: [
        {
            token: { type: String, required: true},
        },
    ],

}, {
    timestamps: true,
    collection: 'users'
})

// ==> Antes de realizar o salvamento no mongoDB, nosso programa irá passar por essa lógica
// ==>  que faz a codificação da senha e transforma nossos dados em um JWT
userSchema.pre('save', async function(next) {
    try {
        const user = this
        if (user.isModified('password')){
            user.password = await bcrypt.hash(user.password, 8)
            }
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET);
        user.tokens = {token};
    } catch (error) {
        console.log(`Ocorreu um ${error}`)
        next()
    }
    next()
})

module.exports = mongoose.model("User", userSchema)