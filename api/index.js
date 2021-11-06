const express = require('express')
const cookieSession = require('cookie-session')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
	console.log(`API REQUEST @ ${req.url}\n\tRequest:\n`, req.body)
	next()
})

app.set('trust proxy', 1) // trust first proxy

app.use(
	cookieSession({
		name: 'session',
		keys: ['MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ', 'KBgQDHneX1TGQ7F1+QfhGxRocudH2u0OxON'],
	})
)

//include routes
const auth = require('./routes/auth')
const yelpTrucks = require('./routes/yelpTrucks')
const savedTrucks = require('./routes/savedTrucks')

app.use(yelpTrucks)
app.use(auth)
app.use(savedTrucks)
// app.listen(config.port)

module.exports = app

//uncomment this to create/update all database tables. recomment it afterwards to avoid console spam
//const { Sequelize } = require('sequelize')
//const UserModel = require('../models/user')
//const UserTruckModel = require('../models/truck')
//sequelize.sync({ alter: true });
