const userModel = require('../models/user.model.js') 
const express = require('express')
const router = express.Router()

router.post("/", async (req, res) => {
    const {name, email, senha} = req.body

    if (!name || !email || !senha){
        try {
            
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    try {
        const user = await userModel.create(req.body)
        return res.status(201).json(user)
    } catch (error) {
        console.log(req.body)
        console.log(`Um erro ocorreu: ${error}`)
        res.status(500).send(error.message)
    }
})

module.exports = router