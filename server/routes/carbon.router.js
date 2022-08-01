const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

/**
 * @api {get} /tasks Gets all Makes
 * @apiGroup Makes
 * @apiSuccess {Object[]} makes Makes array of objects
 * @apiSuccess {Number} make.id Make Carbon Interface ID
 * @apiSuccess {String} make.type Type of Vehicle Make
 * @apiSuccess {Object[]} makes Makes array of attributes
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [
 *      {
 *          data: {
 *              id: 'c0d79b67-76e8-442d-b105-2c73501948a9',
 *              type: 'vehicle_make',
 *              attributes: [Object]
 *          },
 *          {
 *              data: {
 *              id: 'c0d79b67-76e8-442d-b105-2c73501948a9',
 *               type: 'vehicle_make',
 *               attributes: [Object]
 *           }
 *       }
 *  ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

// POST new makes
router.get('/makes', (req, res) => {
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
        console.log('CARBON API SERVER response:', response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log('Error in POST /api/carbon/makes:', error);
        res.sendStatus(500);
    });
});

// POST new years
router.post('/years', (req, res) => {
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
        console.log('Error in POST /api/carbon/years:', error);
        res.sendStatus(500);
    });
});

// POST new models
router.post('/models', (req, res) => {
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
        console.log('Error in POST /api/carbon/years:', error);
        res.sendStatus(500);
    });
});

// POST new estimate
router.post('/estimate', (req, res) => {
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
        console.log('Error in POST /api/carbon/estimate:', error);
        res.sendStatus(500);
    });
});

module.exports = router;
