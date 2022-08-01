const express = require('express');
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();
require('dotenv').config();

const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const s3Config = new AWS.S3({
	accessKeyId: process.env.MJ_AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.MJ_AWS_SECRET_ACCESS_KEY,
	Bucket: process.env.AWS_BUCKET_NAME,
});

const multerS3Config = multerS3({
	s3: s3Config,
	bucket: process.env.AWS_BUCKET_NAME,
	metadata: function (req, file, cb) {
		cb(null, { fieldName: file.fieldname });
	},
	key: function (req, file, cb) {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	},
});

const upload = multer({
	storage: multerS3Config,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
});

router.post('/avatar', upload.single('file'), (req, res) => {
    console.log(req.file.location);
    pool.query(`UPDATE "user" SET "avatar" = $1 WHERE "id" = $2`, [
		req.file.location, req.user.id,
	])
		.then(response => {
			console.log('Response:', response);
			res.sendStatus(201);
		})
		.catch(error => {
			console.log('Error in GET /api/avatar:', error);
			res.sendStatus(500);
		});
});

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
	// Send back user object from the session (previously queried from the database)
	res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);

	const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
	pool
		.query(queryText, [username, password])
		.then(() => res.sendStatus(201))
		.catch((err) => {
			console.log('User registration failed: ', err);
			res.sendStatus(500);
		});
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
	res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
	// Use passport's built-in method to log out the user
	req.logout();
	res.sendStatus(200);
});

module.exports = router;
