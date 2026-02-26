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
        let intentos = 0; // Límite de seguridad por si no quedan palabras nuevas
        
        while (palabrasEncontradas < 20 && intentos < 200) {
            intentos++;
            if (window.getRandomWord) {
                const word = await window.getRandomWord();
                if (word) {
                    // Miramos en la memoria del móvil si esta palabra tiene fecha de repaso
                    const fechaBloqueo = localStorage.getItem(`repaso_${word.word}`);
                    const ahora = new Date().getTime();
                    
                    // Si NO tiene fecha de bloqueo, o la fecha de bloqueo YA HA PASADO, la metemos en la sesión
                    if (!fechaBloqueo || ahora >= parseInt(fechaBloqueo)) {
                        // Evitar duplicados en la misma tanda de 20
                        const yaEsta = window.__vocabSession.some(w => w.word === word.word);
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

    // Extracción segura de la definición
    let defRaw = wordData.definition || wordData.def || 'Definición no disponible en este momento.';
    let definicionFrontal = "";
    let todasLasAcepciones = "";
    
    // Construimos la lista de acepciones
    if (Array.isArray(defRaw)) {
        definicionFrontal = defRaw[0];
        todasLasAcepciones = defRaw.map((def, idx) => `<div style="margin-bottom: 8px;"><strong>${idx+1}.</strong> ${def}</div>`).join('');
    } else {
        definicionFrontal = defRaw;
        todasLasAcepciones = `<div style="margin-bottom: 8px;">${defRaw}</div>`;
    }

    const etiqueta = wordData.pos || wordData.category || 'término';

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
                ${wordData.word || 'Indefinida'}
            </div>
            <div style="font-size: 0.95rem; color: #f0f0f5; line-height: 1.4; margin-bottom: 20px;">
                ${todasLasAcepciones}
            </div>
    `;

    // Casilla de Sinónimos
    const sinonimos = wordData.synonyms || wordData.sinonimos;
    if (sinonimos) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #b366ff; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #b366ff; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; font-weight: bold;">🔄 SINÓNIMOS</div>
                <div style="font-size: 0.95rem; color: #e6ccff;">${sinonimos}</div>
            </div>
        `;
    }

    // Casilla Ejemplo
    if (wordData.example) {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #2a2a38; border-radius: 10px; padding: 14px; margin-bottom: 12px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">EJEMPLO</div>
                <div style="font-size: 0.95rem; color: #d0d0d8; font-style: italic;">"${wordData.example}"</div>
            </div>
        `;
    }

    // Casilla Tip y Etimología unificadas en "PARA MEMORIZAR"
    let infoMemoria = "";
    if (wordData.etymology) infoMemoria += `<div style="margin-bottom: 8px;"><strong>🌍 Origen:</strong> ${wordData.etymology}</div>`;
    if (wordData.tip) infoMemoria += `<div><strong>🧠 Tip:</strong> ${wordData.tip}</div>`;

    if (infoMemoria !== "") {
        contenidoTrasero += `
            <div style="width: 100%; background: #1a1a24; border: 1px solid #f5c842; border-radius: 10px; padding: 14px; margin-bottom: 25px;">
                <div style="font-size: 0.65rem; color: #8888a8; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">💡 PARA MEMORIZAR</div>
                <div style="font-size: 0.95rem; color: #f5c842; line-height: 1.4;">${infoMemoria}</div>
            </div>
        `;
    }

    // Enlace RAE
    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(wordData.word || '')}`;
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
    // Nos aseguramos de limpiar eventos previos para que no haya doble clic
    const btnBad = document.getElementById('btn-bad');
    const btnMid = document.getElementById('btn-mid');
    const btnGood = document.getElementById('btn-good');

    btnBad.onclick = () => calificarPalabra(1); 
    btnMid.onclick = () => calificarPalabra(3); 
    btnGood.onclick = () => calificarPalabra(5); 
}

async function calificarPalabra(puntuacion) {
    const wordData = window.__vocabSession[window.__vocabIndex];

    // 1. Calculamos los días de "castigo/premio" según el botón
    let diasParaRepaso = 0;
    if (puntuacion === 1) diasParaRepaso = 2;  // ❌ No la sé
    if (puntuacion === 3) diasParaRepaso = 7;  // 🔄 Repasar
    if (puntuacion === 5) diasParaRepaso = 30; // ✅ La sé

    // 2. Calculamos la fecha matemática exacta en milisegundos
    const fechaProximoRepaso = new Date();
    fechaProximoRepaso.setDate(fechaProximoRepaso.getDate() + diasParaRepaso);

    // 3. Guardamos la "etiqueta de bloqueo" en la memoria interna del móvil
    if (wordData && wordData.word) {
        localStorage.setItem(`repaso_${wordData.word}`, fechaProximoRepaso.getTime());
    }

    // 4. Pasamos a la siguiente tarjeta
    window.__vocabIndex++;
    if (window.__vocabIndex < window.__vocabSession.length) {
        mostrarTarjetaActual();
    } else {
        alert("¡Tanda de 20 completada, Noemi! 🚀 Las palabras que has acertado no volverán a salirte hasta que te toque repasarlas.");
        goTo('home'); 
    }
}