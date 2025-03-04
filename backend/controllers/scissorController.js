const shortid = require("shortid");
const qrGen = require("qrcode");

const Scissor = require("../models/scissorModel");
const catchAsync = require("../utils/catchAsync");
const { pageScraper, youtubeTranscript } = require("../services/tools");
const { getPageInfo, getVideoSummary } = require("../services/genAi");
require("dotenv").config();

exports.getScissorPage = catchAsync(async (req, res) => {
	try {
		const urls = await Scissor.find({});
		const data = urls.map(
			({
				longUrl,
				shortUrl,
				type,
				urlCode,
				qrCode,
				summary,
				createdAt,
			}) => ({
				longUrl,
				shortUrl,
				type,
				urlCode,
				qrCode,
				summary,
				createdAt,
			})
		);
		return res.json({
			msg: "All available scissors",
			data,
		});
	} catch (error) {
		console.error("An error occured while fetching scissors:", error);
	}
});

exports.newScissor = catchAsync(async (req, res) => {
	try {
		const { longUrl, customCode, type } = req.body;

		if (customCode) {
			urlCode = customCode;
		} else {
			urlCode = shortid.generate();
		}

		const check = await Scissor.find({ urlCode });
		if (check.length != 0) {
			return res.json({
				msg: "Please a different url Code",
				data: check,
			});
		}

		const shortUrl = `${process.env.API_URL}/${urlCode}`;
		const qrCode = await qrGen.toDataURL(shortUrl);

		const newScissor = await Scissor.create({
			longUrl,
			shortUrl,
			type,
			urlCode,
			qrCode,
		});

		let summary;
		let rawText;
		if (type == "webpage") {
			rawText = await pageScraper(longUrl);
			summary = await getPageInfo(rawText);
		} else if (type == "youtube") {
			rawText = await youtubeTranscript(longUrl);
			summary = await getVideoSummary(rawText);
		} else if (type == "document") {
			// Coming soon...
		}

		Scissor.findByIdAndUpdate(newScissor._id, { summary, rawText }).then(
			() => {
				console.log("Added summary and rawText");
			}
		);

		return res.json({
			msg: "New scissor created",
			data: newScissor,
		});
	} catch (error) {
		console.error("An error occured while creating the scissor:", error);
	}
});

exports.getScissor = catchAsync(async (req, res) => {
	try {
		const urlCode = req.params.urlCode;
		const url = await Scissor.findOne({ urlCode });
		if (!url) {
			console.log(
				"The requested scissor was not found, please try again."
			);
			return res.redirect("/");
		}

		url.clicks++;
		url.save();

		return res.json({
			msg: `${url.urlCode} was clicked, redirecting to ${url.longUrl}`,
			data: url,
		});
	} catch (error) {
		console.error("An error occured while fetching scissor", error);
	}
});

exports.deleteScissor = catchAsync(async (req, res) => {
	try {
		const urlCode = req.params.urlCode;
		const url = await Scissor.findOneAndDelete({ urlCode });

		return res.json({
			msg: `Scissor with code "${urlCode}" was deleted`,
			data: url,
		});
	} catch (error) {
		console.error("An error occured while deleting the scissor:", error);
	}
});
