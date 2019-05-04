const mongoose = require('mongoose');
const router = require('express').Router();
const Tokens = mongoose.model('Tokens');

router.get('/', (req, res) => {
	const cookie = req.headers.cookie;
	const cookieArr = cookie.split(' ');
	cookieArr.forEach((el) => {
		if (el.indexOf('jwt') == 0) {
			const token = el.split("=")[1];
			const currentDate = new Date();
			const invalidToken = new Tokens({
				invalidToken: token,
				currentDate: currentDate
			});

			return invalidToken.save()
				.then(() => {
					res.clearCookie('jwt');
					res.status(200).send();
				});
		}
	});	
});

module.exports = router;