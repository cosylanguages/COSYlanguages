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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Dante Alighieri",
        "transcription": "ˈdante aliˈɡjɛːri",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Michelangelo Buonarroti",
        "transcription": "mikelˈandʒelo bwɔnarˈrɔːti",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Galileo Galilei",
        "transcription": "ɡaliˈlɛːo ɡaliˈlɛːi",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Cristoforo Colombo",
        "transcription": "kriˈstɔːforo koˈlombo",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Marco Polo",
        "transcription": "ˈmarko ˈpɔːlo",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Luciano Pavarotti",
        "transcription": "luˈtʃaːno pavaˈrɔtːi",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Federico Fellini",
        "transcription": "fedeˈriːko felˈliːni",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Enzo Ferrari",
        "transcription": "ˈɛntso ferˈraːri",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Sophia Loren",
        "transcription": "soˈfiːa ˈlɔːren",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    },
    {
        "word": "Guglielmo Marconi",
        "transcription": "ɡuʎˈʎɛlmo marˈkoːni",
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
        "theme": "personal_identity_A1",
        "form": "noun",
        "synonyms": []
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();