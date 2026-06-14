(function() {
    const data = {
      fluency: [
        'Your perfect holiday destination 🌴','A skill you wish you had 🎸','The best meal you ever ate 🍜',
        'A place you want to visit 🗺️','Your favourite season and why 🍂','A childhood memory 🧸',
        'The most interesting person you know 🙋','What would you do with 1 million euros? 💰',
        'Describe your perfect weekend ☀️','A book or film that changed your view 📚',
        'If you could live anywhere in the world… 🌍','Your morning routine ☕',
        'Something you\'re proud of 🏆','What does happiness mean to you? 😊',
        'The last time you tried something new 🎯',
      ],
      opinions: [
        'Social media does more harm than good.','Everyone should learn at least two languages.',
        'Working from home is better than office work.','Money can\'t buy happiness.',
        'Technology makes us less sociable.','It\'s never too late to learn something new.',
        'Travel is the best form of education.','Animals should not be kept in zoos.',
        'Fast food is one of the worst inventions.','Reading books is more valuable than watching films.',
        'Cities are better places to live than the countryside.','Artificial intelligence will change everything.',
        'Cooking at home is always better than eating out.','Children should learn a musical instrument.',
        'The world would be better with one universal language.',
      ],
      battle: [
        ['Mountains 🏔️','Beach 🏖️'],['Coffee ☕','Tea 🍵'],['Morning person 🌅','Night owl 🦉'],
        ['City life 🏙️','Country life 🌾'],['Reading 📚','Watching films 🎬'],
        ['Summer ☀️','Winter ❄️'],['Cats 🐱','Dogs 🐶'],['Working from home 🏠','Office work 🏢'],
        ['Sweet 🍰','Savoury 🧀'],['Travelling alone ✈️','Travelling with friends 👥'],
      ],
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
      action: {
        A1: ['Cat','Dog','House','Car','Book','Water','Sun','Moon','Tree','Phone','Door','Chair','Bed','Food','Fish'],
        A2: ['Kitchen','Garden','Train','Doctor','Teacher','Music','Birthday','Swimming','Holiday','Shopping'],
        B1: ['Museum','Interview','Architect','Journalist','Parliament','Orchestra','Marathon','Exhibition'],
        B2: ['Philanthropy','Ambassador','Hypothesis','Entrepreneur','Archaeology','Telescope','Symposium'],
      },
      identity: [
        { person:'A firefighter', clue:'They wear a helmet and fight with water.' },
        { person:'A chef', clue:'They work in a kitchen and create dishes.' },
        { person:'An astronaut', clue:'They travel beyond our planet.' },
        { person:'A librarian', clue:'They are surrounded by books all day.' },
        { person:'A detective', clue:'They solve mysteries and look for clues.' },
        { person:'A musician', clue:'They use instruments to create sound.' },
        { person:'An architect', clue:'They design buildings before they are built.' },
        { person:'A surgeon', clue:'They operate on people inside a hospital.' },
        { person:'A diplomat', clue:'They work between governments of different countries.' },
        { person:'A marine biologist', clue:'They study life in the ocean.' },
      ],
      wordlinker: [
        { words:['Apple','Orange','Banana','Carrot'], odd:'Carrot', link:'Fruits', oddReason:'Carrot is a vegetable' },
        { words:['Paris','Rome','Tokyo','Amazon'], odd:'Amazon', link:'Capital cities', oddReason:'Amazon is a river, not a city' },
        { words:['Piano','Guitar','Violin','Trumpet'], odd:'none', link:'Musical instruments', oddReason:'All are instruments' },
        { words:['Happy','Joyful','Melancholy','Cheerful'], odd:'Melancholy', link:'Happy synonyms', oddReason:'Melancholy means sad' },
        { words:['Run','Jump','Sleep','Swim'], odd:'Sleep', link:'Active physical verbs', oddReason:'Sleep is passive' },
        { words:['Red','Blue','Heavy','Green'], odd:'Heavy', link:'Colours', oddReason:'Heavy is not a colour' },
        { words:['Shakespeare','Dickens','Picasso','Austen'], odd:'Picasso', link:'English authors', oddReason:'Picasso was a Spanish painter' },
        { words:['Sunrise','Dawn','Dusk','Twilight'], odd:'none', link:'Times of day near sunrise/sunset', oddReason:'All describe transitional light' },
      ],
      etymology: [
        { word: 'Astronomy', options: ['Greek', 'Latin', 'Arabic', 'Sanskrit'], answer: 'Greek', level: 'easy', path: 'Astronomy → Astronomia (Latin) → Astronomia (Greek)', detail: 'From "astron" (star) + "nomos" (law).' },
        { word: 'Library', options: ['Latin', 'French', 'Greek', 'Germanic'], answer: 'Latin', level: 'easy', path: 'Library → Librairie (French) → Librarium (Latin)', detail: 'From "liber" (book).' },
        { word: 'Ballet', options: ['French', 'Italian', 'Russian', 'Spanish'], answer: 'French', level: 'easy', path: 'Ballet → Balletto (Italian) → Ballo (dance)', detail: 'Diminutive of "ballo".' },
        { word: 'Pizza', options: ['Italian', 'Greek', 'Latin', 'Arabic'], answer: 'Italian', level: 'easy', path: 'Pizza → Pitta (Greek?)', detail: 'Became famous as an Italian dish.' },
        { word: 'Biology', options: ['Greek', 'Latin', 'French', 'Dutch'], answer: 'Greek', level: 'easy', path: 'Biology → Biologie (German/French) → Bios + Logia (Greek)', detail: 'From "bios" (life) + "logia" (study).' },
        { word: 'Hotel', options: ['French', 'Latin', 'Spanish', 'German'], answer: 'French', level: 'easy', path: 'Hotel → Hôtel (French) → Hostel (Old French) → Hospitale (Latin)', detail: 'Related to "hospitality".' },

        { word: 'Algebra', options: ['Arabic', 'Greek', 'Latin', 'Persian'], answer: 'Arabic', level: 'medium', path: 'Algebra → Al-jabr (Arabic)', detail: 'Meaning "reunion of broken parts".' },
        { word: 'Safari', options: ['Arabic', 'Swahili', 'Hindi', 'Zulu'], answer: 'Arabic', level: 'medium', path: 'Safari → Safari (Swahili) → Safar (Arabic)', detail: 'From "safara" (to travel).' },
        { word: 'Robot', options: ['Czech', 'Russian', 'German', 'Polish'], answer: 'Czech', level: 'medium', path: 'Robot → Robota (Czech)', detail: 'Coined by Josef Čapek from "robota" (forced labour).' },
        { word: 'Ketchup', options: ['Chinese', 'Malay', 'English', 'French'], answer: 'Chinese', level: 'medium', path: 'Ketchup → Kôe-chiap (Hokkien Chinese)', detail: 'Originally a fermented fish sauce.' },
        { word: 'Chocolate', options: ['Nahuatl', 'Spanish', 'Maya', 'French'], answer: 'Nahuatl', level: 'medium', path: 'Chocolate → Chocolate (Spanish) → Xocolātl (Nahuatl)', detail: 'Meaning "bitter water".' },
        { word: 'Lemon', options: ['Arabic', 'Old French', 'Persian', 'Hindi'], answer: 'Arabic', level: 'medium', path: 'Lemon → Limon (Old French) → Laymun (Arabic) → Limun (Persian)', detail: 'Ancient roots in Asia.' },

        { word: 'Juggernaut', options: ['Sanskrit', 'Hindi', 'Tamil', 'Persian'], answer: 'Sanskrit', level: 'hard', path: 'Juggernaut → Jagannatha (Sanskrit)', detail: 'Lord of the World, a title for Krishna.' },
        { word: 'Quarantine', options: ['Italian', 'French', 'Latin', 'Spanish'], answer: 'Italian', level: 'hard', path: 'Quarantine → Quarantina (Italian) → Quaranta (forty)', detail: 'Forty days of isolation for ships.' },
        { word: 'Assassin', options: ['Arabic', 'Persian', 'Turkish', 'French'], answer: 'Arabic', level: 'hard', path: 'Assassin → Assassins (French) → Hashshashin (Arabic)', detail: 'Refers to a specific sect.' },
        { word: 'Clue', options: ['Greek', 'Latin', 'Old English', 'French'], answer: 'Greek', level: 'hard', path: 'Clue → Clew (Old English) → Ariadne\'s Thread (Greek Myth)', detail: 'Originally meant a ball of thread.' },
        { word: 'Buck', options: ['American English', 'Old English', 'Germanic', 'Dutch'], answer: 'American English', level: 'hard', path: 'Buck → Buckskin (unit of trade)', detail: 'Units of trade on the American frontier.' },
        { word: 'Pajamas', options: ['Hindi/Urdu', 'Persian', 'Arabic', 'Turkish'], answer: 'Hindi/Urdu', level: 'hard', path: 'Pajamas → Pay-jama (Hindi/Urdu) → Pa-jameh (Persian)', detail: 'Pā (leg) + jāmeh (garment).' }
      ],
    };

    window.gameData = window.gameData || {};
    window.gameData['en'] = data;
})();
