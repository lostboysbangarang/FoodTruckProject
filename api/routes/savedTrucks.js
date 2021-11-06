const { Router } = require('express')
const router = Router()
// require('dotenv');
// import axios from 'axios';
const UserTruck = require('../models/truck')
const db = require('../connection')

router.get('/trucks', async (req, res) => {
    const trucks = UserTruck.build();
    console.log(trucks);
    db.query(`select * from User_Trucks`, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
    // res.send(trucks)
})

module.exports = router