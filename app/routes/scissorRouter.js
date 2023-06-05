const express = require('express')
const scissorController = require('../controllers/scissorController')

const router = express.Router()

router
    .route('/')
    .get(scissorController.scissorLink)
    .post(scissorController.newScissor)

module.exports = router