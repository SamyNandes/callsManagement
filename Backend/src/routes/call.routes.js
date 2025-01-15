/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógica que gerencia as rotas de user.
  Tecnologias: Node.js.
  Dependências: 
    Express - Modulo que gerencia a configuração de rotas, como por exemplo qual método irá ser utilizado
        (GET, POST, PATCH, DELETE, etc) em determinada rota.
    callController -  Módulo que exporta a lóigca que irá ser chamada quando determinado tipo de método for enviado para uma rota.
    auth - Middleware de autenticação.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const callController = require('../controllers/call.controllers.js') 
const express = require('express')
const router = express()
const auth = require("../middlewares/auth.js")


// ==> Rota responsável por criar chamado: (POST): localhost:3000/api/createCall
router.post('/createCall', auth, callController.createCall )

// ==> Rota responsável por retornar todas as chamadas: (GET): localhost:3000/api/info
router.get('/info', auth, callController.callReturn)

// ==> Rota responsável por retornar as chamadas de acordo com o id: (GET): localhost:3000/api/returnCallsById
router.get('/returnCallsById', auth, callController.callReturnById)

// ==> Rota responsável por exluir chamada: (DELETE): /removeCall/:id
router.delete('/removeCall/:id', callController.callRemove)

// ==> Rota responsável por modificar o statuso de um chamado: (POST): localhost:3000/callModify/:id 
router.patch('/callModify/:id', callController.callModify)

module.exports = router
