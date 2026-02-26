// vocabEngine.js

window.iniciarMazo = async function(nombreMazo) {
    if (nombreMazo !== 'Modo Hardcore RAE') {
        alert(`¡Paciencia! El mazo "${nombreMazo}" estará disponible cuando carguemos los datos VIP con sus tips y etimologías.`);
        return;
    }

    document.getElementById('game-title').textContent = nombreMazo;
    goTo('game');
    
    window.__vocabSession = [];
    document.getElementById('front-content').innerHTML = "<div style='color:var(--gold);'>Generando sesión de 20 palabras...</div>";
    
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

    // Reset de la tarjeta
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('btn-bad').style.display = 'none';
    document.getElementById('btn-mid').style.display = 'none';
    document.getElementById('btn-good').style.display = 'none';

    const nombreMazo = document.getElementById('game-title').textContent;

    // CARA FRONTAL
    document.getElementById('front-content').innerHTML = `
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">
            ${nombreMazo} | ${wordData.pos || 'Término'}
        </div>
        <div style="font-size: 1.5rem; color: var(--gold); margin-bottom: 15px;">
            Empieza por la <strong>${wordData.initial}</strong>
        </div>
        <div style="font-size: 1.1rem; color: var(--text-main); font-weight: normal; line-height: 1.5; text-align: left;">
            ${wordData.definition}
        </div>
    `;

    // CARA TRASERA
    document.getElementById('back-word').textContent = wordData.word;
    
    let contenidoExtra = '';
    if (wordData.etymology) contenidoExtra += `<div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);">🏛️ <strong>Origen:</strong> ${wordData.etymology}</div>`;
    if (wordData.example) contenidoExtra += `<div style="margin-top: 10px; font-size: 1rem; color: #fff; font-style: italic;">" ${wordData.example} "</div>`;
    if (wordData.tip) contenidoExtra += `<div style="margin-top: 15px; font-size: 0.95rem; color: var(--btn-blue); background: rgba(74, 158, 255, 0.1); padding: 10px; border-radius: 8px;">🧠 <strong>Tip:</strong> ${wordData.tip}</div>`;

    const enlaceRAE = `https://dle.rae.es/${encodeURIComponent(wordData.word)}`;
    contenidoExtra += `
        <a href="${enlaceRAE}" target="_blank" style="color: var(--gold); text-decoration: none; font-weight: bold; display: block; text-align: center; font-size: 1.1rem; margin-top: 25px;">
        📖 Comprobar en la RAE ↗</a>
    `;

    document.getElementById('back-extra').innerHTML = contenidoExtra;
    document.getElementById('status-bar').textContent = `${window.__vocabIndex + 1} / 20`;
}

function conectarBotones() {
    document.getElementById('btn-bad').onclick = () => calificarPalabra(1); 
    document.getElementById('btn-mid').onclick = () => calificarPalabra(3); 
    document.getElementById('btn-good').onclick = () => calificarPalabra(5); 
}

async function calificarPalabra(puntuacion) {
    const wordActual = window.__vocabSession[window.__vocabIndex];
    if(!wordActual) return;
    
    const tx = db.transaction("progress", "readwrite");
    const store = tx.objectStore("progress");
    
    let diasRepaso = puntuacion === 5 ? 7 : (puntuacion === 3 ? 3 : 1);
    store.put({
        id: wordActual.id,
        ultimaPuntuacion: puntuacion,
        proximoRepaso: Date.now() + (diasRepaso * 24 * 60 * 60 * 1000)
    });
    
    window.__vocabIndex++;
    
    if (window.__vocabIndex < window.__vocabSession.length) {
        mostrarTarjetaActual();
    } else {
        const mensajesNoemi = [
            "¡Tanda terminada, Noe! Has superado esto con la paciencia de una guardia en la UCI. 🏥💪",
            "¡20 palabras al bote! Como filóloga sabes que las palabras tienen poder, pero como madre sabes que el verdadero poder es dormir 8 horas. 😴📚",
            "¡Nivel superado! Recuerda que Andrea (la superprogramadora que te ha montado esto) se lleva el 5% del bote y una cena de lujo. ¡Está en el contrato! 👩‍💻🥂",
            "Sobrevivir a la UCI, criar a los peques y encima clavarlas todas... Eres de otro planeta, Noe. 🚀"
        ];
        alert(mensajesNoemi[Math.floor(Math.random() * mensajesNoemi.length)]);
        goTo('home'); 
    }
}