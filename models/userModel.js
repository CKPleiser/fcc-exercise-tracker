const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {

    username: {
      type: String,
      required: [true, 'Please provide a valid username'],
      unique: true,
      minlength: 5
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


  userSchema.virtual('exercises', {
    ref: 'Exercise',
    localField: '_id',
    foreignField: 'user'
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;