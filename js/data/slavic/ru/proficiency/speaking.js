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
            topic: "Является ли философская парадигма технологического детерминизма неизбежностью или отказом от человеческой субъектности?",
            level: "proficiency",
            theme: "philosophy",
            language: "ru"
        },
        {
            topic: "В какой степени коммерциализированная культурная ностальгия препятствует подлинному художественному новаторству?",
            level: "proficiency",
            theme: "culture",
            language: "ru"
        },
        {
            topic: "Как суверенная денежно-кредитная политика справляется с системной дестабилизацией, вызванной децентрализованными криптовалютами?",
            level: "proficiency",
            theme: "economics",
            language: "ru"
        },
        {
            topic: "Возможна ли эпистемическая справедливость в рамках академических исследований, исторически укорененных в европоцентризме?",
            level: "proficiency",
            theme: "epistemology",
            language: "ru"
        },
        {
            topic: "Каким образом исчезновение «третьих мест» обостряет экзистенциальное одиночество в гиперподключенных мегаполисах?",
            level: "proficiency",
            theme: "sociology",
            language: "ru"
        },
        {
            topic: "Искажает ли антропоцентрическая парадигма международных климатических соглашений понимание экологической взаимосвязанности?",
            level: "proficiency",
            theme: "ecology",
            language: "ru"
        },
        {
            topic: "Как алгоритмические рекомендательные системы скрытно реконфигурируют человеческую автономию и экзистенциальное самоопределение?",
            level: "proficiency",
            theme: "technology",
            language: "ru"
        },
        {
            topic: "В какой степени трансгуманистические технологии способны оспорить биологические определения личности и ее морального статуса?",
            level: "proficiency",
            theme: "transhumanism",
            language: "ru"
        },
        {
            topic: "Служит ли меритократия легитимирующим мифом для структурного неравенства вместо инструмента социальной мобильности?",
            level: "proficiency",
            theme: "politics",
            language: "ru"
        },
        {
            topic: "Как политические дискурсы эпохи постправды подрывают демократическую процедуру принятия решений и доверие к институтам?",
            level: "proficiency",
            theme: "governance",
            language: "ru"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
