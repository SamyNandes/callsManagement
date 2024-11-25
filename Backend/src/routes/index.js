const express = require('express');
const router = express.Router();

router.get("/api/v1", (req, res) => {
	res.status(200).send(
	{
	Message: "Bem-vindo(a)!" ,
	Sucess: true
    }
	)
})

module.exports = router