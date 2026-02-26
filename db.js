// db.js - Lector optimizado para archivos .json

window.__allWords = [];

window.initDB = async function() {
    try {
        // Apuntamos al nuevo archivo que está en la carpeta data
        // Si lo pones en la carpeta principal junto al index, quita "data/"
        const response = await fetch('data/clean_vocab.json'); 
        
        if (!response.ok) {
            throw new Error("No se encuentra el archivo clean_vocab.json");
        }
        
        // Como ahora es un JSON real, lo transformamos directamente
        window.__allWords = await response.json();
        console.log("✅ Base de datos cargada: " + window.__allWords.length + " palabras listas.");
        
    } catch (error) {
        console.error("Error cargando la base de datos:", error);
        alert("¡Aviso! No se ha podido cargar el archivo de palabras. Comprueba que está subido a GitHub en la ruta correcta.");
    }
};

window.getRandomWord = async function() {
    // Si no ha cargado, devolvemos null
    if (!window.__allWords || window.__allWords.length === 0) {
        return null;
    }
    // Sacamos una palabra aleatoria de la lista gigante
    const randomIndex = Math.floor(Math.random() * window.__allWords.length);
    return window.__allWords[randomIndex];
};