const db = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "alexandreb",
    password: "alexandreb",
    database: "livraria"
  }
})

module.exports = db
