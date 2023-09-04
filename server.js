const app = require('./app/index')
const dbConnect = require('./utils/database')
require('dotenv').config()

const MONGODB_URL = process.env.MONGODB_URL
const port = process.env.PORT || 4000

dbConnect(MONGODB_URL)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})