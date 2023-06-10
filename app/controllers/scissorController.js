const ShortUrl = require('../models/shortUrlModel')
const catchAsync = require('../utils/catchAsync')
const shortid = require('shortid')

exports.scissorLink = catchAsync(async (req, res) => {
    try {
        const urls = await ShortUrl.find({})
        res.render('index', { urls: urls })
    } catch (error) {
        console.error("An error occured while fetching urls:", error)
    }
})

exports.newScissor = catchAsync(async (req, res) => {
    try {
        const { longUrl, custom } = req.body
        let urlCode = shortid.generate()
        // Custom can only be maximum of 8
        if(custom) {
            urlCode = custom + urlCode.slice(custom.length - 9)
        }
        const shortUrl = `scissor/${urlCode}`

        const check = await ShortUrl.find({ urlCode })
        if(check.length != 0){
            return res.json({
                status: "error",
                msg: "that custom url already exists",
                data: check
            })
        }

        const newScissor = await ShortUrl.create({
            longUrl,
            shortUrl,
            urlCode
        })

        return res.redirect('/')
    } catch (error) {
        console.error("An error occured while shortening url:", error)
    }
})

exports.click = catchAsync(async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        const url = await ShortUrl.findOne({ urlCode })
        if(!url) {
            // Also throw an error stuff
            return res.redirect('/scissor')
        }

        url.clicks++
        url.save()

        res.redirect(url.longUrl)
    } catch (error) {
        console.error("An error occured while updating clicks", error)
    }
})