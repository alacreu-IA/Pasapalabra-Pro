// srsEngine.js
// Implementación SM-2 (estilo Anki) para programar repasos.
// Guarda progreso en el objectStore "progress" de IndexedDB (ya creado en db.js).

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Mapeo de botones -> calidad SM-2 (0..5)
// - No la sé: 1 (fallo)
// - Repasar: 3 (regular / dudosa)
// - La sé: 5 (perfecta)
const QUALITY = {
  bad: 1,
  review: 3,
  easy: 5
};

// Devuelve el estado SRS por defecto para una palabra nueva
function defaultSRSState(id) {
  return {
    id,
    // SM-2:
    ef: 2.5,          // ease factor inicial (Anki-like)
    reps: 0,          // repeticiones correctas acumuladas
    interval: 0,      // días
    due: Date.now(),  // timestamp
    lapses: 0,        // fallos
    lastQuality: null,
    updatedAt: Date.now()
  };
}

// --- IndexedDB helpers (store "progress") ---
function getProgress(id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("progress", "readonly");
    const req = tx.objectStore("progress").get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

function putProgress(state) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("progress", "readwrite");
    tx.objectStore("progress").put(state);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Devuelve true si está “para hoy” (due <= ahora)
async function isDue(id) {
  const st = await getOrCreateProgress(id);
  return st.due <= Date.now();
}

// Obtiene progreso; si no existe, lo crea
async function getOrCreateProgress(id) {
  let st = await getProgress(id);
  if (!st) {
    st = defaultSRSState(id);
    await putProgress(st);
  }
  return st;
}

// Fórmula SM-2 para actualizar EF
function updateEaseFactor(ef, quality) {
  // EF' = EF + (0.1 - (5-q)*(0.08 + (5-q)*0.02))
  const q = quality;
  const delta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02);
  let next = ef + delta;

  // SM-2 recomienda EF mínimo 1.3
  if (next < 1.3) next = 1.3;
  if (next > 2.8) next = 2.8;

  return next;
}

// Calcula nuevo intervalo (días) según SM-2
function nextIntervalDays(prevInterval, reps, ef, quality) {
  // Si calidad < 3, se considera fallo: reps a 0, intervalo corto.
  if (quality < 3) return 1;

  // Si pasa, SM-2 clásico:
  // reps=1 => 1 día
  // reps=2 => 6 días
  // reps>=3 => interval * EF
  if (reps === 1) return 1;
  if (reps === 2) return 6;

  // reps >= 3
  const next = Math.round(prevInterval * ef);
  return Math.max(next, 7); // mínimo 7 días a partir de aquí para que haya “espaciado real”
}

// Aplica una calificación (bad/review/easy) y programa próxima revisión
async function gradeWord(id, gradeKey) {
  const quality = QUALITY[gradeKey];
  if (quality == null) throw new Error("gradeKey inválido");

  const now = Date.now();
  const st = await getOrCreateProgress(id);

  // Actualizar EF siempre (SM-2)
  const nextEf = updateEaseFactor(st.ef, quality);

  let nextReps = st.reps;
  let nextInterval = st.interval;
  let nextLapses = st.lapses;

  if (quality < 3) {
    // fallo
    nextReps = 0;
    nextInterval = 1;
    nextLapses += 1;
  } else {
    // acierto
    nextReps = st.reps + 1;
    nextInterval = nextIntervalDays(st.interval || 1, nextReps, nextEf, quality);
  }

  const due = now + nextInterval * MS_PER_DAY;

  const updated = {
    ...st,
    ef: nextEf,
    reps: nextReps,
    interval: nextInterval,
    due,
    lapses: nextLapses,
    lastQuality: quality,
    updatedAt: now
  };

  await putProgress(updated);
  return updated;
}

// Exponer a window para que index.html lo use
window.SRS = {
  getOrCreateProgress,
  gradeWord,
  isDue
};