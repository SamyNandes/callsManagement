const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userData = decoded;
        next()  
    } catch (error) {
        return res.status(401).json({ message: `Falha na Autenticação! erro: ${error}` });
    }
}