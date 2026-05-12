(function() {
    const data = [
        { "word": "Έλληνας", "level": "starter", "theme": "nationalities_A1", "emoji": "🇬🇷", "form": "adjective", "definitions": [{ "text": "Από την Ελλάδα.", "examples": ["Είμαι Έλληνας."] }] },
        { "word": "Άγγλος", "level": "starter", "theme": "nationalities_A1", "emoji": "🇬🇧", "form": "adjective", "definitions": [{ "text": "Από την Αγγλία.", "examples": ["Είναι Άγγλος."] }] },
        { "word": "Γάλλος", "level": "starter", "theme": "nationalities_A1", "emoji": "🇫🇷", "form": "adjective", "definitions": [{ "text": "Από τη Γαλλία.", "examples": ["Είναι Γάλλος."] }] }
    ];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
