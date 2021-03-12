const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
// const bodyParser = require('body-parser');
// const pg = require('pg');
// const Client = pg.Client;
// const client = new Client({connectionString: 'hello'});
// client.connect();

const db = require('./routes/queries');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

app.get('/products', db.getProducts);
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserByUserName);
app.post('/users', db.createUser);
app.post('/logIn', db.logInUser);

// catch 404 and forward to error handler
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
});

module.exports = app;
