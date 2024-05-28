const express = require("express");

const programsRouter = require('./programs/router');

const router = express.Router();

router.use('/programs', programsRouter);
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

// ...
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
