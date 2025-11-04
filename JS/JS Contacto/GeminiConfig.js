// Configuración de Gemini API
// Obtén tu API Key en: https://makersuite.google.com/app/apikey

const GEMINI_API_KEY = 'AIzaSyCvs2dYjZyOR70rqWgnwW451AnAFhvbO9g'; // ← REEMPLAZA CON TU API KEY

// Configuración del modelo para la librería oficial
const GEMINI_CONFIG = {
    generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
    }
};

// Exportar para uso global
window.GEMINI_CONFIG = {
    API_KEY: GEMINI_API_KEY,
    CONFIG: GEMINI_CONFIG
};