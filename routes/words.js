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

router.post('/', async (req, res, next) => {
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
			response.data = err;
			res.send(response);
		}
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const response = {};

		const word = await Word.findOneAndDelete({ _id: req.body.id });
		const translations = await Translation.deleteMany({ 'wordId': req.body.id });

		response.status = 'server';
		response.word = word; 
		response.translations = translations;

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