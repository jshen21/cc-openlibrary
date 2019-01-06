const path = require('path')
const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app


const createApp = () => {
   // logging middleware
   app.use(morgan('dev'))
  
   // body parsing middleware
   app.use(express.json())
   app.use(express.urlencoded({extended: true}))
   
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))
  
  app.use('/api', require('./api'))

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {

  app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
  )
}

createApp()
startListening()

