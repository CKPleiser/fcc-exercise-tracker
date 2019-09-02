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

module.exports = app;