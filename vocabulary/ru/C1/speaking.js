(function() {
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "Как скрытые когнитивные искажения подрывают объективность принятия решений в корпоративном управлении?",
            level: "advanced",
            theme: "psychology",
            language: "ru"
        },
        {
            topic: "В какой степени законодательство об интеллектуальной собственности способно адаптироваться к работам генеративного ИИ?",
            level: "advanced",
            theme: "technology",
            language: "ru"
        },
        {
            topic: "Способно ли архитектурное градостроительство преодолеть укоренившуюся социальную сегрегацию?",
            level: "advanced",
            theme: "society",
            language: "ru"
        },
        {
            topic: "Как лингвистическая относительность формирует понятийные аппараты в различных культурных парадигмах?",
            level: "advanced",
            theme: "linguistics",
            language: "ru"
        },
        {
            topic: "Могут ли корпоративные критерии ESG обеспечить этическую ответственность или они стимулируют гринвошинг?",
            level: "advanced",
            theme: "ethics",
            language: "ru"
        },
        {
            topic: "Как демографические сдвиги ставят под угрозу традиционные пенсионные системы в глобальном масштабе?",
            level: "advanced",
            theme: "economics",
            language: "ru"
        },
        {
            topic: "В какой степени государственное финансирование должно приоритетно направляться на космические исследования?",
            level: "advanced",
            theme: "science",
            language: "ru"
        },
        {
            topic: "Как тотальная цифровая слежка меняет психологическое отношение граждан к институтам власти?",
            level: "advanced",
            theme: "politics",
            language: "ru"
        },
        {
            topic: "Способна ли историческая память сохранить подлинность в эпоху синтетических медиа и дипфейков?",
            level: "advanced",
            theme: "media",
            language: "ru"
        },
        {
            topic: "Должны ли биоэтические нормы допускать генетическое редактирование зародышевой линии человека?",
            level: "advanced",
            theme: "bioethics",
            language: "ru"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
