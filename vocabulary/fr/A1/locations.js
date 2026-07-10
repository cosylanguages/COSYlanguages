// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "word": "France",
        "level": "starter",
        "theme": "places",
        "transcription": "fʁɑ̃s",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_001"
    },
    {
        "word": "Italie",
        "level": "starter",
        "theme": "places",
        "transcription": "i.ta.li",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_002"
    },
    {
        "word": "Russie",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_003"
    },
    {
        "word": "Grèce",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_004"
    },
    {
        "word": "Angleterre",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_005"
    },
    {
        "word": "Espagne",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_006"
    },
    {
        "word": "États-Unis",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_007"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places",
        "transcription": "pa.ʁi",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_008"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "transcription": "lɔ̃dʁ",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_009"
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_010"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_011"
    },
    {
        "word": "Athènes",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_012"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_013"
    },
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_014"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_015"
    },
    {
        "word": "Vienne",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_016"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_017"
    },
    {
        "word": "Barcelone",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_018"
    },
    {
        "word": "Venise",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_019"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_020"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_021"
    },
    {
        "word": "Édimbourg",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_022"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_023"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_024"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_025"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_026"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_027"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_028"
    },
    {
        "word": "Montréal",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_029"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_030"
    },
    {
        "word": "Thaïlande",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_031"
    },
    {
        "word": "Corée du Sud",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_032"
    },
    {
        "word": "Suède",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_033"
    },
    {
        "word": "Norvège",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_034"
    },
    {
        "word": "Danemark",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_035"
    },
    {
        "word": "Finlande",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_036"
    },
    {
        "word": "Pologne",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_037"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_038"
    },
    {
        "word": "Autriche",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_039"
    },
    {
        "word": "Suisse",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_040"
    },
    {
        "word": "Pays-Bas",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_041"
    },
    {
        "word": "Belgique",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_042"
    },
    {
        "word": "Irlande",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_043"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "lang": "fr",
        "transcription": "",
        "emoji": "✨",
        "id": "fr_starter_places_044"
    },
    {
        "word": "Allemagne",
        "level": "starter",
        "theme": "places",
        "transcription": "al.maɲ",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_045"
    },
    {
        "word": "Japon",
        "level": "starter",
        "theme": "places",
        "transcription": "ʒa.pɔ̃",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_046"
    },
    {
        "word": "Chine",
        "level": "starter",
        "theme": "places",
        "transcription": "ʃin",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_047"
    },
    {
        "word": "Brésil",
        "level": "starter",
        "theme": "places",
        "transcription": "bʁe.zil",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_048"
    },
    {
        "word": "Australie",
        "level": "starter",
        "theme": "places",
        "transcription": "os.tʁa.li",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_049"
    },
    {
        "word": "Égypte",
        "level": "starter",
        "theme": "places",
        "transcription": "e.ʒipt",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_050"
    },
    {
        "word": "Inde",
        "level": "starter",
        "theme": "places",
        "transcription": "ɛ̃d",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_051"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places",
        "transcription": "pɔʁ.ty.ɡal",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_052"
    },
    {
        "word": "Milan",
        "level": "starter",
        "theme": "places",
        "transcription": "mi.lɑ̃",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_053"
    },
    {
        "word": "Naples",
        "level": "starter",
        "theme": "places",
        "transcription": "napl",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_054"
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "places",
        "transcription": "ma.dʁid",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_055"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "places",
        "transcription": "bɛʁ.lɛ̃",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_056"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.kjo",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_057"
    },
    {
        "word": "Pékin",
        "level": "starter",
        "theme": "places",
        "transcription": "pe.kɛ̃",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_058"
    },
    {
        "word": "Lisbonne",
        "level": "starter",
        "theme": "places",
        "transcription": "lis.bɔn",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_059"
    },
    {
        "word": "Zurich",
        "level": "starter",
        "theme": "places",
        "transcription": "zy.ʁik",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_060"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places",
        "transcription": "sid.nɛ",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_061"
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.ʁɔ̃.to",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_062"
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "places",
        "transcription": "is.tɑ̃.bul",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_063"
    },
    {
        "word": "Genève",
        "level": "starter",
        "theme": "places",
        "transcription": "ʒə.nɛv",
        "lang": "fr",
        "emoji": "✨",
        "id": "fr_starter_places_064"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
