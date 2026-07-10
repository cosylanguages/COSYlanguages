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
        "id": "pt_starter_locations_001",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_002",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_003",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_004",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_005",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_006",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_007",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_008",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_009",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_010",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_011",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_012",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_013",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_014",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_015",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_016",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_017",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_018",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_019",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_020",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_021",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_022",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_023",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_024",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_025",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_026",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_027",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_028",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_029",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_030",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_031",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_032",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_033",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_034",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_035",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_036",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_037",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_038",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_039",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_040",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_041",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_042",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_043",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_044",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_045",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_046",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_047",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_048",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_049",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_050",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_051",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_052",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_053",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_054",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_055",
        "lang": "pt",
        "form": "noun"
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
        "id": "pt_starter_locations_056",
        "lang": "pt",
        "form": "noun"
    }
]
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();