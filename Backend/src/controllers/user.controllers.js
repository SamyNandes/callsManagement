/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógicas de controle das rotas referente a user.
  Tecnologias: Node.js.
  Dependências: 
    userModel - Módulo do esqueleto de User.
    bcrypt - Módulo que criptografia senhas.
    jwt - Módulo que transforma informações em token contendo Payload, Header e Verify Signature.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const userModel = require('../models/user.model.js') 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

// ==> Função assincrona que realiza o cadastro de usuário.
exports.userController = async (req, res) => {
    const {name, email, password} = req.body
    req.body.admin = false; // ==> Para se tornar admin, mude aqui para "true"
    const userExists = await userModel.findOne({ email }, "email")
    if ( userExists != null){
        return res.status(500).send("Ops! Este email já está cadastrado, utilize um diferente :)")
    }
    if (!name || !email || !password){
        return res.status(500).send("Preencha os campos corretamente!")
    }    
    try {
        const user = await userModel.create(req.body)
        return res.status(201).json(user)
            }
    catch (error) {
        res.status(500).send(error.message)
        }
        } 

// ==> Função assincrona que realiza o login de usuário.
exports.userLogin = async (req, res) => {
   try {
        const email = req.body.email
        const password = req.body.password

        const user  = await userModel.findOne({ email });
        if(user == null){
            return res.status(500).send(`Senha/Email inválido!`)
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            return res.status(500).send(`Senha/Email inválido!`)
        } 
        console.log(user.admin + " Dentro do login do JWT")
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, admin: user.admin }, process.env.JWT_SECRET);
        user.tokens.push({ token });
    
        res.cookie('Token', token, { httpOnly: true } )

        return res.status(200).json({user});
   } catch (error) {
        return res.status(500).send(`Ops! Ocorreu um erro. ${error}`)
    } 
} 

// ==> Função assincrona que realiza o retorno de usuário.
exports.returnUser = async (req, res) => {
    await res.json(req.userToken);
}