(function() {
    const lang = "br";
    const data = [
        { t: "Ho tiegezh", h: ["Pet den a zo en ho tiegezh ?","Ha breudeur pe c'hoarezed hoc'h eus ?","Pelec'h emañ ho tiegezh o chom ?","Gant piv emaoc'h o chom ?","Petra a rit asambles evel tiegezh ?"], level: "starter", theme: "people" },
        { t: "Ho ti", h: ["Pet kambr a zo en ho ti ?","Peini eo ho kambr vuraout ?","Hag ho ti a zo bras pe bihan ?","Petra a welit dre ho prenestr ?","Ha plijout a ra ho ti deoc'h ?"], level: "starter", theme: "furniture" },
        { t: "Ho meuz muiañ-karet", h: ["Peini eo ho meuz muiañ-karet ?","Ha plijout a ra deoc'h boued dous pe sall ?","Ha poazhañ a rit boued er gêr ?","Peseurt boued n'ho peus ket plijadur gantañ ?","Petra a zebrit evit lein ?"], level: "starter", theme: "food_drink" },
        { t: "Ho reolenn-vintin", h: ["Da bet eur e tivunoc'h ?","Petra eo an dra gentañ a rit ?","Ha debriñ a rit lein ?","Penaos e tait d'al labour pe d'ar skol ?","Hag ho mintin a zo sioul pe gant kalz traoù ?"], level: "starter", theme: "work" },
        { t: "Ho loen-ti pe ul loen a fell deoc'h", h: ["Hoc'h eus ul loen-ti ?","Peseurt loen a blij deoc'h ?","Petra eo un anv mat evit ul loen-ti ?","Ha plijout a ra deoc'h muioc'h ar chas pe ar c'hizhier ?","Hag aes eo kaout ul loen-ti ?"], level: "starter", theme: "animals" },
        { t: "Ur sport a blij deoc'h", h: ["Peseurt sport a blij deoc'h ?","Ha c'hoari a rit pe sellout ?","Pegoulz e rit ar sport-mañ ?","Hag ur sport a-stroll pe unan e-unan eo ?","Hag ar sport a zo pouezus deoc'h ?"], level: "starter", theme: "social" },
        { t: "Petra a rit e-kerzh an dibenn-sizhun", h: ["Petra a rit d'ar Sadorn peurvuiañ ?","Ha mont a rit er-maez pe chom er gêr ?","Ha gwelet a rit mignoned ?","Petra a blij deoc'h ober evit diskuizhañ ?","Hag ho tiben-sizhun a zo gant kalz traoù pe sioul ?"], level: "starter", theme: "social" },
        { t: "Hoc'h amzer-vloaz muiañ-karet", h: ["Peini eo hoc'h amzer-vloaz muiañ-karet ?","Penaos eo an amzer ?","Petra a ra an dud e-kerzh an amzer-vloaz-mañ ?","Petra a wiskioc'h ?","Perak e plij deoc'h an amzer-vloaz-mañ ?"], level: "starter", theme: "nature" },
        { t: "Ho mignon gwellañ", h: ["Petra eo anv ho mignon gwellañ ?","Pelec'h hoc'h eus kejet ?","Petra a rit asambles ?","Penaos eo o neuz ?","Perak eo ho mignon gwellañ ?"], level: "starter", theme: "people" },
        { t: "Ho labour pe ho skol", h: ["Petra a rit — labourat pe studiañ ?","Petra a blij deoc'h en dra-se ?","Da bet eur e krogit ?","Gant piv e labourit pe e studit ?","Hag aes pe diaes eo ?"], level: "starter", theme: "jobs" },
        { t: "Traoù a blij deoc'h ha traoù n'o peus ket plijadur ganto", h: ["Petra eo an dra a blij deoc'h e gwirionez ?","Petra eo an dra n'ho peus ket plijadur gantañ ?","Ha plijout a ra deoc'h an amzer yen ?","Ha plijout a ra deoc'h poazhañ boued ?","Ha plijout a ra deoc'h sevel abred ?"], level: "starter", theme: "emotions" },
        { t: "Ho liv muiañ-karet ha perak", h: ["Peini eo ho liv muiañ-karet ?","Pelec'h e welit al liv-mañ ?","Ha wiskañ a rit al liv-mañ ?","Hag al liv-mañ a zo en ho ti ?","Ha plijout a ra al liv-mañ d'ho mignoned ivez ?"], level: "starter", theme: "colours" },
        { t: "Chifroù en ho puhez", h: ["Pet bloaz oc'h ?","Peini eo ho chifr a chans ?","Pet den a zo o chom en ho ti ?","Da bet eur e tivunoc'h ?","Pet yezh a gomzit ?"], level: "starter", theme: "numbers_0_9" },
        { t: "Ho lived muiañ-karet", h: ["Petra a evit da vintin ?","Ha gwelloc'h eo deoc'h te pe kafe ?","Hag evañ a rit kalz dour ?","Petra eo ul lived dibar en ho pro ?","Petra a evit pa oc'h laouen ?"], level: "starter", theme: "food_drink" },
        { t: "Ho pro", h: ["Peini eo ho pro ?","Peini eo ar gêr-benn ?","Penaos eo an amzer ?","Peseurt boued a zo brudet eno ?","Petra a garit en ho pro ?"], level: "starter", theme: "countries_capitals" },
        { t: "Traoù en ho kambr-dour", h: ["Peseurt arrebeuri a zo en ho kambr ?","Peseurt liv eo ho kambr ?","Hag ur gambr vras pe vihan eo ?","Petra a zo war ho taol ?","Ha plijout a ra ho kambr deoc'h ?"], level: "starter", theme: "furniture_objects" },
        { t: "Hoc'h devezh peurvuiañ", h: ["Da bet eur e krogit gant hoc'h devezh ?","Petra a rit da vintin ?","Petra a zebrit evit merenn ?","Petra a rit d'an noz ?","Da bet eur e tait da gousket ?"], level: "starter", theme: "work" },
        { t: "Traoù a welit dre ho prenestr", h: ["Petra a zo er-maez d'ho prenestr ?","Ha gwelet a rit gwez pe savadurioù ?","Petra a glevit ?","Hag ur gwel sioul pe gant kalz traoù eo ?","Ha plijout a ra ar gwel-mañ deoc'h ?"], level: "starter", theme: "furniture_objects" },
        { t: "Sonerezh a blij deoc'h", h: ["Peseurt sonerezh a selaouit ?","Piv eo ho kaner muiañ-karet ?","Pegoulz e selaouit sonerezh ?","Ha gallout a rit kanañ pe c'hoari gant ur benveg-seniñ ?","Peseurt sonenn a laka ac'hanoc'h da vezañ laouen ?"], level: "starter", theme: "music" },
        { t: "Ho lec'h muiañ-karet en ho kêr", h: ["Peini eo ho lec'h muiañ-karet ?","Pelec'h emañ ?","Perak e plij deoc'h ?","Ha mont a rit di alies ?","Gant piv e tait di ?"], level: "starter", theme: "places" }
    ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();
