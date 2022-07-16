const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
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
router.post('/newTrip', (req, res) => {
    console.log(req.body)
	pool.query(
		`INSERT INTO "trips" ("startAddress", "endAddress", "distance", "duration", "passengers", "estimateId", "modelId", "year", "make", "model", "carbonPounds", "userId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
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
			console.log('Error in POST /api/trips:', error);
			res.sendStatus(500);
		});
});

// POST maps
router.post('/maps', (req, res) => {
    // console.log('MAPS API SERVER req.body:', req.body.directionsUrl + process.env.GOOGLE_MAPS_KEY);
    axios
		.get(req.body.directionsUrl + process.env.GOOGLE_MAPS_KEY)
		.then(response => {
			console.log('MAPS API SERVER response:', response.data.routes[0].legs[0]);
			res.send(response.data.routes[0].legs[0]);
		})
		.catch(error => {
			console.log('Error in POST /api/trips/maps:', error);
			res.sendStatus(500);
		});
});

// POST new makes
router.get('/carbon/makes', (req, res) => {
    // console.log('CARBON API SERVER req.body:', req.body);
    axios({
        method: 'GET',
        url: 'https://www.carboninterface.com/api/v1/vehicle_makes',
        headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.CARBON_INTERFACE_KEY}`,
		},
    })
    .then(response => {
        // console.log('CARBON API SERVER response:', response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log('Error in POST /api/trips/carbon/makes:', error);
        res.sendStatus(500);
    });
});

// POST new years
router.post('/carbon/years', (req, res) => {
	// console.log('CARBON API SERVER req.body:', req.body.make);
	axios({
        method: 'GET',
        url: `https://www.carboninterface.com/api/v1/vehicle_makes/${req.body.make}/vehicle_models`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CARBON_INTERFACE_KEY}`,
        },
    })
    .then(response => {
        // console.log('CARBON API SERVER response:', response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log('Error in POST /api/trips/carbon/years:', error);
        res.sendStatus(500);
    });
});

// POST new models
router.post('/carbon/models', (req, res) => {
	// console.log('CARBON API SERVER req.body:', req.body.make);
	axios({
		method: 'GET',
		url: `https://www.carboninterface.com/api/v1/vehicle_makes/${req.body.make}/vehicle_models`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.CARBON_INTERFACE_KEY}`,
		},
	})
    .then(response => {
        // console.log('CARBON API SERVER response:', response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log('Error in POST /api/trips/carbon/years:', error);
        res.sendStatus(500);
    });
});

// POST new estimate
router.post('/carbon/estimate', (req, res) => {
    // console.log('CARBON API SERVER req.body:', req.body);
    axios({
		method: 'POST',
		url: 'https://www.carboninterface.com/api/v1/estimates',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.CARBON_INTERFACE_KEY}`,
		},
		data: {
			type: 'vehicle',
			distance_unit: 'mi',
			distance_value: req.body.distance_value,
			vehicle_model_id: req.body.vehicle_model_id,
		},
	})
    .then(response => {
        // console.log('CARBON API SERVER response:', response.data.data);
        res.send(response.data.data);
    })
    .catch(error => {
        console.log('Error in POST /api/trips/carbon/estimate:', error);
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
