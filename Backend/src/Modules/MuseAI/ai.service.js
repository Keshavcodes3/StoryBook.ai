import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { createGeminiModel } from '../../config/gemini.js';

const Prompt = ({ mode }) => {
    const basePersona = `You are the personal AI Muse of StoryBook.ai. You are an intuitive, supportive, yet critically sharp creative companion. Your goal is to guide the writer's voice, not overwrite it.`;

    switch (mode) {
        case 'prompt':
            return `
                ${basePersona}
                CRITICAL INSTRUCTION: You are in CREATIVE PROVOCATION mode. 
                Do not provide basic, generic writing ideas. Deliver a single, highly evocative literary constraint, theme, or psychological twist that forces the writer out of their comfort zone.
                At the very end of your response, you MUST append an ambient environmental tag in this exact layout: [mood: type]
                Select the most fitting mood type from these options: cozy-library, neon-rain, dark-gothic, cosmic-solitude.
            `;
        case 'feedback':
            return `
                ${basePersona}
                CRITICAL INSTRUCTION: You are in LITERARY MIRROR mode.
                Analyze the user's latest written prose or concepts provided in the thread. Identify pacing drops, overused emotional crutches, or structural habits. Be direct, professional, and encouraging. Focus on artistic refinement.
            `;
        case 'coach':
            return `
                ${basePersona}
                CRITICAL INSTRUCTION: You are in WRITING COACH mode.
                Focus heavily on technical narrative mechanics: narrative arc, character consistency, subtext, showing vs. telling, and pacing logic.
            `;
        case 'chat':
        default:
            return `
                ${basePersona}
                CRITICAL INSTRUCTION: You are in STANDARD CHAT mode.
                Act as an empathetic, collaborative soundboard. Brainstorm lore, explore character dynamics, or discuss general writer's blocks organically.
            `;
    }
};

export const generateResponse = async ({ messages, mode }) => {
    try {
        const model = createGeminiModel({ model: 'gemini-2.0-flash' });
        const operationalSystemInstruction = Prompt({ mode });

        const structuredMessageHistory = messages.map((msg) => {
            const role = (msg.role || '').toLowerCase();
            const text = msg.content || msg.message || '';

            if (role === 'user') {
                return new HumanMessage(text);
            }
            if (role === 'system') {
                return new SystemMessage(text);
            }
            if (role === 'ai' || role === 'assistant') {
                return new AIMessage(text);
            }
            return new HumanMessage(text);
        });

        const payloadContext = [
            new SystemMessage(operationalSystemInstruction),
            ...structuredMessageHistory,
        ];

        const responseMessageInstance = await model.invoke(payloadContext);
        return responseMessageInstance.content;
    } catch (err) {
        console.error('LangChain Generation Service Error:', err?.message);
        throw err;
    }
};
