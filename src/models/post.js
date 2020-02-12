
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    minlength: 1,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Posts', postsSchema)
