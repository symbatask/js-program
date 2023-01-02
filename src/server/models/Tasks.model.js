const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  week: {
    type: Number
  },
  description: {
    type: String
  },
  name: {
    type: String
  },
  date: {
    type: Number
  },
  content: String,
  isUnlock: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('tasks', TaskSchema)
