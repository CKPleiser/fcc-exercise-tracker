const path = require('path');
const express = require('express');
var cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes')
const exerciseRouter = require('./routes/exerciseRoutes')
const viewRouter = require('./routes/viewRoutes')


// Start express app
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Setting static files
app.use(express.static('public'));

// GLOBAL MIDDLEWARE

// Set security HTTP headers
app.use(helmet());

// Use Cors
app.use(cors())

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Data sanitization against NOSQL query injection
app.use(mongoSanitize());

// Routes
app.use('/', viewRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/exercises', exerciseRouter)

// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'});
})

// Basic Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

module.exports = app;
