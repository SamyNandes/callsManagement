const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()


app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev')) ; 
 

const index = require('./routes/index')
app.use(index);

const usersRouter = require('./routes/user.routes')
app.use("/api", usersRouter)


module.exports = app;