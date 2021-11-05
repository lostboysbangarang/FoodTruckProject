const { Sequelize } = require('sequelize')
require('dotenv')

// todo: Move credentials including DB name to environment variables
const sequelize = new Sequelize(
	'foodtruck',
	'foodmaker',
	'1234abcd',
	{
		host: 'localhost',
		dialect: 'mysql',
		port: '3306',
	}
	// 'mysql://foodmaker:1234abcd@localhost/foodtruck'
)

sequelize.authenticate()

module.exports = sequelize
