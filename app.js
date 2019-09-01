const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes')
const exerciseRouter = require('./routes/exerciseRoutes')
const viewRouter = require('./routes/viewRoutes')


// Start express app
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middelware Goes Here
app.use(express.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// // Testing the endpoint
// app.get('/', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     message: 'This works!'
//   })
// })

// Routes
app.use('/', viewRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/exercises', exerciseRouter)

module.exports = app;