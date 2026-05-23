import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const ENV_KEYS = [
    'GEMINI_API_KEY',
    'GOOGLE_API_KEY',
    'MuseApiKey',
    'MUSE_API_KEY',
];

export const getGeminiApiKey = () => {
    for (const name of ENV_KEYS) {
        const raw = process.env[name];
        if (!raw) continue;

        const key = raw.trim().replace(/^['"]|['"]$/g, '');
        if (key) return key;
    }

    return null;
};

export const assertGeminiApiKey = () => {
    const key = getGeminiApiKey();
    if (!key) {
        throw new Error(
            `Gemini API key is not configured. Set one of: ${ENV_KEYS.join(', ')}`
        );
    }
    return key;
};

export const createGeminiModel = (options = {}) => {
    const { model = 'gemini-2.0-flash', temperature, ...rest } = options;

    return new ChatGoogleGenerativeAI({
        model,
        apiKey: assertGeminiApiKey(),
        ...(temperature !== undefined && { temperature }),
        ...rest,
    });
};
