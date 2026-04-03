const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {} }; }
mockWindow();
const path = './js/data/germanic/en/starter/vocabulary.js';
require(path);
const data = window.vocabularyData['en'];

const meta = {
    "address": { transcription: "[əˈdres]", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=400&q=80" },
    "language": { transcription: "[ˈlæŋɡwɪdʒ]", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80" },
    "clothes": { transcription: "[kləʊðz]", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80" },
    "furniture": { transcription: "[ˈfɜːnɪtʃə(r)]", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80" },
    "information": { transcription: "[ˌɪnfəˈmeɪʃn]", image: "https://images.unsplash.com/photo-1454165833762-0204b28c6721?auto=format&fit=crop&w=400&q=80" },
    "nature": { transcription: "[ˈneɪtʃə(r)]", image: "https://images.unsplash.com/photo-1441974231535-c0d12198cab1?auto=format&fit=crop&w=400&q=80" },
    "weather": { transcription: "[ˈweðə(r)]", image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=400&q=80" },
    "temperature": { transcription: "[ˈtemprətʃə(r)]", image: "https://images.unsplash.com/photo-1542152863-71869e061803?auto=format&fit=crop&w=400&q=80" },
    "first name": { transcription: "[fɜːst neɪm]", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80", subtext: "legal name" },
    "surname": { transcription: "[ˈsɜːneɪm]", image: "https://images.unsplash.com/photo-1519085116126-578304bc2d48?auto=format&fit=crop&w=400&q=80" }
};

data.forEach(e => {
    if (meta[e.word]) Object.assign(e, meta[e.word]);
});

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

fs.writeFileSync(path, output);
console.log("Identity metadata updated.");
