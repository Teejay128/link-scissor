const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { StringOutputParser } = require("@langchain/core/output_parsers");
require("dotenv").config();

const model = new ChatGoogleGenerativeAI({
	modelName: "gemini-1.5-flash",
	apikey: process.env.GOOGLE_API_KEY,
});
const parser = new StringOutputParser();

const getPageInfo = async (pageHTML) => {
	const prompt =
		"This is the HTML code for a website that contains some important bits of information. I need you to provide a brief summary of it's contents, without mentioning anything about HTML code.";

	const result = await model.invoke(prompt + pageHTML);
	const text = await parser.invoke(result);
	return text;
};

const getVideoSummary = async (transcript) => {
	const prompt =
		"This is the transcript I extracted from a youtube video, I need you to generate a brief summary of it's content, without mentioning that you are getting it from a YouTube Video Transcript";

	const result = await model.invoke(prompt + transcript);
	const text = await parser.invoke(result);

	return text;
};

module.exports = {
	getPageInfo,
	getVideoSummary,
};
