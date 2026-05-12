(function() {
    const data = [
        { t: "A person who inspired me", h: ["Who is this person?","What did they do?","How did they change your perspective?","Do you still follow their work or life?","Would you like to meet them?"] },
        { t: "The importance of mental health awareness", h: ["Why is it important to talk about mental health?","Has it become more accepted recently?","How can we support others?","What are some common misconceptions?","How do you take care of your own mental health?"] },
        { t: "A place that feels like home to you", h: ["Is it a city, a house, a country?","When did you first feel this?","What makes it feel like home?","Is home a place or a feeling?","Do you think you can have more than one home?"] },
        { t: "Something you changed your mind about", h: ["What did you used to think?","What changed?","When did it happen?","Was it a gradual change or sudden?","How do you feel about it now?"] },
        { t: "What makes a good friend", h: ["What qualities matter most in a friendship?","Are your closest friends similar to you or different?","Can friendships change as you get older?","What is something you would not tolerate in a friend?","Is it easy to make real friends as an adult?"] },
        { t: "Something you wish you had learned earlier", h: ["What is it?","Why didn't you learn it sooner?","How would your life be different?","Is it too late to learn it now?","Would you teach it to someone younger?"] },
        { t: "A skill you are trying to improve", h: ["What is the skill?","Why did you decide to work on it?","How do you practise?","What is the hardest part?","How much progress have you made?"] },
        { t: "What you miss about being a child", h: ["What is something you genuinely miss?","Do you think childhood was easier?","What did children worry about that adults don't?","What did adults do that you didn't understand then but do now?","Would you go back if you could?"] },
        { t: "Your ideal working day", h: ["What time would you start and finish?","Where would you work?","Who would you work with?","What would you be doing?","How different is it from your real working day?"] },
        { t: "How your life has changed in the last few years", h: ["What is the biggest change?","Was it your choice?","Has it been for the better?","What stayed the same?","What do you think will change next?"] },
        { t: "What makes you feel most alive", h: ["Is there a moment or activity that always energises you?","Does it involve other people or solitude?","How often do you get to feel this way?","Has this changed over time?","What stops you from doing it more?"] },
        { t: "Your biggest distraction", h: ["What pulls your attention most easily?","Does it cost you time or energy?","Have you tried to change this?","Is it completely bad or is there something good about it?","What would you do with the time if you removed this distraction?"] },
        { t: "A book, film or series that stayed with you", h: ["What was it called?","What was it about?","Why did it stay with you?","Did it change how you think about something?","Would you recommend it and to whom?"] },
        { t: "What home means to you", h: ["Is home a person, a place, or a feeling?","Where do you feel most at home?","Did your idea of home change as you got older?","Can you feel at home somewhere new?","Is home somewhere you return to or somewhere you carry with you?"] },
        { t: "Something you do differently from most people", h: ["What is it?","When did you start doing it this way?","Have people ever questioned you about it?","Does it make your life better?","Do you think everyone should do it your way?"] },
        { t: "A habit you are proud of", h: ["What is the habit?","How long have you had it?","How did you build it?","What difference does it make?","Did anyone inspire it?"] },
        { t: "A journey that surprised you", h: ["Where were you going?","What surprised you?","Was it the place, the people, or what happened?","Did it change your plans?","Would you go back?"] },
        { t: "Your relationship with social media", h: ["Which platforms do you use?","How much time do you spend on them?","Does it affect your mood?","Have you ever taken a break from it?","What would your life look like without it?"] },
        { t: "What success looks like to you", h: ["How do you define success?","Is it money, happiness, relationships?","Has your definition changed over time?","Do you consider yourself successful?","Does other people's opinion of your success matter to you?"] },
        { t: "Your relationship with food", h: ["Do you cook often?","Is food just fuel or something more?","Do you eat with others or alone?","Is there a food that is strongly connected to a memory?","Has your relationship with food changed?"] },
        { t: "Something that always makes you laugh", h: ["What is it?","Why do you think it makes you laugh?","Can you laugh about difficult things?","Do you and your friends laugh about the same things?","Is your sense of humour different in different languages?"] },
        { t: "A piece of advice you would give your younger self", h: ["How old would your younger self be?","What would the advice be?","Why didn't you know it then?","Do you think you would have listened?","Who gave you the best advice in your life?"] }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();