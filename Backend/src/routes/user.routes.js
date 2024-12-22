/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógica que gerencia as rotas de user.
  Tecnologias: Node.js.
  Dependências: 
    Express - Modulo que gerencia a configuração de rotas, como por exemplo qual método irá ser utilizado
        (GET, POST, PATCH, DELETE, etc) em determinada rota.
    userController -  Módulo que exporta a lóigca que irá ser chamada quando determinado tipo de método for enviado para uma rota.
    auth - Middleware de autenticação.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const userController = require('../controllers/user.controllers.js') 
const express = require('express')
const router = express()
const auth = require("../middlewares/auth.js")

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/register
router.post("/register", userController.userController)

// ==> Rota responsável por fazer o Login de 'User': (POST): localhost:3000/api/login
router.post("/login", userController.userLogin)

// ==> Rota responsável por retornar 'User': (GET): localhost:3000/api/return
router.get("/return", auth, userController.returnUser)

// ==> Rota responsável por excluir o token dos cookies: (GET): localhost:3000/api/exitAccount
router.get('/exitAccount', (req, res) => {
    res.clearCookie('Token')
    res.end()
})

module.exports = router
