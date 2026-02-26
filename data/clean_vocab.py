import json
import re

INPUT_FILE = "vocab_full.jsonl"
OUTPUT_FILE = "clean_vocab.json"

def clean_definition(text):
    if not text:
        return ""
    
    # 1. Quitar basura de Wikipedia (imágenes, archivos)
    text = re.sub(r'\[\[Archivo:.*?\]\]', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\[\[File:.*?\]\]', '', text, flags=re.IGNORECASE)
    
    # 2. Arreglar enlaces de Wiki: [[España|español]] -> español
    text = re.sub(r'\[\[[^\]]+\|([^\]]+)\]\]', r'\1', text)
    text = re.sub(r'\[\[([^\]]+)\]\]', r'\1', text)
    
    # 3. Quitar plantillas raras {{...}} y barras verticales
    text = re.sub(r'\{\{.*?\}\}', '', text)
    text = text.replace('|', ' ')
    
    # 4. Quitar dos puntos iniciales o caracteres sueltos
    text = re.sub(r'^[:\s,\-]+', '', text)
    
    # 5. Limpiar espacios en blanco excesivos
    text = re.sub(r'\s+', ' ', text)
    
    return text.strip()

def is_valid_word(word):
    if not word or len(word) < 2: return False
    # Filtramos palabras extrañas o puro código
    if not re.match(r"^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s\-]+$", word): return False
    return True

valid_entries = []
seen_words = set()

print("⏳ Limpiando base de datos, por favor espera... (Puede tardar unos segundos)")

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line: continue
        
        try:
            entry = json.loads(line)
        except:
            continue

        word = entry.get("word") or entry.get("palabra")
        if not is_valid_word(word):
            continue
            
        word_lower = word.lower()
        if word_lower in seen_words:
            continue

        raw_def = entry.get("definition") or entry.get("definicion") or ""
        cleaned_def = clean_definition(raw_def)

        # Filtro de calidad: Solo definiciones de tamaño adecuado
        if not cleaned_def or len(cleaned_def) < 15 or len(cleaned_def) > 400:
            continue

        # Construir la tarjeta perfecta
        clean_entry = {
            "word": word,
            "pos": entry.get("pos") or "término", # ¡Ya no perdemos si es m. o f.!
            "definition": cleaned_def
        }
        
        # Guardar info extra si existe
        if "synonyms" in entry and entry["synonyms"]: clean_entry["synonyms"] = entry["synonyms"]
        if "tip" in entry and entry["tip"]: clean_entry["tip"] = entry["tip"]
        if "etymology" in entry and entry["etymology"]: clean_entry["etymology"] = entry["etymology"]
        if "example" in entry and entry["example"]: clean_entry["example"] = entry["example"]

        valid_entries.append(clean_entry)
        seen_words.add(word_lower)

# Guardar en formato Lista JSON (Ultra rápido para la App)
with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
    json.dump(valid_entries, out, ensure_ascii=False, indent=2)

print(f"🚀 ¡Terminado! Se han guardado {len(valid_entries)} palabras impecables en '{OUTPUT_FILE}'.")