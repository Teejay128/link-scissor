const express = require("express");
require("dotenv").config();

const db = require("./config/database");
const scissorRouter = require("./routes/scissorRouter");

const app = express();
const MONGODB_URL = process.env.MONGODB_URL;
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/scissor", scissorRouter);

app.get("*", (req, res) => {
	res.status(404).send(
		"Error 404: The page you are looking for cannot be found"
	);
});

app.listen(port, () => {
	db.connect(MONGODB_URL);
	console.log(`Server listening on port ${port}`);
});
