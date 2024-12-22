/*-----------------------------------------------------------------------    
  
  Autor: Samyra Fernandes da Silva  
  Data: 20/12/2024  
  Descrição: Programação destinado para a rodar toda nossa aplicação.
  Tecnologias: Node.js.
  Dependências: 
    App - Modulo que configura um servidor em express.
    connectToDatabase - Modulo que faz a conexão da nossa aplicação com o 
        MongoDB.
    cli-color - Modulo para estilização no terminal.
  Instruções: 
    1. Abra o terminal
    3. Esteja dentro do diretório "../Backend"
    4. Digite "npm run start"
    5. Pronto! Sua aplicação já esta rodando.
  
------------------------------------------------------------------------*/

const connectToDatabase = require('./src/config/mongoose.config')
const app = require('./src/app')
const port = 3000
const clc = require("cli-color");

connectToDatabase()

app.listen(port, () => {
    const green = '\x1b[32m';
    const green2 = '\x1b[0m';
    console.log(`A aplicação está sendo executada em: ` + clc.green.underline(`${green}http://localhost:${port}/api${green2}`));
    
})