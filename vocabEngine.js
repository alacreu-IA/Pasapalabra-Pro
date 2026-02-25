// vocabEngine.js
// Motor mínimo de flashcards + seed de prueba con estructura definitiva.

const VOCAB_SESSION_SIZE = 20;

let currentCard = null;
let isFlipped = false;

// ---- ESTRUCTURA DEFINITIVA DE PALABRA ----
// {
//   id: "es_laconico",
//   word: "lacónico",
//   pos: "adj.",
//   senses: ["1. ...", "2. ..."],          // cada acepción en una fila
//   synonyms: ["conciso", "escueto"],      // opcional
//   examples: ["Ejemplo 1", "Ejemplo 2"],  // opcional
//   etym: "Del ...",                       // opcional
//   tip: "Truco..."                        // opcional
// }

async function seedTestWordsIfEmpty() {
  const count = await countWords();
  if (count > 0) return;

  const words = [
    {
      id: "es_laconico",
      word: "lacónico",
      pos: "adj.",
      senses: [
        "1. Que se expresa con pocas palabras; conciso."
      ],
      synonyms: ["conciso", "escueto", "parco"],
      examples: ["Su respuesta fue lacónica y no admitió réplica."],
      etym: "De Laconia (región griega), por la fama de sobriedad verbal atribuida a los espartanos.",
      tip: "Esparta: pocas palabras, mucha intención."
    },
    {
      id: "es_protervo",
      word: "protervo",
      pos: "adj.",
      senses: [
        "1. Perverso; obstinado en obrar mal."
      ],
      synonyms: ["perverso", "malvado", "inicuo"],
      examples: ["Atribuyeron a su conducta un propósito protervo."],
      etym: "Del latín protervus.",
      tip: "Pro-TERVO suena a ‘perverso’: misma vibra."
    },
    {
      id: "es_bucolico",
      word: "bucólico",
      pos: "adj.",
      senses: [
        "1. Relativo a la vida del campo o que la idealiza; campestre."
      ],
      synonyms: ["campestre", "pastoril", "rústico"],
      examples: ["Un paisaje bucólico con prados y ganado."],
      etym: "Del griego boukolikós, de boukólos (‘pastor de bueyes’).",
      tip: "Bueyes + campo = bucólico."
    },
    {
      id: "es_escatologico",
      word: "escatológico",
      pos: "adj.",
      senses: [
        "1. Relativo a excrementos o a lo obsceno de ese ámbito.",
        "2. Relativo al fin último del ser humano o del mundo (teología)."
      ],
      synonyms: ["(1) soez", "(2) apocalíptico"],
      examples: ["Un humor escatológico.", "Doctrinas escatológicas en teología."],
      etym: "Dos etimologías: (1) del griego skōr/skatos (‘excremento’); (2) del griego éskhatos (‘último’).",
      tip: "Trampa típica: dos significados totalmente distintos."
    },
    {
      id: "es_aberracion",
      word: "aberración",
      pos: "f.",
      senses: [
        "1. Desviación de lo considerado normal o correcto.",
        "2. Error grave del entendimiento o del juicio."
      ],
      synonyms: ["desviación", "disparate", "despropósito"],
      examples: ["Consideraron aquella medida una aberración."],
      etym: "Del latín aberratio (‘desvío’, ‘error’).",
      tip: "AB- (separarse) + errar = desviarse / equivocarse."
    }
  ];

  for (const w of words) await saveWord(w);
}

async function countWords() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("words", "readonly");
    const store = tx.objectStore("words");
    const req = store.count();
    req.onsuccess = () => resolve(req.result || 0);
    req.onerror = () => reject(req.error);
  });
}

async function getAllWordIds() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("words", "readonly");
    const store = tx.objectStore("words");
    const req = store.getAllKeys();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

async function startVocabSession() {
  await seedTestWordsIfEmpty();

  const ids = await getAllWordIds();
  if (!ids.length) {
    setStatus("No hay palabras en la base.");
    return;
  }

  shuffleInPlace(ids);
  const pick = ids.slice(0, Math.min(VOCAB_SESSION_SIZE, ids.length));

  // Guardamos la sesión en memoria (simple, luego lo haremos con SRS real)
  window.__vocabSession = pick;
  window.__vocabIndex = 0;

  await showCurrentCard();
  setStatus(`Sesión lista: ${pick.length} tarjetas`);
}

async function showCurrentCard() {
  const session = window.__vocabSession || [];
  const idx = window.__vocabIndex || 0;

  if (!session.length) {
    setStatus("Inicia sesión de vocabulario.");
    return;
  }
  if (idx >= session.length) {
    setStatus("Sesión terminada ✅");
    currentCard = null;
    renderCardFront({ senses: ["Sesión terminada. Pulsa “Iniciar vocabulario” para otra tanda."] });
    return;
  }

  const id = session[idx];
  const w = await getWord(id);
  currentCard = w;
  isFlipped = false;
  renderCardFront(w);
}

function renderCardFront(w) {
  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");
  if (!front || !back) return;

  front.style.display = "block";
  back.style.display = "none";

  const firstSense = (w?.senses?.[0]) ? w.senses[0] : "Sin definición.";
  front.innerHTML = `
    <div style="font-size:14px; opacity:.75; margin-bottom:10px;">Definición (1ª acepción)</div>
    <div style="font-size:18px; line-height:1.4;">${escapeHtml(firstSense)}</div>
    <div style="margin-top:14px; font-size:12px; opacity:.7;">Pulsa “Girar” para ver palabra y detalles</div>
  `;
}

function renderCardBack(w) {
  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");
  if (!front || !back) return;

  front.style.display = "none";
  back.style.display = "block";

  const senses = (w?.senses || []).map(s => `<li>${escapeHtml(s)}</li>`).join("");
  const syn = (w?.synonyms || []).length ? (w.synonyms.map(x => escapeHtml(x)).join(", ")) : "—";
  const ex = (w?.examples || []).length ? (w.examples.map(x => `<li>${escapeHtml(x)}</li>`).join("")) : "<li>—</li>";
  const et = w?.etym ? escapeHtml(w.etym) : "—";
  const tip = w?.tip ? escapeHtml(w.tip) : "—";
  const pos = w?.pos ? escapeHtml(w.pos) : "—";

  back.innerHTML = `
    <div style="font-size:22px; font-weight:800; margin-bottom:4px;">${escapeHtml(w.word || "—")}</div>
    <div style="font-size:13px; opacity:.75; margin-bottom:12px;">Categoría: ${pos}</div>

    <div style="font-weight:700; margin:10px 0 6px;">Acepciones</div>
    <ol style="margin:0 0 10px 18px; padding:0;">${senses || "<li>—</li>"}</ol>

    <div style="font-weight:700; margin:10px 0 6px;">Sinónimos</div>
    <div style="opacity:.9;">${syn}</div>

    <div style="font-weight:700; margin:10px 0 6px;">Ejemplo(s)</div>
    <ul style="margin:0 0 10px 18px; padding:0;">${ex}</ul>

    <div style="font-weight:700; margin:10px 0 6px;">Etimología</div>
    <div style="opacity:.9; line-height:1.35;">${et}</div>

    <div style="font-weight:700; margin:10px 0 6px;">Tip</div>
    <div style="opacity:.9; line-height:1.35;">${tip}</div>
  `;
}

function flipCard() {
  if (!currentCard) return;
  isFlipped = !isFlipped;
  if (isFlipped) renderCardBack(currentCard);
  else renderCardFront(currentCard);
}

function nextCard() {
  if (!window.__vocabSession) return;
  window.__vocabIndex = (window.__vocabIndex || 0) + 1;
  showCurrentCard();
}

function setStatus(msg) {
  const el = document.getElementById("status");
  if (el) el.innerText = msg;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Exponemos funciones para botones
window.startVocabSession = startVocabSession;
window.flipCard = flipCard;
window.nextCard = nextCard;