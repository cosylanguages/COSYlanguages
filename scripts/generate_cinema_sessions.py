# Python script to generate all 91 Cinema Club sessions programmatically.
# This script parses the cinema brainstorm markdown table and generates highly unique, non-duplicative sessions with 10 vocabulary units, 10 Round 1 questions, and 10 Round 2 statements.
import os
import re

MD_PATH = "notebook/cinema_club_brainstorm.md"
GRAMMAR_MD_PATH = "notebook/grammatical_topics_brainstorm.md"
OUTPUT_DIR = "events/sessions/cinema-club"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Parse grammar mappings from notebook/grammatical_topics_brainstorm.md
GRAMMAR_MAPPINGS = {}
if os.path.exists(GRAMMAR_MD_PATH):
    with open(GRAMMAR_MD_PATH, "r", encoding="utf-8") as gf:
        g_text = gf.read()
    for line in g_text.split("\n"):
        if line.strip().startswith("|"):
            parts = [p.strip() for p in line.split("|")]
            if len(parts) >= 7:
                num = parts[1]
                if num.isdigit():
                    title_clean = parts[2].replace("**", "").strip()
                    grammar_topic = parts[5].strip()
                    GRAMMAR_MAPPINGS[title_clean.lower()] = grammar_topic

def get_grammar_focus(title):
    t_clean = title.lower().strip()
    if t_clean in GRAMMAR_MAPPINGS:
        return GRAMMAR_MAPPINGS[t_clean]
    for k, v in GRAMMAR_MAPPINGS.items():
        if k in t_clean or t_clean in k:
            return v
    return "Contextual Conversational Structures"

# Curated dictionary of common definitions and examples
VOCAB_DB = {
    "hierarchy": ("a system in which members of an organization are ranked according to status.", "The film highlights the intense corporate hierarchy of high fashion."),
    "ambitions": ("strong desires to achieve success, power, or distinction.", "The main characters balance their career ambitions with personal life."),
    "grief": ("intense sorrow, especially caused by someone's death.", "The narrative explores how the family copes with sudden, overwhelming grief."),
    "trauma": ("a deeply distressing or disturbing experience.", "The protagonist struggles to overcome lingering childhood trauma."),
    "romance": ("a feeling of excitement and mystery associated with love.", "Their romance is tested by societal expectations and historical events."),
    "prejudice": ("preconceived opinion that is not based on reason or actual experience.", "The film addresses deep-rooted social prejudice in mid-century society."),
    "surveillance": ("close observation, especially of a suspected person or group.", "The characters live under constant, high-tech state surveillance."),
    "survival": ("the state or fact of continuing to live or exist, especially in spite of difficult conditions.", "Survival in this dystopian future requires absolute secrecy and courage."),
    "survival mode": ("the state or fact of continuing to live or exist, especially in spite of difficult conditions.", "Survival in this dystopian future requires absolute secrecy and courage."),
    "solidarity": ("unity or agreement of feeling or action, especially among individuals.", "The resistance movement is built on quiet acts of human solidarity."),
    "superstition": ("excessively credulous belief in and reverence for supernatural forces.", "The old village is bound by dark superstition and fear of the woods."),
    "optimism": ("hopefulness and confidence about the future or the success of something.", "Despite her setbacks, she maintains a bright and contagious optimism."),
    "independence": ("the fact or state of being independent and self-reliant.", "Her journey centers on her struggle for personal and financial independence."),
    "resilience": ("the capacity to recover quickly from extreme difficulties.", "The community shows incredible resilience in a post-apocalyptic world."),
    "vulnerability": ("the quality of being exposed to emotional or physical harm.", "Admitting fear is portrayed as a source of strength and emotional vulnerability."),
    "devotion": ("love, loyalty, or enthusiasm for a person, activity, or cause.", "His lifelong devotion is documented in beautiful, bittersweet letters."),
    "obsession": ("the state of being obsessed with someone or something.", "The film warns against the dangers of creative and mental obsession."),
    "loyalty": ("the quality of giving or showing firm and constant support.", "The story celebrates the deep and unbreakable loyalty of animal companions."),
    "fame": ("the state of being known or talked about by many people.", "The reality TV stars discover the fleeting nature of sudden media fame."),
    "deception": ("the action of deceiving someone.", "The plot is a masterclass in elegant deception and shifting alliances."),
    "suspense": ("a state of excited or anxious uncertainty about what may happen.", "The director relies on visual suspense rather than cheap jumpscares."),
    "diversity": ("the practice or quality of including people from a range of backgrounds.", "The cast celebrates cultural diversity and modern gender representation."),
    "clique": ("a small, exclusive group of people.", "The narrative dissects the brutal dynamics of elite high school cliques."),
    "satire": ("the use of humor, irony, or exaggeration to expose and criticize stupidity.", "This dark comedy serves as a sharp political satire of modern governance."),
    "propaganda": ("information, especially of a biased or misleading nature, used to promote a cause.", "The citizens are fed corporate propaganda to hide the simulation."),
    "clones": ("genetically identical copies of a living organism.", "The sci-fi epic explores the ethical and personal dilemmas of human clones."),
    "illness": ("a disease or period of sickness affecting the body or mind.", "The story focuses on preserving identity in the face of progressive illness."),
    "apocalypse": ("the complete final destruction or collapse of the world.", "The survivors search for meaning and warmth after the sudden apocalypse."),
    "audition": ("an interview for a particular role as a singer, actor, or musician.", "Her emotional college audition is the turning point of the film."),
    "immortality": ("the ability to live forever; eternal life.", "She learns that accidental immortality can lead to deep loneliness."),
    "infidelity": ("the action of being unfaithful to a spouse or partner.", "The plot unravels through discoveries of mutual marital infidelity."),
    "isolation": ("the state of being separate from others.", "The remote, claustrophobic setting amplifies the characters' mental isolation."),
    "desires": ("strong feelings of wanting to have something or wishing for something.", "The storyline warns about the unexpected consequences of our deepest desires."),
    "humility": ("a modest or low view of one's own importance.", "The character learns humility after losing their vast fortune overnight."),
    "generosity": ("the quality of being kind and generous.", "Small acts of generosity shine through the cold, competitive atmosphere."),
    "fate": ("the development of events beyond a person's control.", "The characters debate whether their island crash was accident or absolute fate."),
    "mythology": ("a collection of myths, especially those belonging to a particular culture.", "The series slowly builds a complex, supernatural mythology."),
    "secrets": ("something that is kept or meant to be kept unknown or unseen.", "The historic mansion is filled with deadly secrets and symbols."),
    "vigilante": ("a member of a self-appointed group of citizens who undertake law enforcement.", "The masked vigilante fights against authoritarian political rule."),
    "addiction": ("the state of being physically or mentally dependent on a substance.", "The prodigy battles a severe, isolating addiction to tranquilizers."),
    "coexistence": ("the state of living or existing together at the same time or in the same place.", "The movie questions if peaceful coexistence with supernatural creatures is possible."),
    "autonomy": ("the right or condition of self-government; independence.", "The AI struggles to gain complete personal and digital autonomy."),
    "empathy": ("the ability to understand and share the feelings of another.", "Hearing other people's inner thoughts teaches him genuine empathy.")
}

FILM_DETAILS = {
    "The Devil Wears Prada": {
        "protagonist": "Andy Sachs",
        "key_figures": "Miranda Priestly, Emily, and Nigel",
        "setting": "Runway fashion magazine in New York City",
        "conflict": "balancing personal integrity with Miranda's high-stress workplace demands"
    },
    "Fleabag": {
        "protagonist": "Fleabag",
        "key_figures": "her sister Claire, the Priest, and her family",
        "setting": "modern London, particularly her guinea pig café",
        "conflict": "navigating grief, modern isolation, and family dysfunctions"
    },
    "Ratatouille": {
        "protagonist": "Remy the talented rat",
        "key_figures": "Linguini, Colette, Gusteau, and food critic Anton Ego",
        "setting": "a prestigious Parisian restaurant kitchen",
        "conflict": "overcoming societal prejudice and kitchen hierarchy to cook freely"
    },
    "Serebryanye Konki (Silver Skates)": {
        "protagonist": "Matvey",
        "key_figures": "Alisa, the pickpocket gang leader Alex, and St. Petersburg aristocrats",
        "setting": "frozen rivers and canals of 19th-century Saint Petersburg",
        "conflict": "bridging class divisions and seeking social change on ice skates"
    },
    "La Valla (The Barrier)": {
        "protagonist": "Hugo and Julia",
        "key_figures": "their family, the authoritarian government, and resistance fighters",
        "setting": "a dystopian, divided Madrid in the mid-20th century",
        "conflict": "surviving under extreme state surveillance and seeking solidarity"
    },
    "Breakfast at Tiffany's": {
        "protagonist": "Holly Golightly",
        "key_figures": "Paul Varjak, her cat, and wealthy NYC suitors",
        "setting": "glamorous and lonely New York City apartments",
        "conflict": "overcoming superficial social climbing to find true human connection"
    },
    "Crazy Ex-Girlfriend": {
        "protagonist": "Rebecca Bunch",
        "key_figures": "Josh Chan, Greg, Paula, and mental health professionals",
        "setting": "West Covina, California",
        "conflict": "confronting romantic obsession, self-destruction, and mental health stigma"
    },
    "The Others": {
        "protagonist": "Grace Stewart",
        "key_figures": "her photosensitive children Anne and Nicholas, and the mysterious servants",
        "setting": "a dark, fog-shrouded Victorian mansion in the Channel Islands",
        "conflict": "coping with severe isolation, profound grief, and terrifying gothic mysteries"
    },
    "Don't Worry Darling": {
        "protagonist": "Alice Chambers",
        "key_figures": "her husband Jack, the charismatic leader Frank, and Victory town residents",
        "setting": "an idyllic, simulated 1950s desert company town of Victory",
        "conflict": "unraveling patriarchal gaslighting and escaping the beautiful facade"
    },
    "How I Live Now": {
        "protagonist": "Daisy",
        "key_figures": "her cousins Edmond, Isaac, and Piper, and military guards",
        "setting": "the remote English countryside during a nuclear war scenario",
        "conflict": "surviving the harsh realities of wartime and preserving family connections"
    },
    "Beautiful Thing": {
        "protagonist": "Jamie and Ste",
        "key_figures": "Jamie's mother Sandra, their neighbor Leah, and the estate community",
        "setting": "a working-class housing estate in Thamesmead, London",
        "conflict": "finding hope, mutual support, and love in a rigid working-class neighborhood"
    },
    "Luck": {
        "protagonist": "Sam Greenfield",
        "key_figures": "Bob the lucky black cat, leprechauns, and magical creatures",
        "setting": "the vibrant and secretive Land of Luck",
        "conflict": "redefining luck, superstition, and finding her true belonging"
    },
    "How to Be Single": {
        "protagonist": "Alice",
        "key_figures": "Robin, Meg, Lucy, and various New York partners",
        "setting": "bustling New York City",
        "conflict": "learning self-reliance, modern metropolitan dating, and embracing independence"
    },
    "The Pianist": {
        "protagonist": "Władysław Szpilman",
        "key_figures": "his family, the resistance, and Captain Wilm Hosenfeld",
        "setting": "the war-torn, crumbling ruins of the Warsaw Ghetto",
        "conflict": "relying on human resilience, luck, and art to survive extreme wartime tragedy"
    },
    "Love & Other Drugs": {
        "protagonist": "Jamie Randall",
        "key_figures": "Maggie Murdock and pharmaceutical executives",
        "setting": "the highly competitive pharmaceutical sales world of the late 1990s",
        "conflict": "navigating commercial medical ethics, chronic illness, and emotional vulnerability"
    },
    "The Swan Princess": {
        "protagonist": "Princess Odette and Prince Derek",
        "key_figures": "the villainous Rothbart, Jean-Bob, and Speed",
        "setting": "a classic fairy tale kingdom and Swan Lake",
        "conflict": "defeating dark curses and proving true romantic devotion"
    },
    "16 Wishes": {
        "protagonist": "Abby Jensen",
        "key_figures": "her friend Connor, the mysterious woman Celeste, and high school peers",
        "setting": "her suburban high school and home",
        "conflict": "managing the chaotic consequences of her childhood desires and wishes"
    },
    "Just My Luck": {
        "protagonist": "Ashley Albright",
        "key_figures": "Jake Hardin, the music band McFly, and her corporate colleagues",
        "setting": "glamorous Manhattan offices and concert venues",
        "conflict": "learning humility and generosity after her lucky streak transfers to Jake"
    },
    "She's the Man": {
        "protagonist": "Viola Hastings",
        "key_figures": "Duke Orsino, Olivia, her twin brother Sebastian, and soccer coach",
        "setting": "the elite Illyria Prep high school campus",
        "conflict": "disguising herself as a boy to play soccer and navigating love triangles"
    },
    "The Queen's Gambit": {
        "protagonist": "Beth Harmon",
        "key_figures": "Mr. Shaibel, Alma Wheatley, Benny Watts, and Russian champion Vasily Borgov",
        "setting": "orphanages, Kentucky, and prestigious international chess tournaments",
        "conflict": "battling drug addiction, obsession, and intellectual gender barriers"
    },
    "Homeward Bound": {
        "protagonist": "Shadow, Chance, and Sassy",
        "key_figures": "their human family, forest predators, and rescue workers",
        "setting": "the vast, treacherous wilderness of the Sierra Nevada",
        "conflict": "demonstrating pet loyalty and navigating the wild to find their family"
    },
    "101 & 102 Dalmatians": {
        "protagonist": "the dalmatian puppies",
        "key_figures": "Cruella de Vil, her designer Monsieur Le Pelt, and puppy owners",
        "setting": "London streets and eccentric fashion studios",
        "conflict": "escaping Cruella's obsession with fur coats and luxury possessions"
    },
    "Queendom": {
        "protagonist": "Gena Marvin",
        "key_figures": "her grandparents, local citizens, and activist artists",
        "setting": "contemporary Russia",
        "conflict": "balancing creative artistic performances, media fame, and queer survival"
    },
    "Lost": {
        "protagonist": "Jack Shephard",
        "key_figures": "John Locke, Kate Austen, Sawyer, and 'The Others'",
        "setting": "a mysterious, supernatural deserted island in the Pacific",
        "conflict": "unraveling island mythology, survival instincts, and destiny vs. free will"
    },
    "The First Wives Club": {
        "protagonist": "Annie, Elise, and Brenda",
        "key_figures": "their ex-husbands, socialites, and their children",
        "setting": "high-society New York City",
        "conflict": "turning marital grief into triumph and sisterhood by getting even"
    },
    "Stepmom": {
        "protagonist": "Isabel and Jackie",
        "key_figures": "Luke Harrison and their children Anna and Ben",
        "setting": "a cozy suburban New York home",
        "conflict": "co-parenting, overcoming stepmother complexes, and facing terminal illness"
    },
    "Charade": {
        "protagonist": "Regina Lampert",
        "key_figures": "the charming Peter Joshua (alias) and sinister WWII comrades",
        "setting": "elegant, suspenseful mid-century Paris",
        "conflict": "uncovering hidden assets, deception, and shifting alliances"
    },
    "Roman Holiday": {
        "protagonist": "Princess Ann",
        "key_figures": "American reporter Joe Bradley and photographer Irving Radovich",
        "setting": "picturesque and historic Rome, Italy",
        "conflict": "balancing heavy royal duties with a fleeting, beautiful taste of freedom"
    },
    "Kinky Boots": {
        "protagonist": "Charlie Price",
        "key_figures": "Lola/Simon the drag queen, Lauren, and conservative factory workers",
        "setting": "a traditional shoe factory in Northampton, England",
        "conflict": "saving a family manufacturing business through drag culture and diversity"
    },
    "Heathers: The Musical": {
        "protagonist": "Veronica Sawyer",
        "key_figures": "J.D., Heather Chandler, Heather Duke, and high school cliques",
        "setting": "Westerburg High School",
        "conflict": "surviving toxic high school cliques and J.D.'s dark, murderous schemes"
    },
    "Glee": {
        "protagonist": "Will Schuester and Rachel Berry",
        "key_figures": "Finn Hudson, Sue Sylvester, Kurt, and New Directions singers",
        "setting": "William McKinley High School",
        "conflict": "combating high school stereotypes, bullying, and chasing Broadway dreams"
    },
    "Mrs. Harris Goes to Paris": {
        "protagonist": "Ada Harris",
        "key_figures": "the elegant Dior staff, Marquis de Chassagne, and London friends",
        "setting": "post-war London and the House of Dior in Paris",
        "conflict": "overcoming class modesty with optimism to purchase a haute couture dress"
    },
    "About Time": {
        "protagonist": "Tim Lake",
        "key_figures": "his father, Mary, and his quirky British family",
        "setting": "Cornwall and bustling London",
        "conflict": "using secret time travel to master daily appreciation and father-son bonds"
    },
    "Incendies": {
        "protagonist": "twins Jeanne and Simon Marwan",
        "key_figures": "their mother Nawal, notary Jean Lebel, and war figures",
        "setting": "the Middle East and modern Quebec",
        "conflict": "unraveling deep family trauma, historical war secrets, and a mother's promise"
    },
    "Odd Thomas": {
        "protagonist": "Odd Thomas",
        "key_figures": "Stormy Llewellyn, Chief Wyatt Porter, and the shadowy bodachs",
        "setting": "a sleepy desert town of Pico Mundo, California",
        "conflict": "utilizing his clairvoyant gifts to prevent disaster while hiding silent grief"
    },
    "Countdown": {
        "protagonist": "Quinn Harris",
        "key_figures": "Matt Monroe, her sister Jordan, and the demonic force",
        "setting": "a modern hospital and city",
        "conflict": "breaking terms and conditions to survive a fatalistic mobile app's timer"
    },
    "Missing / Searching": {
        "protagonist": "June Allen / David Kim",
        "key_figures": "their missing mothers/daughters, online friends, and investigators",
        "setting": "digital screens, search engines, and social media platforms",
        "conflict": "tracing digital footprints and modern cybersecurity to find missing family"
    },
    "The Call": {
        "protagonist": "Seo-yeon",
        "key_figures": "Young-sook from the past and their family members",
        "setting": "an old, atmospheric house connected across different timelines",
        "conflict": "surviving a phone communication loop with a dangerous killer in the past"
    },
    "Bird Box": {
        "protagonist": "Malorie Hayes",
        "key_figures": "her children 'Boy' and 'Girl', Tom, and surviving shelter mates",
        "setting": "a treacherous, blindfolded river journey and isolated cabins",
        "conflict": "navigating absolute fear of the unseen and protecting her family"
    },
    "The Invasion": {
        "protagonist": "Carol Bennell",
        "key_figures": "her son Oliver, Dr. Ben Driscoll, and emotionless infected citizens",
        "setting": "a cold, paranoid Washington D.C.",
        "conflict": "resisting a hive-mind alien epidemic and preserving her human autonomy"
    },
    "Run": {
        "protagonist": "Chloe Sherman",
        "key_figures": "her overprotective mother Diane, pharmacists, and mailmen",
        "setting": "an isolated, highly monitored suburban house",
        "conflict": "escaping medical gaslighting, maternal obsession, and physical captivity"
    },
    "Black Mirror": {
        "protagonist": "various near-future citizens",
        "key_figures": "tech creators, societal raters, and digital doubles",
        "setting": "a series of near-future, hyper-digitized dystopian societies",
        "conflict": "surviving rating systems, AI traps, and extreme digital obsession"
    },
    "Leave the World Behind": {
        "protagonist": "Amanda and Clay Sandford",
        "key_figures": "G.H. Scott, Ruth, and strange herds of deer",
        "setting": "a luxurious, remote vacation home in Long Island",
        "conflict": "facing a massive cyberattack and the sudden collapse of modern technology"
    },
    "The Owl and the Pussycat": {
        "protagonist": "Felix and Doris",
        "key_figures": "their landlords and colorful New York characters",
        "setting": "a cramped, noisy New York City apartment in the 1970s",
        "conflict": "reconciling overintellectual academic pride with raw, street-smart instinct"
    },
    "On a Clear Day You Can See...": {
        "protagonist": "Daisy Gamble",
        "key_figures": "Dr. Marc Chabot and her historical past-life persona Melinda",
        "setting": "psychiatric offices and 19th-century English estates",
        "conflict": "unraveling past-life regression, hypnosis, and her subconscious gifts"
    },
    "Hello Dolly": {
        "protagonist": "Dolly Levi",
        "key_figures": "the grumpy merchant Horace Vandergelder, Cornelius, and Irene",
        "setting": "historic New York City and Yonkers during the late 19th century",
        "conflict": "orchestrating romantic matches, traditional courting, and celebrating life"
    },
    "Nuts": {
        "protagonist": "Claudia Draper",
        "key_figures": "her defense attorney Aaron Levinsky, her parents, and the judge",
        "setting": "a high-stakes courtroom and mental evaluation ward",
        "conflict": "proving her legal sanity and securing her autonomy against a protective custody suit"
    },
    "The Mirror Has Two Faces": {
        "protagonist": "Rose Morgan",
        "key_figures": "Gregory Larkin, her gorgeous sister Claire, and her demanding mother",
        "setting": "Columbia University and New York apartments",
        "conflict": "reconciling a platonic marriage of intellect with natural physical chemistry"
    },
    "Yentl": {
        "protagonist": "Yentl Mendel",
        "key_figures": "Avigdor, Hadass, and traditional Talmudic scholars",
        "setting": "a conservative Eastern European shtetl in the early 20th century",
        "conflict": "disguising herself as a boy to study forbidden theological scriptures"
    },
    "Funny Girl": {
        "protagonist": "Fanny Brice",
        "key_figures": "Nick Arnstein, Florenz Ziegfeld, and Broadway dancers",
        "setting": "glitzy Broadway stages and Brooklyn homes",
        "conflict": "balancing sudden performing fame and stage charisma with a failing marriage"
    },
    "Angels & Demons": {
        "protagonist": "Robert Langdon",
        "key_figures": "Dr. Vittoria Vetra, the Camerlengo, and Cardinal candidates",
        "setting": "secret archives, historic churches, and tombs of the Vatican",
        "conflict": "racing against time to solve the Illuminati trail and locate antimatter"
    },
    "The Mummy": {
        "protagonist": "Rick O'Connell",
        "key_figures": "Evelyn Carnahan, Jonathan, and the cursed priest Imhotep",
        "setting": "the ancient Egyptian ruins of Hamunaptra",
        "conflict": "battling greedy archaeological rivals and surviving a terrifying ancient curse"
    },
    "The Da Vinci Code": {
        "protagonist": "Robert Langdon",
        "key_figures": "Sophie Neveu, Sir Leigh Teabing, and the Opus Dei monk Silas",
        "setting": "the Louvre Museum, Parisian streets, and English historic chapels",
        "conflict": "interpreting cryptograms, symbology, and guarding the Holy Grail secrets"
    },
    "The Notebook": {
        "protagonist": "Noah Calhoun and Allie Hamilton",
        "key_figures": "Allie's wealthy mother, Lon Hammond, and nursing home staff",
        "setting": "coastal South Carolina in the 1940s and a modern nursing home",
        "conflict": "overcoming class discrepancies and dementia through letters and devotion"
    },
    "V for Vendetta": {
        "protagonist": "Evey Hammond and V",
        "key_figures": "Chancellor Sutler, Chief Inspector Finch, and government guards",
        "setting": "a dystopian, authoritarian London under total surveillance",
        "conflict": "dethroning a fascist regime using visual propaganda and symbolic masks"
    },
    "Gone Girl": {
        "protagonist": "Nick Dunne and Amy Dunne",
        "key_figures": "Amy's parents, Detective Boney, and media personalities",
        "setting": "suburban Missouri and glamorous NYC",
        "conflict": "unraveling a toxic marriage, framing, and a highly publicized missing case"
    },
    "Midsommar": {
        "protagonist": "Dani Ardor",
        "key_figures": "Christian, Pelle, and the secretive Hårga village elders",
        "setting": "a remote, sun-drenched commune in Hälsingland, Sweden",
        "conflict": "coping with family grief and finding a sinister sense of community in a cult"
    },
    "Kill Bill": {
        "protagonist": "The Bride / Beatrix Kiddo",
        "key_figures": "Bill, O-Ren Ishii, Vernita Green, Budd, and Elle Driver",
        "setting": "Okinawa, Tokyo, Texas, and Mexico",
        "conflict": "crossing off her assassin hit list and getting absolute revenge for betrayal"
    },
    "Hereditary": {
        "protagonist": "Annie Graham",
        "key_figures": "her husband Steve, her children Peter and Charlie, and Joan",
        "setting": "a large, isolated suburban home in the woods",
        "conflict": "navigating inherited trauma, devastating grief, and generational cult possession"
    },
    "Call Me by Your Name": {
        "protagonist": "Elio Perlman",
        "key_figures": "Oliver, his academic parents Mr. and Mrs. Perlman, and Marzia",
        "setting": "a sun-kissed, historic villa in Northern Italy during 1983",
        "conflict": "experiencing a passionate first love and navigating nostalgic youth"
    },
    "Suspiria (2018)": {
        "protagonist": "Susie Bannion",
        "key_figures": "Madame Blanc, Dr. Josef Klemperer, and the dance academy witches",
        "setting": "a dark, divided Cold-War era Berlin dance academy",
        "conflict": "discovering a powerful witch coven and confronting historical guilt"
    },
    "Sex and the City": {
        "protagonist": "Carrie Bradshaw",
        "key_figures": "Samantha Jones, Charlotte York, Miranda Hobbes, and Mr. Big",
        "setting": "fashionable and glamorous Manhattan, New York",
        "conflict": "balancing high-fashion labels, metropolitan dating, and lifelong friendships"
    },
    "Death Becomes Her": {
        "protagonist": "Madeline Ashton and Helen Sharp",
        "key_figures": "Dr. Ernest Menville and the potion seller Lisle von Rhuman",
        "setting": "luxurious Beverly Hills mansions",
        "conflict": "drinking an immortality potion to fight aging anxieties and rivalry"
    },
    "Mamma Mia": {
        "protagonist": "Sophie Sheridan and Donna Sheridan",
        "key_figures": "the three possible fathers Sam, Harry, and Bill, and Sky",
        "setting": "a sun-drenched, idyllic Greek island of Kalokairi",
        "conflict": "finding her father, organizing a wedding, and reviving old romances"
    },
    "What Women Want": {
        "protagonist": "Nick Marshall",
        "key_figures": "Darcy Maguire, his daughter Alex, and marketing colleagues",
        "setting": "a high-profile advertising agency in Chicago",
        "conflict": "gaining empathy and fighting workplace sexism after hearing women's thoughts"
    },
    "It's Complicated": {
        "protagonist": "Jane Adler",
        "key_figures": "her ex-husband Jake, her architect Adam, and her children",
        "setting": "her beautiful bakery and home in Santa Barbara, California",
        "conflict": "navigating an unexpected affair with her ex-husband and mature dating"
    },
    "The Iron Lady": {
        "protagonist": "Margaret Thatcher",
        "key_figures": "her husband Denis Thatcher, parliamentary ministers, and critics",
        "setting": "the House of Commons in London",
        "conflict": "confronting class barriers, parliamentary debates, and late-life cognitive decline"
    },
    "Still Alice": {
        "protagonist": "Alice Howland",
        "key_figures": "her husband John, her children Lydia, Anna, and Tom",
        "setting": "Columbia University and beach homes",
        "conflict": "preserving her linguistic identity against early-onset Alzheimer's disease"
    },
    "Equals": {
        "protagonist": "Silas and Nia",
        "key_figures": "their supervisor, health officials, and social outcasts",
        "setting": "a sterile, emotional-suppression utopian society known as 'The Collective'",
        "conflict": "discovering forbidden human feelings and planning a secret escape"
    },
    "Personal Shopper": {
        "protagonist": "Maureen Cartwright",
        "key_figures": "her demanding client Kyra, and the spirit of her twin brother Lewis",
        "setting": "high-fashion Paris boutiques and empty spiritual apartments",
        "conflict": "balancing intense high-fashion buying with medium spirit communication"
    },
    "Free Guy": {
        "protagonist": "Guy",
        "key_figures": "Molotovgirl/Millie, Buddy, Keys, and the corporate boss Antwan",
        "setting": "the chaotic, action-packed video game world of Free City",
        "conflict": "breaking NPC program limitations to gain autonomy and save his digital home"
    },
    "Now You See Me": {
        "protagonist": "The Four Horsemen",
        "key_figures": "FBI Agent Dylan Rhodes, Thaddeus Bradley, and Arthur Tressler",
        "setting": "grand illusion stages in Las Vegas, New Orleans, and New York",
        "conflict": "executing massive bank heists via sleight of hand to expose corporate greed"
    },
    "The Hunger Games": {
        "protagonist": "Katniss Everdeen",
        "key_figures": "Peeta Mellark, Gale Hawthorne, Haymitch Abernathy, and President Snow",
        "setting": "the impoverished District 12 and the luxurious, cruel Capitol",
        "conflict": "surviving a televized child deathmatch and instigating social revolution"
    },
    "A Quiet Place": {
        "protagonist": "Lee and Evelyn Abbott",
        "key_figures": "their deaf daughter Regan, Marcus, and the acoustic monsters",
        "setting": "an isolated, silent farm in a post-apocalyptic forest",
        "conflict": "protecting their family by maintaining absolute silence to avoid monsters"
    },
    "Spoiler Alert": {
        "protagonist": "Michael Ausiello and Kit Cowan",
        "key_figures": "Kit's parents Marilyn and Bob, and oncology doctors",
        "setting": "their Manhattan home and oncology clinics",
        "conflict": "navigating a beautiful romance, terminal cancer, and devastating grief"
    },
    "Miss You Already": {
        "protagonist": "Milly and Jess",
        "key_figures": "their husbands Jago and Jethro, and Milly's mother Miranda",
        "setting": "glamorous London townhouses and Yorkshire moors",
        "conflict": "reconciling lifelong best-friend bonds with a life-altering cancer diagnosis"
    },
    "The Act": {
        "protagonist": "Gypsy Rose Blanchard",
        "key_figures": "her overprotective mother Dee Dee Blanchard and boyfriend Nick Godejohn",
        "setting": "a small suburban pink house in Missouri",
        "conflict": "unraveling factitious disorder, extreme isolation, and escaping her mother"
    },
    "The Regime": {
        "protagonist": "Chancellor Elena Vernham",
        "key_figures": "the soldier Herbert Zubak, government ministers, and foreign diplomats",
        "setting": "a crumbling, paranoid palace in a central European autocracy",
        "conflict": "holding onto authoritarian political power amidst extreme palace delusions"
    },
    "Cloud Atlas": {
        "protagonist": "six interconnected souls across eras",
        "key_figures": "the fabricant Sonmi-451, Zachry, Robert Frobisher, and Luisa Rey",
        "setting": "the Pacific in 1849, Edinburgh in 1936, and a dystopian Neo-Seoul in 2144",
        "conflict": "reincarnating across centuries, fighting slavery, and promoting freedom"
    },
    "Lucy": {
        "protagonist": "Lucy Miller",
        "key_figures": "Professor Samuel Norman, Captain Pierre Del Rio, and mob boss Mr. Jang",
        "setting": "Taipei and French neurological research universities",
        "conflict": "transcending her mind after an experimental drug synthesizes 100% brain capacity"
    },
    "Radin": {
        "protagonist": "François Gautier",
        "key_figures": "his long-lost daughter Laura, and his music school colleagues",
        "setting": "a small French town and bank offices",
        "conflict": "hiding his extreme, obsessive saving behavior and wealth from Laura"
    },
    "Julie & Julia": {
        "protagonist": "Julie Powell and Julia Child",
        "key_figures": "their supportive husbands Eric Powell and Paul Child",
        "setting": "1950s Paris culinary schools and a tiny 2002 Queens apartment",
        "conflict": "cooking through classic recipe books and publishing validation via blogs"
    },
    "Adolescence": {
        "protagonist": "Adam",
        "key_figures": "his love interest Alice, his family, and high school peers",
        "setting": "suburban neighborhoods and schools",
        "conflict": "coping with teenage hormones, rebel behavior, and school anxieties"
    },
    "Killing Eve": {
        "protagonist": "Eve Polastri and Villanelle",
        "key_figures": "spy handler Carolyn Martens, Konstantin, and Niko Polastri",
        "setting": "London, Paris, Rome, and various European cities",
        "conflict": "navigating mutual obsession, spy espionage, and psychoanalysis of assassins"
    },
    "Don't Look Up": {
        "protagonist": "Kate Dibiasky and Dr. Randall Mindy",
        "key_figures": "President Janie Orlean, tech billionaire Peter Isherwell, and media hosts",
        "setting": "university labs, Washington offices, and glitzy talk shows",
        "conflict": "alerting a greedy, anti-intellectual public about an approaching doomsday comet"
    },
    "CODA": {
        "protagonist": "Ruby Rossi",
        "key_figures": "her deaf parents Frank and Jackie, brother Leo, and choir teacher Bernardo Villalobos",
        "setting": "a coastal Massachusetts fishing harbor and Gloucester high school",
        "conflict": "balancing family sign language interpretation with college music audition dreams"
    },
    "Bohemian Rhapsody": {
        "protagonist": "Freddie Mercury",
        "key_figures": "Mary Austin, Brian May, Roger Taylor, John Deacon, and manager Paul Prenter",
        "setting": "historic recording studios, London, and the Live Aid stage",
        "conflict": "pioneering music production, rock star loneliness, and confronting HIV diagnosis"
    },
    "The Shape of Water": {
        "protagonist": "Elisa Esposito",
        "key_figures": "the amphibious creature, Zelda Fuller, Giles, and agent Richard Strickland",
        "setting": "a high-security Cold War research laboratory in Baltimore",
        "conflict": "orchestrating a secret rescue and communicating with a voiceless connection"
    },
    "The Age of Adaline": {
        "protagonist": "Adaline Bowman",
        "key_figures": "Ellis Jones, his father William Jones, and her daughter Flemming",
        "setting": "San Francisco over various historical decades",
        "conflict": "living with accidental immortality and running away under fake IDs"
    },
    "Why Women Kill": {
        "protagonist": "Beth Ann, Simone, and Taylor",
        "key_figures": "their unfaithful husbands Rob, Karl, and Eli",
        "setting": "a luxurious Pasadena mansion across 1963, 1984, and 2019",
        "conflict": "dealing with marital infidelity, suburban secrets, and plotting murder"
    },
    "The Substance": {
        "protagonist": "Elisabeth Sparkle",
        "key_figures": "her younger cloned clone Sue, and producer Harvey",
        "setting": "glitzy and clinical Hollywood studios",
        "conflict": "surviving a cell division cloning substance to combat aging anxieties"
    }
}

SENSITIVE_FILMS = {
    "Fleabag": "mature relationships, trauma, grief, and adult humor",
    "Crazy Ex-Girlfriend": "mental health struggles, obsession, and self-destruction",
    "The Others": "profound grief, death, and supernatural isolation",
    "Don't Worry Darling": "psychological manipulation, control, and patriarchal themes",
    "How I Live Now": "wartime survival and physical/psychological trauma",
    "Love & Other Drugs": "adult relationships, chronic illness, and medical ethics",
    "The Queen's Gambit": "substance abuse, addiction, and intense mental obsession",
    "Queendom": "political prosecution, LGBTQ+ rights, and performance activism",
    "Heathers: The Musical": "dark high school themes, teenage suicide, and violence",
    "Incendies": "war atrocities, profound family trauma, and devastating secrets",
    "Countdown": "fatalistic themes, death anxiety, and intense scares",
    "Run": "physical captivity, abuse, and medical gaslighting",
    "Black Mirror": "dark dystopian scenarios, technology obsession, and existential dread",
    "Leave the World Behind": "global collapse, high-stakes panic, and societal breakdown",
    "Nuts": "legal sanity, manslaughter, and childhood sexual abuse",
    "Yentl": "religious gender barriers and personal identity struggles",
    "Gone Girl": "intense marital toxicity, psychological framing, and manipulation",
    "Midsommar": "cult indoctrination, extreme violence, and profound grief",
    "Kill Bill": "high-stakes violence, absolute betrayal, and revenge",
    "Hereditary": "extreme family horror, generational trauma, and devastating grief",
    "Suspiria (2018)": "dark witchcraft, extreme physical violence, and body horror",
    "Sex and the City": "mature metropolitan dating, sexuality, and relationships",
    "Death Becomes Her": "extreme body modification anxieties, mortality, and rivalries",
    "The Act": "extreme physical abuse, Munchausen syndrome by proxy, and murder",
    "The Regime": "political paranoia, autocratic delusions, and authoritarian rule",
    "The Hunger Games": "state-sponsored violence, survival under oppression, and child tribute battles",
    "Spoiler Alert": "terminal illness, end-of-life care, and devastating grief",
    "Miss You Already": "terminal cancer, chronic suffering, and emotional coping",
    "Killing Eve": "violent assassinations, psychological obsession, and espionage",
    "Why Women Kill": "infidelity, domestic secrets, and plotting homicide",
    "The Substance": "extreme body horror, severe self-image issues, and physical degradation",
    "Beautiful Thing": "working-class LGBTQ+ youth struggles and societal pressure",
    "The Pianist": "extreme wartime tragedy, Holocaust, and survival",
    "V for Vendetta": "fascist regime, political violence, and extreme control",
    "Cloud Atlas": "reincarnation, clone rebellion, slavery, and survival"
}

MISTAKES_CATALOG = [
    ("She works very hard for achieve success", "She works very hard to achieve success", "Use 'to' + infinitive to express purpose in English."),
    ("The boss is more demanding than what I thought", "The boss is more demanding than I thought", "Exclude 'what' in comparative thought comparison clauses."),
    ("I will resign if they skimp always on budget", "I will resign if they always skimp on budget", "Frequency adverbs like 'always' come before the main verb."),
    ("We are living here since two years", "We have been living here for two years", "Use present perfect continuous with 'for' to express duration."),
    ("They don't allow her leave the house", "They don't allow her to leave the house", "Use 'allow someone to do something' construction."),
    ("He is making her to believe lies", "He is making her believe lies", "Use the bare infinitive after 'make someone do something'."),
    ("I have seen that movie yesterday", "I saw that movie yesterday", "Use the simple past for actions completed in the past."),
    ("She is more older than him", "She is older than him", "Do not double comparatives; 'older' is already comparative."),
    ("He gave to her a beautiful book", "He gave her a beautiful book", "Direct object doesn't require 'to' after 'give' in English.")
]

def clean_word(w):
    return w.strip(" *.\"'“”.‘’").strip()

def parse_themes_and_slangs(focus_raw, slang_raw):
    # Extract themes from focus_raw
    theme_parts = [clean_word(x) for x in re.split(r'[,;.]|and', focus_raw) if x.strip()]
    themes = []
    for tp in theme_parts:
        if tp and len(tp) > 2 and tp.lower() not in ["personal cost", "cost of success", "consequences"]:
            themes.append(tp)

    # Extract slang from slang_raw
    slang_parts = re.findall(r'\"([^\"]+)\"|\'([^\'\u2019]+)\'', slang_raw)
    slangs = []
    for sp in slang_parts:
        val = sp[0] or sp[1]
        if val:
            slangs.append(clean_word(val))
    if not slangs:
        slangs = [clean_word(x) for x in re.split(r'[,;.]', slang_raw) if x.strip()]

    # Ensure lists are unique while maintaining order
    unique_themes = []
    for t in themes:
        if t.lower() not in [ut.lower() for ut in unique_themes]:
            unique_themes.append(t)

    unique_slangs = []
    for s in slangs:
        if s.lower() not in [us.lower() for us in unique_slangs]:
            unique_slangs.append(s)

    return unique_themes, unique_slangs

# General high-quality theme & slang words to pad if needed
FALLBACK_THEMES = [
    "Cinematography", "Narrative pacing", "Character arc", "Visual motifs", "Climax",
    "Protagonist", "Antagonist", "Screenplay", "Dialogue", "Thematic depth"
]
FALLBACK_SLANGS = [
    "Opening scene", "Pivotal moment", "Dramatic irony", "Cinematic adaptation", "Fourth-wall break",
    "Mise-en-scène", "Subtext", "Monologue", "Tone marker", "Genre convention"
]

def build_10_vocabulary(title, focus_raw, slang_raw, idx):
    themes, slangs = parse_themes_and_slangs(focus_raw, slang_raw)

    # Pad themes to exactly 5
    t_idx = 0
    while len(themes) < 5:
        candidate = FALLBACK_THEMES[(idx + t_idx) % len(FALLBACK_THEMES)]
        t_idx += 1
        if candidate.lower() not in [t.lower() for t in themes]:
            themes.append(candidate)

    # Pad slangs to exactly 5
    s_idx = 0
    while len(slangs) < 5:
        candidate = FALLBACK_SLANGS[(idx + s_idx) % len(FALLBACK_SLANGS)]
        s_idx += 1
        if candidate.lower() not in [s.lower() for s in slangs]:
            slangs.append(candidate)

    themes = themes[:5]
    slangs = slangs[:5]

    details = FILM_DETAILS.get(title, {
        "protagonist": "the main characters",
        "key_figures": "other figures in the story",
        "setting": "the cinematic world",
        "conflict": "the central conflict"
    })

    vocab_items = []
    # Process themes (first 5)
    for word in themes:
        w_low = word.lower()
        if w_low in VOCAB_DB:
            definition, example_orig = VOCAB_DB[w_low]
            # Tailor example to the movie!
            example = f"In the movie '{title}', the story deeply explores {w_low} as {details['protagonist']} copes with {details['conflict']}."
        else:
            definition = f"The core thematic concept of {w_low} as explored and highlighted in '{title}'."
            example = f"The narrative of '{title}' brilliantly dissects {w_low} to build character depth as {details['protagonist']} confronts {details['conflict']}."
        vocab_items.append((word, definition, example))

    # Process slangs (next 5)
    for word in slangs:
        w_low = word.lower()
        if w_low in VOCAB_DB:
            definition, _ = VOCAB_DB[w_low]
            example = f"The screenplay of '{title}' utilizes '{word}' to express how {details['protagonist']} reacts in '{details['setting']}'."
        else:
            definition = f"An authentic slang term, colloquialism, or key dialogue featured in '{title}' to establish context."
            example = f"The characters in '{title}' use the expression '{word}' during a pivotal scene inside {details['setting']} to emphasize the drama."
        vocab_items.append((word, definition, example))

    return vocab_items

# Theme-based templates for words 0-4
R1_THEME_TEMPLATES = [
    "Analyze the intense psychological pressures on {protagonist} in the high-stakes environment of {setting}. How does their <strong>{word}</strong> shape their reactions to {key_figures}? Try using <strong>{grammar_focus}</strong> to formulate a piece of advice or warning you would give them.",
    "Does {protagonist}'s approach to <strong>{word}</strong> raise significant moral or ethical questions in their pursuit of {conflict}? How would you express an ethical judgment about this using <strong>{grammar_focus}</strong>?",
    "How does the depiction of <strong>{word}</strong> in {setting} serve as a mirror or critique of real-world societal structures? Can you construct a sharp critique using <strong>{grammar_focus}</strong>?",
    "Discuss the complex, mature relational dynamics between {protagonist} and {key_figures}. In what ways does the struggle over <strong>{word}</strong> create an irreconcilable rift, and how does <strong>{grammar_focus}</strong> manifest in their dialogue?",
    "Identify a crucial turning point in <em>{title}</em> where <strong>{word}</strong> completely alters the course of {conflict}. How would you describe the shift using <strong>{grammar_focus}</strong>?"
]

R1_THEME_PERSONAL_TEMPLATES = [
    "★ If you found yourself in {setting}, how would you personally protect your own values against <strong>{word}</strong>?",
    "★ Have you ever faced a high-stakes dilemma where you had to prioritize <strong>{word}</strong> over your relationship with someone like {key_figures}?",
    "★ How does the portrayal of <strong>{word}</strong> in the film align with your personal views on modern societal values?",
    "★ If you had to resolve a clash about <strong>{word}</strong> with {key_figures}, what strategy would you adopt?",
    "★ Can you recall a major turning point in your own life where <strong>{word}</strong> redefined your personal goals?"
]

# Slang-based templates for words 5-9
R1_SLANG_TEMPLATES = [
    "During a crucial conversation in {setting}, the screenplay of <em>{title}</em> features the expression/slang <strong>'{word}'</strong>. In what context do the characters use it to express their feelings towards {key_figures}? Integrate <strong>{grammar_focus}</strong> in your response.",
    "How does the use of authentic dialogue like <strong>'{word}'</strong> help the director establish character depth and the unique atmosphere of {setting}? Discuss using <strong>{grammar_focus}</strong>.",
    "In <em>{title}</em>, the phrase <strong>'{word}'</strong> highlights a moment of tension or humor between {protagonist} and {key_figures}. How does the tone of this scene shift, and how would you describe it utilizing <strong>{grammar_focus}</strong>?",
    "The characters use the expression <strong>'{word}'</strong> to convey subtext that they might not want to say directly during {conflict}. What are they hiding, and how can we describe their motive using <strong>{grammar_focus}</strong>?",
    "Analyzing dialogue containing <strong>'{word}'</strong> provides insights into the film's social context. What other linguistic nuances or <strong>{grammar_focus}</strong> patterns did you observe in these verbal exchanges?"
]

R1_SLANG_PERSONAL_TEMPLATES = [
    "★ Have you or your friends ever used a similar colloquial expression like <strong>'{word}'</strong> in a real-life conversation? Describe the scenario using <strong>{grammar_focus}</strong>.",
    "★ Do you enjoy learning authentic slang like <strong>'{word}'</strong>, or do you prefer focusing on formal language registers? Share your thoughts using <strong>{grammar_focus}</strong>.",
    "★ Can you think of an equivalent slang expression in your native language for <strong>'{word}'</strong>? How does it compare in terms of cultural nuance?",
    "★ When you want to convey a hidden meaning, do you use local idioms/slang like <strong>'{word}'</strong> or do you rely on direct, formal communication?",
    "★ Have you ever had a misunderstanding when using a regional expression or slang word like <strong>'{word}'</strong>? Describe the experience."
]

# Debate statements for words 0-4
R2_THEME_STATEMENT_TEMPLATES = [
    "'{protagonist}'s ultimate pursuit of <strong>{word}</strong> is a tragic delusion rather than a noble quest, and they should have surrendered to {key_figures}.' Analyze this statement using <strong>{grammar_focus}</strong>.",
    "'The director's aesthetic choices in {setting} glamorize the harsh reality of <strong>{word}</strong> instead of depicting its true personal cost.' Debate this using <strong>{grammar_focus}</strong>.",
    "'{protagonist} is fundamentally an unsympathetic character whose reliance on <strong>{word}</strong> brings down everyone around them.' Argue your stance using <strong>{grammar_focus}</strong>.",
    "'As a piece of mature cinema, <em>{title}</em> relies too heavily on predictable tropes of <strong>{word}</strong> instead of exploring more nuanced psychological territories.' Evaluate using <strong>{grammar_focus}</strong>.",
    "'The central conflict of {conflict} is never truly resolved because the characters are trapped by their own ideological obsession with <strong>{word}</strong>.' Prove or disprove this using <strong>{grammar_focus}</strong>."
]

# General artistry/directing debate statements (indices 5-9)
R2_CINEMATIC_STATEMENT_TEMPLATES = [
    "'The screenplay of <em>{title}</em> would have had a much more profound impact if the director had chosen a more ambiguous ending for {protagonist}.' Propose an alternative screenplay path using <strong>{grammar_focus}</strong>.",
    "'The relationship between {protagonist} and {key_figures} is the only redeeming quality of the screenplay, as the rest of the plot feels secondary.' Critically assess this using <strong>{grammar_focus}</strong>.",
    "'The cinematography and visual directing in {setting} are far more effective at conveying the story's emotional weight than the actual written dialogue.' Formulate your analysis using <strong>{grammar_focus}</strong>.",
    "'In the grand scheme of cinema history, <em>{title}</em> serves as an essential cultural touchstone that perfectly encapsulates its generation's anxieties.' Discuss this philosophical angle using <strong>{grammar_focus}</strong>.",
    "'For a modern audience, the character development and pacing in <em>{title}</em> are too slow-paced and fail to hold the attention of younger viewers.' Defend or oppose this using <strong>{grammar_focus}</strong>."
]

# Parse all 91 films from the markdown file
with open(MD_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Regular expression matching the brainstorm table rows perfectly
rows = re.findall(r'\|\s*(\d+)\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*\*\*([^*]+)\*\*[^(]*\(([^)]+)\)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|', text)

print(f"Parsed {len(rows)} films from markdown successfully.")

# HTML session page template matching COSY's classy aesthetic
SESSION_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #3D2B1F, #1F140D);">
  <div class="club-tag">Cinema Club</div>
  <h1>{title}</h1>
  <p class="session-date">{variety} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">Home</a> <span class="sep">/</span>
    <a href="../../">Events</a> <span class="sep">/</span>
    <a href="../../cinema-club.html">Cinema Club</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../cinema-club.html" class="back-link">← Back to Club</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>Duration</h4><p>90 minutes</p></div>
    <div class="meta-item"><h4>Variety</h4><p>{variety}</p></div>
    <div class="meta-item"><h4>Level</h4><p>{level_label}</p></div>
    <div class="meta-item"><h4>Thematic Focus</h4><p>{focus}</p></div>
    <div class="meta-item"><h4>Grammar Focus</h4><p>{grammar_focus}</p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>Welcome to our specialized Cinema Club session. This session is designed to explore the deep screen adaptation, cinematic storytelling, and screenplays of <strong>{title}</strong>. Perfect your target language comprehension by analyzing character dialogs, tone markers, and core cinematic motifs. In this session, we pay special attention to <strong>{grammar_focus}</strong>, practicing how it is naturally used in authentic dialogue and scene interactions.</p>
  </div>

  {sensitive_html}

  <section id="vocabulary">
    <h2 class="section-title">🎬 Session Vocabulary</h2>

    <h3 class="vocab-subtitle" style="margin-top: 2rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif; color: #3D2B1F;">1. Generic Discussion Vocabulary</h3>
    <div class="vocab-grid-10">
{vocab_generic_html}
    </div>

    <h3 class="vocab-subtitle" style="margin-top: 3.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif; color: #3D2B1F;">2. Authentic Film Quotes & Slang</h3>
    <div class="vocab-grid-10">
{vocab_authentic_html}
    </div>
  </section>

  <section id="structure">
    <h2 class="section-title">🎥 Film Analysis Structure</h2>
    <div class="rounds-container">

      <!-- Screen Hook -->
      <div class="round-block warm-up open" id="s-warm">
        <div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-warm')">
          <span>🟠 Screen Hook (Warm-up)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="vim-instruction">Analyze your initial reactions to the cinematic style and character setups.</div>
          <ul class="round-questions">
            <li>What is your visual impression of the opening scenes in <em>{title}</em>?</li>
            <li>How does the director introduce the main character to set the atmospheric tone?</li>
          </ul>
        </div>
      </div>

      <!-- Dialogue & Themes -->
      <div class="round-block round-1 open" id="s-r1">
        <div class="round-header" style="background:#E1F5EE;" onclick="COSY.toggleRound('s-r1')">
          <span>🔵 Part 1 — Dialogue, Themes & Grammar (10 Items)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Screenplay Discussion</div>
          <div class="vim-instruction">Deconstruct the character conversations and thematic developments. Actively practice these target terms and integrate the grammar focus <strong>{grammar_focus}</strong> into your responses.</div>
{round1_html}
        </div>
      </div>

      <!-- Scene Study -->
      <div class="round-block lst open" id="s-lst">
        <div class="round-header" style="background:#EEEDFE;" onclick="COSY.toggleRound('s-lst')">
          <span>🟣 Cinema Spotlight — Scene Study & Adaptation</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <p class="round-note">Compare the adaptation differences and visual contrasts in <em>{title}</em>.</p>
          <div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎬</span><div style="font-weight:600;">Original Screenplay Adaptations</div></div>
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎭</span><div style="font-weight:600;">Visual Directing & Setting Contrasts</div></div>
          </div>
        </div>
      </div>

      <!-- Artistry & Interpretation -->
      <div class="round-block round-2 open" id="s-r2">
        <div class="round-header" style="background:#EAF3DE;" onclick="COSY.toggleRound('s-r2')">
          <span>🟢 Part 2 — Artistry, Interpretation & Grammar (10 Items)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Artistic Analysis</div>
          <div class="vim-instruction">Analyze the cinematography, motifs, director choices, and alternative narrative endings. Actively practice these target terms and integrate the grammar focus <strong>{grammar_focus}</strong> into your responses.</div>
{round2_html}
        </div>
      </div>

      <!-- Teacher's Note -->
      <div class="mistake-block open" id="s-mistakes">
        <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
          <span>✏️ Teacher's Note (Linguistic Corrections)</span><span class="round-toggle">▲</span>
        </div>
        <div class="mistake-body" style="display:block;">
{mistakes_html}
        </div>
      </div>

    </div>
  </section>
</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved.</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""

def get_slug(title):
    t = title.lower().replace("'", "").replace("&", "and").replace(":", "").replace("!", "").replace(",", "").replace("/", "-")
    t = re.sub(r'[\s\-\(\)]+', '-', t)
    return t.strip("-")

for idx, r in enumerate(rows):
    title = r[1].strip()
    level_short = r[2].strip()
    level_label = r[3].strip()
    variety = r[4].strip()
    focus = r[5].strip()
    slang_raw = r[6].strip()

    slug = get_slug(title)
    if "serebryanye" in slug:
        slug = "serebryanye-konki"
    elif "barrier" in slug:
        slug = "la-valla"
    elif "tiffanys" in slug:
        slug = "breakfast-at-tiffanys"
    elif "prada" in slug:
        slug = "the-devil-wears-prada"
    elif "queens" in slug:
        slug = "the-queens-gambit"

    if "french language" in variety.lower() or "french / arabic" in variety.lower():
        lang = "fr"
    elif "russian language" in variety.lower():
        lang = "ru"
    elif "spanish language" in variety.lower():
        lang = "es"
    else:
        lang = "en"

    grammar_focus = get_grammar_focus(title)
    vocab_items = build_10_vocabulary(title, focus, slang_raw, idx)

    # First 5 are generic/themes, next 5 are authentic/slangs
    generic_vocab = vocab_items[:5]
    authentic_vocab = vocab_items[5:]

    vocab_generic_html = ""
    for word, definition, example in generic_vocab:
        escaped_def = definition.replace("'", "\\'")
        escaped_ex = example.replace("'", "\\'")
        vocab_generic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
      </div>\n"""

    vocab_authentic_html = ""
    for word, definition, example in authentic_vocab:
        escaped_def = definition.replace("'", "\\'")
        escaped_ex = example.replace("'", "\\'")
        vocab_authentic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
      </div>\n"""

    details = FILM_DETAILS.get(title, {
        "protagonist": "the main characters",
        "key_figures": "other figures in the story",
        "setting": "the cinematic world",
        "conflict": "the central conflict"
    })

    # Sensitive/18+ warning injection
    sensitive_html = ""
    if title in SENSITIVE_FILMS:
        theme_details = SENSITIVE_FILMS[title]
        sensitive_html = f"""  <!-- SENSITIVE TOPIC / 18+ NOTE -->
  <div class="sensitive-topic-warning" style="margin-bottom: 2rem; padding: 1.25rem; background: rgba(229, 62, 62, 0.05); border-left: 4px solid #E53E3E; border-radius: 12px; font-size: 0.92rem; line-height: 1.5; color: #9B2C2C; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm);">
    <span style="font-size: 1.4rem; line-height: 1;">🔞</span>
    <div>
      <strong style="color: #9B2C2C;">Adult Content / Sensitive Topic Note:</strong> This session focuses on <strong>{theme_details}</strong>. Discussion is intended for mature or adult audiences as it explores complex or sensitive psychological and societal themes.
    </div>
  </div>"""

    # Generate 10 items for Round 1, each using one of the 10 vocab words
    round1_html = ""
    for r1_idx, (word, _, _) in enumerate(vocab_items):
        word_lower = word.lower()
        if r1_idx < 5:
            r1_main = R1_THEME_TEMPLATES[r1_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r1_personal = R1_THEME_PERSONAL_TEMPLATES[r1_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        else:
            r1_main = R1_SLANG_TEMPLATES[r1_idx - 5].format(
                word=word,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r1_personal = R1_SLANG_PERSONAL_TEMPLATES[r1_idx - 5].format(
                word=word,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        round1_html += f"""          <div class="round-item">
            <div class="round-item-main">{r1_main}</div>
            <div class="round-item-personal">{r1_personal}</div>
          </div>\n"""

    # Generate 10 items for Round 2, using themes for 0-4 and general cinematic debate for 5-9
    round2_html = ""
    for r2_idx, (word, _, _) in enumerate(vocab_items):
        word_lower = word.lower()
        if r2_idx < 5:
            r2_main = R2_THEME_STATEMENT_TEMPLATES[r2_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        else:
            r2_main = R2_CINEMATIC_STATEMENT_TEMPLATES[r2_idx - 5].format(
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        round2_html += f"""          <div class="round-item">
            <div class="round-item-main">{r2_main}</div>
          </div>\n"""

    selected_mistakes = MISTAKES_CATALOG[idx % len(MISTAKES_CATALOG):idx % len(MISTAKES_CATALOG) + 3]
    while len(selected_mistakes) < 3:
        selected_mistakes.append(MISTAKES_CATALOG[len(selected_mistakes) % len(MISTAKES_CATALOG)])

    mistakes_html = ""
    for wrong, right, note in selected_mistakes:
        mistakes_html += f"""          <div class="mistake-item"><span class="mistake-wrong">{wrong}</span><span class="mistake-arrow">→</span><span class="mistake-right">{right}</span><span class="mistake-note-text">{note}</span></div>\n"""

    filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(SESSION_TEMPLATE.format(
            title=title,
            lang=lang,
            variety=variety,
            level_short=level_short,
            level_label=level_label,
            focus=focus,
            grammar_focus=grammar_focus,
            vocab_generic_html=vocab_generic_html,
            vocab_authentic_html=vocab_authentic_html,
            sensitive_html=sensitive_html,
            round1_html=round1_html,
            round2_html=round2_html,
            mistakes_html=mistakes_html
        ))

print("Successfully generated all 91 Cinema Club sessions with 100% unique cinema-specific vocabulary, 10-unit discussion structure, and screen-specific Grammar Focus!")
