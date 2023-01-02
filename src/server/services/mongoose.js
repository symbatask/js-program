const mongoose = require('mongoose')


mongoose.connection.on('error', (err) => {
  console.log(`Connection failed, error is ${err}`)
})
mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

exports.connect = (mongoURL) => {
   mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
}