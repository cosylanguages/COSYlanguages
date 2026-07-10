// TODO: verify level classification
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
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_001",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Dante Alighieri",
        "transcription": "ˈdante aliˈɡjɛri",
        "subtext": "poeta",
        "definitions": [
            {
                "text": "Il sommo poeta italiano.",
                "examples": [
                    "Dante ha scritto la Divina Commedia."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_002",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Michelangelo Buonarroti",
        "transcription": "mikelˈandʒelo bwɔnarˈrɔti",
        "subtext": "scultore e pittore",
        "definitions": [
            {
                "text": "Grande artista del Rinascimento.",
                "examples": [
                    "Michelangelo ha scolpito il David."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_003",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Galileo Galilei",
        "transcription": "ɡaliˈlɛo ɡaliˈlɛi",
        "subtext": "scienziato",
        "definitions": [
            {
                "text": "Il padre della scienza moderna.",
                "examples": [
                    "Galileo osservava le stelle."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_004",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Cristoforo Colombo",
        "transcription": "kriˈstɔforo koˈlombo",
        "subtext": "esploratore",
        "definitions": [
            {
                "text": "Esploratore che ha scoperto l'America.",
                "examples": [
                    "Cristoforo Colombo è nato a Genova."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_005",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Marco Polo",
        "transcription": "ˈmarko ˈpɔlo",
        "subtext": "viaggiatore",
        "definitions": [
            {
                "text": "Viaggiatore veneziano che andò in Cina.",
                "examples": [
                    "Il Milione parla dei viaggi di Marco Polo."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_006",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Luciano Pavarotti",
        "transcription": "luˈtʃano pavaˈrɔti",
        "subtext": "tenore",
        "definitions": [
            {
                "text": "Uno dei più grandi tenori del mondo.",
                "examples": [
                    "Pavarotti era molto famoso."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_007",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Federico Fellini",
        "transcription": "fedeˈriko felˈlini",
        "subtext": "regista",
        "definitions": [
            {
                "text": "Famoso regista cinematografico italiano.",
                "examples": [
                    "Fellini ha vinto molti premi."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_008",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Enzo Ferrari",
        "transcription": "ˈɛntso ferˈrari",
        "subtext": "imprenditore",
        "definitions": [
            {
                "text": "Fondatore della casa automobilistica Ferrari.",
                "examples": [
                    "Ferrari amava le auto veloci."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_009",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Sophia Loren",
        "transcription": "soˈfia ˈlɔren",
        "subtext": "attrice",
        "definitions": [
            {
                "text": "Icona del cinema italiano nel mondo.",
                "examples": [
                    "Sophia Loren è un'attrice premiata."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_010",
        "lang": "it",
        "emoji": "✨"
    },
    {
        "word": "Guglielmo Marconi",
        "transcription": "ɡuʎˈʎɛlmo marˈkoni",
        "subtext": "inventore",
        "definitions": [
            {
                "text": "Inventore della radio.",
                "examples": [
                    "Marconi ha vinto il premio Nobel."
                ]
            }
        ],
        "level": "starter",
        "theme": "people",
        "form": "noun",
        "id": "it_starter_people_011",
        "lang": "it",
        "emoji": "✨"
    }
]
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();