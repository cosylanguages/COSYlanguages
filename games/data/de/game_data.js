(function() {
    const data = {
      fluency: [
        { text: 'Deine Morgenroutine ☕', level: 'starter' },
        { text: 'Eine Kindheitserinnerung 🧸', level: 'starter' },
        { text: 'Deine Lieblingsjahreszeit und warum 🍂', level: 'starter' },
        { text: 'Eine Fähigkeit, die du gerne hättest 🎸', level: 'elementary' },
        { text: 'Das beste Essen, das du je gegessen hast 🍜', level: 'elementary' },
        { text: 'Ein Ort, den du besuchen möchtest 🗺️', level: 'elementary' },
        { text: 'Dein perfektes Urlaubsziel 🌴', level: 'intermediate' },
        { text: 'Die interessanteste Person, die du kennst 🙋', level: 'intermediate' },
        { text: 'Beschreibe dein perfektes Wochenende ☀️', level: 'intermediate' },
        { text: 'Was würdest du mit 1 Million Euro tun? 💰', level: 'upper_intermediate' },
        { text: 'Ein Buch oder Film, der deine Sicht verändert hat 📚', level: 'upper_intermediate' },
        { text: 'Was bedeutet Glück für dich? 😊', level: 'advanced' }
      ],
      opinions: [
        { text: 'Soziale Medien schaden mehr als sie nützen.', level: 'intermediate' },
        { text: 'Jeder sollte mindestens zwei Sprachen lernen.', level: 'intermediate' },
        { text: 'Homeoffice ist besser als Arbeit im Büro.', level: 'intermediate' },
        { text: 'Geld kann kein Glück kaufen.', level: 'intermediate' },
        { text: 'Technologie macht uns weniger sozial.', level: 'intermediate' },
        { text: 'Ein bedingungsloses Grundeinkommen ist für zukünftige Wirtschaftssysteme notwendig.', level: 'upper_intermediate' },
        { text: 'Generative KI kann menschliche künstlerische Kreativität niemals ersetzen.', level: 'advanced' }
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
        { person: 'Ein Koch', clue: 'Er arbeitet in einer Küche und bereitet leckere Speisen zu.', level: 'elementary' },
        { person: 'Ein Astronaut', clue: 'Er reist in den Weltraum jenseits der Erde.', level: 'intermediate' },
        { person: 'Ein Bibliothekar', clue: 'Er leitet eine Bibliothek und hilft Menschen, Bücher zu finden.', level: 'elementary' },
        { person: 'Ein Detektiv', clue: 'Er ermittelt in Rätseln und sucht nach Hinweisen.', level: 'intermediate' },
        { person: 'Ein Architekt', clue: 'Er entwirft Häuser und Gebäude vor deren Bau.', level: 'upper_intermediate' },
        { person: 'Ein Diplomat', clue: 'Er vertritt sein Land in offiziellen internationalen Beziehungen.', level: 'advanced' }
      ],
      wordlinker: [
        { words: ['Apfel', 'Orange', 'Banane', 'Karotte'], odd: 'Karotte', link: 'Früchte', oddReason: 'Karotte ist ein Gemüse' },
        { words: ['Paris', 'Rom', 'Tokio', 'Amazonas'], odd: 'Amazonas', link: 'Hauptstädte', oddReason: 'Amazonas ist ein Fluss' },
        { words: ['Klavier', 'Gitarre', 'Geige', 'Trompete'], odd: 'none', link: 'Musikinstrumente', oddReason: 'Alle sind Musikinstrumente' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['de'] = data;
})();
