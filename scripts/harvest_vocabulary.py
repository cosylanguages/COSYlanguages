import os
import re
import json
import unicodedata
from bs4 import BeautifulSoup

VALID_THEMES = {
    "animals", "body", "clothes", "colours", "describing", "emotions", "environment",
    "food_drink", "furniture", "health_medicine", "jobs", "language", "music", "nature",
    "numbers", "people", "places", "school", "shopping", "social", "sports", "technology",
    "time", "travel", "work", "art_culture", "psychology"
}

VALID_LEVELS = {"starter", "elementary", "intermediate", "upper_intermediate", "advanced", "proficiency"}

LEVEL_MAP_CEFR = {
    "starter": "A1",
    "elementary": "A2",
    "intermediate": "B1",
    "upper_intermediate": "B2",
    "advanced": "C1",
    "proficiency": "C2"
}

LEVEL_MAP_REVERSE = {
    "a1": "starter", "starter": "starter", "beginner": "starter", "débutant": "starter", "начинающий": "starter",
    "a2": "elementary", "elementary": "elementary", "элементарный": "elementary",
    "b1": "intermediate", "intermediate": "intermediate", "средний": "intermediate", "intermédiaire": "intermediate",
    "b2": "upper_intermediate", "upper_intermediate": "upper_intermediate", "upper-intermediate": "upper_intermediate", "upper intermediate": "upper_intermediate", "intermédiaire supérieur": "upper_intermediate",
    "c1": "advanced", "advanced": "advanced", "продвинутый": "advanced",
    "c2": "proficiency", "proficiency": "proficiency", "профессиональный": "proficiency"
}

# Mapping for unregistered legacy theme slugs to valid themes
UNREGISTERED_THEME_MAPPING = {
    "asking_answering_questions": "language",
    "advanced_register_c1": "language",
    "science_tech_society_c1": "technology",
    "career_development": "work",
    "finances_investment": "shopping",
    "stress_anxiety": "psychology",
    "mental_health_wellbeing": "psychology",
    "higher_education": "school",
    "equality_rights": "people",
    "values_beliefs": "psychology",
    "cultural_heritage": "art_culture",
    "environment_policy": "environment",
    "politics_governance": "people",
    "serious_illness_treatment": "health_medicine",
    "healthcare_systems": "health_medicine",
    "spatial_description": "describing",
    "probability_certainty": "describing",
    "ethical_dilemmas": "psychology",
    "conjunctions_connectors": "language",
    "asking_answering_questions_en": "language"
}

# Standard folder-to-theme mappings
FOLDER_THEMES = {
    "cinema-club": "art_culture",
    "karaoke-club": "music",
    "i-couldnt-help-but-wonder": "psychology",
    "keeping-up-with-science": "technology",
    "lets-celebrate": "social",
    "mind-matters": "psychology",
    "my-life-with-without": "social",
    "the-greatest-quotes": "psychology",
}

# Song specific themes mapping from notebook/speaking_club_theme_taxonomy.md
SONG_THEMES = {
    "toutes-les-machines-ont-le-coeur": "technology",
    "je-taime-comme-je-taime": "people",
    "me-and-i": "psychology",
    "angeleyes": "emotions",
    "salut": "social",
    "toi-mon-amour": "people",
    "luomo-che-amava-le-donne": "people",
    "due-grosse-lacrime-bianche": "emotions",
    "unatta-estate": "nature",
    "mixed-up-world": "psychology",
    "u-mamy-est-sekret": "people",
    "chi-sara-con-te": "people",
    "lamore-e-un-attimo": "people",
    "kapoies-nychtes": "nature",
    "o-gatos": "animals",
    "amor-libre": "people",
    "te-alejas-mas-de-mi": "people",
    "oui-ou-non": "people",
    "balance-ton-quoi": "people",
    "nuevo-verano": "nature",
    "laziza": "people",
    "nos-ames-sont": "people",
    "immobile": "emotions",
    "la-nuit-nen-finit-plus": "emotions",
    "le-soleil-noir": "emotions",
    "la-tour-eiffel-est-pour-moi": "places",
    "left-outside-alone": "emotions",
    "quelquun-pour-toi": "people",
    "bien-plus-fort": "emotions",
    "casualties-of-war": "emotions",
    "un-premier-amour": "people",
    "voila": "emotions",
    "vyshe-domov": "nature",
    "as-it-was": "time",
    "california-dreaming": "nature",
    "na-i-agapi-na": "people",
    "make-your-own-kind-of-music": "emotions",
    "its-getting-better": "emotions",
    "overprotected": "people",
    "ma-philosophie": "psychology",
    "diva": "emotions",
    "tu-ten-iras": "people",
    "second-hand-rose": "shopping",
    "coming-around-again": "people",
    "to-idio-to-theo": "people",
    "jim-beam": "emotions",
    "army-dreamers": "emotions",
    "oh-to-be-in-love": "people",
    "the-greatest": "art_culture",
    "where-is-my-husband": "people",
    "unlikely-lovers": "people",
    "one-of-the-greats": "art_culture",
    "un-raggio-di-sole": "nature",
    "love-kernels": "people",
    "lets-generalize-about-men": "social",
    "so-maternal": "people",
    "face-your-fears": "emotions"
}

# Flat debate sessions theme mapping
FLAT_THEMES = {
    "4-day-work-week": "work",
    "ai-and-art": "technology",
    "assisted-dying": "psychology",
    "homework-ban": "school",
    "human-cloning": "technology",
    "meta-subscriptions": "technology",
    "pedagogy-and-practice": "school",
    "the-future-proof-educator": "school",
    "typing-vs-handwriting-elementary": "school",
    "typing-vs-handwriting-intermediate": "school",
    "upbringing-old-vs-modern": "people",
}

def normalize_word(w):
    w = w.lower().strip()
    # remove accents
    w = ''.join(c for c in unicodedata.normalize('NFD', w) if unicodedata.category(c) != 'Mn')
    # remove articles/pronouns in French, English, Spanish, Italian, Russian, Greek
    for prefix in ["l'", "la ", "le ", "les ", "un ", "une ", "des ", "the ", "a ", "an ", "el ", "los ", "las ", "il ", "lo ", "i ", "gli ", "ο ", "η ", "το ", "οι ", "τα "]:
        if w.startswith(prefix):
            w = w[len(prefix):]
            break
    # strip quotes and non-alphas
    w = w.strip(" *.\"'“”()[]?!")
    return w.strip()

def parse_js_records(filepath):
    """Robust parser that extracts all {} dictionary-like items from inside the js file data array."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Isolate array content using broad regex matching
    match = re.search(r'(?:const\s+)?(?:data|vocabularyData|speakingData|grammarData)\s*=\s*\[(.*?)\]\s*;', content, re.DOTALL)
    if not match:
        return []

    array_content = match.group(1)

    # Locate all individual object literal blocks using brace depth matching
    objs = []
    i = 0
    while i < len(array_content):
        if array_content[i] == '{':
            # Match braces
            depth = 1
            j = i + 1
            while j < len(array_content) and depth > 0:
                if array_content[j] == '{':
                    depth += 1
                elif array_content[j] == '}':
                    depth -= 1
                j += 1
            if depth == 0:
                obj_str = array_content[i:j]
                objs.append(obj_str)
                i = j - 1
        i += 1

    records = []
    for obj_str in objs:
        # Simple extraction of crucial fields
        def get_str_val(field):
            # matches e.g. "word": "grief", or word: "grief"
            m = re.search(fr'["\']?{field}["\']?\s*:\s*["\'](.*?)["\']', obj_str)
            if m:
                return m.group(1)
            return None

        word_val = get_str_val("word")
        id_val = get_str_val("id")
        theme_val = get_str_val("theme")
        level_val = get_str_val("level")
        lang_val = get_str_val("lang")
        form_val = get_str_val("form")

        if id_val:
            records.append({
                "id": id_val,
                "word": word_val,
                "theme": theme_val,
                "level": level_val,
                "lang": lang_val,
                "form": form_val,
                "raw": obj_str
            })
    return records

def guess_theme_by_word(word, current_lang):
    w = word.lower().strip()
    if current_lang == "en":
        if any(x in w for x in ["doctor", "illness", "disease", "medicine", "health", "hospital", "pain", "injury"]):
            return "health_medicine"
        if any(x in w for x in ["school", "teacher", "student", "learn", "study", "class", "education"]):
            return "school"
        if any(x in w for x in ["office", "manager", "boss", "career", "salary", "employee", "business"]):
            return "work"
        if any(x in w for x in ["computer", "ai", "robot", "technology", "phone", "internet", "software"]):
            return "technology"
        if any(x in w for x in ["family", "friend", "parent", "mother", "father", "marriage", "relationship"]):
            return "people"
        if any(x in w for x in ["happy", "sad", "fear", "angry", "grief", "emotion", "feeling", "anxiety"]):
            return "emotions"
        if any(x in w for x in ["art", "film", "movie", "theatre", "music", "song", "literature", "painting"]):
            return "art_culture"
    elif current_lang == "fr":
        if any(x in w for x in ["médecin", "maladie", "santé", "hôpital", "douleur"]):
            return "health_medicine"
        if any(x in w for x in ["école", "professeur", "étudiant", "apprendre", "classe", "éducation"]):
            return "school"
        if any(x in w for x in ["bureau", "patron", "carrière", "salaire", "travail", "entreprise"]):
            return "work"
        if any(x in w for x in ["ordinateur", "ia", "robot", "technologie", "téléphone", "internet"]):
            return "technology"
        if any(x in w for x in ["famille", "ami", "parent", "mère", "père", "mariage", "relation"]):
            return "people"
        if any(x in w for x in ["heureux", "triste", "peur", "colère", "chagrin", "émotion", "sentiment"]):
            return "emotions"
        if any(x in w for x in ["art", "film", "cinéma", "théâtre", "musique", "chanson", "littérature"]):
            return "art_culture"
    elif current_lang == "ru":
        if any(x in w for x in ["врач", "болезнь", "здоровье", "больница", "боль"]):
            return "health_medicine"
        if any(x in w for x in ["школа", "учитель", "студент", "учиться", "класс", "образование"]):
            return "school"
        if any(x in w for x in ["офис", "начальник", "карьера", "зарплата", "работа", "бизнес"]):
            return "work"
        if any(x in w for x in ["компьютер", "ии", "робот", "технологи", "телефон", "интернет"]):
            return "technology"
        if any(x in w for x in ["семья", "друг", "родител", "мать", "отец", "брак", "отношени"]):
            return "people"
        if any(x in w for x in ["счастлив", "груст", "страх", "гнев", "эмоци", "чувство"]):
            return "emotions"
        if any(x in w for x in ["искусство", "фильм", "кино", "театр", "музыка", "песня", "литература"]):
            return "art_culture"
    return None

def main():
    print("=== Phase 1: Scanning Existing Vocabulary Files ===")
    vocab_dir = "vocabulary"

    # Structure to hold loaded vocabulary word sets per language
    # existing_words_set[lang] = set of normalized words
    existing_words_set = {}
    # existing_word_themes[lang][normalized_word] = theme
    existing_word_themes = {}
    # existing_word_forms[lang][normalized_word] = form
    existing_word_forms = {}
    # max_sequences[lang][level][theme] = max sequence number
    max_sequences = {}

    for root, dirs, files in os.walk(vocab_dir):
        if "_schema" in root:
            continue
        for file in files:
            if not file.endswith(".js"):
                continue
            filepath = os.path.join(root, file)
            parts = filepath.split(os.sep)
            if len(parts) >= 4:
                lang = parts[1]
                cefr = parts[2]
                level = LEVEL_MAP_REVERSE.get(cefr.lower(), "intermediate")
            else:
                continue

            if lang not in existing_words_set:
                existing_words_set[lang] = set()
                existing_word_themes[lang] = {}
                existing_word_forms[lang] = {}
                max_sequences[lang] = {}
            if level not in max_sequences[lang]:
                max_sequences[lang][level] = {}

            records = parse_js_records(filepath)
            for r in records:
                word = r["word"]
                theme = r["theme"]
                # Remap unregistered themes to valid theme slugs
                if theme in UNREGISTERED_THEME_MAPPING:
                    theme = UNREGISTERED_THEME_MAPPING[theme]

                if word:
                    norm = normalize_word(word)
                    existing_words_set[lang].add(norm)
                    if theme:
                        existing_word_themes[lang][norm] = theme
                    if r["form"]:
                        existing_word_forms[lang][norm] = r["form"]

                # Parse sequence from id
                id_val = r["id"]
                if id_val:
                    m = re.search(r'_(\d+)$', id_val)
                    if m:
                        seq = int(m.group(1))
                        # Use corrected theme slug
                        actual_theme = theme or "social"
                        if actual_theme not in max_sequences[lang][level]:
                            max_sequences[lang][level][actual_theme] = 0
                        if seq > max_sequences[lang][level][actual_theme]:
                            max_sequences[lang][level][actual_theme] = seq

    print(f"Loaded existing words for {len(existing_words_set)} languages.")
    for l in sorted(existing_words_set.keys()):
        print(f"  - {l}: {len(existing_words_set[l])} unique words.")

    print("\n=== Phase 2: Scanning Speaking Club Session HTML Files ===")
    events_dir = "events"
    sessions_found = 0
    vocab_parsed_count = 0
    new_words_candidates = []

    for root, dirs, files in os.walk(events_dir):
        for file in files:
            if not file.endswith(".html") or file.startswith("template"):
                continue
            filepath = os.path.join(root, file)

            # Determine lang from directory path
            parts = filepath.split(os.sep)
            if "fr" in parts:
                lang = "fr"
            elif "ru" in parts:
                lang = "ru"
            else:
                lang = "en"

            sessions_found += 1
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # Determine level
            level_text = ""
            meta_grid = soup.find(class_="session-meta-grid")
            if meta_grid:
                level_text = meta_grid.get_text()
            else:
                hero = soup.find(class_="session-hero")
                if hero:
                    level_text = hero.get_text()

            level = "intermediate" # Default fallback
            for k, val in LEVEL_MAP_REVERSE.items():
                if k in level_text.lower():
                    level = val
                    break

            # Additional path-based fallback for specific flat files
            file_slug = os.path.splitext(file)[0]
            if "elementary" in file_slug or "elementary" in filepath.lower():
                level = "elementary"
            elif "starter" in file_slug or "starter" in filepath.lower() or "a1" in file_slug:
                level = "starter"

            # Parse vocabulary cards
            cards = soup.find_all(class_="vocab-card")
            for idx, card in enumerate(cards):
                vocab_word_div = card.find(class_="vocab-word")
                vocab_def_div = card.find(class_="vocab-def")
                vocab_ex_div = card.find(class_="vocab-example")

                if vocab_word_div and vocab_def_div:
                    word = vocab_word_div.get_text().strip()
                    definition = vocab_def_div.get_text().strip()
                    example = vocab_ex_div.get_text().strip() if vocab_ex_div else ""

                    vocab_parsed_count += 1
                    norm_w = normalize_word(word)

                    # Determine if it is already in our dictionary for this language
                    if lang in existing_words_set and norm_w in existing_words_set[lang]:
                        continue

                    # Determine theme slug
                    theme = None
                    # 1. Check if word exists in other levels/files of this language and reuse its theme
                    if lang in existing_word_themes and norm_w in existing_word_themes[lang]:
                        theme = existing_word_themes[lang][norm_w]

                    # 2. Check song specific themes
                    if not theme:
                        for s_slug, s_theme in SONG_THEMES.items():
                            if s_slug in filepath.lower() or s_slug in file_slug:
                                theme = s_theme
                                break

                    # 3. Check flat debate themes
                    if not theme:
                        for f_slug, f_theme in FLAT_THEMES.items():
                            if f_slug in filepath.lower() or f_slug in file_slug:
                                theme = f_theme
                                break

                    # 4. Check folder standard themes
                    if not theme:
                        for folder, folder_theme in FOLDER_THEMES.items():
                            if folder in filepath:
                                theme = folder_theme
                                break

                    # 5. Guess theme by word keywords
                    if not theme:
                        theme = guess_theme_by_word(word, lang)

                    # 6. Default fallback
                    if not theme or theme not in VALID_THEMES:
                        theme = "social"

                    # Determine form
                    form = "noun"
                    if lang in existing_word_forms and norm_w in existing_word_forms[lang]:
                        form = existing_word_forms[lang][norm_w]
                    elif word.lower().startswith("to ") or word.lower().startswith("se ") or word.lower().startswith("s'"):
                        form = "verb"
                    elif "adjectives" in theme:
                        form = "adjective"

                    new_words_candidates.append({
                        "word": word,
                        "normalized": norm_w,
                        "lang": lang,
                        "level": level,
                        "theme": theme,
                        "form": form,
                        "definition": definition,
                        "example": example,
                        "source_file": filepath
                    })

    print(f"Scanned {sessions_found} sessions. Extracted {vocab_parsed_count} vocabulary card entries.")
    print(f"Found {len(new_words_candidates)} missing/useful words to add.")

    # Remove duplicates among candidates themselves
    seen_candidates = {}
    unique_candidates = []
    for c in new_words_candidates:
        key = (c["lang"], c["level"], c["normalized"])
        if key not in seen_candidates:
            seen_candidates[key] = c
            unique_candidates.append(c)
        else:
            # Maybe update empty examples or definitions
            existing = seen_candidates[key]
            if not existing["example"] and c["example"]:
                existing["example"] = c["example"]

    print(f"Unique missing words to insert: {len(unique_candidates)}")

    print("\n=== Phase 3: Merging and Writing Back to JavaScript Vocabulary Files ===")

    # Group unique candidates by lang and level
    grouped_candidates = {}
    for c in unique_candidates:
        lang = c["lang"]
        level = c["level"]
        if lang not in grouped_candidates:
            grouped_candidates[lang] = {}
        if level not in grouped_candidates[lang]:
            grouped_candidates[lang][level] = []
        grouped_candidates[lang][level].append(c)

    added_by_file = {}

    for lang in grouped_candidates:
        for level in grouped_candidates[lang]:
            candidates_to_add = grouped_candidates[lang][level]
            cefr = LEVEL_MAP_CEFR[level]

            # Path to target vocabulary.js file
            target_file = os.path.join(vocab_dir, lang, cefr, "vocabulary.js")
            os.makedirs(os.path.dirname(target_file), exist_ok=True)

            print(f"Integrating {len(candidates_to_add)} words into {target_file}...")

            # 1. Parse existing records from target file to preserve them
            existing_records = []
            if os.path.exists(target_file):
                existing_records = parse_js_records(target_file)

            # Map of already present word IDs/normalized in this target file
            existing_norms_in_target = set()
            for r in existing_records:
                if r["word"]:
                    existing_norms_in_target.add(normalize_word(r["word"]))

            # Initialize max sequence numbers if not loaded
            if lang not in max_sequences:
                max_sequences[lang] = {}
            if level not in max_sequences[lang]:
                max_sequences[lang][level] = {}

            # Build list of new records to serialize
            new_serialized_records = []

            parsed_existing_dicts = []
            for r in existing_records:
                raw_str = r["raw"]
                # Clean up formatting for json loads
                raw_str_clean = re.sub(r',\s*([\]}])', r'\1', raw_str)
                raw_str_clean = re.sub(r'//.*', '', raw_str_clean)
                try:
                    obj_dict = json.loads(raw_str_clean)
                    # Remap legacy unregistered themes inside existing files too!
                    if obj_dict.get("theme") in UNREGISTERED_THEME_MAPPING:
                        obj_dict["theme"] = UNREGISTERED_THEME_MAPPING[obj_dict["theme"]]
                    parsed_existing_dicts.append(obj_dict)
                except Exception as e:
                    print(f"      Warning: could not parse existing record raw JSON directly. Reconstructing from fields. Error: {e}")
                    # Reconstruct minimum fields
                    theme_reconstruct = r["theme"]
                    if theme_reconstruct in UNREGISTERED_THEME_MAPPING:
                        theme_reconstruct = UNREGISTERED_THEME_MAPPING[theme_reconstruct]
                    parsed_existing_dicts.append({
                        "id": r["id"],
                        "word": r["word"],
                        "lang": r["lang"] or lang,
                        "level": r["level"] or level,
                        "theme": theme_reconstruct or "social",
                        "form": r["form"] or "noun",
                        "definitions": [{"text": "...", "examples": []}],
                        "transcription": "-",
                        "emoji": "❓"
                    })

            # Process candidates to add
            added_count_for_this_file = 0
            for c in candidates_to_add:
                norm = c["normalized"]
                if norm in existing_norms_in_target:
                    continue

                theme = c["theme"]
                if theme not in max_sequences[lang][level]:
                    max_sequences[lang][level][theme] = 0

                # Increment sequence
                max_sequences[lang][level][theme] += 1
                seq_num = max_sequences[lang][level][theme]

                # Generate ID
                new_id = f"{lang}_{level}_{theme}_{seq_num:03d}"

                definition_text = c["definition"]
                if not definition_text.endswith((".", "?", "!")):
                    definition_text += "."
                example_text = c["example"]
                if example_text and not example_text.endswith((".", "?", "!")):
                    example_text += "."

                examples_list = [example_text] if example_text else []

                new_record = {
                    "id": new_id,
                    "word": c["word"].lower() if not c["word"].isupper() else c["word"], # Keep acronyms capitalized
                    "lang": lang,
                    "level": level,
                    "theme": theme,
                    "form": c["form"],
                    "definitions": [
                        {
                            "text": definition_text,
                            "examples": examples_list
                        }
                    ],
                    "transcription": "-",
                    "emoji": "❓"
                }

                parsed_existing_dicts.append(new_record)
                existing_norms_in_target.add(norm)
                added_count_for_this_file += 1

            added_by_file[target_file] = added_count_for_this_file

            # 2. Serialize all dicts back to JSON formatting
            serialized_blocks = []
            for d in parsed_existing_dicts:
                # Format definitions with nested arrays beautifully
                formatted_json = json.dumps(d, ensure_ascii=False, indent=8)
                # Align indentation
                indented = ""
                lines = formatted_json.split("\n")
                for idx, line in enumerate(lines):
                    if idx == 0:
                        indented += "    " + line + "\n"
                    else:
                        indented += "    " + line + "\n"
                serialized_blocks.append(indented.rstrip())

            records_js = ",\n".join(serialized_blocks)

            # Write standard IIFE template
            file_content = f"""(function() {{
    const lang = "{lang}";
    const data = [
{records_js}
    ];
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    window.adjectivesData = window.adjectivesData || {{}};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(x => x.form === "adjective")];
}})();"""

            with open(target_file, "w", encoding="utf-8") as f:
                f.write(file_content)

    print("\n=== Summary of Added Vocabulary ===")
    total_added = 0
    for filepath, count in sorted(added_by_file.items()):
        print(f"  - {filepath}: added {count} words.")
        total_added += count
    print(f"Total vocabulary words integrated successfully: {total_added}")

if __name__ == "__main__":
    main()
