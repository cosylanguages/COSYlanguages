(function() {
    const data = [
    {
        "word": "interdisciplinary",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧪",
        "form": "adjective"
    },
    {
        "word": "hermeneutic",
        "level": "proficiency",
        "theme": "philosophy_language_C2",
        "emoji": "📜",
        "form": "adjective",
        "transcription": "ˌhɜːmɪˈnjuːtɪk",
        "definitions": [
            {
                "text": "Relating to the interpretation of texts or meaning.",
                "examples": [
                    "He took a hermeneutic approach to analysing political speeches."
                ]
            }
        ],
        "subtext": "textual interpretation"
    },
    {
        "word": "tautological",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🔄",
        "form": "adjective",
        "transcription": "ˌtɔːtəˈlɒdʒɪkl",
        "definitions": [
            {
                "text": "Saying the same thing twice in different words; circular in reasoning.",
                "examples": [
                    "The argument is tautological: it assumes what it sets out to prove."
                ]
            }
        ],
        "subtext": "circular reasoning"
    },
    {
        "word": "polysemous",
        "level": "proficiency",
        "theme": "linguistics_theory_C2",
        "emoji": "🔠",
        "form": "adjective",
        "transcription": "ˌpɒliˈsiːməs",
        "definitions": [
            {
                "text": "Having multiple meanings.",
                "examples": [
                    "The word 'freedom' is deeply polysemous in political discourse."
                ]
            }
        ],
        "subtext": "multiple meanings"
    },
    {
        "word": "heuristic",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "💡",
        "form": "adjective",
        "transcription": "hjuˈrɪstɪk",
        "definitions": [
            {
                "text": "A problem-solving approach based on experience rather than guaranteed proof.",
                "examples": [
                    "They employed a heuristic approach to find a solution that was good enough for their needs."
                ]
            }
        ],
        "subtext": "experience-based"
    },
    {
        "word": "post-colonial",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌍",
        "form": "adjective",
        "transcription": "ˌpəʊstkəˈləʊniəl",
        "definitions": [
            {
                "text": "Relating to the period after colonial rule, or to the critique of colonial legacies.",
                "examples": [
                    "Post-colonial theory questions Western assumptions about progress."
                ]
            }
        ],
        "subtext": "after colonial rule"
    },
    {
        "word": "multipolar",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌐",
        "form": "adjective",
        "transcription": "ˌmʌltiˈpəʊlər",
        "definitions": [
            {
                "text": "Describing a world order with several centres of power rather than one or two.",
                "examples": [
                    "A multipolar world may be more unstable but more representative."
                ]
            }
        ],
        "subtext": "multiple power centers"
    },
    {
        "word": "cosmopolitan",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🏙️",
        "form": "adjective",
        "transcription": "ˌkɒzməˈpɒlɪtən",
        "definitions": [
            {
                "text": "Familiar with and at ease in many different countries and cultures; or relating to cosmopolitanism.",
                "examples": [
                    "She held a cosmopolitan view of political obligation."
                ]
            }
        ],
        "subtext": "world-citizen perspective"
    },
    {
        "word": "narcissistic",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious_C2",
        "emoji": "🪞",
        "form": "adjective",
        "transcription": "ˌnɑːrsɪˈsɪstɪk",
        "definitions": [
            {
                "text": "Having excessive interest in oneself and one's appearance or achievements.",
                "examples": [
                    "Some critics describe celebrity culture as narcissistic."
                ]
            }
        ],
        "subtext": "self-obsessed"
    },
    {
        "word": "heterodox",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🚩",
        "form": "adjective",
        "transcription": "ˈhetərədɒks",
        "definitions": [
            {
                "text": "Contrary to established or accepted beliefs or doctrine.",
                "examples": [
                    "Her heterodox economic views were not popular in mainstream academia."
                ]
            }
        ],
        "subtext": "unconventional"
    },
    {
        "word": "immanent",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "⚛️",
        "form": "adjective",
        "transcription": "ˈɪmənənt",
        "definitions": [
            {
                "text": "Existing or operating within something; not transcendent.",
                "examples": [
                    "For Spinoza, God is immanent in nature, not external to it."
                ]
            }
        ],
        "subtext": "internal/inherent"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
