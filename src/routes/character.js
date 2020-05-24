const router = require('express').Router()
const CharacterControllers = require('../controllers/characterControllers')

//* Crear un personaje de GOT
router.post('/', CharacterControllers.addGOT)

//* Crear un user para test
router.post('/create', CharacterControllers.create)


module.exports = router