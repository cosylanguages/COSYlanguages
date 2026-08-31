import json
import os

levels_stubs = {
    "A2": {
        "files": ["fluency.js", "locations.js", "opinions.js"],
        "index": ["locations.js"],
        "cefr": "elementary"
    },
    "B1": {
        "files": ["fluency.js", "locations.js", "opinions.js"],
        "index": ["locations.js"],
        "cefr": "intermediate"
    },
    "B2": {
        "files": ["fluency.js", "opinions.js"],
        "index": None,
        "cefr": "upper_intermediate"
    },
    "C1": {
        "files": ["fluency.js", "opinions.js"],
        "index": None,
        "cefr": "advanced"
    },
    "C2": {
        "files": ["adjectives.js", "fluency.js", "opinions.js", "verbs.js", "vocabulary.js"],
        "index": ["adjectives.js", "verbs.js", "vocabulary.js"],
        "cefr": "proficiency"
    }
}

for lvl, info in levels_stubs.items():
    lvl_dir = f"vocabulary/cv/{lvl}"
    os.makedirs(lvl_dir, exist_ok=True)
    cefr = info["cefr"]

    for fname in info["files"]:
        filepath = os.path.join(lvl_dir, fname)
        if fname == "fluency.js":
            content = f"""(function() {{
    const lang = "cv";
    const data = [
        {{
            "t": "Çулçӳрев тата каникул",
            "h": ["Ăçта пулнисем?", "Кемпе кайнисем?"],
            "level": "{cefr}",
            "theme": "travel",
            "lang": "cv",
            "form": "phrase",
            "transcription": "",
            "emoji": "💬",
            "definitions": [{{ "examples": [], "text": "Çулçӳрев тата каникул" }}],
            "id": "cv_{cefr}_travel_001",
            "word": "Çулçӳрев тата каникул"
        }}
    ];
    if (!window.speakingData) window.speakingData = {{}};
    if (!window.speakingData[lang]) window.speakingData[lang] = {{}};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
}})();
"""
        elif fname == "opinions.js":
            content = f"""(function() {{
    const lang = "cv";
    const data = [
        {{
            "t": "Ĕç тата кану пĕр-пĕринпе тан пулмалла.",
            "tag": "Daily life",
            "h": ["Мĕншĕн çакă пĕлтерĕшлĕ?", "Эсир мĕнле шутлатăр?"],
            "level": "{cefr}",
            "theme": "work",
            "lang": "cv",
            "form": "phrase",
            "transcription": "",
            "emoji": "💬",
            "definitions": [{{ "examples": [], "text": "Ĕç тата кану" }}],
            "id": "cv_{cefr}_work_001",
            "word": "Ĕç тата кану"
        }}
    ];
    if (!window.speakingData) window.speakingData = {{}};
    if (!window.speakingData[lang]) window.speakingData[lang] = {{}};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
}})();
"""
        elif fname == "locations.js":
            content = f"""// TODO: verify level classification
(function() {{
    const lang = "cv";
    const data = [
        {{
            "word": "Германия",
            "level": "{cefr}",
            "theme": "places",
            "lang": "cv",
            "form": "noun",
            "transcription": "",
            "emoji": "❓",
            "definitions": [{{ "text": "Германия", "examples": [] }}],
            "id": "cv_{cefr}_places_001"
        }}
    ];
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
        elif fname == "adjectives.js":
            content = f"""// TODO: verify level classification
(function() {{
    const lang = "cv";
    const data = [
        {{
            "word": "кăсăклăхлă",
            "level": "{cefr}",
            "theme": "describing",
            "emoji": "✨",
            "form": "adjective",
            "definitions": [{{ "text": "Питĕ кăсăклă, тарăн ăс пухнă:", "examples": [] }}],
            "lang": "cv",
            "transcription": "",
            "id": "cv_{cefr}_describing_001"
        }}
    ];
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
        elif fname == "verbs.js":
            content = f"""// TODO: verify level classification
(function() {{
    const lang = "cv";
    const data = [
        {{
            "word": "шухăшласа илме",
            "level": "{cefr}",
            "theme": "school",
            "emoji": "🧠",
            "form": "verb",
            "definitions": [{{ "text": "Тарăн шухăшпа ăнланса илни:", "examples": [] }}],
            "lang": "cv",
            "transcription": "",
            "id": "cv_{cefr}_school_001"
        }}
    ];
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
        elif fname == "vocabulary.js":
            content = f"""// TODO: verify level classification
(function() {{
    const lang = "cv";
    const data = [
        {{
            "word": "çут çанталăк",
            "level": "{cefr}",
            "theme": "nature",
            "emoji": "🌍",
            "form": "noun",
            "definitions": [{{ "text": "Пĕтĕм тавралăх, çут çанталăк:", "examples": [] }}],
            "lang": "cv",
            "transcription": "",
            "id": "cv_{cefr}_nature_001"
        }}
    ];
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

    if info["index"]:
        idx_path = os.path.join(lvl_dir, "index.json")
        with open(idx_path, "w", encoding="utf-8") as f:
            json.dump(info["index"], f, ensure_ascii=False, indent=2)

print("A2-C2 stub files created successfully.")
