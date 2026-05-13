(function() {
    const data = [
        {
            q: "The purpose of our lives is to be happy.",
            a: "Dalai Lama", o: "Tibetan spiritual leader", c: "Life & happiness",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Do you agree that happiness is the main purpose of life?",
                "Is there a difference between pleasure and happiness?",
                "Can you be happy and still feel that something is missing?",
                "Do you think some people are naturally happier than others?",
                "What is one thing that genuinely makes you happy that money can't buy?"
            ],
            task: "Paraphrase this quote in your own words — then say whether you think it is wise advice or dangerously oversimplified."
        },
        {
            q: "Life is what happens when you're busy making other plans.",
            a: "John Lennon", o: "Beautiful Boy, 1980", c: "Life & happiness",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Have you ever missed an important moment because you were focused on something else?",
                "Do you think we spend too much time planning and not enough time living?",
                "Is spontaneity a skill or a personality trait?",
                "What does this quote say about how we relate to the present moment?",
                "Can you think of a 'plan' that turned out less important than what happened instead?"
            ],
            task: "Tell a short story — real or invented — that perfectly illustrates this quote. Then say what lesson someone could take from it."
        },
        {
            q: "Not all those who wander are lost.",
            a: "J.R.R. Tolkien", o: "The Fellowship of the Ring, 1954", c: "Life & happiness",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "What do you think Tolkien meant — literally or metaphorically?",
                "Do you think society pressures people to follow a fixed path?",
                "Can you think of someone whose wandering led them somewhere better?",
                "Is there a difference between being lost and simply not knowing where you are going yet?",
                "Have you ever felt like a wanderer — and was it a good or bad feeling?"
            ],
            task: "Challenge this quote. Argue the opposite — that wandering without direction is actually a problem. Use at least two examples."
        },
        {
            q: "You only live once, but if you do it right, once is enough.",
            a: "Mae West", o: "American actress & comedian", c: "Life & happiness",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "What does 'doing it right' mean to you?",
                "Is YOLO a philosophy you live by or one you find reckless?",
                "Do you think regret is a sign that you haven't done it right?",
                "What is something you want to do before it is too late?",
                "Is one life enough, or does the idea of a single life feel limiting?"
            ],
            task: "Describe what 'doing it right' would look like in your life — concretely. What would you be doing? What would you have let go of?"
        },
        {
            q: "Be yourself; everyone else is already taken.",
            a: "Oscar Wilde", o: "Irish poet & playwright", c: "Identity",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Is it always easy or desirable to be yourself?",
                "Do you ever feel pressure to be someone different in certain situations?",
                "Is the self something fixed, or does it change depending on context?",
                "Do you think Wilde meant this seriously or ironically?",
                "Can you think of a moment when being yourself cost you something?"
            ],
            task: "Give this quote a star rating out of five — and justify it. What does it get right? What does it miss?"
        },
        {
            q: "It takes courage to grow up and become who you really are.",
            a: "E.E. Cummings", o: "American poet", c: "Identity",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Do you think growing up requires courage?",
                "What gets in the way of becoming who you really are?",
                "Is there a version of yourself you have had to fight for?",
                "Does society make it harder or easier to be authentic?",
                "At what age do you think people start to become who they really are?"
            ],
            task: "Think of someone — real or fictional — who showed this kind of courage. Describe what they did and why it took bravery."
        },
        {
            q: "We know what we are, but know not what we may be.",
            a: "William Shakespeare", o: "Hamlet", c: "Identity",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Do you think you know yourself well?",
                "Has anyone ever surprised you by becoming someone completely different?",
                "Is potential exciting or frightening to think about?",
                "Does this quote make you feel hopeful or uncertain?",
                "What might you become that you can't yet imagine?"
            ],
            task: "Rewrite this quote for a modern audience — same idea, your own words — then explain what you changed and why."
        },
        {
            q: "The most common form of despair is not being who you are.",
            a: "Søren Kierkegaard", o: "Danish philosopher", c: "Identity",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Do you agree that inauthenticity causes suffering?",
                "Can you think of a situation where someone is clearly not being themselves?",
                "Is it always possible to be who you really are?",
                "What does despair mean to you — is it different from sadness?",
                "What would a person need to change to start being who they really are?"
            ],
            task: "Agree or disagree with this quote in at least one minute of speaking. Use a personal example or a person you know (or have observed) to support your view."
        },
        {
            q: "I have not failed. I've just found 10,000 ways that won't work.",
            a: "Thomas Edison", o: "American inventor", c: "Failure & resilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Is this an inspiring reframe or a way of avoiding the word 'failure'?",
                "Do you think failure has a bad reputation that it doesn't deserve?",
                "Have you ever failed at something and then been glad you did?",
                "Is persistence always admirable, or can it become stubbornness?",
                "What is the difference between failing and giving up?"
            ],
            task: "Tell the story of a failure — yours or someone else's — that turned out to be more valuable than success would have been."
        },
        {
            q: "Fall seven times, stand up eight.",
            a: "Japanese proverb", o: "Traditional saying", c: "Failure & resilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Is resilience something you are born with or something you build?",
                "Can you think of a time when you kept going when you wanted to stop?",
                "Is there a point at which it is wise to stop getting up?",
                "Does this proverb apply differently in different cultures?",
                "What helps you get back up after a setback?"
            ],
            task: "Compare this proverb to one from your own language or culture. Which do you find more powerful and why?"
        },
        {
            q: "Success is stumbling from failure to failure with no loss of enthusiasm.",
            a: "Winston Churchill", o: "British Prime Minister", c: "Failure & resilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Do you think enthusiasm is the key ingredient Churchill is describing?",
                "Can you think of a famous example of someone who fits this description?",
                "Is this definition of success too narrow — what about people who got it right first time?",
                "How do you personally handle repeated failure?",
                "Is enthusiasm something you can maintain deliberately, or does it run out?"
            ],
            task: "Do you think this quote is genuinely wise or is it a comfortable thing to say in hindsight? Argue your position with at least two specific points."
        },
        {
            q: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all.",
            a: "J.K. Rowling", o: "Harvard Commencement Speech, 2008", c: "Failure & resilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Do you think you live cautiously or take risks?",
                "What is the difference between sensible caution and fear?",
                "Have you ever not done something because you were afraid to fail?",
                "Do you think this message is harder to hear for some people than others?",
                "What would your life look like if you were less afraid of failing?"
            ],
            task: "Paraphrase this quote in the simplest possible language — as if explaining it to an A2 student. Then give one example that brings it to life."
        },
        {
            q: "The only way to do great work is to love what you do.",
            a: "Steve Jobs", o: "Stanford Commencement Speech, 2005", c: "Work & purpose",
            level: "upper-intermediate", theme: "work_employment",
            qs: [
                "Do you think you have to love your job to be good at it?",
                "Is passion always available to everyone, or is it a privilege?",
                "Can great work come from discipline and craft rather than love?",
                "Have you ever loved something and then had it ruined by turning it into work?",
                "What would you do for free that you currently do — or wish you could do — for money?"
            ],
            task: "This is one of the most quoted pieces of career advice in the world. Make the case that it is actually bad advice — or that it is fundamentally right. Choose a side and defend it."
        },
        {
            q: "In the middle of every difficulty lies opportunity.",
            a: "Albert Einstein", o: "Theoretical physicist", c: "Failure & resilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Do you naturally look for opportunity in difficult situations?",
                "Is this an optimistic truth or toxic positivity?",
                "Can you think of a global difficulty that created unexpected opportunities?",
                "Does this idea feel different depending on how serious the difficulty is?",
                "What opportunity has a difficulty in your own life created?"
            ],
            task: "Take a current difficulty — in the world, in your country, or in your own life — and genuinely try to identify the opportunity within it. Speak for at least one minute."
        },
        {
            q: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            a: "Albert Einstein", o: "Attributed", c: "Human nature",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Is this funny, cynical, or deeply serious — or all three?",
                "Do you think humans are basically wise or basically foolish?",
                "Can you think of an example of collective human stupidity?",
                "Is it fair to generalise about 'human stupidity'?",
                "Does this quote change how you see Einstein as a person?"
            ],
            task: "React to this quote as if you completely disagree with it. Make the strongest possible case for human intelligence and wisdom."
        },
        {
            q: "No man is an island, entire of itself.",
            a: "John Donne", o: "Meditation XVII, 1624", c: "Human nature",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "What do you think Donne meant by this?",
                "Do you think modern life makes us more or less connected to others?",
                "Can you think of a person who seems to live as an island — and what is the cost?",
                "Is interdependence a strength or a vulnerability?",
                "In what ways do you depend on other people without always realising it?"
            ],
            task: "This quote is 400 years old. Argue that it is more relevant today than ever — or that the modern world has made it less true."
        },
        {
            q: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
            a: "Martin Luther King Jr.", o: "Strength to Love, 1963", c: "Human nature",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Do you think this is true in practice, or idealistic?",
                "Can you think of a historical or personal example where this logic worked?",
                "Is love a political tool or is that stretching the idea too far?",
                "What does this quote ask of us personally?",
                "Is there anything that can only be fought with its opposite — or is anger sometimes necessary?"
            ],
            task: "Choose one current conflict — in the world, a community, or a relationship — and apply this quote to it. Does the logic hold? Speak for at least one minute."
        },
        {
            q: "Creativity is intelligence having fun.",
            a: "Albert Einstein", o: "Attributed", c: "Creativity & art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Do you consider yourself a creative person?",
                "Is creativity connected to intelligence, or are they separate things?",
                "Can creativity be taught, or is it innate?",
                "What is the most creative thing you have ever done?",
                "Is there a type of creativity that doesn't involve fun at all?"
            ],
            task: "Disagree with this quote. Make the case that creativity and intelligence are completely separate — with at least two examples to back you up."
        },
        {
            q: "Art is not what you see, but what you make others see.",
            a: "Edgar Degas", o: "French Impressionist painter", c: "Creativity & art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "What is the best piece of art — in any form — that made you see something differently?",
                "Do you think art has a responsibility to make people see the truth?",
                "Can something be art if it makes different people see completely different things?",
                "Is there art that left you cold — and does that mean it failed?",
                "Does the viewer's interpretation matter as much as the artist's intention?"
            ],
            task: "Describe a piece of art — a film, song, book, painting, anything — that genuinely made you see something you hadn't seen before. What did it change in you?"
        },
        {
            q: "The world always seems brighter when you've just made something that wasn't there before.",
            a: "Neil Gaiman", o: "Author of Coraline, Good Omens", c: "Creativity & art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Have you ever made something and felt this way?",
                "Why do you think creation produces this feeling?",
                "Is this feeling available to everyone, or only to 'creative' people?",
                "What is the smallest act of creation that still counts?",
                "Is consuming art as valuable as making it?"
            ],
            task: "Tell us about something you have made — however small — and whether it gave you this feeling. If it didn't, say why not."
        },
        {
            q: "The best thing to hold onto in life is each other.",
            a: "Audrey Hepburn", o: "Actress & humanitarian", c: "Love & connection",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Do you agree that relationships are the most important thing in life?",
                "Is it possible to hold on too tightly to other people?",
                "What makes a relationship worth holding onto?",
                "Have you ever let go of someone and later wished you hadn't?",
                "Can you hold onto an idea, a place, or a memory in the same way?"
            ],
            task: "Rewrite this quote — same sentiment, completely different metaphor. Then explain which version you prefer and why."
        },
        {
            q: "You've gotta dance like there's nobody watching, love like you'll never be hurt.",
            a: "William W. Purkey", o: "Author & professor", c: "Love & connection",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Do you find it easy to be vulnerable with people you love?",
                "Is loving without fear of being hurt wise or naive?",
                "Do you think past hurt changes how we love in the future?",
                "What does dancing like nobody is watching mean to you — literally and metaphorically?",
                "Is there something in your life you hold back from out of fear of being hurt?"
            ],
            task: "This is one of the most shared quotes on the internet. Is it genuinely wise or just comforting? Make your case."
        },
        {
            q: "We accept the love we think we deserve.",
            a: "Stephen Chbosky", o: "The Perks of Being a Wallflower, 1999", c: "Love & connection",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Do you think this is psychologically true?",
                "Have you ever stayed in a relationship — friendship or romantic — that was less than you deserved?",
                "What determines what someone thinks they deserve?",
                "Can therapy, time, or experience change what we think we deserve?",
                "Is this quote empowering or does it place too much responsibility on the person being hurt?"
            ],
            task: "This quote comes from a novel about a teenager. Does it apply equally to adults? Argue yes or no — with examples."
        },
        {
            q: "Injustice anywhere is a threat to justice everywhere.",
            a: "Martin Luther King Jr.", o: "Letter from Birmingham Jail, 1963", c: "Freedom & justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Do you feel personally responsible for injustice happening far away?",
                "Can you think of an injustice in one place that affected people elsewhere?",
                "Is this quote a call to action — and if so, what action?",
                "Is there a point at which distance makes injustice feel impossible to respond to?",
                "What injustice do you care most about and why?"
            ],
            task: "Apply this quote to something happening in the world right now. What is the injustice, and why does it matter beyond its immediate location?"
        },
        {
            q: "Freedom is not worth having if it does not include the freedom to make mistakes.",
            a: "Mahatma Gandhi", o: "Indian independence leader", c: "Freedom & justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Do you think modern society gives people enough freedom to fail?",
                "Is there a tension between freedom and safety?",
                "What mistake are you glad you were free to make?",
                "Can freedom be taken away gradually without people noticing?",
                "Is cancel culture an example of restricting freedom — or of accountability?"
            ],
            task: "Think of a law, rule, or social norm that restricts the freedom to make a particular mistake. Argue whether that restriction is justified or not."
        },
        {
            q: "The truth will set you free, but first it will make you miserable.",
            a: "James A. Garfield", o: "20th US President, attributed", c: "Freedom & justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Has a truth ever made you miserable before it set you free?",
                "Is it always better to know the truth?",
                "Can you think of a situation where not knowing the truth was the right choice?",
                "What is the difference between a truth that liberates and one that simply hurts?",
                "Is there a truth about yourself you are still not ready to face?"
            ],
            task: "Tell a story — real, observed, or fictional — where someone discovered a truth that was painful but ultimately freeing. What was the turning point?"
        },
        {
            q: "Yesterday is history, tomorrow is a mystery, today is a gift — that's why it's called the present.",
            a: "Eleanor Roosevelt", o: "Diplomat & activist, attributed", c: "Change & time",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Is this quote wisdom or a cliché?",
                "Do you spend more time thinking about the past, the future, or the present?",
                "Is living in the present always desirable — or do we need the past and future?",
                "What does it actually mean in practice to treat today as a gift?",
                "Can you think of a day recently that you genuinely treated as a gift?"
            ],
            task: "Give this quote a critical review. What does it get right, what does it oversimplify, and what would you add to make it more honest?"
        },
        {
            q: "The measure of intelligence is the ability to change.",
            a: "Albert Einstein", o: "Theoretical physicist, attributed", c: "Change & time",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Do you find it easy or hard to change your opinions?",
                "Have you changed your mind about something important recently?",
                "Is stubbornness always a weakness — or can it be a strength?",
                "What is the difference between changing your mind and lacking conviction?",
                "What is something you used to believe that you no longer do?"
            ],
            task: "Think of a belief you held for a long time that you eventually changed. Walk us through what happened — what new information or experience shifted you."
        },
        {
            q: "They always say time changes things, but you actually have to change them yourself.",
            a: "Andy Warhol", o: "American pop artist", c: "Change & time",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Do you agree that time alone doesn't change things?",
                "Have you ever waited for something to change and had to eventually act yourself?",
                "Is there something in your life you are currently waiting for time to fix?",
                "Is this quote at odds with the idea of acceptance and letting go?",
                "Who is responsible for changing the things that are wrong in the world?"
            ],
            task: "Apply this quote to something in your own life or the world. What needs changing, who needs to change it, and what is stopping it from happening?"
        },
        {
            q: "Why so serious?",
            a: "The Joker", o: "The Dark Knight, 2008", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Is taking life seriously always a good thing?",
                "Can chaos or absurdity reveal something that seriousness misses?",
                "Do you think humour is undervalued in serious situations?",
                "Is there something in your life you take too seriously?",
                "What is the difference between not taking yourself seriously and not taking life seriously?"
            ],
            task: "Answer the question — why do you take the things you take seriously as seriously as you do? Speak for one minute."
        },
        {
            q: "To infinity and beyond.",
            a: "Buzz Lightyear", o: "Toy Story, 1995", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "What does 'beyond' mean to you in your own life?",
                "Is ambition without limits inspiring or unrealistic?",
                "What is your personal 'infinity' — something you are always reaching for?",
                "Can a children's film contain genuine wisdom?",
                "What is something you once thought was impossible that turned out not to be?"
            ],
            task: "Treat this quote as seriously as a quote from a philosopher. What is it actually saying about human ambition — and do you agree?"
        },
        {
            q: "With great power comes great responsibility.",
            a: "Uncle Ben / Voltaire", o: "Spider-Man / Attributed to Voltaire", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Do you agree that power and responsibility are always linked?",
                "Can you think of someone with power who has ignored their responsibility?",
                "What power do you have in your own life — and what responsibility comes with it?",
                "Does this quote apply to social media influence?",
                "Is responsibility something people choose or something imposed on them?"
            ],
            task: "This quote has been used in everything from superhero films to political speeches. Does repetition make it more or less true? Discuss."
        },
        {
            q: "After all this time? Always.",
            a: "Severus Snape", o: "Harry Potter and the Deathly Hallows, 2007", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Why do you think this quote affects people so strongly?",
                "Is loyalty over a long period of time a virtue or an obsession?",
                "Can you think of something or someone you have always stayed true to?",
                "Does context change the meaning of this quote — does knowing Snape's story matter?",
                "What is the difference between devotion and being unable to let go?"
            ],
            task: "Describe your reaction to this quote — emotionally and intellectually. Do you think its power comes from the words themselves or from the story behind them?"
        },
        {
            q: "You is kind, you is smart, you is important.",
            a: "Aibileen Clark", o: "The Help, 2011", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Why do you think this line has become so well-known?",
                "Is it important to be told you are important — especially as a child?",
                "Do you think the people around you know they are important?",
                "Is there something powerful about saying something simple and direct?",
                "Who said something like this to you — and did it change anything?"
            ],
            task: "This quote uses grammatically incorrect English deliberately. Why? What would be lost if it were 'corrected'? What does this say about language and emotion?"
        },
        {
            q: "It's not who I am underneath, but what I do that defines me.",
            a: "Bruce Wayne / Batman", o: "Batman Begins, 2005", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Do you think actions define us more than intentions?",
                "Is there a gap between who you are 'underneath' and what you do?",
                "Can someone be a good person but consistently do bad things?",
                "Does this quote apply to how we judge public figures?",
                "What action of yours best defines who you are?"
            ],
            task: "Argue the opposite — that who we are underneath matters more than what we do. Make the strongest case you can."
        },
        {
            q: "Just keep swimming.",
            a: "Dory", o: "Finding Nemo, 2003", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Is persistence always the answer, or is knowing when to stop equally important?",
                "Can you think of a time when just keeping going was exactly the right thing to do?",
                "Is this simple advice more useful than complicated advice sometimes?",
                "What is the thing in your life you are currently just 'swimming' through?",
                "Is optimism like Dory's a personality type or a choice?"
            ],
            task: "Compare this to another piece of advice about persistence — from a book, a person in your life, or your own culture. Which is more useful and why?"
        },
        {
            q: "Winter is coming.",
            a: "House Stark", o: "Game of Thrones", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "What does 'winter' represent to you — what difficult thing is coming?",
                "Is preparedness a virtue or does it rob you of the present moment?",
                "Can you think of a 'winter' that came without warning?",
                "Do you tend to prepare for difficulty or deal with it when it arrives?",
                "What is something the world should be preparing for but isn't?"
            ],
            task: "Use this quote as a metaphor for something real — climate change, personal crisis, political instability. Develop the metaphor for at least one minute."
        },
        {
            q: "I am so clever that sometimes I don't understand a single word of what I am saying.",
            a: "Oscar Wilde", o: "The Happy Prince and Other Tales, 1888", c: "Wit & humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Is Wilde being self-deprecating, arrogant, or both at once?",
                "Have you ever spoken or written something that sounded clever but confused even you?",
                "Is complexity a sign of intelligence or sometimes a sign of confusion?",
                "Do you think the cleverest people are the best communicators?",
                "Can you think of something that sounds profound but is actually empty?"
            ],
            task: "Write the most Wilde-esque thing you can say about your own intelligence — then analyse it."
        },
        {
            q: "I've had a perfectly wonderful evening, but this wasn't it.",
            a: "Groucho Marx", o: "American comedian", c: "Wit & humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Have you ever had to be polite when you were anything but?",
                "Is brutal honesty better or worse than polite dishonesty in social situations?",
                "Can humour be a form of courage?",
                "What is the most politely devastating thing anyone has ever said to you?",
                "Is wit in a second language harder or easier to appreciate than in your first?"
            ],
            task: "Describe a situation where this quote would be the perfect thing to say — then explain why you probably wouldn't say it."
        },
        {
            q: "Well-behaved women seldom make history.",
            a: "Laurel Thatcher Ulrich", o: "American historian, 1976", c: "Wit & humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Is this a call to misbehave — or something more nuanced?",
                "Who is a woman in history who was not 'well-behaved' and changed things?",
                "Does this quote apply equally to men, or is there something specific about women in it?",
                "Is rule-breaking necessary for progress — or is it romanticised?",
                "What does 'well-behaved' mean, and who decides?"
            ],
            task: "Apply this quote to a man. Does it work the same way? What does your answer reveal about how we think about gender and history?"
        },
        {
            q: "I'm not superstitious, but I am a little stitious.",
            a: "Michael Scott", o: "The Office (US), 2007", c: "Wit & humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Do you have any superstitions — even ones you don't fully believe in?",
                "Why do intelligent people sometimes hold irrational beliefs?",
                "Is there a difference between superstition and intuition?",
                "What superstitions are common in your culture?",
                "Is holding a small irrational belief harmless or a slippery slope?"
            ],
            task: "Defend superstition. Make the best possible case for why a little bit of magical thinking is actually good for humans."
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();
