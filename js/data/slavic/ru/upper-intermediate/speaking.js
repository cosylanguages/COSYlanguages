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
            topic: "В какой степени алгоритмы социальных сетей изолируют пользователей в эхо-камерах?",
            level: "upper_intermediate",
            theme: "technology",
            language: "ru"
        },
        {
            topic: "Должны ли государства строго регулировать развитие искусственного интеллекта для защиты рабочих мест?",
            level: "upper_intermediate",
            theme: "ethics",
            language: "ru"
        },
        {
            topic: "Насколько сильно социально-экономическое положение семьи влияет на долгосрочный успех в обучении?",
            level: "upper_intermediate",
            theme: "society",
            language: "ru"
        },
        {
            topic: "Угрожает ли глобализация самобытности региональных культур или обогащает их?",
            level: "upper_intermediate",
            theme: "culture",
            language: "ru"
        },
        {
            topic: "Достаточно ли экологических инициатив корпораций для борьбы с изменением климата без государственных реформ?",
            level: "upper_intermediate",
            theme: "environment",
            language: "ru"
        },
        {
            topic: "Что является более устойчивым стимулом карьеры: общественное признание или личное призвание?",
            level: "upper_intermediate",
            theme: "psychology",
            language: "ru"
        },
        {
            topic: "Как развитие гиг-экономики изменило традиционные гарантии трудящихся?",
            level: "upper_intermediate",
            theme: "economy",
            language: "ru"
        },
        {
            topic: "Должно ли здравоохранение отдавать приоритет профилактике заболеваний перед их лечением?",
            level: "upper_intermediate",
            theme: "health",
            language: "ru"
        },
        {
            topic: "Может ли современное искусство сохранять критическую направленность, если оно коммерциализировано?",
            level: "upper_intermediate",
            theme: "art",
            language: "ru"
        },
        {
            topic: "Следует ли университетам полностью отказаться от стандартизированных экзаменов при приеме студентов?",
            level: "upper_intermediate",
            theme: "education",
            language: "ru"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
