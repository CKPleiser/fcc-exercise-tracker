const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes')
const exerciseRouter = require('./routes/exerciseRoutes')


// Start express app
const app = express();

// Middelware Goes Here
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(express.static('public'));

// Testing the endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This works!'
  })
})


// APIs
// USER ROUTES
// POST createUser //api/exercise/new-user
// GET getAllUsers //api/exercise/users

// EXERCISE ROUTES
// POST addExercise //api/exercise/add
// GET getUserLog //api/exercise/log/:userID
//

// Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/exercise', exerciseRouter)

module.exports = app;