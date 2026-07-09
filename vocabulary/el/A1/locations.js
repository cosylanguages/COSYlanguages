// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Γαλλία",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_001"
    },
    {
        "word": "Ιταλία",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_002"
    },
    {
        "word": "Ρωσία",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_003"
    },
    {
        "word": "Ελλάδα",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_004"
    },
    {
        "word": "Αγγλία",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_005"
    },
    {
        "word": "Ισπανία",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_006"
    },
    {
        "word": "ΗΠΑ",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_007"
    },
    {
        "word": "Παρίσι",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_008"
    },
    {
        "word": "Λονδίνο",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_009"
    },
    {
        "word": "Ρώμη",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_010"
    },
    {
        "word": "Μόσχα",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_011"
    },
    {
        "word": "Αθήνα",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_012"
    },
    {
        "word": "Νέα Υόρκη",
        "level": "starter",
        "theme": "places",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_places_013"
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
