import os
from bs4 import BeautifulSoup

MAPPINGS_PART2 = {
    "short-holiday-vs-long-holiday-elementary.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of short holidays.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A short <strong>holiday</strong> is great because you can rest without leaving your job for too long. <br/><strong>B:</strong> A long <strong>holiday</strong> lets you forget about work completely.</div>
<div class="round-item-personal">★ How often do you take a short <strong>holiday</strong> to rest?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It is exciting to <strong>travel</strong> to a nearby town for a weekend. <br/><strong>B:</strong> It is better to <strong>travel</strong> to a far country for a whole month.</div>
<div class="round-item-personal">★ Do you like to <strong>travel</strong> by train or by plane?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A <strong>short</strong> trip is easy to organize and does not cost too much money. <br/><strong>B:</strong> A long trip is better because you have more time to see everything.</div>
<div class="round-item-personal">★ Do you prefer a <strong>short</strong> weekend trip or a long summer trip?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Taking a short <strong>vacation</strong> every month keeps you happy and energetic. <br/><strong>B:</strong> A long summer <strong>vacation</strong> is the best way to reload your mind.</div>
<div class="round-item-personal">★ What is your favorite season to take a <strong>vacation</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> You can <strong>relax</strong> very well even during a quick three-day weekend. <br/><strong>B:</strong> You need at least two weeks to truly <strong>relax</strong> and forget your routine.</div>
<div class="round-item-personal">★ How do you usually <strong>relax</strong> after a busy day?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Visiting a small, quiet <strong>destination</strong> nearby is very peaceful. <br/><strong>B:</strong> An exotic, far-away <strong>destination</strong> offers a much bigger adventure.</div>
<div class="round-item-personal">★ What is the most beautiful <strong>destination</strong> you have ever visited?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It is simple to <strong>plan</strong> a quick weekend trip. <br/><strong>B:</strong> You must <strong>plan</strong> a long trip very carefully for many weeks.</div>
<div class="round-item-personal">★ Do you like to <strong>plan</strong> every detail of your trip, or do you prefer surprises?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> You only need to <strong>pack</strong> a small backpack for a short weekend trip. <br/><strong>B:</strong> You have to <strong>pack</strong> a big suitcase with many clothes for a long trip.</div>
<div class="round-item-personal">★ Is it hard for you to <strong>pack</strong> your bags before a trip?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A short trip keeps you <strong>active</strong> because you want to see everything quickly. <br/><strong>B:</strong> A long trip allows you to have slow, lazy days on the beach.</div>
<div class="round-item-personal">★ Do you prefer an <strong>active</strong> holiday with lots of walking, or a lazy one?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It is fun to <strong>choose</strong> a different small town to visit every month. <br/><strong>B:</strong> It is better to <strong>choose</strong> one perfect place and stay there for a long time.</div>
<div class="round-item-personal">★ How do you <strong>choose</strong> your travel destinations?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of short holidays.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A short <strong>holiday</strong> is too quick, and you do not have enough time to rest. <br/><strong>B:</strong> A long <strong>holiday</strong> is very expensive and hard to pay for.</div>
<div class="round-item-personal">★ Have you ever felt tired after a short <strong>holiday</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spontaneous <strong>travel</strong> can be very stressful when flights are delayed. <br/><strong>B:</strong> Long-distance <strong>travel</strong> causes bad jet lag and physical tiredness.</div>
<div class="round-item-personal">★ Does long-distance <strong>travel</strong> make you feel tired?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A <strong>short</strong> trip does not let you understand the local culture. <br/><strong>B:</strong> A long trip can make you feel homesick and miss your house.</div>
<div class="round-item-personal">★ Do you think a <strong>short</strong> trip is too fast to learn anything new?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A short <strong>vacation</strong> can feel like a waste of packing and transit time. <br/><strong>B:</strong> An excessively long <strong>vacation</strong> can make you feel bored and lazy.</div>
<div class="round-item-personal">★ Have you ever felt bored during a long <strong>vacation</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It is impossible to <strong>relax</strong> when you are constantly looking at the clock. <br/><strong>B:</strong> You might struggle to <strong>relax</strong> if you are worried about your empty house.</div>
<div class="round-item-personal">★ Is it easy for you to <strong>relax</strong> in a new place?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A nearby <strong>destination</strong> can feel boring because it is too similar to your home. <br/><strong>B:</strong> A far-away <strong>destination</strong> can be dangerous if you do not know the language.</div>
<div class="round-item-personal">★ Would you visit a <strong>destination</strong> if it had no internet?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spontaneous trips without a <strong>plan</strong> can lead to bad hotels and expensive tickets. <br/><strong>B:</strong> A rigid <strong>plan</strong> ruins the fun of spontaneous discoveries.</div>
<div class="round-item-personal">★ Have you ever traveled without any <strong>plan</strong> at all?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> If you do not <strong>pack</strong> carefully for a quick trip, you will miss essential things. <br/><strong>B:</strong> Lugging heavy bags that you had to <strong>pack</strong> ruins the joy of moving around.</div>
<div class="round-item-personal">★ Do you usually <strong>pack</strong> too many things?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Being too <strong>active</strong> on a short trip can leave you more exhausted than before. <br/><strong>B:</strong> A long, non-<strong>active</strong> trip makes you lose your healthy physical shape.</div>
<div class="round-item-personal">★ Do you feel tired when your holiday is too <strong>active</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It is stressful to <strong>choose</strong> where to go when you have very limited time. <br/><strong>B:</strong> It is risky to <strong>choose</strong> a single place for a whole month if you end up hating it.</div>
<div class="round-item-personal">★ Is it hard for you to <strong>choose</strong> between two good travel options?</div>
</div></div>
"""
    },
    "short-holiday-vs-long-holiday-intermediate.html": {
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The constant cycle of packing, traveling, and returning can prevent you from ever entering a deep, <strong>restorative</strong> state of rest. <br/><strong>B:</strong> A long vacation can be financially stressful, potentially causing anxiety about money rather than relaxation.</div>
<div class="round-item-personal">★ Personal angle: How important is a <strong>restorative</strong> environment for your mental health?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Frequent short getaways can create a fragmented schedule, preventing <strong>immersive</strong> experiences in any single culture. <br/><strong>B:</strong> Being absent from the workplace for several weeks can lead to an overwhelming backlog of work upon your return.</div>
<div class="round-item-personal">★ Personal angle: Do you find <strong>immersive</strong> travel more rewarding than standard sightseeing?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spending significant portions of a short trip in transit maximizes travel <strong>logistics</strong> stress. <br/><strong>B:</strong> Immersion in a completely different culture for a long period can cause significant cultural fatigue or culture shock.</div>
<div class="round-item-personal">★ Personal angle: How do you handle stressful <strong>logistics</strong> or unexpected delays when traveling?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Taking multiple flights throughout the year is highly <strong>detrimental</strong> to the environment. <br/><strong>B:</strong> Long-term travel requires rigid, meticulous planning which leaves very little room for spontaneous changes of mind.</div>
<div class="round-item-personal">★ Personal angle: Do you think flying frequently is too <strong>detrimental</strong> to be justified for holidays?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Frequent short trips without real disconnect can lead to severe professional <strong>burnout</strong>. <br/><strong>B:</strong> Spending several weeks in close quarters can strain relationships with travel partners, leading to conflict.</div>
<div class="round-item-personal">★ Personal angle: Have you ever experienced professional <strong>burnout</strong>, and did holiday rest resolve it?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spontaneous short travel can suffer from extreme accommodation price surges and limited choice. <br/><strong>B:</strong> A single ruined reservation on a long-term trip can disrupt the entire complex <strong>itinerary</strong>.</div>
<div class="round-item-personal">★ Personal angle: Do you prefer a loose, spontaneous style or a highly structured <strong>itinerary</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spontaneous short travel is often too brief and rushed to help you fully <strong>recuperate</strong>. <br/><strong>B:</strong> A long trip can lead to severe homesickness and a sense of disconnection from your local community.</div>
<div class="round-item-personal">★ Personal angle: How many days of rest do you usually need to fully <strong>recuperate</strong> your energy?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Quick weekend packing often leads to forgetting essential items or luggage stress. <br/><strong>B:</strong> Dragging massive, heavy suitcases across multiple destinations ruins the peaceful spirit of <strong>leisure</strong>.</div>
<div class="round-item-personal">★ Personal angle: What is your favorite <strong>leisure</strong> activity when you are not traveling?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Short holidays can leave you with the frustrating feeling of always wanting more. <br/><strong>B:</strong> Spending weeks on the move can result in severe travel <strong>fatigue</strong> rather than relaxation.</div>
<div class="round-item-personal">★ Personal angle: How do you combat physical or mental <strong>fatigue</strong> during long-distance trips?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Increasing the <strong>frequency</strong> of short getaways can lead to an unstable and chaotic routine. <br/><strong>B:</strong> Long vacations can make you feel completely disconnected from professional networks and industry trends.</div>
<div class="round-item-personal">★ Personal angle: How does the <strong>frequency</strong> of your breaks affect your work-life balance?</div>
</div></div>
"""
    },
    "typing-vs-handwriting-elementary.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Beautiful <strong>handwriting</strong> is a wonderful personal skill. <br/><strong>B:</strong> Typing is a modern, fast way to write.</div>
<div class="round-item-personal">★ Do you have neat <strong>handwriting</strong>, or is it hard to read?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Learning <strong>typing</strong> at a young age prepares you for future office jobs. <br/><strong>B:</strong> Writing by hand makes you think more about each word.</div>
<div class="round-item-personal">★ Is your <strong>typing</strong> speed fast or slow?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A mechanical <strong>keyboard</strong> is very fun and comfortable to write on. <br/><strong>B:</strong> Writing with a pen feels much more creative.</div>
<div class="round-item-personal">★ What kind of computer <strong>keyboard</strong> do you use?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A high-quality <strong>pen</strong> is a beautiful and simple tool that never runs out of battery. <br/><strong>B:</strong> A computer allows you to edit your text easily without scratching out words.</div>
<div class="round-item-personal">★ Do you prefer to write with a black or blue <strong>pen</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Writing on clean, white <strong>paper</strong> is a very peaceful and screen-free experience. <br/><strong>B:</strong> Digital screens save trees and keep all your work in one small place.</div>
<div class="round-item-personal">★ Do you still buy physical <strong>paper</strong> diaries or notebooks?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Typing is extremely <strong>fast</strong>, allowing you to write down all your thoughts quickly. <br/><strong>B:</strong> Writing slowly helps you concentrate and learn better.</div>
<div class="round-item-personal">★ Is it more important for you to write <strong>fast</strong> or to write neatly?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A <strong>slow</strong> writing process helps you memorize vocabulary and grammar much better. <br/><strong>B:</strong> Slow work can be frustrating when you have a lot of work to complete.</div>
<div class="round-item-personal">★ Do you feel that a <strong>slow</strong> lifestyle is more relaxing?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Keeping a personal <strong>notebook</strong> is a great way to write down daily goals and secrets. <br/><strong>B:</strong> Storing your notes in a digital file ensures you never lose them.</div>
<div class="round-item-personal">★ How many paper <strong>notebook</strong> books do you have in your room?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An ergonomic desk and keyboard are very <strong>comfortable</strong> for long working hours. <br/><strong>B:</strong> Writing in bed with a simple notepad can be much more cozy and relaxed.</div>
<div class="round-item-personal">★ Is your study chair <strong>comfortable</strong> to sit on for hours?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Making a <strong>mistake</strong> on paper is easy to fix with a simple eraser or correction tape. <br/><strong>B:</strong> On a computer, you can delete a <strong>mistake</strong> instantly with one button.</div>
<div class="round-item-personal">★ Are you afraid of making a <strong>mistake</strong> when you speak English?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Messy <strong>handwriting</strong> can cause serious misunderstandings in school and work. <br/><strong>B:</strong> Typing can feel cold and lack any personal human character.</div>
<div class="round-item-personal">★ Have you ever struggled to read someone else's <strong>handwriting</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Relentless <strong>typing</strong> all day can cause severe pain in your fingers and wrists. <br/><strong>B:</strong> Writing by hand is slow and can hurt your hand after a few minutes.</div>
<div class="round-item-personal">★ Does <strong>typing</strong> on a phone screen make your thumbs tired?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A loud <strong>keyboard</strong> can be very noisy and distract other people in a quiet office. <br/><strong>B:</strong> A lack of keys makes writing on paper slower and more exhausting.</div>
<div class="round-item-personal">★ Does the sound of a clicky <strong>keyboard</strong> annoy you?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A leaking <strong>pen</strong> can leave permanent ink stains on your fingers and clothes. <br/><strong>B:</strong> If you do not have a computer, you cannot write emails or search the web.</div>
<div class="round-item-personal">★ Has a <strong>pen</strong> ever exploded or leaked in your pocket?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Physical <strong>paper</strong> is easy to tear, get wet, or lose forever in a fire. <br/><strong>B:</strong> Staring at digital files on a screen for too long causes severe eye strain.</div>
<div class="round-item-personal">★ Have you ever lost an important piece of <strong>paper</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Writing too <strong>fast</strong> on a computer often leads to many typos and bad formatting. <br/><strong>B:</strong> Slow methods can be counterproductive when you have to meet tight deadlines.</div>
<div class="round-item-personal">★ Do you make more spelling errors when you type too <strong>fast</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A <strong>slow</strong> pen writer will fail to take down all the notes during a university lecture. <br/><strong>B:</strong> Fast typing can cause you to skip important thinking steps.</div>
<div class="round-item-personal">★ Do you get frustrated when someone is a very <strong>slow</strong> texter?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Carrying a heavy paper <strong>notebook</strong> everywhere is annoying and takes up bag space. <br/><strong>B:</strong> Cloud files can be hacked, leaking all your personal notes.</div>
<div class="round-item-personal">★ Would you worry if someone read your personal <strong>notebook</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Writing on a flat table without support can be highly un<strong>comfortable</strong> for your back. <br/><strong>B:</strong> Sitting at a computer all day is un<strong>comfortable</strong> for your body and posture.</div>
<div class="round-item-personal">★ What is the most un<strong>comfortable</strong> place where you had to study?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Scratching out a <strong>mistake</strong> on a paper form looks unprofessional and messy. <br/><strong>B:</strong> A computer autocorrect might change your words to something else by <strong>mistake</strong>.</div>
<div class="round-item-personal">★ Share a funny <strong>mistake</strong> you made in English.</div>
</div></div>
"""
    },
    "typing-vs-handwriting-intermediate.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Beautiful <strong>handwriting</strong> is a highly valued personal skill that shows discipline. <br/><strong>B:</strong> Quick typing allows you to record thoughts at the speed of speech.</div>
<div class="round-item-personal">★ Do you think schools should continue to grade students on their <strong>handwriting</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Professional <strong>typing</strong> skills are essential for high-paying modern career paths. <br/><strong>B:</strong> Writing by hand forces you to slow down and synthesize information.</div>
<div class="round-item-personal">★ Have you ever taken a speed test to measure your <strong>typing</strong> words per minute?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An ergonomic, mechanical <strong>keyboard</strong> provides satisfying feedback and speed. <br/><strong>B:</strong> Pens offer unlimited freedom of movement, drawing, and custom layout.</div>
<div class="round-item-personal">★ Do you care about the design and tactile feel of your <strong>keyboard</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Studies show that handwriting stimulates key <strong>cognitive</strong> networks in the brain. <br/><strong>B:</strong> Digital word processors free up your <strong>cognitive</strong> energy to focus on content.</div>
<div class="round-item-personal">★ Do you agree that typing requires less <strong>cognitive</strong> effort than writing by hand?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Taking notes by hand leads to significantly better memory <strong>retention</strong> of the material. <br/><strong>B:</strong> Digital documents are easily searchable, so you do not need perfect mental <strong>retention</strong>.</div>
<div class="round-item-personal">★ Do you remember information better when you write it down on paper, improving <strong>retention</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Handwriting practice builds complex neural <strong>connectivity</strong> between brain hemispheres. <br/><strong>B:</strong> Online sharing offers instant global <strong>connectivity</strong> and collaboration.</div>
<div class="round-item-personal">★ Is <strong>connectivity</strong> with others your main goal when taking digital notes?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The <strong>tactile</strong> sensation of a physical pen gliding on paper is deeply satisfying. <br/><strong>B:</strong> Smooth glass screens are much cleaner and do not require physical paper.</div>
<div class="round-item-personal">★ Do you enjoy the <strong>tactile</strong> feedback of physical keys or the silence of a touch screen?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Moving to a <strong>digital</strong> workspace allows for instant cloud backups and easy organization. <br/><strong>B:</strong> Traditional paper folders protect you from screen fatigue and distraction.</div>
<div class="round-item-personal">★ Is your daily life almost 100% <strong>digital</strong>, or do you still use physical diaries?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A modern tablet <strong>device</strong> allows you to combine handwriting and digital sharing. <br/><strong>B:</strong> A simple pen and paper require no charging and never crash.</div>
<div class="round-item-personal">★ What is your most essential electronic <strong>device</strong> for daily productivity?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Typing large amounts of text offers unparalleled speed and <strong>efficiency</strong>. <br/><strong>B:</strong> Handwriting forces a selective, slow process that is more intellectually efficient.</div>
<div class="round-item-personal">★ Do you prioritize absolute speed and <strong>efficiency</strong> when choosing how to take notes?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Illegible <strong>handwriting</strong> can ruin a student's grades and cause professional confusion. <br/><strong>B:</strong> Typing can make all documents look standardized and devoid of personality.</div>
<div class="round-item-personal">★ Have you ever failed to read your own <strong>handwriting</strong> after a long lecture?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Repetitive <strong>typing</strong> for hours can lead to physical issues like carpal tunnel syndrome. <br/><strong>B:</strong> Writing by hand is slow and can cause hand cramps very quickly.</div>
<div class="round-item-personal">★ Does continuous <strong>typing</strong> make your hands or wrists feel stiff?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A loud <strong>keyboard</strong> in a shared office can be extremely irritating to colleagues. <br/><strong>B:</strong> A physical pen limits your editing speed compared to a full QWERTY <strong>keyboard</strong>.</div>
<div class="round-item-personal">★ Do you get annoyed when colleagues type loudly on a mechanical <strong>keyboard</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Typing during lectures can lead to shallow <strong>cognitive</strong> processing of the information. <br/><strong>B:</strong> Rigid handwriting methods can slow down students with motor skill issues, causing a <strong>cognitive</strong> block.</div>
<div class="round-item-personal">★ Have you ever felt that typing is too passive to stimulate your <strong>cognitive</strong> thinking?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Copying slides word-for-word on a laptop results in poor information <strong>retention</strong>. <br/><strong>B:</strong> Paper notes can be easily lost, completely destroying any external <strong>retention</strong> of work.</div>
<div class="round-item-personal">★ How do you backup your notes to prevent the loss of critical information <strong>retention</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Excessive digital <strong>connectivity</strong> often leads to constant notification distractions. <br/><strong>B:</strong> A total lack of <strong>connectivity</strong> on paper prevents fast collaboration with peers.</div>
<div class="round-item-personal">★ Do you turn off your internet <strong>connectivity</strong> when you need to focus deeply?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The flat, cold lack of any <strong>tactile</strong> feedback on touchscreens can feel unnatural. <br/><strong>B:</strong> Physical paper lacks the convenient, fast editing options of digital systems.</div>
<div class="round-item-personal">★ Do you miss the <strong>tactile</strong> feel of real buttons when typing on a phone?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A purely <strong>digital</strong> life increases screen exposure, causing eye strain and poor sleep. <br/><strong>B:</strong> Refusing to use <strong>digital</strong> tools makes you highly inefficient in the modern workplace.</div>
<div class="round-item-personal">★ Do you actively try to reduce your <strong>digital</strong> screen time on weekends?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A single broken <strong>device</strong> can lock you out of all your files and schedule. <br/><strong>B:</strong> A pen and notebook can easily get physically damaged, wet, or lost.</div>
<div class="round-item-personal">★ Have you ever experienced a major panic when an electronic <strong>device</strong> stopped working?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Excessive focus on <strong>efficiency</strong> can lead to shallow, rushed writing. <br/><strong>B:</strong> A total disregard for <strong>efficiency</strong> makes you struggle to meet modern corporate deadlines.</div>
<div class="round-item-personal">★ Do you think our society is overly obsessed with speed and <strong>efficiency</strong>?</div>
</div></div>
"""
    }
}

def update_file_rounds(filepath, r1_html, r2_html):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Update Round 1
    r1_block = soup.find(class_='round-1')
    if r1_block and r1_html:
        r1_body = r1_block.find(class_='round-body')
        if r1_body:
            new_body = BeautifulSoup(r1_html, 'html.parser')
            r1_body.clear()
            r1_body.append(new_body)

    # Update Round 2
    r2_block = soup.find(class_='round-2')
    if r2_block and r2_html:
        r2_body = r2_block.find(class_='round-body')
        if r2_body:
            new_body = BeautifulSoup(r2_html, 'html.parser')
            r2_body.clear()
            r2_body.append(new_body)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Updated rounds in {filepath}")

def main():
    # Update the remaining files
    for k, v in MAPPINGS_PART2.items():
        filepath = f"events/sessions/debatable-relatable/{k}"
        r1 = v.get("r1")
        r2 = v.get("r2")
        update_file_rounds(filepath, r1, r2)

    # Inline update for homework-ban.html (wrap 'academic' in R1 Item 1)
    with open('events/sessions/debatable-relatable/homework-ban.html', 'r', encoding='utf-8') as f:
        hb_content = f.read()
    # Replace the academic text with strong tags in Round 1
    hb_content = hb_content.replace(
        "Without a heavy academic <strong>workload</strong>",
        "Without a heavy <strong>academic</strong> <strong>workload</strong>"
    )
    with open('events/sessions/debatable-relatable/homework-ban.html', 'w', encoding='utf-8') as f:
        f.write(hb_content)
    print("Inlined update for homework-ban.html")

    # Inline update for human-cloning.html
    # Let's read and parse human-cloning.html
    with open('events/sessions/debatable-relatable/human-cloning.html', 'r', encoding='utf-8') as f:
        hc_soup = BeautifulSoup(f.read(), 'html.parser')

    # Round 1 edits:
    r1 = hc_soup.find(id='s-r1')
    items_r1 = r1.find_all(class_='round-item')
    # Item 4: wrap 'controversial'
    # Current: "A:Cloning endangered animal species can protect our planetary biodiversity.B:Protecting natural habitats is a more sustainable way to conserve ecosystems than cloning animals in labs."
    # Let's replace Item 4 main contents
    items_r1[3].find(class_='round-item-main').clear()
    items_r1[3].find(class_='round-item-main').append(BeautifulSoup(
        "<strong>A:</strong> Cloning endangered animal species is a highly <strong>controversial</strong> but necessary path to protect our planetary biodiversity. <br/><strong>B:</strong> Protecting natural habitats is a more sustainable way to conserve ecosystems than cloning animals in labs.",
        "html.parser"
    ))
    items_r1[3].find(class_='round-item-personal').clear()
    items_r1[3].find(class_='round-item-personal').append(
        "★ Do you believe cloning animals is a <strong>controversial</strong> issue in your country?"
    )

    # Item 6: wrap 'limits' -> 'limit'
    items_r1[5].find(class_='round-item-main').clear()
    items_r1[5].find(class_='round-item-main').append(BeautifulSoup(
        "<strong>A:</strong> Cloning technology is a natural, exciting step in the <strong>progress</strong> of biological sciences. <br/><strong>B:</strong> Establishing strict legal <strong>limits</strong> on cloning protects society from unpredictable dystopian outcomes.",
        "html.parser"
    ))
    items_r1[5].find(class_='round-item-personal').clear()
    items_r1[5].find(class_='round-item-personal').append(
        "★ Do you think we should put a strict legal <strong>limit</strong> on human cloning?"
    )

    # Round 2 edits:
    r2 = hc_soup.find(id='s-r2')
    items_r2 = r2.find_all(class_='round-item')
    # Item 6: wrap 'progress'
    # Current main has "divert funds from urgent, standard medical progress."
    items_r2[5].find(class_='round-item-main').clear()
    items_r2[5].find(class_='round-item-main').append(BeautifulSoup(
        "<strong>A:</strong> Cloning research could divert funds from urgent, standard medical <strong>progress</strong>. <br/><strong>B:</strong> It could speed up clinical trials and unlock new discoveries.",
        "html.parser"
    ))
    items_r2[5].find(class_='round-item-personal').clear()
    items_r2[5].find(class_='round-item-personal').append(
        "★ Do you think cloning represents real medical <strong>progress</strong>?"
    )

    with open('events/sessions/debatable-relatable/human-cloning.html', 'w', encoding='utf-8') as f:
        f.write(str(hc_soup))
    print("Updated human-cloning.html")

if __name__ == "__main__":
    main()
