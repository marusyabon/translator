const express = require('express');
const router = express.Router();
const Group = require('../models/groups');
const Word = require('../models/words');

router.get('/', function (req, res, next) {
	Group.find({}, function (err, data) {
		if (!err) {
			// const arr = data.map((group) => {
			// 	Word.find({ 'groupId': group._id }).estimatedDocumentCount((err, count) => {
			// 		group.wordsCount = count;
			// 	});		
			// 	return group;
			// });
			// res.send(arr);
			res.send(data);
		}
		else {
			res.send({ status: 'error' });
		}
	});
});

router.post('/', function (req, res, next) {
	let group = new Group(req.body);
	group.save((err) => {
		if (err) {
			res.send({ status: 'error' });
		}
		else {
			res.send("Group saved");
		}
	});
});

module.exports = router;