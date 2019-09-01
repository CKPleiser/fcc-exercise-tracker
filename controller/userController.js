const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const isValidDate = require('./../utils/isValidDate');

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({ username: req.body.username});
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

  let fromDate = req.query.from ? new Date(req.query.from) : new Date(1970, 1, 1);
  let toDate = req.query.to ? new Date(req.query.to) : new Date();
  let limit = Number(req.query.limit);

  let results = await User.findById(req.params.id).select('username').populate('exercises', '-_id -__v');

  results.exercises = results.exercises.filter((item) => (item.date >= fromDate && item.date <= toDate))

  if(!isNaN(limit) && results.exercises.length > limit) {
    results.exercises = results.exercises.slice(0, limit);
  }

  res.status(200).json({
    status: 'success',
    results: results.exercises.length,
    from: req.query.from ? new Date(req.query.from).toDateString() : undefined,
    to: req.query.to ? new Date(req.query.to).toDateString() : undefined,
    log: results

  });
});