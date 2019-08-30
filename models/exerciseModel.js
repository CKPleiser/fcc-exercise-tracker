const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'An exercise must have a description!'],
    maxlength: [50, 'An exercise must have less or equal than 50 characters!'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'An exercise must have a duration!'],
    maxlength: 5
  },
  date: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'An exercise must belong to a user']
  }
})

exerciseSchema.post('save', function(doc, next) {
  console.log(doc);
  next();
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

