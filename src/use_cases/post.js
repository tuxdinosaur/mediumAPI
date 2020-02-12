
const Post = require('../models/post')

function create ({ title, author, date, time, image, description }) {
  const newPost = new Post({ title, author, date, time, image, description })
  return newPost.save()
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function getAll () {
  return Post.find({})
}

function getById (id) {
  return Post.findById(id)
}

function updateById (id, postInfoToUpdate) {
  return Post.findByIdAndUpdate(id, postInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
