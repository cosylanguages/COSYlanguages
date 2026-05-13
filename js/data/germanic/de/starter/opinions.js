(function() {
    const data = [
      { t:"Katzen sind besser als Hunde.", tag:"Pets", h:["Hast du eine Katze oder einen Hund?","Was magst du an Katzen? Was magst du an Hunden?","Sind Katzen einfach oder schwierig?","Was ist ein guter Name für ein Haustier?","Haben deine Freunde Haustiere?"] },
      { t:"Der Morgen ist die beste Tageszeit.", tag:"Daily life", h:["Um wie viel Uhr wachst du auf?","Was machst du am Morgen?","Fühlst du dich am Morgen gut?","Ist der Abend besser für dich?","Was isst du am Morgen?"] },
      { t:"Tee ist besser als Kaffee.", tag:"Drinks", h:["Trinkst du Tee oder Kaffee?","Wie viele Tassen trinkst du jeden Tag?","Trinkst du heiße oder kalte Getränke?","Was trinkst du am Morgen?","Was ist ein beliebtes Getränk in deinem Land?"] },
      { t:"Kochen macht Spaß.", tag:"Food", h:["Kochst du zu Hause?","Was kochst du?","Ist es einfach oder schwierig?","Wer kocht in deiner Familie?","Was machst du am liebsten?"] },
      { t:"Kaltes Wetter ist schön.", tag:"Weather", h:["Wie ist das Wetter heute?","Magst du Regen oder Sonne?","Was trägst du bei kaltem Wetter?","Was machst du, wenn es kalt ist?","Was ist deine Lieblingsjahreszeit?"] },
      { t:"Montag ist ein schlechter Tag.", tag:"Daily life", h:["Was machst du am Montag?","Was ist dein Lieblingswochentag?","Ist das Wochenende zu kurz?","Was machst du am Freitag?","Magst du deine Wochenroutine?"] },
      { t:"Schokolade ist sehr gut.", tag:"Food", h:["Magst du Schokolade?","Was ist deine liebste Süßigkeit?","Isst du viel Schokolade?","Ist Schokolade gesund?","Was isst du, wenn du glücklich bist?"] },
      { t:"Kleinstädte sind besser als Großstädte.", tag:"Places", h:["Lebst du in einer Kleinstadt oder einer Großstadt?","Was ist gut an einer Kleinstadt?","Was ist gut an einer Großstadt?","Ist deine Stadt laut?","Wo möchtest du in Zukunft leben?"] },
      { t:"Es ist gut, viele Freunde zu haben.", tag:"People", h:["Wie viele Freunde hast du?","Was machst du mit deinen Freunden?","Ist ein guter Freund besser als viele Freunde?","Wo triffst du deine Freunde?","Was ist ein guter Freund?"] },
      { t:"Schlafen ist die beste Beschäftigung.", tag:"Daily life", h:["Wie viele Stunden schläfst du?","Schläfst du gut?","Wann gehst du ins Bett?","Schläfst du am Nachmittag?","Ist Schlafen deine Lieblingsbeschäftigung?"] },
      { t:"Musik ist besser als Fernsehen.", tag:"Free time", h:["Hörst du jeden Tag Musik?","Welche Musik magst du?","Wie viele Stunden siehst du fern?","Was ist deine Lieblingssendung?","Was machst du am Abend?"] },
      { t:"Es ist wichtig, zu frühstücken.", tag:"Food", h:["Frühstückst du jeden Tag?","Was isst du am Morgen?","Ist das Frühstück eine große Mahlzeit für dich?","Frühstückst du zu Hause?","Was ist ein typisches Frühstück in deinem Land?"] },
      { t:"Schwimmen macht Spaß.", tag:"Sport", h:["Kannst du schwimmen?","Magst du Wasser?","Wo schwimmst du — im Pool oder im Meer?","Welchen Sport magst du?","Ist Sport wichtig für dich?"] },
      { t:"Alte Filme sind langweilig.", tag:"Entertainment", h:["Welche Filme magst du?","Siehst du alte oder neue Filme?","Wer ist dein Lieblingsschauspieler?","Was ist ein guter Film?","Wo siehst du Filme?"] },
      { t:"Ananas auf der Pizza ist eine tolle Idee.", tag:"Food", h:["Magst du Pizza?","Was ist dein Lieblingsbelag?","Tust du Obst auf herzhaftes Essen?","Ist das in deinem Land beliebt?","Was ist für dich der schlechteste Pizzabelag?"] }
    ];
    const lang = "de";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();