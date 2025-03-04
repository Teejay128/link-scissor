const express = require("express");
const scissorController = require("../controllers/scissorController");

const router = express.Router();
router
	.route("/")
	.get(scissorController.getScissorPage)
	.post(scissorController.newScissor);

router
	.route("/:urlCode")
	.get(scissorController.getScissor)
	.delete(scissorController.deleteScissor);

module.exports = router;
