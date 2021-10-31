// api/index.js

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/register', function (req, res) {
  res.send('Test successful')
})

module.exports = app
