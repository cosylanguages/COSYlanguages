(function() {
    const data = [
    {
        "id": "en_elementary_weekends_are_too_short._001",
        "t": "Weekends are too short.",
        "tag": "Daily life",
        "h": [
            "What do you do on weekends?",
            "How do you feel on Sunday evening?",
            "What would you do with a three-day weekend?",
            "Do you work or study at weekends?",
            "What is the perfect weekend for you?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "weekends_are_too_short.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_it_is_rude_to_be_late._001",
        "t": "It is rude to be late.",
        "tag": "Social life",
        "h": [
            "Are you usually on time?",
            "How long do you wait for a friend?",
            "Is it okay to be 10 minutes late?",
            "Is punctuality important in your culture?",
            "What do you do when someone is very late?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "it_is_rude_to_be_late.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_021",
        "t": "People are nicer in small towns.",
        "tag": "Society",
        "h": [
            "Where do you live — town or city?",
            "Are your neighbours friendly?",
            "Do people talk to strangers where you live?",
            "Have you ever lived in a different type of place?",
            "What makes a place friendly?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_having_a_pet_makes_you_happier._001",
        "t": "Having a pet makes you happier.",
        "tag": "Lifestyle",
        "h": [
            "Do you have a pet?",
            "What is the best pet for a busy person?",
            "Are pets expensive?",
            "Can a pet be a friend?",
            "What do you need to do to look after a pet well?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "having_a_pet_makes_you_happier.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_you_can_tell_a_lot_about_someone_by_their_shoes._001",
        "t": "You can tell a lot about someone by their shoes.",
        "tag": "People",
        "h": [
            "Do you look at people's shoes?",
            "What do your shoes say about you?",
            "Is fashion important to you?",
            "Can you judge a person by their appearance?",
            "What else tells you about a person's character?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "you_can_tell_a_lot_about_someone_by_their_shoes.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_it_is_okay_to_eat_alone_in_a_restaurant._001",
        "t": "It is okay to eat alone in a restaurant.",
        "tag": "Social life",
        "h": [
            "Have you eaten alone in a restaurant?",
            "Do you find it comfortable?",
            "Is food better with other people?",
            "Do you see many people eating alone?",
            "What do you do when you eat alone?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "it_is_okay_to_eat_alone_in_a_restaurant.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_language_001",
        "t": "Learning a language is easier when you are young.",
        "tag": "Language",
        "h": [
            "How old were you when you started learning this language?",
            "Do you think age matters for language learning?",
            "What is the hardest part of learning a language?",
            "Do you know anyone who learned a language as an adult?",
            "What helps you the most when you study?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_elementary_public_transport_is_better_than_having_a_car._001",
        "t": "Public transport is better than having a car.",
        "tag": "Lifestyle",
        "h": [
            "How do you travel around your city?",
            "Is public transport good where you live?",
            "What are the problems with having a car?",
            "Is it expensive to travel by public transport?",
            "What would you change about transport in your city?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "public_transport_is_better_than_having_a_car.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_it_is_hard_to_be_bored_when_you_have_a_phone._001",
        "t": "It is hard to be bored when you have a phone.",
        "tag": "Technology",
        "h": [
            "How many hours a day do you use your phone?",
            "What do you use it for most?",
            "Were you bored before smartphones?",
            "Is boredom sometimes good?",
            "Could you leave your phone at home for a day?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "it_is_hard_to_be_bored_when_you_have_a_phone.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_cooking_at_home_is_always_better_than_eating_out._001",
        "t": "Cooking at home is always better than eating out.",
        "tag": "Food",
        "h": [
            "How often do you cook at home?",
            "What is easier — cooking or going to a restaurant?",
            "Is eating out expensive where you live?",
            "What is your favourite restaurant?",
            "What is your best home-cooked meal?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "cooking_at_home_is_always_better_than_eating_out.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_everyone_should_try_living_abroad_for_a_year._001",
        "t": "Everyone should try living abroad for a year.",
        "tag": "Travel",
        "h": [
            "Have you lived in another country?",
            "What would be hard about living abroad?",
            "What would be exciting?",
            "Which country would you choose?",
            "Does living abroad change a person?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "everyone_should_try_living_abroad_for_a_year.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_superheroes_are_more_interesting_than_real_heroes._001",
        "t": "Superheroes are more interesting than real heroes.",
        "tag": "Entertainment",
        "h": [
            "Who is your favourite superhero?",
            "Can you think of a real-life hero?",
            "What makes someone a hero?",
            "Why do people love superheroes?",
            "Are real heroes more important?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "superheroes_are_more_interesting_than_real_heroes.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_it_is_important_to_make_your_bed_every_morning._001",
        "t": "It is important to make your bed every morning.",
        "tag": "Daily life",
        "h": [
            "Do you make your bed every day?",
            "Does a tidy room make you feel better?",
            "Is this important or not important?",
            "What is your morning routine?",
            "What small habits do you have?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "it_is_important_to_make_your_bed_every_morning.",
        "sub_theme": null
    },
    {
        "id": "en_elementary_shopping_002",
        "t": "Shopping is a hobby.",
        "tag": "Free time",
        "h": [
            "Do you enjoy shopping?",
            "Do you shop online or in shops?",
            "How much time do you spend shopping?",
            "Is shopping relaxing?",
            "What do you buy most often?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "shopping",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_024",
        "t": "Travelling alone is better than travelling with friends.",
        "tag": "Travel",
        "h": [
            "Have you travelled alone?",
            "What is good about travelling alone?",
            "What is good about travelling with others?",
            "Do you get lonely when you travel alone?",
            "What is the best trip you have taken?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();