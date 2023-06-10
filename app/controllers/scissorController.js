const ShortUrl = require('../models/shortUrlModel')
const shortid = require('shortid')

exports.scissorLink = async (req, res) => {
    try {
        const urls = await ShortUrl.find({})
        res.render('index', { urls: urls })
    } catch (error) {
        console.error("An error occured while fetching urls:", error)
    }
}

exports.newScissor = async (req, res) => {
    try {
        const { longUrl, custom } = req.body
        let urlCode = shortid.generate()
        // Custom can only be maximum of 8
        if(custom) {
            console.log(urlCode)
            console.log(custom.length)
            console.log(urlCode.slice(custom.length - 9))
            urlCode = custom + urlCode.slice(custom.length - 9)
            console.log(urlCode)
        }
        const shortUrl = `scissor/${urlCode}`

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
}

exports.click = async (req, res) => {
    try {
        // Use req.params to do whatever
    } catch (error) {
        console.error("An error occured while updating clicks", error)
    }
}