/*-----------------------------------------------------------------------    
  Autor: Samyra Fernandes da Silva  
  Data: 15/12/2024  
  Descrição: Lógicas de controle das rotas referente a call.
  Tecnologias: Node.js.
  Dependências: 
    callModel - Módulo do esqueleto de Call.
  Instruções: Nenhuma.
------------------------------------------------------------------------*/

const callModel = require("../models/call.model");

// ==> Função assincrona de criação de chamada.
exports.createCall = async (req, res) => {
    try {
        req.body.stateCall = "Pendent"
        await callModel.create(req.body)
        res.status(200).json({ message: "Chamada criada com sucesso!"})
   } catch (error) {
        res.status(500).send(error.message)
   }
}

// ==> Função assincrona que retorna todas as chamadas de acordo com o Id do user

exports.callReturnById = async (req, res) => {
    try {
        const idUser = req.userToken._id
        const collection = await callModel.find({idCallUser: idUser})
        res.json(collection).status(200)
    } catch (error) {
        res.send(error.message).status(500)   
    }
}


// ==> Função assincrona de retorno de chamada.
exports.callReturn = async (req, res) => {
try {
    let result = await callModel.find({});
    const dataOfUser = req.userToken
    res.status(200).json({ calls: result, dataOfUser})
} catch (error) {
    res.send(error.message).status(500)
}
}

// ==> Função assincrona de exclusão de chamada.
exports.callRemove = async (req, res) => {
try {
    const idCall = req.params.id
    await callModel.findByIdAndDelete(idCall)
} catch (error) {
    res.send({ message: `${error}`}).status(500)
}
}

// ==> Função assincrona de modificação de chamada.
exports.callModify = async ( req, res ) => {
try {
    const id = req.params.id;
    const state = req.body.stateCall;
    const updateCall = await callModel.findByIdAndUpdate( 
        {
           _id: id
        },
        {
            stateCall: state
        },
        { new: true }
    ) 
    res.status(200).json({
        call: updateCall
    })
} catch (error) {
    res.send({ message: `${error}` }).status(500)
}
}