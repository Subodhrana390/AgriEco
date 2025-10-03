import { cropAdviceChatbot } from "../../ai/cropAdviceChatbot.js";
import { textToSpeech } from "../../ai/text-to-speech.js";
import asyncHandler from "../utils/asyncHandler.js";

const ChatBotFunction = asyncHandler(async (req, res) => {
  const { query, language } = req.body;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Query is required",
    });
  }

  try {
    const result = await cropAdviceChatbot({ query, language });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const texttospeech = asyncHandler(async (req, res) => {
  const { text, language = "en-US" } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required",
    });
  }

  try {
    const audioData = await textToSpeech(text);

    return res.status(200).json({
      success: true,
      data: {
        audio: audioData,
        format: "audio/wav",
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export { ChatBotFunction, texttospeech };
