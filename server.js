const app = require('./app/index')
const db = require('./utils/database')
require('dotenv').config()

const MONGODB_URL = process.env.MONGODB_URL
const port = process.env.PORT || 4000

db.connect(MONGODB_URL)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})