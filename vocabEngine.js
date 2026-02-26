window.iniciarMazo = async function(nombreMazo) {
    try {
        goTo('game');
        
        window.__vocabSession = [];
        const frontContent = document.getElementById('front-content');
        if (frontContent) {
            frontContent.innerHTML = "<div style='color:var(--gold); display:flex; justify-content:center; align-items:center; height:100%; font-size: 1.2rem;'>Barajando tarjetas...</div>";
        }
        
        // Carga 20 palabras de la base de datos
        for (let i = 0; i < 20; i++) {
            if (window.getRandomWord) {
                const word = await window.getRandomWord();
                if (word) window.__vocabSession.push(word);
            } else {
                // Si la base de datos no está conectada, muestra este error en la tarjeta
                window.__vocabSession.push({
                    word: "Error",
                    initial: "E",
                    definition: "No se pudo conectar con la base de datos. Comprueba que db.js funciona.",
                    pos: "Error técnico"
                });
            }
        }
        window.__vocabIndex = 0;
        
        conectarBotones();
        mostrarTarjetaActual();

    } catch (error) {
        alert("¡Ups! Hubo un problema al arrancar el mazo: " + error.message);
        console.error(error);
    }
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
        definicionFrontal = `1. m. ${wordData.definition[0]}`;
        todasLasAcepciones = wordData.definition.map((def, idx) => `<div style="margin-bottom: 6px;">${idx+1}. ${def}</div>`).join('');
    } else {
        definicionFrontal = `1. m. ${wordData.definition || 'Sin definición'}`;
        todasLasAcepciones = `<div style="margin-bottom: 6px;">1. ${wordData.definition || ''}</div>`;
    }

    const etiqueta = wordData.pos || 'término';

    // --- CARA FRONTAL ---
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

    // --- CARA TRASERA ---
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

    if (wordData.example) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #2a2a38; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">EJEMPLO</div>
                <div style="font-size: 0.95rem; color: #d0d0d8;">${wordData.example}</div>
            </div>
        `;
    }

    if (wordData.tip || wordData.etymology) {
        const textoTip = wordData.tip || wordData.etymology;
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #f5c842; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">💡 PARA MEMORIZAR</div>
                <div style="font-size: 0.95rem; color: #f5c842;">${textoTip}</div>
            </div>
        `;
    }

    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(wordData.word || '')}`;
    contenidoTrasero += `
            <a href="${enlaceRAE}" target="_blank" style="display: flex; justify-content: center; align-items: center; gap: 8px; width: 100%; background: #005bb5; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.95rem; margin-top: auto;">
                📖 Ver definición completa en la RAE
            </a>
        </div>
    `;

    document.getElementById('back-extra').innerHTML = contenidoTrasero;

    // Progreso
    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1}/20`;
    const porcentaje = ((window.__vocabIndex + 1) / 20) * 100;
    document.getElementById('progress-bar-fill').style.width = `${porcentaje}%`;
}

function conectarBotones() {
    document.getElementById('btn-bad').onclick = () => calificarPalabra(1); 
    document.getElementById('btn-mid').onclick = () => calificarPalabra(3); 
    document.getElementById('btn-good').onclick = () => calificarPalabra(5); 
}

async function calificarPalabra(puntuacion) {
    window.__vocabIndex++;
    if (window.__vocabIndex < window.__vocabSession.length) {
        mostrarTarjetaActual();
    } else {
        alert("¡Tanda de 20 completada, Noemi! 🚀");
        goTo('home'); 
    }
}