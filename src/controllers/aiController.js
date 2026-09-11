const { generateContent } = require("../services/geminiService");

const generateAIContent = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      const error = new Error("Prompt is required");
      error.code = "INVALID_INPUT";
      error.statusCode = 400;
      throw error;
    }

    const content = await generateContent(prompt);

    res.status(200).json({
      success: true,
      data: {
        content
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateAIContent
};