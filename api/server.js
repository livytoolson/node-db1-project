const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.get('/', (req, res) => {
    const getAll = db('*').from('accounts').toString();
    db('accounts')
        .then(account => {
            res.status(200).json(account)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: ' ' })
        })
})

server.get('/:id', (req, res) => {
    const { id } = req.params
})

server.post('/', (req, res) => {

})

server.put('/:id', (req, res) => {
    const { id } = req.params
})

server.delete('/:id', (req, res) => {
    const { id } = req.params
})

server.use(express.json());

module.exports = server;
