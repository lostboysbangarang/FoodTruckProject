const { Router } = require('express')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/user')

const router = Router()

/* POST users listing. */
router.post('/register', function (req, res, next) {
  const user = UserModel.build()

  //todo: Validate data

  console.log(req)

  user.username = req.body.userName
  user.email = req.body.email
  user.password = req.body.password1

  user
    .save()
    .then((item) => {
      res.json({ good: true })
    })
    .catch((error) => {
      res.status(400)
      if (error instanceof Sequelize.UniqueConstraintError) {
        res.json({ error: 'Duplicate username or email.' })
      } else {
        res.json({ error: 'Unknown error. Fail.', data: error })
      }
    })
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
