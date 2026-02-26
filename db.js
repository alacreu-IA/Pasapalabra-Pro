// db.js - Conexión con IndexedDB y Auto-Instalación del Diccionario

const DB_NAME = "ppro-db";
const DB_VERSION = 1;
let db;

window.initDB = function() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      
      // Tabla de palabras (el diccionario)
      if (!db.objectStoreNames.contains("words")) {
        const store = db.createObjectStore("words", { keyPath: "id" });
        store.createIndex("initial", "initial", { unique: false });
      }
      // Tabla de progreso (para el repaso espaciado)
      if (!db.objectStoreNames.contains("progress")) {
        db.createObjectStore("progress", { keyPath: "id" });
      }
    };

    request.onsuccess = async () => {
      db = request.result;
      
      // Comprobamos si la base de datos está vacía
      const count = await getWordCount();
      if (count === 0) {
        alert("Instalando Diccionario Offline (66.970 palabras). Esto solo pasará esta vez y puede tardar unos segundos. Dale a Aceptar.");
        await seedFromJSONL();
        alert("¡Diccionario instalado con éxito! Ya puedes jugar offline.");
      }
      resolve(db);
    };
  });
};

// Función para contar cuántas palabras tenemos
function getWordCount() {
  return new Promise((resolve) => {
    const tx = db.transaction("words", "readonly");
    const countReq = tx.objectStore("words").count();
    countReq.onsuccess = () => resolve(countReq.result);
  });
}

// Función que lee tu JSONL y lo mete en la base de datos
async function seedFromJSONL() {
  try {
    const res = await fetch('data/vocab_full.jsonl');
    const text = await res.text();
    const lines = text.trim().split('\n');

    return new Promise((resolve, reject) => {
      const tx = db.transaction("words", "readwrite");
      const store = tx.objectStore("words");

      for (const line of lines) {
        if (line) {
          const wordData = JSON.parse(line);
          store.put(wordData);
        }
      }

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.error("Error al cargar el diccionario:", e);
  }
}

// Función para obtener una palabra ALEATORIA para jugar
window.getRandomWord = function() {
  return new Promise((resolve) => {
    const tx = db.transaction("words", "readonly");
    const store = tx.objectStore("words");
    const request = store.getAllKeys();

    request.onsuccess = () => {
      const keys = request.result;
      if (keys.length === 0) return resolve(null);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      store.get(randomKey).onsuccess = (e) => resolve(e.target.result);
    };
  });
};