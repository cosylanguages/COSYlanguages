// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Francia",
        "transcription": "ˈfrantʃa",
        "definitions": [
            {
                "text": "Un grande paese in Europa occidentale.",
                "examples": [
                    "Parigi è la capitale della Francia."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_001",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Italia",
        "transcription": "iˈtalja",
        "definitions": [
            {
                "text": "Un paese dell'Europa meridionale a forma di stivale.",
                "examples": [
                    "L'Italia è famosa per il cibo."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_002",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Russia",
        "transcription": "ˈrusja",
        "definitions": [
            {
                "text": "Il paese più grande del mondo.",
                "examples": [
                    "Mosca è in Russia."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_003",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Grecia",
        "transcription": "ˈɡrɛtʃa",
        "definitions": [
            {
                "text": "Un paese dell'Europa meridionale con molte isole.",
                "examples": [
                    "Vado in Grecia in estate."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_004",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Inghilterra",
        "transcription": "iŋɡilˈtɛra",
        "definitions": [
            {
                "text": "Parte del Regno Unito.",
                "examples": [
                    "Londra è in Inghilterra."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_005",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Spagna",
        "transcription": "ˈspaɲa",
        "definitions": [
            {
                "text": "Un paese della penisola iberica.",
                "examples": [
                    "Barcellona è in Spagna."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_006",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Stati Uniti",
        "transcription": "ˈstati uˈniti",
        "definitions": [
            {
                "text": "Un grande paese in Nord America.",
                "examples": [
                    "New York è negli Stati Uniti."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_007",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Germania",
        "transcription": "dʒerˈmanja",
        "definitions": [
            {
                "text": "Un paese dell'Europa centrale.",
                "examples": [
                    "Berlino è in Germania."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_008",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Giappone",
        "transcription": "dʒapˈpone",
        "definitions": [
            {
                "text": "Un paese insulare in Asia orientale.",
                "examples": [
                    "Tokyo è in Giappone."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_009",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Cina",
        "transcription": "ˈtʃina",
        "definitions": [
            {
                "text": "Un grande paese in Asia orientale.",
                "examples": [
                    "Pechino è in Cina."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_010",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Canada",
        "transcription": "ˈkanada",
        "definitions": [
            {
                "text": "Un grande paese a nord degli Stati Uniti.",
                "examples": [
                    "Il Canada è molto freddo in inverno."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_011",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Brasile",
        "transcription": "braˈzile",
        "definitions": [
            {
                "text": "Il paese più grande del Sud America.",
                "examples": [
                    "In Brasile si parla portoghese."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_012",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Australia",
        "transcription": "auˈstralja",
        "definitions": [
            {
                "text": "Un paese e continente nell'emisfero australe.",
                "examples": [
                    "L'Australia ha animali unici."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_013",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Egitto",
        "transcription": "eˈdʒito",
        "definitions": [
            {
                "text": "Un paese nel Nord Africa famoso per le piramidi.",
                "examples": [
                    "Il Cairo è in Egitto."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_014",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "India",
        "transcription": "ˈindja",
        "definitions": [
            {
                "text": "Un grande paese nell'Asia meridionale.",
                "examples": [
                    "L'India ha una cultura antica."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_015",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Messico",
        "transcription": "ˈmɛssiko",
        "definitions": [
            {
                "text": "Un paese nel Nord America.",
                "examples": [
                    "Città del Messico è la capitale."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_016",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Argentina",
        "transcription": "ardʒenˈtina",
        "definitions": [
            {
                "text": "Un grande paese nel Sud America.",
                "examples": [
                    "Buenos Aires è in Argentina."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_017",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Perù",
        "transcription": "peˈru",
        "definitions": [
            {
                "text": "Un paese nel Sud America.",
                "examples": [
                    "Il Perù è famoso per il Machu Picchu."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_018",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Portogallo",
        "transcription": "portoaˈɡallo",
        "definitions": [
            {
                "text": "Un paese sulla costa atlantica dell'Europa.",
                "examples": [
                    "Lisbona è in Portogallo."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_019",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Svizzera",
        "transcription": "ˈzvittsera",
        "definitions": [
            {
                "text": "Un paese montuoso in Europa centrale.",
                "examples": [
                    "La Svizzera è famosa per il cioccolato."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_020",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Austria",
        "transcription": "ˈaustrja",
        "definitions": [
            {
                "text": "Un paese in Europa centrale.",
                "examples": [
                    "Vienna è in Austria."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_021",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Belgio",
        "transcription": "ˈbɛldʒo",
        "definitions": [
            {
                "text": "Un paese in Europa occidentale.",
                "examples": [
                    "Bruxelles è in Belgio."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_022",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Paesi Bassi",
        "transcription": "paˈezi ˈbasi",
        "definitions": [
            {
                "text": "Un paese dell'Europa settentrionale.",
                "examples": [
                    "Amsterdam è nei Paesi Bassi."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_023",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Svezia",
        "transcription": "ˈzvɛtsja",
        "definitions": [
            {
                "text": "Un paese in Scandinavia.",
                "examples": [
                    "Stoccolma è in Svezia."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_024",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Norvegia",
        "transcription": "norˈvɛdʒa",
        "definitions": [
            {
                "text": "Un paese montuoso in Scandinavia.",
                "examples": [
                    "Oslo è in Norvegia."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_025",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Irlanda",
        "transcription": "irˈlanda",
        "definitions": [
            {
                "text": "Un'isola e paese in Europa occidentale.",
                "examples": [
                    "Dublino è in Irlanda."
                ]
            }
        ],
        "subtext": "paese",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_026",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Roma",
        "transcription": "ˈroma",
        "definitions": [
            {
                "text": "La capitale dell'Italia.",
                "examples": [
                    "Roma è una città storica."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_027",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Milano",
        "transcription": "miˈlano",
        "definitions": [
            {
                "text": "Una grande città nel nord Italia.",
                "examples": [
                    "Milano è famosa per la moda."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_028",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Venezia",
        "transcription": "veˈnɛttsja",
        "definitions": [
            {
                "text": "Una città italiana costruita sull'acqua.",
                "examples": [
                    "Venezia è unica al mondo."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_029",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Firenze",
        "transcription": "fiˈrɛntse",
        "definitions": [
            {
                "text": "Città d'arte in Toscana.",
                "examples": [
                    "Firenze è bellissima."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_030",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Napoli",
        "transcription": "ˈnapoli",
        "definitions": [
            {
                "text": "Città nel sud Italia famosa per la pizza.",
                "examples": [
                    "Vado a Napoli."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_031",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Parigi",
        "transcription": "paˈridʒi",
        "definitions": [
            {
                "text": "La capitale della Francia.",
                "examples": [
                    "Parigi è la città dell'amore."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_032",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Londra",
        "transcription": "ˈlondra",
        "definitions": [
            {
                "text": "La capitale del Regno Unito.",
                "examples": [
                    "Londra è molto grande."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_033",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Madrid",
        "transcription": "maˈdrid",
        "definitions": [
            {
                "text": "La capitale della Spagna.",
                "examples": [
                    "Abito a Madrid."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_034",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Berlino",
        "transcription": "berˈlino",
        "definitions": [
            {
                "text": "La capitale della Germania.",
                "examples": [
                    "Berlino è una città moderna."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_035",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Tokyo",
        "transcription": "ˈtɔkjo",
        "definitions": [
            {
                "text": "La capitale del Giappone.",
                "examples": [
                    "Tokyo è tecnologicamente avanzata."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_036",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Pechino",
        "transcription": "peˈkino",
        "definitions": [
            {
                "text": "La capitale della Cina.",
                "examples": [
                    "Pechino ha una lunga storia."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_037",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Mosca",
        "transcription": "ˈmɔska",
        "definitions": [
            {
                "text": "La capitale della Russia.",
                "examples": [
                    "Mosca è fredda."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_038",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "New York",
        "transcription": "nju ˈjɔrk",
        "definitions": [
            {
                "text": "Una famosa città negli Stati Uniti.",
                "examples": [
                    "New York è la città che non dorme mai."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_039",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Los Angeles",
        "transcription": "los ˈandʒeles",
        "definitions": [
            {
                "text": "Una città in California.",
                "examples": [
                    "Hollywood è a Los Angeles."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_040",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Barcellona",
        "transcription": "bartʃelˈlona",
        "definitions": [
            {
                "text": "Una città sulla costa della Spagna.",
                "examples": [
                    "Barcellona è solare."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_041",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Amsterdam",
        "transcription": "ˈamsterdam",
        "definitions": [
            {
                "text": "La capitale dei Paesi Bassi.",
                "examples": [
                    "Amsterdam ha molti canali."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_042",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Vienna",
        "transcription": "vjɛnˈna",
        "definitions": [
            {
                "text": "La capitale dell'Austria.",
                "examples": [
                    "Vienna è famosa per la musica classica."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_043",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Praga",
        "transcription": "ˈpraɡa",
        "definitions": [
            {
                "text": "La capitale della Repubblica Ceca.",
                "examples": [
                    "Praga è una città medievale."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_044",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Dublino",
        "transcription": "dubˈlino",
        "definitions": [
            {
                "text": "La capitale dell'Irlanda.",
                "examples": [
                    "Dublino è una città vivace."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_045",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Lisbona",
        "transcription": "lizˈbona",
        "definitions": [
            {
                "text": "La capitale del Portogallo.",
                "examples": [
                    "Lisbona è sull'Atlantico."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_046",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Zurigo",
        "transcription": "dzuˈriɡo",
        "definitions": [
            {
                "text": "Una grande città in Svizzera.",
                "examples": [
                    "Zurigo è un centro finanziario."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_047",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Chicago",
        "transcription": "ʃiˈkaɡo",
        "definitions": [
            {
                "text": "Una grande città negli Stati Uniti.",
                "examples": [
                    "Chicago è sul lago Michigan."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_048",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "San Francisco",
        "transcription": "san franˈtʃisko",
        "definitions": [
            {
                "text": "Una città famosa in California.",
                "examples": [
                    "Il Golden Gate è a San Francisco."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_049",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Miami",
        "transcription": "maˈjami",
        "definitions": [
            {
                "text": "Una città sulla costa della Florida.",
                "examples": [
                    "A Miami fa sempre caldo."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_050",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Washington",
        "transcription": "ˈwɔʃʃinton",
        "definitions": [
            {
                "text": "La capitale degli Stati Uniti.",
                "examples": [
                    "Washington è una città istituzionale."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_051",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Sydney",
        "transcription": "ˈsidni",
        "definitions": [
            {
                "text": "Una grande città in Australia.",
                "examples": [
                    "Sydney ha un famoso teatro dell'opera."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_052",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Toronto",
        "transcription": "toˈronto",
        "definitions": [
            {
                "text": "Una grande città in Canada.",
                "examples": [
                    "Toronto è una città multiculturale."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_053",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Città del Messico",
        "transcription": "tʃitˈta del ˈmɛssiko",
        "definitions": [
            {
                "text": "La capitale del Messico.",
                "examples": [
                    "Città del Messico è enorme."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_054",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Istanbul",
        "transcription": "ˈistanbul",
        "definitions": [
            {
                "text": "Una città tra Europa e Asia in Turchia.",
                "examples": [
                    "Istanbul è ricca di storia."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_055",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    },
    {
        "word": "Ginevra",
        "transcription": "dʒiˈnɛvra",
        "definitions": [
            {
                "text": "Una città internazionale in Svizzera.",
                "examples": [
                    "Ginevra è sul lago."
                ]
            }
        ],
        "subtext": "città",
        "level": "starter",
        "theme": "places",
        "id": "it_starter_locations_056",
        "lang": "it",
        "form": "noun",
        "emoji": "✨"
    }
]
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();