// TODO: verify level classification
(function() {
    const lang = "it";
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_001"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_002"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_003"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_004"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_005"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_006"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_007"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_008"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_009"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_010"
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
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_people_011"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
