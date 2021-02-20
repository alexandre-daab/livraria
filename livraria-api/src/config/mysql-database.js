const db = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'alexandreb',
    password : 'alexandreb',
    database : 'livraria'
  }
}); 

module.exports = db;
