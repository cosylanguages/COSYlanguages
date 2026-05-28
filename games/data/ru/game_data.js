(function() {
    const data = {
      fluency: [],
      opinion: [],
      battle: [],
      critic: [],
      action: { A1: [], A2: [], B1: [], B2: [] },
      identity: [],
      wordlinker: [],
      etymology: [
        { word: 'Телефон', options: ['Greek', 'Latin', 'Russian', 'German'], answer: 'Greek', level: 'easy', path: 'Телефон → Tēle (Greek: far) + Phōnē (Greek: voice)', detail: 'A Greek-derived internationalism.' },
        { word: 'Школа', options: ['Greek', 'Latin', 'Russian', 'Old English'], answer: 'Greek', level: 'easy', path: 'Школа → Schola (Latin) → Skholē (Greek: leisure)', detail: 'Originally meant "leisure" or "discussion".' },
        { word: 'Библиотека', options: ['Greek', 'Latin', 'Arabic', 'French'], answer: 'Greek', level: 'easy', path: 'Библиотека → Bibliothēkē (Greek: book-case)', detail: 'From biblion (book) + thēkē (box/case).' },
        { word: 'Алфавит', options: ['Greek', 'Latin', 'Hebrew', 'Arabic'], answer: 'Greek', level: 'medium', path: 'Алфавит → Alpha + Beta (Greek: first letters)', detail: 'Named after the first two letters of the Greek alphabet.' },
        { word: 'Музей', options: ['Greek', 'Latin', 'French', 'Italian'], answer: 'Greek', level: 'medium', path: 'Музей → Mouseion (Greek: seat of the Muses)', detail: 'Dedicated to the Muses, the patron goddesses of the arts.' },
        { word: 'Карандаш', options: ['Turkic', 'Russian', 'German', 'Latin'], answer: 'Turkic', level: 'hard', path: 'Карандаш → Kara (Turkic: black) + Daş (Turkic: stone)', detail: 'Borrowed from Turkic languages in the 15th-16th centuries.' },
        { word: 'Сундук', options: ['Turkic', 'Greek', 'Persian', 'Russian'], answer: 'Turkic', level: 'hard', path: 'Сундук → Sandıq (Turkic) → Sanduk (Arabic)', detail: 'Borrowed through Turkic from Arabic origins.' }
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['ru'] = data;
})();
