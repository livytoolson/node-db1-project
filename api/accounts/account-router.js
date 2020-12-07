const express = require('express');
const router = express.Router();
const Account = require('./account-model');

router.get('/', async (req, res) => {
    try {
        const data = await Account.getAll()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
       
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/', async (req, res) => {
    const newAccount = req.body
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedAccounts = req.body
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;