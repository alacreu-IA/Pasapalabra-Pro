// ... (mantenemos la función iniciarMazo igual que la última que te pasé)

async function mostrarTarjetaActual() {
    const wordData = window.__vocabSession[window.__vocabIndex];
    if(!wordData) return;

    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('btn-bad').style.display = 'none';
    document.getElementById('btn-mid').style.display = 'none';
    document.getElementById('btn-good').style.display = 'none';

    const palabra = wordData.word || wordData.palabra || wordData.lema || 'Indefinida';
    const etiqueta = wordData.pos || wordData.category || 'término';
    
    // --- LIMPIADOR AUTOMÁTICO DE DEFINICIONES ---
    let defRaw = wordData.definition || wordData.definicion || wordData.def || "";
    
    function limpiarTexto(t) {
        if (typeof t !== 'string') return t;
        return t.replace(/^[:\s,]+/, '') // Quita ":" y espacios al principio
                .replace(/\[\[Archivo:.*?\]\]/g, '') // Quita códigos de imagen
                .replace(/\|/g, ' ') // Quita barras verticales
                .trim();
    }

    let definicionFrontal = "";
    let todasLasAcepciones = "";
    
    if (Array.isArray(defRaw)) {
        definicionFrontal = limpiarTexto(defRaw[0]);
        todasLasAcepciones = defRaw.map((d, i) => `<div style="margin-bottom:8px;"><strong>${i+1}.</strong> ${limpiarTexto(d)}</div>`).join('');
    } else {
        const limpia = limpiarTexto(defRaw);
        definicionFrontal = limpia || "Haz clic en el botón de la RAE para ver la definición.";
        todasLasAcepciones = `<div style="margin-bottom:8px;">${definicionFrontal}</div>`;
    }

    // --- CARA FRONTAL (Diseño IMG_2516) ---
    document.getElementById('front-content').innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%; width: 100%;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">
                DEFINICIÓN — ¿QUÉ PALABRA ES?
            </div>
            <div style="font-size: 1.15rem; color: #f0f0f5; line-height: 1.5; margin-bottom: 20px;">
                ${definicionFrontal}
            </div>
            <div>
                <span style="background: rgba(255,255,255,0.06); color: #8888a8; padding: 5px 14px; border-radius: 12px; font-size: 0.8rem; border: 1px solid #2a2a38;">
                    ${etiqueta}
                </span>
            </div>
            <div style="margin-top: auto; text-align: right; font-size: 0.8rem; color: #555568;">
                Toca para ver respuesta
            </div>
        </div>
    `;

    // --- CARA TRASERA (Diseño IMG_2517/2520) ---
    let contenidoTrasero = `
        <div style="width: 100%; display: flex; flex-direction: column;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                RESPUESTA
            </div>
            <div style="font-size: 2.5rem; color: #f5c842; font-family: 'Syne', sans-serif; font-weight: 800; margin-bottom: 15px; line-height: 1.1; text-transform: capitalize;">
                ${palabra}
            </div>
            <div style="font-size: 0.95rem; color: #f0f0f5; line-height: 1.4; margin-bottom: 20px;">
                ${todasLasAcepciones}
            </div>
    `;

    // Casilla Sinónimos
    const sinos = wordData.synonyms || wordData.sinonimos;
    if (sinos) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #b366ff; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #b366ff; text-transform: uppercase; margin-bottom: 6px; font-weight: bold;">🔄 SINÓNIMOS</div>
                <div style="font-size: 0.95rem; color: #e6ccff;">${limpiarTexto(sinos)}</div>
            </div>
        `;
    }

    // Casilla Memorizar
    const truco = wordData.tip || wordData.etymology || wordData.pista;
    if (truco) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #f5c842; border-radius: 10px; padding: 14px; margin-bottom: 25px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 8px;">💡 PARA MEMORIZAR</div>
                <div style="font-size: 0.95rem; color: #f5c842; line-height: 1.4;">${limpiarTexto(truco)}</div>
            </div>
        `;
    }

    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(palabra)}`;
    contenidoTrasero += `
            <a href="${enlaceRAE}" target="_blank" style="display: flex; justify-content: center; align-items: center; gap: 8px; width: 100%; background: #005bb5; color: white; padding: 15px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.95rem; margin-top: auto;">
                📖 Ver definición completa en la RAE
            </a>
        </div>
    `;

    document.getElementById('back-extra').innerHTML = contenidoTrasero;
    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1}/20`;
    document.getElementById('progress-bar-fill').style.width = `${((window.__vocabIndex + 1) / 20) * 100}%`;
}
// ... (resto de funciones calificarPalabra etc igual)