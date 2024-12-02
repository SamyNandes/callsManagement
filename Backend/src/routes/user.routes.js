const userModel = require('../models/user.model.js') 
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

module.exports = router
