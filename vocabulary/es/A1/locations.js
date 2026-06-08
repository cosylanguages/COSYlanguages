// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Ciudad de México",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Ciudad de México."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈciudad de méxico",
        "emoji": "🇲🇽",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_006"
    },
    {
        "word": "Ámsterdam",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Ámsterdam."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈámsterdam",
        "emoji": "🇳🇱",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_007"
    },
    {
        "word": "Viena",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Viena."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈviena",
        "emoji": "🇦🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_008"
    },
    {
        "word": "Praga",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Praga."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈpraga",
        "emoji": "🇨🇿",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_009"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Barcelona."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈbarcelona",
        "emoji": "🇪🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_010"
    },
    {
        "word": "Venecia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Venecia."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈvenecia",
        "emoji": "🇮🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_011"
    },
    {
        "word": "Florencia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Florencia."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈflorencia",
        "emoji": "🇮🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_012"
    },
    {
        "word": "Dublín",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Dublín."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈdublín",
        "emoji": "🇮🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_013"
    },
    {
        "word": "Edimburgo",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Edimburgo."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈedimburgo",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_014"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Chicago."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈchicago",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_015"
    },
    {
        "word": "Los Ángeles",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Los Ángeles."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈlos ángeles",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_016"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar San Francisco."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈsan francisco",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_017"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Miami."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈmiami",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_018"
    },
    {
        "word": "Washington D.C.",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Washington D.C.."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈwashington d.c.",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_019"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Vancouver."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈvancouver",
        "emoji": "🇨🇦",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_020"
    },
    {
        "word": "Montreal",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Montreal."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈmontreal",
        "emoji": "🇨🇦",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_021"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Melbourne."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈmelbourne",
        "emoji": "🇦🇺",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_022"
    },
    {
        "word": "Tailandia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Tailandia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈtailandia",
        "emoji": "🇹🇭",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_023"
    },
    {
        "word": "Corea del Sur",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Corea del Sur."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈcorea del sur",
        "emoji": "🇰🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_024"
    },
    {
        "word": "Suecia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Suecia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈsuecia",
        "emoji": "🇸🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_025"
    },
    {
        "word": "Noruega",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Noruega."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈnoruega",
        "emoji": "🇳🇴",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_026"
    },
    {
        "word": "Dinamarca",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Dinamarca."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈdinamarca",
        "emoji": "🇩🇰",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_027"
    },
    {
        "word": "Finlandia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Finlandia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈfinlandia",
        "emoji": "🇫🇮",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_028"
    },
    {
        "word": "Polonia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Polonia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈpolonia",
        "emoji": "🇵🇱",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_029"
    },
    {
        "word": "Ucrania",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Ucrania."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈucrania",
        "emoji": "🇺🇦",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_030"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Austria."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈaustria",
        "emoji": "🇦🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_031"
    },
    {
        "word": "Suiza",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Suiza."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈsuiza",
        "emoji": "🇨🇭",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_032"
    },
    {
        "word": "Países Bajos",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Países Bajos."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈpaíses bajos",
        "emoji": "🇳🇱",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_033"
    },
    {
        "word": "Bélgica",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Bélgica."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈbélgica",
        "emoji": "🇧🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_034"
    },
    {
        "word": "Irlanda",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Irlanda."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈirlanda",
        "emoji": "🇮🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_035"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Londres."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈlondres",
        "emoji": "🇬🇧",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_036"
    },
    {
        "word": "Francia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Francia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈfrancia",
        "emoji": "🇫🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_037"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Italia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈitalia",
        "emoji": "🇮🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_038"
    },
    {
        "word": "Rusia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Rusia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈrusia",
        "emoji": "🇷🇺",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_039"
    },
    {
        "word": "Grecia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Grecia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈgrecia",
        "emoji": "🇬🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_040"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Inglaterra."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈinglaterra",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_041"
    },
    {
        "word": "España",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar España."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈespaña",
        "emoji": "🇪🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_042"
    },
    {
        "word": "EE. UU.",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar EE. UU.."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈee. uu.",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_043"
    },
    {
        "word": "París",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar París."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈparís",
        "emoji": "🇫🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_044"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Roma."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈroma",
        "emoji": "🇮🇹",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_045"
    },
    {
        "word": "Moscú",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Moscú."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈmoscú",
        "emoji": "🇷🇺",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_046"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Atenas."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈatenas",
        "emoji": "🇬🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_047"
    },
    {
        "word": "Nueva York",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Nueva York."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈnueva york",
        "emoji": "🇺🇸",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_048"
    },
    {
        "word": "Berlín",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Berlín."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈberlín",
        "emoji": "🇩🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_049"
    },
    {
        "word": "Tokio",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Tokio."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈtokio",
        "emoji": "🇯🇵",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_050"
    },
    {
        "word": "Pekín",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Pekín."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈpekín",
        "emoji": "🇨🇳",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_051"
    },
    {
        "word": "Sídney",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Sídney."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈsídney",
        "emoji": "🇦🇺",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_052"
    },
    {
        "word": "Río de Janeiro",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un famosa ciudad en el mundo.",
                "examples": [
                    "Quiero visitar Río de Janeiro."
                ]
            }
        ],
        "subtext": "ciudad",
        "transcription": "ˈrío de janeiro",
        "emoji": "🇧🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_053"
    },
    {
        "word": "Egipto",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Egipto."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈegipto",
        "emoji": "🇪🇬",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_054"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar China."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈchina",
        "emoji": "🇨🇳",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_055"
    },
    {
        "word": "Japón",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Japón."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈjapón",
        "emoji": "🇯🇵",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_056"
    },
    {
        "word": "Alemania",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Alemania."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈalemania",
        "emoji": "🇩🇪",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_057"
    },
    {
        "word": "Canadá",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Canadá."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈcanadá",
        "emoji": "🇨🇦",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_058"
    },
    {
        "word": "Australia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Australia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈaustralia",
        "emoji": "🇦🇺",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_059"
    },
    {
        "word": "Brasil",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar Brasil."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈbrasil",
        "emoji": "🇧🇷",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_060"
    },
    {
        "word": "India",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Un país en el mundo.",
                "examples": [
                    "Quiero visitar India."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈindia",
        "emoji": "🇮🇳",
        "lang": "es",
        "sub_theme": "city",
        "form": "other",
        "id": "es_starter_places_061"
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();