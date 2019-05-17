const express = require('express');
const router = express.Router();
const Group = require('../models/groups');

router.get('/', function (req, res, next) {
	Group.find({}, function (err, data) {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

router.post('/', function (req, res, next) {
	let group = new Group(req.body);
	group.save((err) => {
		if (err) {
			res.send({status: 'error'});
		}
		else {
			res.send("Group saved");
		}
	});
});

module.exports = router;