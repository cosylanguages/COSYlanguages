(function() {
    const lang = "br";
    const data = [
      { t:"Gwell eo ar kizhier eget ar chas.", tag:"Pets", h:["Ur c'hazh pe ur c'hi az peus?","Petra a garit er c'hizhier? Petra a garit er chas?","Hag-eñ eo aes pe diaes ar c'hizhier?","Petra eo un anv mat evit ul loen-ti?","Hag-eñ o deus da vignoned loened-ti?"] },
      { t:"Ar mintin eo an amzer wellañ eus an deiz.", tag:"Daily life", h:["Da bet eur e tihunit?","Petra a rit d'ar mintin?","Hag-eñ e santit mat d'ar mintin?","Hag-eñ eo gwelloc'h an abardaez evidoc'h?","Petra a zebrit d'ar mintin?"] },
      { t:"Gwelloc'h eo an te eget ar c'hafe.", tag:"Drinks", h:["Hag-eñ e basit te pe kafe?","Pet tasad a basit bemdez?","Hag-eñ e basit diedoù tomm pe yen?","Petra a basit d'ar mintin?","Petra eo an died voutin en ho pro?"] },
      { t:"Plijus eo poazhañ.", tag:"Food", h:["Hag-eñ e poazhit er gêr?","Petra a boazhit?","Hag-eñ eo aes pe diaes?","Piv a boazh en ho tiegezh?","Petra eo ho tra wellañ da boazhañ?"] },
      { t:"C'hwek eo an amzer yen.", tag:"Weather", h:["Penaos eo an amzer hiziv?","Hag-eñ e karit ar glav pe an heol?","Petra a wiskit pa vez yen an amzer?","Petra a rit pa vez yen?","Petra eo ho koulz-bloaz karetañ?"] },
      { t:"Un deiz fall eo al lun.", tag:"Daily life", h:["Petra a rit d'al lun?","Petra eo ho teiz karetañ eus ar sizhun?","Hag-eñ eo re verr an dibenn-sizhun?","Petra a rit d'ar gwener?","Hag-eñ e karit ho reolenn-sizhun?"] },
      { t:"Mat-tre eo ar chokolad.", tag:"Food", h:["Hag-eñ e karit ar chokolad?","Petra eo ho poed dous karetañ?","Hag-eñ e zebrit kalz chokolad?","Hag-eñ eo yac'h ar chokolad?","Petra a zebrit pa vezit laouen?"] },
      { t:"Gwelloc'h eo ar c'hêrioù bihan eget ar c'hêrioù bras.", tag:"Places", h:["Hag-eñ e chomoc'h en ur gêriadenn pe en ur gêr?","Petra eo ar pezh a zo mat en ur gêr vihan?","Petra eo ar pezh a zo mat en ur gêr vras?","Hag-eñ eo trouzus ho kêr?","Pelec'h e karit chom en dazont?"] },
      { t:"Mat eo kaout kalz mignoned.", tag:"People", h:["Pet mignon az peus?","Petra a rit gant ho mignoned?","Hag-eñ eo gwelloc'h ur mignon mat eget kalz mignoned?","Pelec'h e kejit gant ho mignoned?","Petra eo ur mignon mat?"] },
      { t:"Kousket eo an obererezh gwellañ.", tag:"Daily life", h:["Pet eurvezh e kouskit?","Hag-eñ e kouskit mat?","Da bet eur e tait d'ar gwele?","Hag-eñ e kouskit d'an endervezh?","Hag-eñ eo kousket ho tra garetañ?"] },
      { t:"Gwelloc'h eo ar sonerezh eget ar skinwel.", tag:"Free time", h:["Hag-eñ e selaouit sonerezh bemdez?","Peseurt sonerezh a garit?","Pet eurvezh skinwel e sellit outo?","Petra eo ho programm karetañ?","Petra a rit d'an abardaez?"] },
      { t:"Pouezus eo debriñ lein.", tag:"Food", h:["Hag-eñ e zebrit lein bemdez?","Petra a zebrit d'ar mintin?","Hag-eñ eo lein ur pred bras evidoc'h?","Hag-eñ e zebrit lein er gêr?","Petra eo ul lein skouer en ho pro?"] },
      { t:"Plijus eo neuñviñ.", tag:"Sport", h:["Hag-eñ e ouzit neuñviñ?","Hag-eñ e karit an dour?","Pelec'h e neuñvit — er poull-neuñv pe er mor?","Peseurt sport a garit?","Hag-eñ eo pouezus ar sport evidoc'h?"] },
      { t:"Lous eo ar filmoù kozh.", tag:"Entertainment", h:["Peseurt filmoù a garit?","Hag-eñ e sellit ouzh filmoù kozh pe nevez?","Piv eo ho c'hoarier karetañ?","Petra eo ur film mat?","Pelec'h e sellit ouzh filmoù?"] },
      { t:"Ur mennozh meur eo an ananaz war ar pizza.", tag:"Food", h:["Hag-eñ e karit ar pizza?","Petra eo ho kornad karetañ?","Hag-eñ e lakaoc'h frouezh war boued sall?","Hag-eñ eo brudet kement-mañ en ho pro?","Petra eo ar gornad pizza fallañ evidoc'h?"] }
    ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();
