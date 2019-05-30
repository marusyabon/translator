const express = require('express');
const router = express.Router();
const Group = require('../models/groups');

router.get('/', function (req, res, next) {
	Group.aggregate([{
		$lookup: {
			from: 'words',
			localField: '_id',
			foreignField: 'groupId',
			as: 'words'
		}
	}]).exec((err, data) => {
		data.map((el) => {
			el.words = el.words.length;
			el.id = el._id;
			delete el.__v;
			return el;
		});
		res.send(data);
	});
});

router.post('/', function (req, res, next) {
	const group = new Group(req.body);
	group.save((err, item) => {
		const response = {};
		if (err) {
			response.status = 'error';
			response.data = err;
		}
		else {
			response.status = 'server';
			response.data = item;
		}
		res.send(response)
	});
});

router.delete('/:id', function (req, res, next) {
	Group.findOneAndDelete(
		{ _id: req.body.id },
		function (err, result) {
			res.send(result);
		}
	);
});

module.exports = router;