const express = require("express");
const mainController = require("../controllers/main");

const router = express.Router();

router.get("/contact", mainController.getContact);

router.get("/about", mainController.getAbout);

router.get("/application", mainController.getApplication);

router.get("/", mainController.getIndex);

module.exports = router;
