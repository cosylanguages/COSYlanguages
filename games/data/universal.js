(function() {
    const data = {
      critic: [
        '"The only way to do great work is to love what you do." — Steve Jobs',
        '"In the middle of every difficulty lies opportunity." — Albert Einstein',
        '"The journey of a thousand miles begins with one step." — Lao Tzu',
        '"Be the change you wish to see in the world." — Gandhi',
        '"It does not matter how slowly you go as long as you do not stop." — Confucius',
        '"The best time to plant a tree was 20 years ago. The second best time is now." — Proverb',
        '"You miss 100% of the shots you don\'t take." — Wayne Gretzky',
        '"Imagination is more important than knowledge." — Einstein',
        '"Life is what happens when you\'re busy making other plans." — John Lennon',
        '"The unexamined life is not worth living." — Socrates',
      ],
      etymology: [
        { word: 'Astronomy', options: ['Greek', 'Latin', 'Arabic', 'Sanskrit'], answer: 'Greek', level: 'A1', path: 'Astronomy → Astronomia (Latin) → Astronomia (Greek)', detail: 'From "astron" (star) + "nomos" (law).' },
        { word: 'Library', options: ['Latin', 'French', 'Greek', 'Germanic'], answer: 'Latin', level: 'A1', path: 'Library → Librairie (French) → Librarium (Latin)', detail: 'From "liber" (book).' },
        { word: 'Ballet', options: ['French', 'Italian', 'Russian', 'Spanish'], answer: 'French', level: 'A1', path: 'Ballet → Balletto (Italian) → Ballo (dance)', detail: 'Diminutive of "ballo".' },
        { word: 'Pizza', options: ['Italian', 'Greek', 'Latin', 'Arabic'], answer: 'Greek', level: 'A1', path: 'Pizza → Pitta (Greek?)', detail: 'Ancient roots traceable to Greek "pitta".' },
        { word: 'Biology', options: ['Greek', 'Latin', 'French', 'Dutch'], answer: 'Greek', level: 'A1', path: 'Biology → Biologie (German/French) → Bios + Logia (Greek)', detail: 'From "bios" (life) + "logia" (study).' },
        { word: 'Hotel', options: ['French', 'Latin', 'Spanish', 'German'], answer: 'French', level: 'A1', path: 'Hotel → Hôtel (French) → Hostel (Old French) → Hospitale (Latin)', detail: 'Related to "hospitality".' },

        { word: 'Algebra', options: ['Arabic', 'Greek', 'Latin', 'Persian'], answer: 'Arabic', level: 'B1', path: 'Algebra → Al-jabr (Arabic)', detail: 'Meaning "reunion of broken parts".' },
        { word: 'Safari', options: ['Arabic', 'Swahili', 'Hindi', 'Zulu'], answer: 'Arabic', level: 'B1', path: 'Safari → Safari (Swahili) → Safar (Arabic)', detail: 'From "safara" (to travel).' },
        { word: 'Robot', options: ['Czech', 'Russian', 'German', 'Polish'], answer: 'Czech', level: 'B1', path: 'Robot → Robota (Czech)', detail: 'Coined by Josef Čapek from "robota" (forced labour).' },
        { word: 'Ketchup', options: ['Chinese', 'Malay', 'English', 'French'], answer: 'Chinese', level: 'B1', path: 'Ketchup → Kôe-chiap (Hokkien Chinese)', detail: 'Originally a fermented fish sauce.' },
        { word: 'Chocolate', options: ['Nahuatl', 'Spanish', 'Maya', 'French'], answer: 'Nahuatl', level: 'B1', path: 'Chocolate → Chocolate (Spanish) → Xocolātl (Nahuatl)', detail: 'Meaning "bitter water".' },
        { word: 'Lemon', options: ['Arabic', 'Old French', 'Persian', 'Hindi'], answer: 'Arabic', level: 'B1', path: 'Lemon → Limon (Old French) → Laymun (Arabic) → Limun (Persian)', detail: 'Ancient roots in Asia.' },

        { word: 'Juggernaut', options: ['Sanskrit', 'Hindi', 'Tamil', 'Persian'], answer: 'Sanskrit', level: 'C1', path: 'Juggernaut → Jagannatha (Sanskrit)', detail: 'Lord of the World, a title for Krishna.' },
        { word: 'Quarantine', options: ['Italian', 'French', 'Latin', 'Spanish'], answer: 'Italian', level: 'C1', path: 'Quarantine → Quarantina (Italian) → Quaranta (forty)', detail: 'Forty days of isolation for ships.' },
        { word: 'Assassin', options: ['Arabic', 'Persian', 'Turkish', 'French'], answer: 'Arabic', level: 'C1', path: 'Assassin → Assassins (French) → Hashshashin (Arabic)', detail: 'Refers to a specific sect.' },
        { word: 'Clue', options: ['Greek', 'Latin', 'Old English', 'French'], answer: 'Greek', level: 'C1', path: 'Clue → Clew (Old English) → Ariadne\'s Thread (Greek Myth)', detail: 'Originally meant a ball of thread.' },
        { word: 'Buck', options: ['American English', 'Old English', 'Germanic', 'Dutch'], answer: 'American English', level: 'C1', path: 'Buck → Buckskin (unit of trade)', detail: 'Units of trade on the American frontier.' },
        { word: 'Pajamas', options: ['Hindi/Urdu', 'Persian', 'Arabic', 'Turkish'], answer: 'Hindi/Urdu', level: 'C1', path: 'Pajamas → Pay-jama (Hindi/Urdu) → Pa-jameh (Persian)', detail: 'Pā (leg) + jāmeh (garment).' }
      ],
      storychain: [
        'Secret', 'Map', 'Key', 'Storm', 'Stranger', 'Bridge', 'Letter', 'Ring', 'Mirror', 'Shadow',
        'Clock', 'Compass', 'Gift', 'Tunnel', 'Stairs', 'Window', 'Garden', 'Forest', 'Ocean', 'Mountain'
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['universal'] = data;
})();
