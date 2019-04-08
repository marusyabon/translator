const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'some-random-pass', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/translatorDB', { useNewUrlParser: true });
mongoose.set('debug', true);

if(!isProduction) {
app.use(errorHandler());
}

//Models & routes
require('./models/user');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if(!isProduction) {
	app.use((err, req, res) => {

		res.status(err.status || 500);

		res.json({
			errors: {
				message: err.message,
				error: err,
			},
		});
	});
}

app.use((err, req, res) => {
	res.status(err.status || 500);

	res.json({
		errors: {
			message: err.message,
			error: {},
		},
	});
});

module.exports = app;
