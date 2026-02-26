import json
import re

INPUT_FILE = "vocab_full.jsonl"
OUTPUT_FILE = "clean_vocab.json"

MIN_DEF_LENGTH = 20
MAX_DEF_LENGTH = 300

def clean_definition(text):
    if not text:
        return None

    text = text.strip()

    # Eliminar etiquetas tipo "1." "2." etc.
    text = re.sub(r'^\d+\.\s*', '', text)

    # Eliminar abreviaturas sueltas tipo "m.", "f.", "adj."
    text = re.sub(r'\b(m|f|adj|adv|tr|intr|prnl)\.\b', '', text)

    # Quitar espacios duplicados
    text = re.sub(r'\s+', ' ', text)

    return text.strip()

def is_valid_word(word):
    if not word:
        return False
    if len(word) < 2:
        return False
    if not re.match("^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$", word):
        return False
    return True

cleaned = []
seen_words = set()

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue

        word = entry.get("word")
        definition = entry.get("definition")

        if not is_valid_word(word):
            continue

        definition = clean_definition(definition)

        if not definition:
            continue

        if len(definition) < MIN_DEF_LENGTH:
            continue

        if len(definition) > MAX_DEF_LENGTH:
            continue

        word_lower = word.lower()

        if word_lower in seen_words:
            continue

        seen_words.add(word_lower)

        cleaned.append({
            "word": word_lower,
            "definition": definition,
            "initial": word_lower[0].upper()
        })

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(cleaned, f, ensure_ascii=False, indent=2)

print("Proceso terminado.")
print(f"Entradas originales: {len(seen_words)}")
print(f"Entradas limpias guardadas en {OUTPUT_FILE}")