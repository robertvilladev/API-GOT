const router = require('express').Router()
const SearchControllers = require('../controllers/searchControllers')

//* Traer todos los que pertenecen a una misma casa
router.get('/house-name/:name', SearchControllers.houseName)

//* Traer un personaje por su nombre
router.get('/character-name/:name', SearchControllers.characterName)

//* Traer un personaje por el nombre de su actor
router.get('/character-actor-name/:name', SearchControllers.actorName)

//* Traer un personaje por su Id
router.get('/character-id/:id', SearchControllers.characterId)



module.exports = router