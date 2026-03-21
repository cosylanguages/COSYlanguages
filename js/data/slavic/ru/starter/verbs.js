(function() {
    const data = [
    {
        "word": "чтение",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "form": "verb"
    },
    {
        "word": "есть",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍎",
        "subtext": "есть яблоко, ужинать",
        "opposite": "пить",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Класть еду в рот и глотать ее.",
                "examples": [
                    "Я ем яблоко каждый день.",
                    "Что ты хочешь поесть?"
                ]
            }
        ]
    },
    {
        "word": "пить",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "subtext": "пить воду, пить кофе",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать жидкость внутрь через рот.",
                "examples": [
                    "Я пью много воды.",
                    "Хочешь чего-нибудь выпить?"
                ]
            }
        ]
    },
    {
        "word": "видеть",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👁️",
        "subtext": "видеть фильм, видеть друга",
        "form": "verb",
        "definitions": [
            {
                "text": "Воспринимать что-либо глазами.",
                "examples": [
                    "Я вижу птицу.",
                    "Ты видел этот фильм?"
                ]
            }
        ]
    },
    {
        "word": "читать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "subtext": "читать книгу, читать новости",
        "opposite": "писать",
        "oppositeEmoji": "✍️",
        "form": "verb"
    },
    {
        "word": "писать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✍️",
        "subtext": "писать письмо, писать сообщение",
        "opposite": "читать",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "приходить",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏃‍♂️",
        "subtext": "прийти сюда, прийти домой",
        "opposite": "идти",
        "oppositeEmoji": "🚶",
        "form": "verb"
    },
    {
        "word": "давать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "subtext": "дарить подарок, помогать",
        "opposite": "брать",
        "oppositeEmoji": "👜",
        "form": "verb"
    },
    {
        "word": "разговаривать",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💬",
        "form": "verb",
        "definitions": [
            {
                "text": "Общаться с помощью слов.",
                "examples": [
                    "Я люблю разговаривать с друзьями.",
                    "Они долго разговаривали."
                ]
            }
        ]
    },
    {
        "word": "открывать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "opposite": "закрывать",
        "oppositeEmoji": "🔒",
        "form": "verb"
    },
    {
        "word": "гулять",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Идти пешком ради удовольствия.",
                "examples": [
                    "Я гуляю в парке.",
                    "Пойдем погуляем?"
                ]
            }
        ]
    },
    {
        "word": "выигрывать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏆",
        "opposite": "терять",
        "oppositeEmoji": "📉",
        "form": "verb"
    },
    {
        "word": "помнить",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "покупать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "продавать",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "ждать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "умирать",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "⚰️",
        "opposite": "жить",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "посылать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "падать",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "резать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "проходить",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "продавать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏷️",
        "opposite": "покупать",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "тянуть",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🚜",
        "opposite": "толкать",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "толкать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "тянуть",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "надеяться",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "нести",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "ломать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "соглашаться",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "рисовать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Изображать что-либо с помощью линий и красок на бумаге.",
                "examples": [
                    "Мне нравится рисовать пейзажи.",
                    "Нарисуй круг."
                ]
            }
        ]
    },
    {
        "word": "делиться",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "улыбаться",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😊",
        "opposite": "плакать",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "плакать",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😢",
        "opposite": "улыбаться",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "танцевать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "петь",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "прыгать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "летать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "плавать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "мыть",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "чистить",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "готовить",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "путешествовать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "учиться",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "преподавать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "слушать",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "закрывать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔒",
        "opposite": "открывать",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "заканчивать",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏁",
        "opposite": "начинать",
        "oppositeEmoji": "▶️",
        "form": "verb"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
