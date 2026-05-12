(function() {
    const data = [
        { t: "Your family", h: ["How many people are in your family?","Do you have brothers or sisters?","Where does your family live?","Who do you live with?","What do you do together as a family?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Your home", h: ["How many rooms does your home have?","What is your favourite room?","Is your home big or small?","What can you see from your window?","Do you like your home?"], level: "starter", theme: "rooms_of_a_home_A1" },
        { t: "Your favourite food", h: ["What is your favourite meal?","Do you like sweet or salty food?","Do you cook at home?","What food don't you like?","What do you eat for breakfast?"], level: "starter", theme: "basic_foods_A1" },
        { t: "Your morning routine", h: ["What time do you wake up?","What is the first thing you do?","Do you eat breakfast?","How do you go to work or school?","Is your morning calm or busy?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Your pet or a pet you want", h: ["Do you have a pet?","What animal do you like?","What is a good name for a pet?","Are you a dog person or a cat person?","Is it easy to have a pet?"], level: "starter", theme: "animals_A1" },
        { t: "A sport you like", h: ["What sport do you like?","Do you play or watch?","When do you do this sport?","Is it a team sport or individual?","Is sport important for you?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "What you do on weekends", h: ["What do you usually do on Saturday?","Do you go out or stay home?","Do you see friends?","What do you like to do to relax?","Is your weekend busy or quiet?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Your favourite season", h: ["What is your favourite season?","What is the weather like?","What do people do in this season?","What do you wear?","Why do you like this season?"], level: "starter", theme: "seasons_climate_A1" },
        { t: "Your best friend", h: ["What is your best friend's name?","Where did you meet?","What do you do together?","What do they look like?","Why are they your best friend?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Your job or school", h: ["What do you do — work or study?","What do you like about it?","What time do you start?","Who do you work or study with?","Is it easy or difficult?"], level: "starter", theme: "job_titles_professions_A1" },
        { t: "Things you like and don't like", h: ["What is one thing you really like?","What is one thing you don't like?","Do you like cold weather?","Do you like cooking?","Do you like early mornings?"], level: "starter", theme: "basic_positive_emotions_A1" },
        { t: "Your favourite colour and why", h: ["What is your favourite colour?","Where do you see this colour?","Do you wear this colour?","Is this colour in your home?","Do your friends like this colour too?"], level: "starter", theme: "colours_patterns_A1" },
        { t: "Numbers in your life", h: ["What is your age?","What is your lucky number?","How many people live in your home?","What time do you wake up?","How many languages do you speak?"], level: "starter", theme: "numbers_0_9_A1" },
        { t: "Your favourite drink", h: ["What do you drink in the morning?","Do you prefer tea or coffee?","Do you drink water a lot?","What is a special drink in your country?","What do you drink when you are happy?"], level: "starter", theme: "drinks_A1" },
        { t: "Your country", h: ["What is your country?","What is the capital city?","What is the weather like?","What food is famous there?","What do you love about your country?"], level: "starter", theme: "countries_capitals_A1" },
        { t: "Things in your bedroom", h: ["What furniture is in your bedroom?","What colour is your bedroom?","Is it big or small?","What is on your desk or table?","Do you like your bedroom?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Your typical day", h: ["What time do you start your day?","What do you do in the morning?","What do you eat for lunch?","What do you do in the evening?","What time do you go to bed?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Things you can see from your window", h: ["What is outside your window?","Can you see trees or buildings?","What do you hear?","Is it a quiet or busy view?","Do you like this view?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Music you like", h: ["What music do you listen to?","Who is your favourite singer?","When do you listen to music?","Can you sing or play an instrument?","What song makes you happy?"], level: "starter", theme: "music_A1" },
        { t: "Your favourite place in your town", h: ["What is your favourite place?","Where is it?","Why do you like it?","Do you go there often?","Who do you go with?"], level: "starter", theme: "local_places_services_A1" }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();