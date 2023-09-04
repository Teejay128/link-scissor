const shortUrl = require('../app/models/shortUrlModel')
const app = require('../app/index')
const dbConnect = require('../utils/database')

const testURL = "mongodb://localhost:27017/linkScissor_test"

dbConnect(testURL)

// Scissor router API tests 
describe("tests for scissor functionality", () => {

    beforeAll(async () => {
        await shortUrl.create({
            
        })
        // Add a couple of shortUrls to the database
    })


    describe("requesting for all available scissors", () => {
        // All the added shortUrls should reflect in the database
        // The number returned must be equal to the number of links
        // Should also test for like 2 of the available links
    })

    describe("creating a new scissor", () => {
        // Random url code if customCode is not provided
        // A test block for qrCode and its details
        // Return error if urlCode already exists
        // Create newScissor with the right details
    })

    describe("clicking on a scissor", () => {
        // number of clicks should increase by 1
    })

    describe("deleting a scissor", () => {
        // The particular link should not be found in the database
    })


    afterAll(async () => {
        // Clear the test database
    })
}) 