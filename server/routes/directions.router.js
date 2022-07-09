const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

/**
 * GET route template
 */
router.post('/', (req, res) => {
    console.log(req.body.string);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
	// POST route code here
});

module.exports = router;
