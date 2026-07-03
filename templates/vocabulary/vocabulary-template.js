(function() {
    const lang = 'xx'; // ISO 639-1 code (e.g., 'en', 'fr', 'ru')
    const data = [
        {
            "id": "xx_level_theme_001",
            "word": "word",
            "lang": "xx",
            "level": "level", // starter | elementary | intermediate | upper_intermediate | advanced | proficiency
            "theme": "theme", // from THEMES.md
            "form": "pos", // noun | verb | adjective | adverb | phrase | other
            "definitions": [
                {
                    "text": "A clear definition in the target language adapted to the CEFR level.",
                    "examples": [
                        "An example sentence in the target language illustrating usage."
                    ]
                }
            ],
            "transcription": "ipa_transcription",
            "emoji": "✨",
            "grammar_refs": [
                {
                    "layer": "morphology", // morphology | syntax | phonology | particles
                    "category": "verbs", // verbs | nouns | adjectives | etc.
                    "group_id": "grammar_group_id"
                }
            ],
            // Optional Fields
            "sub_theme": null,
            "synonyms": ["synonym1", "synonym2"],
            "antonyms": ["antonym1"],
            "collocations": ["common collocation 1", "common collocation 2"],
            "subtext": "Usage note or cultural context.",
            "etymology": {
                "origin_lang": "Language", // Required if etymology object is present
                "origin_word": "original_word",
                "origin_meaning": "original meaning",
                "entered_via": "Intermediate Language",
                "notes": "Any additional historical notes."
            }
        }
    ];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];

    // For specialized speaking files (debates.js, opinions.js, etc.) use:
    // window.speakingData = window.speakingData || {};
    // window.speakingData[lang] = [...(window.speakingData[lang] || []), ...data];
})();
