const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

// GET all trips
router.get('/:id', (req, res) => {
    pool.query(`SELECT * FROM "trips" WHERE user_id = $1 ORDER BY "id" ASC`, [req.params.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error for recieving user trips', error);
            res.sendStatus(500);
        });
});

// POST a new trip
router.post('/', (req, res) => {
    console.log(req.body);
	pool.query(
		`INSERT INTO "trips" ("startAddress", "endAddress", "distanceMiles", "duration", "passengers", "estimateId", "vehicleModelId", "vehicleYear", "vehicleMake", "vehicleModel", "carbonPounds", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
		[
			req.body.startAddress,
			req.body.endAddress,
			req.body.distanceMiles,
			req.body.duration,
			req.body.passengers,
			req.body.estimateId,
			req.body.vehicleModelId,
			req.body.vehicleYear,
			req.body.vehicleMake,
			req.body.vehicleModel,
			req.body.carbonPounds,
            req.body.userId,
		]
	)
		.then(() => {
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in POST /api/trip:', error);
			res.sendStatus(500);
		});
});

// GET Route
router.get('/', (req, res) => {
	// GET route code here
});

module.exports = router;
