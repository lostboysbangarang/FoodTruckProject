const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  console.log(`API REQUEST @ ${req.url}`)
  next()
})

const auth = require('./routes/auth')

app.use(auth)

module.exports = app

//uncomment this to create/update all database tables. recomment it afterwards to avoid console spam
//const { Sequelize } = require('sequelize')
//sequelize.sync({ alter: true });
