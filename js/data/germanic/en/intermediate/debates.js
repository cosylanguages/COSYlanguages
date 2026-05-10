(function() {
    const data = [{
                "topic": "Remote work vs office work — which is better for productivity and wellbeing?",
                "sideA": "Remote",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["You save time and money because there is no daily commute.", "It allows for a more flexible schedule to manage personal tasks."],
                "ideasB": ["Face-to-face communication makes teamwork much faster and easier.", "Working in an office helps you separate your professional and private life."]
            },
            {
                "topic": "Job security vs career growth — which should adults prioritise?",
                "sideA": "Security",
                "sideB": "Growth",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["A stable job reduces stress about money and your future.", "It is better for planning long-term goals like buying a house."],
                "ideasB": ["Taking risks can lead to better opportunities and a higher salary.", "Changing jobs often helps you learn new skills more quickly."]
            },
            {
                "topic": "Starting your own business vs working for an employer — which is the better choice at 30?",
                "sideA": "Own business",
                "sideB": "Working for employer",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["You have the freedom to make your own decisions and be your own boss.", "There is no limit to how much money you can earn if you are successful."],
                "ideasB": ["Working for a company provides a steady income and benefits.", "You don't have to worry about the administration and risks of a business."]
            },
            {
                "topic": "Ambition vs work-life balance — can you really have both?",
                "sideA": "Ambition",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Being ambitious helps you reach the top of your field and achieve great things.", "Hard work is necessary if you want to make a big impact on the world."],
                "ideasB": ["Spending time with family and friends is more important for happiness.", "Burnout can happen if you focus only on your career for too long."]
            },
            {
                "topic": "Networking vs skill-building — which advances your career more?",
                "sideA": "Networking",
                "sideB": "Skills",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Who you know is often more important than what you know for finding jobs.", "Building relationships can open doors that skills alone cannot."],
                "ideasB": ["If you are excellent at what you do, opportunities will always find you.", "Hard skills are the foundation of a successful and long-lasting career."]
            },
            {
                "topic": "Honest feedback from a manager vs being left to work independently — which motivates adults more?",
                "sideA": "Feedback",
                "sideB": "Independence",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Regular feedback helps you understand your mistakes and improve quickly.", "It is motivating to know that your manager is paying attention to your work."],
                "ideasB": ["Trusting employees to work alone shows respect for their abilities.", "Independence allows you to be more creative and find your own solutions."]
            },
            {
                "topic": "Changing career at 40 vs staying in your field — which is the wiser decision?",
                "sideA": "Changing career",
                "sideB": "Staying",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["It is never too late to follow your passion and find a job you love.", "Starting something new can give you fresh energy and motivation."],
                "ideasB": ["At 40, you have valuable experience that is worth keeping in your current field.", "Starting from zero can be very risky if you have family responsibilities."]
            },
            {
                "topic": "Paying off a mortgage early vs investing that money — which is smarter?",
                "sideA": "Pay off early",
                "sideB": "Investing",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Being debt-free provides peace of mind and financial freedom.", "You save a lot of money on interest payments over the years."],
                "ideasB": ["Investing in the stock market can give you a higher return than the interest you pay.", "It is better to have liquid assets that you can use in case of an emergency."]
            },
            {
                "topic": "Owning a home vs renting permanently — which suits modern adult life better?",
                "sideA": "Owning",
                "sideB": "Renting",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Buying a home is a great long-term investment for your future.", "You have the freedom to decorate and change the house as you like."],
                "ideasB": ["Renting gives you the flexibility to move easily for work or lifestyle.", "The landlord is responsible for all the repairs and maintenance costs."]
            },
            {
                "topic": "Saving for retirement early vs enjoying money in your thirties — which is wiser?",
                "sideA": "Saving early",
                "sideB": "Enjoying now",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["If you start saving early, your money has more time to grow.", "You will be able to relax and enjoy your life when you are older."],
                "ideasB": ["You are only young once, so you should travel and have experiences now.", "The future is uncertain, so it is better to enjoy your money while you can."]
            },
            {
                "topic": "Living below your means vs spending to enjoy life now — which approach is healthier?",
                "sideA": "Below means",
                "sideB": "Enjoy now",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Living simply helps you avoid debt and stay out of financial trouble.", "It is easier to save for big goals like a house or a new car."],
                "ideasB": ["Buying high-quality things can make your daily life more comfortable.", "Treating yourself to nice things is a good reward for your hard work."]
            },
            {
                "topic": "Two incomes in a household vs one partner staying home — which works better for families?",
                "sideA": "Two incomes",
                "sideB": "One staying home",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Two salaries mean more financial security and a higher standard of living.", "Both parents can develop their careers and share the household tasks."],
                "ideasB": ["Having a parent at home is very beneficial for the children's development.", "One person can focus on the home so the family life is less stressful."]
            },
            {
                "topic": "Having children vs choosing not to — which is a more fulfilling adult life?",
                "sideA": "Having children",
                "sideB": "No children",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Raising children is a unique experience that brings a lot of joy and love.", "Children can take care of you and support you when you get older."],
                "ideasB": ["Choosing not to have kids allows for more freedom and spontaneous travel.", "You can focus all your energy on your career, hobbies, and partner."]
            },
            {
                "topic": "Strict parenting vs permissive parenting — which produces happier adults?",
                "sideA": "Strict",
                "sideB": "Permissive",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Clear rules help children learn discipline and respect for others.", "Strict parenting can lead to better academic results and success."],
                "ideasB": ["Giving children freedom helps them become more creative and independent.", "A warm and flexible environment builds a stronger bond with parents."]
            },
            {
                "topic": "Long-term relationship vs staying single — which is better for personal growth?",
                "sideA": "Relationship",
                "sideB": "Single",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["A partner provides emotional support and shares the challenges of life.", "Being in a relationship helps you learn how to compromise and care."],
                "ideasB": ["Being single allows you to focus entirely on your own goals and interests.", "You have the freedom to make every decision without consulting anyone."]
            },
            {
                "topic": "Keeping work and personal life separate vs integrating them — which is healthier?",
                "sideA": "Separate",
                "sideB": "Integrated",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Setting clear boundaries prevents work from taking over your personal life.", "It is easier to relax when you are not thinking about your job at home."],
                "ideasB": ["Integration allows you to be more flexible with your time during the day.", "If you love your work, it is natural for it to be a part of who you are."]
            },
            {
                "topic": "Moving abroad as a couple vs staying close to family — which is the right call?",
                "sideA": "Moving abroad",
                "sideB": "Staying close",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Living in a new country is a great adventure that broadens your horizon.", "Moving abroad as a couple can make your relationship much stronger."],
                "ideasB": ["Being near family provides a support network for raising children.", "It is important to keep your cultural roots and stay close to old friends."]
            },
            {
                "topic": "Prioritising physical health vs mental health — which should adults focus on first?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["A strong body is the foundation for a long and active life.", "Regular exercise helps prevent many serious diseases and illnesses."],
                "ideasB": ["Mental wellbeing is essential for happiness and good relationships.", "If you are not mentally healthy, it is difficult to take care of your body."]
            },
            {
                "topic": "Private healthcare vs relying on the public system — which is the better adult strategy?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Private insurance usually offers shorter waiting times and better facilities.", "You have more choice about which doctors and specialists you see."],
                "ideasB": ["A public system is fairer because it provides care for everyone, regardless of money.", "Essential healthcare should be a right, not something you have to buy."]
            },
            {
                "topic": "Regular medical check-ups vs only going when ill — which is the smarter approach?",
                "sideA": "Regular checks",
                "sideB": "Only when ill",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Prevention is better than cure because you can catch problems early.", "Regular check-ups can give you peace of mind about your health."],
                "ideasB": ["You shouldn't waste the doctor's time if you are feeling perfectly fine.", "Our bodies can often heal themselves without medical intervention."]
            },
            {
                "topic": "Reducing alcohol vs reducing stress — which has a greater impact on adult health?",
                "sideA": "Reducing alcohol",
                "sideB": "Reducing stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Alcohol is a toxin that affects your liver, heart, and brain directly.", "Cutting out alcohol can improve your sleep and energy levels quickly."],
                "ideasB": ["Chronic stress is a silent killer that causes many modern health problems.", "Learning to relax is more important than worrying about what you drink."]
            },
            {
                "topic": "Individual freedom vs community responsibility — which should guide adult decisions?",
                "sideA": "Freedom",
                "sideB": "Responsibility",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Adults should be free to live their lives however they choose.", "Individual liberty is the most important value in a modern society."],
                "ideasB": ["We all have a duty to help our neighbors and improve our community.", "A society only works well if everyone thinks about the common good."]
            },
            {
                "topic": "Optimism about the future vs realism — which is the more useful attitude for adults?",
                "sideA": "Optimism",
                "sideB": "Realism",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["A positive attitude helps you overcome obstacles and stay motivated.", "Optimists are generally happier and more successful in their lives."],
                "ideasB": ["Realism helps you prepare for challenges and make better decisions.", "It is better to see the world as it is, not as you want it to be."]
            },
            {
                "topic": "Changing the world vs building a stable personal life — which is the more honest ambition?",
                "sideA": "Changing world",
                "sideB": "Stable life",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["We should all try to leave the world a better place than we found it.", "Working for a cause gives your life a deeper meaning and purpose."],
                "ideasB": ["Taking care of your family and being a good person is enough.", "Trying to change the world is often unrealistic and leads to frustration."]
            },
            {
                "topic": "Volunteering your time vs donating money — which does more good?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Giving your time allows you to see the impact of your help directly.", "Volunteering helps you meet new people and learn new perspectives."],
                "ideasB": ["Charities can use money to buy professional help and resources.", "Donating is more efficient if you have a busy job and a high salary."]
            },
            {
                "topic": "Following your generation's values vs questioning them — which is more admirable?",
                "sideA": "Following",
                "sideB": "Questioning",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Traditional values provide a stable foundation for a successful society.", "Respecting your elders' wisdom helps maintain social harmony."],
                "ideasB": ["Each generation should decide which values are still relevant today.", "Questioning the status quo is necessary for progress and social change."]
            },
            {
                "topic": "Knowing how much your colleagues earn vs not knowing — which is better for office harmony?",
                "sideA": "Knowing",
                "sideB": "Not knowing",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Knowing salaries helps ensure that everyone is paid fairly for their work.", "Transparency reduces the gender pay gap and encourages honesty."],
                "ideasB": ["Money is a private matter and talking about it can cause jealousy.", "Privacy prevents unnecessary competition and tension between colleagues."]
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful in adult life?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Replying quickly shows that you respect the other person's time.", "In a fast world, immediate communication is necessary for efficiency."],
                "ideasB": ["Taking your time allows you to give a more thoughtful and better answer.", "It is important to have boundaries and not be a slave to your phone."]
            },
            {
                "topic": "Admitting you have no idea what a pension fund is vs pretending you do — which is the more relatable adult experience?",
                "sideA": "Admitting",
                "sideB": "Pretending",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Honesty is better because it allows you to ask questions and learn.", "Most adults are confused about finance, so admitting it is relatable."],
                "ideasB": ["Pretending you know helps you look professional and confident.", "It is better to research it privately later than to look ignorant now."]
            },
            {
                "topic": "Cancelling plans at the last minute vs going out when you don't want to — which is the worse adult habit?",
                "sideA": "Cancelling",
                "sideB": "Going anyway",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["If you are exhausted, it is better to stay home and rest your mind.", "Forcing yourself to go out when you are unhappy is not fun for anyone."],
                "ideasB": ["You should keep your promises even if you don't feel like it.", "Once you are there, you will probably have a good time and be glad you went."]
            },
            {
                "topic": "Talking openly about money with friends vs keeping it private — which is the more mature approach?",
                "sideA": "Talking openly",
                "sideB": "Keeping private",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Discussing money with friends helps everyone make better financial choices.", "Being open about costs makes it easier to plan activities together."],
                "ideasB": ["Money can create a divide between friends who earn different amounts.", "It is more polite to keep financial details to yourself in social situations."]
            },
            {
                "topic": "Work from home vs. Office work",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "You can focus better at home without the noise of a busy office.",
                    "It is easier to stay healthy by cooking your own lunch at home."
                ],
                "ideasB": [
                    "The office environment encourages creativity through spontaneous ideas.",
                    "Separating work and home helps you 'switch off' at the end of the day."
                ]
            },
            {
                "topic": "Electric cars vs. Petrol cars",
                "sideA": "Electric",
                "sideB": "Petrol",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Electric cars are much better for the environment because they have no emissions.",
                    "They are cheaper to run and maintain in the long term."
                ],
                "ideasB": [
                    "Petrol cars are better for long trips because you can refuel quickly.",
                    "The infrastructure for charging electric cars is still not good enough everywhere."
                ]
            },
            {
                "topic": "Online learning vs classroom learning — which is more effective?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Online courses are more flexible and you can study at your own pace.", "You can access the best teachers in the world from your own home."],
                "ideasB": ["In a classroom, you can interact with other students and the teacher directly.", "A physical school provides a better environment for focusing on your studies."]
            },
            {
                "topic": "Memorising facts vs learning how to find information — which skill is more important?",
                "sideA": "Facts",
                "sideB": "Finding info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Having basic facts in your head helps you understand the world more quickly.", "You cannot always rely on the internet to provide accurate information."],
                "ideasB": ["It is more useful to know how to research and analyze data than to memorize it.", "Facts change over time, but the skill of finding information is forever."]
            },
            {
                "topic": "University education vs vocational training — which is a better path?",
                "sideA": "University",
                "sideB": "Vocational",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["A degree provides a broad education and more long-term career options.", "University life helps you develop critical thinking and social skills."],
                "ideasB": ["Vocational training prepares you for a specific job with practical skills.", "You can start earning money sooner and avoid large student debts."]
            },
            {
                "topic": "Exams vs continuous assessment — which is a fairer way to evaluate students?",
                "sideA": "Exams",
                "sideB": "Continuous",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Exams are a fair way to test everyone's knowledge under the same conditions.", "They motivate students to study hard and remember what they learned."],
                "ideasB": ["Continuous assessment is less stressful and shows a student's true progress.", "It encourages consistent work throughout the year rather than just one day."]
            },
            {
                "topic": "Learning a foreign language at school vs living abroad — which is more effective?",
                "sideA": "School",
                "sideB": "Living abroad",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["School provides a structured environment for learning grammar and vocabulary.", "It is a safe and cheap way to start learning before you travel."],
                "ideasB": ["Living abroad forces you to speak the language in real-life situations every day.", "You learn the culture and the natural way of speaking much faster."]
            },
            {
                "topic": "Single-sex schools vs mixed schools — which are better for students?",
                "sideA": "Single-sex",
                "sideB": "Mixed",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Students might feel more comfortable and focus better without the opposite sex.", "Teachers can adapt their methods to the specific needs of boys or girls."],
                "ideasB": ["Mixed schools reflect the real world where men and women work together.", "Interacting with everyone helps develop better social and communication skills."]
            },
            {
                "topic": "Social media vs face-to-face communication — which is better for staying in touch?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Social media allows you to stay in touch with many people at the same time.", "It is the easiest way to share photos and updates with friends far away."],
                "ideasB": ["Face-to-face communication allows you to see body language and feel emotions.", "Meeting in person builds much deeper and more meaningful relationships."]
            },
            {
                "topic": "Streaming services vs traditional TV — which is better?",
                "sideA": "Streaming",
                "sideB": "Traditional TV",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["You can watch what you want, when you want, without any commercials.", "Streaming services offer a huge variety of international shows and movies."],
                "ideasB": ["Traditional TV is better for live events like news and sports.", "Watching the same show at the same time as everyone else creates a sense of community."]
            },
            {
                "topic": "Working from home vs working in an office — which is more productive?",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Many people find they get more work done at home with fewer interruptions.", "A comfortable home office can improve your focus and quality of work."],
                "ideasB": ["Managers can support their team more effectively in a physical office.", "It is easier to have quick meetings and solve problems when everyone is present."]
            },
            {
                "topic": "Reading news online vs reading a newspaper — which is more reliable?",
                "sideA": "Online news",
                "sideB": "Newspaper",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Online news is updated instantly so you always know what is happening now.", "It is free and you can read many different sources for a balanced view."],
                "ideasB": ["Newspapers often have higher quality journalism and more in-depth articles.", "Reading a physical paper is a good way to disconnect from screens."]
            },
            {
                "topic": "Spending time on social media vs spending time in nature — which is better for your mental health?",
                "sideA": "Social media",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Social media helps you feel connected and supported by your online community.", "It is a great source of inspiration and positive messages."],
                "ideasB": ["Spending time in nature reduces stress and improves your mood significantly.", "Being outdoors helps you clear your mind and enjoy the present moment."]
            },
            {
                "topic": "Using public transport vs driving a car — which is better for society?",
                "sideA": "Public transport",
                "sideB": "Car",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Public transport is better for the environment because it reduces pollution.", "It is often cheaper than owning, insuring, and parking a car."],
                "ideasB": ["Driving a car gives you more freedom and saves time on many journeys.", "It is more comfortable and private than traveling on a crowded bus or train."]
            },
            {
                "topic": "Buying second-hand clothes vs buying new clothes — which is the better habit?",
                "sideA": "Second-hand",
                "sideB": "New",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Buying second-hand is much better for the planet and reduces waste.", "You can find unique items and high-quality brands for a very low price."],
                "ideasB": ["New clothes are generally in better condition and last longer.", "Shopping for new trends is a fun way to express your personal style."]
            },
            {
                "topic": "Living in a city vs living in the countryside — which suits young people better?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Cities offer more job opportunities, nightlife, and cultural events.", "Public transport in cities makes it easy for young people to get around."],
                "ideasB": ["The countryside provides a healthier environment with more space and nature.", "It is much cheaper to live outside the city, so you can save more money."]
            },
            {
                "topic": "Vegetarianism vs eating meat — which is better for the planet?",
                "sideA": "Vegetarianism",
                "sideB": "Meat",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Producing meat uses a lot of water and land, which is bad for the environment.", "A plant-based diet reduces carbon emissions and helps fight climate change."],
                "ideasB": ["Meat is a good source of protein and essential vitamins for many people.", "Sustainable farming practices can make meat production less harmful."]
            },
            {
                "topic": "Individual lifestyle changes vs government action — which does more for the environment?",
                "sideA": "Individual",
                "sideB": "Government",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["If everyone makes small changes, the total impact will be very large.", "Individual choices send a message to companies to be more sustainable."],
                "ideasB": ["Only governments can make big laws to stop pollution from large industries.", "International agreements are necessary to solve global environmental problems."]
            },
            {
                "topic": "A stable job vs a creative career — which is the better life choice?",
                "sideA": "Stable job",
                "sideB": "Creative career",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["A stable job allows you to plan your life and avoid financial stress.", "You can follow your creative passions as a hobby in your free time."],
                "ideasB": ["A creative career is more fulfilling because you can express yourself.", "Doing what you love every day is better than having a high salary."]
            },
            {
                "topic": "Starting your own business vs working for a company — which is better?",
                "sideA": "Own business",
                "sideB": "Company",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Starting a business allows you to create something new and be independent.", "You can build your own team and culture from the ground up."],
                "ideasB": ["Working for a company offers more security and a better work-life balance.", "You have colleagues to support you and you can learn from your managers."]
            },
            {
                "topic": "High salary vs job satisfaction — which matters more at work?",
                "sideA": "Salary",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["A high salary allows you to afford a comfortable life and travel.", "Money can buy experiences and security for you and your family."],
                "ideasB": ["If you are happy at work, you will be more productive and less stressed.", "We spend most of our lives working, so it should be something we enjoy."]
            },
            {
                "topic": "Working long hours vs having a work-life balance — which leads to more success?",
                "sideA": "Long hours",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Hard work and long hours are often necessary to achieve great success.", "The most successful people in the world are usually very dedicated to their work."],
                "ideasB": ["A good balance helps you stay creative and productive in the long term.", "Success is not just about work; it is also about health and relationships."]
            },
            {
                "topic": "Choosing a career based on passion vs based on job prospects — which is wiser?",
                "sideA": "Passion",
                "sideB": "Prospects",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["If you love your job, you will work harder and eventually be successful.", "Following your passion leads to a more meaningful and happy life."],
                "ideasB": ["It is wiser to choose a job that is in high demand and pays well.", "You can use the money from a good job to follow your passions in your free time."]
            },
            {
                "topic": "Living as an individual vs putting community first — which is more important?",
                "sideA": "Individual",
                "sideB": "Community",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Focusing on yourself allows you to reach your full potential as a person.", "Individual freedom is the most important right in a modern society."],
                "ideasB": ["Helping others and being part of a group makes life more rewarding.", "A strong community provides support and security for everyone."]
            },
            {
                "topic": "Traditional values vs modern values — which are more important to keep?",
                "sideA": "Traditional",
                "sideB": "Modern",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Traditional values like family and respect are the foundation of society.", "Keeping our traditions helps us stay connected to our history and culture."],
                "ideasB": ["Modern values like equality and diversity make our society fairer for everyone.", "We need to update our values to solve the challenges of the 21st century."]
            },
            {
                "topic": "Volunteering vs donating money to charity — which helps more?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Giving your time is more personal and shows that you really care.", "You can gain new skills and experiences by volunteering directly."],
                "ideasB": ["Money can be used to pay for professional help that is more effective.", "Donating is a quick and easy way for busy people to support a good cause."]
            },
            {
                "topic": "Fame vs making a difference quietly — which is a better goal in life?",
                "sideA": "Fame",
                "sideB": "Quiet difference",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Fame gives you a platform to influence many people and spread good ideas.", "Being recognized for your work is a great reward for your efforts."],
                "ideasB": ["Helping people quietly is more sincere and avoids the stress of being famous.", "Making a real impact in your local community is more important than fame."]
            },
            {
                "topic": "Following rules vs thinking for yourself — which matters more?",
                "sideA": "Rules",
                "sideB": "Self-thought",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Rules are necessary to keep order and safety in our society.", "Following established rules is often the most efficient way to get things done."],
                "ideasB": ["Progress only happens when people question the rules and think differently.", "It is important to have your own opinions and not just follow the crowd."]
            },
            {
                "topic": "Physical health vs mental health — which should be the priority?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["If you are physically healthy, you have the energy to deal with mental challenges.", "A healthy body often leads to a more positive and healthy mind."],
                "ideasB": ["Mental health is the foundation of how we experience the world.", "Without a healthy mind, it is very difficult to maintain a healthy body."]
            },
            {
                "topic": "Prevention vs treatment — which is the better approach to healthcare?",
                "sideA": "Prevention",
                "sideB": "Treatment",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Prevention is cheaper and easier than treating a disease after it starts.", "Leading a healthy lifestyle can prevent most modern health problems."],
                "ideasB": ["Medical science should focus on finding better cures for serious illnesses.", "We will always need effective treatments for accidents and unexpected diseases."]
            },
            {
                "topic": "Competitive sport vs exercise for fun — which is better for you?",
                "sideA": "Competitive",
                "sideB": "For fun",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Competition motivates you to work harder and achieve your personal best.", "Playing in a team teaches you discipline and how to handle pressure."],
                "ideasB": ["Exercising for fun is more sustainable and reduces the risk of injury.", "It should be about relaxing and enjoying movement, not about winning."]
            },
            {
                "topic": "Private healthcare vs public healthcare — which system is fairer?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["A private system encourages competition, which can lead to better quality care.", "People should be free to spend their own money on better healthcare."],
                "ideasB": ["Public healthcare ensures that everyone gets help, regardless of their income.", "A fair society should provide the same level of medical care to every citizen."]
            },
            {
                "topic": "Cinema vs literature — which is a more powerful art form?",
                "sideA": "Cinema",
                "sideB": "Literature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Movies are a powerful visual experience that can reach a huge audience.", "The combination of images and music creates a very strong emotional impact."],
                "ideasB": ["Books allow you to imagine the world and the characters in your own way.", "Literature can explore the internal thoughts of people more deeply than film."]
            },
            {
                "topic": "Modern art vs classical art — which is more valuable?",
                "sideA": "Modern",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Modern art is valuable because it challenges us to think about the present.", "It can be more creative and experimental than traditional art forms."],
                "ideasB": ["Classical art shows incredible technical skill and has stood the test of time.", "The beauty of traditional paintings and sculptures is more universal."]
            },
            {
                "topic": "Preserving old buildings vs building new ones — which matters more?",
                "sideA": "Preserving old",
                "sideB": "Building new",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Old buildings are part of our history and give our cities character.", "It is more sustainable to renovate existing buildings than to destroy them."],
                "ideasB": ["New buildings can be more energy-efficient and better for modern needs.", "Modern architecture can be beautiful and represent our own time."]
            },
            {
                "topic": "Local culture vs globalisation — which enriches communities more?",
                "sideA": "Local",
                "sideB": "Globalisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Protecting local culture helps maintain our unique identity and traditions.", "Local products and customs are often better for the environment."],
                "ideasB": ["Globalisation allows us to share ideas and products from all over the world.", "It brings people together and helps us understand different cultures."]
            },
            {
                "topic": "Learning from mistakes vs learning from success — which teaches more?",
                "sideA": "Mistakes",
                "sideB": "Success",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Mistakes teach you what doesn't work and help you be more resilient.", "We often remember our failures more clearly, so the lesson is stronger."],
                "ideasB": ["Success shows you the right path and builds your confidence to continue.", "Learning from what works is more efficient than repeating errors."]
            },
            {
                "topic": "Tablets in class vs traditional notebooks — which help students more?",
                "sideA": "Tablets",
                "sideB": "Notebooks",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Tablets allow students to access interactive content and a world of information.", "They are more portable and can replace many heavy textbooks."],
                "ideasB": ["Writing by hand helps you remember information better than typing.", "Notebooks don't have distractions like games or social media notifications."]
            },
            {
                "topic": "Being always contactable vs having digital free time — which is better?",
                "sideA": "Contactable",
                "sideB": "Free time",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Being contactable is important for emergencies and professional life.", "Modern technology allows us to stay connected with loved ones easily."],
                "ideasB": ["Digital free time is necessary to reduce stress and improve mental health.", "We need to disconnect from the virtual world to enjoy the real world."]
            },
            {
                "topic": "Reusing things vs recycling — which is more effective?",
                "sideA": "Reusing",
                "sideB": "Recycling",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Reusing objects is better because it doesn't require any energy to process them.", "It encourages a more sustainable and less wasteful lifestyle."],
                "ideasB": ["Recycling is more practical for large amounts of waste like plastic and glass.", "It allows us to turn old materials into new products on a large scale."]
            },
            {
                "topic": "One career for life vs changing careers often — which is better?",
                "sideA": "One career",
                "sideB": "Changing often",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Staying in one career helps you become a true expert and gain more respect.", "It provides more long-term stability and a predictable life path."],
                "ideasB": ["Changing careers allows you to explore different interests and stay motivated.", "It makes you more adaptable to the changes in the modern job market."]
            },
            {
                "topic": "Sleep vs exercise — which has a bigger impact on your health?",
                "sideA": "Sleep",
                "sideB": "Exercise",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Sleep is essential for your body to repair itself and for your brain to function.", "If you are tired, you cannot be productive or healthy, no matter how much you exercise."],
                "ideasB": ["Regular exercise strengthens your heart, muscles, and improves your mood.", "Being active gives you more energy and helps you sleep better at night."]
            },
            {
                "topic": "Pop music vs classical music — which has a bigger cultural impact?",
                "sideA": "Pop",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Pop music reflects the current culture and brings millions of people together.", "It is more accessible and everyone can enjoy it, regardless of their background."],
                "ideasB": ["Classical music has a timeless beauty and influenced all modern genres.", "It requires a high level of skill and can express very complex emotions."]
            },
            {
                "topic": "Knowing how something ends before watching it vs being surprised — which is better?",
                "sideA": "Knowing",
                "sideB": "Surprised",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Knowing the ending helps you relax and enjoy how the story is told.", "If you don't like the ending, you can avoid wasting your time on the show."],
                "ideasB": ["The surprise and suspense are what make a story exciting and memorable.", "Experiencing the twists for the first time is a unique and fun experience."]
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Replying quickly shows that you respect the other person's time.", "In a fast world, immediate communication is necessary for efficiency."],
                "ideasB": ["Taking your time allows you to give a more thoughtful and better answer.", "It is important to have boundaries and not be a slave to your phone."]
            },
            {
                "topic": "Binge-watching a series in one go vs watching one episode a week — which is the right way?",
                "sideA": "Binge-watching",
                "sideB": "Weekly",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Watching a whole series quickly helps you remember all the details and characters.", "You don't have to wait for a week to find out what happens next."],
                "ideasB": ["Watching one episode a week gives you time to think about and discuss it.", "It makes the experience last longer and creates more anticipation."]
            },
            {
                "topic": "Window seat vs aisle seat on a plane — which is objectively better?",
                "sideA": "Window seat",
                "sideB": "Aisle seat",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["The window seat offers amazing views and a wall to lean on for sleep.", "No one will disturb you when they need to get up during the flight."],
                "ideasB": ["The aisle seat gives you more legroom and you can get up easily whenever you want.", "You don't have to ask anyone to move if you need to go to the toilet."]
            },
            {
                "topic": "Skipping the gym once vs going and having a bad session — which is worse?",
                "sideA": "Skipping",
                "sideB": "Bad session",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["It is better to skip one day and rest than to force yourself when you are tired.", "A bad session can be discouraging and might lead to an injury."],
                "ideasB": ["Going even when you don't want to helps you build a strong habit and discipline.", "Even a light or 'bad' workout is better for your body than doing nothing."]
            },
            {
                "topic": "Talking to yourself vs talking to your pet — which is more reasonable?",
                "sideA": "To yourself",
                "sideB": "To pet",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Talking to yourself helps you organize your thoughts and solve problems.", "It is a natural way to process information and stay focused."],
                "ideasB": ["Pets are great listeners and their presence provides emotional comfort.", "Talking to an animal feels more social and less lonely than talking to yourself."]
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();