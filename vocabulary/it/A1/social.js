(function() {
    const lang = "it";
    const data = [
    {
        "word": "esercizio",
        "level": "starter",
        "theme": "social",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "esercizi",
        "definitions": [
            {
                "text": "Attività fisica che ti mantiene in forma e in salute.",
                "examples": [
                    "Faccio esercizio tre volte a settimana."
                ]
            }
        ],
        "gender": "masculine",
        "partitive": "dell'",
        "transcription": "ezerˈtʃittsjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_001"
    },
    {
        "word": "vacanza",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vacanze",
        "definitions": [
            {
                "text": "Tempo di riposo.",
                "examples": [
                    "Andare in vacanza."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "vaˈkantsa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_002"
    },
    {
        "word": "tempo libero",
        "level": "starter",
        "theme": "social",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "svago",
            "relax"
        ],
        "definitions": [
            {
                "text": "Momento in cui non lavori e puoi fare ciò che vuoi.",
                "examples": [
                    "Leggo libri nel mio tempo libero."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtɛmpo ˈlibero",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_003"
    },
    {
        "word": "cinema",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Luogo per vedere i film.",
                "examples": [
                    "Andiamo al cinema."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtʃinema",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_places_001"
    },
    {
        "word": "museo",
        "level": "starter",
        "theme": "places",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "musei",
        "definitions": [
            {
                "text": "Luogo con oggetti d'arte.",
                "examples": [
                    "Il museo è grande."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "muˈzɛo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_places_002"
    },
    {
        "word": "biblioteca",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Luogo con molti libri.",
                "examples": [
                    "Vado in biblioteca."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "biblioˈtɛka",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_places_003"
    },
    {
        "word": "palla",
        "level": "starter",
        "theme": "sports_equipment",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "palle",
        "definitions": [
            {
                "text": "Oggetto tondo per lo sport.",
                "examples": [
                    "Giochiamo con la palla."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈpalla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_sports_equipment_001"
    },
    {
        "word": "arte",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arti",
        "definitions": [
            {
                "text": "Creazione di cose belle.",
                "examples": [
                    "Amo l'arte moderna."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈarte",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_places_004"
    },
    {
        "word": "band",
        "level": "starter",
        "theme": "music",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "band",
        "definitions": [
            {
                "text": "Gruppo di musicisti.",
                "examples": [
                    "Una rock band."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈbɛnd",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_music_001"
    },
    {
        "word": "concerto",
        "level": "starter",
        "theme": "music",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "concerti",
        "definitions": [
            {
                "text": "Spettacolo musicale.",
                "examples": [
                    "Un concerto di piano."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "konˈtʃɛrto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_music_002"
    },
    {
        "word": "musica",
        "level": "starter",
        "theme": "music",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "musiche",
        "definitions": [
            {
                "text": "Suoni melodici.",
                "examples": [
                    "Ascolto musica."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmusica",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_music_003"
    },
    {
        "word": "canzone",
        "level": "starter",
        "theme": "music",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "canzoni",
        "definitions": [
            {
                "text": "Parole con musica.",
                "examples": [
                    "È una bella canzone."
                ]
            },
            {
                "word": "chitarra",
                "image": "images/vocabulary/actions/to play a musical instrument.png",
                "level": "starter",
                "theme": "music",
                "emoji": "🎸",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Uno strumento musicale a corde che si suona con le dita.",
                        "examples": [
                            "Lui suona la chitarra."
                        ]
                    }
                ],
                "transcription": "/kiˈtarra/"
            }
        ],
        "partitive": "della",
        "transcription": "kanˈtsone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_music_004"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "social",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "film",
        "definitions": [
            {
                "text": "Storia vista al cinema.",
                "examples": [
                    "Guardo un film."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈfilm",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_004"
    },
    {
        "word": "foto",
        "level": "starter",
        "theme": "hobbies_interests",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "foto",
        "definitions": [
            {
                "text": "Immagine da una macchina fotografica.",
                "examples": [
                    "Una foto ricordo."
                ]
            },
            {
                "word": "scacchi",
                "image": "images/vocabulary/actions/to play chess.png",
                "level": "starter",
                "theme": "hobbies_interests",
                "emoji": "♟️",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Un gioco per due persone giocato su una scacchiera con case nere e bianche.",
                        "examples": [
                            "Stanno giocando a scacchi."
                        ]
                    },
                    {
                        "word": "videogioco",
                        "image": "images/vocabulary/actions/to play video games.png",
                        "level": "starter",
                        "theme": "hobbies_interests",
                        "emoji": "🎮",
                        "form": "noun",
                        "classification": "regular",
                        "countability": "countable",
                        "definitions": [
                            {
                                "text": "Un gioco giocato su un computer o un dispositivo speciale.",
                                "examples": [
                                    "Lui ama giocare ai videogiochi."
                                ]
                            }
                        ],
                        "transcription": "/ˌvidjoˈʤɔko/"
                    }
                ],
                "transcription": "/ˈskakki/"
            }
        ],
        "partitive": "della",
        "transcription": "ˈfɔto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_hobbies_interests_001"
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "sports",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sport",
        "definitions": [
            {
                "text": "Attività fisica.",
                "examples": [
                    "Faccio sport."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "ˈsport",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_sports_001"
    },
    {
        "word": "calcio",
        "level": "starter",
        "theme": "sports",
        "article": "il",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con palla tonda.",
                "examples": [
                    "Giochiamo a calcio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈcalcio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_sports_002"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "sports",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con la racchetta.",
                "examples": [
                    "Lui gioca a tennis."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtennis",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_sports_003"
    },
    {
        "word": "nuoto",
        "level": "starter",
        "theme": "sports",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "",
        "definitions": [
            {
                "text": "L'atto di nuotare.",
                "examples": [
                    "Mi piace il nuoto."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈnuoto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_sports_004"
    },
    {
        "word": "festa",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "feste",
        "definitions": [
            {
                "text": "Momento per divertirsi insieme.",
                "examples": [
                    "Buona festa!"
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈfɛsta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_005"
    },
    {
        "word": "giornale",
        "level": "starter",
        "theme": "books_reading",
        "article": "il",
        "gender": "masculine",
        "emoji": "📰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "giornali",
        "transcription": "dʒorˈnale",
        "definitions": [
            {
                "text": "Pubblicazione quotidiana con notizie e informazioni.",
                "examples": [
                    "Leggo il giornale ogni mattina."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [
            "quotidiano"
        ],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_books_reading_001"
    },
    {
        "word": "rivista",
        "level": "starter",
        "theme": "books_reading",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "riviste",
        "transcription": "riˈvista",
        "definitions": [
            {
                "text": "Pubblicazione periodica su vari argomenti.",
                "examples": [
                    "Compro una rivista di moda."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_books_reading_002"
    },
    {
        "word": "bambola",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bambole",
        "transcription": "ˈbambola",
        "definitions": [
            {
                "text": "Giocattolo a forma di persona.",
                "examples": [
                    "La bambina gioca con la bambola."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_social_006"
    },
    {
        "word": "violino",
        "level": "starter",
        "theme": "musical_instruments",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "violini",
        "transcription": "vjoˈlino",
        "definitions": [
            {
                "text": "Strumento musicale a corde suonato con un archetto.",
                "examples": [
                    "Lui suona il violino."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_musical_instruments_001"
    },
    {
        "word": "batteria",
        "level": "starter",
        "theme": "musical_instruments",
        "emoji": "🥁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "batterie",
        "partitive": "della",
        "definitions": [
            {
                "text": "Uno strumento musicale a percussione.",
                "examples": [
                    "Suona la batteria in una band.",
                    "La batteria fa molto rumore."
                ]
            }
        ],
        "transcription": "batteˈria",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_musical_instruments_002"
    },
    {
        "word": "flauto",
        "level": "starter",
        "theme": "musical_instruments",
        "emoji": "🪈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "il",
        "plural": "flauti",
        "partitive": "del",
        "definitions": [
            {
                "text": "Uno strumento musicale a fiato.",
                "examples": [
                    "Impara a suonare il flauto a scuola.",
                    "Il suono del flauto è molto dolce."
                ]
            }
        ],
        "transcription": "ˈflauto",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_musical_instruments_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
