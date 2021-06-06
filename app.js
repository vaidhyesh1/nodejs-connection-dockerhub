var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/database');
var app = express();

//Set up default mongoose connection
//var mongoDB = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.DB_SERVER}:${process.env.MONGO_PORT}/testing`;
var mongoDB = `mongodb://${process.env.DB_SERVER}:${process.env.MONGO_PORT}/testing`;
var mongoose = require('mongoose');
let db = mongoose.connection;

let connectWithRetry = function () {
  return mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
};

connectWithRetry();

db.on('error', () => {
	setTimeout(() => {
		console.log('DB connection failed. Will try connecting again after 5 seconds.');
		connectWithRetry();
  }, 5000);
});

db.on('connected', function () {
  console.log('Connection to mongo success!');
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/database', dbRouter);

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
    res.render('error');
  });

});

module.exports = app;
