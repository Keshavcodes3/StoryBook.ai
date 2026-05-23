import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const ENV_KEYS = [
    'GEMINI_API_KEY',
    'GOOGLE_API_KEY',
    'MuseApiKey',
    'MUSE_API_KEY',
];

const DEFAULT_MODEL_FALLBACKS = [
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash-8b',
    'gemini-1.5-flash',
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

export const getModelFallbacks = () => {
    const fromEnv = process.env.GEMINI_MODEL?.trim();
    const models = fromEnv
        ? [fromEnv, ...DEFAULT_MODEL_FALLBACKS]
        : DEFAULT_MODEL_FALLBACKS;

    return [...new Set(models.filter(Boolean))];
};

export const classifyGeminiError = (err) => {
    const msg = err?.message || String(err);

    if (
        msg.includes('429') ||
        msg.includes('Quota exceeded') ||
        msg.includes('quota') ||
        msg.includes('rate limit')
    ) {
        const retryMatch = msg.match(/retry in ([\d.]+)s/i);
        return {
            type: 'quota',
            status: 429,
            userMessage:
                'AI quota limit reached on the free Gemini plan. Wait about a minute and try again, or add billing in Google AI Studio (aistudio.google.com/apikey).',
            retryAfterSeconds: retryMatch ? Math.ceil(parseFloat(retryMatch[1])) : 60,
        };
    }

    if (msg.includes('API_KEY_INVALID') || msg.includes('API key not valid')) {
        return {
            type: 'auth',
            status: 503,
            userMessage:
                'AI service key is invalid. Update GEMINI_API_KEY on the server and redeploy.',
        };
    }

    if (msg.includes('Gemini API key is not configured')) {
        return {
            type: 'config',
            status: 503,
            userMessage: msg,
        };
    }

    return {
        type: 'unknown',
        status: 500,
        userMessage: 'AI generation failed. Please try again in a moment.',
    };
};

export const toGeminiError = (err) => {
    const info = classifyGeminiError(err);
    const error = new Error(info.userMessage);
    error.status = info.status;
    error.retryAfterSeconds = info.retryAfterSeconds;
    error.type = info.type;
    return error;
};

export const createGeminiModel = (options = {}) => {
    const { model = getModelFallbacks()[0], temperature, maxOutputTokens, ...rest } = options;

    return new ChatGoogleGenerativeAI({
        model,
        apiKey: assertGeminiApiKey(),
        ...(temperature !== undefined && { temperature }),
        ...(maxOutputTokens !== undefined && { maxOutputTokens }),
        ...rest,
    });
};

/**
 * Invoke Gemini with model fallbacks. On 429/quota for one model, tries the next
 * immediately (no long sleep — avoids hanging the user for ~50s).
 */
export const invokeGemini = async (messages, options = {}) => {
    const models = options.models || getModelFallbacks();
    let lastError;

    for (const model of models) {
        try {
            const client = createGeminiModel({
                model,
                temperature: options.temperature ?? 0.8,
                maxOutputTokens: options.maxOutputTokens ?? 2048,
            });
            const response = await client.invoke(messages);
            return response.content;
        } catch (err) {
            lastError = err;
            const { type } = classifyGeminiError(err);
            if (type === 'quota') {
                console.warn(`[Gemini] Quota/rate limit on ${model}, trying next model...`);
                continue;
            }
            throw toGeminiError(err);
        }
    }

    throw toGeminiError(lastError);
};
