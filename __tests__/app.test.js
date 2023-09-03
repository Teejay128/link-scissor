const supertest = require('supertest')
const shortUrlModel = require('../app/models/shortUrlModel')
const app = require('../app/index')


// Scissor router API tests 
describe("testing the various scissoring functionality", () => {

    // beforeAll
    // afterAll
    // beforeEach
    // afterEach
    
    beforeAll(async () => {
        await clearDatabase()
    })

    it("should return something random if custom code is not given", () => {

    })

    it("should generate a qrcode with valid properties", () => {

    })

    it("should create a new scissor with the right properties", async () => {
        const response = await request(app).post("/").send({
            longUrl: "https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/",
            customCode: "npmReg"
        })
    })

    it("should increase the number of clicks of the scissor", async () => {
        // Create a new scissor

        // Then access the scissor

        // Then check if the number of clicks increased
    })

    it("should remove a scissored link", () => {

    })
}) 