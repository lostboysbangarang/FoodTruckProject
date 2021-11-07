const { Router } = require('express')
const router = Router()
const { Sequelize } = require('sequelize')
// require('dotenv');
import axios from 'axios'
const UserTruck = require('../models/truck')
const db = require('../connection')

router.get('/trucks', async (req, res) => {
	// const trucks = UserTruck.build();
	// console.log(trucks);
	db.query(`select * from User_Trucks`, (err, data) => {
		if (err) throw err
		res.send(data)
		console.log(data)
	})
	// res.send(trucks)
})
router.get('/yelpID', async (req, res) => {
	// const returnArray = []
	const yelpResults = await axios.get('https://api.yelp.com/v3/businesses/search', {
		headers: {
			Authorization:
				'Bearer MNtggUAEpIKTd0fSOPHKHhTyZXpAdV9mumM3V32dVoamBFXA6DH5owMWN4q1_VsQXMBUU8rDWGqKdvcEO5DGRAdQsXGPDjsV0Zhx85a5jklCipFmNL2xwPjmDT-EYXYx',
		},
		params: {
			limit: req.query.limit,
			radius: req.query.radius,
			term: req.query.term,
			latitude: req.query.latitude,
			longitude: req.query.longitude,
		},
	})
	// console.log(req.query)
	console.log(yelpResults.data.businesses)
	// yelpResults.data.
	// yelpResults.findOne({where:{businesses.id: }})
	// yelpResults.forEach(element => {
	//     console.log(element)
	// })
	res.send(yelpResults.data.businesses)
})

router.get('/checkHeart', async (req, res) => {
	db.query('SELECT User_Trucks.index_num FROM User_Trucks WHERE checkbox=1', (err, data) => {
		if (err) throw err
		// console.log(data);
		res.send(data)
	})
	// console.log(checkers)
	// res.render('trucks', {
	//     message: results[0]
	// })

	// response.sendStatus(200);
})

router.post('/saveYelp', async (req, res) => {
	console.log(req.body)
	db.promise()
		.query(`  INSERT INTO foodtruck.User_Trucks SET ?`, {
			yelp_name: req.body.name,
			image_url: req.body.image_url,
			alias: req.body.alias,
			is_closed: req.body.is_closed,
			display_phone: req.body.display_phone,
			address1: req.body.address1,
			city: req.body.city,
			yelp_state: req.body.state,
			yelp_url: req.body.url,
			checkbox: req.body.checkbox,
			index_num: req.body.index_num,
		})
		.catch((err) => {
			res.status(400)
			if (error instanceof Sequelize.UniqueConstraintError) {
				res.json({
					error: 'Duplicate',
				})
			} else {
				res.json({
					error: 'Unknown error. Fail.',
					data: error,
				})
				console.log(user + ': ' + error)
			}
		})
	console.log(res.affected_rows)
	res.send(res.affected_rows)
})
module.exports = router
