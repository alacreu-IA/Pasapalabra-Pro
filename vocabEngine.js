window.iniciarMazo = async function(nombreMazo) {
    // Hemos quitado el bloqueo. Ahora arranca cualquier mazo que pulses.
    goTo('game');
    
    window.__vocabSession = [];
    document.getElementById('front-content').innerHTML = "<div style='color:var(--text-muted); display:flex; justify-content:center; align-items:center; height:100%;'>Generando sesión...</div>";
    
    // Aquí el sistema debería filtrar por mazo, pero por ahora cogerá 20 aleatorias de lo que haya cargado.
    for (let i = 0; i < 20; i++) {
        const word = await window.getRandomWord();
        if (word) window.__vocabSession.push(word);
    }
    window.__vocabIndex = 0;
    
    conectarBotones();
    mostrarTarjetaActual();
};

async function mostrarTarjetaActual() {
    const wordData = window.__vocabSession[window.__vocabIndex];
    if(!wordData) return;

    // Reset visual
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('btn-bad').style.display = 'none';
    document.getElementById('btn-mid').style.display = 'none';
    document.getElementById('btn-good').style.display = 'none';

    // Procesamos la definición
    let definicionFrontal = "";
    let todasLasAcepciones = "";
    
    if (Array.isArray(wordData.definition)) {
        definicionFrontal = `1. m. ${wordData.definition[0]}`; // Simulamos formato RAE
        todasLasAcepciones = wordData.definition.map((def, idx) => `<div style="margin-bottom: 6px;">${idx+1}. m. ${def}</div>`).join('');
    } else {
        definicionFrontal = `1. m. ${wordData.definition || 'Sin definición'}`;
        todasLasAcepciones = `<div style="margin-bottom: 6px;">1. m. ${wordData.definition || ''}</div>`;
    }

    const etiqueta = wordData.pos || 'filosofía';

    // --- CARA FRONTAL (Calcada a IMG_2516) ---
    document.getElementById('front-content').innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%; width: 100%;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">
                DEFINICIÓN — ¿QUÉ PALABRA ES?
            </div>
            <div style="font-size: 1.15rem; color: #f0f0f5; line-height: 1.5; margin-bottom: 15px;">
                ${definicionFrontal}
            </div>
            <div>
                <span style="background: rgba(255,255,255,0.06); color: #8888a8; padding: 4px 14px; border-radius: 12px; font-size: 0.8rem; border: 1px solid #2a2a38;">
                    ${etiqueta}
                </span>
            </div>
            <div style="margin-top: auto; text-align: right; font-size: 0.8rem; color: #555568;">
                Toca para ver respuesta
            </div>
        </div>
    `;

    // --- CARA TRASERA (Calcada a IMG_2517) ---
    let contenidoTrasero = `
        <div style="width: 100%; display: flex; flex-direction: column; height: 100%;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                RESPUESTA
            </div>
            <div style="font-size: 2.8rem; color: #f5c842; font-family: 'Syne', sans-serif; font-weight: 800; margin-bottom: 15px; line-height: 1.1; text-transform: capitalize; letter-spacing: -1px;">
                ${wordData.word || 'Indefinida'}
            </div>
            <div style="font-size: 1rem; color: #f0f0f5; line-height: 1.4; margin-bottom: 20px;">
                ${todasLasAcepciones}
            </div>
    `;

    // Casilla Ejemplo
    if (wordData.example) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #2a2a38; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 6px;