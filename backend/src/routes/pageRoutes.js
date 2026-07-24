const express = require("express");

const router = express.Router();

const pageController = require("../controllers/pageController");
const authenticate = require("../middleware/authMiddleware");

// Create Page
router.post("/", authenticate, pageController.createPage);

module.exports = router;