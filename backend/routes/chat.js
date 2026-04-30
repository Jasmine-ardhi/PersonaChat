import express from "express";
import Groq from "groq-sdk";
import { getPersonaPrompt } from "../utils/getPersonaPrompt.js";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/", async (req, res) => {
  const { message, persona } = req.body;

  console.log("CHAT HIT:", message, persona);

  try {
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b", 
      messages: [
        {
          role: "system",
          content: getPersonaPrompt(persona)
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({
      reply: "Something went wrong. Please try again."
    });
  }
});

export default router;