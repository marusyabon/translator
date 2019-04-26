const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

router.post('/', auth.optional, (req, res, next) => {
	const user = JSON.parse(req.body.user);
		
	if (!user.email) {
		return res.status(422).json({
			errors: {
				email: 'is required',
			},
		});
	}

	if (!user.password) {
		return res.status(422).json({
			errors: {
				password: 'is required',
			},
		});
	}

	const finalUser = new Users(user);
	const token = finalUser.toAuthJSON();

	finalUser.setPassword(user.password);
	finalUser.token =  token;

	return finalUser.save()
		.then(() => res.json({ user: token }));
});

module.exports = router;