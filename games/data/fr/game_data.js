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
        { word: 'Restaurant', options: ['French', 'Latin', 'Greek', 'Arabic'], answer: 'French', level: 'easy', path: 'Restaurant → Restaurer (French)', detail: 'From the French verb restaurer, meaning "to restore".' },
        { word: 'Hélicoptère', options: ['Greek', 'Latin', 'English', 'French'], answer: 'Greek', level: 'easy', path: 'Hélicoptère → Helix (Greek: spiral) + Pteron (Greek: wing)', detail: 'A combination of two Greek roots.' },
        { word: 'Chauffeur', options: ['French', 'German', 'Latin', 'Italian'], answer: 'French', level: 'easy', path: 'Chauffeur → Chauffer (French: to heat)', detail: 'Originally referred to a stoker who heated a steam engine.' },
        { word: 'Ballet', options: ['Italian', 'French', 'Russian', 'Spanish'], answer: 'Italian', level: 'medium', path: 'Ballet → Balletto (Italian)', detail: 'The term comes from the Italian diminutive of "ballo" (dance).' },
        { word: 'Zèbre', options: ['Portuguese', 'French', 'African', 'Arabic'], answer: 'Portuguese', level: 'medium', path: 'Zèbre → Zebra (Portuguese)', detail: 'Originates from Portuguese explorers.' },
        { word: 'Boulevard', options: ['German', 'French', 'Dutch', 'Latin'], answer: 'German', level: 'hard', path: 'Boulevard → Bollwerk (German/Dutch: bulwark)', detail: 'Originally a military term for a defensive wall.' },
        { word: 'Pyjama', options: ['Hindi/Urdu', 'Persian', 'Arabic', 'Turkish'], answer: 'Hindi/Urdu', level: 'hard', path: 'Pyjama → Pay-jama (Hindi/Urdu)', detail: 'Meaning "leg garment".' }
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['fr'] = data;
})();
