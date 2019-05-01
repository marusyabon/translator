const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');

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

	return passport.authenticate('local', { 
		session: false 
	}, 
		
	(err, passportUser, info) => {
		if (err) {
			return next(err);
		}

		if (passportUser) {
			const user = passportUser;
			user.token = passportUser.generateJWT();
			res.cookie('jwt', user.token);
			const userJson = user.toAuthJSON();
			return res.json({ user: userJson });
		}

		return res.status(400).json(info);

	})(req, res, () => {
		res.status(200).send('Success');
	});
});

module.exports = router;