const express = require('express')
const path = require('path')
const cors = require('cors')
const config = require('./config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const server = express()
const mongoose = require('./services/mongoose')
const weeksRoutes = require('./routes/api/weeks.routes')
const homeworksRoutes = require('./routes/api/homeworks.routes')
const usersRoutes = require('./routes/api/users.routes')
const signInRoutes = require('./routes/api/signin.routes')



const port = process.env.PORT || 9000


mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPassword}@niksam.piavs.mongodb.net/niksam`)

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../../build')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.use('/api/v1/weeks', weeksRoutes)
server.use('/api/v1/homeworks', homeworksRoutes)
server.use('/api/v1/signin', signInRoutes)
server.use('/api/v1/users', usersRoutes)

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

server.listen(port)

console.log(`Serving at http://localhost:${port}`)