const puppeteer = require("puppeteer");
const { YoutubeTranscript } = require("youtube-transcript");
const { getPageInfo, getVideoSummary } = require("./langchain");

const scraper = async (url) => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		const blockedResources = [
			"image",
			"stylesheet",
			"font",
			"media",
			"script",
		];
		await page.setRequestInterception(true);

		page.on("request", (interceptedRequest) => {
			if (blockedResources.includes(interceptedRequest.resourceType())) {
				interceptedRequest.abort();
			} else {
				interceptedRequest.continue();
			}
		});

		await page.goto(url);
		const content = await page.content();
		await browser.close();

		const pageInfo = await getPageInfo(content);
		return pageInfo;
	} catch (err) {
		console.log("An error occured: ", err);
		return "An error occured";
	}
};

const youTrans = async (url) => {
	try {
		const videoTranscript = await YoutubeTranscript.fetchTranscript(link);
		const transcriptText = videoTranscript.map((block) => block.text);
		const transcript = transcriptText.join(" ");

		const videoSummary = await getVideoSummary(transcript);
		return videoSummary;
	} catch (err) {
		console.log("An error occured: ", err);
		return "An error occured";
	}
};

const qrCode = async (text) => {
	const qrCode = require("qrcode");

	qrCode.toDataURL("text", (err, url) => {
		res.send(`<img src=${url}>`);
	});
};

module.exports = {
	scraper,
	youTrans,
	qrCode,
};
