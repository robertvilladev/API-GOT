const express = require('express')
const app = express()

const morgan = require('morgan')
const dotenv  = require('dotenv')
const cors = require('cors')

// Variables de entorno
dotenv.config()

// Conectando DB
require('./config/db/index')

// Middlewares y PORT
// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3030)
app.use(morgan('dev'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas API
app.use('/api', require('./src/routes/index'))
app.use('/', (req, res) => res.redirect('/api'))

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res
    .status(500)
    .send('Something broke!')
})

app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'))
})