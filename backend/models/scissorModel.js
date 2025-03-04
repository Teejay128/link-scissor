const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scissorSchema = new Schema({
	longUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
		unique: true,
	},
	type: {
		type: String,
		enum: ["webpage", "youtube", "document"],
		default: "webpage",
	},
	urlCode: {
		type: String,
		required: true,
	},
	qrCode: {
		type: String,
		default:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOBSURBVO3BQY7kSAIDQfeA/v9lbh/mwJMAQZk1XbM0M38w84/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMuXhJ5ScloancScIdlZaET1L5SUl44zBTDjPlMFMuPiwJn6RyJwlNpal8k0pLwp0kfJLKJx1mymGmHGbKxZepPJGET0pCU7mj0pLQVD5J5YkkfNNhphxmymGmXPxyKi0JTaUloam0JDSV/yeHmXKYKYeZcvEfo9KS0FTuqNxJQlP5LznMlMNMOcyUiy9Lwk9KQlNpSbijckelJeGNJPxNDjPlMFMOM+Xiw1R+E5WWhKbSktBUWhLuqPzNDjPlMFMOM+XipST8Zkl4Iwl3kvCbHGbKYaYcZsrFSyotCU+otCQ0lTeS0FTeUGlJaCqflIQ7Ki0JbxxmymGmHGaK+YMvUrmThDdU3kjCJ6ncSUJTaUloKi0J33SYKYeZcpgpF1+WhKbSVFoSmsqdJNxRaUloKm8k4U4SmkpLwt/kMFMOM+UwUy5eUnkiCU2lqbQkvJGEO0loKi0JTeUJlZaET1JpSXjjMFMOM+UwUy5eSkJTaUl4IglN5U4SmkpLQlN5Iwl3ktBU7qj8TQ4z5TBTDjPF/MELKi0JP0mlJeENlTeS8IRKS8K/6TBTDjPlMFPMH3yRyp0kNJU7SWgqd5LwSSpPJOE3OcyUw0w5zJSLH5aEJ5LwhkpLQlNpSWgqd5LQVD5JpSWhqbQkvHGYKYeZcpgpFy+pvKHSktBUnkhCU2kqLQlN5U4Smsodld/kMFMOM+UwU8wf/GIqTyShqbQkPKHSkvCESkvCHZU7SXjjMFMOM+UwUy5eUvlJSbiThDsqd1TuJOEJlZaEN5LwTYeZcpgph5ly8WFJ+CSVO0loKk8koam0JLyRhDdUWhKaSkvCG4eZcpgph5ly8WUqTyThCZWWhCdUPknlm1RaEj7pMFMOM+UwUy5+uSQ0lTtJaEloKk3lm5LQVO4koam0JLxxmCmHmXKYKRf/cUl4IglvqLQkPJGEOyotCZ90mCmHmXKYKRdfloR/k0pLQlNpSWgqd5LwhkpLQlP5SYeZcpgph5ly8WEqP0nlThKaSktCU/kmlTsqT6i0JLxxmCmHmXKYKeYPZv5xmCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKf8DHrB+KrS/f4AAAAAASUVORK5CYII",
	},
	summary: {
		type: String,
	},
	rawText: {
		type: String,
	},
	clicks: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Scissor = mongoose.model("Scissor", scissorSchema);

module.exports = Scissor;
