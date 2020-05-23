/* eslint-disable no-undef */
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_TOKEN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  return console.log('conected to mongodb-cloud')
})

module.exports = mongoose
