(function() {
    const data = [
    {
        "id": "br_upper_intermediate_language_001",
        "lang": "br", t: "Dazont ar bed a-benn 50 vloaz", h: ["Peseurt cheñchamantoù teknologel a c'hortozit?","Penaos e vo an endro?","Hag-eñ e vo disheñvel frammoù ar gevredigezh?","Hag ez eus un dra bennak hag a laka ac'hanoc'h da vezañ nec'het?","Petra a laka ac'hanoc'h da vezañ spi en dazont?"] },
    {
        "id": "br_upper_intermediate_language_002",
        "lang": "br", t: "Levezon ar cheñchamant hin war ar c'humuniezhoù lec'hel", h: ["Penaos eo cheñchet ho korn-bro?","Peseurt riskloù resis a zo evit an dud?","Piv eo an dud an ezhommañ?","Hag-eñ e vez kemeret trawalc'h a gementoù-diwall?","Petra a c'hell an hiniennoù ober evit cheñch an traoù?"] },
    {
        "id": "br_upper_intermediate_language_003",
        "lang": "br", t: "Ur gredenn ho peus ha n'eo ket rannet gant an darn vrasañ eus an dud tro-dro deoc'h", h: ["Petra eo ar gredenn-se?","Pegoulz eo bet stummet ganeoc'h?","Hag-eñ ho peus bet kudennoù gant tud all abalamour d'an dra-se?","Hag-eñ e vez efedoù war ho liammoù gant an dud?","Hag-eñ eo cheñchet ar gredenn-se goude ur gaozeadenn?"] },
    {
        "id": "br_upper_intermediate_language_004",
        "lang": "br", t: "Ar pezh a rafec'h ma ne vijec'h ket aonik", h: ["Petra eo an dra a vir ouzhoc'h d'ober an aon?","Un aon poellek pe diboell eo?","Hag an aon en deus miret ouzhoc'h d'ober un dra bennak ho peus keuz dezhañ bremañ?","Penaos e vije ho puhez ma vijec'h tremenet dreist d'an aon-se?","Petra a lavarfec'h da unan bennak hag a zo o stourm gant an hevelep aon?"] },
    {
        "id": "br_upper_intermediate_language_005",
        "lang": "br", t: "An dra wellañ hag an dra fallañ e-lec'h ma oc'h bet o tont war-raok", h: ["Petra en deus ho stummet ar muiañ el lec'h-se?","Evit petra oc'h anaoudek?","Petra ho pije karet a vefe bet disheñvel?","Penaos en deus stummet ho talvoudoù?","Hag-eñ e savfec'h bugale eno?"] },
    {
        "id": "br_upper_intermediate_language_006",
        "lang": "br", t: "Penaos e vezit o merañ ar stress", h: ["Peseurt doareoù a implijit?","Hag-eñ e soñjit e vezit o merañ mat ar stress?","Petra a laka ac'hanoc'h da vezañ stresset-tre?","Hag-eñ eo cheñchet ho liamm gant ar stress?","Peseurt kuzul ho pije roet da unan bennak hag en deus poan gant ar stress?"] },
    {
        "id": "br_upper_intermediate_language_007",
        "lang": "br", t: "Un dra bennak a vezec'h o varn diagent hag a gomprenit bremañ", h: ["Petra e oa?","Petra a soñje deoc'h a-raok?","Petra en deus cheñchet ho spered?","Hag-eñ ho peus mezh gant ho soñj kozh?","Hag-eñ en deus graet ac'hanoc'h un den nebeutoc'h drouk o varn an dud all?"] },
    {
        "id": "br_upper_intermediate_language_008",
        "lang": "br", t: "Petra eo ar vignoniezh evidoc'h pa oc'h un den deuet", h: ["Hag-eñ eo disheñvel ar vignoniezh pa vezer un den deuet diouzh hini ar vugaleaj?","Pegement a vignoned nesañ ho peus?","Penaos e virit ho mignoniezhioù a-bell?","Hag-eñ ho peus kollet liammoù gant ur mignon abalamour m'eo cheñchet ho puhez?","Petra a laka ur vignoniezh da badout?"] },
    {
        "id": "br_upper_intermediate_language_009",
        "lang": "br", t: "Ur wech ma oc'h bet o faziañ penn-da-benn", h: ["Petra a zo degouezhet?","Pegement a amzer eo bet ret deoc'h evit kompren?","Petra eo bet koust ar fazi-se?","Penaos ho peus graet gant kement-mañ?","Petra ho peus desket?"] },
    {
        "id": "br_upper_intermediate_language_010",
        "lang": "br", t: "Ho liamm luziet gant ar mediaoù sokial", h: ["Hag-eñ e plij deoc'h, hag-eñ e tisprijit anezho, pe an eil hag egile?","Petra a gavit enno na c'hellit ket kavout e lec'h all?","Hag-eñ oc'h bet o santout gwashoc'h goude bezañ implijet anezho?","Hag-eñ e cheñch an doare ma tiskouezit ac'hanoc'h d'ar bed?","Ma c'hellfec'h kemmañ ar mediaoù sokial, petra a rafec'h?"] },
    {
        "id": "br_upper_intermediate_language_011",
        "lang": "br", t: "An dra a vez re-vrizhet e buhez an amzer-vremañ", h: ["Petra eo?","Perak e vez roet kement a bouez dezhañ gant an dud?","Pegoulz ho peus komprenet ne dalveze ket kement a drouz?","Hag-eñ e vez kement a efedoù gant ho soñj war an dud all?","Gant petra e vefe erlec'hiet ganeoc'h?"] },
    {
        "id": "br_upper_intermediate_language_012",
        "lang": "br", t: "Ur mare en deus cheñchet an doare ma welit ac'hanoc'h hoc'h-unan", h: ["Petra a zo degouezhet?","Hag-eñ e oach o c'hortoz e vefe kement a efedoù warnoc'h?","Hag-eñ eo bet cheñchet ho puhez a-daol-trumm pe tamm-ha-tamm?","Hag-eñ eo gwelloc'h ho 'c'hwi' goude ar mare-se?","Hag-eñ e rannfec'h kement-mañ gant un den nesañ?"] },
    {
        "id": "br_upper_intermediate_language_013",
        "lang": "br", t: "Un dra bennak a oc'h lorc'h ennoch gantañ e-unan", h: ["Petra eo?","Perak e-unan — perak ket uhel?","Pegement a amzer eo bet ret?","Hag-eñ e oar an dud nesañ diwar-benn kement-mañ?","Petra a lavar kement-mañ diwar-benn ho talvoudoù?"] },
    {
        "id": "br_upper_intermediate_language_014",
        "lang": "br", t: "Ho teorienn bersonel diwar-benn perak eo an dud evel m'int", h: ["An natur eo, an deskadurezh, pe un dra bennak all?","Hag-eñ e soñj deoc'h e c'hell an dud cheñch penn-da-benn?","Hag un den en deus ho souezhet penn-da-benn un deiz bennak?","Hag-eñ e soñjit e komprenit mat an dud?","Petra eo ar fazi brasañ a ra an dud an eil gant egile?"] },
    {
        "id": "br_upper_intermediate_language_015",
        "lang": "br", t: "Ar pezh a soñjit diwar-benn ar vallozh (ambition)", h: ["Un den a vallozh oc'h?","Hag ur dra vat eo ar vallozh atav?","Hag-eñ e c'hell ar vallozh ober droug d'ho puhez prevez?","Hag-eñ ho peus doujañs evit an dud o deus kalz a vallozh?","Pegement eo trawalc'h?"] },
    {
        "id": "br_upper_intermediate_language_016",
        "lang": "br", t: "Ho 'c'hwi' a-raok pemp bloaz", h: ["Petra e oach o ober?","Gant petra e oach nec'het?","Penaos e soñje deoc'h e vije ho puhez bremañ?","Petra e oa an dra bouezusañ na ouiech ket c'hoazh?","Hag-eñ e vijec'h mignoned gant ho 'c'hwi' eus an amzer-dremenet?"] },
    {
        "id": "br_upper_intermediate_language_017",
        "lang": "br", t: "Penaos e kemerit divizoù diaes", h: ["Hag-eñ e selaouit ho penn pe ho kalon?","Hag-eñ e kemerit divizoù buan pe goustad?","Hag-eñ e goulennit kuzulioù pe hag-eñ e tivizit hoc'h-unan?","Petra eo bet an diviz diaesañ ho peus ranket kemer?","Hag-eñ e vezit peoc'h ganeoc'h goude-se?"] },
    {
        "id": "br_upper_intermediate_language_018",
        "lang": "br", t: "An hiraezh (nostalgia) hag ar pezh a ra deoc'h", h: ["Diwar-benn petra ho peus hiraezh?","Hag-eñ e ro nerzh deoc'h an hiraezh pe hag-eñ e ra droug deoc'h?","Hag-eñ e oa gwelloc'h an amzer-dremenet e gwirionez pe hag-eñ e oa disheñvel hepken?","Hag-eñ e vir an hiraezh ouzhoc'h da vont war-raok?","Peseurt c'hwezh, son pe blaz a laka un eñvor da zont en-dro?"] },
    {
        "id": "br_upper_intermediate_language_019",
        "lang": "br", t: "Ar vrud — ur c'hastiz pe ur gopr?", h: ["Hag-eñ ho pije c'hoant da vezañ brudet?","Peseurt seurt brud ho pije?","Petra a gollfec'h?","Hag-eñ e soñj deoc'h eo eürus an darn vrasañ eus an dud vrudet?","Peseurt disheñvelder a zo etre ar vrud hag an doujañs?"] },
    {
        "id": "br_upper_intermediate_language_020",
        "lang": "br", t: "Ar pezh a laka ac'hanoc'h da vezañ lakaet skuizh hag ar pezh a laka ac'hanoc'h da vezañ entanet", h: ["Diwar-benn peseurt danvez pe obererezh e c'hellfec'h komz e-pad eurvezhioù?","Petra eo an dra na c'hellit ket gouzañv tamm ebet?","Hag-eñ e lavar ar pezh a blij deoc'h un dra bennak diwar-benn ho micher pe ho puez?","Hag un dra bennak a lakae ac'hanoc'h da vezañ skuizh a-raok a zo deuet da vezañ dedennus bremañ?","Petra eo an dra a gavit entanet hag a souezh an dud all?"] },
    {
        "id": "br_upper_intermediate_language_021",
        "lang": "br", t: "Ur wech ma oc'h bet ranket kregiñ en-dro gant pep tra", h: ["Petra a zo degouezhet a-raok kregiñ en-dro?","Un dibab eo bet pe ar vuhez he deus rediet ac'hanoc'h?","Petra eo bet ar pezh a zo bet ar muiañ diaes evit kregiñ en-dro?","Petra ho peus miret eus an amzer-gent?","Hag-eñ oc'h laouen eo degouezhet kement-mañ?"] },
    {
        "id": "br_upper_intermediate_language_022",
        "lang": "br", t: "Ar pezh a vez komprenet a-dreuz gant an dud diwar ho penn", h: ["Petra eo ar fazi a vez graet an aliesañ?","A-belec'h e teu kement-mañ?","Hag-eñ e tregas ac'hanoc'h?","Hag-eñ e klaskit reizhañ kement-mañ pe hag-eñ e lezit an traoù da vont?","Hag-eñ ez eus un tamm gwirionez ennañ a-benn ar fin?"] }
    ];
    const lang = "br";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();