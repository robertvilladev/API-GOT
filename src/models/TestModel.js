const { model, Schema } = require('../../config/db/index')

const TestSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: String,
    required: true
  }


})

module.exports = model('test', TestSchema)