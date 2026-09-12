
const generateContent = async (prompt) => {
  const { GoogleGenAI } = await import("@google/genai");
const ai = new GoogleGenAI({

  apiKey: process.env.GEMINI_API_KEY
});

  if (!process.env.GEMINI_API_KEY) {
    const error = new Error("Gemini API key is not configured");
    error.code = "AI_CONFIG_ERROR";
    throw error;
  }

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    const error = new Error("Prompt is required");
    error.code = "INVALID_INPUT";
    throw error;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt.trim()
    });

    if (!response || !response.text) {
      const error = new Error("Invalid response from Gemini");
      error.code = "AI_INVALID_RESPONSE";
      throw error;
    }

    return response.text;
  } catch (error) {
    if (error.code) {
      throw error;
    }

    const geminiError = new Error("Gemini service failed");
    geminiError.code = "AI_SERVICE_ERROR";
    geminiError.originalError = error;

    throw geminiError;
  }
};

module.exports = {
  generateContent
};