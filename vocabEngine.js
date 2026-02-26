// vocabEngine.js - Puente entre la Base de Datos y la Interfaz de Claude

// Generamos la sesión de 20 tarjetas sacadas de IndexedDB
window.startVocabSession = async function() {
    window.__vocabSession = [];
    console.log("Generando sesión de 20 palabras reales...");
    
    for (let i = 0; i < 20; i++) {
        // window.getRandomWord viene de tu db.js
        const word = await window.getRandomWord();
        if (word) {
            window.__vocabSession.push(word);
        }
    }
    window.__vocabIndex = 0;
};

// Esta es la función exacta que Claude usa en su index.html para pintar la tarjeta
window.getWord = async function(wordData) {
    if (!wordData) return null;
    
    // Generamos el enlace dinámico a la RAE con la palabra actual
    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(wordData.word)}`;
    
    return {
        id: wordData.id,
        word: wordData.word,
        pos: wordData.pos,
        // Envolvemos la definición para que se vea bien
        senses: [`<li>${wordData.definition}</li>`], 
        
        // Rellenamos los campos extra que diseñó Claude para que no se vea vacío
        synonyms: "<i>Sinónimos no disponibles en este nivel</i>",
        examples: `<i>Definición extraída del diccionario libre.</i>`,
        
        // Usamos el hueco de la etimología para poner un enlace bonito a la RAE
        etym: `<a href="${enlaceRAE}" target="_blank" style="color: var(--gold); text-decoration: none; font-weight: bold;">📖 Consultar en la RAE ↗</a>`,
        
        // El "Tip" automático para ayudarte a estudiar
        tip: `💡 Pista para el Rosco: Empieza por la letra <strong>${wordData.initial}</strong>`
    };
};