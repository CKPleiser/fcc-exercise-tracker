const Exercise = require('./../models/exerciseModel');

exports.addExercise = async (req, res) => {
  try {
    const newExercise = await Exercise.create({
      user: req.body.userid,
      description: req.body.description,
      duration: req.body.duration,
      date: req.body.date
    });

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