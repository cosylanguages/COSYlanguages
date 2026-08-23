(function() {
    const data = {
      fluency: [
        'Dein perfektes Urlaubsziel 🌴',
        'Eine Fähigkeit, die du gerne hättest 🎸',
        'Das beste Essen, das du je gegessen hast 🍜',
        'Ein Ort, den du besuchen möchtest 🗺️',
        'Deine Lieblingsjahreszeit und warum 🍂',
        'Eine Kindheitserinnerung 🧸',
        'Die interessanteste Person, die du kennst 🙋',
        'Was würdest du mit 1 Million Euro tun? 💰',
        'Beschreibe dein perfektes Wochenende ☀️',
        'Ein Buch oder Film, der deine Sicht verändert hat 📚'
      ],
      opinions: [
        { text: 'Soziale Medien schaden mehr als sie nützen.', level: 'intermediate' },
        { text: 'Jeder sollte mindestens zwei Sprachen lernen.', level: 'intermediate' },
        { text: 'Homeoffice ist besser als Arbeit im Büro.', level: 'intermediate' },
        { text: 'Geld kann kein Glück kaufen.', level: 'intermediate' },
        { text: 'Technologie macht uns weniger sozial.', level: 'intermediate' }
      ],
      battle: [
        ['Berge 🏔️', 'Strand 🏖️'],
        ['Kaffee ☕', 'Tee 🍵'],
        ['Frühaufsteher 🌅', 'Nachteule 🦉'],
        ['Stadtleben 🏙️', 'Landleben 🌾'],
        ['Lesen 📚', 'Filme schauen 🎬'],
        ['Sommer ☀️', 'Winter ❄️']
      ],
      critic: [],
      action: {
        starter: ['Katze', 'Hund', 'Haus', 'Auto', 'Buch', 'Wasser', 'Sonne', 'Mond', 'Baum', 'Telefon'],
        elementary: ['Küche', 'Garten', 'Zug', 'Arzt', 'Lehrer', 'Musik', 'Geburtstag', 'Schwimmen'],
        intermediate: ['Museum', 'Interview', 'Architekt', 'Journalist', 'Parlament', 'Orchester', 'Marathon'],
        upper_intermediate: ['Philanthropie', 'Botschafter', 'Hypothese', 'Unternehmer', 'Archäologie'],
        advanced: ['Paradigma', 'Gegenüberstellung', 'Anachronismus', 'Glaubwürdigkeit'],
        proficiency: ['Allgegenwart', 'Flüchtigkeit', 'Scharfsinn', 'Gleichmut']
      },
      identity: [
        { person: 'Ein Feuerwehrmann', clue: 'Er trägt einen Helm und löscht Feuer mit Wasser.', level: 'elementary' },
        { person: 'Ein Koch', clue: 'Er arbeitet in einer Küche und bereitet Speisen zu.', level: 'elementary' },
        { person: 'Ein Astronaut', clue: 'Er reist jenseits unseres Planeten.', level: 'intermediate' }
      ],
      wordlinker: [
        { words: ['Apfel', 'Orange', 'Banane', 'Karotte'], odd: 'Karotte', link: 'Früchte', oddReason: 'Karotte ist ein Gemüse' },
        { words: ['Paris', 'Rom', 'Tokio', 'Amazonas'], odd: 'Amazonas', link: 'Hauptstädte', oddReason: 'Amazonas ist ein Fluss' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['de'] = data;
})();
