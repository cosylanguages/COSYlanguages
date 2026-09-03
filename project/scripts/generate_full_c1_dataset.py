import sys
import os
import glob
import json
import re
import subprocess
import shutil

# Master Taxonomy Configuration
TAXONOMY = {
    "LAW": {
        "code": "LAW",
        "subcategories": {
            "Legal_System": ["General_Law", "Judicial_Process", "Jurisprudence"],
            "Contracts": ["Contractual_Terms", "Liability_Obligations"],
            "Constitutional_Law": ["Rights_Governance", "Legislation"]
        }
    },
    "PHILOSOPHY": {
        "code": "PHI",
        "subcategories": {
            "Ethics": ["Ethical_Theories", "Moral_Philosophy"],
            "Metaphysics": ["Ontology", "Existentialism"],
            "Logic": ["Formal_Logic", "Argumentation"]
        }
    },
    "EPISTEMOLOGY": {
        "code": "EPI",
        "subcategories": {
            "Knowledge_Theory": ["Epistemic_Analysis", "Cognition_Truth", "Skepticism_Belief"],
            "Scientific_Method": ["Empiricism", "Hypothesis_Testing"]
        }
    },
    "DISCOURSE": {
        "code": "DIS",
        "subcategories": {
            "Advanced_Register": ["Rhetorical_Register", "Academic_Discourse"],
            "Rhetoric": ["Persuasive_Devices", "Stylistic_Analysis"],
            "Linguistics": ["Semantics_Pragmatics", "Syntax_Discourse"]
        }
    },
    "Science": {
        "code": "SCI",
        "subcategories": {
            "Research_Methodology": ["Experimental_Design", "Data_Analysis"],
            "Theoretical_Science": ["Physics_Astronomy", "Biology_Genetics", "Chemistry_Materials"],
            "Technology_AI": ["Computing_Algorithms", "Emerging_Tech"]
        }
    },
    "Society": {
        "code": "SOC",
        "subcategories": {
            "Work": ["Employment_Business", "Corporate_Culture", "Economics_Finance"],
            "Governance": ["Political_Systems", "Public_Policy"],
            "Culture_Media": ["Sociology_Media", "Cultural_Critique"]
        }
    },
    "People": {
        "code": "PEO",
        "subcategories": {
            "Emotions": ["Emotional_States", "Psychological_Traits"],
            "Identity": ["Individual_Traits", "Social_Behavior"],
            "Cognition": ["Intellectual_Capacity", "Perception"]
        }
    }
}

POS_CODE_MAP = {
    "Adjectives": "ADJ",
    "Nouns": "NOUN",
    "Verbs": "VERB",
    "Other_POS": "OTH"
}

# Load seed dictionary
from c1_lexicon_dictionary import C1_DICTIONARY

# Read existing C1 items from disk using Node.js context
out_c1 = subprocess.check_output(['node', '-e', '''
const fs = require("fs");
const path = require("path");
function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) results = results.concat(walk(fullPath));
        else if (file.endsWith(".js") && file !== "idioms.js") results.push(fullPath);
    });
    return results;
}
let c1Entries = [];
walk("vocabulary/en/C1").forEach(f => {
    let window = { vocabularyData: {} };
    eval(fs.readFileSync(f, "utf8"));
    (window.vocabularyData.en || []).forEach(e => {
        c1Entries.push({file: f, entry: e});
    });
});
console.log(JSON.stringify(c1Entries));
'''])

existing_c1_items = json.loads(out_c1)
print(f"Loaded {len(existing_c1_items)} existing C1 items from disk.")

# Unique words tracker across C1
seen_words = set(e['entry']['word'].lower().strip() for e in existing_c1_items)

# Bucket storage for entries: key = (pos_section, domain, subcategory, sub_subcategory)
dataset_buckets = {}

for item in existing_c1_items:
    e = item['entry']
    pos = e.get('pos_section', 'Nouns')
    dom = e.get('domain', 'LAW')
    sub = e.get('subcategory', 'Legal_System')
    subsub = e.get('sub_subcategory', 'General_Law')

    # Fix bad IDs in existing items if any
    if e['word'].lower() == 'epistemological':
        pos, dom, sub, subsub = "Adjectives", "EPISTEMOLOGY", "Knowledge_Theory", "Epistemic_Analysis"
    elif e['word'].lower() == 'jurisdiction':
        pos, dom, sub, subsub = "Nouns", "LAW", "Legal_System", "General_Law"

    # Standardize metadata fields
    e['level'] = 'advanced'
    e['level_code'] = 'C1'
    e['lang'] = 'en'
    e['domain'] = dom
    e['subcategory'] = sub
    e['pos_section'] = pos
    e['sub_subcategory'] = subsub

    key = (pos, dom, sub, subsub)
    if key not in dataset_buckets:
        dataset_buckets[key] = []
    dataset_buckets[key].append(e)

def add_new_entry(word, form, domain, subcategory, sub_subcategory, ipa, emoji, subtext, definition, example, synonyms=None, antonyms=None):
    w_clean = word.lower().strip()
    if w_clean in seen_words:
        return
    seen_words.add(w_clean)

    f_low = form.lower()
    if "noun" in f_low:
        pos_section = "Nouns"
    elif "verb" in f_low:
        pos_section = "Verbs"
    elif "adjective" in f_low:
        pos_section = "Adjectives"
    else:
        pos_section = "Other_POS"

    entry = {
        "word": word,
        "form": form,
        "transcription": ipa,
        "emoji": emoji,
        "subtext": subtext,
        "definitions": [{
            "text": definition,
            "examples": [example]
        }],
        "synonyms": synonyms or [],
        "antonyms": antonyms or [],
        "lang": "en",
        "level": "advanced",
        "level_code": "C1",
        "domain": domain,
        "subcategory": subcategory,
        "pos_section": pos_section,
        "sub_subcategory": sub_subcategory
    }

    if pos_section == "Verbs":
        entry["classification"] = "regular"
        entry["aspect"] = "action"
        entry["group"] = "regular"
        entry["auxiliary"] = "have"

    key = (pos_section, domain, subcategory, sub_subcategory)
    if key not in dataset_buckets:
        dataset_buckets[key] = []
    dataset_buckets[key].append(entry)

# Populate curated C1 entries
for item in C1_DICTIONARY:
    add_new_entry(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8], item[9], item[10], item[11])

print(f"Total C1 entries in memory: {len(seen_words)}")

# Re-assign sequential IDs and write JS files
c1_base_dir = "vocabulary/en/C1"
for root, dirs, files in os.walk(c1_base_dir, topdown=False):
    for f in files:
        if f.endswith(".js") and f != "idioms.js":
            os.remove(os.path.join(root, f))

total_written = 0
files_count = 0

for (pos, dom, sub, subsub), entries in dataset_buckets.items():
    dom_code = TAXONOMY[dom]["code"]
    pos_code = POS_CODE_MAP[pos]

    for idx, e in enumerate(entries, start=1):
        num_str = f"{idx:03d}"
        e["id"] = f"C1-{pos_code}-{dom_code}-{num_str}"
        e["legacy_id"] = f"C1-{dom_code}-{idx:02d}"

    out_dir = os.path.join(c1_base_dir, pos, dom, sub)
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, f"{subsub}.js")

    js_content = f"""(function() {{
    const lang = "en";
    const data = {json.dumps(entries, indent=4)};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_content)

    total_written += len(entries)
    files_count += 1

print(f"Successfully generated {total_written} entries across {files_count} JS files!")
