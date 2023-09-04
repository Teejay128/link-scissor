const mongoose = require('mongoose')
require('dotenv').config()

const databaseOptions = {
    useNewURLParser: true,
    useUnifiedTopology: true,
}

const dbConnect = async (databaseURL) => {
    try {
        await mongoose.connect(databaseURL, databaseOptions)
        console.log("Connected to database...")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

module.exports = dbConnect