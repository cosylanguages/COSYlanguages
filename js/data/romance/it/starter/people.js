(function() {
    const data = [
    {
        "word": "Leonardo da Vinci",
        "transcription": "leoˈnardo da ˈvintʃi",
        "subtext": "artista e inventore",
        "definitions": [
            {
                "text": "Famoso artista italiano del Rinascimento.",
                "examples": [
                    "Leonardo ha dipinto la Gioconda."
                ]
            }
        ],
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "Leonardo da Vinci",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "Dante Alighieri",
        "transcription": "ˈdante aliˈɡjɛri",
        "subtext": "poeta e scrittore",
        "definitions": [
            {
                "text": "Il più grande poeta italiano, autore della Divina Commedia.",
                "examples": [
                    "Dante è il padre della lingua italiana."
                ]
            }
        ],
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "Dante Alighieri",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "👨‍🔬",
        "definitions": [
            {
                "text": "Un famosissimo scienziato tedesco che visse negli USA.",
                "examples": [
                    "Albert Einstein era un uomo molto intelligente."
                ]
            }
        ],
        "subtext": "famoso scienziato",
        "transcription": "ˈalbert ˈainstain",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "countability": "countable",
        "partitive": "dell'",
        "plural": "Albert Einstein",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Una famosa cantante e cantautrice americana.",
                "examples": [
                    "Taylor Swift ha molte canzoni popolari."
                ]
            }
        ],
        "subtext": "famosa cantante",
        "transcription": "ˈteilor ˈswift",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "countable",
        "partitive": "della",
        "plural": "Taylor Swift",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Un famoso calciatore portoghese.",
                "examples": [
                    "Cristiano Ronaldo è un atleta molto veloce."
                ]
            }
        ],
        "subtext": "famoso atleta",
        "transcription": "krisˈtjano roˈnaldo",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "Cristiano Ronaldo",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Un famoso calciatore argentino.",
                "examples": [
                    "Lionel Messi gioca in una squadra negli USA ora."
                ]
            }
        ],
        "subtext": "famoso atleta",
        "transcription": "ljoˈnɛl ˈmessi",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "Lionel Messi",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Una famosa cantante e ballerina americana.",
                "examples": [
                    "Beyoncé è un'artista di grande successo."
                ]
            }
        ],
        "subtext": "famosa cantante",
        "transcription": "biˈonse",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "countable",
        "partitive": "della",
        "plural": "Beyoncé",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🚀",
        "definitions": [
            {
                "text": "Un famoso uomo d'affari che costruisce auto elettriche e razzi.",
                "examples": [
                    "Elon Musk è il capo di Tesla e SpaceX."
                ]
            }
        ],
        "subtext": "famoso uomo d'affari",
        "transcription": "ˈilon ˈmask",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "countability": "countable",
        "partitive": "dell'",
        "plural": "Elon Musk",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "Regina Elisabetta II",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "👑",
        "definitions": [
            {
                "text": "La famosa regina del Regno Unito per un tempo lunghissimo.",
                "examples": [
                    "La Regina Elisabetta II viveva a Buckingham Palace."
                ]
            }
        ],
        "subtext": "famosa regina",
        "transcription": "reˈdʒina elizaˈbetta seˈkonda",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "countable",
        "partitive": "della",
        "plural": "Regine Elisabetta II",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🧪",
        "definitions": [
            {
                "text": "Una famosa scienziata polacca e francese che studiò le radiazioni.",
                "examples": [
                    "Marie Curie fu la prima donna a vincere un Premio Nobel."
                ]
            }
        ],
        "subtext": "famosa scienziata",
        "transcription": "maˈri kyˈri",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "countable",
        "partitive": "della",
        "plural": "Marie Curie",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🇿🇦",
        "definitions": [
            {
                "text": "Un famoso leader sudafricano che lottò per la pace e l'uguaglianza.",
                "examples": [
                    "Nelson Mandela è stato il primo presidente nero del Sudafrica."
                ]
            }
        ],
        "subtext": "famoso leader",
        "transcription": "ˈnelson manˈdela",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "Nelson Mandela",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "✍️",
        "definitions": [
            {
                "text": "Un famoso scrittore inglese che scrisse molte opere teatrali e poesie.",
                "examples": [
                    "William Shakespeare scrisse Romeo e Giulietta."
                ]
            }
        ],
        "subtext": "famoso scrittore",
        "transcription": "ˈwilljam ˈʃekspir",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "plural": "William Shakespeare",
        "antonyms": [],
        "synonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    }
];

    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
})();