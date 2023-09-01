const app = require('./app/index')
const dbConnect = require('./config/database')
require('dotenv').config()

const port = process.env.PORT || 4000

dbConnect()

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})