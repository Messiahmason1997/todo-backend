var express = require('express');
var router = express.Router();
const Todos = require('../models/Todos');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/fetch', (req, res, next) => {
	Todos.find({}, (err, data) => {
		// console.log(err);
		const responseObject = {
			success: true,
			data: data,
			message: 'Successfully fetched todos',
		};

		// console.log(responseObject);
		res.json(responseObject);
	});
});

router.get('/fetch/single', (req, res) => {
	const { id } = req.query;
	console.log(id);

	Todos.find({}, (err, data) => {
		// console.log(err);
		console.log(data);
		res.json({
			success: true,
			data: {
				text: '摸鱼',
				isCompleted: false,
			},
		});
	});
});

module.exports = router;
