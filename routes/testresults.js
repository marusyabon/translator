const express = require('express');
const router = express.Router();
const TestResult = require('../models/testresults');

router.get('/', function (req, res, next) {
	TestResult.find({}, function (err, data) {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

router.post('/', function (req, res, next) {
	let testresult = new TestResult(req.body);
	testresult.save((err) => {
		if (err) {
			res.send({status: 'error'});
		}
		else {
			res.send("Test result saved");
		}
	});
});

module.exports = router;