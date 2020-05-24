const router = require('express').Router()
const SearchControllers = require('../controllers/searchControllers')

//* Traer todos los que pertenecen a una misma casa
router.get('/house-name/:name', SearchControllers.houseName)

module.exports = router