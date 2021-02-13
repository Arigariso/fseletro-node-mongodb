const express = require('express')
const server = express()
const Comentarios = require('../src/models/Comentarios')
const cors = require('cors')
const connection = require('./connection')

server.use(express.json())
server.use(cors());


const port = 8080
server.listen(port, () => {
    console.log("http://localhost:" + port)
})

server.get("/produtos", async (req, res) => {
    const resultado = await Produtos.find()
      
    res.json(resultado)
}) 

server.post("/contatos", async (req, res) => {
    const { nome } = req.body;
    const { msg } = req.body;

    let resultado = await Comentarios.create({ nome, msg })

    res.json(resultado)
})