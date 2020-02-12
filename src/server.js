
const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')

const app = express()

// MIDDLEWARE
app.use(cors()) // Se necesita para poder llamar la API desde un Front
app.use(express.json())


app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Ok'
  })
})
app.use('/posts', postsRouter)
app.use('/users', usersRouter)

module.exports = app
