(function() {
    const data = [
        {
            "word": "italiano",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇮🇹",
            "form": "adjective",
            "transcription": "itaˈljano",
            "definitions": [
                {
                    "text": "Proveniente dall'Italia o relativo ad essa.",
                    "examples": [
                        "Siamo italiani.",
                        "Mi piace la pizza italiana."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "italiana",
            "plural": "italiani",
            "femininePlural": "italiane"
        },
        {
            "word": "inglese",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇬🇧",
            "form": "adjective",
            "transcription": "iŋˈɡleze",
            "definitions": [
                {
                    "text": "Proveniente dall'Inghilterra o relativo ad essa.",
                    "examples": [
                        "Lui è inglese.",
                        "Studio la lingua inglese."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "inglese",
            "plural": "inglesi",
            "femininePlural": "inglesi"
        },
        {
            "word": "francese",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇫🇷",
            "form": "adjective",
            "transcription": "franˈtʃeze",
            "definitions": [
                {
                    "text": "Proveniente dalla Francia o relativo ad essa.",
                    "examples": [
                        "Lei è francese.",
                        "Amo il formaggio francese."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "francese",
            "plural": "francesi",
            "femininePlural": "francesi"
        },
        {
            "word": "spagnolo",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇪🇸",
            "form": "adjective",
            "transcription": "spaɲˈɲɔlo",
            "definitions": [
                {
                    "text": "Proveniente dalla Spagna o relativo ad essa.",
                    "examples": [
                        "Sono spagnoli.",
                        "Parli spagnolo?"
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "spagnola",
            "plural": "spagnoli",
            "femininePlural": "spagnole"
        },
        {
            "word": "tedesco",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇩🇪",
            "form": "adjective",
            "transcription": "teˈdesko",
            "definitions": [
                {
                    "text": "Proveniente dalla Germania o relativo ad essa.",
                    "examples": [
                        "È un auto tedesca.",
                        "Mio nonno è tedesco."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "tedesca",
            "plural": "tedeschi",
            "femininePlural": "tedesche"
        },
        {
            "word": "americano",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇺🇸",
            "form": "adjective",
            "transcription": "ameriˈkano",
            "definitions": [
                {
                    "text": "Proveniente dagli Stati Uniti d'America o relativo ad essi.",
                    "examples": [
                        "Film americani.",
                        "Lei è americana."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "americana",
            "plural": "americani",
            "femininePlural": "americane"
        },
        {
            "word": "russo",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇷🇺",
            "form": "adjective",
            "transcription": "ˈrusso",
            "definitions": [
                {
                    "text": "Proveniente dalla Russia o relativo ad essa.",
                    "examples": [
                        "Letteratura russa.",
                        "Lui è russo."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "russa",
            "plural": "russi",
            "femininePlural": "russe"
        },
        {
            "word": "cinese",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇨🇳",
            "form": "adjective",
            "transcription": "tʃiˈneze",
            "definitions": [
                {
                    "text": "Proveniente dalla Cina o relativo ad essa.",
                    "examples": [
                        "Cibo cinese.",
                        "Lei parla cinese."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "cinese",
            "plural": "cinesi",
            "femininePlural": "cinesi"
        },
        {
            "word": "giapponese",
            "level": "starter",
            "theme": "nationality_country_A1",
            "emoji": "🇯🇵",
            "form": "adjective",
            "transcription": "dʒappoˈneze",
            "definitions": [
                {
                    "text": "Proveniente dal Giappone o relativo ad esso.",
                    "examples": [
                        "Tecnologia giapponese.",
                        "Lui è giapponese."
                    ]
                }
            ],
            "subtext": "nazionalità",
            "feminine": "giapponese",
            "plural": "giapponesi",
            "femininePlural": "giapponesi"
        }
    ];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === 'adjective')];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
