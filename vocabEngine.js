window.iniciarMazo = async function(nombre) {
    window.__vocabSession = [];
    window.__vocabIndex = 0;
    goTo('game');

    // Mensaje de carga mientras baraja
    const front = document.getElementById('front-content');
    if(front) front.innerHTML = "<div style='display:flex; height:100%; justify-content:center; align-items:center; color:var(--gold); font-size:1.2rem; font-weight:bold;'>Barajando tarjetas...</div>";

    let count = 0;
    let intentos = 0; // Límite de seguridad anti-bucles infinitos

    while(count < 20 && intentos < 800) {
        intentos++;
        const wordData = await window.getRandomWord();
        if(!wordData) break;
        
        const palabraText = wordData.word || wordData.palabra || "";
        if (!palabraText) continue;

        const key = `repaso_${palabraText}`;
        const lock = localStorage.getItem(key);
        
        // Comprueba si la palabra le toca repaso
        if(!lock || new Date().getTime() > parseInt(lock)) {
            // FILTRO ANTI-DUPLICADOS: Evita que salga la misma palabra 2 veces en la misma tanda
            const yaEsta = window.__vocabSession.some(w => (w.word || w.palabra) === palabraText);
            if (!yaEsta) {
                window.__vocabSession.push(wordData);
                count++;
            }
        }
    }
    
    if (window.__vocabSession.length === 0) {
        alert("¡No quedan palabras nuevas! Todas están programadas para otro día.");
        goTo('home');
        return;
    }

    mostrarTarjeta();
};

function limpiar(t) {
    if(!t) return "";
    // Limpia basura de Wikipedia, barras verticales, dos puntos y guiones iniciales
    return t.toString().replace(/^[:\s,\-]+/, '').replace(/\[\[Archivo:.*?\]\]/g, '').replace(/\|/g, ' ').trim();
}

function mostrarTarjeta() {
    const data = window.__vocabSession[window.__vocabIndex];
    if(!data) return;

    // Reset de la tarjeta visual
    document.getElementById('flashcard').classList.remove('flipped');
    document.querySelectorAll('.controls button').forEach(b => b.style.display = 'none');
    
    const palabra = data.word || data.palabra || "Desconocida";
    
    // Extractor robusto de definición (cubre múltiples nombres de columna)
    let defRaw = data.definition || data.definicion || data.def || "Definición no encontrada en el archivo.";
    const defs = Array.isArray(defRaw) ? defRaw : [defRaw];
    const defPrincipal = limpiar(defs[0]);
    
    const etiqueta = data.pos || data.category || "término";

    // --- CARA FRONTAL ---
    document.getElementById('front-content').innerHTML = `
        <div style="display:flex; flex-direction:column; height:100%;">
            <p style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:15px; font-weight:bold; letter-spacing:1px;">Definición — ¿Qué palabra es?</p>
            <p style="font-size:1.2rem; line-height:1.5; color:#fff;">${defPrincipal}</p>
            <div style="margin-top:auto;">
                <span style="background:rgba(255,255,255,0.06); padding:5px 14px; border-radius:12px; font-size:0.8rem; color:var(--text-muted); border:1px solid var(--border);">${etiqueta}</span>
            </div>
        </div>
    `;

    // --- CARA TRASERA ---
    let acepcionesHTML = defs.map((d, i) => `<div style="margin-bottom:8px;"><strong>${i+1}.</strong> ${limpiar(d)}</div>`).join('');
    
    // Bloque Sinónimos
    let sinosHTML = "";
    const sinos = data.synonyms || data.sinonimos;
    if (sinos) {
        sinosHTML = `
            <div style="background:#1a1a24; border:1px solid #b366ff; padding:12px; border-radius:10px; margin-bottom:12px;">
                <div style="font-size:0.65rem; color:#b366ff; text-transform:uppercase; margin-bottom:5px; font-weight:bold;">🔄 Sinónimos</div>
                <div style="font-size:0.9rem; color:#e6ccff;">${limpiar(sinos)}</div>
            </div>`;
    }

    // Bloque Memorizar
    let tipHTML = "";
    const truco = data.tip || data.etymology || data.pista;
    if (truco) {
        tipHTML = `
            <div style="background:#1a1a24; border:1px solid var(--gold); padding:12px; border-radius:10px; margin-bottom:15px;">
                <div style="font-size:0.65rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:5px; font-weight:bold;">💡 Para memorizar</div>
                <div style="font-size:0.9rem; color:var(--gold); line-height:1.4;">${limpiar(truco)}</div>
            </div>`;
    }

    // ARREGLO BOTÓN RAE: event.stopPropagation() impide que la carta se gire al pulsar el enlace
    const urlRAE = `https://dle.rae.es/${encodeURIComponent(palabra)}`;
    
    document.getElementById('back-content').innerHTML = `
        <div style="display:flex; flex-direction:column; height:100%;">
            <p style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:5px; font-weight:bold; letter-spacing:1px;">Respuesta</p>
            <h2 style="font-family:'Syne', sans-serif; color:var(--gold); font-size:2.2rem; margin-bottom:15px; text-transform:capitalize; line-height:1.1;">${palabra}</h2>
            <div style="font-size:0.95rem; line-height:1.4; color:#f0f0f5; margin-bottom:15px;">${acepcionesHTML}</div>
            ${sinosHTML}
            ${tipHTML}
            <div style="margin-top:auto; padding-top:10px;">
                <a href="${urlRAE}" target="_blank" onclick="event.stopPropagation();" style="display:block; background:#005bb5; color:white; text-align:center; padding:14px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:0.95rem;">📖 Ver en la RAE</a>
            </div>
        </div>
    `;

    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1}/20`;
    document.getElementById('progress-fill').style.width = `${((window.__vocabIndex + 1)/20)*100}%`;
}

window.calificar = function(puntos) {
    const data = window.__vocabSession[window.__vocabIndex];
    const palabraText = data.word || data.palabra;
    
    let dias = puntos === 1 ? 2 : (puntos === 3 ? 7 : 30);
    const v = new Date(); 
    v.setDate(v.getDate() + dias);
    
    if(palabraText) {
        localStorage.setItem(`repaso_${palabraText}`, v.getTime());
    }

    window.__vocabIndex++;
    if(window.__vocabIndex < window.__vocabSession.length) {
        mostrarTarjeta();
    } else { 
        alert("¡Tanda completada! 🚀"); 
        goTo('home'); 
    }
};