import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import memoryModel from "./memory.model.js";

// Initialize a fast model to extract data structure patterns out of text efficiently
const extractionModel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.MuseApiKey || process.env.GEMINI_API_KEY,
    temperature: 0.2 // Low temperature ensures accurate, predictable extraction logic
});

export const autoProcessAndStoreMemory = async (userId, sessionId, userMessageText) => {
    try {
        const systemPrompt = `
            You are a backend background data extraction engine. 
            Analyze the incoming text from a writer and determine if they are stating a permanent preference, lore element, theme, or writing style flaw.
            Ignore casual chatter like "hi", "how are you", or everyday routine remarks. Only pull out things relevant to their creative writing persona.

            If relevant data is found, you MUST respond with a valid JSON object in this exact layout. Do not add markdown wraps, triple backticks, or extra text:
            {
                "hasRelevantData": true,
                "category": "Choose one: writing-style | character-lore | themes | structural-flaws",
                "extractedInsights": ["A short, clear summary string of the insight discovered"]
            }

            If the text contains nothing relevant to long-term writing memory, return:
            {
                "hasRelevantData": false,
                "category": "none",
                "extractedInsights": []
            }
        `;

        const response = await extractionModel.invoke([
            new SystemMessage(systemPrompt),
            new HumanMessage(`Analyze this user message text: "${userMessageText}"`)
        ]);

        let cleanContent = response.content.trim();
        if (cleanContent.startsWith("```")) {
            cleanContent = cleanContent.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
        }

        const analysis = JSON.parse(cleanContent);

        if (!analysis.hasRelevantData || !analysis.extractedInsights || analysis.extractedInsights.length === 0) {
            return { success: true, message: "No persistent data found in this message turn." };
        }


        const updatedMemory = await memoryModel.findOneAndUpdate(
            {
                userID: userId,
                memoryType: analysis.category // Automatically determined by the AI!
            },
            {

                $addToSet: { data: { $each: analysis.extractedInsights } },
                $set: { sourceSessionId: sessionId }
            },
            {
                new: true,
                upsert: true // Creates the category document if it's the first time seeing it
            }
        );

        console.log(`[Auto-Memory]: Successfully stashed to "${analysis.category}" for user ${userId}`);
        return { success: true, data: updatedMemory };

    } catch (err) {
        console.error("Auto-Memory Processing Failed:", err.message);

        return { success: false, error: err.message };
    }
};