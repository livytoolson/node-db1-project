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

server.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const [account] = await db('accounts').where({ id })
        if (account) {
            res.status(200).json(account)
        } else {
            res.status(404).json({ message: 'Message here.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Message here.' })
    }
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
