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
	word.save((err) => {
		if (err) {
			res.send({status: 'error'});
		}
		else {
			res.send("Word saved");
		}
	});
});

module.exports = router;