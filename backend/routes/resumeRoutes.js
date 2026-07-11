const express = require("express");
const router = express.Router();

const upload = require("../utils/multerConfig");
const authenticateToken = require("../middleware/authMiddleware");
const { uploadResume } = require("../controllers/resumeController");

// Upload Resume
router.post(
    "/upload",
    authenticateToken,
    upload.single("resume"),
    uploadResume
);

module.exports = router;