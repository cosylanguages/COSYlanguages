(function() {
    const data = [
    {
        "word": "France",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "fʁɑ̃s",
    },
    {
        "word": "Italie",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "i.ta.li",
    },
    {
        "word": "Russie",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Grèce",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Angleterre",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Espagne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "États-Unis",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "pa.ʁi",
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "lɔ̃dʁ",
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Athènes",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Vienne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Barcelone",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Venise",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Édimbourg",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Montréal",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Thaïlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Corée du Sud",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Suède",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Norvège",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Danemark",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Finlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Pologne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Autriche",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Suisse",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Pays-Bas",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Belgique",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Irlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Allemagne",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "al.maɲ"
    },
    {
        "word": "Japon",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "ʒa.pɔ̃"
    },
    {
        "word": "Chine",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "ʃin"
    },
    {
        "word": "Brésil",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "bʁe.zil"
    },
    {
        "word": "Australie",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "os.tʁa.li"
    },
    {
        "word": "Égypte",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "e.ʒipt"
    },
    {
        "word": "Inde",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "ɛ̃d"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "pɔʁ.ty.ɡal"
    },
    {
        "word": "Milan",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "mi.lɑ̃"
    },
    {
        "word": "Naples",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "napl"
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "ma.dʁid"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "bɛʁ.lɛ̃"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "tɔ.kjo"
    },
    {
        "word": "Pékin",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "pe.kɛ̃"
    },
    {
        "word": "Lisbonne",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "lis.bɔn"
    },
    {
        "word": "Zurich",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "zy.ʁik"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "sid.nɛ"
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "tɔ.ʁɔ̃.to"
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "is.tɑ̃.bul"
    },
    {
        "word": "Genève",
        "level": "starter",
        "theme": "address_location_A1",
        "transcription": "ʒə.nɛv"
    }
]
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
