// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Cidade do México",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Cidade do México."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈcidade do méxico",
        "emoji": "🇲🇽",
        "lang": "pt",
        "id": "pt_starter_places_001"
    },
    {
        "word": "Amesterdão",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Amesterdão."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈamesterdão",
        "emoji": "🇳🇱",
        "lang": "pt",
        "id": "pt_starter_places_002"
    },
    {
        "word": "Viena",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Viena."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈviena",
        "emoji": "🇦🇹",
        "lang": "pt",
        "id": "pt_starter_places_003"
    },
    {
        "word": "Praga",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Praga."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈpraga",
        "emoji": "🇨🇿",
        "lang": "pt",
        "id": "pt_starter_places_004"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Barcelona."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈbarcelona",
        "emoji": "🇪🇸",
        "lang": "pt",
        "id": "pt_starter_places_005"
    },
    {
        "word": "Veneza",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Veneza."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈveneza",
        "emoji": "🇮🇹",
        "lang": "pt",
        "id": "pt_starter_places_006"
    },
    {
        "word": "Florença",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Florença."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈflorença",
        "emoji": "🇮🇹",
        "lang": "pt",
        "id": "pt_starter_places_007"
    },
    {
        "word": "Dublim",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Dublim."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈdublim",
        "emoji": "🇮🇪",
        "lang": "pt",
        "id": "pt_starter_places_008"
    },
    {
        "word": "Edimburgo",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Edimburgo."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈedimburgo",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "lang": "pt",
        "id": "pt_starter_places_009"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Chicago."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈchicago",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_010"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Los Angeles."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈlos angeles",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_011"
    },
    {
        "word": "São Francisco",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar São Francisco."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈsão francisco",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_012"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Miami."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈmiami",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_013"
    },
    {
        "word": "Washington D.C.",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Washington D.C.."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈwashington d.c.",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_014"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Vancouver."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈvancouver",
        "emoji": "🇨🇦",
        "lang": "pt",
        "id": "pt_starter_places_015"
    },
    {
        "word": "Montreal",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Montreal."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈmontreal",
        "emoji": "🇨🇦",
        "lang": "pt",
        "id": "pt_starter_places_016"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Melbourne."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈmelbourne",
        "emoji": "🇦🇺",
        "lang": "pt",
        "id": "pt_starter_places_017"
    },
    {
        "word": "Tailândia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Tailândia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈtailândia",
        "emoji": "🇹🇭",
        "lang": "pt",
        "id": "pt_starter_places_018"
    },
    {
        "word": "Coreia do Sul",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Coreia do Sul."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈcoreia do sul",
        "emoji": "🇰🇷",
        "lang": "pt",
        "id": "pt_starter_places_019"
    },
    {
        "word": "Suécia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Suécia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈsuécia",
        "emoji": "🇸🇪",
        "lang": "pt",
        "id": "pt_starter_places_020"
    },
    {
        "word": "Noruega",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Noruega."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈnoruega",
        "emoji": "🇳🇴",
        "lang": "pt",
        "id": "pt_starter_places_021"
    },
    {
        "word": "Dinamarca",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Dinamarca."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈdinamarca",
        "emoji": "🇩🇰",
        "lang": "pt",
        "id": "pt_starter_places_022"
    },
    {
        "word": "Finlândia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Finlândia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈfinlândia",
        "emoji": "🇫🇮",
        "lang": "pt",
        "id": "pt_starter_places_023"
    },
    {
        "word": "Polónia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Polónia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈpolónia",
        "emoji": "🇵🇱",
        "lang": "pt",
        "id": "pt_starter_places_024"
    },
    {
        "word": "Ucrânia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Ucrânia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈucrânia",
        "emoji": "🇺🇦",
        "lang": "pt",
        "id": "pt_starter_places_025"
    },
    {
        "word": "Áustria",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Áustria."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈáustria",
        "emoji": "🇦🇹",
        "lang": "pt",
        "id": "pt_starter_places_026"
    },
    {
        "word": "Suíça",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Suíça."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈsuíça",
        "emoji": "🇨🇭",
        "lang": "pt",
        "id": "pt_starter_places_027"
    },
    {
        "word": "Países Baixos",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Países Baixos."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈpaíses baixos",
        "emoji": "🇳🇱",
        "lang": "pt",
        "id": "pt_starter_places_028"
    },
    {
        "word": "Bélgica",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Bélgica."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈbélgica",
        "emoji": "🇧🇪",
        "lang": "pt",
        "id": "pt_starter_places_029"
    },
    {
        "word": "Irlanda",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Irlanda."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈirlanda",
        "emoji": "🇮🇪",
        "lang": "pt",
        "id": "pt_starter_places_030"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Londres."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈlondres",
        "emoji": "🇬🇧",
        "lang": "pt",
        "id": "pt_starter_places_031"
    },
    {
        "word": "França",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar França."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈfrança",
        "emoji": "🇫🇷",
        "lang": "pt",
        "id": "pt_starter_places_032"
    },
    {
        "word": "Itália",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Itália."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈitália",
        "emoji": "🇮🇹",
        "lang": "pt",
        "id": "pt_starter_places_033"
    },
    {
        "word": "Rússia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Rússia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈrússia",
        "emoji": "🇷🇺",
        "lang": "pt",
        "id": "pt_starter_places_034"
    },
    {
        "word": "Grécia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Grécia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈgrécia",
        "emoji": "🇬🇷",
        "lang": "pt",
        "id": "pt_starter_places_035"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Inglaterra."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈinglaterra",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "lang": "pt",
        "id": "pt_starter_places_036"
    },
    {
        "word": "Espanha",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Espanha."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈespanha",
        "emoji": "🇪🇸",
        "lang": "pt",
        "id": "pt_starter_places_037"
    },
    {
        "word": "EUA",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar EUA."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈeua",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_038"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Paris."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈparis",
        "emoji": "🇫🇷",
        "lang": "pt",
        "id": "pt_starter_places_039"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Roma."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈroma",
        "emoji": "🇮🇹",
        "lang": "pt",
        "id": "pt_starter_places_040"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Moscou."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈmoscou",
        "emoji": "🇷🇺",
        "lang": "pt",
        "id": "pt_starter_places_041"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Atenas."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈatenas",
        "emoji": "🇬🇷",
        "lang": "pt",
        "id": "pt_starter_places_042"
    },
    {
        "word": "Nova Iorque",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Nova Iorque."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈnova iorque",
        "emoji": "🇺🇸",
        "lang": "pt",
        "id": "pt_starter_places_043"
    },
    {
        "word": "Berlim",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Berlim."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈberlim",
        "emoji": "🇩🇪",
        "lang": "pt",
        "id": "pt_starter_places_044"
    },
    {
        "word": "Tóquio",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Tóquio."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈtóquio",
        "emoji": "🇯🇵",
        "lang": "pt",
        "id": "pt_starter_places_045"
    },
    {
        "word": "Pequim",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Pequim."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈpequim",
        "emoji": "🇨🇳",
        "lang": "pt",
        "id": "pt_starter_places_046"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Sydney."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈsydney",
        "emoji": "🇦🇺",
        "lang": "pt",
        "id": "pt_starter_places_047"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma famosa cidade no mundo.",
                "examples": [
                    "Quero visitar Rio de Janeiro."
                ]
            }
        ],
        "subtext": "cidade",
        "transcription": "ˈrio de janeiro",
        "emoji": "🇧🇷",
        "lang": "pt",
        "id": "pt_starter_places_048"
    },
    {
        "word": "Egito",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Egito."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈegito",
        "emoji": "🇪🇬",
        "lang": "pt",
        "id": "pt_starter_places_049"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar China."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈchina",
        "emoji": "🇨🇳",
        "lang": "pt",
        "id": "pt_starter_places_050"
    },
    {
        "word": "Japão",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Japão."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈjapão",
        "emoji": "🇯🇵",
        "lang": "pt",
        "id": "pt_starter_places_051"
    },
    {
        "word": "Alemanha",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Alemanha."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈalemanha",
        "emoji": "🇩🇪",
        "lang": "pt",
        "id": "pt_starter_places_052"
    },
    {
        "word": "Canadá",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Canadá."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈcanadá",
        "emoji": "🇨🇦",
        "lang": "pt",
        "id": "pt_starter_places_053"
    },
    {
        "word": "Austrália",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Austrália."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈaustrália",
        "emoji": "🇦🇺",
        "lang": "pt",
        "id": "pt_starter_places_054"
    },
    {
        "word": "Brasil",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Brasil."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈbrasil",
        "emoji": "🇧🇷",
        "lang": "pt",
        "id": "pt_starter_places_055"
    },
    {
        "word": "Índia",
        "level": "starter",
        "theme": "places",
        "definitions": [
            {
                "text": "Uma país no mundo.",
                "examples": [
                    "Quero visitar Índia."
                ]
            }
        ],
        "subtext": "país",
        "transcription": "ˈíndia",
        "emoji": "🇮🇳",
        "lang": "pt",
        "id": "pt_starter_places_056"
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();