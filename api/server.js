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
            res.status(500).json({ message: 'Message here.' })
        })
})

server.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const account = await db('accounts').where({ id })
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

server.post('/', async (req, res) => {
    const newAccount = req.body
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Message here.' })
    }
})

server.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedAccounts = req.body
    try {
        const count = await db('accounts').update(updatedAccounts).where({ id })
        if (count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ message: 'Message here.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Message here.' })
    }
})

server.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const count = await db('accounts').where({ id }).del()
        if (count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ messsage: 'Message here.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Message here.' })
    }
})

server.use(express.json());

module.exports = server;
