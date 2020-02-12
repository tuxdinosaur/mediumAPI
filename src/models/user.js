
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    password: {
        type: String,
        minLength: 1,
        required: true
    },
    name: {
        type: String,
        minLength: 3,
        maxLength: 100
    }
})

module.exports = mongoose.model('Users', userSchema)