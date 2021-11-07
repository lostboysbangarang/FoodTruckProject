const { Router } = require('express')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const router = Router()
// const Users = require('../models/user')
const userArray = []
/* POST users listing. */

router.post('/register', async (req, res) => {
	try {
		if (req.body.userName.length < 3 || req.body.userName > 35) {
			res.status(400)
			res.json({
				error: 'Username must be between 3 and 35 characters long.',
			})
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
			res.json({
				error: 'Password must be between 3 and 35 characters long.',
			})
		} else if (req.body.password1 != req.body.password2) {
			res.status(400)
			res.json({ error: 'Password must be the same' })
		} else {
			const user = UserModel.build()

			user.username = req.body.userName
			user.email = req.body.email
			const salt = await bcrypt.genSalt()
			const hashBrowns = await bcrypt.hash(req.body.password1, salt)
			user.password = hashBrowns

			const userProfile = {
				username: req.body.username,
				email: req.body.email,
				password: hashBrowns,
			}
			userArray.push(userProfile)
			user.save()
				.then((item) => {
					console.log(`Item:\t${item}`)
					// res.json({ good: true })
				})
				.catch((error) => {
					res.status(400)
					if (error instanceof Sequelize.UniqueConstraintError) {
						res.json({
							error: 'Duplicate username or email.',
						})
					} else {
						res.json({
							error: 'Unknown error. Fail.',
							data: error,
						})
						console.log(user + ': ' + error)
					}
				})
			res.send({ username: userProfile.username })
		}
	} catch (err) {
		res.status(500).send()
		console.log(err)
	}
})

router.post('/login', async (req, res) => {
	UserModel.findOne({ where: { email: req.body.email } })
		.then((user) => {
			console.log(user)
			console.log('compare', req.body.password, user.password)
			bcrypt.compare(req.body.password, user.password).then((match) => {
				if (match) {
					req.session.user = user

					res.send({
						username: user.username,
					})
				} else {
					console.log('bad')
					req.session = null //kill any existing session data just in case

					// TODO: respond with 401 error and a message along the lines of "Email or password incorrect"
					res.status(401)
					res.send(false)
				}
			})
		})
		.catch((error) => {
			res.status(401)
			res.json({ error: 'IDK dude 401', data: error })
			console.log(error)
		})
})

router.get('/me', async (req, res) => {
	if (req.session || req.session.user) {
		res.sendStatus(200)
	} else {
		res.sendStatus(403)
	}
})

module.exports = router
