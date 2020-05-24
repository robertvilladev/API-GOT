const router = require('express').Router()

// Importando rutas
const Character = require('./character')
const Search = require('./search')

router.use('/add', Character)
router.use('/search', Search)

router.use('/', (req, res) => res.send('API is workking'))

module.exports = router