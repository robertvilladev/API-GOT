const characters = require('./characters')
const { Character } = require('../src/models/')

return Promise.all(characters.forEach(async(personaje) => {
  const newPersonaje = new Character({personaje})
  return await newPersonaje.save()
}))