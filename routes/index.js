const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth');
const Users = mongoose.model('Users');

//POST new user route (optional, everyone has access)
router.post('/register', auth.optional, (req, res, next) => {
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

	finalUser.setPassword(user.password);

	return finalUser.save()
		.then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
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
			return res.json({ user: user.toAuthJSON() });
		}

		return res.status(400).json(info);

	})(req, res, () => {
		res.status(200).send('Success');
	});
});

//GET current route (required, only authenticated users have access)
router.get('/home', auth.required, (req, res, next) => {
	const { payload: { id } } = req;

	return Users.findById(id)
		.then((user) => {
			if (!user) {
				return res.sendStatus(400);
			}

			return res.json({ user: user.toAuthJSON() });
		});
});

module.exports = router;