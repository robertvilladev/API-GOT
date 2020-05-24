const search = {}
const { Character } = require('../models')

search.houseName = async (req, res) => {
  const house = req.params.name
  try {
   const houses = await Character.find({houseName : {$regex:`.*${house}`, $options:"i"}})

    !houses
      ? res.status(400).send('No se han encontrado coincidencias')
      : res.status(200).json(houses)
    
  }
  catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}

search.characterName = async (req, res) => {
  const name = req.params.name
  try {
    const characters = await Character.find({ characterName: {$regex:`.*${name}`, $options:"i"} })
    
    !characters
      ? res.status(400).send('No se han encontrado coincidencias')
      : res.status(200).json(characters)

  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}

search.actorName = async (req, res) => {
  const actorName = req.params.name
  try {
    const characters = await Character.find({ actorName: { $regex: `.*${actorName}`, $options: "i" } })
    
    !characters
    ? res.status(400).send('No se han encontrado coincidencias')
      : res.status(200).json(characters)
    
  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}

search.characterId = async (req, res) => {
  const id = req.params.id
  try {
    const character = await Character.findById(id)
    
    !character
      ? res.status(400).send('No se han encontrado coincidencias')
      : res.status(200).json(character)
    
  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}



module.exports = search