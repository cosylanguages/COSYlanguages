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
            topic: "Какой ваш любимый вид транспорта для поездок на работу?",
            level: "starter",
            theme: "daily_life",
            language: "ru"
        },
        {
            topic: "Чем вы любите заниматься в свободное время на выходных?",
            level: "starter",
            theme: "hobbies",
            language: "ru"
        },
        {
            topic: "Какое ваше любимое блюдо и почему оно вам нравится?",
            level: "starter",
            theme: "food",
            language: "ru"
        },
        {
            topic: "Как вы предпочитаете проводить летний отпуск?",
            level: "starter",
            theme: "travel",
            language: "ru"
        },
        {
            topic: "Какое ваше любимое время года и почему?",
            level: "starter",
            theme: "nature",
            language: "ru"
        },
        {
            topic: "Сколько языков вы знаете или хотели бы выучить?",
            level: "starter",
            theme: "education",
            language: "ru"
        },
        {
            topic: "Какую музыку вы любите слушать по вечерам?",
            level: "starter",
            theme: "music",
            language: "ru"
        },
        {
            topic: "Где вы предпочитаете жить: в большом городе или в деревне?",
            level: "starter",
            theme: "lifestyle",
            language: "ru"
        },
        {
            topic: "Какая ваша любимая книга или фильм в этом году?",
            level: "starter",
            theme: "media",
            language: "ru"
        },
        {
            topic: "Как вы используете Интернет для изучения нового каждый день?",
            level: "starter",
            theme: "technology",
            language: "ru"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
