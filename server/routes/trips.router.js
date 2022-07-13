const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET all trips
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "trips" WHERE user_id = $1 ORDER BY "id" ASC`, [req.user.id])
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Error in GET /api/trips:', error);
            res.sendStatus(500);
        });
});

// POST new trip
router.post('/', (req, res) => {
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
		.then(response => {
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in POST /api/trips:', error);
			res.sendStatus(500);
		});
});

// DELETE trip
router.delete('/:id', (req, res) => {
    pool.query(
        `DELETE FROM "trips" WHERE "id" = $1`,
        [req.params.id]
    )
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error in DELETE /api/trips:', error);
            res.sendStatus(500);
        });
});

module.exports = router;
