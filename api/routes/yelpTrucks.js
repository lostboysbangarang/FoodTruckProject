const { Router } = require('express')
const FavTruck = require('../models/favoriteTruck')
import axios from 'axios'

const router = Router()

router.get('/yelpTrucks', async (req, res) => {
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

	let favs = []
	let favs_data = await FavTruck.findAll({ where: { user_id: req.session.user.id } })
	for (const fav of favs_data) {
		favs.push(fav.truck_id)
	}

	res.send({ trucks: yelpResults.data.businesses, favs: favs })
})

router.post('/favoriteTruck', async (req, res) => {
	let fav = FavTruck.build()

	console.log('truckId', req.body.truckId)

	fav.user_id = req.session.user.id
	fav.truck_id = req.body.truckId

	fav.save()

	res.sendStatus(200)
})

router.post('/unfavoriteTruck', async (req, res) => {
	FavTruck.destroy({
		where: {
			user_id: req.session.user.id,
			truck_id: req.body.truckId,
		},
	})

	res.sendStatus(200)
})

module.exports = router
