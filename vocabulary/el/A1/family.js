(function() {
    const data = [
    {
        "word": "μαμά",
        "translation": "mom",
        "level": "starter",
        "theme": "family",
        "language": "el",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Η μητέρα.",
                "examples": [
                    "Η μαμά μου είναι καλή."
                ]
            }
        ],
        "transcription": "/maˈma/"
    },
    {
        "word": "μπαμπάς",
        "translation": "dad",
        "level": "starter",
        "theme": "family",
        "language": "el",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ο πατέρας.",
                "examples": [
                    "Ο μπαμπάς μου είναι στη δουλειά."
                ]
            }
        ],
        "transcription": "/baˈbas/"
    },
    {
        "word": "αδελφός",
        "translation": "brother",
        "level": "starter",
        "theme": "family",
        "language": "el",
        "emoji": "👦",
        "form": "noun",
        "definitions": [
            {
                "text": "Ο γιος των ίδιων γονιών.",
                "examples": [
                    "Έχω έναν αδελφό."
                ]
            }
        ],
        "transcription": "/a.ðelˈfos/"
    },
    {
        "word": "αδελφή",
        "translation": "sister",
        "level": "starter",
        "theme": "family",
        "language": "el",
        "emoji": "👧",
        "form": "noun",
        "definitions": [
            {
                "text": "Η κόρη των ίδιων γονιών.",
                "examples": [
                    "Η αδελφή μου πηγαίνει στο σχολείο."
                ]
            }
        ],
        "transcription": "/a.ðelˈfi/"
    },
    {
        "word": "οικογένεια",
        "translation": "family",
        "level": "starter",
        "theme": "family",
        "language": "el",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια ομάδα συγγενών.",
                "examples": [
                    "Έχουμε μεγάλη οικογένεια."
                ]
            }
        ],
        "transcription": "/i.koˈʝe.ni.a/"
    }
    ];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
