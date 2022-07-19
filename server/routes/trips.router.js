const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET all trips
router.get('/getTrips', rejectUnauthenticated, (req, res) => {
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
router.post('/newTrip', (req, res) => {
    // console.log(req.body)
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
            req.body.userId,
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

// UPDATE old trip (datagrid)
router.put('/updateTrip', (req, res) => {
	// console.log(req.body);
	pool.query(
		`UPDATE "trips" SET "startAddress" = $1, "endAddress" = $2, "distance" = $3, "duration" = $4, "passengers" = $5, "modelId" = $6, "carbonPounds" = $7 WHERE "id" = $8`,
		[
			req.body.startAddress,
			req.body.endAddress,
			req.body.distance,
			req.body.duration,
			req.body.passengers,
			req.body.modelId,
			req.body.carbonPounds,
			req.body.id,
		]
	)
		.then(response => {
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in POST /api/trips/updateTrip:', error);
			res.sendStatus(500);
		});
});

// UPDATE edit trip (separate page)
router.get('/editTrip/:id', rejectUnauthenticated, (req, res) => {
    // console.log('Params:',req.params.id);
    // console.log('User:', req.user.id);
    pool.query(`SELECT * FROM "trips" WHERE id = $1 AND user_id = $2`, [req.params.id, req.user.id])
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Error in GET /api/editTrip:', error);
            res.sendStatus(500);
        });
});

// DELETE trip
router.delete('/:id', (req, res) => {
    // console.log('DELETE /api/trips/:id', req.params);
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
