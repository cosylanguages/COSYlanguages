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
            topic: "Как социальные сети изменили ваше ежедневное общение с друзьями?",
            level: "intermediate",
            theme: "technology",
            language: "ru"
        },
        {
            topic: "Какие факторы наиболее важны для вас при выборе профессии?",
            level: "intermediate",
            theme: "career",
            language: "ru"
        },
        {
            topic: "Как жизнь в крупном городе влияет на психологическое благополучие человека?",
            level: "intermediate",
            theme: "society",
            language: "ru"
        },
        {
            topic: "Как семейные традиции меняются при смене поколений?",
            level: "intermediate",
            theme: "culture",
            language: "ru"
        },
        {
            topic: "Какую роль личные экологические привычки играют в охране окружающей среды?",
            level: "intermediate",
            theme: "environment",
            language: "ru"
        },
        {
            topic: "Как увлечения помогают поддерживать здоровый баланс между работой и личной жизнью?",
            level: "intermediate",
            theme: "lifestyle",
            language: "ru"
        },
        {
            topic: "Каковы основные преимущества и недостатки регулярной удаленной работы?",
            level: "intermediate",
            theme: "work",
            language: "ru"
        },
        {
            topic: "Как путешествия в незнакомые страны меняют мировоззрение человека?",
            level: "intermediate",
            theme: "travel",
            language: "ru"
        },
        {
            topic: "Следует ли уделять практическим навыкам в школе такое же внимание, как и академическим предметам?",
            level: "intermediate",
            theme: "education",
            language: "ru"
        },
        {
            topic: "Как реклама влияет на наши повседневные покупательские решения?",
            level: "intermediate",
            theme: "consumerism",
            language: "ru"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
