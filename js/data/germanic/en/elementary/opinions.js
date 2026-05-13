(function() {
    const data = [
      { t:"Weekends are too short.", tag:"Daily life", h:["What do you do on weekends?","How do you feel on Sunday evening?","What would you do with a three-day weekend?","Do you work or study at weekends?","What is the perfect weekend for you?"] },
      { t:"It is rude to be late.", tag:"Social life", h:["Are you usually on time?","How long do you wait for a friend?","Is it okay to be 10 minutes late?","Is punctuality important in your culture?","What do you do when someone is very late?"] },
      { t:"People are nicer in small towns.", tag:"Society", h:["Where do you live — town or city?","Are your neighbours friendly?","Do people talk to strangers where you live?","Have you ever lived in a different type of place?","What makes a place friendly?"] },
      { t:"Having a pet makes you happier.", tag:"Lifestyle", h:["Do you have a pet?","What is the best pet for a busy person?","Are pets expensive?","Can a pet be a friend?","What do you need to do to look after a pet well?"] },
      { t:"You can tell a lot about someone by their shoes.", tag:"People", h:["Do you look at people's shoes?","What do your shoes say about you?","Is fashion important to you?","Can you judge a person by their appearance?","What else tells you about a person's character?"] },
      { t:"It is okay to eat alone in a restaurant.", tag:"Social life", h:["Have you eaten alone in a restaurant?","Do you find it comfortable?","Is food better with other people?","Do you see many people eating alone?","What do you do when you eat alone?"] },
      { t:"Learning a language is easier when you are young.", tag:"Language", h:["How old were you when you started learning this language?","Do you think age matters for language learning?","What is the hardest part of learning a language?","Do you know anyone who learned a language as an adult?","What helps you the most when you study?"] },
      { t:"Public transport is better than having a car.", tag:"Lifestyle", h:["How do you travel around your city?","Is public transport good where you live?","What are the problems with having a car?","Is it expensive to travel by public transport?","What would you change about transport in your city?"] },
      { t:"It is hard to be bored when you have a phone.", tag:"Technology", h:["How many hours a day do you use your phone?","What do you use it for most?","Were you bored before smartphones?","Is boredom sometimes good?","Could you leave your phone at home for a day?"] },
      { t:"Cooking at home is always better than eating out.", tag:"Food", h:["How often do you cook at home?","What is easier — cooking or going to a restaurant?","Is eating out expensive where you live?","What is your favourite restaurant?","What is your best home-cooked meal?"] },
      { t:"Everyone should try living abroad for a year.", tag:"Travel", h:["Have you lived in another country?","What would be hard about living abroad?","What would be exciting?","Which country would you choose?","Does living abroad change a person?"] },
      { t:"Superheroes are more interesting than real heroes.", tag:"Entertainment", h:["Who is your favourite superhero?","Can you think of a real-life hero?","What makes someone a hero?","Why do people love superheroes?","Are real heroes more important?"] },
      { t:"It is important to make your bed every morning.", tag:"Daily life", h:["Do you make your bed every day?","Does a tidy room make you feel better?","Is this important or not important?","What is your morning routine?","What small habits do you have?"] },
      { t:"Shopping is a hobby.", tag:"Free time", h:["Do you enjoy shopping?","Do you shop online or in shops?","How much time do you spend shopping?","Is shopping relaxing?","What do you buy most often?"] },
      { t:"Travelling alone is better than travelling with friends.", tag:"Travel", h:["Have you travelled alone?","What is good about travelling alone?","What is good about travelling with others?","Do you get lonely when you travel alone?","What is the best trip you have taken?"] }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();