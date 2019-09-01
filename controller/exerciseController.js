const Exercise = require('./../models/exerciseModel');
const isValidDate = require('./../utils/isValidDate');

exports.addExercise = async (req, res) => {
  try {
    let newExercise = await Exercise.create({
      user: req.body.userId,
      description: req.body.description,
      duration: req.body.duration,
    });

    let exerciseDate = req.body.date ? new Date(req.body.date) : new Date();
    newExercise.date = exerciseDate;

    res.status(201).json({
      status: 'success',
      exercise: newExercise
    })
  } catch(err) {
    res.status(500).json({
      status: 'error',
      message: `Something went wrong here. Error: ${err}`
    });
  }
};