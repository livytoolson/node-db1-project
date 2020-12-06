const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "development";

module.exports = knex(knexfile[database]);

// const knex = require('knex');
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.development);

// function get() {
//     return db('accounts');
// }

// function getById(id) {
//     return db('accounts').where(id: Number(id));
// }

// function insert() {
//     return db('accounts')
//         .insert(account, 'id')
//         .then(ids => ({ id: ids[0] }));
// }

// function update(id, account) {
//     return db('accounts')
//         .where('id', Number(id))
//         .update(account)
// }

// function delete(id) {
//     return db('accounts')
//         .where('id', Number(id))
//         .del();
// }
