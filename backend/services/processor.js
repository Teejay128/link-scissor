const processWebpage = async () => {};

const processYoutube = async () => {};

const processDocument = async () => {};

// There needs to be separate functions that add descriptions
// RESEARCH ON FUNCTION RETRIES IN LANGCHAIN

// // Adds the description only when scraping is complete
// scraper(longUrl).then((desc) => {
// 	addDescription(desc);
// });

// const addDescription = async (desc) => {
// 	await Scissor.findByIdAndUpdate(newScissor._id, {
// 		description: desc,
// 	});
// };

module.exports = {
	processWebpage,
	processYoutube,
	processDocument,
};
