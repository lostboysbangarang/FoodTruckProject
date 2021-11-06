const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../sequelize')

const SavedTrucks = sequelize.define('User_Trucks', {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	parent_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	parent_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_I_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_I_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_I_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_II_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_II_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_II_child_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_II_child_src: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_II_child_alt: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_III_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_III_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_III_child_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_III_child_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_IV_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_I_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_I_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_IV_child_II_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_II_child_I_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_IV_child_II_child_I_innerHTML_break: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_II_child_II_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_IV_child_II_child_II_innerHTML_break: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_II_child_III_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_IV_child_II_child_III_href: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	child_IV_child_II_child_III_innerHTML: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_child_I_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_child_I_type_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_child_II_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	child_V_child_II_class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

module.exports = SavedTrucks