const { urlencoded } = require('express')
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
        const { longUrl, customCode } = req.body
        let urlCode = shortid.generate()
        // Custom can only be maximum of 8
        if(customCode) {
            urlCode = customCode + urlCode.slice(customCode.length - 9)
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
        // console.log(newScissor)
        return res.redirect('/')
    } catch (error) {
        console.error("An error occured while shortening url:", error)
    }
})

exports.deleteScissor = catchAsync(async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        const url = await ShortUrl.findOneAndDelete({ urlCode })

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

exports.clickScissor = catchAsync(async (req, res) => {
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