const fs = require('fs');

const ipaMaps = {
    'en': {
        "accountability": "əˌkaʊntəˈbɪləti", "incentive": "ɪnˈsɛntɪv", "autonomy": "ɔːˈtɒnəmi", "precarity": "prɪˈkɛərɪti",
        "redundancy package": "rɪˈdʌndənsi ˈpækɪdʒ", "entrepreneurship": "ˌɒntrəprəˈnɜːʃɪp", "productivity": "ˌprɒdʌkˈtɪvəti",
        "outsourcing": "ˈaʊtsɔːsɪŋ", "automation": "ˌɔːtəˈmeɪʃn", "gentrification": "ˌdʒɛntrɪfɪˈkeɪʃn",
        "affordable housing": "əˈfɔːdəbl ˈhaʊzɪŋ", "urban sprawl": "ˈɜːbən sprɔːl", "infrastructure": "ˈɪnfrəˌstrʌktʃə",
        "welfare state": "ˈwɛlfeə steɪt", "polarisation": "ˌpəʊləraɪˈzeɪʃn", "discourse": "ˈdɪskɔːs",
        "scrutiny": "ˈskruːtɪni", "consensus": "kənˈsɛnsəs", "legislation": "ˌlɛdʒɪsˈleɪʃn", "obesity": "əʊˈbiːsəti",
        "life expectancy": "laɪf ɪkˈspɛktənsi", "justice": "ˈdʒʌstɪs", "rehabilitation": "ˌriːəˌbɪlɪˈteɪʃn",
        "transparency": "trænsˈpærənsi", "algorithm": "ˈælɡərɪðəm", "data privacy": "ˈdeɪtə ˈprɪvəsi",
        "misinformation": "ˌmɪsɪnfəˈmeɪʃn", "surveillance": "sɜːˈveɪləns", "whereas": "ˌwɛərˈæz",
        "nevertheless": "ˌnɛvəðəˈlɛs", "to what extent": "tuː wɒt ɪkˈstɛnt", "by contrast": "baɪ ˈkɒntrɑːst"
    },
    'fr': {
        "psychologue": "psikɔlɔɡ", "responsabilité": "ʁɛspɔ̃sabilite", "incitation": "ɛ̃sitasjɔ̃", "autonomie": "otɔnɔmi",
        "précarité": "pʁekaʁite", "écart de rémunération": "ekaʁ də ʁemyneʁasjɔ̃", "prime de licenciement": "pʁim də lisɑ̃sijmɑ̃",
        "entrepreneuriat": "ɑ̃tʁəpʁənəʁija", "productivité": "pʁɔdyktivite", "externalisation": "ɛkstɛʁnalizasjɔ̃",
        "automatisation": "ɔtɔmatizasjɔ̃", "gentrification": "dʒɛntʁifikasjɔ̃", "logement abordable": "lɔʒmɑ̃ abɔʁdabl",
        "étalement urbain": "etalmɑ̃ yʁbɛ̃", "infrastructure": "ɛ̃fʁastʁyktyʁ", "État-providence": "eta pʁɔvidɑ̃s",
        "polarisation": "pɔlaʁizasjɔ̃", "discours": "diskuʁ", "examen approfondi": "ɛɡzamɛ̃ apʁɔfɔ̃di", "consensus": "kɔ̃sɛ̃sys",
        "législation": "leʒislasjɔ̃", "parti pris": "paʁti pʁi", "obésité": "ɔbezite", "espérance de vie": "ɛspeʁɑ̃s də vi",
        "justice": "ʒystis", "réinsertion": "ʁeɛ̃sɛʁsjɔ̃", "transparence": "tʁɑ̃spaʁɑ̃s", "algorithme": "alɡɔʁitm",
        "confidentialité des données": "kɔ̃fidɑ̃sijalite de dɔne", "désinformation": "dezɛ̃fɔʁmasjɔ̃", "surveillance": "syʁvɛjɑ̃s",
        "alors que": "alɔʁ kə", "néanmoins": "neɑ̃mwɛ̃", "dans quelle mesure": "dɑ̃ kɛl məzyʁ", "par contre": "paʁ kɔ̃tʁ",
        "intelligence artificielle": "ɛ̃tɛliʒɑ̃s aʁtifisjɛl"
    }
};

Object.entries(ipaMaps).forEach(([lang, map]) => {
    const filePath = `vocabulary/${lang}/B2/vocabulary.js`;
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    for (const [word, ipa] of Object.entries(map)) {
        const regex = new RegExp(`("word":\\s*"${word}",)`, 'g');
        if (regex.test(content) && !content.includes(`"transcription": "${ipa}"`)) {
            content = content.replace(regex, `\n        "transcription": "${ipa}",`);
            modified = true;
        }
    }
    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Added IPA to ${filePath}`);
    }
});
