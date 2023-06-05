const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URL = process.env.MONGODB_URL
const databaseOptions = {
    useNewURLParser: true,
    useUnifiedTopology: true,
}

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGODB_URL, databaseOptions)
        console.log("Connected to database...")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

module.exports = dbConnect