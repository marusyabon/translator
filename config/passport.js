const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');

const UserModel = require('../models/users');

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
}, async (username, password, done) => {
	try {
		console.log(`passport name: ${username}`)
		const userDocument = await UserModel.findOne({ username: username }).exec((err, user) => {
			console.log(`mongoose res: ${err, user}`)
		});

		const passwordsMatch = await bcrypt.compare(password, userDocument.passwordHash, (err, isMatch) => {
			debugger
			console.log(`passwordsMatch ${errr, isMatch}`)
		});
		
		if (passwordsMatch) {
			return done(null, userDocument);
		} else {
			return done('Incorrect Username / Password');
		}
	} catch (error) {
		done(error);
	}
}));

passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
	(jwtPayload, done) => {
		if (Date.now() > jwtPayload.expires) {
			return done('jwt expired');
		}

		return done(null, jwtPayload);
	}
));