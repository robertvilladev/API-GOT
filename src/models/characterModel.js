const { model, Schema } = require('../../config/db/index')

const CharacterSchema = new Schema({
  actorName: {
    type: String,
    defaul: 'Sin Actor'
  },
  characterName: {
    type: String,
    required: true,
    unique: true
  },
  houseName: {
    type: String,
    default: 'Bastard',
  },
  characterImageFull: {
    type: String
  },
  characterImageThumb: {
    type: String,
  },
  nickname: {
    type: String,
    default: ''
  },
  parents: {
    type: Array,
    default: []
  },
  parentOf: {
    type: Array,
    default: []
  },
  siblings: {
    type: Array,
    default: []
  },
  killedBy: {
    type: Array,
    default: []
  },
  servedBy: {
    type: Array,
    default: []
  },
  killed: {
    type: Array,
    default: []
  },
  guardedBy: {
    type: Array,
    default: []
  }
})

module.exports = model('character', CharacterSchema)