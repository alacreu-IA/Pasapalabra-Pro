// vocabEngine.js - Lógica de las Tarjetas

window.startVocabSession = async function() {
    // Aquí generamos una sesión de 20 palabras al azar
    window.__vocabSession = [];
    for (let i = 0; i < 20; i++) {
        const word = await window.getRandomWord();
        if (word) {
            window.__vocabSession.push(word);
        }
    }
    window.__vocabIndex = 0;
};

// Cuando el index.html pide la tarjeta actual, le pasamos los datos reales
window.getWord = async function(wordData) {
    if (!wordData) return null;
    
    // Adaptamos los datos de nuestro JSON al formato que espera el diseño de Claude
    return {
        id: wordData.id,
        word: wordData.word,
        pos: wordData.pos,
        // Tu index.html espera un array de acepciones (senses)
        senses: [`1. ${wordData.definition}`], 
        tip: `Empieza por la letra: ${wordData.initial}`
    };
};