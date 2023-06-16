const express = require('express')
const scissorController = require('../controllers/scissorController')

const router = express.Router()

router
    .route('/')
    .get(scissorController.scissorLink)
    .post(scissorController.newScissor)

router
    .route('/:urlCode')
    .get(scissorController.clickScissor)
    .delete(scissorController.deleteScissor)

    
module.exports = router