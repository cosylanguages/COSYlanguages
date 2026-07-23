import os
from bs4 import BeautifulSoup

# Handcrafted Database of unique, thematic, non-repetitive personal questions for Keep Up with Science files.
# For each file, we provide 10 Round 1 personal questions and 10 Round 2 personal questions.
HANDCRAFTED_QUESTIONS = {
    "ai-reality-delusion.html": {
        "r1": [
            "★ Have you ever felt that an AI was just telling you what you wanted to hear?",
            "★ Do you actively seek out opinions that disagree with yours to avoid confirmation bias?",
            "★ Would you ever become emotionally attached to an AI companion?",
            "★ Do you think loneliness is becoming a bigger problem in modern society?",
            "★ Have you ever met someone who strongly believed an online conspiracy theory?",
            "★ Do you usually question information you see online before believing it?",
            "★ How would you feel if an AI strongly disagreed with you during a chat?",
            "★ Which modern digital tool has influenced your thinking the most?",
            "★ Who usually gives better advice in your life: real people or technology?",
            "★ Is there something you can tell an AI more easily than another person?"
        ],
        "r2": [
            "★ Would you personally feel comfortable discussing your deepest fears with an AI therapist?",
            "★ Do you think governments should regulate emotional AI systems?",
            "★ What helps you stay connected to reality and truth today?",
            "★ Why might human relationships feel harder to maintain than AI conversations?",
            "★ What makes misinformation spread so quickly on social media platforms?",
            "★ Would you trust an AI more if it challenged your opinions sometimes?",
            "★ What digital skills should children learn as early as possible?",
            "★ Have smartphones or social media already changed how you communicate?",
            "★ How reliable do you think human memory already is?",
            "★ Do you think objective truth still exists in the internet age?"
        ]
    },
    "animal-cooperation-language.html": {
        "r1": [
            "★ When working in a group, how do you coordinate tasks with others?",
            "★ What visual or auditory signals do you use or notice in your daily life?",
            "★ Have you ever volunteered for a highly cooperative community project?",
            "★ Does your work or study environment require a very specific style of communication?",
            "★ What is the most sophisticated technology you use on a daily basis?",
            "★ How do you usually react when you hear a fire alarm or emergency siren?",
            "★ How do you share household resources with family or roommates?",
            "★ Where do you see yourself in the social structure of your workplace?",
            "★ Who taught you your favorite childhood songs or stories?",
            "★ Would you use an AI translation app to talk to your pets?"
        ],
        "r2": [
            "★ Have you ever felt a deep non-verbal connection with a pet or an animal in nature?",
            "★ Do you feel a strong personal responsibility to protect wildlife habitats?",
            "★ Would you trust a robotic vet to diagnose and treat a pet's illness?",
            "★ Do you think animals pass down their own forms of culture and history?",
            "★ If you could learn to speak fluent dolphin or whale language, would you?",
            "★ Would eating meat be emotionally harder for you if farm animals could talk?",
            "★ Have you ever seen animals coordinate or help each other in real life?",
            "★ How do you feel about scientists using AI to translate insect chemical signals?",
            "★ Do you think talking animals would get along well with human society?",
            "★ Have you ever felt that an animal was being completely honest and genuine with you?"
        ]
    },
    "ape-laughter-speech-origin-elementary.html": {
        "r1": [
            "★ What is something that always makes you laugh, no matter what?",
            "★ Do you prefer telling jokes or listening to other people's funny stories?",
            "★ Have you ever had a fit of uncontrollable laughter in a serious situation?",
            "★ How do you show someone you are happy without using any words?",
            "★ Do you think pets like dogs or cats can actually laugh or feel joy?",
            "★ How often do you laugh during a typical daily conversation?",
            "★ What is the funniest video or meme you have seen recently?",
            "★ Do you find it easy to make other people laugh?",
            "★ Who is the funniest person in your family or circle of friends?",
            "★ Do you believe that people who laugh a lot live longer, healthier lives?"
        ],
        "r2": [
            "★ Would you go to a comedy show performed entirely by artificial robots?",
            "★ How would you feel if scientists proved that plants have a basic form of humor?",
            "★ Do you think virtual reality laughter therapy can replace real social hanging out?",
            "★ What makes something universally funny to people of all different cultures?",
            "★ Do you find that humor helps you cope with stressful or difficult times?",
            "★ Should schools teach storytelling and humor as part of the official curriculum?",
            "★ Would you wear a smartwatch that tracks how many times you laugh or smile?",
            "★ Do you think messaging apps are killing the art of natural, vocal laughter?",
            "★ Why do you think some people laugh when they get extremely nervous or scared?",
            "★ If you could only communicate using laughter for a day, how would you manage?"
        ]
    },
    "ape-laughter-speech-origin-intermediate.html": {
        "r1": [
            "★ What is something that always makes you laugh, no matter what?",
            "★ Do you prefer telling jokes or listening to other people's funny stories?",
            "★ Have you ever had a fit of uncontrollable laughter in a serious situation?",
            "★ How do you show someone you are happy without using any words?",
            "★ Do you think pets like dogs or cats can actually laugh or feel joy?",
            "★ How often do you laugh during a typical daily conversation?",
            "★ What is the funniest video or meme you have seen recently?",
            "★ Do you find it easy to make other people laugh?",
            "★ Who is the funniest person in your family or circle of friends?",
            "★ Do you believe that people who laugh a lot live longer, healthier lives?"
        ],
        "r2": [
            "★ Would you go to a comedy show performed entirely by artificial robots?",
            "★ How would you feel if scientists proved that plants have a basic form of humor?",
            "★ Do you think virtual reality laughter therapy can replace real social hanging out?",
            "★ What makes something universally funny to people of all different cultures?",
            "★ Do you find that humor helps you cope with stressful or difficult times?",
            "★ Should schools teach storytelling and humor as part of the official curriculum?",
            "★ Would you wear a smartwatch that tracks how many times you laugh or smile?",
            "★ Do you think messaging apps are killing the art of natural, vocal laughter?",
            "★ Why do you think some people laugh when they get extremely nervous or scared?",
            "★ If you could only communicate using laughter for a day, how would you manage?"
        ]
    },
    "brain-improving-in-90s.html": {
        "r1": [
            "★ What daily habits do you think are most important for keeping your mind sharp?",
            "★ Have you ever tried learning a new language or instrument just for fun?",
            "★ Who is the oldest person you know, and how do they stay active?",
            "★ Do you prefer doing puzzles, reading, or playing physical sports to challenge yourself?",
            "★ How do you handle forgetfulness or minor memory slips in your daily life?",
            "★ Do you find that physical exercise helps you think more clearly?",
            "★ What is a complex skill you learned recently that took a lot of mental effort?",
            "★ Do you think modern technology makes our brains lazier or more active?",
            "★ How often do you step out of your comfort zone to try something completely new?",
            "★ What is your favorite way to wind down and give your brain a deep rest?"
        ],
        "r2": [
            "★ Would you take a daily pill if it guaranteed your brain would stay 20 years younger?",
            "★ Do you think society treats elderly people as wise contributors or as a burden?",
            "★ If you lived to be 100, what kind of project or hobby would you like to pursue?",
            "★ Should there be a mandatory retirement age, or should people work as long as they want?",
            "★ Would you allow a brain chip to monitor and optimize your cognitive speed?",
            "★ How do you hope to maintain your mental independence when you get older?",
            "★ Do you think future technology will make retirement homes completely obsolete?",
            "★ What is the most important piece of wisdom you want to pass down to future generations?",
            "★ Do you believe that wisdom only comes with old age, or can young people be wise too?",
            "★ How has your own perspective on aging changed over the last ten years?"
        ]
    },
    "climate-scientist-warming-report.html": {
        "r1": [
            "★ How has the weather in your local area changed since you were a child?",
            "★ What is one eco-friendly habit you practice regularly at home?",
            "★ Do you trust scientific reports about the environment, or do you feel they are exaggerated?",
            "★ Have you ever participated in a clean-up or green community event?",
            "★ How do you feel when you read negative news about global warming?",
            "★ What is your favorite season, and do you feel it is getting shorter or longer?",
            "★ Do you actively try to reduce your energy or water use in your daily routine?",
            "★ Who do you think should be most responsible for fixing the climate: citizens or big companies?",
            "★ Have you ever changed a personal habit specifically because of an environmental warning?",
            "★ What gives you the most hope when you think about the future of our planet?"
        ],
        "r2": [
            "★ Would you support high taxes on single-use plastics to encourage recycling?",
            "★ Would you ever move to a different region if climate change made your city too hot?",
            "★ Do you think future generations will blame us for not doing enough to save the Earth?",
            "★ Would you buy an electric vehicle even if it was more expensive than a regular car?",
            "★ Should environmental science be a mandatory subject in every grade at school?",
            "★ Do you think human ingenuity will eventually solve climate change through technology?",
            "★ Would you live in an eco-city with strict rules on water, trash, and electricity?",
            "★ How has your personal awareness of sustainability changed over the past five years?",
            "★ Do you think we can save the climate without completely changing our economic system?",
            "★ If you could send a message to global leaders about the environment, what would you say?"
        ]
    },
    "football-beats-shamrock.html": {
        "r1": [
            "★ What is your favorite word game or puzzle to play?",
            "★ Do you find compound words easy to learn in a foreign language?",
            "★ Have you ever had to decipher a very long, complex word in another language?",
            "★ Do you consider yourself a fast reader, or do you prefer to take your time?",
            "★ What language structures do you find most beautiful or logical?",
            "★ Have you ever noticed yourself making subconscious links between unrelated words?",
            "★ How do you usually remember new vocabulary: by writing it down, or saying it?",
            "★ Do you prefer reading physical books or reading on digital screens?",
            "★ Have you ever noticed typos or misspelled words in books or articles immediately?",
            "★ How do you personally break down a long sentence to understand its meaning?"
        ],
        "r2": [
            "★ Would you wear a neural device if it doubled your reading speed instantly?",
            "★ Do you think written language will eventually abandon complex grammar in favor of speed?",
            "★ Can artificial intelligence ever understand the emotional weight behind human word choices?",
            "★ Would you like to be able to study a language by transferring vocabulary to your brain while sleeping?",
            "★ Do you think real-time translators will eventually make learning foreign languages obsolete?",
            "★ Should future education focus more on speed-reading or deep, slow reading comprehension?",
            "★ If human language evolved to be purely visual (like emojis), would we lose our intellectual depth?",
            "★ Would you trust an AI to customize articles specifically to fit your reading speed?",
            "★ Do you think technology has shortened our attention spans for reading long texts?",
            "★ What is the most difficult book you have ever read, and what made it so challenging?"
        ]
    },
    "fusion-energy.html": {
        "r1": [
            "★ How conscious are you of your daily electricity consumption at home?",
            "★ Have you ever visited a power plant or major industrial facility?",
            "★ Do you think your country relies too much on fossil fuels?",
            "★ What is your personal opinion on traditional nuclear fission power?",
            "★ Are you willing to pay slightly higher bills if it guarantees clean, green energy?",
            "★ What is the most promising renewable energy source in your local area?",
            "★ Do you trust science to deliver completely clean unlimited energy in your lifetime?",
            "★ How often do you think about resource depletion and sustainability?",
            "★ Do you remember any power outages from your childhood? How did you manage?",
            "★ If you could invest in any scientific startup, would it be energy or space travel?"
        ],
        "r2": [
            "★ Would you live near a safe, operational nuclear fusion power plant?",
            "★ Do you think humans will eventually build cities powered completely by artificial stars?",
            "★ Should solar panels and wind turbines be mandatory on all new residential buildings?",
            "★ Do you think energy abundance would end global wars and territorial conflicts?",
            "★ Would you support a ban on gas-powered cars within the next ten years?",
            "★ Do you think rich nations should fund clean energy setups for developing countries?",
            "★ Would you trust a community energy grid run entirely by autonomous AI algorithms?",
            "★ How has your personal lifestyle changed to reduce your environmental impact?",
            "★ Do you think nuclear energy will always face negative public bias regardless of safety?",
            "★ What is the most exciting scientific development you are currently following?"
        ]
    },
    "grandmother-evolutionary-mystery.html": {
        "r1": [
            "★ What is your fondest memory of your own grandmothers?",
            "★ Do you think grandmothers play a unique emotional role in raising children?",
            "★ How has your family dynamic changed across different generations?",
            "★ Who was the storyteller or history-keeper in your family?",
            "★ Do you agree that children who grow up near elders have better social skills?",
            "★ What is the most valuable piece of advice an older relative ever gave you?",
            "★ How do you personally plan to pass down your life experiences to the youth?",
            "★ Do you think modern city life makes it harder for families to stay connected?",
            "★ What childhood custom or tradition did you learn from an older generation?",
            "★ Do you feel that older people are sufficiently respected in your culture?"
        ],
        "r2": [
            "★ Would you live in a multi-generational home with your parents and children?",
            "★ Do you think future technology will make traditional family structures obsolete?",
            "★ Should grandparents receive financial support from the government for helping raise grandkids?",
            "★ Do you think humanity's longevity is our greatest biological advantage?",
            "★ Would you choose to live past 100 if your physical health was guaranteed?",
            "★ How do you think society will adapt when there are more seniors than children?",
            "★ Should schools involve elderly volunteers more often to bridge the generation gap?",
            "★ Do you believe that wisdom is something that can only be earned through aging?",
            "★ How do you think your own habits will change when you become an elder?",
            "★ If you could ask a prehistoric ancestor one question, what would it be?"
        ]
    },
    "grandparents-mental-health.html": {
        "r1": [
            "★ How close was your relationship with your grandparents when you were growing up?",
            "★ Do you think children today spend enough face-to-face time with their extended family?",
            "★ Who in your family did you go to for emotional comfort when you were a child?",
            "★ How often did your family host large multi-generational gatherings?",
            "★ Do you believe that family support is the best medicine for youth mental health?",
            "★ What is a skill or hobby you learned directly from an older relative?",
            "★ How do you personally handle stress, and did your family teach you this?",
            "★ Do you think modern social media is making teenagers lonelier than past generations?",
            "★ What family tradition do you hope to keep alive in your own future family?",
            "★ Do you think older relatives benefit mentally from spending time with young kids?"
        ],
        "r2": [
            "★ Would you move closer to your family if it meant better mental health for your kids?",
            "★ Do you think the concept of the extended family is disappearing in western countries?",
            "★ Should companies offer paid leave for grandparents to help care for newborn babies?",
            "★ Do you think our mental health is shaped more by our genes or our childhood environment?",
            "★ Would you trust an online support group more than your own family in a crisis?",
            "★ How can communities help elderly people who have no grandchildren stay socially active?",
            "★ Do you think future schools will have built-in community centers for elders?",
            "★ What is the most important lesson about mental resilience you have learned in life?",
            "★ Do you believe that strong family roots make people more independent as adults?",
            "★ How do you think your own mental health has been influenced by your ancestors' stories?"
        ]
    },
    "hidden-regenerative-powers.html": {
        "r1": [
            "★ Have you ever had a scar or wound that healed remarkably well over time?",
            "★ Do you find that your body recovers quickly from intense physical exercise or illness?",
            "★ What is your personal approach to helping your body heal when you catch a cold?",
            "★ Do you find human biology and anatomy fascinating or slightly unsettling?",
            "★ Have you ever donated blood or tissue? What was the experience like?",
            "★ How much do you trust modern medicine compared to your body's natural healing?",
            "★ What is the most remarkable recovery from injury or illness you have ever witnessed?",
            "★ Do you believe that a positive mindset can physically speed up biological healing?",
            "★ How often do you think about the biological limits of the human body?",
            "★ What daily habit do you believe contributes most to your physical vitality?"
        ],
        "r2": [
            "★ Would you undergo genetic therapy to regain lost physical tissues or cartilage?",
            "★ Do you think extreme biological regeneration would make humans more reckless?",
            "★ Should scientists prioritize curing chronic pain over extending the human lifespan?",
            "★ Would you want to live in a future where any damaged organ can be printed in a lab?",
            "★ Do you think artificial organs will eventually perform better than our biological ones?",
            "★ How do you think society would change if the human average lifespan reached 150?",
            "★ Would you support the creation of safe synthetic biological enhancements for athletes?",
            "★ Do you think humans will ever lose their natural healing abilities by relying too much on medicine?",
            "★ What is the most important medical breakthrough you hope to see in your lifetime?",
            "★ Would you choose to have a minor cosmetic flaw regenerated if it was completely free?"
        ]
    },
    "impersonation-accounts.html": {
        "r1": [
            "★ Have you ever received a highly suspicious request or connection on LinkedIn or social media?",
            "★ How carefully do you check the spelling and email address of messages from your bank?",
            "★ What is your reaction when you see a celebrity promoting a product? Do you check if the account is verified?",
            "★ Do you use a password manager or follow strict security rules for your credentials?",
            "★ Have you ever had your email, social profile, or personal identity compromised?",
            "★ Who do you think is most vulnerable to digital scams in your family or community?",
            "★ What is the most convincing email phishing attempt you have ever personally spotted?",
            "★ Do you feel that online networks like LinkedIn have become less authentic recently?",
            "★ Would you change your daily habits if you knew scammers were watching your public profile?",
            "★ What digital safety habits do you talk about most with your close friends?"
        ],
        "r2": [
            "★ Would you trust an AI-led automated security system to manage all your personal accounts?",
            "★ Would you support mandatory biometric scans (like retina or fingerprint) for all social media accounts?",
            "★ Do you think social media platforms should be legally liable for scam accounts on their sites?",
            "★ How do you think digital identity theft will change when deepfakes become perfect?",
            "★ Would you pay a monthly fee for absolute identity security on a public platform?",
            "★ Should digital literacy be a required course for graduation in every school?",
            "★ If your digital twin could answer emails and do boring work for you, would you want one?",
            "★ Do you feel secure using fingerprint or facial recognition on your phone?",
            "★ What makes real-world face-to-face interaction feel safer and more authentic to you?",
            "★ Are you worried about your personal privacy in an era of constant online surveillance?"
        ]
    },
    "living-most-creative-time.html": {
        "r1": [
            "★ What is your favorite creative hobby, and how often do you practice it?",
            "★ Do you prefer creating things with your hands or using digital design tools?",
            "★ Have you ever shared a creative project (like art, music, or writing) online?",
            "★ Who is the most creative person you know, and what makes them unique?",
            "★ Do you find that digital platforms make it easier to discover truly unique artists?",
            "★ What is the most inspiring art exhibition, film, or concert you have ever experienced?",
            "★ Do you think social media algorithms encourage originality or copycat behavior?",
            "★ Have you ever tried to learn a creative skill using only online video tutorials?",
            "★ Do you think everyone has a creative spark, or is talent something you are born with?",
            "★ What is your favorite way to express your personal style or thoughts?"
        ],
        "r2": [
            "★ Would you purchase a piece of visual art if you knew it was completely created by an AI?",
            "★ Do you think the ease of publishing online has made the average quality of art higher or lower?",
            "★ Should governments offer financial grants to citizens to support their private creative hobbies?",
            "★ Do you think professional artists will eventually be completely replaced by automated tools?",
            "★ Would you wear clothes designed entirely by a computer algorithm?",
            "★ Do you believe that digital tools have made our generation more creative than our ancestors?",
            "★ Would you attend a virtual reality concert of a digital singer over a real live performance?",
            "★ What is the most important lesson about self-expression you have learned in your life?",
            "★ Do you think school curricula focus enough on creative arts compared to science?",
            "★ If you could instantly master any artistic skill without practice, which would you choose?"
        ]
    },
    "losing-spoken-words.html": {
        "r1": [
            "★ Have you noticed your own face-to-face conversations getting shorter or simpler lately?",
            "★ Do you prefer texting your friends or calling them on the phone for a quick chat?",
            "★ What is your favorite emoji, and does it help you express feelings better than words?",
            "★ When was the last time you had a truly deep, uninterrupted conversation that lasted hours?",
            "★ Do you find it harder to concentrate on a long spoken story than you used to?",
            "★ Are there some complex feelings that you find completely impossible to put into words?",
            "★ Do you speak differently when you are typing a message versus speaking out loud?",
            "★ How do you react when someone gives you a very short, monosyllabic answer to a question?",
            "★ Do you think reading physical books is the best way to expand your vocabulary?",
            "★ If you could only speak 500 words per day, who would you choose to talk to?"
        ],
        "r2": [
            "★ Would you support a weekly 'no-screen, only-talking' day in your local community?",
            "★ Do you think written messaging is slowly destroying the art of public speaking?",
            "★ Can an automated writing assistant capture your unique voice and personality?",
            "★ Will future generations communicate almost entirely through short video clips and emojis?",
            "★ Would you trust an AI to summarize your friends' long audio messages for you?",
            "★ Do you think our brains are slowly losing the ability to think in complex sentences?",
            "★ Would you feel comfortable living in a society where silence is valued more than talking?",
            "★ Should schools ban text messaging on campus to force students to talk face-to-face?",
            "★ What is the most beautiful spoken word in your native language, and why?",
            "★ Do you think the English language is becoming richer or poorer in the internet age?"
        ]
    },
    "mendelian-laws-broken.html": {
        "r1": [
            "★ What physical traits or talents did you inherit directly from your parents?",
            "★ Do you think you resemble your father's or your mother's side of the family more?",
            "★ What is the most interesting family story you have heard about your ancestors?",
            "★ Have you ever taken a DNA or ancestry test? What did you hope to find?",
            "★ Do you believe that personality is mostly determined by genetics or by upbringing?",
            "★ Are there any unique family resemblances that span multiple generations in your family?",
            "★ Do you find genetic science exciting, or does it make you feel slightly uneasy?",
            "★ What is a physical feature you are proud of inheriting from your family?",
            "★ Do you think scientists should be allowed to modify genes to make crops more resilient?",
            "★ How has your understanding of your own health been shaped by your family's medical history?"
        ],
        "r2": [
            "★ Would you choose to know all the genetic diseases you might develop in the future?",
            "★ Should parents be allowed to choose their child's eye color or physical traits before birth?",
            "★ Do you think genetic engineering will eventually create a permanent division in society?",
            "★ Would you eat bio-engineered meat if it was cheaper and better for the environment?",
            "★ Should genetic testing be mandatory for all newborns to plan early healthcare?",
            "★ Do you think human cloning will become a normal reality within the next century?",
            "★ Would you modify your own genetic traits if it guaranteed immunity to all viruses?",
            "★ What is the ethical limit when it comes to modifying animal or insect genomes?",
            "★ Do you believe that science will eventually eliminate all genetic diseases completely?",
            "★ If you could genetically inherit any single talent (like perfect pitch), what would it be?"
        ]
    },
    "museums-movies-theater-stay-younger-elementary.html": {
        "r1": [
            "★ What is the most memorable museum or gallery you have ever visited?",
            "★ Do you prefer watching movies in a physical cinema or streaming them at home?",
            "★ When was the last time you went to see a live theater performance or play?",
            "★ How do you feel after spending an afternoon surrounded by great art or music?",
            "★ Do you find that cultural activities help you relax and forget about daily stress?",
            "★ What is your favorite genre of movie, and does it make you feel younger?",
            "★ Who do you usually go with when you attend cultural events?",
            "★ Do you think cities should spend more public money on free museums and parks?",
            "★ Have you ever been so moved by a piece of art or performance that you cried?",
            "★ What is a cultural custom or event in your town that you love to attend?"
        ],
        "r2": [
            "★ Would you prefer to learn history through a video game or by visiting a museum?",
            "★ Do you think virtual reality museums will eventually replace physical gallery visits?",
            "★ Would you buy a beautiful painting if you knew a computer algorithm had painted it?",
            "★ Do you think experiencing art should be officially prescribed by doctors for mental health?",
            "★ Would you enjoy a cinema experience where the plot changes based on your heart rate?",
            "★ Do you think artificial intelligence can ever create art with a genuine human soul?",
            "★ Should admission to all national museums be completely free for everyone?",
            "★ How has your appreciation for movies and theater changed as you have grown older?",
            "★ Do you think constant screen time is reducing our interest in live theater?",
            "★ What historical artist would you spend a day discussing creativity with if you could?"
        ]
    },
    "museums-movies-theater-stay-younger-intermediate.html": {
        "r1": [
            "★ What is the most memorable museum or gallery you have ever visited?",
            "★ Do you prefer watching movies in a physical cinema or streaming them at home?",
            "★ When was the last time you went to see a live theater performance or play?",
            "★ How do you feel after spending an afternoon surrounded by great art or music?",
            "★ Do you find that cultural activities help you relax and forget about daily stress?",
            "★ What is your favorite genre of movie, and does it make you feel younger?",
            "★ Who do you usually go with when you attend cultural events?",
            "★ Do you think cities should spend more public money on free museums and parks?",
            "★ Have you ever been so moved by a piece of art or performance that you cried?",
            "★ What is a cultural custom or event in your town that you love to attend?"
        ],
        "r2": [
            "★ Would you prefer to learn history through a video game or by visiting a museum?",
            "★ Do you think virtual reality museums will eventually replace physical gallery visits?",
            "★ Would you buy a beautiful painting if you knew a computer algorithm had painted it?",
            "★ Do you think experiencing art should be officially prescribed by doctors for mental health?",
            "★ Would you enjoy a cinema experience where the plot changes based on your heart rate?",
            "★ Do you think artificial intelligence can ever create art with a genuine human soul?",
            "★ Should admission to all national museums be completely free for everyone?",
            "★ How has your appreciation for movies and theater changed as you have grown older?",
            "★ Do you think constant screen time is reducing our interest in live theater?",
            "★ What historical artist would you spend a day discussing creativity with if you could?"
        ]
    },
    "ozempic-obesity-revolution.html": {
        "r1": [
            "★ How do you personally maintain a healthy balance in your diet and lifestyle?",
            "★ Do you believe that weight loss is primarily a matter of willpower or biological genetics?",
            "★ What is your reaction when you hear about 'miracle' weight-loss drugs in the media?",
            "★ How often do you think about body image and societal pressure in your daily life?",
            "★ Have you ever tried a strict diet or fitness program? What was the hardest part?",
            "★ Do you think doctors rely too much on prescribing medicine instead of lifestyle changes?",
            "★ How do you feel about the pharmaceutical industry making massive profits from weight loss?",
            "★ What is the healthiest meal you know how to cook? Do you enjoy preparing it?",
            "★ Do you think processed foods should be taxed more heavily to encourage healthy eating?",
            "★ What is your favorite form of physical exercise, and how does it make you feel?"
        ],
        "r2": [
            "★ Would you take a safe weight-loss pill even if you only wanted to lose a few pounds?",
            "★ Do you think obesity will be completely eradicated by medical science within 50 years?",
            "★ Should health insurance companies pay for weight-loss medications for everyone who wants them?",
            "★ Do you think weight-loss drugs will make people care less about healthy eating and exercise?",
            "★ How can society promote body positivity while still encouraging medical health?",
            "★ Would you support a ban on advertising fast food to children on television and online?",
            "★ Do you think future school lunches will be scientifically customized to fit each child's metabolism?",
            "★ What is the most important lesson about physical wellness you have learned?",
            "★ Do you believe that fast-food companies are intentionally designing addictive food products?",
            "★ How has your own attitude toward diet and fitness changed over the last five years?"
        ]
    },
    "right-handedness.html": {
        "r1": [
            "★ Are you right-handed, left-handed, or ambidextrous?",
            "★ What is one daily task you find impossible to do with your non-dominant hand?",
            "★ Do you have any left-handed friends or family members? Have they ever complained about right-handed tools?",
            "★ Have you ever tried to write or paint with your left hand for an afternoon?",
            "★ Do you feel that your physical coordination is better on one side of your body?",
            "★ Were you ever encouraged or forced to use your right hand when you were a child?",
            "★ Do you notice any strong habitual routines that you always start with a specific side?",
            "★ Do you consider yourself more logical, more creative, or a balance of both?",
            "★ What physical task (like playing an instrument or typing) required the most hand coordination to learn?",
            "★ Do you think biological differences are what make human skills so diverse?"
        ],
        "r2": [
            "★ Would losing small human differences make society more efficient or more boring?",
            "★ Do you think biology strongly influences a person's talents and ultimate career path?",
            "★ Where should society draw the ethical line when it comes to selecting a child's traits before birth?",
            "★ Do you already notice changes in your attention span or physical habits due to screen use?",
            "★ Would separating students based on their brain types help them succeed or create unfair labels?",
            "★ Would knowing a person's neurological profile change how you judge their character?",
            "★ How physically different do you think humans living on other planets could become over time?",
            "★ Do you think becoming physically 'perfect' would actually improve your happiness?",
            "★ Why do you think humans feel more comfortable with imperfect, human-like behavior in machines?",
            "★ Do you think modern digital multitasking is improving or weakening our overall focus?"
        ]
    },
    "sensory-system-pain-disease.html": {
        "r1": [
            "★ Do you consider yourself to have a high or low physical pain tolerance?",
            "★ What is your favorite physical sense (sight, sound, smell, touch, taste), and why?",
            "★ Have you ever experienced sensory overload in a crowded, noisy city or event?",
            "★ What is the most soothing sound or smell that immediately helps you relax?",
            "★ How do you usually react when you feel physical discomfort: do you take medicine or wait?",
            "★ Do you think modern life is too loud and visually overwhelming for our nervous systems?",
            "★ Have you ever had a temporary loss of a sense (like losing taste during a cold)?",
            "★ Do you find that quiet, natural settings physically heal your mind and body?",
            "★ How often do you practice mindfulness or deep breathing to calm your senses?",
            "★ What is a physical activity that makes you feel highly connected to your senses?"
        ],
        "r2": [
            "★ Would you choose to have a neural chip that selectively turns off chronic pain forever?",
            "★ Do you think a world without any physical pain would be highly dangerous for human survival?",
            "★ Would you wear a device that allows you to feel the physical touch of friends in virtual reality?",
            "★ Should public spaces have mandatory quiet zones to protect citizens from noise pollution?",
            "★ Do you think future medicine will cure all sensory blindness and deafness permanently?",
            "★ Would you trust an AI doctor to perform delicate surgery on your eyes or ears?",
            "★ How do you think our sensory systems will adapt if humans live in space for generations?",
            "★ Do you believe that virtual reality will eventually feel indistinguishable from real life?",
            "★ Would you try a sensory deprivation tank to quiet your overstimulated mind?",
            "★ What is the most beautiful natural landscape you have ever seen, and how did it affect you?"
        ]
    },
    "social-decisions-brain.html": {
        "r1": [
            "★ Do you usually rely on your gut feelings or logical lists when making important decisions?",
            "★ Have you ever made an impulsive social decision that you regretted later?",
            "★ Who do you trust the most in your life, and how did they earn that trust?",
            "★ Do you find it easy to read other people's body language and emotions?",
            "★ Have you ever felt peer pressure to agree with a group decision you disliked?",
            "★ How quickly do you form a first impression of someone you just met?",
            "★ Do you think your subconscious mind plays a big role in your everyday choices?",
            "★ What is the most difficult social decision you have had to make recently?",
            "★ Do you find that stress makes you make more rational or more emotional decisions?",
            "★ How do you feel when you have to make a choice with very little information?"
        ],
        "r2": [
            "★ Would you trust an algorithm to recommend who you should date or marry?",
            "★ Do you think advertising is so psychologically advanced that we don't have free will anymore?",
            "★ Should schools teach cognitive biases to help children make better logical decisions?",
            "★ Would you use an app that analyzes your friends' voices to tell you if they are lying?",
            "★ Do you think social media has made people more or less trusting of each other?",
            "★ Would you let a computer select the most qualified job candidates for your company?",
            "★ How can we rebuild social trust in communities where people are highly divided?",
            "★ Do you believe that some people are naturally born with better social intuition than others?",
            "★ What is the best way to train your mind to think slowly and avoid hasty judgments?",
            "★ If you could see a real-time graph of your stress levels, would you use it to make decisions?"
        ]
    },
    "spider-creatures-origins-of-fatherhood.html": {
        "r1": [
            "★ How do you feel when you see a spider or insect in your house? Do you catch it or run?",
            "★ What is the most unique or surprising animal behavior you have ever seen in a documentary?",
            "★ Who was the main father figure or nurturing presence in your childhood?",
            "★ Do you think animal parents show genuine emotional love, or is it just survival instinct?",
            "★ Have you ever had a pet that showed protective or parental behaviors?",
            "★ What is the most important lesson about cooperation you have observed in nature?",
            "★ Do you find insect biology and ecosystems fascinating or slightly frightening?",
            "★ How did your parents divide childcare duties when you were growing up?",
            "★ Have you ever taken care of a helpless creature, like an injured bird or lost kitten?",
            "★ What animal do you think has the most admirable parenting style of all?"
        ],
        "r2": [
            "★ Would you live in a green city where insects and arachnids are fully integrated for ecology?",
            "★ Do you think modern technology has made human parenting easier or more complicated?",
            "★ Should paid parental leave be divided equally between mothers and fathers by law?",
            "★ Would you feel comfortable using bio-engineered harmless insects to clean your home?",
            "★ If humans could temporarily share the consciousness of animal parents, would you try it?",
            "★ Do you think evolutionary biology will eventually prove that gender roles are completely fluid?",
            "★ Would you trust a futuristic automated robotic crib to babysit a child for an hour?",
            "★ What is the most valuable piece of advice about patience you have learned in life?",
            "★ Do you think nature is inherently cruel, or is it beautifully balanced?",
            "★ How do you think human parenting styles will evolve over the next thousand years?"
        ]
    },
    "where-you-live-shapes-dementia-risk-elementary.html": {
        "r1": [
            "★ Do you prefer living in a bustling big city or a quiet countryside town?",
            "★ How easily can you find a public park or green garden near your current home?",
            "★ Do you feel that your local neighborhood is safe and pleasant for walking?",
            "★ How does the amount of natural sunlight in your home affect your daily mood?",
            "★ What is your favorite way to stay active and get fresh air on the weekends?",
            "★ Is there a lot of traffic noise or air pollution where you currently live?",
            "★ Did your childhood home have a garden or big trees nearby where you played?",
            "★ How often do you interact with or greet your neighbors in your daily routine?",
            "★ What is the most peaceful and quiet place you have visited in your region?",
            "★ Do you think the layout of a city can encourage people to lead healthier lives?"
        ],
        "r2": [
            "★ Would you move to a smaller, quieter town if it guaranteed better brain health as you age?",
            "★ Do you think future cities will be designed with mandatory green parks on every block?",
            "★ Would you support a complete ban on cars in city centers to reduce noise and pollution?",
            "★ Should employers offer outdoor green-working hours to prevent mental fatigue?",
            "★ Would you use a map app that recommends walking routes based on clean air and low noise?",
            "★ Do you think real estate values should be determined by environmental health indexes?",
            "★ Would you live in a futuristic eco-commune with shared gardens and no private cars?",
            "★ What is the most important change you would make to improve your current neighborhood?",
            "★ Do you think the next generation will be healthier physically because of smart cities?",
            "★ How do you personally protect your peace of mind and mental quiet in a busy world?"
        ]
    },
    "where-you-live-shapes-dementia-risk-intermediate.html": {
        "r1": [
            "★ Do you prefer living in a bustling big city or a quiet countryside town?",
            "★ How easily can you find a public park or green garden near your current home?",
            "★ Do you feel that your local neighborhood is safe and pleasant for walking?",
            "★ How does the amount of natural sunlight in your home affect your daily mood?",
            "★ What is your favorite way to stay active and get fresh air on the weekends?",
            "★ Is there a lot of traffic noise or air pollution where you currently live?",
            "★ Did your childhood home have a garden or big trees nearby where you played?",
            "★ How often do you interact with or greet your neighbors in your daily routine?",
            "★ What is the most peaceful and quiet place you have visited in your region?",
            "★ Do you think the layout of a city can encourage people to lead healthier lives?"
        ],
        "r2": [
            "★ Would you move to a smaller, quieter town if it guaranteed better brain health as you age?",
            "★ Do you think future cities will be designed with mandatory green parks on every block?",
            "★ Would you support a complete ban on cars in city centers to reduce noise and pollution?",
            "★ Should employers offer outdoor green-working hours to prevent mental fatigue?",
            "★ Would you use a map app that recommends walking routes based on clean air and low noise?",
            "★ Do you think real estate values should be determined by environmental health indexes?",
            "★ Would you live in a futuristic eco-commune with shared gardens and no private cars?",
            "★ What is the most important change you would make to improve your current neighborhood?",
            "★ Do you think the next generation will be healthier physically because of smart cities?",
            "★ How do you personally protect your peace of mind and mental quiet in a busy world?"
        ]
    },
    "your-fingers-hold-secret-brain-evolution.html": {
        "r1": [
            "★ Do you enjoy hands-on hobbies like drawing, crafting, cooking, or playing an instrument?",
            "★ Do you feel more focused when writing with a physical pen or typing on a screen?",
            "★ Have you ever used hand gestures to communicate with someone who spoke a different language?",
            "★ What is the most delicate physical task you know how to do with your fingers?",
            "★ Do you think people are becoming less physically coordinated because we rely on tap screens?",
            "★ Have you ever looked closely at your hands and compared your finger lengths?",
            "★ What childhood game (like building blocks or clay) did you play the most?",
            "★ Do you feel that your hands are an essential part of how you express your personality?",
            "★ How easily can you learn a new physical sport or motor skill?",
            "★ Do you think touch is the most underrated physical sense we possess?"
        ],
        "r2": [
            "★ Would you trust a surgeon operating on you remotely from another country via virtual gloves?",
            "★ Would you support biometric finger sensors replacing all physical passwords and keys globally?",
            "★ Will humans eventually develop a universal sign language to communicate across cultures?",
            "★ Should future schools focus more on teaching manual dexterity and hands-on crafting?",
            "★ Do you think music played by hand has more soul than music created on a computer?",
            "★ Would you want a biometric ring that reads your subtle hand movements to control your home?",
            "★ Will the physical keyboard eventually become obsolete in favor of thought-control devices?",
            "★ What is the most beautiful piece of handmade art or craft you have ever owned?",
            "★ Do you think manual skills are becoming a rare and valuable luxury in our digital world?",
            "★ If you could instantly play any piano piece perfectly, which one would you choose?"
        ]
    }
}

def update_session_file(filepath):
    filename = os.path.basename(filepath)
    if filename not in HANDCRAFTED_QUESTIONS:
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    data = HANDCRAFTED_QUESTIONS[filename]

    # Update Round 1 personal questions
    r1_block = soup.find('div', id='s-r1') or soup.find('div', class_='round-1')
    if r1_block:
        r1_items = r1_block.find_all('div', class_='round-item')
        for i, item in enumerate(r1_items):
            if i >= len(data["r1"]):
                break
            pers_div = item.find('div', class_='round-item-personal')
            if pers_div:
                pers_div.clear()
                pers_div.string = data["r1"][i]
            else:
                # If personal question div doesn't exist, create it
                new_pers = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                new_pers.string = data["r1"][i]
                item.append(new_pers)

    # Update Round 2 personal questions
    r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')
    if r2_block:
        r2_items = r2_block.find_all('div', class_='round-item')
        for i, item in enumerate(r2_items):
            if i >= len(data["r2"]):
                break
            pers_div = item.find('div', class_='round-item-personal')
            if pers_div:
                pers_div.clear()
                pers_div.string = data["r2"][i]
            else:
                # If personal question div doesn't exist, create it
                new_pers = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                new_pers.string = data["r2"][i]
                item.append(new_pers)

    # Save mutated HTML back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Handcrafted updates applied successfully to {filename}")
    return True

def main():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    count = 0
    for filename in files:
        filepath = os.path.join(science_dir, filename)
        if update_session_file(filepath):
            count += 1

    print(f"Total files updated: {count}")

if __name__ == '__main__':
    main()
