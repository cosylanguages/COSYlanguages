(function() {
    const data = [
        {
                "word": "ich",
                "level": "starter",
                "theme": "people",
                "emoji": "🙋",
                "form": "pronoun",
                "definitions": [
                        {
                                "text": "Erste Person Singular.",
                                "examples": [
                                        "Ich bin Student."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_003"
        },
        {
                "word": "du",
                "level": "starter",
                "theme": "people",
                "emoji": "🫵",
                "form": "pronoun",
                "definitions": [
                        {
                                "text": "Zweite Person Singular.",
                                "examples": [
                                        "Wie geht es dir?"
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_004"
        },
        {
                "word": "er",
                "level": "starter",
                "theme": "people",
                "emoji": "👨",
                "form": "pronoun",
                "definitions": [
                        {
                                "text": "Dritte Person Singular (maskulin).",
                                "examples": [
                                        "Er ist mein Bruder."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_005"
        },
        {
                "word": "sie",
                "level": "starter",
                "theme": "people",
                "emoji": "👩",
                "form": "pronoun",
                "definitions": [
                        {
                                "text": "Dritte Person Singular (feminin).",
                                "examples": [
                                        "Sie ist meine Schwester."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_006"
        },
        {
                "word": "wir",
                "level": "starter",
                "theme": "people",
                "emoji": "👥",
                "form": "pronoun",
                "definitions": [
                        {
                                "text": "Erste Person Plural.",
                                "examples": [
                                        "Wir sind Freunde."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_007"
        },
        {
                "word": "mein",
                "level": "starter",
                "theme": "people",
                "emoji": "🙋",
                "form": "determiner",
                "definitions": [
                        {
                                "text": "Zeigt Besitz an (ich).",
                                "examples": [
                                        "Mein Name ist Hans."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_008"
        },
        {
                "word": "dein",
                "level": "starter",
                "theme": "people",
                "emoji": "🫵",
                "form": "determiner",
                "definitions": [
                        {
                                "text": "Zeigt Besitz an (du).",
                                "examples": [
                                        "Ist das dein Telefon?"
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_people_009"
        },
        {
                "word": "immer",
                "level": "starter",
                "theme": "language",
                "emoji": "🔄",
                "form": "adverb",
                "definitions": [
                        {
                                "text": "Zu jeder Zeit.",
                                "examples": [
                                        "Ich trinke immer Kaffee."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_language_008"
        },
        {
                "word": "nie",
                "level": "starter",
                "theme": "language",
                "emoji": "❌",
                "form": "adverb",
                "definitions": [
                        {
                                "text": "Zu keiner Zeit.",
                                "examples": [
                                        "Ich komme nie zu spät."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_language_009"
        },
        {
                "word": "und",
                "level": "starter",
                "theme": "language",
                "emoji": "➕",
                "form": "conjunction",
                "definitions": [
                        {
                                "text": "Verbindet Wörter oder Sätze.",
                                "examples": [
                                        "Kaffee und Tee."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_language_010"
        },
        {
                "word": "aber",
                "level": "starter",
                "theme": "language",
                "emoji": "❓",
                "form": "conjunction",
                "definitions": [
                        {
                                "text": "Zeigt einen Gegensatz an.",
                                "examples": [
                                        "Ich mag Kaffee, aber keine Milch."
                                ]
                        }
                ],
                "lang": "de",
                "sub_theme": null,
                "id": "de_starter_language_011"
        }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
