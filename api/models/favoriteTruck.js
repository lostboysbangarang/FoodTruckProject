const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../sequelize')

const FavTruck = sequelize.define(
	'Favorite_Truck',
	{
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
		},

		truck_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		indexes: [{ name: 'uniqe_fav', unique: true, fields: ['user_id', 'truck_id'] }],
	}
)

FavTruck.sync({ alter: true })

module.exports = FavTruck
