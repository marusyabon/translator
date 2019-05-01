const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {

	const { headers: { cookie } } = req;
	const cookieArr = cookie.split(' ');
	cookieArr.forEach((el) => {
		if (el.indexOf('jwt') == 0) {
			const token = el.split("=")[1];
			return token;
		}
	});

	return null;
};

const auth = {
	required: jwt({
		secret: 'secret',
		userProperty: 'payload',
		getToken: getTokenFromHeaders,
	}),
	optional: jwt({
		secret: 'secret',
		userProperty: 'payload',
		getToken: getTokenFromHeaders,
		credentialsRequired: false,
	}),
};

module.exports = auth;