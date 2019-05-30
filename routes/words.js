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
		console.log(data)
		res.send(data);
	});;
});

router.post('/', function (req, res, next) {
	let word = JSON.parse(req.body.word);
	word = new Word(word);

	const translations = JSON.parse(req.body.translations);

	word.save((err, item) => {
		const response = {};
		if (err) {
			response.status = 'error';
			res.send(response)
		}
		else {
			const arr = [];
			translations.forEach((tr) => {
				tr.wordId = item._id;
				arr.push(tr);
			});

			Translation.insertMany(arr, (err, words) => {
				if (err) {
					response.status = 'error';
				}
				else {
					response.status = 'server';
					response.data = {
						word: item,
						translations: words
					};
				}
				res.send(response)				
			});
		}
	});
});

module.exports = router;