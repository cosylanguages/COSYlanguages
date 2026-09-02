import os
import glob
import json
import re
import shutil
import subprocess

DOMAIN_MAP_A1 = {
    # SELF
    "personal_identity": ("SELF", "Identity", "SELF"),
    "people": ("SELF", "Identity", "SELF"),
    "immediate_family": ("SELF", "Family", "SELF"),
    "extended_family": ("SELF", "Family", "SELF"),
    "family": ("SELF", "Family", "SELF"),
    "body": ("SELF", "Body", "SELF"),
    "describing": ("SELF", "Appearance", "SELF"),
    "colours": ("SELF", "Appearance", "SELF"),
    "clothes": ("SELF", "Appearance", "SELF"),
    "items_of_clothing": ("SELF", "Appearance", "SELF"),
    "accessories": ("SELF", "Appearance", "SELF"),
    "emotions": ("SELF", "Emotions", "SELF"),

    # HOME
    "buildings": ("HOME", "Buildings", "HOME"),
    "types_of_accommodation": ("HOME", "Buildings", "HOME"),
    "rooms_indoor_spaces": ("HOME", "Rooms", "HOME"),
    "furniture": ("HOME", "Furniture", "HOME"),
    "household_items": ("HOME", "Furniture", "HOME"),
    "kitchen_items": ("HOME", "Appliances", "HOME"),
    "household_tasks": ("HOME", "Household Actions", "HOME"),

    # FOOD
    "food_drink": ("FOOD", "Ingredients", "FOOD"),
    "dishes": ("FOOD", "Meals", "FOOD"),

    # WORK_SCHOOL
    "work": ("WORK_SCHOOL", "Work", "WORK"),
    "jobs": ("WORK_SCHOOL", "Work", "WORK"),
    "job_titles_professions": ("WORK_SCHOOL", "Work", "WORK"),
    "school": ("WORK_SCHOOL", "Education", "WORK"),
    "learning_studying": ("WORK_SCHOOL", "Education", "WORK"),
    "types_of_education": ("WORK_SCHOOL", "Education", "WORK"),

    # TRAVEL
    "travel": ("TRAVEL", "Transport", "TRV"),
    "modes_of_transport": ("TRAVEL", "Transport", "TRV"),
    "places": ("TRAVEL", "Places", "TRV"),
    "cities_towns": ("TRAVEL", "Places", "TRV"),
    "countries_capitals": ("TRAVEL", "Places", "TRV"),
    "nationalities": ("TRAVEL", "Places", "TRV"),
    "nationality_country": ("TRAVEL", "Places", "TRV"),
    "locations": ("TRAVEL", "Places", "TRV"),
    "prepositions_place": ("TRAVEL", "Places", "TRV"),
    "prepositions_movement": ("TRAVEL", "Places", "TRV"),

    # NATURE
    "nature": ("NATURE", "Environment", "NAT"),
    "animals": ("NATURE", "Animals", "NAT"),
    "insects": ("NATURE", "Animals", "NAT"),
    "plants_natural_world": ("NATURE", "Environment", "NAT"),
    "seasons_climate": ("NATURE", "Environment", "NAT"),

    # TIME_NUMBERS
    "time": ("TIME_NUMBERS", "Time", "NUM"),
    "days_week": ("TIME_NUMBERS", "Time", "NUM"),
    "months_year": ("TIME_NUMBERS", "Time", "NUM"),
    "duration_expressions": ("TIME_NUMBERS", "Time", "NUM"),
    "dates_years": ("TIME_NUMBERS", "Time", "NUM"),
    "numbers": ("TIME_NUMBERS", "Numbers", "NUM"),
    "size_measurements": ("TIME_NUMBERS", "Numbers", "NUM"),
    "size_shape": ("TIME_NUMBERS", "Numbers", "NUM"),

    # SOCIAL_COMMUNICATION
    "social": ("COMMUNICATION", "Social", "COMM"),
    "greetings": ("COMMUNICATION", "Social", "COMM"),
    "asking_answering_questions": ("COMMUNICATION", "Social", "COMM"),
    "giving_opinions": ("COMMUNICATION", "Social", "COMM"),
    "language": ("COMMUNICATION", "Social", "COMM"),
    "grammar": ("COMMUNICATION", "Social", "COMM"),
    "grammar_elements": ("COMMUNICATION", "Social", "COMM"),
    "shopping": ("COMMUNICATION", "Shopping", "COMM"),
    "technology": ("COMMUNICATION", "Technology", "COMM"),
    "using_smartphone": ("COMMUNICATION", "Technology", "COMM"),
    "leisure_activities": ("COMMUNICATION", "Leisure", "COMM"),
    "sports": ("COMMUNICATION", "Leisure", "COMM"),
    "music": ("COMMUNICATION", "Leisure", "COMM"),
    "toys_games": ("COMMUNICATION", "Leisure", "COMM"),
    "books_reading": ("COMMUNICATION", "Leisure", "COMM"),
    "playing_watching_sport": ("COMMUNICATION", "Leisure", "COMM"),
}

DOMAIN_MAP_B1 = {
    # People
    "people": ("People", "Identity", "PPL"),
    "personal_identity": ("People", "Identity", "PPL"),
    "personality": ("People", "Personality", "PPL"),
    "emotions": ("People", "Emotions", "PPL"),
    "habits": ("People", "Habits", "PPL"),
    "psychology": ("People", "Personality", "PPL"),
    "emotional_intelligence": ("People", "Emotions", "PPL"),
    "psychological_states_c1": ("People", "Emotions", "PPL"),
    "psychological_concepts_c1": ("People", "Personality", "PPL"),
    "psychoanalysis_unconscious": ("People", "Personality", "PPL"),

    # Science
    "science": ("Science", "Technology", "SCI"),
    "space": ("Science", "Space", "SCI"),
    "biology": ("Science", "Biology", "SCI"),
    "health_medicine": ("Science", "Biology", "SCI"),
    "environment": ("Science", "Environment", "SCI"),
    "plants_natural_world": ("Science", "Environment", "SCI"),
    "nature": ("Science", "Environment", "SCI"),
    "technology": ("Science", "Technology", "SCI"),
    "using_smartphone": ("Science", "Technology", "SCI"),
    "science_tech_society_c1": ("Science", "Technology", "SCI"),

    # Society
    "society": ("Society", "Culture", "SOC"),
    "social": ("Society", "Culture", "SOC"),
    "media": ("Society", "Media", "SOC"),
    "education": ("Society", "Education", "SOC"),
    "learning_studying": ("Society", "Education", "SOC"),
    "school": ("Society", "Education", "SOC"),
    "work": ("Society", "Work", "SOC"),
    "job_titles_professions": ("Society", "Work", "SOC"),
    "jobs": ("Society", "Work", "SOC"),
    "career_development": ("Society", "Work", "SOC"),
    "organisational_culture": ("Society", "Work", "SOC"),
    "culture": ("Society", "Culture", "SOC"),
    "art_culture": ("Society", "Culture", "SOC"),
    "globalisation_geography": ("Society", "Culture", "SOC"),
    "sociology_structures_c1": ("Society", "Culture", "SOC"),
    "power_institutions_c1": ("Society", "Culture", "SOC"),

    # Default fallback B1/B2
    "discourse_argument": ("Society", "Culture", "SOC"),
    "discourse_argument_c1": ("Society", "Culture", "SOC"),
    "persuasion_rhetoric": ("Society", "Culture", "SOC"),
    "language_persuasion_c1": ("Society", "Culture", "SOC"),
    "rhetoric_persuasion_c1": ("Society", "Culture", "SOC"),
}

C_DEFAULT = {
    "law": ("LAW", "Legal System", "LAW"),
    "law_justice": ("LAW", "Legal System", "LAW"),
    "philosophy": ("PHILOSOPHY", "General Philosophy", "PHIL"),
    "epistemology": ("EPISTEMOLOGY", "Knowledge Theory", "EPIST"),
    "knowledge_epistemology_c1": ("EPISTEMOLOGY", "Knowledge Theory", "EPIST"),
    "epistemology_truth": ("EPISTEMOLOGY", "Knowledge Theory", "EPIST"),
    "ontology_existence": ("PHILOSOPHY", "Ontology", "PHIL"),
    "aesthetics_criticism": ("AESTHETICS", "Criticism", "AESTH"),
    "moral_philosophy": ("PHILOSOPHY", "Ethics", "PHIL"),
    "linguistics_theory": ("DISCOURSE", "Linguistics", "DISC"),
    "advanced_register_c1": ("DISCOURSE", "Advanced Register", "DISC"),
}

LEVEL_MAP = {
    "starter": "A1",
    "elementary": "A2",
    "intermediate": "B1",
    "upper_intermediate": "B2",
    "advanced": "C1",
    "proficiency": "C2"
}

def get_mapping(level_code, theme_raw):
    theme = (theme_raw or "general").lower()
    if level_code in ["A1", "A2"]:
        if theme in DOMAIN_MAP_A1:
            return DOMAIN_MAP_A1[theme]
        # check partial matches
        for k, v in DOMAIN_MAP_A1.items():
            if k in theme:
                return v
        return ("SELF", "Identity", "SELF")
    elif level_code in ["B1", "B2"]:
        if theme in DOMAIN_MAP_B1:
            return DOMAIN_MAP_B1[theme]
        for k, v in DOMAIN_MAP_B1.items():
            if k in theme:
                return v
        return ("Society", "Culture", "SOC")
    else: # C1, C2
        if theme in C_DEFAULT:
            return C_DEFAULT[theme]
        for k, v in C_DEFAULT.items():
            if k in theme:
                return v
        if theme in DOMAIN_MAP_B1:
            return DOMAIN_MAP_B1[theme]
        return ("LAW", "Legal System", "LAW")

def parse_js_file(filepath):
    """
    Evaluates node to get data array from a js file.
    """
    cmd = f"""node -e '
    const fs = require("fs");
    const win = {{}};
    const code = fs.readFileSync("{filepath}", "utf8");
    eval("(function(window) {{ " + code + " }})(win)");
    const data = win.vocabularyData ? win.vocabularyData["en"] : [];
    console.log(JSON.stringify(data));
    '"""
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0 or not res.stdout.strip():
        # Fallback eval without wrapper if it failed
        cmd2 = f"""node -e '
        const fs = require("fs");
        let window = {{}};
        {open(filepath, "r", encoding="utf-8").read()}
        console.log(JSON.stringify(window.vocabularyData ? window.vocabularyData["en"] : []));
        '"""
        res = subprocess.run(cmd2, shell=True, capture_output=True, text=True)
    try:
        return json.loads(res.stdout.strip())
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return []

def main():
    base_dir = "vocabulary/en"
    level_dirs = ["A1", "A2", "B1", "B2", "C1", "C2"]

    all_entries_by_target = {} # (level, domain, subcategory) -> list of items

    # Step 1: Read all existing files across level_dirs
    total_loaded = 0
    for lvl in level_dirs:
        lvl_path = os.path.join(base_dir, lvl)
        if not os.path.exists(lvl_path):
            continue
        js_files = glob.glob(os.path.join(lvl_path, "**", "*.js"), recursive=True)
        for f in js_files:
            items = parse_js_file(f)
            total_loaded += len(items)
            for item in items:
                # determine canonical level
                raw_lvl = item.get("level", lvl.lower())
                norm_lvl = LEVEL_MAP.get(raw_lvl, lvl)
                theme = item.get("theme", "general")
                domain, subcat, domain_code = get_mapping(norm_lvl, theme)

                key = (norm_lvl, domain, subcat, domain_code)
                if key not in all_entries_by_target:
                    all_entries_by_target[key] = []
                all_entries_by_target[key].append(item)

    print(f"Total entries collected from source files: {total_loaded}")

    # Remove existing files/dirs under vocabulary/en/
    for lvl in level_dirs:
        lvl_path = os.path.join(base_dir, lvl)
        if os.path.exists(lvl_path):
            shutil.rmtree(lvl_path)
        os.makedirs(lvl_path, exist_ok=True)

    # Step 2: Write back structured files and assign formatted IDs
    total_written = 0
    for (lvl, domain, subcat, domain_code), items in all_entries_by_target.items():
        domain_dir = os.path.join(base_dir, lvl, domain)
        os.makedirs(domain_dir, exist_ok=True)
        filename = f"{subcat.replace(' ', '_')}.js"
        file_path = os.path.join(domain_dir, filename)

        # Sort items deterministically by word
        items.sort(key=lambda x: x.get("word", ""))

        processed_items = []
        for idx, item in enumerate(items, 1):
            canonical_id = f"{lvl}-{domain_code}-{idx:02d}"
            # preserve legacy id if present
            if "id" in item and item["id"] != canonical_id:
                item["legacy_id"] = item["id"]
            item["id"] = canonical_id
            item["level_code"] = lvl
            item["domain"] = domain
            item["subcategory"] = subcat
            processed_items.append(item)

        total_written += len(processed_items)

        # Format JS content
        js_data = json.dumps(processed_items, indent=4, ensure_ascii=False)
        js_content = f"""(function() {{
    const lang = "en";
    const data = {js_data};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
        with open(file_path, "w", encoding="utf-8") as out_f:
            out_f.write(js_content)

    print(f"Successfully restructured vocabulary! Total items written: {total_written}")

if __name__ == "__main__":
    main()
