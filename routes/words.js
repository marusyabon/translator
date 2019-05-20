const express = require('express');
const router = express.Router();
const Word = require('../models/words');

router.get('/', function (req, res, next) {
	Word.find({}, function (err, data) {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

router.post('/', function (req, res, next) {
	let word = new Word(req.body);
	word.save((err, item) => {
		const response = {};
		if (err) {
			response.status = 'error';
		}
		else {
			response.status = 'server';
			response.data = item;
		}
		res.send(response)
	});
});

module.exports = router;