(function() {
    const data = [
    {
        "id": "en_starter_cats_are_better_than_dogs._001",
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
        "theme": "cats_are_better_than_dogs.",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_014",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_tea_is_better_than_coffee._001",
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
        "theme": "tea_is_better_than_coffee.",
        "sub_theme": null
    },
    {
        "id": "en_starter_it_is_fun_to_cook._001",
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
        "theme": "it_is_fun_to_cook.",
        "sub_theme": null
    },
    {
        "id": "en_starter_cold_weather_is_nice._001",
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
        "theme": "cold_weather_is_nice.",
        "sub_theme": null
    },
    {
        "id": "en_starter_monday_is_a_bad_day._001",
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
        "theme": "monday_is_a_bad_day.",
        "sub_theme": null
    },
    {
        "id": "en_starter_chocolate_is_very_good._001",
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
        "theme": "chocolate_is_very_good.",
        "sub_theme": null
    },
    {
        "id": "en_starter_small_towns_are_better_than_big_cities._001",
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
        "theme": "small_towns_are_better_than_big_cities.",
        "sub_theme": null
    },
    {
        "id": "en_starter_it_is_good_to_have_a_lot_of_friends._001",
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
        "theme": "it_is_good_to_have_a_lot_of_friends.",
        "sub_theme": null
    },
    {
        "id": "en_starter_sleeping_is_the_best_activity._001",
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
        "theme": "sleeping_is_the_best_activity.",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_002",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_it_is_important_to_eat_breakfast._001",
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
        "theme": "it_is_important_to_eat_breakfast.",
        "sub_theme": null
    },
    {
        "id": "en_starter_swimming_is_fun._001",
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
        "theme": "swimming_is_fun.",
        "sub_theme": null
    },
    {
        "id": "en_starter_old_films_are_boring._001",
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
        "theme": "old_films_are_boring.",
        "sub_theme": null
    },
    {
        "id": "en_starter_pineapple_on_pizza_is_a_great_idea._001",
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
        "theme": "pineapple_on_pizza_is_a_great_idea.",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();