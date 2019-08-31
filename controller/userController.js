const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

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
  let filter = {};
  let userId = req.params.id;

  const log = await User.findById(userId)
                          .populate('exercises')

  res.status(200).json({
    status: 'success',
    data: { log }
  });
});