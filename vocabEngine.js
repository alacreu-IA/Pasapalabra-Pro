window.iniciarMazo = async function(nombre) {
    window.__vocabSession = [];
    window.__vocabIndex = 0;
    goTo('game');

    const front = document.getElementById('front-content');
    const back = document.getElementById('back-content');
    
    // Pantalla de carga animada
    if(front) front.innerHTML = "<div style='display:flex; flex-direction:column; height:100%; justify-content:center; align-items:center; color:var(--gold); font-size:1.2rem; font-weight:bold; text-align:center;'>⏳<br><br>Barajando tarjetas...<br><span style='font-size:0.8rem; color:var(--text-muted); margin-top:10px;'>Preparando tu sesión</span></div>";
    if(back) back.innerHTML = "";
    
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    fc.style.pointerEvents = 'none'; // Bloqueamos la carta para que no gire por accidente

    document.getElementById('btn-bad').style.display = 'none';
    document.getElementById('btn-mid').style.display = 'none';
    document.getElementById('btn-good').style.display = 'none';

    let count = 0;
    let intentos = 0; 
    let backupWords = []; // Reservorio por si ya jugó todas hoy

    while(count < 20 && intentos < 300) {
        intentos++;
        if (!window.getRandomWord) break;
        
        try {
            const wordData = await window.getRandomWord();
            if(!wordData) continue;
            
            const palabraText = wordData.word || wordData.palabra || wordData.lema || "";
            if (!palabraText) continue;

            // Evitamos que salga repetida en los 20 huecos
            const yaEsta = window.__vocabSession.some(w => (w.word || w.palabra || w.lema) === palabraText);
            if (yaEsta) continue;

            const key = `repaso_${palabraText}`;
            const lock = localStorage.getItem(key);
            
            // Si le toca repaso (o es nueva), la metemos
            if(!lock || new Date().getTime() > parseInt(lock)) {
                window.__vocabSession.push(wordData);
                count++;
            } else {
                // Si la jugó hace poco, la guardamos en la reserva
                if (backupWords.length < 20 && !backupWords.some(w => (w.word || w.palabra || w.lema) === palabraText)) {
                    backupWords.push(wordData);
                }
            }
        } catch(e) { console.error("Error al buscar palabra", e); }
    }
    
    // SISTEMA INFINITO: Si no logramos 20 palabras nuevas, rellenamos con las de reserva
    if (window.__vocabSession.length < 20) {
        for (let w of backupWords) {
            if (window.__vocabSession.length >= 20) break;
            window.__vocabSession.push(w);
        }
    }

    // Seguro por si el archivo fallase
    if (window.__vocabSession.length === 0) {
        alert("⚠️ No se han podido cargar palabras. Revisa el archivo de texto.");
        goTo('home');
        fc.style.pointerEvents = 'auto';
        return;
    }

    fc.style.pointerEvents = 'auto';
    mostrarTarjeta();
};

window.voltearTarjeta = function() {
    const fc = document.getElementById('flashcard');
    if (!fc.classList.contains('flipped') && window.__vocabSession && window.__vocabSession.length > 0) {
        fc.classList.add('flipped');
        document.getElementById('btn-bad').style.display = 'block';
        document.getElementById('btn-mid').style.display = 'block';
        document.getElementById('btn-good').style.display = 'block';
    }
};

function limpiar(t) {
    if(!t) return "";
    return t.toString().replace(/^[:\s,\-]+/, '').replace(/\[\[Archivo:.*?\]\]/g, '').replace(/\|/g, ' ').trim();
}

function mostrarTarjeta() {
    const data = window.__vocabSession[window.__vocabIndex];
    if(!data) return;

    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    
    document.getElementById('btn-bad').style.display = 'none';
    document.getElementById('btn-mid').style.display = 'none';
    document.getElementById('btn-good').style.display = 'none';
    
    const palabra = data.word || data.palabra || data.lema || "???";
    
    // CAZADOR DE DEFINICIONES EXTREMO (Por si la palabra viene rara del Excel)
    let defRaw = data.definition || data.definicion || data.def || data.significado || "";
    if (!defRaw) {
        for(let key in data) {
            if (key !== 'id' && key !== 'word' && key !== 'initial' && key !== 'pos' && typeof data[key] === 'string' && data[key].length > 15) {
                defRaw = data[key];
                break;
            }
        }
    }

    const defs = Array.isArray(defRaw) ? defRaw : [defRaw];
    const defPrincipal = limpiar(defs[0]) || "Pulsa la tarjeta para ver la palabra.";
    const etiqueta = data.pos || data.category || "término";

    // PINTAR FRONTAL
    document.getElementById('front-content').innerHTML = `
        <div style="display:flex; flex-direction:column; height:100%;">
            <p style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:15px; font-weight:bold; letter-spacing:1px; flex-shrink:0;">Definición — ¿Qué palabra es?</p>
            <p style="font-size:1.2rem; line-height:1.5; color:#fff; overflow-y:auto; padding-right:5px;">${defPrincipal}</p>
            <div style="margin-top:auto; padding-top:15px; display:flex; justify-content:space-between; align-items:flex-end; flex-shrink:0;">
                <span style="background:rgba(255,255,255,0.06); padding:5px 14px; border-radius:12px; font-size:0.8rem; color:var(--text-muted); border:1px solid var(--border);">${etiqueta}</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">Toca para girar ↺</span>
            </div>
        </div>
    `;

    // PINTAR TRASERA
    let acepcionesHTML = defs.map((d, i) => `<div style="margin-bottom:8px;"><strong>${i+1}.</strong> ${limpiar(d)}</div>`).join('');
    
    let sinosHTML = "";
    const sinos = data.synonyms || data.sinonimos;
    if (sinos) {
        sinosHTML = `
            <div style="background:#1a1a24; border:1px solid #b366ff; padding:12px; border-radius:10px; margin-bottom:12px;">
                <div style="font-size:0.65rem; color:#b366ff; text-transform:uppercase; margin-bottom:5px; font-weight:bold;">🔄 Sinónimos</div>
                <div style="font-size:0.9rem; color:#e6ccff;">${limpiar(sinos)}</div>
            </div>`;
    }

    let tipHTML = "";
    const truco = data.tip || data.etymology || data.pista;
    if (truco) {
        tipHTML = `
            <div style="background:#1a1a24; border:1px solid var(--gold); padding:12px; border-radius:10px; margin-bottom:15px;">
                <div style="font-size:0.65rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:5px; font-weight:bold;">💡 Para memorizar</div>
                <div style="font-size:0.9rem; color:var(--gold); line-height:1.4;">${limpiar(truco)}</div>
            </div>`;
    }

    const urlRAE = `https://dle.rae.es/${encodeURIComponent(palabra)}`;
    
    document.getElementById('back-content').innerHTML = `
        <div style="display:flex; flex-direction:column; height:100%;">
            <p style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:5px; font-weight:bold; letter-spacing:1px; flex-shrink:0;">Respuesta</p>
            <h2 style="font-family:'Syne', sans-serif; color:var(--gold); font-size:2.2rem; margin-bottom:15px; text-transform:capitalize; line-height:1.1; flex-shrink:0;">${palabra}</h2>
            <div style="font-size:0.95rem; line-height:1.4; color:#f0f0f5; margin-bottom:15px;">${acepcionesHTML}</div>
            ${sinosHTML}
            ${tipHTML}
            <div style="margin-top:auto; padding-top:10px; flex-shrink:0;">
                <a href="${urlRAE}" target="_blank" onclick="event.stopPropagation();" style="display:block; background:#005bb5; color:white; text-align:center; padding:14px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:0.95rem;">📖 Ver en la RAE</a>
            </div>
        </div>
    `;

    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1}/20`;
    document.getElementById('progress-fill').style.width = `${((window.__vocabIndex + 1)/20)*100}%`;
}

window.calificar = function(puntos) {
    const data = window.__vocabSession[window.__vocabIndex];
    const palabraText = data.word || data.palabra || data.lema;
    
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
        alert("¡Tanda completada! 🚀 Puedes hacer clic en cualquier mazo para jugar 20 más."); 
        goTo('home'); 
    }
};