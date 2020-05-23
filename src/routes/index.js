const router = require('express').Router()

router.use('/', (req, res) => {
  res.send('API is workking')
})

module.exports = router