import 'dotenv/config'

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { poetryPrompt, storyPrompt, titlePrompt } from "./story.prompt.js";


const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0.83,
});

/**
 * Core Service to generate fresh storybook.ai content using LangChain
 * @param {Object} params
 * @param {string} params.format - 'story' or 'poetry'
 * @param {string} params.mood - The user's emotional state
 * @param {string} params.genre - The target literary genre
 * @param {string} params.userPrompt - The core description narrative
 */
export const generateContent = async ({ format, mood, genre, userPrompt }) => {
    try {

        let compiledPrompt;
        let response;
        if (format == "poetry") {
            compiledPrompt = poetryPrompt({ mood, genre, userPrompt })
        } else {
            compiledPrompt = storyPrompt({
                mood, genre, userPrompt
            })
        }
        response = await geminiModel.invoke([
            new HumanMessage(compiledPrompt)
        ])

        return response.content;

    } catch (error) {
        console.error("LangChain Generation Service Error:", error);
        throw new Error("Failed to process the creative generation pipeline.");
    }
};



export const generateTitle = async ({ format, mood, genre, userPrompt }) => {
    try {

        const prompt = titlePrompt({ mood, genre, format, userPrompt })

        const response = await geminiModel.invoke([
            new HumanMessage(prompt)
        ])

        return response.content
    } catch (error) {
        console.error("LangChain Generation Service Error:", error);
        throw new Error("Failed to process the creative generation pipeline.");
    }
}