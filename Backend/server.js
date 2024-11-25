const connectToDatabase = require('./src/config/mongoose.config')
const port = process.env.PORT || 3000
const app = require('./src/app')

connectToDatabase()

app.listen(port, () => {
    console.log(`A aplicação está sendo executada em ${port}`)
})