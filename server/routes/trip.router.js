const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

// POST Route
router.post('/', (req, res) => {
    console.log(req.body);
	pool.query(
		`INSERT INTO "greener_prints" ("startAddress", "endAddress", "distanceMiles", "duration", "passengers", "estimateId", "vehicleModelId", "vehicleYear", "vehicleMake", "vehicleModel", "carbonPounds") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
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
