/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógica que cria um servidor usando Express e importando as 
    rotas de "routes".
  Tecnologias: Node.js.
  Dependências: 
    Express - Modulo que gerencia a configuração de rotas, como por exemplo qual método irá ser utilizado
        (GET, POST, PATCH, DELETE, etc) em determinada rota.
    Morgan -  Middleware para o Express que gera logs detalhados das requisições HTTP recebidas pelo servidor.
    Cors - (Cross Origin Resourse Sharing) middleware que permite o gerenciamento de compartilhamento de recursos entre origens.
    cookieParser - Middleware que permite o acesso/criação dos cookies enviados via HTTP.
    usersRouter - Modulo que exporta todas as rotas referente a usuário.
    callsRouter - Modulo que exporta todas as rotas referente a chamadas.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')



const app = express()

app.use(cookieParser())

app.use(express.json()); 

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
)); 

app.use(morgan('dev')) ; 

const usersRouter = require('./routes/user.routes')
app.use("/api", usersRouter)

const callsRouter = require('./routes/call.routes')
app.use("/api", callsRouter)


module.exports = app;