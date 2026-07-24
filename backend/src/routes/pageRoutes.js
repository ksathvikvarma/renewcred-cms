const express = require("express");

const router = express.Router();

const pageController = require("../controllers/pageController");
const authenticate = require("../middleware/authMiddleware");

// Create Page
router.post("/", authenticate, pageController.createPage);
router.get("/", authenticate, pageController.getAllPages);
router.get("/:id", authenticate, pageController.getPageById);
router.put("/:id", authenticate, pageController.updatePage);
router.delete("/:id", authenticate, pageController.deletePage);

module.exports = router;