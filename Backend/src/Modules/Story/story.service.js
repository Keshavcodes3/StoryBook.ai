import { HumanMessage } from '@langchain/core/messages';
import { createGeminiModel } from '../../config/gemini.js';
import { poetryPrompt, storyPrompt, titlePrompt } from './story.prompt.js';

const getModel = (temperature = 0.83) =>
    createGeminiModel({ model: 'gemini-2.0-flash', temperature });

export const generateContent = async ({ format, mood, genre, userPrompt }) => {
    try {
        const geminiModel = getModel(0.83);
        const compiledPrompt =
            format === 'poetry'
                ? poetryPrompt({ mood, genre, userPrompt })
                : storyPrompt({ mood, genre, userPrompt });

        const response = await geminiModel.invoke([new HumanMessage(compiledPrompt)]);
        return response.content;
    } catch (error) {
        console.error('LangChain Generation Service Error:', error);
        throw error;
    }
};

export const generateTitle = async ({ format, mood, genre, userPrompt }) => {
    try {
        const geminiModel = getModel(0.7);
        const prompt = titlePrompt({ mood, genre, format, userPrompt });
        const response = await geminiModel.invoke([new HumanMessage(prompt)]);
        return response.content;
    } catch (error) {
        console.error('LangChain Generation Service Error:', error);
        throw error;
    }
};
