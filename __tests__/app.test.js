jest.useFakeTimers()


const ShortUrl = require("../app/models/shortUrlModel");
const app = require("../app/index");
const sum = require("../sum");
const db = require("../utils/database");

const testURL = "mongodb://localhost:27017/linkScissor_test";

// Scissor router API tests
describe("tests for scissor functionality", () => {
  beforeAll(() => {
    db.connect(testURL);

    ShortUrl.insertMany([
      {
        longUrl: "https://www.mongodb.com/docs/mongodb-shell/crud/insert/",
        shortUrl: "localhost:4000/mongo",
        urlCode: "mongo",
        qrCode: "This is a long qrcode whatever",
      },
      {
        longUrl: "https://mongoosejs.com/docs/models.html",
        shortUrl: "localhost:4000/goose",
        urlCode: "goose",
        qrCode: "This is a long qrcode whatever",
      },
    ]);
  });

  describe("learning how to test", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  describe("requesting for all available scissors", () => {
    // All the added shortUrls should reflect in the database
    // The number returned must be equal to the number of links
    // Should also test for like 2 of the available links
  });

  describe("creating a new scissor", () => {
    // Random url code if customCode is not provided
    // A test block for qrCode and its details
    // Return error if urlCode already exists
    // Create newScissor with the right details
  });

  describe("clicking on a scissor", () => {
    // number of clicks should increase by 1
  });

  describe("deleting a scissor", () => {
    // The particular link should not be found in the database
  });

  afterAll(() => {
    // Clear the test database
    ShortUrl.find({})
      .then((res) => console.log(res))
      .then(() => ShortUrl.deleteMany())
      .then((count) => console.log(count))
      .then(() => db.disconnect())
      .catch((err) => console.log(err));
  });
});
