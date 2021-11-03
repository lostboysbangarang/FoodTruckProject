const { Router } = require('express')
const { Sequelize } = require('sequelize')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const router = Router()
const Users = require('../models/user')
const userArray = []
/* POST users listing. */

router.post('/register', async (req, res) => {
	const user = UserModel.build()
	console.log(req.body)
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
		} else if (
			req.body.password1.length < 3 ||
			req.body.password1 > 35
		) {
			res.status(400)
			res.json({
				error: 'Password must be between 3 and 35 characters long.',
			})
		} else if (req.body.password1 != req.body.password2) {
			res.status(400)
			res.json({ error: 'Password must be the same' })
		} else {
			user.username = req.body.userName
			user.email = req.body.email
			const salt = await bcrypt.genSalt()
			const hashBrowns = await bcrypt.hash(
				req.body.password1,
				salt
			)
			user.password = hashBrowns
			console.log(hashBrowns)
			console.log(user)
			const userProfile = {
				username: req.body.username,
				email: req.body.email,
				password: hashBrowns,
			}
			userArray.push(userProfile)
			user.save()
				.then((item) => {
					console.log(`Item:\t${item}`)
					res.json({ good: true })
				})
				.catch((error) => {
					res.status(400)
					if (
						error instanceof
						Sequelize.UniqueConstraintError
					) {
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
		}
	} catch (err) {
		res.status(500).send()
		console.log(err)
	}
})

router.post('/login', async (req, res) => {
	return UserModel.findAll({ where: { email: req.body.email } })
		.then((users) => {
			users.forEach(async (user) => {
				try {
					if (
						await bcrypt.compare(
							req.body.password,
							user.password
						)
					) {
						res.send('Success!')
					} else {
						res.send('Invalid!')
					}
				} catch (err) {
					res.send('Failure!')
					console.log(err)
				}
			})
		})
		.catch((error) => {
			res.status(400)
			res.json({ error: 'IDK dude', data: error })
			console.log(error)
		})
})

router.post('/login', async (req, res) => {
	const userEmail = req.body.email
	const userPassword = req.body.password
	if (!userEmail || !userPassword) {
		return res.status(400).json({
			type: 'error',
			message: 'email and password fields are essential for authentication.',
		})
	}
	const user = Users.User.findAll({ where: { email: userEmail } })
	try {
		if (await bcrypt.compare(user.password, userPassword)) {
			res.send('Success!')
		} else {
			res.send('Invalid credentials!')
		}
	} catch (err) {
		res.send('Failure!')
		console.log(err)
	}
})

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
