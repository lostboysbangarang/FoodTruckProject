const config = require('./config')
const mysql = require('mysql2')

const connection = mysql.createConnection(config.db);
connection.connect();

module.exports = connection;