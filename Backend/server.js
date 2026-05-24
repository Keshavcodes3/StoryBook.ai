import 'dotenv/config';

import app from './src/App.js';
import { connectToDB } from './src/config/database.js';
import { getGeminiApiKeys, getModelFallbacks } from './src/config/gemini.js';

const PORT = process.env.PORT || 3000;

const geminiKeys = getGeminiApiKeys();
if (geminiKeys.length === 0) {
    console.warn(
        'WARNING: No Gemini API key found. Set GEMINI_API_KEY (or GOOGLE_API_KEY / MuseApiKey) in environment variables.'
    );
} else {
    console.log(`Gemini: ${geminiKeys.length} API key(s) loaded; models: ${getModelFallbacks().join(' → ')}`);
}

connectToDB();
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});