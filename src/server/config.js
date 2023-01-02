const dotEnv  = require('dotenv')
dotEnv.config()

const options = {
  port: process.env.PORT,
  secretKey: 'Secret',
  mongoUser: 'niksam',
  mongoPassword: 'Qwerty123456'
}

module.exports = options