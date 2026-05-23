import 'dotenv/config';

import app from './src/App.js';
import { connectToDB } from './src/config/database.js';
import { getGeminiApiKey } from './src/config/gemini.js';

const PORT = process.env.PORT || 3000;

if (!getGeminiApiKey()) {
    console.warn(
        'WARNING: No Gemini API key found. Set GEMINI_API_KEY (or GOOGLE_API_KEY / MuseApiKey) in environment variables.'
    );
} else {
    console.log('Gemini API key loaded');
}

connectToDB();
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});