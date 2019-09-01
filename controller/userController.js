const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const isValidDate = require('./../utils/isValidDate');

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    user: newUser
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
});

exports.getLog = catchAsync(async (req, res, next) => {

  let fromDate = new Date(req.query.from);
  let toDate = new Date(req.query.to);
  let limit = Number(req.query.limit);

  let results = await User.findById(req.params.id).select('username').populate('exercises', '-_id -__v');

  if(isValidDate(toDate) ) {
    results.exercises = results.exercises.filter((item) => (item.date <= toDate))
  } else if (isValidDate(fromDate)) {
    results.exercises = results.exercises.filter((item) => (item.date >= fromDate))
  }
  if(!isNaN(limit) && results.exercises.length > limit) {
    results.exercises = results.exercises.slice(0, limit);
  }

  res.status(200).json({
    status: 'success',
    results: results.exercises.length,
    data: results
  });
});