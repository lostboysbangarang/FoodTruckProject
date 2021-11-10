const { Sequelize } = require('sequelize')
require('dotenv')

// todo: Move credentials including DB name to environment variables

const sequelize = new Sequelize(
	process.env.MYSQL_DB || 'foodtruck',
	process.env.MYSQL_USER || 'foodmaker',
	process.env.MYSQL_PASSWORD || '1234abcd',
	{
		host: process.env.MYSQL_ADDRESS || 'localhost',
		dialect: 'mysql',
		port: process.env.MYSQL_PORT || 3306,
		reconnect: true,
	}
)

sequelize.authenticate()

module.exports = sequelize
