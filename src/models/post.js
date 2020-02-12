
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    maxLength: 50,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    minLength: 1,
    maxLength: 20,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  time: {
    type: Number,
    min: 1,
    required: true
  },
  image: {
    type: String,
    minLength: 5,
    required: true
  },
  description: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 128
  }
})

module.exports = mongoose.model('Posts', postsSchema)
