const search = {}
const { Character } = require('../models')

search.houseName = async (req, res, next) => {
  const house = req.params.name
  console.log(req.params.name)
  try {
   const houses = await Character.find({houseName : house})

    res
      .status(200)
      .json(houses)
  }
  catch (error) {
    console.error(error)
    next()
  }
}

module.exports = search