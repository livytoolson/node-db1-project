const express = require('express');
const Account = require('../data/dbConfig');

const router = express.Router();

//create
Account.post('/:id', (req, res) => {

})

//read
Account.get('/', (req, res) => {

})

Account.get('/:id', (req, res) => {

})

//update
Account.put('/:id', (req, res) => {

})

//delete
Account.delete('/:id', (req, res) => {

})

module.exports = router