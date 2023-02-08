const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

// POST maps
router.post("/", (req, res) => {
	// console.log('MAPS API SERVER req.body:', req.body.directionsUrl + process.env.GOOGLE_MAPS_KEY);
	axios
		.get(req.body.directionsUrl + process.env.REACT_APP_GOOGLE_MAPS_KEY)
		.then((response) => {
			// console.log('MAPS API SERVER response:', response.data.routes[0].legs[0]);
			res.send(response.data.routes[0].legs[0]);
		})
		.catch((error) => {
			console.log("Error in POST /api/trips/maps:", error);
			res.sendStatus(500);
		});
});

module.exports = router;
