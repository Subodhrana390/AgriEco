import { Router } from "express";
import * as controller from "../controllers/chatBot.controller.js";

const chatBotRouter = Router();

chatBotRouter.post("/text-to-speech", controller.texttospeech);
chatBotRouter.post("/bot", controller.ChatBotFunction);

export default chatBotRouter;
