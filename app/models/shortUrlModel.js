const mongoose = require('mongoose')
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
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

module.exports = ShortUrl