const express = require('express')
const config = require('./config');
const mysql = require('mysql2');
const db = mysql.createConnection(config.db)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  console.log(`API REQUEST @ ${req.url}\n\tRequest:\n`, req.body)
  next()
})
app.get('/test', (req, res) => {
  db.query('select 1+1', (error, results) => {
    if (error) return res.status(500).json({type: 'error', error})
    res.json({type: 'success', message: 'Test OK', results})
  })
})
const auth = require('./routes/auth')

app.use(auth)
app.listen(config.port)

module.exports = app

//uncomment this to create/update all database tables. recomment it afterwards to avoid console spam
//const { Sequelize } = require('sequelize')
//sequelize.sync({ alter: true });
