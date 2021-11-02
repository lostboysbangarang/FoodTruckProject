const { Router } = require('express')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/user')

const router = Router()

/* POST users listing. */
router.post('/register', function (req, res, next) {
  const user = UserModel.build()

  if (req.body.userName.length < 3 || req.body.userName > 35) {
    res.status(400)
    res.json({ error: 'Username must be between 3 and 35 characters long.' })
  } else if (!req.body.userName.match(/^[0-9a-zA-Z]+$/)) {
    res.status(400)
    res.json({ error: 'Username must be alphanumeric.' })
  } else if (
    !req.body.email.match(
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    )
  ) {
    res.status(400)
    res.json({ error: 'Email must be valid.' })
  } else if (req.body.password1.length < 3 || req.body.password1 > 35) {
    res.status(400)
    res.json({ error: 'Password must be between 3 and 35 characters long.' })
  } else if (req.body.password1 != req.body.password2) {
    res.status(400)
    res.json({ error: 'Password must be the same' })
  } else {
    //everything looks good, try to create the user in the db
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
  }
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
