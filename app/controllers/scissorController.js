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
        let { longUrl, custom } = req.body
        if(!custom) {
            custom = "scissor"
        }
        const shortUrl = new ShortUrl({
            longUrl,
            shortUrl: `http://${custom}/${shortid.generate()}`,
        })
    
        await shortUrl.save()
        // return res.json({
        //     status: "success",
        //     message: `${longUrl} was shortened`,
        //     data: shortUrl
        // })
        return res.redirect('/')
    } catch (error) {
        console.error("An error occured while shortening url:", error)
    }
}
