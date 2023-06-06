const mongoose = require('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema

const shortUrlSchema = new Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    qrCode: {
        type: String,
        default: "Link to qrcode goes here"
    },
    clicks: {
        type: Number,
        default: 0
    },
    custom: {
        type: String,
        default: "scissor",
        // Add something like validation
        // Less than 10 words
        // No spaces
        // Characters?
    },
    urlId: {
        type: String,
        default: shortid.generate()
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Create prehook to join custom and urlId fields to create shortUrl

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

module.exports = ShortUrl