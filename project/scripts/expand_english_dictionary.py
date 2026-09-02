import os
import glob
import json
import re

# Comprehensive expansion word dataset spanning levels A1-C2 and domains
EXPANSION_WORDS = [
    # A1 - SELF / Identity & Family
    {
        "word": "sibling",
        "form": "noun",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "domain_code": "SELF",
        "transcription": "ˈsɪblɪŋ",
        "definitions": [{"text": "A brother or sister.", "examples": ["I have two siblings: a brother and a sister."]}],
        "emoji": "👨‍👩‍👧‍👦"
    },
    {
        "word": "nickname",
        "form": "noun",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "domain_code": "SELF",
        "transcription": "ˈnɪkneɪm",
        "definitions": [{"text": "An informal name used by family or friends.", "examples": ["His nickname is Alex."]}],
        "emoji": "📛"
    },

    # A1 - HOME
    {
        "word": "balcony",
        "form": "noun",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms",
        "domain_code": "HOME",
        "transcription": "ˈbælkəni",
        "definitions": [{"text": "A platform outside an upper window of a building.", "examples": ["We sat on the balcony in the morning."]}],
        "emoji": "🏙️"
    },
    {
        "word": "toaster",
        "form": "noun",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Appliances",
        "domain_code": "HOME",
        "transcription": "ˈtoʊstər",
        "definitions": [{"text": "An electric machine for making toast.", "examples": ["Put the bread in the toaster."]}],
        "emoji": "🍞"
    },

    # A1 - FOOD
    {
        "word": "cereal",
        "form": "noun",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "domain_code": "FOOD",
        "transcription": "ˈsɪriəl",
        "definitions": [{"text": "A food made from grain, eaten with milk for breakfast.", "examples": ["I eat cereal every morning."]}],
        "emoji": "🥣"
    },

    # B1 - Science & Technology
    {
        "word": "algorithm",
        "form": "noun",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Technology",
        "domain_code": "SCI",
        "transcription": "ˈælɡərɪðəm",
        "definitions": [{"text": "A set of rules for a computer to solve a problem.", "examples": ["The search engine uses a complex algorithm."]}],
        "emoji": "💻"
    },
    {
        "word": "ecosystem",
        "form": "noun",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "domain_code": "SCI",
        "transcription": "ˈiːkoʊsɪstəm",
        "definitions": [{"text": "All the living things and environment in an area.", "examples": ["Forests form a vital ecosystem."]}],
        "emoji": "🌿"
    },

    # B1 - Society
    {
        "word": "journalism",
        "form": "noun",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "domain_code": "SOC",
        "transcription": "ˈdʒɜːrnəlɪzəm",
        "definitions": [{"text": "The work of collecting and writing news stories.", "examples": ["She studied journalism at university."]}],
        "emoji": "📰"
    },

    # C1 - Law & Philosophy
    {
        "word": "jurisdiction",
        "form": "noun",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System",
        "domain_code": "LAW",
        "transcription": "ˌdʒʊrɪsˈdɪkʃn",
        "definitions": [{"text": "The official power to make legal decisions and judgments.", "examples": ["The court has jurisdiction over international disputes."]}],
        "emoji": "⚖️"
    },
    {
        "word": "epistemological",
        "form": "adjective",
        "level_code": "C1",
        "domain": "EPISTEMOLOGY",
        "subcategory": "Knowledge Theory",
        "domain_code": "EPIST",
        "transcription": "ɪˌpɪstəməˈlɑːdʒɪkl",
        "definitions": [{"text": "Relating to the theory of knowledge and truth.", "examples": ["They debated the epistemological foundations of science."]}],
        "emoji": "🧠"
    },

    # C2 - Advanced Philosophy & Legal Systems
    {
        "word": "hermeneutics",
        "form": "noun",
        "level_code": "C2",
        "domain": "PHILOSOPHY",
        "subcategory": "Ontology",
        "domain_code": "PHIL",
        "transcription": "ˌhɜːrməˈnuːtɪks",
        "definitions": [{"text": "The branch of knowledge that deals with interpretation, especially of text.", "examples": ["Literary analysis relies on hermeneutics."]}],
        "emoji": "📖"
    },
    {
        "word": "jurisprudence",
        "form": "noun",
        "level_code": "C2",
        "domain": "LAW",
        "subcategory": "Legal System",
        "domain_code": "LAW",
        "transcription": "ˌdʒʊrɪsˈpruːdns",
        "definitions": [{"text": "The theory or philosophy of law.", "examples": ["Modern jurisprudence emphasizes human rights."]}],
        "emoji": "📜"
    }
]

def parse_file_data(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"data\s*=\s*(\[[\s\S]*?\]);", content)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception:
            pass
    return []

def write_file_data(filepath, data):
    js_data = json.dumps(data, indent=4, ensure_ascii=False)
    js_content = f"""(function() {{
    const lang = "en";
    const data = {js_data};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(js_content)

def main():
    base_dir = "vocabulary/en"
    added_count = 0

    for word_entry in EXPANSION_WORDS:
        lvl = word_entry["level_code"]
        domain = word_entry["domain"]
        subcat = word_entry["subcategory"]
        domain_code = word_entry["domain_code"]

        domain_dir = os.path.join(base_dir, lvl, domain)
        os.makedirs(domain_dir, exist_ok=True)
        filepath = os.path.join(domain_dir, f"{subcat.replace(' ', '_')}.js")

        existing_data = parse_file_data(filepath) if os.path.exists(filepath) else []

        # Check for duplication
        if any(item.get("word") == word_entry["word"] for item in existing_data):
            continue

        idx = len(existing_data) + 1
        canonical_id = f"{lvl}-{domain_code}-{idx:02d}"

        new_item = {
            "id": canonical_id,
            "word": word_entry["word"],
            "form": word_entry["form"],
            "transcription": word_entry["transcription"],
            "definitions": word_entry["definitions"],
            "emoji": word_entry["emoji"],
            "lang": "en",
            "level": word_entry["level_code"].lower(),
            "level_code": word_entry["level_code"],
            "domain": domain,
            "subcategory": subcat
        }

        existing_data.append(new_item)
        existing_data.sort(key=lambda x: x.get("word", ""))

        # Re-assign sequential IDs
        for i, item in enumerate(existing_data, 1):
            item["id"] = f"{lvl}-{domain_code}-{i:02d}"

        write_file_data(filepath, existing_data)
        added_count += 1

    print(f"Successfully appended {added_count} new dictionary entries across domains.")

if __name__ == "__main__":
    main()
