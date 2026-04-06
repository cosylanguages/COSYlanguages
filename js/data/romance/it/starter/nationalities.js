(function() {
    const data = [
    {
        "word": "italiano",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇮🇹",
        "form": "adjective",
        "transcription": "itaˈljano",
        "feminine": "italiana",
        "plural": "italiani",
        "femininePlural": "italiane",
        "definitions": [
            {
                "text": "Dell'Italia o relativo all'Italia.",
                "examples": [
                    "Lui è italiano.",
                    "Amo la cucina italiana."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "francese",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇫🇷",
        "form": "adjective",
        "transcription": "franˈtʃeze",
        "feminine": "francese",
        "plural": "francesi",
        "femininePlural": "francesi",
        "definitions": [
            {
                "text": "Della Francia o relativo alla Francia.",
                "examples": [
                    "Lei è francese.",
                    "Parlo un po' di francese."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "inglese",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇬🇧",
        "form": "adjective",
        "transcription": "iŋˈɡleze",
        "feminine": "inglese",
        "plural": "inglesi",
        "femininePlural": "inglesi",
        "definitions": [
            {
                "text": "Dell'Inghilterra o relativo all'Inghilterra o alla lingua inglese.",
                "examples": [
                    "Lui è inglese.",
                    "Studio la lingua inglese."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "americano",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇺🇸",
        "form": "adjective",
        "transcription": "ameriˈkano",
        "feminine": "americana",
        "plural": "americani",
        "femininePlural": "americane",
        "definitions": [
            {
                "text": "Degli Stati Uniti d'America o relativo ad essi.",
                "examples": [
                    "È un film americano.",
                    "Lei è americana."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "spagnolo",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇪🇸",
        "form": "adjective",
        "transcription": "spaɲˈɲɔlo",
        "feminine": "spagnola",
        "plural": "spagnoli",
        "femininePlural": "spagnole",
        "definitions": [
            {
                "text": "Della Spagna o relativo alla Spagna.",
                "examples": [
                    "Loro sono spagnoli.",
                    "Mi piace la musica spagnola."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "tedesco",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇩🇪",
        "form": "adjective",
        "transcription": "teˈdesko",
        "feminine": "tedesca",
        "plural": "tedeschi",
        "femininePlural": "tedesche",
        "definitions": [
            {
                "text": "Della Germania o relativo alla Germania.",
                "examples": [
                    "Lui è tedesco.",
                    "Le auto tedesche sono famose."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "cinese",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇨🇳",
        "form": "adjective",
        "transcription": "tʃiˈneze",
        "feminine": "cinese",
        "plural": "cinesi",
        "femininePlural": "cinesi",
        "definitions": [
            {
                "text": "Della Cina o relativo alla Cina.",
                "examples": [
                    "Lei è cinese.",
                    "La storia cinese è molto antica."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "giapponese",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇯🇵",
        "form": "adjective",
        "transcription": "dʒappoˈneze",
        "feminine": "giapponese",
        "plural": "giapponesi",
        "femininePlural": "giapponesi",
        "definitions": [
            {
                "text": "Del Giappone o relativo al Giappone.",
                "examples": [
                    "Lui è giapponese.",
                    "La tecnologia giapponese è ottima."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "russo",
        "level": "starter",
        "theme": "nationality_country_A1",
        "emoji": "🇷🇺",
        "form": "adjective",
        "transcription": "ˈrusso",
        "feminine": "russa",
        "plural": "russi",
        "femininePlural": "russe",
        "definitions": [
            {
                "text": "Della Russia o relativo alla Russia.",
                "examples": [
                    "È uno scrittore russo.",
                    "Siamo russi."
                ]
            }
        ],
        "subtext": "nazionalità",
        "opposite": "straniero"
    },
    {
        "word": "nazionalità",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "nazionalità",
        "transcription": "natsjonaliˈta",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Appartenenza di una persona a una nazione.",
                "examples": [
                    "Qual è la tua nazionalità?",
                    "Ha la doppia nazionalità."
                ]
            }
        ],
        "subtext": "nazionalità italiana, doppia nazionalità"
    }
];

    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === "adjective")];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();