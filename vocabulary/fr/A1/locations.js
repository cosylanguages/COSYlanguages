// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "France",
        "image": "images/vocabulary/countries/France.png",
        "level": "starter",
        "theme": "places",
        "transcription": "fʁɑ̃s",
    },
    {
        "word": "Italie",
        "level": "starter",
        "theme": "places",
        "transcription": "i.ta.li",
    },
    {
        "word": "Russie",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Grèce",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Angleterre",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Espagne",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "États-Unis",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places",
        "transcription": "pa.ʁi",
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places",
        "transcription": "lɔ̃dʁ",
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Athènes",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Vienne",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Barcelone",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Venise",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Édimbourg",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Montréal",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Thaïlande",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Corée du Sud",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Suède",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Norvège",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Danemark",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Finlande",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Pologne",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Autriche",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Suisse",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Pays-Bas",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Belgique",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Irlande",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Allemagne",
        "level": "starter",
        "theme": "places",
        "transcription": "al.maɲ"
    },
    {
        "word": "Japon",
        "level": "starter",
        "theme": "places",
        "transcription": "ʒa.pɔ̃"
    },
    {
        "word": "Chine",
        "level": "starter",
        "theme": "places",
        "transcription": "ʃin"
    },
    {
        "word": "Brésil",
        "level": "starter",
        "theme": "places",
        "transcription": "bʁe.zil"
    },
    {
        "word": "Australie",
        "level": "starter",
        "theme": "places",
        "transcription": "os.tʁa.li"
    },
    {
        "word": "Égypte",
        "level": "starter",
        "theme": "places",
        "transcription": "e.ʒipt"
    },
    {
        "word": "Inde",
        "level": "starter",
        "theme": "places",
        "transcription": "ɛ̃d"
    },
    {
        "word": "Portugal",
        "image": "images/vocabulary/countries/Portugal.png",
        "level": "starter",
        "theme": "places",
        "transcription": "pɔʁ.ty.ɡal"
    },
    {
        "word": "Milan",
        "level": "starter",
        "theme": "places",
        "transcription": "mi.lɑ̃"
    },
    {
        "word": "Naples",
        "level": "starter",
        "theme": "places",
        "transcription": "napl"
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "places",
        "transcription": "ma.dʁid"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "places",
        "transcription": "bɛʁ.lɛ̃"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.kjo"
    },
    {
        "word": "Pékin",
        "level": "starter",
        "theme": "places",
        "transcription": "pe.kɛ̃"
    },
    {
        "word": "Lisbonne",
        "level": "starter",
        "theme": "places",
        "transcription": "lis.bɔn"
    },
    {
        "word": "Zurich",
        "level": "starter",
        "theme": "places",
        "transcription": "zy.ʁik"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places",
        "transcription": "sid.nɛ"
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "places",
        "transcription": "tɔ.ʁɔ̃.to"
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "places",
        "transcription": "is.tɑ̃.bul"
    },
    {
        "word": "Genève",
        "level": "starter",
        "theme": "places",
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
