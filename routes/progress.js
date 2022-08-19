const express = require("express");
const router = express.Router();

const progressController = require("../controllers/progress");

router.get("/progress", progressController.getProgress);
router.get("/admin/progress", progressController.getAdminProgress);
router.get("/project", progressController.getProject);

module.exports = router;
