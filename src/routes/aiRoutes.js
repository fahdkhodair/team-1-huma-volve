const express = require("express");

const {
  generateAIContent
} = require("../controllers/aiController");

const router = express.Router();

router.post("/generate", generateAIContent);

module.exports = router;