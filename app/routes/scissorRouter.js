const express = require('express')
const rateLimit = require('express-rate-limit')
const scissorController = require('../controllers/scissorController')

const router = express.Router()
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100,
    message: "You have exhausted your 100 free scissors for now, check back in an hour"
})

router
    .use(limiter)
    .route('/')
    .get(scissorController.scissorLink)
    .post(scissorController.newScissor)

router
    .route('/:urlCode')
    .get(scissorController.clickScissor)
    .delete(scissorController.deleteScissor)

    
module.exports = router