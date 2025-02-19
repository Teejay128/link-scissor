const QRCode = require("qrcode");
const shortid = require("shortid");

const ShortUrl = require("../models/shortUrlModel");
const catchAsync = require("../utils/catchAsync");
const { pageInfo } = require("./scrapingController");
require("dotenv").config();
const API_URL = process.env.API_URL;

// refactor the entire codebase so that it is an API that returns values, rather than render pages

exports.getScissorPage = catchAsync(async (req, res) => {
	try {
		const urls = await ShortUrl.find({});
		return res.json({
			msg: "All the shortened urls",
			data: urls,
		});
	} catch (error) {
		console.error("An error occured while fetching urls:", error);
	}
});

exports.newScissor = catchAsync(async (req, res) => {
	try {
		const { longUrl, customCode } = req.body;
		const description = await pageInfo(longUrl); //

		if (customCode) {
			urlCode = customCode;
		} else {
			urlCode = shortid.generate();
		}

		const check = await ShortUrl.find({ urlCode });
		if (check.length != 0) {
			return res.json({
				msg: "that custom url already exists",
				data: check,
			});
		}

		const shortUrl = `${API_URL}/${urlCode}`;
		const qrCode = await QRCode.toDataURL(shortUrl);

		const newScissor = await ShortUrl.create({
			longUrl,
			shortUrl,
			urlCode,
			qrCode,
			description,
		});

		return res.json({
			msg: "New scissor created",
			data: newScissor,
		});
	} catch (error) {
		console.error("An error occured while shortening url:", error);
	}
});

exports.clickScissor = catchAsync(async (req, res) => {
	try {
		const urlCode = req.params.urlCode;
		const url = await ShortUrl.findOne({ urlCode });
		if (!url) {
			console.log("An error occured, please try again.");
			return res.redirect("/");
		}

		url.clicks++;
		url.save();

		return res.json({
			msg: `${url.urlCode} was clicked, redirecting to ${url.longUrl}`,
			data: url,
		});
	} catch (error) {
		console.error("An error occured while updating clicks", error);
	}
});

exports.deleteScissor = catchAsync(async (req, res) => {
	try {
		const urlCode = req.params.urlCode;
		const url = await ShortUrl.findOneAndDelete({ urlCode });

		return res.json({
			msg: `Url with code ${urlCode} was deleted`,
			data: url,
		});
	} catch (error) {
		console.error("An error occured while deleting the link", error);
	}
});
