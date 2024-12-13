const connectToDatabase = require('./src/config/mongoose.config')
const port = process.env.PORT || 3000
const app = require('./src/app')
const clc = require("cli-color");

connectToDatabase()

app.listen(port, () => {
    const green = '\x1b[32m';
    const green2 = '\x1b[0m';
    console.log(`A aplicação está sendo executada em: ` + clc.green.underline(`${green}http://localhost:${port}/api${green2}`));
    
})