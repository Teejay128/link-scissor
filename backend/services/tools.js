const puppeteer = require("puppeteer");
const { YoutubeTranscript } = require("youtube-transcript");
// const { getPageInfo, getVideoSummary } = require("./genAi");

const pageScraper = async (url) => {
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
		const pageContent = await page.content();
		await browser.close();

		return pageContent;
	} catch (err) {
		console.log("An error occured: ", err);
		return "An error occured";
	}
};

const youtubeTranscript = async (url) => {
	try {
		const videoTranscript = await YoutubeTranscript.fetchTranscript(url);
		const transcriptText = videoTranscript.map((block) => block.text);
		const transcript = transcriptText.join(" ");

		return transcript;
	} catch (err) {
		console.log("An error occured: ", err);
		return "An error occured";
	}
};

module.exports = {
	pageScraper,
	youtubeTranscript,
};
