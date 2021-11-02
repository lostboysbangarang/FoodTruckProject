const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'mysql://foodmaker:1234abcd@localhost/foodtruck'
)

sequelize.authenticate()

module.exports = sequelize
