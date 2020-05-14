const mongoose = require('mongoose');

const TodolistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  taskname: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    default: 'incompleted',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('todolist', TodolistSchema);
