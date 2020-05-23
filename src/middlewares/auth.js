
const jwt = require('../lib/jwt')

function auth (request, response, next) {
try {
    const { autorization: token } = request.headers
    const decodedToken = jwt.verify(token)
    console.log(decodedToken)
    if (!decodedToken) throw new Error('Invalid token')
    next()
} catch (error) {
    response.status(401),
    response.json({
        success: false,
        message: 'Unauthorized'
    })
}
}

module.exports = auth