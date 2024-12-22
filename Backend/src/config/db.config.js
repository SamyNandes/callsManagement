/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: String connection do MongoDB, que irá ser exportada, para o Mongoose.
  Tecnologias: Node.js, MongoDB.
  Dependências: Dotenv.     
  Instruções: Nenhuma.  
------------------------------------------------------------------------*/

require('dotenv').config();

module.exports = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.txrj0.mongodb.net/service_requests?retryWrites=true&w=majority&appName=Cluster0`