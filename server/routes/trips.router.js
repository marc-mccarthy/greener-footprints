const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET all trips
router.get('/getTrips', rejectUnauthenticated, (req, res) => {
    // console.log(req.user.id)
    pool.query(`SELECT * FROM "trips" WHERE user_id = $1 ORDER BY "id" ASC`, [req.user.id])
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Error in GET /api/trips:', error);
            res.sendStatus(500);
        });
});

// GET find trip
router.get('/findTrip/:id', rejectUnauthenticated, (req, res) => {
    // console.log('Params:',req.params.id);
    pool.query(`SELECT * FROM "trips" WHERE id = $1 AND user_id = $2`, [req.params.id, req.user.id])
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Error in GET /api/findTrip:', error);
            res.sendStatus(500);
        });
});

// POST new trip
router.post('/newTrip', rejectUnauthenticated, (req, res) => {
	// console.log(req.body)
    // console.log(req.user.id)
	pool.query(
		`INSERT INTO "trips" ("startAddress", "endAddress", "distance", "duration", "passengers", "estimateId", "modelId", "year", "make", "model", "carbonPounds", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
		[
			req.body.startAddress,
			req.body.endAddress,
			req.body.distance,
			req.body.duration,
			req.body.passengers,
			req.body.estimateId,
			req.body.modelId,
			req.body.year,
			req.body.make,
			req.body.model,
			req.body.carbonPounds,
			req.user.id,
		]
	)
		.then(response => {
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in POST /api/trips/newTrip:', error);
			res.sendStatus(500);
		});
});

// UPDATE old trip
router.put('/updateTrip', rejectUnauthenticated, (req, res) => {
	// console.log(req.body);
    // console.log(req.user.id);
	pool.query(
		`UPDATE "trips" SET "startAddress" = $1, "endAddress" = $2, "distance" = $3, "duration" = $4, "passengers" = $5, "estimateId" = $6, "modelId" = $7, "year" = $8, "make" = $9, "model" = $10, "carbonPounds" = $11, "user_id" = $12 WHERE "id" = $13`,
		[
			req.body.startAddress,
			req.body.endAddress,
			req.body.distance,
			req.body.duration,
			req.body.passengers,
			req.body.estimateId,
			req.body.modelId,
			req.body.year,
			req.body.make,
			req.body.model,
			req.body.carbonPounds,
			req.user.id,
			req.body.id,
		]
	)
		.then(response => {
            console.log('Response:', response);
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in POST /api/trips/updateTrip:', error);
			res.sendStatus(500);
		});
});



// DELETE trip
router.delete('/:id', (req, res) => {
    // console.log('DELETE /api/trips/:id', req.params);
    pool.query(
        `DELETE FROM "trips" WHERE "id" = $1 AND "user_id" = $2`,
        [req.params.id, req.user.id]
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
