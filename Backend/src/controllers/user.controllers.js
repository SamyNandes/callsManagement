const userModel = require('../models/user.model.js') 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.userController = async (req, res) => {
    const {name, email, password} = req.body
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

        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET);
        user.tokens.push({ token });

        return res.status(200).json({user});
   } catch (error) {
        return res.status(500).send(`Ops! Ocorreu um erro. ${error}`)
    } 
} 

exports.returnUser = async (req, res) => {
    await res.json(req.userData);
}