const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
	longUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
		unique: true,
	},
	qrCode: {
		type: String,
		default: "Link to qrcode goes here",
	},
	description: {
		type: String,
		default: "Description of the link",
	},
	clicks: {
		type: Number,
		default: 0,
	},
	urlCode: {
		// Add validation (must not be more than 8 digits)
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Create prehook to join custom and urlId fields to create shortUrl
// shortUrlSchema.pre('save', function(next){
//     console.log("before i saved")
//     console.log(this)
//     this.shortUrl = `${this.custom}/${this.urlId}`
//     next()
// })

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

module.exports = ShortUrl;
