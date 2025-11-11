// Configuración de Gemini API - GeminiConfig.js
const GEMINI_API_KEY = 'AIzaSyCvs2dYjZyOR70rqWgnwW451AnAFhvbO9g';

// Configuración optimizada para Gemini 2.5/2.0
const GEMINI_CONFIG = {
    API_KEY: GEMINI_API_KEY,
    CONFIG: {
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
        }
    }
};

// Exportar para uso global
window.GEMINI_CONFIG = GEMINI_CONFIG;
console.log('✅ Gemini 2.5/2.0 Config loaded');