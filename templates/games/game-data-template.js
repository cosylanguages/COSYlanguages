/**
 * COSYlanguages Game Data Template
 *
 * Game IDs:
 * - fluency (Fluency Flow)
 * - opinions (Opinion Arena)
 * - battle (Battle of Wits)
 * - critic (Critic's Corner)
 * - action (Action Hero)
 * - identity (Identity Mystery)
 * - wordlinker (Word Linker)
 * - etymology (Etymology Explorer)
 */
(function() {
    const data = {
      fluency: [
        'Topic statement 1 🌴',
        'Topic statement 2 🎸'
      ],
      opinions: [
        { text: 'Opinion statement 1.', level: 'intermediate' },
        { text: 'Opinion statement 2.', level: 'intermediate' }
      ],
      battle: [
        ['Option A1 🏔️', 'Option A2 🏖️'],
        ['Option B1 ☕', 'Option B2 🍵']
      ],
      critic: [], // Quotes for Critic's Corner: "Quote" — Author
      action: {
        // Use short codes for levels
        A1: ['Word1', 'Word2'],
        A2: ['Word3'],
        B1: [],
        B2: [],
        C1: [],
        C2: []
      },
      identity: [
        { person: 'Role/Identity', clue: 'Description of the role.', level: 'starter' }
      ],
      wordlinker: [
        { words: ['W1', 'W2', 'W3', 'W4'], odd: 'W4', link: 'Category Name', oddReason: 'Why W4 is odd.' }
      ],
      etymology: [], // Word history data (if language-specific)
      storychain: [] // List of words for Story Chain
    };

    window.gameData = window.gameData || {};
    window.gameData['xx'] = data; // Replace 'xx' with ISO code (e.g., 'en', 'fr')
})();
