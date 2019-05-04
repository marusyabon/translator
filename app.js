const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
require('./models/users');
require('./models/tokens');
require('./config/passport');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register');
const checkRouter = require('./routes/check');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(require('morgan')('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({ secret: 'some-random-pass', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

mongoose.connect('mongodb://localhost:27017/translatorDB', { useNewUrlParser: true });
mongoose.set('debug', true);

// routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', registerRouter);
app.use('/check', checkRouter);

//Error handlers & middlewares
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(res.locals.error);
});

module.exports = app;
