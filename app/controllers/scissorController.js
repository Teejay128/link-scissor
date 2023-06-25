const QRCode = require('qrcode')
const shortid = require('shortid')
const ShortUrl = require('../models/shortUrlModel')
const catchAsync = require('../utils/catchAsync')

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
        const { longUrl, customCode } = req.body
        if(customCode) {
            urlCode = customCode
        } else {
            urlCode = shortid.generate()
        }

        const shortUrl = `scissor/${urlCode}`
        const qrCode = await QRCode.toDataURL(shortUrl)

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
            urlCode,
            qrCode
        })
        // console.log(newScissor)
        return res.redirect('/')
    } catch (error) {
        console.error("An error occured while shortening url:", error)
    }
})

exports.clickScissor = catchAsync(async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        const url = await ShortUrl.findOne({ urlCode })
        if(!url) {
            // Also throw an error stuff
            return res.redirect('/')
        }

        url.clicks++
        url.save()

        res.redirect(url.longUrl)
    } catch (error) {
        console.error("An error occured while updating clicks", error)
    }
})

exports.deleteScissor = catchAsync(async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        const url = await ShortUrl.findOneAndDelete({ urlCode })
        // console.log(url)

        // return res.redirect('/')
        return res.json({
            status: "Success",
            msg: `Url with code "${urlCode}" was deleted`,
            data: url
        })
        // Display toast notification?
        
    } catch (error) {
        console.error("An error occured while deleting the link", error)
    }
})
