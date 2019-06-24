const express = require('express');
const router = express.Router();
const TestResult = require('../models/testresults');

router.get('/', function (req, res, next) {
	TestResult.find({}).
		populate('groupId').
		sort({score: 1}).
		sort({passedDate: -1}).
		exec(function (err, data) {
			if (!err) {
				res.send(data);
			}
			else {
				res.send({ status: 'error' });
			}
		});
});

router.post('/', function (req, res, next) {
	let testresult = new TestResult(req.body);
	testresult.save((err, item) => {
		const response = {};
		if (err) {
			response.status = 'error';
			response.data = err;
		}
		else {
			response.status = 'server';
			response.data = item;
		}
		res.send(response);
	});
});

module.exports = router;