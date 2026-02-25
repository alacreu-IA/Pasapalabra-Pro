const DB_NAME = "ppro-db";
const DB_VERSION = 1;

let db;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      if (!db.objectStoreNames.contains("words")) {
        db.createObjectStore("words", { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains("progress")) {
        db.createObjectStore("progress", { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
  });
}

// Guardar palabra
function saveWord(word) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("words", "readwrite");
    tx.objectStore("words").put(word);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Obtener palabra
function getWord(id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("words", "readonly");
    const request = tx.objectStore("words").get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}