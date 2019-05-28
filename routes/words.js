const express = require('express');
const router = express.Router();
const Word = require('../models/words');
const Translation = require('../models/translations');

router.get('/', function (req, res, next) {
	Word.find({}, function (err, data) {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
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