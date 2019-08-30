const express = require('express');
const exerciseController = require('./../controller/exerciseController');
const router = express.Router();

router
  .post('/', exerciseController.addExercise);

module.exports = router;