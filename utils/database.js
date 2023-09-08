const mongoose = require('mongoose')
require('dotenv').config()

const databaseOptions = {
    useNewURLParser: true,
    useUnifiedTopology: true,
}

const connect = async (databaseURL) => {
    try {
        await mongoose.connect(databaseURL, databaseOptions)
        // console.log("Connected to database...")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

const disconnect = async (databaseURL) => {
    try {
        await mongoose.connection.close()
        console.log("Disconnected successfully")
    } catch (error) {
        console.error("Error disconnecting", error)
    }
}

module.exports = {
    connect,
    disconnect
}