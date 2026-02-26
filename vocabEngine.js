window.iniciarMazo = async function(nombreMazo) {
    try {
        goTo('game');
        
        window.__vocabSession = [];
        const frontContent = document.getElementById('front-content');
        if (frontContent) {
            frontContent.innerHTML = "<div style='color:var(--gold); display:flex; justify-content:center; align-items:center; height:100%; font-size: 1.2rem; font-weight: bold;'>Barajando tarjetas...</div>";
        }
        
        // Bucle inteligente: busca hasta 20 palabras que NO estén bloqueadas por fecha
        let palabrasEncontradas = 0;
        let intentos = 0; 
        
        while (palabrasEncontradas < 20 && intentos < 200) {
            intentos++;
            if (window.getRandomWord) {
                const word = await window.getRandomWord();
                if (word) {
                    // Miramos en la memoria del móvil si esta palabra tiene fecha de repaso
                    const fechaBloqueo = localStorage.getItem(`repaso_${word.word || word.palabra}`);
                    const ahora = new Date().getTime();
                    
                    if (!fechaBloqueo || ahora >= parseInt(fechaBloqueo)) {
                        const yaEsta = window.__vocabSession.some(w => (w.word || w.palabra) === (word.word || word.palabra));
                        if (!yaEsta) {
                            window.__vocabSession.push(word);
                            palabrasEncontradas++;
                        }
                    }
                }
            } else {
                window.__vocabSession.push({ 
                    word: "Error", 
                    definition: "Base de datos no conectada. Revisa db.js" 
                });
                break;
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

    // LA RED BILINGÜE: Buscamos la información sea cual sea su nombre
    const palabra = wordData.word || wordData.palabra || 'Indefinida';
    const etiqueta = wordData.pos || wordData.category || wordData.categoria || 'término';
    
    // Extracción a prueba de bombas de la definición
    let defRaw = wordData.definition || wordData.definicion || wordData.def || wordData.acepciones || wordData.significado || 'Definición no disponible en este momento.';
    
    let definicionFrontal = "";
    let todasLasAcepciones = "";
    
    // Si la definición viene como una lista [1. m. Cosa, 2. f. Otra cosa]
    if (Array.isArray(defRaw)) {
        definicionFrontal = defRaw[0];
        todasLasAcepciones = defRaw.map((def, idx) => `<div style="margin-bottom: 8px;"><strong>${idx+1}.</strong> ${def}</div>`).join('');
    } else {
        // Si viene como texto normal
        definicionFrontal = defRaw;
        todasLasAcepciones = `<div style="margin-bottom: 8px;">${defRaw}</div>`;
    }

    // --- CARA FRONTAL ---
    document.getElementById('front-content').innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%; width: 100%;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; flex-shrink: 0;">
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
            <div style="margin-top: auto; text-align: right; font-size: 0.8rem; color: #555568; flex-shrink: 0;">
                Toca para ver respuesta
            </div>
        </div>
    `;

    // --- CARA TRASERA ---
    let contenidoTrasero = `
        <div style="width: 100%; display: flex; flex-direction: column;">
            <div style="font-size: 0.75rem; color: #8888a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                RESPUESTA
            </div>
            <div style="font-size: 2.5rem; color: #f5c842; font-family: 'Syne', sans-serif; font-weight: 800; margin-bottom: 15px; line-height: 1.1; text-transform: capitalize; letter-spacing: -1px;">
                ${palabra}
            </div>
            <div style="font-size: 0.95rem; color: #f0f0f5; line-height: 1.4; margin-bottom: 20px;">
                ${todasLasAcepciones}
            </div>
    `;

    // Casilla de Sinónimos (Inglés o Español)
    const sinonimos = wordData.synonyms || wordData.sinonimos;
    if (sinonimos) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #b366ff; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #b366ff; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; font-weight: bold;">🔄 SINÓNIMOS</div>
                <div style="font-size: 0.95rem; color: #e6ccff;">${sinonimos}</div>
            </div>
        `;
    }

    // Casilla Ejemplo (Inglés o Español)
    const ejemplo = wordData.example || wordData.ejemplo;
    if (ejemplo) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #2a2a38; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">EJEMPLO</div>
                <div style="font-size: 0.95rem; color: #d0d0d8; font-style: italic;">"${ejemplo}"</div>
            </div>
        `;
    }

    // Casilla Tip y Etimología unificadas en "PARA MEMORIZAR"
    const origen = wordData.etymology || wordData.etimologia || wordData.origen;
    const truco = wordData.tip || wordData.truco || wordData.pista;
    
    let infoMemoria = "";
    if (origen) infoMemoria += `<div style="margin-bottom: 8px;"><strong>🌍 Origen:</strong> ${origen}</div>`;
    if (truco) infoMemoria += `<div><strong>🧠 Tip:</strong> ${truco}</div>`;

    if (infoMemoria !== "") {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #f5c842; border-radius: 10px; padding: 14px; margin-bottom: 25px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">💡 PARA MEMORIZAR</div>
                <div style="font-size: 0.95rem; color: #f5c842; line-height: 1.4;">${infoMemoria}</div>
            </div>
        `;
    }

    // Enlace RAE
    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(palabra)}`;
    contenidoTrasero += `
            <a href="${enlaceRAE}" target="_blank" style="display: flex; justify-content: center; align-items: center; gap: 8px; width: 100%; background: #005bb5; color: white; padding: 15px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.95rem; margin-top: auto; flex-shrink: 0;">
                📖 Ver definición completa en la RAE
            </a>
        </div>
    `;

    document.getElementById('back-extra').innerHTML = contenidoTrasero;

    // Progreso superior
    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1}/20`;
    const porcentaje = ((window.__vocabIndex + 1) / 20) * 100;
    document.getElementById('progress-bar-fill').style.width = `${porcentaje}%`;
}

function conectarBotones() {
    const btnBad = document.getElementById('btn-bad');
    const btnMid = document.getElementById('btn-mid');
    const btnGood = document.getElementById('btn-good');

    btnBad.onclick = () => calificarPalabra(1); 
    btnMid.onclick = () => calificarPalabra(3); 
    btnGood.onclick = () => calificarPalabra(5); 
}

async function calificarPalabra(puntuacion) {
    const wordData = window.__vocabSession[window.__vocabIndex];
    const palabra = wordData.word || wordData.palabra;

    // 1. Calculamos días
    let diasParaRepaso = 0;
    if (puntuacion === 1) diasParaRepaso = 2;  
    if (puntuacion === 3) diasParaRepaso = 7;  
    if (puntuacion === 5) diasParaRepaso = 30; 

    // 2. Guardamos bloqueo en memoria
    if (palabra) {
        const fechaProximoRepaso = new Date();
        fechaProximoRepaso.setDate(fechaProximoRepaso.getDate() + diasParaRepaso);
        localStorage.setItem(`repaso_${palabra}`, fechaProximoRepaso.getTime());
    }

    // 3. Siguiente tarjeta
    window.__vocabIndex++;
    if (window.__vocabIndex < window.__vocabSession.length) {
        mostrarTarjetaActual();
    } else {
        alert("¡Tanda de 20 completada, Noemi! 🚀");
        goTo('home'); 
    }
}