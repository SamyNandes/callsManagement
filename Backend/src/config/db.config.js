require('dotenv').config();

module.exports = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.txrj0.mongodb.net/service_requests?retryWrites=true&w=majority&appName=Cluster0`