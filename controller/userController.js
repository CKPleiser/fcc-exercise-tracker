const User = require('./../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      user: newUser
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `Something went wrong here. Error: ${err}`
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `Something went wrong here. Error: ${err}`
    });
  }
}

exports.getLog = async (req, res, next) => {
  try {
    const log = await User.findById(req.params.id).populate('exercises');

    res.status(200).json({
      status: 'success',
      data: { log }
    })

  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `Something went wrong here. Error: ${err}`
    });
  }
}