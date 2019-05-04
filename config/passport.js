const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');

const UserModel = require('../models/users');

const cookieExtractor = (req) => {
	let token = null;
	const cookie = req.headers.cookie;
	if (req && cookie) {
		const cookieArr = cookie.split(' ');
		cookieArr.forEach((el) => {
			if (el.indexOf('jwt') == 0) {
				token = el.split("=")[1];
			}
		});
	}
	return token;
};
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = "your_jwt_secret";

passport.use('local', new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
}, async (username, password, done) => {
	try {
		const userDocument = await UserModel.findOne({ username: username });

		bcrypt.compare(password, userDocument.passwordHash, (err, isMatch) => {
			if (isMatch) {
				return done(null, userDocument);
			} else {
				return done('Incorrect Username / Password');
			}
		});		
	} catch (error) {
		done(error);
	}
}));

passport.use('jwt', new JWTStrategy(opts, (jwtPayload, done) => {

	if (Date.now() > jwtPayload.expires) {
		return done('jwt expired');
	}

	return done(null, jwtPayload);
}
));