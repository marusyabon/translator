const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const Tokens = mongoose.model('Tokens');

router.get('/', auth.required, (req, res, next) => {
	if (req.payload) {
		const { payload: { id } } = req;
		const { headers: { cookie } } = req;

		const cookieArr = cookie.split(' ');
		cookieArr.forEach((el) => {
			if (el.indexOf('jwt') == 0) {
				Tokens.findOne(
					{ invalidToken: el.split("=")[1] }, 
					(err, token) => {
						if (token) {
							return res.sendStatus(401);
						}				
					});
			}
		});			
		
		return Users.findById(id)
			.then((user) => {
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
			});
	}

	return null;

});

module.exports = router;