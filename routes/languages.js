const express = require('express');
const router = express.Router();
const Language = require('../models/languages');

router.get('/', function (req, res, next) {
	Language.find({}, function (err, data) {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

router.post('/', function (req, res, next) {
	let language = new Language(req.body);
	language.save((err) => {
		if (err) {
			res.send({status: 'error'});
		}
		else {
			res.send("Language saved");
		}
	});
});

module.exports = router;