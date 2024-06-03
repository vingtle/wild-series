const express = require("express");
const categoriesRouter = require("./categories/router");
const programsRouter = require("./programs/router");
const itemsRouter = require("./items/router");
const { sayWelcome } = require("../../controllers/sayActions");

const router = express.Router();

router.get("/", sayWelcome);
router.use("/categories", categoriesRouter);
router.use("/programs", programsRouter);
router.use("/items", itemsRouter);

module.exports = router;
