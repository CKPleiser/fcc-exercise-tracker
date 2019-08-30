const express = require('express');
const userController = require('./../controller/userController');
const router = express.Router();


// APIs
// USER ROUTES
// POST createUser //api/exercise/new-user
// GET getAllUsers //api/exercise/users

// EXERCISE ROUTES
// POST addExercise //api/exercise/add
// GET getUserLog //api/exercise/log/:userID
//

router
  .get('/', userController.getAllUsers)
  .post('/new-user', userController.createUser);

router
  .get('/log/:id', userController.getLog);

  module.exports = router;