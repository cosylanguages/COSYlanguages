(function() {
    const data = [
    {
        "id": "en_starter_social_001",
        "t": "Cats are better than dogs.",
        "tag": "Pets",
        "h": [
            "Do you have a cat or a dog?",
            "What do you like about cats? What do you like about dogs?",
            "Are cats easy or difficult?",
            "What is a good name for a pet?",
            "Do your friends have pets?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Cats are better than dogs.",
        "form": "other",
        "definitions": [
            {
                "text": "Cats are better than dogs.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_time_001",
        "t": "Morning is the best time of day.",
        "tag": "Daily life",
        "h": [
            "What time do you wake up?",
            "What do you do in the morning?",
            "Do you feel good in the morning?",
            "Is the evening better for you?",
            "What do you eat in the morning?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Morning is the best time of day.",
        "form": "other",
        "definitions": [
            {
                "text": "Morning is the best time of day.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_social_002",
        "t": "Tea is better than coffee.",
        "tag": "Drinks",
        "h": [
            "Do you drink tea or coffee?",
            "How many cups do you drink every day?",
            "Do you drink hot or cold drinks?",
            "What do you drink in the morning?",
            "What is a popular drink in your country?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Tea is better than coffee.",
        "form": "other",
        "definitions": [
            {
                "text": "Tea is better than coffee.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_food_drink_001",
        "t": "It is fun to cook.",
        "tag": "Food",
        "h": [
            "Do you cook at home?",
            "What do you cook?",
            "Is it easy or difficult?",
            "Who cooks in your family?",
            "What is your favourite thing to make?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "word": "It is fun to cook.",
        "form": "other",
        "definitions": [
            {
                "text": "It is fun to cook.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_food_drink_002",
        "t": "Cold weather is nice.",
        "tag": "Weather",
        "h": [
            "What is the weather like today?",
            "Do you like rain or sun?",
            "What do you wear in cold weather?",
            "What do you do when it is cold?",
            "What is your favourite season?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Cold weather is nice.",
        "form": "other",
        "definitions": [
            {
                "text": "Cold weather is nice.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_social_003",
        "t": "Monday is a bad day.",
        "tag": "Daily life",
        "h": [
            "What do you do on Monday?",
            "What is your favourite day of the week?",
            "Is the weekend too short?",
            "What do you do on Friday?",
            "Do you like your week routine?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Monday is a bad day.",
        "form": "other",
        "definitions": [
            {
                "text": "Monday is a bad day.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_social_004",
        "t": "Chocolate is very good.",
        "tag": "Food",
        "h": [
            "Do you like chocolate?",
            "What is your favourite sweet food?",
            "Do you eat a lot of chocolate?",
            "Is chocolate healthy?",
            "What do you eat when you are happy?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Chocolate is very good.",
        "form": "other",
        "definitions": [
            {
                "text": "Chocolate is very good.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_places_001",
        "t": "Small towns are better than big cities.",
        "tag": "Places",
        "h": [
            "Do you live in a town or a city?",
            "What is good about a small town?",
            "What is good about a big city?",
            "Is your town or city noisy?",
            "Where do you want to live in the future?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "word": "Small towns are better than big cities.",
        "form": "other",
        "definitions": [
            {
                "text": "Small towns are better than big cities.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_people_001",
        "t": "It is good to have a lot of friends.",
        "tag": "People",
        "h": [
            "How many friends do you have?",
            "What do you do with your friends?",
            "Is one good friend better than many friends?",
            "Where do you meet your friends?",
            "What is a good friend?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": "relationships",
        "word": "It is good to have a lot of friends.",
        "form": "other",
        "definitions": [
            {
                "text": "It is good to have a lot of friends.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_social_005",
        "t": "Sleeping is the best activity.",
        "tag": "Daily life",
        "h": [
            "How many hours do you sleep?",
            "Do you sleep well?",
            "What time do you go to bed?",
            "Do you sleep in the afternoon?",
            "Is sleeping your favourite thing?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Sleeping is the best activity.",
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping is the best activity.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_music_001",
        "t": "Music is better than TV.",
        "tag": "Free time",
        "h": [
            "Do you listen to music every day?",
            "What music do you like?",
            "How many hours of TV do you watch?",
            "What is your favourite programme?",
            "What do you do in the evening?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "word": "Music is better than TV.",
        "form": "other",
        "definitions": [
            {
                "text": "Music is better than TV.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_food_drink_003",
        "t": "It is important to eat breakfast.",
        "tag": "Food",
        "h": [
            "Do you eat breakfast every day?",
            "What do you eat in the morning?",
            "Is breakfast a big meal for you?",
            "Do you have breakfast at home?",
            "What is a typical breakfast in your country?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "It is important to eat breakfast.",
        "form": "other",
        "definitions": [
            {
                "text": "It is important to eat breakfast.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_sports_001",
        "t": "Swimming is fun.",
        "tag": "Sport",
        "h": [
            "Can you swim?",
            "Do you like water?",
            "Where do you swim — pool or sea?",
            "What sport do you like?",
            "Is sport important to you?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "word": "Swimming is fun.",
        "form": "other",
        "definitions": [
            {
                "text": "Swimming is fun.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_art_culture_001",
        "t": "Old films are boring.",
        "tag": "Entertainment",
        "h": [
            "What films do you like?",
            "Do you watch old or new films?",
            "Who is your favourite actor?",
            "What is a good film?",
            "Where do you watch films?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "art_culture",
        "sub_theme": null,
        "word": "Old films are boring.",
        "form": "other",
        "definitions": [
            {
                "text": "Old films are boring.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "en_starter_food_drink_004",
        "t": "Pineapple on pizza is a great idea.",
        "tag": "Food",
        "h": [
            "Do you like pizza?",
            "What is your favourite topping?",
            "Do you put fruit on savoury food?",
            "Is this popular in your country?",
            "What is the worst pizza topping for you?"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Pineapple on pizza is a great idea.",
        "form": "other",
        "definitions": [
            {
                "text": "Pineapple on pizza is a great idea.",
                "examples": []
            }
        ],
        "emoji": "✨",
        "transcription": ""
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();