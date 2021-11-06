const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../sequelize')

const SavedTrucks = sequelize.define('User_Trucks', {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	index_num: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	yelp_name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	image_url: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	alias: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	is_closed: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	display_phone: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	address1: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	yelp_state: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	yelp_url: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	checkbox: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
	}
})

module.exports = SavedTrucks