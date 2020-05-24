const test = {}
const { User, Character } = require('../models')

test.create = async (req, res, next) => {
  const { name, age } = req.body
  try {
    const newUser = new User({ name, age })
    await newUser.save()

    res
      .status(200)
      .json(newUser)
  }
  catch (error) {
    console.error(error)

    next()
  }
}

test.addGOT = async (req, res, next) => {
  const personajes = req.body.characters
  try {
    await Promise.all(personajes.forEach((element) => {
      const newCharacter = new Character(element)
      newCharacter.save()
      .then(()=> console.log('ok'))
    }))

    res
      .status(200)
      .json('todo OKK')
  }
  catch (error) {
    console.error(error)
    next()
  }
}


module.exports  = test