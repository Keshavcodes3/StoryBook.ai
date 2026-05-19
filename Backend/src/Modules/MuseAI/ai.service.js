import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";


const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.MuseApiKey
})