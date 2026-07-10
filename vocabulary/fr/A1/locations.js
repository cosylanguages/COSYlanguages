// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "France",
        "level": "starter",
        "theme": "places",
        "transcription": "fʁɑ̃s",
        "id": "fr_starter_locations_001",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'France' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Italie",
        "level": "starter",
        "theme": "places",
        "transcription": "i.ta.li",
        "id": "fr_starter_locations_002",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Italie' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Russie",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_003",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Russie' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Grèce",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_004",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Grèce' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Angleterre",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_005",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Angleterre' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Espagne",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_006",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Espagne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "États-Unis",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_007",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'États-Unis' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places",
        "transcription": "pa.ʁi",
        "id": "fr_starter_locations_008",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Paris' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "transcription": "lɔ̃dʁ",
        "id": "fr_starter_locations_009",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Londres' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_010",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Rome' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_011",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Moscou' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Athènes",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_012",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Athènes' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_013",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'New York' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_014",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Mexico City' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_015",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Amsterdam' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Vienne",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_016",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Vienne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_017",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Prague' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Barcelone",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_018",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Barcelone' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Venise",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_019",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Venise' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_020",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Florence' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_021",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Dublin' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Édimbourg",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_022",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Édimbourg' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_023",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Chicago' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_024",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Los Angeles' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_025",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'San Francisco' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_026",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Miami' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_027",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Washington DC' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_028",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Vancouver' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Montréal",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_029",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Montréal' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_030",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Melbourne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Thaïlande",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_031",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Thaïlande' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Corée du Sud",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_032",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Corée du Sud' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Suède",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_033",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Suède' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Norvège",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_034",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Norvège' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Danemark",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_035",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Danemark' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Finlande",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_036",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Finlande' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Pologne",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_037",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Pologne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_038",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ukraine' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Autriche",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_039",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Autriche' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Suisse",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_040",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Suisse' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Pays-Bas",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_041",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Pays-Bas' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Belgique",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_042",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Belgique' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Irlande",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_043",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Irlande' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "id": "fr_starter_locations_044",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Londres' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Allemagne",
        "level": "starter",
        "theme": "places",
        "transcription": "al.maɲ",
        "id": "fr_starter_locations_045",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Allemagne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Japon",
        "level": "starter",
        "theme": "places",
        "transcription": "ʒa.pɔ̃",
        "id": "fr_starter_locations_046",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Japon' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Chine",
        "level": "starter",
        "theme": "places",
        "transcription": "ʃin",
        "id": "fr_starter_locations_047",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Chine' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Brésil",
        "level": "starter",
        "theme": "places",
        "transcription": "bʁe.zil",
        "id": "fr_starter_locations_048",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Brésil' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Australie",
        "level": "starter",
        "theme": "places",
        "transcription": "os.tʁa.li",
        "id": "fr_starter_locations_049",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Australie' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Égypte",
        "level": "starter",
        "theme": "places",
        "transcription": "e.ʒipt",
        "id": "fr_starter_locations_050",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Égypte' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Inde",
        "level": "starter",
        "theme": "places",
        "transcription": "ɛ̃d",
        "id": "fr_starter_locations_051",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Inde' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places",
        "transcription": "pɔʁ.ty.ɡal",
        "id": "fr_starter_locations_052",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Portugal' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Milan",
        "level": "starter",
        "theme": "places",
        "transcription": "mi.lɑ̃",
        "id": "fr_starter_locations_053",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Milan' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Naples",
        "level": "starter",
        "theme": "places",
        "transcription": "napl",
        "id": "fr_starter_locations_054",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Naples' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "places",
        "transcription": "ma.dʁid",
        "id": "fr_starter_locations_055",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Madrid' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "places",
        "transcription": "bɛʁ.lɛ̃",
        "id": "fr_starter_locations_056",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Berlin' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.kjo",
        "id": "fr_starter_locations_057",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Tokyo' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Pékin",
        "level": "starter",
        "theme": "places",
        "transcription": "pe.kɛ̃",
        "id": "fr_starter_locations_058",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Pékin' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Lisbonne",
        "level": "starter",
        "theme": "places",
        "transcription": "lis.bɔn",
        "id": "fr_starter_locations_059",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Lisbonne' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Zurich",
        "level": "starter",
        "theme": "places",
        "transcription": "zy.ʁik",
        "id": "fr_starter_locations_060",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Zurich' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places",
        "transcription": "sid.nɛ",
        "id": "fr_starter_locations_061",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Sydney' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.ʁɔ̃.to",
        "id": "fr_starter_locations_062",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Toronto' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "places",
        "transcription": "is.tɑ̃.bul",
        "id": "fr_starter_locations_063",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Istanbul' in fr.",
                "examples": []
            }
        ]
    },
    {
        "word": "Genève",
        "level": "starter",
        "theme": "places",
        "transcription": "ʒə.nɛv",
        "id": "fr_starter_locations_064",
        "lang": "fr",
        "form": "noun",
        "emoji": "✨",
        "definitions": [
            {
                "text": "The word for 'Genève' in fr.",
                "examples": []
            }
        ]
    }
]
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
