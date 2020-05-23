const router = require('express').Router()
const TestController = require('../controllers/testController')

//* Crear un user para test
router.post('/create', TestController.create)

//* Crear un personaje de GOT
router.post('/addGOT', TestController.addGOT)

//* Traer todos los que pertenecen a una misma casa
router.get('/house-name/:name', TestController.houseName)

module.exports = router