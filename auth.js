const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
	// if (req.headers.authorization != 'null') {
	// 	const { headers: { authorization } } = req;
	// 	if (authorization && authorization.split(' ')[0] === 'Token') {
	// 		return authorization.split(' ')[1];
	// 	}		
	// }	

	const { headers: { cookie } } = req;
	const cookieArr = cookie.split(' ');
	cookieArr.forEach((el) => {
		if (el.indexOf('jwt') == 0) {
			const token = el.split("=")[1];
			return token.split(".")[1];
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