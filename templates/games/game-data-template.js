(function() {
    const data = {
      fluency: [
        'Topic statement 1 🌴',
        'Topic statement 2 🎸'
      ],
      opinions: [
        'Opinion statement 1.',
        'Opinion statement 2.'
      ],
      battle: [
        ['Option A1 🏔️', 'Option A2 🏖️'],
        ['Option B1 ☕', 'Option B2 🍵']
      ],
      critic: [], // Quotes for Critic's Corner (if any)
      action: {
        A1: ['Word1', 'Word2'],
        A2: ['Word3'],
        B1: [],
        B2: [],
        C1: [],
        C2: []
      },
      identity: [
        { person: 'Role/Identity', clue: 'Description of the role.' }
      ],
      wordlinker: [
        { words: ['W1', 'W2', 'W3', 'W4'], odd: 'W4', link: 'Category Name', oddReason: 'Why W4 is odd.' }
      ],
      etymology: [] // Etymology data if language-specific
    };

    window.gameData = window.gameData || {};
    window.gameData['xx'] = data; // Replace 'xx' with ISO code
})();
