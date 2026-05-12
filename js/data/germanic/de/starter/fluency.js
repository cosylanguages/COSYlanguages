(function() {
    const data = [
        { t: "Deine Familie", h: ["Wie viele Personen sind in deiner Familie?","Hast du Brüder oder Schwestern?","Wo wohnt deine Familie?","Mit wem wohnst du zusammen?","Was macht ihr gemeinsam als Familie?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Dein Zuhause", h: ["Wie viele Zimmer hat dein Zuhause?","Was ist dein Lieblingszimmer?","Ist dein Zuhause groß oder klein?","Was kannst du aus deinem Fenster sehen?","Magst du dein Zuhause?"], level: "starter", theme: "rooms_of_a_home_A1" },
        { t: "Dein Lieblingsessen", h: ["Was ist deine Lieblingsmahlzeit?","Magst du süßes oder salziges Essen?","Kochst du zu Hause?","Welches Essen magst du nicht?","Was isst du zum Frühstück?"], level: "starter", theme: "basic_foods_A1" },
        { t: "Deine Morgenroutine", h: ["Um wie viel Uhr wachst du auf?","Was ist das Erste, was du machst?","Isst du Frühstück?","Wie gehst du zur Arbeit oder zur Schule?","Ist dein Morgen ruhig oder stressig?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Dein Haustier oder ein Haustier, das du dir wünschst", h: ["Hast du ein Haustier?","Welches Tier magst du?","Was ist ein guter Name für ein Haustier?","Bist du ein Hundemensch oder ein Katzenmensch?","Ist es einfach, ein Haustier zu haben?"], level: "starter", theme: "animals_A1" },
        { t: "Ein Sport, den du magst", h: ["Welchen Sport magst du?","Spielst du oder schaust du zu?","Wann treibst du diesen Sport?","Ist es ein Mannschaftssport oder Einzelsport?","Ist Sport wichtig für dich?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Was du am Wochenende machst", h: ["Was machst du normalerweise am Samstag?","Gehst du aus oder bleibst du zu Hause?","Triffst du Freunde?","Was machst du gerne zur Entspannung?","Ist dein Wochenende geschäftig oder ruhig?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Deine Lieblingsjahreszeit", h: ["Was ist deine Lieblingsjahreszeit?","Wie ist das Wetter?","Was machen die Leute in dieser Jahreszeit?","Was trägst du?","Warum magst du diese Jahreszeit?"], level: "starter", theme: "seasons_climate_A1" },
        { t: "Dein bester Freund", h: ["Wie heißt dein bester Freund?","Wo habt ihr euch kennengelernt?","Was macht ihr zusammen?","Wie sehen sie aus?","Warum sind sie dein bester Freund?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Dein Job oder deine Schule", h: ["Was machst du — arbeiten oder studieren?","Was magst du daran?","Wann fängst du an?","Mit wem arbeitest oder studierst du zusammen?","Ist es einfach oder schwierig?"], level: "starter", theme: "job_titles_professions_A1" },
        { t: "Dinge, die du magst und nicht magst", h: ["Was ist eine Sache, die du wirklich magst?","Was ist eine Sache, die du nicht magst?","Magst du kaltes Wetter?","Magst du Kochen?","Magst du frühes Aufstehen?"], level: "starter", theme: "basic_positive_emotions_A1" },
        { t: "Deine Lieblingsfarbe und warum", h: ["Was ist deine Lieblingsfarbe?","Wo siehst du diese Farbe?","Trägst du diese Farbe?","Ist diese Farbe in deinem Zuhause?","Mögen deine Freunde diese Farbe auch?"], level: "starter", theme: "colours_patterns_A1" },
        { t: "Zahlen in deinem Leben", h: ["Wie alt bist du?","Was ist deine Glückszahl?","Wie viele Personen leben in deinem Zuhause?","Wann wachst du auf?","Wie viele Sprachen sprichst du?"], level: "starter", theme: "numbers_0_9_A1" },
        { t: "Dein Lieblingsgetränk", h: ["Was trinkst du am Morgen?","Bevorzugst du Tee oder Kaffee?","Trinkst du viel Wasser?","Was ist ein besonderes Getränk in deinem Land?","Was trinkst du, wenn du glücklich bist?"], level: "starter", theme: "drinks_A1" },
        { t: "Dein Land", h: ["Was ist dein Land?","Was ist die Hauptstadt?","Wie ist das Wetter?","Welches Essen ist dort berühmt?","Was liebst du an deinem Land?"], level: "starter", theme: "countries_capitals_A1" },
        { t: "Dinge in deinem Schlafzimmer", h: ["Welche Möbel sind in deinem Schlafzimmer?","Welche Farbe hat dein Schlafzimmer?","Ist es groß oder klein?","Was liegt auf deinem Schreibtisch oder Tisch?","Magst du dein Schlafzimmer?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Dein typischer Tag", h: ["Wann beginnst du deinen Tag?","Was machst du am Vormittag?","Was isst du zu Mittag?","Was machst du am Abend?","Wann gehst du ins Bett?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Dinge, die du aus deinem Fenster sehen kannst", h: ["Was ist außerhalb deines Fensters?","Kannst du Bäume oder Gebäude sehen?","Was hörst du?","Ist es eine ruhige oder belebte Aussicht?","Magst du diese Aussicht?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Musik, die du magst", h: ["Welche Musik hörst du?","Wer ist dein Lieblingssänger?","Wann hörst du Musik?","Kannst du singen oder ein Instrument spielen?","Welches Lied macht dich glücklich?"], level: "starter", theme: "music_A1" },
        { t: "Dein Lieblingsplatz in deiner Stadt", h: ["Was ist dein Lieblingsplatz?","Wo ist er?","Warum magst du ihn?","Gehst du oft dorthin?","Mit wem gehst du dorthin?"], level: "starter", theme: "local_places_services_A1" }
    ];
    const lang = "de";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();