// vocabEngine.js - Lógica Definitiva + SRS Básico

window.startVocabSession = async function() {
    window.__vocabSession = [];
    console.log("Generando nueva sesión de 20 palabras...");
    
    // Sacamos 20 palabras aleatorias de la DB
    for (let i = 0; i < 20; i++) {
        const word = await window.getRandomWord();
        if (word) window.__vocabSession.push(word);
    }
    window.__vocabIndex = 0;
    
    // Conectamos los botones de la interfaz a nuestras funciones
    conectarBotones();
};

window.getWord = async function(wordData) {
    if (!wordData) return null;
    return {
        id: wordData.id,
        word: wordData.word,
        pos: wordData.pos,
        // Envolvemos la definición en un <li> para que el diseño de Claude lo pinte bien
        senses: [`<li style="margin-bottom: 8px;">${wordData.definition}</li>`], 
        tip: `Empieza por la letra: ${wordData.initial}`,
        etym: "", synonyms: "", examples: "" // Campos vacíos por ahora para que no de error
    };
};

// --- EL CEREBRO DE LOS BOTONES ---
function conectarBotones() {
    // Buscamos los botones por el texto que tienen dentro (o por clase si la sabes)
    const botones = document.querySelectorAll('button');
    
    botones.forEach(btn => {
        const texto = btn.textContent.toLowerCase();
        
        // Botón "Girar tarjeta" o "Ver respuesta"
        if (texto.includes('girar') || texto.includes('respuesta')) {
            btn.onclick = () => window.flipCard && window.flipCard();
        }
        
        // Botones de calificación (SRS)
        if (texto.includes('no la sé') || texto.includes('difícil')) {
            btn.onclick = () => calificarPalabra(1); // 1 = Fallo
        } else if (texto.includes('dudo') || texto.includes('repasar')) {
            btn.onclick = () => calificarPalabra(3); // 3 = Medio
        } else if (texto.includes('la sé') || texto.includes('fácil')) {
            btn.onclick = () => calificarPalabra(5); // 5 = Perfecto
        }
    });
}

async function calificarPalabra(puntuacion) {
    const wordActual = window.__vocabSession[window.__vocabIndex];
    console.log(`Palabra: ${wordActual.word} | Puntuación: ${puntuacion}`);
    
    // AQUÍ ES DONDE SE GUARDA EL PROGRESO (Recreación básica del algoritmo SRS)
    const tx = db.transaction("progress", "readwrite");
    const store = tx.objectStore("progress");
    
    // Calculamos el próximo repaso
    let diasRepaso = 1;
    if (puntuacion === 3) diasRepaso = 3;
    if (puntuacion === 5) diasRepaso = 7;
    
    const progreso = {
        id: wordActual.id,
        ultimaPuntuacion: puntuacion,
        proximoRepaso: Date.now() + (diasRepaso * 24 * 60 * 60 * 1000)
    };
    
    store.put(progreso);
    
    // Pasamos a la siguiente tarjeta
    window.__vocabIndex++;
    
    if (window.__vocabIndex < window.__vocabSession.length) {
        // Aún hay cartas en la sesión
        const nextCard = await window.getWord(window.__vocabSession[window.__vocabIndex]);
        
        // Forzamos que la tarjeta vuelva a estar boca abajo
        if (typeof window.isFlipped !== 'undefined') window.isFlipped = false;
        
        window.renderFront(nextCard); // Renderiza la nueva carta
        
        // Actualizamos el contador de la interfaz (si existe)
        const status = document.getElementById('status-bar');
        if (status) status.textContent = `Tarjeta ${window.__vocabIndex + 1} de 20`;
        
    } else {
        // Fin de la sesión
        alert("¡Sesión terminada! Has repasado 20 palabras.");
        window.startVocabSession(); // Reiniciamos otra ronda
    }
}