/**
 * Run from Backend/: node scripts/test-gemini.mjs
 * Requires GEMINI_API_KEY (or MuseApiKey) in .env or environment.
 */
import 'dotenv/config';
import { probeGeminiHealth, getGeminiApiKeys, listGeminiModelsForKey } from '../src/config/gemini.js';

const keys = getGeminiApiKeys();
if (keys.length === 0) {
    console.error('No API key found. Set GEMINI_API_KEY in .env');
    process.exit(1);
}

console.log(`Configured key(s): ${keys.length}`);

try {
    const models = await listGeminiModelsForKey(keys[0]);
    console.log('Available generateContent models (first 12):');
    console.log(models.slice(0, 12).join('\n'));
} catch (e) {
    console.error('ListModels failed:', e.message);
}

const health = await probeGeminiHealth();
console.log('\nHealth probe:', JSON.stringify(health, null, 2));
process.exit(health.ok ? 0 : 1);
