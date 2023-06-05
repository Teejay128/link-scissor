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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/scissor', scissorRouter)

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})