const express = require('express');
const router = express.Router();
const Word = require('../models/words');
const Translation = require('../models/translations');

router.get('/', function (req, res, next) {
	Word.aggregate([{
		$lookup: {
			from: 'translations',
			localField: '_id',
			foreignField: 'wordId',
			as: 'translations'
		}
	}]).exec((err, data) => {
		data.map((el) => {
			el.id = el._id;
			delete el.__v;
			return el;
		});

		res.send(data);
	});
});

router.post('/', async function (req, res, next) {
	let word = JSON.parse(req.body.word);
	word = new Word(word);

	const translations = JSON.parse(req.body.translations);

	try {
		const item = await word.save();
		const response = {};
		const arr = [];

		translations.forEach((tr) => {
			tr.wordId = item._id;
			arr.push(tr);
		});

		const words = await Translation.insertMany(arr);

		response.status = 'server';
		response.data = {
			word: item,
			translations: words
		};

		res.send(response);
	} catch(err) {
		const response = {};
		if (err) {
			response.status = 'error';
			res.send(response);
		}
	}
});

router.delete('/:id', function (req, res, next) {
	Word.findOneAndDelete(
		{ _id: req.body.id },
		(err, result) => {
			const response = {};

			if (!err) {
				response.word = result;
				Translation.deleteMany({ 'wordId': req.body.id },
					(err, result) => {
						if (!err) {
							response.translations = result;
						}
						res.send(response);
					}
				);
			}
		}
	);
});

module.exports = router;