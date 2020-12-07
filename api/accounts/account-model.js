// db access function here
const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

function getAll() {
    return db('accounts')
};

function getById(id) {
    return db('accounts').where({ id }).first()
};

function create(account) {
    return db('accounts').insert(account)
        .then((id) => {
            return db('accounts').where({ id }).first()
        })
};

function update(id, account) {
    return db('accounts').where({ id }).update(account)
};

function remove(id) {
    return db('accounts').where({ id }).del()
};