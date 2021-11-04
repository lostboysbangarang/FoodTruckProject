const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../sequelize')

const User = sequelize.define('Users', {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			len: [3, 35],
		},
	},
	email: {
		type: DataTypes.STRING,
		unique: true,

		validate: {
			isEmail: true,
		},
	},
	password: {
		type: DataTypes.STRING,
		unique: true,
	},
})

module.exports = User
