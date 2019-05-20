const express = require('express');
const router = express.Router();
const Group = require('../models/groups');
const Word = require('../models/words');

router.get('/', function (req, res, next) {
	Group.find({}, function (err, data) {
		if (!err) {
			data = data.map((group) => {
				group.wordsCount = 0;
				Word.find({ 'groupId': group._id })
				.populate({path: 'groupId'})
				.exec(function (err, data){
					group.wordsCount = data.length;
					console.log(group)
				});		
				return group;
			});
			res.send(arr);
		}
		else {
			res.send({ status: 'error' });
		}
	});
});

router.post('/', function (req, res, next) {
	let group = new Group(req.body);
	group.save((err, item) => {
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

router.delete('/:id', function (req, res, next) {
	Group.findOneAndDelete(
		{ _id: req.body.id },
		function (err, result) {
			res.send(result);
		}
	);
});

module.exports = router;