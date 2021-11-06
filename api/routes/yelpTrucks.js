const { Router } = require('express')
const router = Router()
// require('dotenv');
import axios from 'axios';

router.get('/yelpTrucks', async (req, res) => {
    // const returnArray = []
    const yelpResults = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: { 'Authorization': 'Bearer MNtggUAEpIKTd0fSOPHKHhTyZXpAdV9mumM3V32dVoamBFXA6DH5owMWN4q1_VsQXMBUU8rDWGqKdvcEO5DGRAdQsXGPDjsV0Zhx85a5jklCipFmNL2xwPjmDT-EYXYx'},
        params: {limit: req.query.limit, radius: req.query.radius, term: req.query.term, latitude: req.query.latitude, longitude: req.query.longitude, }
    })
    // console.log(req.query)
    // console.log(yelpResults.data)
    // yelpResults.data.
    res.send(yelpResults.data.businesses)
})



module.exports = router;