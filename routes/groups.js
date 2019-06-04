const express = require('express');
const router = express.Router();
const Group = require('../models/groups');
const Word = require('../models/words');
const Translation = require('../models/translations');

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

router.delete('/:id', async (req, res, next) => {
	try {
		const response = {};

		const group = await Group.findOneAndDelete({ _id: req.body.id });
		await Word.find({ 'groupId': req.body.id }, (err, words) => {
			words.forEach(async (word) => {
				await Translation.deleteMany({ 'wordId': word.id })
			})
		});
		const words = await Word.deleteMany({ 'groupId': req.body.id });

		response.status = 'server';
		response.group = group;
		response.words = words; 

		res.send(response);

	} catch(err) {
		const response = {};
		if (err) {
			response.status = 'error';
			response.data = err;
			res.send(response);
		}
	}
});

module.exports = router;