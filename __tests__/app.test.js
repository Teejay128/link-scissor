// I have given up on writing tests for this shit

jest.useFakeTimers();

const ShortUrl = require("../app/models/shortUrlModel");
const app = require("../app/index");
const sum = require("../sum");
const mongoose = require("mongoose");
const db = require("../utils/database");

const testURL = "mongodb://localhost:27017/linkScissor_test";

// Scissor router API tests
describe("tests for scissor functionality", () => {

    jest.setTimeout(100000);

    beforeAll(async () => {
        // Connect to a test database before running the tests
        await mongoose.connect("mongodb://localhost/testdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Add dummy data to the database
        await ShortUrl.create([
            { name: "Item 1", description: "Description 1" },
            { name: "Item 2", description: "Description 2" },
            // Add more dummy data as needed
        ]);
    });

    afterAll(async () => {
        // Close the database connection after all tests are done
        await mongoose.connection.close();
    });

    //     beforeAll((done) => {
    //         try {
    //             mongoose
    //                 .connect(testURL, {
    //                     useNewUrlParser: true,
    //                     useUnifiedTopology: true,
    //                 })
    //                 .then(() => done());

    //             // await db.connect(testURL);

    //             // await ShortUrl.create([
    //             //     {
    //             //         longUrl:
    //             //             "https://www.mongodb.com/docs/mongodb-shell/crud/insert/",
    //             //         shortUrl: "localhost:4000/mongo",
    //             //         urlCode: "mongo",
    //             //         qrCode: "This is a long qrcode whatever",
    //             //     },
    //             //     {
    //             //         longUrl: "https://mongoosejs.com/docs/models.html",
    //             //         shortUrl: "localhost:4000/goose",
    //             //         urlCode: "goose",
    //             //         qrCode: "This is a long qrcode whatever",
    //             //     },
    //             // ]);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     });

    //     afterAll((done) => {
    //         // await db.disconnect();

    //         mongoose.disconnect().then(() => done());

    //         // try {
    //         //     const links = await ShortUrl.find({})
    //         //     console.log(links)

    //         //     await db.disconnect()

    //         //     //     .then(() => ShortUrl.deleteMany())
    //         //     //     .then((count) => console.log(count))

    //         // } catch (err) {
    //         //     console.log(err)
    //         // }
    //     });

    describe("learning how to test", () => {
        test("adds 1 + 2 to equal 3", () => {
            expect(sum(1, 2)).toBe(3);
        });
    });

    // test("requesting for all available scissors", () => {
    //   // All the added shortUrls should reflect in the database
    //   // The number returned must be equal to the number of links
    //   // Should also test for like 2 of the available links
    // });

    // test("creating a new scissor", () => {
    //   // Random url code if customCode is not provided
    //   // A test block for qrCode and its details
    //   // Return error if urlCode already exists
    //   // Create newScissor with the right details
    // });

    // test("clicking on a scissor", () => {
    //   // number of clicks should increase by 1
    // });

    // test("deleting a scissor", () => {
    //   // The particular link should not be found in the database
    // });
});
