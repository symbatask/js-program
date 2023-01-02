const mongoose = require('mongoose')

const WeekSchema = new mongoose.Schema({
  week: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  isUnlock: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('weeks', WeekSchema)
