const passport = require('passport');
const router = require('express').Router();

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	res.send();
});

module.exports = router;