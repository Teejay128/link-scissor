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
		"I will provide you with the HTMl code for a website, and you only need to reply with a brief summary of the contents of the webpage.";

	const result = await model.invoke(prompt + pageHTML);
	const text = await parser.invoke(result);
	return text;
};

const getVideoSummary = async (transcript) => {
	const prompt =
		"Generate a descriptive summary of this youtube video from the transcript:";
	const result = await model.invoke(prompt + transcript);
	const text = await parser.invoke(result);

	return text;
};

module.exports = {
	getPageInfo,
	getVideoSummary,
};
