const { Router } = require('express')
const UserModel = require('../models/user')

const router = Router()

const sequelize = require('../sequelize')

/* POST users listing. */
router.post('/register', function (req, res, next) {
  const user = UserModel.build()

  //todo: Validate data

  //user.username = req.body.username;
  user.username = 'test'
  user.email = 'fuck@you'
  user.password = 'foobar'

  user.save()

  res.json({ good: true })
})

// Mock Users
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
