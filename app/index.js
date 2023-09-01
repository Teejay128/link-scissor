const express = require('express')
const scissorRouter = require('./routes/scissorRouter')

const app = express()

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


module.exports = app
