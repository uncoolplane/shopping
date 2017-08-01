var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

var config = require('./config/config');

//authentication
var passport = require('passport');

//Routes
var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');
var customers = require('./routes/customers');
var states = require('./routes/states');
var orders = require('./routes/orders');
var orderitems = require('./routes/orderitems');

var app = module.exports = express();
app.use(express.static('./public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let connectionString = process.env.DATABASE_URL || config.connectionString ||  "postgres://admin@localhost/eCommerceDb";
var instance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', instance);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.use(session({
  secret: config.sessionSecret
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//Middleware for putting user on express session
function userSession(req, res, next) {
  if(!req.session.user) {
    req.session.user = {}
  }
  next()
}

//Middleware for checking if logged in
function isLoggedIn(req, res, next) {
  if(!req.session.isLoggedIn) {
    req.session.isLoggedIn = false
  }
  next()
}

var db = app.get('db');

app.use('/', userSession, isLoggedIn, index);
app.use('/', userSession, isLoggedIn, users);
app.use('/api', userSession, isLoggedIn, products);
app.use('/api', userSession, isLoggedIn, customers);
app.use('/api', userSession, isLoggedIn, states);
app.use('/api', userSession, isLoggedIn, orders);
app.use('/api', userSession, isLoggedIn, orderitems);
app.get('/img', function(req, res, next) {
  res.send("uploads")
})

var uploader = require('./controllers/uploadCtrl')(app);
app.use('/app/img', express.static(path.join(__dirname, 'uploads')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
