const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth');
const Users = mongoose.model('Users');
const Tokens = mongoose.model('Tokens');
const logout = require('express-passport-logout');

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
	const token = finalUser.toAuthJSON();

	finalUser.setPassword(user.password);
	finalUser.token =  token;

	return finalUser.save()
		.then(() => res.json({ user: token }));
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
			res.header('authorization', user.token);
			return res.json({ user: user.toAuthJSON() });
		}

		return res.status(400).json(info);

	})(req, res, () => {
		res.status(200).send('Success');
	});
});

//GET current route (required, only authenticated users have access)
router.get('/check', auth.required, (req, res, next) => {

	if (req.payload) {
		const { payload: { id } } = req;
		const { headers: { authorization } } = req;

		Tokens.findOne(
			{ invalidToken: authorization }, 
			(err, token) => {
				if (token) {
					return res.sendStatus(401);
				}				
		})	
		
		return Users.findById(id)
			.then(
				(user) => {
					if (!user) {
						return res.sendStatus(400);
					}

					else {
						const resUser = {
							user: user.toAuthJSON(),
							allowAccess: true
						};

						return res.send(resUser);
					}
				}
			)
	}

	return null

});

router.get('/logout', (req, res) => {
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