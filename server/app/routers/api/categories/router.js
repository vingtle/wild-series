const express = require("express");

const { browse, read } = require("../../../controllers/categoryActions");

const router = express.Router();

router.get("/:id", read);

router.get("/", browse);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

/* ************************************************************************* */

module.exports = router;