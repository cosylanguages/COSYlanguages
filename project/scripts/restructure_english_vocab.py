import os
import glob
import json
import re
import shutil
import subprocess

DOMAIN_MAP_A1 = {
    # SELF
    "personal_identity": ("SELF", "Identity", "Identity_Details"),
    "people": ("SELF", "Identity", "Personal_Identity"),
    "immediate_family": ("SELF", "Family", "Immediate_Family"),
    "extended_family": ("SELF", "Family", "Extended_Family"),
    "family": ("SELF", "Family", "Family_Relations"),
    "body": ("SELF", "Body", "Body_Parts"),
    "describing": ("SELF", "Appearance", "Descriptive_Traits"),
    "colours": ("SELF", "Appearance", "Colours_Shades"),
    "clothes": ("SELF", "Appearance", "Clothing_Garments"),
    "items_of_clothing": ("SELF", "Appearance", "Clothing_Garments"),
    "accessories": ("SELF", "Appearance", "Accessories_Fashion"),
    "emotions": ("SELF", "Emotions", "Feelings_States"),

    # HOME
    "buildings": ("HOME", "Buildings", "Structures"),
    "types_of_accommodation": ("HOME", "Buildings", "Housing_Types"),
    "rooms_indoor_spaces": ("HOME", "Rooms", "Indoor_Rooms"),
    "furniture": ("HOME", "Furniture", "Living_Furniture"),
    "household_items": ("HOME", "Furniture", "Household_Goods"),
    "kitchen_items": ("HOME", "Appliances", "Kitchen_Appliances"),
    "household_tasks": ("HOME", "Household_Actions", "Daily_Chores"),

    # FOOD
    "food_drink": ("FOOD", "Ingredients", "Food_Beverages"),
    "dishes": ("FOOD", "Meals", "Prepared_Dishes"),

    # WORK_SCHOOL
    "work": ("WORK_SCHOOL", "Work", "Jobs_Careers"),
    "jobs": ("WORK_SCHOOL", "Work", "Professions"),
    "job_titles_professions": ("WORK_SCHOOL", "Work", "Professions"),
    "school": ("WORK_SCHOOL", "Education", "School_Classroom"),
    "learning_studying": ("WORK_SCHOOL", "Education", "Study_Activities"),
    "types_of_education": ("WORK_SCHOOL", "Education", "Education_Systems"),

    # TRAVEL
    "travel": ("TRAVEL", "Transport", "Travel_Journeys"),
    "modes_of_transport": ("TRAVEL", "Transport", "Vehicles_Transit"),
    "places": ("TRAVEL", "Places", "Locations_Venues"),
    "cities_towns": ("TRAVEL", "Places", "Cities_Urban"),
    "countries_capitals": ("TRAVEL", "Places", "Countries_Nations"),
    "nationalities": ("TRAVEL", "Places", "Nationalities_Origins"),
    "nationality_country": ("TRAVEL", "Places", "Nationalities_Origins"),
    "locations": ("TRAVEL", "Places", "Spatial_Locations"),
    "prepositions_place": ("TRAVEL", "Places", "Position_Markers"),
    "prepositions_movement": ("TRAVEL", "Places", "Direction_Markers"),

    # NATURE
    "nature": ("NATURE", "Environment", "Natural_World"),
    "animals": ("NATURE", "Animals", "Mammals_Creatures"),
    "insects": ("NATURE", "Animals", "Insects_Bugs"),
    "plants_natural_world": ("NATURE", "Environment", "Flora_Plants"),
    "seasons_climate": ("NATURE", "Environment", "Weather_Seasons"),

    # TIME_NUMBERS
    "time": ("TIME_NUMBERS", "Time", "Clocks_Periods"),
    "days_week": ("TIME_NUMBERS", "Time", "Days_Schedule"),
    "months_year": ("TIME_NUMBERS", "Time", "Months_Calendar"),
    "duration_expressions": ("TIME_NUMBERS", "Time", "Duration_Spans"),
    "dates_years": ("TIME_NUMBERS", "Time", "Dates_Years"),
    "numbers": ("TIME_NUMBERS", "Numbers", "Cardinal_Ordinal"),
    "size_measurements": ("TIME_NUMBERS", "Numbers", "Sizes_Units"),
    "size_shape": ("TIME_NUMBERS", "Numbers", "Shapes_Dimensions"),

    # SOCIAL_COMMUNICATION
    "social": ("COMMUNICATION", "Social", "Interactions"),
    "greetings": ("COMMUNICATION", "Social", "Greetings_Phrases"),
    "asking_answering_questions": ("COMMUNICATION", "Social", "Question_Forms"),
    "giving_opinions": ("COMMUNICATION", "Social", "Opinion_Phrases"),
    "language": ("COMMUNICATION", "Social", "Language_Terms"),
    "grammar": ("COMMUNICATION", "Social", "Grammar_Structures"),
    "grammar_elements": ("COMMUNICATION", "Social", "Grammar_Terms"),
    "shopping": ("COMMUNICATION", "Shopping", "Retail_Transactions"),
    "technology": ("COMMUNICATION", "Technology", "Digital_Devices"),
    "using_smartphone": ("COMMUNICATION", "Technology", "Mobile_Apps"),
    "leisure_activities": ("COMMUNICATION", "Leisure", "Hobbies_Pastimes"),
    "sports": ("COMMUNICATION", "Leisure", "Athletic_Sports"),
    "music": ("COMMUNICATION", "Leisure", "Music_Instruments"),
    "toys_games": ("COMMUNICATION", "Leisure", "Games_Play"),
    "books_reading": ("COMMUNICATION", "Leisure", "Literature_Books"),
    "playing_watching_sport": ("COMMUNICATION", "Leisure", "Spectator_Sports"),
}

DOMAIN_MAP_B1 = {
    # People
    "people": ("People", "Identity", "Individual_Traits"),
    "personal_identity": ("People", "Identity", "Identity_Concepts"),
    "personality": ("People", "Personality", "Character_Traits"),
    "emotions": ("People", "Emotions", "Emotional_States"),
    "habits": ("People", "Habits", "Daily_Routines"),
    "psychology": ("People", "Personality", "Psychological_Traits"),
    "emotional_intelligence": ("People", "Emotions", "Empathy_Awareness"),

    # Science
    "science": ("Science", "Technology", "Scientific_Method"),
    "space": ("Science", "Space", "Astronomy_Cosmos"),
    "biology": ("Science", "Biology", "Living_Organisms"),
    "health_medicine": ("Science", "Biology", "Medical_Health"),
    "environment": ("Science", "Environment", "Ecology_Climate"),
    "plants_natural_world": ("Science", "Environment", "Ecosystems"),
    "nature": ("Science", "Environment", "Natural_Phenomena"),
    "technology": ("Science", "Technology", "Computers_Engineering"),
    "using_smartphone": ("Science", "Technology", "Software_Mobile"),

    # Society
    "society": ("Society", "Culture", "Social_Structures"),
    "social": ("Society", "Culture", "Social_Relations"),
    "media": ("Society", "Media", "Journalism_Broadcasting"),
    "education": ("Society", "Education", "Academic_Institutions"),
    "learning_studying": ("Society", "Education", "Pedagogy_Study"),
    "school": ("Society", "Education", "Schooling"),
    "work": ("Society", "Work", "Employment_Business"),
    "job_titles_professions": ("Society", "Work", "Professional_Roles"),
    "jobs": ("Society", "Work", "Occupations"),
    "career_development": ("Society", "Work", "Career_Growth"),
    "organisational_culture": ("Society", "Work", "Corporate_Culture"),
    "culture": ("Society", "Culture", "Arts_Heritage"),
    "art_culture": ("Society", "Culture", "Visual_Performing_Arts"),
    "globalisation_geography": ("Society", "Culture", "Global_Geography"),
}

C_DEFAULT = {
    "law": ("LAW", "Legal_System", "Jurisprudence_Statutes"),
    "law_justice": ("LAW", "Legal_System", "Courts_Justice"),
    "philosophy": ("PHILOSOPHY", "Ethics", "Moral_Philosophy"),
    "epistemology": ("EPISTEMOLOGY", "Knowledge_Theory", "Truth_Certainty"),
    "knowledge_epistemology_c1": ("EPISTEMOLOGY", "Knowledge_Theory", "Epistemic_Analysis"),
    "epistemology_truth": ("EPISTEMOLOGY", "Knowledge_Theory", "Verification_Logic"),
    "ontology_existence": ("PHILOSOPHY", "Ontology", "Existence_Metaphysics"),
    "aesthetics_criticism": ("AESTHETICS", "Criticism", "Artistic_Critique"),
    "moral_philosophy": ("PHILOSOPHY", "Ethics", "Ethical_Theories"),
    "linguistics_theory": ("DISCOURSE", "Linguistics", "Semantics_Syntax"),
    "advanced_register_c1": ("DISCOURSE", "Advanced_Register", "Rhetorical_Register"),
}

LEVEL_MAP = {
    "starter": "A1",
    "elementary": "A2",
    "intermediate": "B1",
    "upper_intermediate": "B2",
    "advanced": "C1",
    "proficiency": "C2"
}

def get_pos_section(item):
    theme = (item.get("theme") or "").lower()
    form = (item.get("form") or "").lower()

    if theme in ["speaking", "quotes"]:
        return "Speaking_Games", "SPK"
    if theme in ["debates", "fluency"]:
        return "Fluency_Debates", "DEB"

    if "verb" in form:
        return "Verbs", "VERB"
    elif "noun" in form:
        return "Nouns", "NOUN"
    elif "adj" in form or "adjective" in form:
        return "Adjectives", "ADJ"
    else:
        return "Other_POS", "OTH"

def get_mapping(level_code, theme_raw):
    theme = (theme_raw or "general").lower()
    if level_code in ["A1", "A2"]:
        if theme in DOMAIN_MAP_A1:
            return DOMAIN_MAP_A1[theme]
        for k, v in DOMAIN_MAP_A1.items():
            if k in theme:
                return v
        return ("SELF", "Identity", "General_Identity")
    elif level_code in ["B1", "B2"]:
        if theme in DOMAIN_MAP_B1:
            return DOMAIN_MAP_B1[theme]
        for k, v in DOMAIN_MAP_B1.items():
            if k in theme:
                return v
        return ("Society", "Culture", "General_Culture")
    else:
        if theme in C_DEFAULT:
            return C_DEFAULT[theme]
        for k, v in C_DEFAULT.items():
            if k in theme:
                return v
        if theme in DOMAIN_MAP_B1:
            return DOMAIN_MAP_B1[theme]
        return ("LAW", "Legal_System", "General_Law")

def parse_js_file(filepath):
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

    all_entries = []

    # Step 1: Collect entries from all existing JS files
    for lvl in level_dirs:
        lvl_path = os.path.join(base_dir, lvl)
        if not os.path.exists(lvl_path):
            continue
        js_files = glob.glob(os.path.join(lvl_path, "**", "*.js"), recursive=True)
        for f in js_files:
            items = parse_js_file(f)
            for item in items:
                all_entries.append(item)

    print(f"Total entries loaded: {len(all_entries)}")

    # Clean existing directory structure under vocabulary/en
    for lvl in level_dirs:
        lvl_path = os.path.join(base_dir, lvl)
        if os.path.exists(lvl_path):
            shutil.rmtree(lvl_path)
        os.makedirs(lvl_path, exist_ok=True)

    # Step 2: Route entries into POS/Section -> Domain -> Subcategory -> Sub-subcategory
    grouped_entries = {}

    for item in all_entries:
        raw_lvl = item.get("level", "a1")
        norm_lvl = LEVEL_MAP.get(raw_lvl, "A1")

        pos_section, pos_code = get_pos_section(item)
        domain, subcat, sub_subcat = get_mapping(norm_lvl, item.get("theme"))

        key = (norm_lvl, pos_section, domain, subcat, sub_subcat, pos_code)
        if key not in grouped_entries:
            grouped_entries[key] = []
        grouped_entries[key].append(item)

    # Step 3: Write out structured JS files
    total_written = 0
    for (lvl, pos_section, domain, subcat, sub_subcat, pos_code), items in grouped_entries.items():
        dir_path = os.path.join(base_dir, lvl, pos_section, domain, subcat)
        os.makedirs(dir_path, exist_ok=True)
        file_path = os.path.join(dir_path, f"{sub_subcat}.js")

        items.sort(key=lambda x: x.get("word", ""))

        processed = []
        for idx, item in enumerate(items, 1):
            canonical_id = f"{lvl}-{pos_code}-{domain[:3].upper()}-{idx:02d}"
            if "id" in item and item["id"] != canonical_id:
                item["legacy_id"] = item["id"]
            item["id"] = canonical_id
            item["level_code"] = lvl
            item["pos_section"] = pos_section
            item["domain"] = domain
            item["subcategory"] = subcat
            item["sub_subcategory"] = sub_subcat
            processed.append(item)

        total_written += len(processed)

        js_data = json.dumps(processed, indent=4, ensure_ascii=False)
        js_content = f"""(function() {{
    const lang = "en";
    const data = {js_data};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(js_content)

    print(f"Successfully restructured multi-tier vocabulary! Total written: {total_written}")

if __name__ == "__main__":
    main()
