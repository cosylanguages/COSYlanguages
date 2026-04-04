import re
import json

def append_to_js_array(filepath, new_entries):
    with open(filepath, 'r') as f:
        content = f.read()

    match = re.search(r'const data = \[(.*)\];', content, re.DOTALL)
    if not match:
        print(f"Could not find data array in {filepath}")
        return

    array_content = match.group(1).strip()

    formatted_entries = []
    for entry in new_entries:
        formatted_entries.append(json.dumps(entry, indent=8))

    joined_entries = ",\n\n" + ",\n\n".join(formatted_entries)

    # Insert before the last closing bracket of the array
    new_array_content = array_content + joined_entries

    new_content = content.replace(match.group(1), new_array_content)

    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Appended {len(new_entries)} entries to {filepath}")

# Vocabulary additions
new_vocab = [
    {
        "word": "nurse",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "nurses",
        "transcription": "[nɜːs]",
        "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "A person whose job is to care for people who are ill or injured, especially in a hospital.", "examples": ["The nurse gave him some medicine."]}],
        "countability": "countable",
        "subtext": "hospital nurse, school nurse"
    },
    {
        "word": "engineer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍💻",
        "form": "noun",
        "plural": "engineers",
        "transcription": "[ˌendʒɪˈnɪə(r)]",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "A person whose job involves designing and building machines, systems, or structures.", "examples": ["He is a software engineer."]}],
        "countability": "countable",
        "subtext": "civil engineer, electrical engineer"
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "transcription": "[ʃef]",
        "image": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "A skilled and trained cook who works in a hotel or restaurant.", "examples": ["The chef prepared a delicious meal."]}],
        "countability": "countable",
        "subtext": "head chef, pastry chef"
    },
    {
        "word": "grapes",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🍇",
        "form": "noun",
        "plural": "grapes",
        "transcription": "[ɡreɪps]",
        "image": "https://images.unsplash.com/photo-1537084642907-629340c7e59c?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "Small round green or purple fruits that grow in bunches.", "examples": ["I love eating sweet grapes."]}],
        "countability": "countable",
        "subtext": "a bunch of grapes"
    },
    {
        "word": "corn",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🌽",
        "form": "noun",
        "plural": None,
        "transcription": "[kɔːn]",
        "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "A tall plant that produces yellow seeds eaten as a vegetable.", "examples": ["We had grilled corn for dinner."]}],
        "countability": "uncountable",
        "subtext": "sweet corn"
    }
]

# Verb additions
new_verbs = [
    {
        "word": "explain",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "[ɪkˈspleɪn]",
        "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To make something clear or easy to understand by describing or giving information about it.", "examples": ["Can you explain this rule?", "The teacher explained the lesson."]}],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone"
    },
    {
        "word": "prepare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📝",
        "form": "verb",
        "transcription": "[prɪˈpeə(r)]",
        "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To get someone or something ready for something that will happen in the future.", "examples": ["I need to prepare for my exam.", "She is preparing dinner."]}],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something"
    },
    {
        "word": "depend",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "[dɪˈpend]",
        "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To be decided by or to change according to something else.", "examples": ["It depends on the weather.", "Our plans depend on your answer."]}],
        "v2": "depended",
        "v3": "depended",
        "classification": "regular",
        "group": "regular",
        "subtext": "depend ON someone/something"
    },
    {
        "word": "belong",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏠",
        "form": "verb",
        "transcription": "[bɪˈlɒŋ]",
        "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To be the property of someone.", "examples": ["This book belongs to me.", "Who does this bag belong to?"]}],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something"
    }
]

# Adjective additions
new_adjs = [
    {
        "word": "useful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "transcription": "[ˈjuːsfl]",
        "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "Helping you to do or achieve something.", "examples": ["This is a very useful book.", "The internet is useful for studying."]}],
        "comparative": "more useful",
        "superlative": "the most useful",
        "subtext": "very useful, useful information"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "impossible",
        "transcription": "[ˈpɒsəbl]",
        "image": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "Able to be done or achieved.", "examples": ["Is it possible to come tomorrow?", "Everything is possible if you try."]}],
        "comparative": "more possible",
        "superlative": "the most possible",
        "subtext": "as soon as possible, if possible"
    }
]

append_to_js_array('js/data/germanic/en/starter/vocabulary.js', new_vocab)
append_to_js_array('js/data/germanic/en/starter/verbs.js', new_verbs)
append_to_js_array('js/data/germanic/en/starter/adjectives.js', new_adjs)
