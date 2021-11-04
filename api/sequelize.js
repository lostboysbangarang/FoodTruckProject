const { Sequelize } = require('sequelize')
require('dotenv')

const sequelize = new Sequelize(
<<<<<<< HEAD
//  'mysql://foodmaker:1234abcd@localhost/foodtruck'
=======
	'foodtruck',
	'foodmaker',
	'1234abcd',
	{
		host: 'localhost',
		dialect: 'mysql',
		port: '3306',
	}
	// 'mysql://foodmaker:1234abcd@localhost/foodtruck'
>>>>>>> f05dbb1e095e6020b6bdcdecd6ebbf282bc3da49
)

sequelize.authenticate()

module.exports = sequelize
