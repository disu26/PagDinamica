const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const mongodb = 'mongodb://localhost/juegoCantera';
mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/* catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

app.use('/', require('./routes/index'));
app.use('/games', require('./routes/games'));
app.use('/game', require('./routes/createGame'));
app.use('/game', require('./routes/viewWinner'));
app.use('/game', require('./routes/startGame'));
app.use('/game', require('./routes/viewGames'));
app.use('/game', require('./routes/endGame'));

module.exports = app;
