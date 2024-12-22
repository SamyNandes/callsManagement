/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógica de decodificação do token.
  Tecnologias: Node.js.
  Dependências: 
    Dotenv - Módulo que permite guardar senhas e logins em um arquivo .env e em seguida processa-los em outros arquivos.
    jwt - Módulo que transforma informações em token em uma estrutura de Payload, Header e Verify Signature.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const jwt = require('jsonwebtoken');
require('dotenv').config();

// ==> Função assincrona que realiaza a decodificação do token.
module.exports = async (req, res, next) => {
    try { 
        const token = req.cookies.Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userToken = decoded;  
        next()  
    } catch (error) {
        return res.status(401).json({ message: `Falha na Autenticação! erro: ${error}` });
    }
}