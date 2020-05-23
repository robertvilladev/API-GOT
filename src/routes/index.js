const router = require('express').Router()

// Importando rutas
const Test = require('./test')

router.use('/search', Test)
router.use('/', (req, res) => res.send('API is workking'))

module.exports = router