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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Russia",
        "transcription": "ˈrusːja",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Grecia",
        "transcription": "ˈɡrɛːtʃa",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Inghilterra",
        "transcription": "iŋɡilˈtɛrːa",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Spagna",
        "transcription": "ˈspaɲːa",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Germania",
        "transcription": "dʒerˈmaːnja",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Giappone",
        "transcription": "dʒapˈpoːne",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Cina",
        "transcription": "ˈtʃiːna",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Brasile",
        "transcription": "braˈziːle",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Australia",
        "transcription": "auˈstraːlja",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Egitto",
        "transcription": "eˈdʒitːo",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Argentina",
        "transcription": "ardʒenˈtiːna",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Paesi Bassi",
        "transcription": "paˈeːzi ˈbasːi",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Svezia",
        "transcription": "ˈzvɛːtsja",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Norvegia",
        "transcription": "norˈvɛːdʒa",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Roma",
        "transcription": "ˈroːma",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Milano",
        "transcription": "miˈlaːno",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Napoli",
        "transcription": "ˈnaːpoli",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Berlino",
        "transcription": "berˈliːno",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Pechino",
        "transcription": "peˈkiːno",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Barcellona",
        "transcription": "bartʃelˈloːna",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Praga",
        "transcription": "ˈpraːɡa",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Dublino",
        "transcription": "dubˈliːno",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Lisbona",
        "transcription": "lizˈboːna",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Zurigo",
        "transcription": "dzuˈriːɡo",
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Chicago",
        "transcription": "ʃiˈkaːɡo",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Miami",
        "transcription": "maˈjaːmi",
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
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
        "theme": "address_location_A1",
        "synonyms": []
    },
    {
        "word": "Ginevra",
        "transcription": "dʒiˈnɛːvra",
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
        "theme": "address_location_A1",
        "synonyms": []
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();