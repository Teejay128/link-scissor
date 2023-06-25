const express = require('express')
const scissorRouter = require('./app/routes/scissorRouter')
const dbConnect = require('./config/database')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

dbConnect()

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(express.static('public'))

// app.use(limiter)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', scissorRouter)

app.get('*', (req, res) => {
    res.status(404).send('Error 404: The page you are looking for cannot be found')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

// Install config and valid-url