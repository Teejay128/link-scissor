const QRCode = require('qrcode')
const shortid = require('shortid')
const ShortUrl = require('../models/shortUrlModel')
const catchAsync = require('../utils/catchAsync')
require('dotenv').config()
const API_URL = process.env.API_URL

// refactor the entire codebase so that it is an API that returns values, rather than render pages

exports.getScissorPage = catchAsync(async (req, res) => {
    try {
        const urls = await ShortUrl.find({})
        return res.json({
            msg: "All the shortened urls",
            data: urls
        })
        // res.render('index', { urls: urls })
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

        const shortUrl = `${API_URL}/${urlCode}`
        const qrCode = await QRCode.toDataURL(shortUrl)

        const check = await ShortUrl.find({ urlCode })
        if(check.length != 0){
            return res.json({
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

        return res.json({
            msg: "New scissor created",
            data: newScissor
        })

        // return res.redirect('/')
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

        return res.json({
            msg: `${url.urlCode} was clicked, redirecting to ${url.longUrl}`,
            data: url
        })

        // res.redirect(url.longUrl)
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
            msg: `Url with code ${urlCode} was deleted`,
            data: url
        })
        // Display toast notification?
        
    } catch (error) {
        console.error("An error occured while deleting the link", error)
    }
})
