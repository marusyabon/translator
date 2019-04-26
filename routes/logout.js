const mongoose = require('mongoose');
const router = require('express').Router();
const Tokens = mongoose.model('Tokens');

router.get('/', (req, res) => {
	const token = req.headers.authorization;
	const currentDate = new Date();
	const invalidToken = new Tokens({
		invalidToken: token,
		currentDate: currentDate
	});

	return invalidToken.save()
		.then(() => {
			res.statusCode = 200;
			return res.send()
		})
});

module.exports = router;