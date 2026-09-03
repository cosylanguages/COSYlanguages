import sys
import os
import glob
import json
import re
import subprocess
import shutil

# ---------------------------------------------------------------------------
# Master Taxonomy Definition
# ---------------------------------------------------------------------------
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

# ---------------------------------------------------------------------------
# Load existing C1 entries from disk using Node.js context
# ---------------------------------------------------------------------------
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
print(f"Initial unique C1 words count: {len(seen_words)}")

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

print(f"Initialized {len(dataset_buckets)} dataset buckets with existing C1 items.")

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

print("Comprehensive generator template compiled successfully.")
