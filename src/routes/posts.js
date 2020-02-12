
const express = require('express')
const post = require('../use_cases/post')

const router = express.Router()

// GET /posts -> getAll()
router.get('/', async (request, response) => {
  try {
    const posts = await post.getAll()
    response.json({
      success: true,
      message: 'all posts',
      data: {
        posts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// POST /posts -> 
router.post('/', async (request, response) => {
  try {
const newPost = await post.create(request.body)
response.json({
  success: true,
  message: 'Post created',
  data: {
    post: newPost
  }
})    
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// GetById
router.get('/:id', async (request, response) => {
  try {
    let { id } = request.params
    const postFound = await post.getById(id)
    response.json({
      success: true,
      message: 'Post found',
      data: {
        post: postFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// DeleteById
router.delete('/:id', async (request, response) =>{
  try {
    let { id } = request.params.id
    const postDelete = await post.deleteById(id)
    response.json({
      success: true,
      message: 'Post deleted',
      data: {
        post: postDelete
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// Update
router.patch('/:id', async (request, response) => {
  try {
    let { id } = request.params
    const posstPatched = await post.updateById(id, request.body)
    response.json({
      success: true,
      message: 'Post patched',
      data: {
        post: posstPatched
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
