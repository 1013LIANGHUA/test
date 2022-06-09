var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const crown_xx_Router = require('./routes/crown_xx');
const crown2_xx_Router = require('./routes/crown2_xx');
const api_xx_Router = require('./routes/api_xx');
const midproj_xx_Router = require('./routes/midproj_xx');
const midterm_xx_Router = require('./routes/midterm_xx');
const booksRouter = require('./routes/books_36');
const projectRouter = require('./routes/project_36');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: ['https://crown1101.herokuapp.com'],
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api_xx', cors(), api_xx_Router);

/* crown_xx */
app.use('/crown_xx', crown_xx_Router);
app.use('/crown2_xx', crown2_xx_Router);

/* midproj_xx */
app.use('/midproj_xx', midproj_xx_Router);

/* midterm_xx */
app.use('/midterm_xx', midterm_xx_Router);

/* Books CRUD demo */
app.use('/books_36', booksRouter);

/* finalproj_xx */
app.use('/project_36',projectRouter );
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

module.exports = app;
