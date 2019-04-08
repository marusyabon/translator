const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
	usernameField: 'user[email]',
	passwordField: 'user[password]',
}, 
(email, password, done) => {
	const u_email = JSON.parse(email);
	const u_pass = JSON.parse(password);
	Users.findOne({ email: u_email.email })
		.then((user) => {
			if (!user || !user.validatePassword(u_pass.password)) {
				return done(null, false, { errors: { 'email or password': 'is invalid' } });
			}

			return done(null, user);
		}).catch(done);
}));