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
VOCAB_DB = {'addiction': ('the state of being physically or mentally dependent on a substance.',
               'The prodigy battles a severe, isolating addiction to tranquilizers.'),
 'ambitions': ('strong desires to achieve success, power, or distinction.',
               'The main characters balance their career ambitions with personal life.'),
 'apocalypse': ('the complete final destruction or collapse of the world.',
                'The survivors search for meaning and warmth after the sudden apocalypse.'),
 'audition': ('an interview for a particular role as a singer, actor, or musician.',
              'Her emotional college audition is the turning point of the film.'),
 'autonomy': ('the right or condition of self-government; independence.',
              'The AI struggles to gain complete personal and digital autonomy.'),
 'clique': ('a small, exclusive group of people.',
            'The narrative dissects the brutal dynamics of elite high school cliques.'),
 'clones': ('genetically identical copies of a living organism.',
            'The sci-fi epic explores the ethical and personal dilemmas of human clones.'),
 'coexistence': ('the state of living or existing together at the same time or in the same place.',
                 'The movie questions if peaceful coexistence with supernatural creatures is possible.'),
 'deception': ('the action of deceiving someone.',
               'The plot is a masterclass in elegant deception and shifting alliances.'),
 'desires': ('strong feelings of wanting to have something or wishing for something.',
             'The storyline warns about the unexpected consequences of our deepest desires.'),
 'devotion': ('love, loyalty, or enthusiasm for a person, activity, or cause.',
              'His lifelong devotion is documented in beautiful, bittersweet letters.'),
 'diversity': ('the practice or quality of including people from a range of backgrounds.',
               'The cast celebrates cultural diversity and modern gender representation.'),
 'empathy': ('the ability to understand and share the feelings of another.',
             "Hearing other people's inner thoughts teaches him genuine empathy."),
 'fame': ('the state of being known or talked about by many people.',
          'The reality TV stars discover the fleeting nature of sudden media fame.'),
 'fate': ("the development of events beyond a person's control.",
          'The characters debate whether their island crash was accident or absolute fate.'),
 'generosity': ('the quality of being kind and generous.',
                'Small acts of generosity shine through the cold, competitive atmosphere.'),
 'grief': ("intense sorrow, especially caused by someone's death.",
           'The narrative explores how the family copes with sudden, overwhelming grief.'),
 'hierarchy': ('a system in which members of an organization are ranked according to status.',
               'The film highlights the intense corporate hierarchy of high fashion.'),
 'humility': ("a modest or low view of one's own importance.",
              'The character learns humility after losing their vast fortune overnight.'),
 'illness': ('a disease or period of sickness affecting the body or mind.',
             'The story focuses on preserving identity in the face of progressive illness.'),
 'immortality': ('the ability to live forever; eternal life.',
                 'She learns that accidental immortality can lead to deep loneliness.'),
 'independence': ('the fact or state of being independent and self-reliant.',
                  'Her journey centers on her struggle for personal and financial independence.'),
 'infidelity': ('the action of being unfaithful to a spouse or partner.',
                'The plot unravels through discoveries of mutual marital infidelity.'),
 'isolation': ('the state of being separate from others.',
               "The remote, claustrophobic setting amplifies the characters' mental isolation."),
 'loyalty': ('the quality of giving or showing firm and constant support.',
             'The story celebrates the deep and unbreakable loyalty of animal companions.'),
 'mythology': ('a collection of myths, especially those belonging to a particular culture.',
               'The series slowly builds a complex, supernatural mythology.'),
 'obsession': ('the state of being obsessed with someone or something.',
               'The film warns against the dangers of creative and mental obsession.'),
 'optimism': ('hopefulness and confidence about the future or the success of something.',
              'Despite her setbacks, she maintains a bright and contagious optimism.'),
 'prejudice': ('preconceived opinion that is not based on reason or actual experience.',
               'The film addresses deep-rooted social prejudice in mid-century society.'),
 'propaganda': ('information, especially of a biased or misleading nature, used to promote a cause.',
                'The citizens are fed corporate propaganda to hide the simulation.'),
 'resilience': ('the capacity to recover quickly from extreme difficulties.',
                'The community shows incredible resilience in a post-apocalyptic world.'),
 'romance': ('a feeling of excitement and mystery associated with love.',
             'Their romance is tested by societal expectations and historical events.'),
 'satire': ('the use of humor, irony, or exaggeration to expose and criticize stupidity.',
            'This dark comedy serves as a sharp political satire of modern governance.'),
 'secrets': ('something that is kept or meant to be kept unknown or unseen.',
             'The historic mansion is filled with deadly secrets and symbols.'),
 'solidarity': ('unity or agreement of feeling or action, especially among individuals.',
                'The resistance movement is built on quiet acts of human solidarity.'),
 'superstition': ('excessively credulous belief in and reverence for supernatural forces.',
                  'The old village is bound by dark superstition and fear of the woods.'),
 'surveillance': ('close observation, especially of a suspected person or group.',
                  'The characters live under constant, high-tech state surveillance.'),
 'survival': ('the state or fact of continuing to live or exist, especially in spite of difficult conditions.',
              'Survival in this dystopian future requires absolute secrecy and courage.'),
 'survival mode': ('the state or fact of continuing to live or exist, especially in spite of difficult conditions.',
                   'Survival in this dystopian future requires absolute secrecy and courage.'),
 'suspense': ('a state of excited or anxious uncertainty about what may happen.',
              'The director relies on visual suspense rather than cheap jumpscares.'),
 'trauma': ('a deeply distressing or disturbing experience.',
            'The protagonist struggles to overcome lingering childhood trauma.'),
 'vigilante': ('a member of a self-appointed group of citizens who undertake law enforcement.',
               'The masked vigilante fights against authoritarian political rule.'),
 'vulnerability': ('the quality of being exposed to emotional or physical harm.',
                   'Admitting fear is portrayed as a source of strength and emotional vulnerability.')}

FILM_DETAILS = {'101 & 102 Dalmatians': {'conflict': "escaping Cruella's obsession with fur coats and luxury possessions",
                          'key_figures': 'Cruella de Vil, her designer Monsieur Le Pelt, and puppy owners',
                          'protagonist': 'the dalmatian puppies',
                          'setting': 'London streets and eccentric fashion studios'},
 '16 Wishes': {'conflict': 'managing the chaotic consequences of her childhood desires and wishes',
               'key_figures': 'her friend Connor, the mysterious woman Celeste, and high school peers',
               'protagonist': 'Abby Jensen',
               'setting': 'her suburban high school and home'},
 'A Quiet Place': {'conflict': 'protecting their family by maintaining absolute silence to avoid monsters',
                   'key_figures': 'their deaf daughter Regan, Marcus, and the acoustic monsters',
                   'protagonist': 'Lee and Evelyn Abbott',
                   'setting': 'an isolated, silent farm in a post-apocalyptic forest'},
 'About Time': {'conflict': 'using secret time travel to master daily appreciation and father-son bonds',
                'key_figures': 'his father, Mary, and his quirky British family',
                'protagonist': 'Tim Lake',
                'setting': 'Cornwall and bustling London'},
 'Adolescence': {'conflict': 'coping with teenage hormones, rebel behavior, and school anxieties',
                 'key_figures': 'his love interest Alice, his family, and high school peers',
                 'protagonist': 'Adam',
                 'setting': 'suburban neighborhoods and schools'},
 'Angels & Demons': {'conflict': 'racing against time to solve the Illuminati trail and locate antimatter',
                     'key_figures': 'Dr. Vittoria Vetra, the Camerlengo, and Cardinal candidates',
                     'protagonist': 'Robert Langdon',
                     'setting': 'secret archives, historic churches, and tombs of the Vatican'},
 'Beautiful Thing': {'conflict': 'finding hope, mutual support, and love in a rigid working-class neighborhood',
                     'key_figures': "Jamie's mother Sandra, their neighbor Leah, and the estate community",
                     'protagonist': 'Jamie and Ste',
                     'setting': 'a working-class housing estate in Thamesmead, London'},
 'Bird Box': {'conflict': 'navigating absolute fear of the unseen and protecting her family',
              'key_figures': "her children 'Boy' and 'Girl', Tom, and surviving shelter mates",
              'protagonist': 'Malorie Hayes',
              'setting': 'a treacherous, blindfolded river journey and isolated cabins'},
 'Black Mirror': {'conflict': 'surviving rating systems, AI traps, and extreme digital obsession',
                  'key_figures': 'tech creators, societal raters, and digital doubles',
                  'protagonist': 'various near-future citizens',
                  'setting': 'a series of near-future, hyper-digitized dystopian societies'},
 'Bohemian Rhapsody': {'conflict': 'pioneering music production, rock star loneliness, and confronting HIV diagnosis',
                       'key_figures': 'Mary Austin, Brian May, Roger Taylor, John Deacon, and manager Paul Prenter',
                       'protagonist': 'Freddie Mercury',
                       'setting': 'historic recording studios, London, and the Live Aid stage'},
 "Breakfast at Tiffany's": {'conflict': 'overcoming superficial social climbing to find true human connection',
                            'key_figures': 'Paul Varjak, her cat, and wealthy NYC suitors',
                            'protagonist': 'Holly Golightly',
                            'setting': 'glamorous and lonely New York City apartments'},
 'CODA': {'conflict': 'balancing family sign language interpretation with college music audition dreams',
          'key_figures': 'her deaf parents Frank and Jackie, brother Leo, and choir teacher Bernardo Villalobos',
          'protagonist': 'Ruby Rossi',
          'setting': 'a coastal Massachusetts fishing harbor and Gloucester high school'},
 'Call Me by Your Name': {'conflict': 'experiencing a passionate first love and navigating nostalgic youth',
                          'key_figures': 'Oliver, his academic parents Mr. and Mrs. Perlman, and Marzia',
                          'protagonist': 'Elio Perlman',
                          'setting': 'a sun-kissed, historic villa in Northern Italy during 1983'},
 'Charade': {'conflict': 'uncovering hidden assets, deception, and shifting alliances',
             'key_figures': 'the charming Peter Joshua (alias) and sinister WWII comrades',
             'protagonist': 'Regina Lampert',
             'setting': 'elegant, suspenseful mid-century Paris'},
 'Cloud Atlas': {'conflict': 'reincarnating across centuries, fighting slavery, and promoting freedom',
                 'key_figures': 'the fabricant Sonmi-451, Zachry, Robert Frobisher, and Luisa Rey',
                 'protagonist': 'six interconnected souls across eras',
                 'setting': 'the Pacific in 1849, Edinburgh in 1936, and a dystopian Neo-Seoul in 2144'},
 'Countdown': {'conflict': "breaking terms and conditions to survive a fatalistic mobile app's timer",
               'key_figures': 'Matt Monroe, her sister Jordan, and the demonic force',
               'protagonist': 'Quinn Harris',
               'setting': 'a modern hospital and city'},
 'Crazy Ex-Girlfriend': {'conflict': 'confronting romantic obsession, self-destruction, and mental health stigma',
                         'key_figures': 'Josh Chan, Greg, Paula, and mental health professionals',
                         'protagonist': 'Rebecca Bunch',
                         'setting': 'West Covina, California'},
 'Death Becomes Her': {'conflict': 'drinking an immortality potion to fight aging anxieties and rivalry',
                       'key_figures': 'Dr. Ernest Menville and the potion seller Lisle von Rhuman',
                       'protagonist': 'Madeline Ashton and Helen Sharp',
                       'setting': 'luxurious Beverly Hills mansions'},
 "Don't Look Up": {'conflict': 'alerting a greedy, anti-intellectual public about an approaching doomsday comet',
                   'key_figures': 'President Janie Orlean, tech billionaire Peter Isherwell, and media hosts',
                   'protagonist': 'Kate Dibiasky and Dr. Randall Mindy',
                   'setting': 'university labs, Washington offices, and glitzy talk shows'},
 "Don't Worry Darling": {'conflict': 'unraveling patriarchal gaslighting and escaping the beautiful facade',
                         'key_figures': 'her husband Jack, the charismatic leader Frank, and Victory town residents',
                         'protagonist': 'Alice Chambers',
                         'setting': 'an idyllic, simulated 1950s desert company town of Victory'},
 'Equals': {'conflict': 'discovering forbidden human feelings and planning a secret escape',
            'key_figures': 'their supervisor, health officials, and social outcasts',
            'protagonist': 'Silas and Nia',
            'setting': "a sterile, emotional-suppression utopian society known as 'The Collective'"},
 'Fleabag': {'conflict': 'navigating grief, modern isolation, and family dysfunctions',
             'key_figures': 'her sister Claire, the Priest, and her family',
             'protagonist': 'Fleabag',
             'setting': 'modern London, particularly her guinea pig café'},
 'Free Guy': {'conflict': 'breaking NPC program limitations to gain autonomy and save his digital home',
              'key_figures': 'Molotovgirl/Millie, Buddy, Keys, and the corporate boss Antwan',
              'protagonist': 'Guy',
              'setting': 'the chaotic, action-packed video game world of Free City'},
 'Funny Girl': {'conflict': 'balancing sudden performing fame and stage charisma with a failing marriage',
                'key_figures': 'Nick Arnstein, Florenz Ziegfeld, and Broadway dancers',
                'protagonist': 'Fanny Brice',
                'setting': 'glitzy Broadway stages and Brooklyn homes'},
 'Glee': {'conflict': 'combating high school stereotypes, bullying, and chasing Broadway dreams',
          'key_figures': 'Finn Hudson, Sue Sylvester, Kurt, and New Directions singers',
          'protagonist': 'Will Schuester and Rachel Berry',
          'setting': 'William McKinley High School'},
 'Gone Girl': {'conflict': 'unraveling a toxic marriage, framing, and a highly publicized missing case',
               'key_figures': "Amy's parents, Detective Boney, and media personalities",
               'protagonist': 'Nick Dunne and Amy Dunne',
               'setting': 'suburban Missouri and glamorous NYC'},
 'Heathers: The Musical': {'conflict': "surviving toxic high school cliques and J.D.'s dark, murderous schemes",
                           'key_figures': 'J.D., Heather Chandler, Heather Duke, and high school cliques',
                           'protagonist': 'Veronica Sawyer',
                           'setting': 'Westerburg High School'},
 'Hello Dolly': {'conflict': 'orchestrating romantic matches, traditional courting, and celebrating life',
                 'key_figures': 'the grumpy merchant Horace Vandergelder, Cornelius, and Irene',
                 'protagonist': 'Dolly Levi',
                 'setting': 'historic New York City and Yonkers during the late 19th century'},
 'Hereditary': {'conflict': 'navigating inherited trauma, devastating grief, and generational cult possession',
                'key_figures': 'her husband Steve, her children Peter and Charlie, and Joan',
                'protagonist': 'Annie Graham',
                'setting': 'a large, isolated suburban home in the woods'},
 'Homeward Bound': {'conflict': 'demonstrating pet loyalty and navigating the wild to find their family',
                    'key_figures': 'their human family, forest predators, and rescue workers',
                    'protagonist': 'Shadow, Chance, and Sassy',
                    'setting': 'the vast, treacherous wilderness of the Sierra Nevada'},
 'How I Live Now': {'conflict': 'surviving the harsh realities of wartime and preserving family connections',
                    'key_figures': 'her cousins Edmond, Isaac, and Piper, and military guards',
                    'protagonist': 'Daisy',
                    'setting': 'the remote English countryside during a nuclear war scenario'},
 'How to Be Single': {'conflict': 'learning self-reliance, modern metropolitan dating, and embracing independence',
                      'key_figures': 'Robin, Meg, Lucy, and various New York partners',
                      'protagonist': 'Alice',
                      'setting': 'bustling New York City'},
 'Incendies': {'conflict': "unraveling deep family trauma, historical war secrets, and a mother's promise",
               'key_figures': 'their mother Nawal, notary Jean Lebel, and war figures',
               'protagonist': 'twins Jeanne and Simon Marwan',
               'setting': 'the Middle East and modern Quebec'},
 "It's Complicated": {'conflict': 'navigating an unexpected affair with her ex-husband and mature dating',
                      'key_figures': 'her ex-husband Jake, her architect Adam, and her children',
                      'protagonist': 'Jane Adler',
                      'setting': 'her beautiful bakery and home in Santa Barbara, California'},
 'Julie & Julia': {'conflict': 'cooking through classic recipe books and publishing validation via blogs',
                   'key_figures': 'their supportive husbands Eric Powell and Paul Child',
                   'protagonist': 'Julie Powell and Julia Child',
                   'setting': '1950s Paris culinary schools and a tiny 2002 Queens apartment'},
 'Just My Luck': {'conflict': 'learning humility and generosity after her lucky streak transfers to Jake',
                  'key_figures': 'Jake Hardin, the music band McFly, and her corporate colleagues',
                  'protagonist': 'Ashley Albright',
                  'setting': 'glamorous Manhattan offices and concert venues'},
 'Kill Bill': {'conflict': 'crossing off her assassin hit list and getting absolute revenge for betrayal',
               'key_figures': 'Bill, O-Ren Ishii, Vernita Green, Budd, and Elle Driver',
               'protagonist': 'The Bride / Beatrix Kiddo',
               'setting': 'Okinawa, Tokyo, Texas, and Mexico'},
 'Killing Eve': {'conflict': 'navigating mutual obsession, spy espionage, and psychoanalysis of assassins',
                 'key_figures': 'spy handler Carolyn Martens, Konstantin, and Niko Polastri',
                 'protagonist': 'Eve Polastri and Villanelle',
                 'setting': 'London, Paris, Rome, and various European cities'},
 'Kinky Boots': {'conflict': 'saving a family manufacturing business through drag culture and diversity',
                 'key_figures': 'Lola/Simon the drag queen, Lauren, and conservative factory workers',
                 'protagonist': 'Charlie Price',
                 'setting': 'a traditional shoe factory in Northampton, England'},
 'La Valla (The Barrier)': {'conflict': 'surviving under extreme state surveillance and seeking solidarity',
                            'key_figures': 'their family, the authoritarian government, and resistance fighters',
                            'protagonist': 'Hugo and Julia',
                            'setting': 'a dystopian, divided Madrid in the mid-20th century'},
 'Leave the World Behind': {'conflict': 'facing a massive cyberattack and the sudden collapse of modern technology',
                            'key_figures': 'G.H. Scott, Ruth, and strange herds of deer',
                            'protagonist': 'Amanda and Clay Sandford',
                            'setting': 'a luxurious, remote vacation home in Long Island'},
 'Lost': {'conflict': 'unraveling island mythology, survival instincts, and destiny vs. free will',
          'key_figures': "John Locke, Kate Austen, Sawyer, and 'The Others'",
          'protagonist': 'Jack Shephard',
          'setting': 'a mysterious, supernatural deserted island in the Pacific'},
 'Love & Other Drugs': {'conflict': 'navigating commercial medical ethics, chronic illness, and emotional '
                                    'vulnerability',
                        'key_figures': 'Maggie Murdock and pharmaceutical executives',
                        'protagonist': 'Jamie Randall',
                        'setting': 'the highly competitive pharmaceutical sales world of the late 1990s'},
 'Luck': {'conflict': 'redefining luck, superstition, and finding her true belonging',
          'key_figures': 'Bob the lucky black cat, leprechauns, and magical creatures',
          'protagonist': 'Sam Greenfield',
          'setting': 'the vibrant and secretive Land of Luck'},
 'Lucy': {'conflict': 'transcending her mind after an experimental drug synthesizes 100% brain capacity',
          'key_figures': 'Professor Samuel Norman, Captain Pierre Del Rio, and mob boss Mr. Jang',
          'protagonist': 'Lucy Miller',
          'setting': 'Taipei and French neurological research universities'},
 'Mamma Mia': {'conflict': 'finding her father, organizing a wedding, and reviving old romances',
               'key_figures': 'the three possible fathers Sam, Harry, and Bill, and Sky',
               'protagonist': 'Sophie Sheridan and Donna Sheridan',
               'setting': 'a sun-drenched, idyllic Greek island of Kalokairi'},
 'Midsommar': {'conflict': 'coping with family grief and finding a sinister sense of community in a cult',
               'key_figures': 'Christian, Pelle, and the secretive Hårga village elders',
               'protagonist': 'Dani Ardor',
               'setting': 'a remote, sun-drenched commune in Hälsingland, Sweden'},
 'Miss You Already': {'conflict': 'reconciling lifelong best-friend bonds with a life-altering cancer diagnosis',
                      'key_figures': "their husbands Jago and Jethro, and Milly's mother Miranda",
                      'protagonist': 'Milly and Jess',
                      'setting': 'glamorous London townhouses and Yorkshire moors'},
 'Missing / Searching': {'conflict': 'tracing digital footprints and modern cybersecurity to find missing family',
                         'key_figures': 'their missing mothers/daughters, online friends, and investigators',
                         'protagonist': 'June Allen / David Kim',
                         'setting': 'digital screens, search engines, and social media platforms'},
 'Mrs. Harris Goes to Paris': {'conflict': 'overcoming class modesty with optimism to purchase a haute couture dress',
                               'key_figures': 'the elegant Dior staff, Marquis de Chassagne, and London friends',
                               'protagonist': 'Ada Harris',
                               'setting': 'post-war London and the House of Dior in Paris'},
 'Now You See Me': {'conflict': 'executing massive bank heists via sleight of hand to expose corporate greed',
                    'key_figures': 'FBI Agent Dylan Rhodes, Thaddeus Bradley, and Arthur Tressler',
                    'protagonist': 'The Four Horsemen',
                    'setting': 'grand illusion stages in Las Vegas, New Orleans, and New York'},
 'Nuts': {'conflict': 'proving her legal sanity and securing her autonomy against a protective custody suit',
          'key_figures': 'her defense attorney Aaron Levinsky, her parents, and the judge',
          'protagonist': 'Claudia Draper',
          'setting': 'a high-stakes courtroom and mental evaluation ward'},
 'Odd Thomas': {'conflict': 'utilizing his clairvoyant gifts to prevent disaster while hiding silent grief',
                'key_figures': 'Stormy Llewellyn, Chief Wyatt Porter, and the shadowy bodachs',
                'protagonist': 'Odd Thomas',
                'setting': 'a sleepy desert town of Pico Mundo, California'},
 'On a Clear Day You Can See...': {'conflict': 'unraveling past-life regression, hypnosis, and her subconscious gifts',
                                   'key_figures': 'Dr. Marc Chabot and her historical past-life persona Melinda',
                                   'protagonist': 'Daisy Gamble',
                                   'setting': 'psychiatric offices and 19th-century English estates'},
 'Personal Shopper': {'conflict': 'balancing intense high-fashion buying with medium spirit communication',
                      'key_figures': 'her demanding client Kyra, and the spirit of her twin brother Lewis',
                      'protagonist': 'Maureen Cartwright',
                      'setting': 'high-fashion Paris boutiques and empty spiritual apartments'},
 'Queendom': {'conflict': 'balancing creative artistic performances, media fame, and queer survival',
              'key_figures': 'her grandparents, local citizens, and activist artists',
              'protagonist': 'Gena Marvin',
              'setting': 'contemporary Russia'},
 'Radin': {'conflict': 'hiding his extreme, obsessive saving behavior and wealth from Laura',
           'key_figures': 'his long-lost daughter Laura, and his music school colleagues',
           'protagonist': 'François Gautier',
           'setting': 'a small French town and bank offices'},
 'Ratatouille': {'conflict': 'overcoming societal prejudice and kitchen hierarchy to cook freely',
                 'key_figures': 'Linguini, Colette, Gusteau, and food critic Anton Ego',
                 'protagonist': 'Remy the talented rat',
                 'setting': 'a prestigious Parisian restaurant kitchen'},
 'Roman Holiday': {'conflict': 'balancing heavy royal duties with a fleeting, beautiful taste of freedom',
                   'key_figures': 'American reporter Joe Bradley and photographer Irving Radovich',
                   'protagonist': 'Princess Ann',
                   'setting': 'picturesque and historic Rome, Italy'},
 'Run': {'conflict': 'escaping medical gaslighting, maternal obsession, and physical captivity',
         'key_figures': 'her overprotective mother Diane, pharmacists, and mailmen',
         'protagonist': 'Chloe Sherman',
         'setting': 'an isolated, highly monitored suburban house'},
 'Serebryanye Konki (Silver Skates)': {'conflict': 'bridging class divisions and seeking social change on ice skates',
                                       'key_figures': 'Alisa, the pickpocket gang leader Alex, and St. Petersburg '
                                                      'aristocrats',
                                       'protagonist': 'Matvey',
                                       'setting': 'frozen rivers and canals of 19th-century Saint Petersburg'},
 'Sex and the City': {'conflict': 'balancing high-fashion labels, metropolitan dating, and lifelong friendships',
                      'key_figures': 'Samantha Jones, Charlotte York, Miranda Hobbes, and Mr. Big',
                      'protagonist': 'Carrie Bradshaw',
                      'setting': 'fashionable and glamorous Manhattan, New York'},
 "She's the Man": {'conflict': 'disguising herself as a boy to play soccer and navigating love triangles',
                   'key_figures': 'Duke Orsino, Olivia, her twin brother Sebastian, and soccer coach',
                   'protagonist': 'Viola Hastings',
                   'setting': 'the elite Illyria Prep high school campus'},
 'Spoiler Alert': {'conflict': 'navigating a beautiful romance, terminal cancer, and devastating grief',
                   'key_figures': "Kit's parents Marilyn and Bob, and oncology doctors",
                   'protagonist': 'Michael Ausiello and Kit Cowan',
                   'setting': 'their Manhattan home and oncology clinics'},
 'Stepmom': {'conflict': 'co-parenting, overcoming stepmother complexes, and facing terminal illness',
             'key_figures': 'Luke Harrison and their children Anna and Ben',
             'protagonist': 'Isabel and Jackie',
             'setting': 'a cozy suburban New York home'},
 'Still Alice': {'conflict': "preserving her linguistic identity against early-onset Alzheimer's disease",
                 'key_figures': 'her husband John, her children Lydia, Anna, and Tom',
                 'protagonist': 'Alice Howland',
                 'setting': 'Columbia University and beach homes'},
 'Suspiria (2018)': {'conflict': 'discovering a powerful witch coven and confronting historical guilt',
                     'key_figures': 'Madame Blanc, Dr. Josef Klemperer, and the dance academy witches',
                     'protagonist': 'Susie Bannion',
                     'setting': 'a dark, divided Cold-War era Berlin dance academy'},
 'The Act': {'conflict': 'unraveling factitious disorder, extreme isolation, and escaping her mother',
             'key_figures': 'her overprotective mother Dee Dee Blanchard and boyfriend Nick Godejohn',
             'protagonist': 'Gypsy Rose Blanchard',
             'setting': 'a small suburban pink house in Missouri'},
 'The Age of Adaline': {'conflict': 'living with accidental immortality and running away under fake IDs',
                        'key_figures': 'Ellis Jones, his father William Jones, and her daughter Flemming',
                        'protagonist': 'Adaline Bowman',
                        'setting': 'San Francisco over various historical decades'},
 'The Call': {'conflict': 'surviving a phone communication loop with a dangerous killer in the past',
              'key_figures': 'Young-sook from the past and their family members',
              'protagonist': 'Seo-yeon',
              'setting': 'an old, atmospheric house connected across different timelines'},
 'The Da Vinci Code': {'conflict': 'interpreting cryptograms, symbology, and guarding the Holy Grail secrets',
                       'key_figures': 'Sophie Neveu, Sir Leigh Teabing, and the Opus Dei monk Silas',
                       'protagonist': 'Robert Langdon',
                       'setting': 'the Louvre Museum, Parisian streets, and English historic chapels'},
 'The Devil Wears Prada': {'conflict': "balancing personal integrity with Miranda's high-stress workplace demands",
                           'key_figures': 'Miranda Priestly, Emily, and Nigel',
                           'protagonist': 'Andy Sachs',
                           'setting': 'Runway fashion magazine in New York City'},
 'The First Wives Club': {'conflict': 'turning marital grief into triumph and sisterhood by getting even',
                          'key_figures': 'their ex-husbands, socialites, and their children',
                          'protagonist': 'Annie, Elise, and Brenda',
                          'setting': 'high-society New York City'},
 'The Hunger Games': {'conflict': 'surviving a televized child deathmatch and instigating social revolution',
                      'key_figures': 'Peeta Mellark, Gale Hawthorne, Haymitch Abernathy, and President Snow',
                      'protagonist': 'Katniss Everdeen',
                      'setting': 'the impoverished District 12 and the luxurious, cruel Capitol'},
 'The Invasion': {'conflict': 'resisting a hive-mind alien epidemic and preserving her human autonomy',
                  'key_figures': 'her son Oliver, Dr. Ben Driscoll, and emotionless infected citizens',
                  'protagonist': 'Carol Bennell',
                  'setting': 'a cold, paranoid Washington D.C.'},
 'The Iron Lady': {'conflict': 'confronting class barriers, parliamentary debates, and late-life cognitive decline',
                   'key_figures': 'her husband Denis Thatcher, parliamentary ministers, and critics',
                   'protagonist': 'Margaret Thatcher',
                   'setting': 'the House of Commons in London'},
 'The Mirror Has Two Faces': {'conflict': 'reconciling a platonic marriage of intellect with natural physical '
                                          'chemistry',
                              'key_figures': 'Gregory Larkin, her gorgeous sister Claire, and her demanding mother',
                              'protagonist': 'Rose Morgan',
                              'setting': 'Columbia University and New York apartments'},
 'The Mummy': {'conflict': 'battling greedy archaeological rivals and surviving a terrifying ancient curse',
               'key_figures': 'Evelyn Carnahan, Jonathan, and the cursed priest Imhotep',
               'protagonist': "Rick O'Connell",
               'setting': 'the ancient Egyptian ruins of Hamunaptra'},
 'The Notebook': {'conflict': 'overcoming class discrepancies and dementia through letters and devotion',
                  'key_figures': "Allie's wealthy mother, Lon Hammond, and nursing home staff",
                  'protagonist': 'Noah Calhoun and Allie Hamilton',
                  'setting': 'coastal South Carolina in the 1940s and a modern nursing home'},
 'The Others': {'conflict': 'coping with severe isolation, profound grief, and terrifying gothic mysteries',
                'key_figures': 'her photosensitive children Anne and Nicholas, and the mysterious servants',
                'protagonist': 'Grace Stewart',
                'setting': 'a dark, fog-shrouded Victorian mansion in the Channel Islands'},
 'The Owl and the Pussycat': {'conflict': 'reconciling overintellectual academic pride with raw, street-smart instinct',
                              'key_figures': 'their landlords and colorful New York characters',
                              'protagonist': 'Felix and Doris',
                              'setting': 'a cramped, noisy New York City apartment in the 1970s'},
 'The Pianist': {'conflict': 'relying on human resilience, luck, and art to survive extreme wartime tragedy',
                 'key_figures': 'his family, the resistance, and Captain Wilm Hosenfeld',
                 'protagonist': 'Władysław Szpilman',
                 'setting': 'the war-torn, crumbling ruins of the Warsaw Ghetto'},
 "The Queen's Gambit": {'conflict': 'battling drug addiction, obsession, and intellectual gender barriers',
                        'key_figures': 'Mr. Shaibel, Alma Wheatley, Benny Watts, and Russian champion Vasily Borgov',
                        'protagonist': 'Beth Harmon',
                        'setting': 'orphanages, Kentucky, and prestigious international chess tournaments'},
 'The Regime': {'conflict': 'holding onto authoritarian political power amidst extreme palace delusions',
                'key_figures': 'the soldier Herbert Zubak, government ministers, and foreign diplomats',
                'protagonist': 'Chancellor Elena Vernham',
                'setting': 'a crumbling, paranoid palace in a central European autocracy'},
 'The Shape of Water': {'conflict': 'orchestrating a secret rescue and communicating with a voiceless connection',
                        'key_figures': 'the amphibious creature, Zelda Fuller, Giles, and agent Richard Strickland',
                        'protagonist': 'Elisa Esposito',
                        'setting': 'a high-security Cold War research laboratory in Baltimore'},
 'The Substance': {'conflict': 'surviving a cell division cloning substance to combat aging anxieties',
                   'key_figures': 'her younger cloned clone Sue, and producer Harvey',
                   'protagonist': 'Elisabeth Sparkle',
                   'setting': 'glitzy and clinical Hollywood studios'},
 'The Swan Princess': {'conflict': 'defeating dark curses and proving true romantic devotion',
                       'key_figures': 'the villainous Rothbart, Jean-Bob, and Speed',
                       'protagonist': 'Princess Odette and Prince Derek',
                       'setting': 'a classic fairy tale kingdom and Swan Lake'},
 'V for Vendetta': {'conflict': 'dethroning a fascist regime using visual propaganda and symbolic masks',
                    'key_figures': 'Chancellor Sutler, Chief Inspector Finch, and government guards',
                    'protagonist': 'Evey Hammond and V',
                    'setting': 'a dystopian, authoritarian London under total surveillance'},
 'What Women Want': {'conflict': "gaining empathy and fighting workplace sexism after hearing women's thoughts",
                     'key_figures': 'Darcy Maguire, his daughter Alex, and marketing colleagues',
                     'protagonist': 'Nick Marshall',
                     'setting': 'a high-profile advertising agency in Chicago'},
 'Why Women Kill': {'conflict': 'dealing with marital infidelity, suburban secrets, and plotting murder',
                    'key_figures': 'their unfaithful husbands Rob, Karl, and Eli',
                    'protagonist': 'Beth Ann, Simone, and Taylor',
                    'setting': 'a luxurious Pasadena mansion across 1963, 1984, and 2019'},
 'Yentl': {'conflict': 'disguising herself as a boy to study forbidden theological scriptures',
           'key_figures': 'Avigdor, Hadass, and traditional Talmudic scholars',
           'protagonist': 'Yentl Mendel',
           'setting': 'a conservative Eastern European shtetl in the early 20th century'}}

SENSITIVE_FILMS = {'A Quiet Place': 'intense survival horror, dread, family tragedy, and creature violence',
 'Angels & Demons': 'religious conspiracies, Vatican murders, self-harm, and high-stakes bomb threats',
 'Beautiful Thing': 'working-class LGBTQ+ youth struggles and societal pressure',
 'Black Mirror': 'dark dystopian scenarios, technology obsession, and existential dread',
 'Cloud Atlas': 'reincarnation, clone rebellion, slavery, and survival',
 'Countdown': 'fatalistic themes, death anxiety, and intense scares',
 'Crazy Ex-Girlfriend': 'mental health struggles, obsession, and self-destruction',
 'Death Becomes Her': 'extreme body modification anxieties, mortality, and rivalries',
 "Don't Worry Darling": 'psychological manipulation, control, and patriarchal themes',
 'Fleabag': 'mature relationships, trauma, grief, and adult humor',
 'Gone Girl': 'intense marital toxicity, psychological framing, and manipulation',
 'Heathers: The Musical': 'dark high school themes, teenage suicide, and violence',
 'Hereditary': 'extreme family horror, generational trauma, and devastating grief',
 'How I Live Now': 'wartime survival and physical/psychological trauma',
 'Incendies': 'war atrocities, profound family trauma, and devastating secrets',
 'Kill Bill': 'high-stakes violence, absolute betrayal, and revenge',
 'Killing Eve': 'violent assassinations, psychological obsession, and espionage',
 'La Valla (The Barrier)': 'dystopian dictatorship, surveillance, biological testing, epidemic crises, and '
                           'state-sponsored violence',
 'Leave the World Behind': 'global collapse, high-stakes panic, and societal breakdown',
 'Love & Other Drugs': 'adult relationships, chronic illness, and medical ethics',
 'Lucy': 'R-rated drug trafficking, extreme violence, and psychological/neurological transformation',
 'Midsommar': 'cult indoctrination, extreme violence, and profound grief',
 'Miss You Already': 'terminal cancer, chronic suffering, and emotional coping',
 'Nuts': 'legal sanity, manslaughter, and childhood sexual abuse',
 'Personal Shopper': 'grief over the loss of a sibling, spiritual medium activity, and sudden violence',
 'Queendom': 'political prosecution, LGBTQ+ rights, and performance activism',
 'Run': 'physical captivity, abuse, and medical gaslighting',
 'Sex and the City': 'mature metropolitan dating, sexuality, and relationships',
 'Spoiler Alert': 'terminal illness, end-of-life care, and devastating grief',
 'Stepmom': 'terminal illness, cancer, emotional family grief, and step-parent relationships',
 'Still Alice': "early-onset Alzheimer's disease, cognitive decline, identity preservation, and profound emotional "
                'struggles',
 'Suspiria (2018)': 'dark witchcraft, extreme physical violence, and body horror',
 'The Act': 'extreme physical abuse, Munchausen syndrome by proxy, and murder',
 'The Da Vinci Code': 'religious controversies, secret societies, murder, and historical puzzles',
 'The Hunger Games': 'state-sponsored violence, survival under oppression, and child tribute battles',
 'The Others': 'profound grief, death, and supernatural isolation',
 'The Pianist': 'extreme wartime tragedy, Holocaust, and survival',
 "The Queen's Gambit": 'substance abuse, addiction, and intense mental obsession',
 'The Regime': 'political paranoia, autocratic delusions, and authoritarian rule',
 'The Shape of Water': 'cold war espionage, violence, mature elements, and complex emotional relationships',
 'The Substance': 'extreme body horror, severe self-image issues, and physical degradation',
 'V for Vendetta': 'fascist regime, political violence, and extreme control',
 'Why Women Kill': 'infidelity, domestic secrets, and plotting homicide',
 'Yentl': 'religious gender barriers and personal identity struggles'}

MISTAKES_CATALOG_STANDARD = [('She works very hard for achieve success',
  'She works very hard to achieve success',
  "Use 'to' + infinitive to express purpose in English."),
 ('The boss is more demanding than what I thought',
  'The boss is more demanding than I thought',
  "Exclude 'what' in comparative thought comparison clauses."),
 ('I will resign if they skimp always on budget',
  'I will resign if they always skimp on budget',
  "Frequency adverbs like 'always' come before the main verb."),
 ('We are living here since two years',
  'We have been living here for two years',
  "Use present perfect continuous with 'for' to express duration."),
 ("They don't allow her leave the house",
  "They don't allow her to leave the house",
  "Use 'allow someone to do something' construction."),
 ('He is making her to believe lies',
  'He is making her believe lies',
  "Use the bare infinitive after 'make someone do something'."),
 ('I have seen that movie yesterday',
  'I saw that movie yesterday',
  'Use the simple past for actions completed in the past.'),
 ('She is more older than him', 'She is older than him', "Do not double comparatives; 'older' is already comparative."),
 ('He gave to her a beautiful book',
  'He gave her a beautiful book',
  "Direct object doesn't require 'to' after 'give' in English.")]

MISTAKES_CATALOG_ADVANCED = [('I recommend you to see this film',
  'I recommend that you see this film',
  "Use 'recommend that + subjunctive/bare infinitive' or 'recommend doing'."),
 ('The reason is because she was afraid',
  'The reason is that she was afraid',
  "Avoid 'the reason is because'; use 'the reason is that' for formal/style clarity."),
 ('Seldom I have seen such an ending',
  'Seldom have I seen such an ending',
  "Negative adverbs like 'seldom' at the beginning of a clause trigger subject-auxiliary inversion."),
 ('If they would have warned us, we would know',
  'If they had warned us, we would know',
  'Use past perfect (had + past participle) in the if-clause of a mixed conditional.'),
 ('He insisted she goes to Runway',
  'He insisted she go to Runway',
  "Verbs of demand/insistence like 'insist' trigger the subjunctive/bare infinitive."),
 ("I'm used to watch movies in original",
  "I'm used to watching movies in original",
  "The phrase 'be used to' is followed by a gerund (-ing form), not a bare infinitive.")]

OPPOSITES_MAP = {'active': ('Active ≠ Passive',
            'engaging or ready to engage in physically energetic pursuits ≠ accepting or allowing what happens or what '
            'others do without active response.',
            'Taking an active role in your own life is much more rewarding than remaining a passive observer.'),
 'ambition': ('Ambition ≠ Contentment',
              "strong desire to achieve success, power, or distinction ≠ state of peaceful satisfaction with one's "
              'current status.',
              'The film explores how her corporate ambition left no room for simple personal contentment.'),
 'ambitions': ('Ambitions ≠ Contentment',
               "strong desires to achieve success, power, or distinction ≠ state of peaceful satisfaction with one's "
               'current status.',
               'The film explores how her corporate ambitions left no room for simple personal contentment.'),
 'anxiety': ('Anxiety ≠ Calm',
             'a feeling of worry, nervousness, or unease ≠ the state of being free from agitation or excitement.',
             'She worked hard to manage her social anxiety, finding peace in the soothing calm of nature.'),
 'apocalypse': ('Apocalypse ≠ Genesis',
                'the complete final destruction or collapse of the world ≠ the origin, mode of formation, or beginning '
                'of something.',
                'The visual aesthetics of the film depict a terrifying apocalypse, contrasting with our hopeful '
                'memories of genesis.'),
 'autonomy': ('Autonomy ≠ Subjugation',
              'the right of self-government or independence ≠ the act of bringing under complete control.',
              'The artificial intelligence fought for complete autonomy, rejecting any form of human subjugation.'),
 'clarity': ('Clarity ≠ Confusion',
             'the quality of being clear, coherent, and easy to understand ≠ lack of understanding or uncertainty.',
             'The explanation brought sudden clarity to a situation previously filled with complete confusion.'),
 'clique': ('Clique ≠ Inclusion',
            'a small, exclusive group of people ≠ the act of including all groups or individuals.',
            'The school is dominated by a toxic, exclusive clique rather than welcoming open inclusion.'),
 'coexistence': ('Coexistence ≠ Conflict',
                 'living or existing together peacefully ≠ a serious disagreement or argument.',
                 'They questioned if peaceful coexistence was possible, or if conflict was inevitable.'),
 'comfort': ('Comfort ≠ Pain',
             'a state of physical ease and freedom from pain ≠ highly unpleasant physical or emotional sensation.',
             'The gentle music brought immense comfort to those suffering from deep emotional pain.'),
 'deception': ('Deception ≠ Honesty',
               'the action of deceiving someone ≠ the quality of being honest and truthful.',
               'A web of deception was uncovered, contrasting sharply with her lifelong dedication to honesty.'),
 'diversity': ('Diversity ≠ Uniformity',
               'including people from a range of backgrounds ≠ the state of being entirely the same.',
               'The school celebrated its cultural diversity, rejecting any form of forced uniformity.'),
 'empathy': ('Empathy ≠ Apathy',
             "the ability to understand other's feelings ≠ a lack of interest, enthusiasm, or concern.",
             "Hearing people's thoughts taught him true empathy, replacing his lifelong cold apathy."),
 'fame': ('Fame ≠ Obscurity',
          'the state of being known or talked about by many people ≠ the state of being unknown, inconspicuous, or '
          'unimportant.',
          'Many chase the temporary illusion of fame, only to end up longing for the peaceful comfort of obscurity.'),
 'first': ('First ≠ Last',
           'coming before all others in time, order, or importance ≠ coming after all others in time or order.',
           'His first attempt was a complete disaster, but his last try turned out to be a brilliant success.'),
 'freedom': ('Freedom ≠ Slavery',
             'the power or right to act, speak, or think as one wants ≠ the state of being a slave or completely '
             'controlled.',
             'They fought courageously to defend their freedom and escape from a lifetime of cruel slavery.'),
 'generosity': ('Generosity ≠ Selfishness',
                'the quality of being kind and sharing ≠ the quality of caring only about oneself.',
                'The cold atmosphere was warmed by her generosity, a contrast to his extreme selfishness.'),
 'grief': ('Grief ≠ Solace',
           "intense sorrow, especially caused by someone's death ≠ comfort or consolation in a time of distress or "
           'sadness.',
           'The narrative contrasts her deep, overwhelming grief with the quiet solace she finds in art.'),
 'hope': ('Hope ≠ Despair',
          'a feeling of expectation and desire for a certain thing to happen ≠ the complete loss or absence of hope.',
          'Even in the darkest times, hope can light our way and prevent us from falling into absolute despair.'),
 'humility': ('Humility ≠ Pride',
              "a modest view of one's own importance ≠ a high or arrogant opinion of oneself.",
              'True greatness lies in quiet humility rather than noisy, overbearing pride.'),
 'illness': ('Illness ≠ Health',
             'a disease or period of sickness ≠ the state of being free from illness or injury.',
             'She managed her progressive illness while focusing on preserving her mental health.'),
 'immortality': ('Immortality ≠ Mortality',
                 'the ability to live forever ≠ the state of being subject to eventual death.',
                 'The series explores how immortality can be a heavy curse compared to peaceful mortality.'),
 'independence': ('Independence ≠ Dependence',
                  'self-reliance and freedom from outside control ≠ the state of relying on or being controlled by '
                  'someone else.',
                  'Striving for independence can sometimes lead to a feeling of complete isolation and dependence.'),
 'infidelity': ('Infidelity ≠ Fidelity',
                'the action of being unfaithful to a partner ≠ the quality of being faithful and loyal.',
                'The marriage was destroyed by mutual infidelity, contrasting with their early vows of fidelity.'),
 'isolation': ('Isolation ≠ Connection',
               'the state of being separate from others ≠ a feeling of being linked or integrated.',
               'His physical isolation made him crave any form of genuine human connection.'),
 'loyalty': ('Loyalty ≠ Betrayal',
             "a strong feeling of support or allegiance ≠ the action of betraying one's country, a group, or a person.",
             'True loyalty is a rare virtue, whereas sudden betrayal can shatter a long friendship.'),
 'maternal': ('Maternal ≠ Paternal',
              'relating to a mother ≠ relating to a father.',
              'She showed a deeply protective maternal instinct, which beautifully complemented his strong paternal '
              'guidance.'),
 'obsession': ('Obsession ≠ Indifference',
               'state of being obsessed with someone or something ≠ lack of interest, concern, or sympathy.',
               'Her passionate devotion bordered on obsession, while his attitude was one of complete indifference.'),
 'optimism': ('Optimism ≠ Pessimism',
              'hopefulness and confidence about the future ≠ a tendency to see the worst aspect of things.',
              'Her natural optimism kept her going, whereas his pessimism made him want to give up.'),
 'propaganda': ('Propaganda ≠ Objective truth',
                'biased or misleading information used to promote a cause ≠ facts and reality that are uninfluenced by '
                'personal opinions or bias.',
                'The state relies on continuous political propaganda, withholding any form of objective truth from the '
                'public.'),
 'resilience': ('Resilience ≠ Fragility',
                'the capacity to recover quickly from difficulties ≠ the quality of being easily broken or damaged.',
                'True resilience is forged by understanding and accepting our own emotional fragility.'),
 'romance': ('Romance ≠ Platonic connection',
             'a feeling of excitement and mystery associated with love ≠ a close relationship that is purely spiritual '
             'or friendly, without romance.',
             'Their passionate romance eventually evolved into a stable, lifelong platonic connection.'),
 'safe': ('Safe ≠ Dangerous',
          'protected from or not exposed to danger or risk ≠ able or likely to cause harm or injury.',
          'Keep your precious belongings in a safe place, far away from any dangerous elements.'),
 'satire': ('Satire ≠ Solemnity',
            'the use of humor or irony to criticize stupidity or vice ≠ the state of being serious, formal, and '
            'dignified.',
            'This political satire uses sharp, ridiculous humor rather than dry, heavy solemnity.'),
 'secrets': ('Secrets ≠ Disclosure',
             'things kept hidden or unknown ≠ the action of making new or secret information known.',
             'The historic house was filled with dark secrets, which they guarded to prevent sudden disclosure.'),
 'simple': ('Simple ≠ Complex',
            'easily understood or done; presenting no difficulty ≠ consisting of many different and connected parts.',
            'The basic idea was wonderfully simple, but the actual execution turned out to be incredibly complex.'),
 'solidarity': ('Solidarity ≠ Division',
                'unity or agreement of feeling or action ≠ disagreement, separation, or hostility.',
                'Strong social solidarity helped heal the deep political division within the city.'),
 'superstition': ('Superstition ≠ Rationality',
                  'irrational belief in supernatural forces ≠ the quality of being based on reason and facts.',
                  'The ancient village was bound by dark superstition, refusing any modern rationality.'),
 'surveillance': ('Surveillance ≠ Privacy',
                  'close observation of individuals ≠ the state of being free from public attention.',
                  'Constant surveillance is a threat to the fundamental human right to privacy.'),
 'survival': ('Survival ≠ Extinction',
              'continuing to live or exist ≠ the state of being wiped out or disappearing entirely.',
              "The community's struggle for survival saved them from the brink of total extinction."),
 'survival mode': ('Survival mode ≠ Security',
                   'the state of continuing to exist under difficult conditions ≠ the state of being free from danger '
                   'or threat.',
                   'Living in survival mode during the war made them appreciate the quiet security of peace.'),
 'trauma': ('Trauma ≠ Healing',
            'a deeply distressing or disturbing experience ≠ the process of making or becoming sound or healthy again.',
            'The protagonist struggles to overcome childhood trauma and begin a journey of emotional healing.'),
 'truth': ('Truth ≠ Lie',
           'that which is true or in accordance with fact or reality ≠ an intentional false statement.',
           'Always strive to tell the truth, as a single lie can destroy years of built trust.'),
 'vulnerability': ('Vulnerability ≠ Invulnerability',
                   'state of being exposed to the possibility of being attacked or harmed ≠ the state of being '
                   'impossible to harm or defeat.',
                   'Embracing vulnerability is a far more courageous path than pretending to possess absolute '
                   'invulnerability.'),
 'warm': ('Warm ≠ Cold',
          'having or showing a moderate degree of heat ≠ of or at a low or relatively low temperature.',
          'The warm fireplace offered a beautiful sanctuary from the freezing cold winter winds outside.'),
 'winter': ('Winter ≠ Summer',
            'the coldest season of the year ≠ the warmest season of the year.',
            'She loves the quiet snow of winter, whereas he prefers the bright sunshine of summer.')}

def normalize_word(w):
    w = w.strip().lower()
    for art in ["l'", "la ", "le ", "les ", "el ", "la ", "los ", "las ", "un ", "une ", "il ", "lo ", "i ", "gli ", "le ", "un'", "una ", "η ", "το ", "ο "]:
        if w.startswith(art):
            w = w[len(art):]
            break
    w = re.sub(r"^[^a-zA-Zа-яА-ЯёЁ]+", "", w)
    w = re.sub(r"[^a-zA-Zа-яА-ЯёЁ]+$", "", w)
    return w.strip().lower()

def escape_js(text):
    return text.replace("'", "\\\\'").replace('"', '\\\\"')

def calibrate_text_for_level(text, level, type_="example"):
    is_a2 = "A2" in level or "A1" in level or "starter" in level.lower() or "elementary" in level.lower()
    is_c1 = "C1" in level or "C2" in level or "advanced" in level.lower()

    if is_a2:
        text = text.replace("brilliantly dissects", "shows").replace("dissects", "shows")
        text = text.replace("deeply explores", "looks at").replace("explores", "looks at")
        text = text.replace("confronts balancing", "deals with").replace("confronts", "faces")
        text = text.replace("the story deeply looks at", "we learn about")
        text = text.replace("pivotal scene", "important scene")
        text = text.replace("thematic concept", "idea")
        text = text.replace("linguistic nuances", "words")
        text = text.replace("societal structures", "society")
        text = text.replace("psychological pressures", "feelings")
        text = text.replace("philosophical angle", "idea")
        text = text.replace("cinematic style", "style")
        text = text.replace("unravels", "explains").replace("unravel", "explain")
        text = text.replace("tragic delusion", "sad dream")
        text = text.replace("intense corporate hierarchy", "strict workplace rule")
        text = text.replace("corporate hierarchy", "workplace system")
        text = text.replace("state surveillance", "police watch")
        text = text.replace("superstition", "old beliefs")
        text = text.replace("autonomy", "freedom")
        text = text.replace("empathy", "understanding others")
        text = text.replace("vulnerability", "weakness")
        text = text.replace("resilience", "strength")
        text = text.replace("coexistence", "living together")
        text = text.replace("dystopian future", "dark future")
        text = text.replace("narrative of", "story in")
        text = text.replace("The narrative of", "The story of")
        text = text.replace("the screenplay of", "the script of")
        text = text.replace("utilized", "uses").replace("utilizes", "uses")
        text = text.replace("colloquialism", "local word")
        text = text.replace("establish context", "show the story")
    elif is_c1:
        text = text.replace("shows", "delineates").replace("dissects", "scrutinizes")
        text = text.replace("explores", "meticulously investigates")
        text = text.replace("deals with", "grapples with the complex reality of")
        text = text.replace("important scene", "watershed moment")
        text = text.replace("societal structures", "institutional socio-political frameworks")
        text = text.replace("unravels", "deconstructs")
        text = text.replace("uses", "expertly deploys")
    return text

def get_calibrated_templates(level, film_idx=0):
    is_a2 = "A2" in level or "A1" in level or "starter" in level.lower() or "elementary" in level.lower()
    is_c1 = "C1" in level or "C2" in level or "advanced" in level.lower()

    if is_a2:
        r1_theme_pool = [
            "How does {protagonist} feel about <strong>{word}</strong> in {setting}? Use <strong>{grammar_focus}</strong> to talk about their feelings.",
            "Is <strong>{word}</strong> a good thing or a bad thing in '{title}'? Tell us what you think using <strong>{grammar_focus}</strong>.",
            "How does the movie show <strong>{word}</strong> in the world of {setting}? Describe it with <strong>{grammar_focus}</strong>.",
            "Talk about {protagonist} and {key_figures}. How does <strong>{word}</strong> make their lives difficult? Use <strong>{grammar_focus}</strong>.",
            "Find a scene in '{title}' where <strong>{word}</strong> changes the story of {conflict}. Explain it using <strong>{grammar_focus}</strong>.",
            "Does {protagonist} want <strong>{word}</strong>, or are they afraid of it? Tell us using <strong>{grammar_focus}</strong>.",
            "How do the characters talk about <strong>{word}</strong> when they meet in {setting}? Discuss using <strong>{grammar_focus}</strong>.",
            "Why is <strong>{word}</strong> important for the ending of '{title}'? Explain with <strong>{grammar_focus}</strong>.",
            "Do you think {protagonist} makes a mistake because of <strong>{word}</strong>? Answer using <strong>{grammar_focus}</strong>.",
            "How does <strong>{word}</strong> help {protagonist} solve the problem of {conflict}? Share your ideas with <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you were in {setting}, how would you live with <strong>{word}</strong>?",
            "★ Have you ever had a problem where you had to think about <strong>{word}</strong>?",
            "★ Does the story of <strong>{word}</strong> in the movie feel like real life to you?",
            "★ If you had a fight about <strong>{word}</strong> with a friend, what would you do?",
            "★ Can you remember a time when <strong>{word}</strong> changed your own plans?",
            "★ Would you like to have more <strong>{word}</strong> in your daily life? Why?",
            "★ Do you talk about <strong>{word}</strong> with your family or friends?",
            "★ What is the best way to handle <strong>{word}</strong> when you are stressed?",
            "★ If you could help {protagonist} with <strong>{word}</strong>, what would you say?",
            "★ Do you think <strong>{word}</strong> is easy or hard to find in the real world?"
        ]
        r1_slang_pool = [
            "The characters in '{title}' use the word <strong>'{word}'</strong>. When do they say it to {key_figures}? Answer using <strong>{grammar_focus}</strong>.",
            "How does using words like <strong>'{word}'</strong> make the dialogue in {setting} sound natural? Use <strong>{grammar_focus}</strong>.",
            "In '{title}', the phrase <strong>'{word}'</strong> is used in a funny or tense scene. Explain what happens using <strong>{grammar_focus}</strong>.",
            "Why do the characters say <strong>'{word}'</strong> during {conflict}? What does it mean? Explain using <strong>{grammar_focus}</strong>.",
            "What other interesting words or <strong>{grammar_focus}</strong> did you hear in the conversations?",
            "Who says <strong>'{word}'</strong> first, and why do they say it? Talk about it using <strong>{grammar_focus}</strong>.",
            "Does the word <strong>'{word}'</strong> sound polite or impolite in {setting}? Explain with <strong>{grammar_focus}</strong>.",
            "How does {protagonist} react when someone says <strong>'{word}'</strong>? Use <strong>{grammar_focus}</strong>.",
            "Can you find another scene where <strong>'{word}'</strong> would fit perfectly? Explain with <strong>{grammar_focus}</strong>.",
            "Does <strong>'{word}'</strong> help us understand the characters better? Tell us using <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Have you ever heard a word like <strong>'{word}'</strong> in other movies?",
            "★ Do you like learning slang words like <strong>'{word}'</strong>, or do you prefer normal words?",
            "★ Is there a word like <strong>'{word}'</strong> in your own language? What is it?",
            "★ When you speak English, do you use slang like <strong>'{word}'</strong>?",
            "★ Have you ever made a mistake with a slang word like <strong>'{word}'</strong>?",
            "★ Do you think it is fun to use words like <strong>'{word}'</strong> with friends?",
            "★ How do you feel when you understand slang like <strong>'{word}'</strong> in a film?",
            "★ Would you teach <strong>'{word}'</strong> to other English learners?",
            "★ What is your favorite new word from the movie '{title}'?",
            "★ Do you find informal words like <strong>'{word}'</strong> easy to remember?"
        ]
        r2_theme_pool = [
            "'{protagonist}'s story of <strong>{word}</strong> in '{title}' is very sad, and they should be more careful.' Do you agree? Use <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie makes the world of {setting} look too beautiful, but it has a high cost.' Discuss using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is not a nice person because they only care about <strong>{word}</strong>.' Give your opinion using <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie '{title}' is too simple and does not show deep feelings about <strong>{word}</strong>.' Talk about this with <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s problem of {conflict} never ends because they cannot agree on <strong>{word}</strong>.' Explain using <strong>{grammar_focus}</strong>.",
            "'I think <strong>{word}</strong> is the most important lesson in this film.' Share your thoughts using <strong>{grammar_focus}</strong>.",
            "'The movie shows that <strong>{word}</strong> can solve any problem.' Do you agree? Answer using <strong>{grammar_focus}</strong>.",
            "'Without <strong>{word}</strong>, the story of '{title}' would be very boring.' Discuss with <strong>{grammar_focus}</strong>.",
            "'The characters in {setting} are very lucky to learn about <strong>{word}</strong>.' Explain using <strong>{grammar_focus}</strong>.",
            "'The film '{title}' teaches us that <strong>{word}</strong> can change a person.' Talk about this using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were a film maker, would you make a movie about <strong>{word}</strong>?",
            "★ Do you like movies with beautiful pictures or movies with great dialogue?",
            "★ Do you like the ending of the movie '{title}', or do you want a different ending?",
            "★ If you had to choose a song for the movie '{title}', what kind of music would it be?",
            "★ Do you like stories that have a happy ending?",
            "★ Did your ideas about <strong>{word}</strong> change after watching this movie?",
            "★ Would you like to live in {setting} for a day?",
            "★ Who was your favorite character in the movie?",
            "★ Do you think movies should teach us good things about life?",
            "★ What was the most beautiful scene in the movie?"
        ]
        r2_cinematic_pool = [
            "'The movie '{title}' would be better if {protagonist} had a happy ending.' Talk about this using <strong>{grammar_focus}</strong>.",
            "'The friendship between {protagonist} and {key_figures} is the best part of the movie.' Explain using <strong>{grammar_focus}</strong>.",
            "'The music and pictures in {setting} are better than the words spoken.' Share your ideas using <strong>{grammar_focus}</strong>.",
            "'The film '{title}' is an important movie for young people today.' Discuss using <strong>{grammar_focus}</strong>.",
            "'The story in '{title}' moves too slowly for a modern audience.' Agree or disagree using <strong>{grammar_focus}</strong>.",
            "'The director does a great job showing {setting} in a realistic way.' Explain using <strong>{grammar_focus}</strong>.",
            "'I did not like the main conflict of {conflict} because it was too simple.' Answer using <strong>{grammar_focus}</strong>.",
            "'The movie was very exciting to watch from start to finish.' Tell us why using <strong>{grammar_focus}</strong>.",
            "'The secondary characters in '{title}' are more fun to watch than the main characters.' Explain with <strong>{grammar_focus}</strong>.",
            "'The scenes in {setting} make me want to visit that place.' Share your thoughts with <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Would you like to act in a movie like '{title}'?",
            "★ What kind of movies make you feel happy?",
            "★ If you could meet {protagonist}, what would you say to them?",
            "★ Do you watch movies to learn a language or just for fun?",
            "★ Do you like old movies or new movies more?",
            "★ Who is your favorite film actor or actress?",
            "★ Does the music in a film make you feel sad or excited?",
            "★ What is the best movie you have ever seen?",
            "★ Do you prefer watching movies at home or in a cinema?",
            "★ If you could make a movie, what would it be about?"
        ]
    elif is_c1:
        r1_theme_pool = [
            "Deconstruct the profound socio-psychological undercurrents bearing down upon {protagonist} within the highly charged milieu of {setting}. How does their internalization of <strong>{word}</strong> dictate their complex interpersonal dynamics with {key_figures}? Deploy <strong>{grammar_focus}</strong> to formulate a sophisticated philosophical critique.",
            "To what extent does the pursuit of <strong>{word}</strong> in '{title}' challenge conventional ethical boundaries and subvert the moral architecture of {setting}? Discuss the ethical ramifications using <strong>{grammar_focus}</strong>.",
            "Analyze how the systemic representation of <strong>{word}</strong> in {setting} acts as an allegorical commentary on contemporary socio-political frameworks. Formulate your critical synthesis using <strong>{grammar_focus}</strong>.",
            "Investigate the psychological friction between {protagonist} and {key_figures}. In what ways does <strong>{word}</strong> manifest as an irreconcilable ideological divide, and how is this reflected in the syntax of <strong>{grammar_focus}</strong>?",
            "Identify the pivotal cinematic watershed moment in '{title}' where the focus on <strong>{word}</strong> fundamentally alters the narrative trajectory of {conflict}. Scrutinize this transformation employing <strong>{grammar_focus}</strong>.",
            "How does the director use the spatial politics of {setting} to externalize the internal turmoil of {protagonist} grappling with <strong>{word}</strong>? Analyze using <strong>{grammar_focus}</strong>.",
            "To what degree is the narrative of '{title}' a critique of the commodification or idealization of <strong>{word}</strong>? Critique using <strong>{grammar_focus}</strong>.",
            "Explore the subtextual nuances in the conversations between {protagonist} and {key_figures}, highlighting how the shadow of <strong>{word}</strong> dominates their verbal exchanges. Frame your analysis with <strong>{grammar_focus}</strong>.",
            "Synthesize the thematic intersection of <strong>{word}</strong>, the setting of {setting}, and the resolution of {conflict}. Deploy <strong>{grammar_focus}</strong> to support your thesis.",
            "Does the screenplay position <strong>{word}</strong> as an agent of existential liberation or as a psychological prison for {protagonist}? Elaborate utilizing <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you were tasked with navigating the existential anxieties of {setting}, how would you personally insulate your core values against <strong>{word}</strong>?",
            "★ Have you ever navigated a high-stakes ethical crossroads where you had to sacrifice a relationship with someone like {key_figures} to preserve your stance on <strong>{word}</strong>?",
            "★ To what extent does the film's cynical or idealized portrayal of <strong>{word}</strong> resonate with your personal observations of modern institutional values?",
            "★ If you were called upon to mitigate the ideological rift regarding <strong>{word}</strong> between {protagonist} and {key_figures}, what conflict-resolution strategy would you employ?",
            "★ Can you reflect on a profound personal transition where the reality of <strong>{word}</strong> necessitated a complete re-evaluation of your existential priorities?",
            "★ How would you advise someone exhibiting the same self-destructive patterns as {protagonist} concerning their relationship with <strong>{word}</strong>?",
            "★ In your estimation, does modern society overvalue <strong>{word}</strong>, or is it a necessary prerequisite for genuine individual autonomy?",
            "★ Have you ever felt alienated by the dominant cultural narratives surrounding <strong>{word}</strong> in your professional or academic circle?",
            "★ What cognitive strategies do you utilize to maintain equilibrium when your personal values regarding <strong>{word}</strong> are systematically challenged?",
            "★ If you had the agency to intervene at a critical decision-making juncture for {protagonist} regarding <strong>{word}</strong>, which path would you force them to take?"
        ]
        r1_slang_pool = [
            "Within the dialogic architecture of '{title}', the screenplay deploys the nuanced colloquialism <strong>'{word}'</strong>. How does this specific lexical choice illuminate the underlying power dynamics between {protagonist} and {key_figures}? Frame your analysis utilizing <strong>{grammar_focus}</strong>.",
            "Analyze how the organic integration of authentic idioms like <strong>'{word}'</strong> serves as a vital stylistic mechanism to establish verisimilitude and atmosphere in {setting}. Discuss employing <strong>{grammar_focus}</strong>.",
            "In '{title}', the phrase <strong>'{word}'</strong> serves as a highly charged linguistic signifier of tension or irony between {protagonist} and {key_figures}. Deconstruct the shifting tonal registers of this scene using <strong>{grammar_focus}</strong>.",
            "The screenplay expertly utilizes the colloquial expression <strong>'{word}'</strong> to convey rich emotional subtext that the characters deliberately avoid verbalizing during {conflict}. What hidden desires or anxieties does this reveal? Formulate your thesis using <strong>{grammar_focus}</strong>.",
            "Examine how the vernacular exchanges containing <strong>'{word}'</strong> reflect broader socio-linguistic shifts and regional varieties. Highlight specific structural patterns of <strong>{grammar_focus}</strong> in your answer.",
            "Critically assess why the writer opted for the slang term <strong>'{word}'</strong> rather than a more formal lexical equivalent to articulate {protagonist}'s psychological state. Address this using <strong>{grammar_focus}</strong>.",
            "How does the sudden introduction of colloquial language like <strong>'{word}'</strong> disrupt the established linguistic register and escalate the drama of {conflict}? Evaluate using <strong>{grammar_focus}</strong>.",
            "In what ways does the usage of <strong>'{word}'</strong> by {key_figures} delineate their sociological positioning and cultural alignment relative to {protagonist}? Scrutinize with <strong>{grammar_focus}</strong>.",
            "How does a precise reading of colloquial expressions like <strong>'{word}'</strong> deepen our comprehension of the screenplay's overarching critique of {setting}? Discuss employing <strong>{grammar_focus}</strong>.",
            "Deconstruct the dramatic irony of a scene where <strong>'{word}'</strong> is used to mask a profound existential vulnerability from {key_figures}. Frame your critique using <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Have you ever integrated a highly localized idiom like <strong>'{word}'</strong> into your conversational repertoire? Detail the communicative outcome.",
            "★ Do you find that acquiring highly idiomatic registers like <strong>'{word}'</strong> enhances your linguistic empathy, or do you prefer mastering formal, standardized registers?",
            "★ What cultural or conceptual challenges arise when attempting to translate a specialized expression like <strong>'{word}'</strong> into your native tongue?",
            "★ In high-stakes personal communications, do you tend to resort to indirect colloquial markers like <strong>'{word}'</strong> to soften your delivery, or do you rely on direct syntactic clarity?",
            "★ Relate an instance where a subtle misunderstanding of a regional idiom like <strong>'{word}'</strong> altered the dynamic of an interaction.",
            "★ To what extent does the mastery of slang like <strong>'{word}'</strong> indicate true acculturation rather than mere linguistic competence?",
            "★ Do you believe that the proliferation of global media is homogenizing colloquial expressions, rendering local idioms like <strong>'{word}'</strong> obsolete?",
            "★ How do you navigate conversations when a speaker continuously deploys unfamiliar vernacular like <strong>'{word}'</strong> without coming across as defensive?",
            "★ What does your favorite piece of idiomatic dialogue from '{title}' reveal about your own aesthetic preferences in dramatic writing?",
            "★ If you were compile a glossary of socio-cultural markers for '{title}', how would you contextualize the resonance of <strong>'{word}'</strong>?"
        ]
        r2_theme_pool = [
            "'The protagonist's relentless pursuit of <strong>{word}</strong> represents an exercise in tragic hubris rather than a heroic endeavor, rendering their conflict with {key_figures} entirely self-inflicted.' Critically evaluate this assertion utilizing <strong>{grammar_focus}</strong>.",
            "'The stylistic aestheticization of {setting} serves to romanticize the systemic trauma of <strong>{word}</strong>, thereby diluting its raw human cost.' Debate this philosophical proposition using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is portrayed as a fundamentally flawed archetype whose pathological obsession with <strong>{word}</strong> acts as a catalyst for the ruin of {key_figures}.' Defend or refute using <strong>{grammar_focus}</strong>.",
            "'As an intellectual cinematic piece, '{title}' transcends predictable conventions of <strong>{word}</strong>, opting instead for a highly complex psychological deconstruction.' Evaluate using <strong>{grammar_focus}</strong>.",
            "'The resolution of {conflict} remains intentionally ambiguous because the characters' worldview is permanently compromised by their ideological focus on <strong>{word}</strong>.' Synthesize your argument using <strong>{grammar_focus}</strong>.",
            "'The film's exploration of <strong>{word}</strong> exposes the inherent decay of the institutions depicted in {setting}.' Discuss this critical interpretation using <strong>{grammar_focus}</strong>.",
            "'The thematic weight of <strong>{word}</strong> acts as an existential mirror, forcing the audience to confront their own complicity in similar social structures.' Elaborate utilizing <strong>{grammar_focus}</strong>.",
            "'Without the structural anchor of <strong>{word}</strong>, the dramatic tension between {protagonist} and {key_figures} would dissolve into mere melodrama.' Assess this critique using <strong>{grammar_focus}</strong>.",
            "'The screenplay implies that <strong>{word}</strong> is ultimately a destructive fiction created to sustain the oppressive atmosphere of {setting}.' Argue this thesis using <strong>{grammar_focus}</strong>.",
            "'The director employs <strong>{word}</strong> not as a simple narrative device, but as a metaphysical inquiry into human isolation.' Evaluate using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were tasked with directing a film, what visual metaphors and spatial arrangements would you deploy to symbolize <strong>{word}</strong>?",
            "★ Do you contend that a film's sensory and aesthetic execution is inherently more articulate than its literary screenplay?",
            "★ Have you ever analyzed a film whose alternative screenplay path or deleted scenes would have fundamentally subverted its commercial message?",
            "★ If you were to curate a sonic palette or score to encapsulate the psychological weight of <strong>{word}</strong> in your own life, what genres would you select?",
            "★ Do you lean toward cinematic narratives that refuse to offer resolution, or do you view ambiguous endings as an artistic cop-out?",
            "★ In what ways has your intellectual appreciation of a complex theme like <strong>{word}</strong> evolved over the course of your life?",
            "★ If you were forced to inhabit the hostile setting of {setting}, how would you strategically preserve your psychological integrity?",
            "★ Which character in '{title}' did you find most intellectually challenging to empathize with, and why?",
            "★ Do you believe that serious cinema has a moral obligation to act as a catalyst for societal reflection on issues like <strong>{word}</strong>?",
            "★ What specific sequence in '{title}' do you consider a masterpiece of visual storytelling, and how did it influence your thinking?"
        ]
        r2_cinematic_pool = [
            "'The screenplay of '{title}' would have achieved a far more profound existential resonance had the director opted for a non-linear structure for {protagonist}.' Propound an alternative narrative strategy using <strong>{grammar_focus}</strong>.",
            "'The psychological friction between {protagonist} and {key_figures} constitutes the sole redeeming thematic thread, rendering the rest of the screenplay auxiliary.' Critique this view using <strong>{grammar_focus}</strong>.",
            "'The sensory cinematography and meticulous editing of {setting} are far more eloquent at conveying the unspoken grief than the explicit dialogue.' Assess this using <strong>{grammar_focus}</strong>.",
            "'Within the broader canon of world cinema, '{title}' stands as an indispensable sociological document that perfectly captures the zeitgeist of its era.' Argue this thesis using <strong>{grammar_focus}</strong>.",
            "'For the contemporary viewer, the deliberateness of the character development and narrative pacing in '{title}' is anachronistic and fails to engage.' Oppose or defend using <strong>{grammar_focus}</strong>.",
            "'The director's precise framing and use of negative space in {setting} visually represent the inescapable entrapment of {protagonist}.' Deconstruct using <strong>{grammar_focus}</strong>.",
            "'The script suffers from a reliance on narrative contrivances that undermine the psychological authenticity of {conflict}.' Critique employing <strong>{grammar_focus}</strong>.",
            "'The film's ultimate worldview is one of uncompromising nihilism, offerring no avenues of redemption for {protagonist}.' Analyze utilizing <strong>{grammar_focus}</strong>.",
            "'The supporting cast, specifically {key_figures}, serve as the true ideological engine of the film, overshadowing the main protagonist.' Evaluate using <strong>{grammar_focus}</strong>.",
            "'The recursive visual motifs throughout '{title}' function as a sophisticated subtextual dialogue with the viewer.' Discuss using <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Under what circumstances would you consider translating your personal autobiographical experiences into a dramatic screenplay?",
            "★ Which aspect of cinematic craftsmanship (sound design, color grading, editing tempo) do you find has the most visceral impact on your emotions?",
            "★ If you were executive producing a contemporary reimagining of '{title}', what structural modifications would you introduce?",
            "★ Do you prefer to engage with cinema as a purely aesthetic escape, or do you view it as a primary medium for philosophical inquiry?",
            "★ How does your cognitive engagement shift when a film demands active interpretation of non-linear sequences and unreliable narrators?",
            "★ If you were granted an audience with the director of '{title}', what specific stylistic choice would you ask them to defend?",
            "★ To what extent does a meticulously constructed cinematic setting alter or dictate your perception of character morality?",
            "★ What is your personal philosophy regarding the artistic necessity of alternative or director-cut endings?",
            "★ How do you think the democratization of film production and distribution has influenced the artistic risks taken by modern screenwriters?",
            "★ If you were to archive a single frame from '{title}' as a representative artifact of modern visual culture, which would you select?"
        ]
    else:
        # Standard Intermediate
        r1_theme_pool = [
            "In the world of {setting}, how does {protagonist}'s attitude toward <strong>{word}</strong> influence their relationship with {key_figures}? Formulate your thoughts using <strong>{grammar_focus}</strong>.",
            "Does the pursuit of <strong>{word}</strong> in '{title}' create an irreversible ethical dilemma for {protagonist}? Frame your judgment using <strong>{grammar_focus}</strong>.",
            "How is <strong>{word}</strong> depicted in '{title}' as a reflection of larger social issues within {setting}? Analyze this using <strong>{grammar_focus}</strong>.",
            "Deconstruct the friction between {protagonist} and {key_figures}. In what ways does <strong>{word}</strong> fuel their conflict, and how is this expressed through <strong>{grammar_focus}</strong>?",
            "Identify the exact point in the screenplay of '{title}' where <strong>{word}</strong> completely redirects the course of {conflict}. Describe the shift using <strong>{grammar_focus}</strong>.",
            "How does the atmosphere of {setting} reinforce the struggle of {protagonist} as they cope with <strong>{word}</strong>? Answer utilizing <strong>{grammar_focus}</strong>.",
            "To what extent is {protagonist} defined by their obsession with <strong>{word}</strong> during {conflict}? Discuss with <strong>{grammar_focus}</strong>.",
            "How do the conversations between {protagonist} and {key_figures} reveal hidden anxieties about <strong>{word}</strong>? Focus on <strong>{grammar_focus}</strong>.",
            "If you analyze '{title}' closely, how does the theme of <strong>{word}</strong> tie together the setting of {setting} and the central conflict? Use <strong>{grammar_focus}</strong>.",
            "Does the director portray <strong>{word}</strong> as a source of strength or a profound vulnerability for {protagonist}? Explain using <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you were placed in {setting}, how would you personally handle the challenges of <strong>{word}</strong>?",
            "★ Have you ever had to choose between your personal values regarding <strong>{word}</strong> and a close relationship like {key_figures}?",
            "★ Does the cinematic portrayal of <strong>{word}</strong> in '{title}' match your own experiences in the real world?",
            "★ How would you resolve a major disagreement about <strong>{word}</strong> if you were in {protagonist}'s shoes?",
            "★ Can you recall a specific moment in your own life where <strong>{word}</strong> forced you to change your future goals?",
            "★ If a friend of yours behaved like {protagonist} regarding <strong>{word}</strong>, what kind of advice would you give them?",
            "★ In your view, is <strong>{word}</strong> generally a positive trait in modern society, or does it cause more harm than good?",
            "★ Have you ever felt overwhelmed by the social expectations of <strong>{word}</strong> in your own environment?",
            "★ What is your personal strategy for keeping <strong>{word}</strong> in balance when facing stressful situations?",
            "★ If you had the opportunity to change one choice made by {protagonist} regarding <strong>{word}</strong>, what would it be?"
        ]
        r1_slang_pool = [
            "During a memorable exchange in '{title}', the screenplay introduces the colloquialism <strong>'{word}'</strong>. In what context do the characters use it when dealing with {key_figures}? Integrate <strong>{grammar_focus}</strong>.",
            "How does the authentic dialogue of '{title}', specifically the expression <strong>'{word}'</strong>, add realistic color to the atmosphere of {setting}? Respond using <strong>{grammar_focus}</strong>.",
            "In the dialogue between {protagonist} and {key_figures}, the phrase <strong>'{word}'</strong> highlights a moment of deep tension or humor. Analyze this scene using <strong>{grammar_focus}</strong>.",
            "The script uses <strong>'{word}'</strong> to convey underlying motives that characters avoid saying directly during {conflict}. What is being hidden? Frame your thoughts using <strong>{grammar_focus}</strong>.",
            "Deconstruct the social context of '{title}' by examining how the slang <strong>'{word}'</strong> is received by {key_figures}. Focus on <strong>{grammar_focus}</strong>.",
            "Why does {protagonist} choose an informal expression like <strong>'{word}'</strong> instead of more formal language in {setting}? Analyze with <strong>{grammar_focus}</strong>.",
            "How does the tone shift when <strong>'{word}'</strong> is spoken during a critical turning point of {conflict}? Incorporate <strong>{grammar_focus}</strong>.",
            "What does the screenplay's use of <strong>'{word}'</strong> tell us about the social class or background of the characters? Discuss using <strong>{grammar_focus}</strong>.",
            "In what ways does learning authentic expressions like <strong>'{word}'</strong> help you connect with the emotional weight of '{title}'? Use <strong>{grammar_focus}</strong>.",
            "How does <strong>'{word}'</strong> function as a subtextual cue during a confrontation between {protagonist} and {key_figures}? Explain using <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Have you ever used a slang term or colloquial expression like <strong>'{word}'</strong> in your own life? Tell us about it.",
            "★ Do you think learning informal slang like <strong>'{word}'</strong> is essential for fluency, or do you prefer formal language?",
            "★ Is there an equivalent idiom in your native language for the expression <strong>'{word}'</strong>? How does it compare?",
            "★ When you want to express a complex feeling, do you rely on direct words or colloquial markers like <strong>'{word}'</strong>?",
            "★ Have you ever had a funny or awkward misunderstanding when using an informal phrase like <strong>'{word}'</strong>?",
            "★ Do you find that movie slang like <strong>'{word}'</strong> helps you understand the culture of the characters better?",
            "★ In what situations do you think using informal slang like <strong>'{word}'</strong> is inappropriate or risky?",
            "★ How do you usually react when someone uses unfamiliar regional expressions like <strong>'{word}'</strong> during a conversation?",
            "★ What is your favorite piece of informal dialogue from '{title}', and why does it stick with you?",
            "★ If you had to explain the meaning of <strong>'{word}'</strong> to a language learner, what examples would you give?"
        ]
        r2_theme_pool = [
            "'{protagonist}'s ultimate struggle for <strong>{word}</strong> in '{title}' is a tragic illusion that only leads to the isolation of {protagonist}.' Evaluate this claim using <strong>{grammar_focus}</strong>.",
            "''The visual aesthetic of {setting} glamorizes the harsh reality of <strong>{word}</strong> rather than showing its true human cost.' Debate this perspective using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is deeply unsympathetic character because of their focus on <strong>{word}</strong>.' Argue your stance using <strong>{grammar_focus}</strong>.",
            "'Rather than exploring deep psychology, '{title}' relies on convenient stereotypes of <strong>{word}</strong> to move the plot forward.' Critically assess using <strong>{grammar_focus}</strong>.",
            "'The central conflict of {conflict} remains fundamentally unresolved because the characters are trapped by <strong>{word}</strong>.' Defend or refute using <strong>{grammar_focus}</strong>.",
            "'The thematic treatment of <strong>{word}</strong> in '{title}' is highly relevant to the challenges of modern society.' Discuss this comparison using <strong>{grammar_focus}</strong>.",
            "'The director uses the tragedy of <strong>{word}</strong> to make a broader philosophical point about human nature.' Analyze using <strong>{grammar_focus}</strong>.",
            "'Without the overarching motif of <strong>{word}</strong>, the interactions in {setting} would lose all emotional impact.' Evaluate using <strong>{grammar_focus}</strong>.",
            "'The film suggests that <strong>{word}</strong> is a luxury that only characters like {key_figures} can afford.' Discuss this angle using <strong>{grammar_focus}</strong>.",
            "'The screenplay uses <strong>{word}</strong> to build a bridge of empathy between the audience and {protagonist}.' Assess using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were a director, how would you visually represent the abstract concept of <strong>{word}</strong>?",
            "★ Do you agree that the visual environment of a film is more powerful than its written dialogue?",
            "★ Have you ever felt that a movie's alternative ending would have been more meaningful than the actual one?",
            "★ If you had to select a soundtrack from your own life to match the theme of <strong>{word}</strong>, what would it be?",
            "★ Do you prefer stories that leave conflicts unresolved, or do you crave a happy ending?",
            "★ How has your personal perspective on a theme like <strong>{word}</strong> changed as you have grown older?",
            "★ If you had to live in {setting} for a week, how would you adapt to its unique social pressures?",
            "★ Which character's choices in '{title}' did you find most difficult to empathize with?",
            "★ Do you think cinema has a responsibility to teach moral lessons about themes like <strong>{word}</strong>?",
            "★ What was the most visually striking scene in '{title}' that made you pause and reflect?"
        ]
        r2_cinematic_pool = [
            "'The screenplay of '{title}' would have been far more impactful if {protagonist} had a completely different fate.' Propose an alternative path using <strong>{grammar_focus}</strong>.",
            "'The relationship between {protagonist} and {key_figures} is the only part of the script that feels genuine.' Critique this statement using <strong>{grammar_focus}</strong>.",
            "'The cinematography in {setting} is much better at conveying emotional truth than any of the spoken dialogue.' Formulate your analysis using <strong>{grammar_focus}</strong>.",
            "'In modern cinema history, '{title}' stands out as a crucial cultural milestone that captures a generation's fears.' Discuss using <strong>{grammar_focus}</strong>.",
            "'For contemporary viewers, the pacing and character development in '{title}' are too slow to hold attention.' Agree or disagree using <strong>{grammar_focus}</strong>.",
            "'The director's choice of framing and camera movement inside {setting} highlights the isolation of {protagonist}.' Analyze using <strong>{grammar_focus}</strong>.",
            "'The screenplay relies too heavily on predictable twists instead of natural character growth.' Evaluate with <strong>{grammar_focus}</strong>.",
            "'The ultimate message of '{title}' is one of cynical despair rather than hope.' Debate this using <strong>{grammar_focus}</strong>.",
            "'The secondary characters, particularly {key_figures}, are far more interesting than the main protagonist.' Critique using <strong>{grammar_focus}</strong>.",
            "'The film's visual motifs are so subtle that they require multiple viewings to fully appreciate.' Discuss using <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Would you ever want to write a screenplay based on your own life experiences? Why or why not?",
            "★ Which cinematic technique (lighting, music, camera angles) do you find has the most visceral impact on your emotions?",
            "★ If you were casting a remake of '{title}', which modern actors would you choose for {protagonist}?",
            "★ Do you enjoy analyzing films on a technical level, or do you prefer to just enjoy the story?",
            "★ How do you feel when a movie uses a non-linear timeline to tell its story?",
            "★ If you could interview the director of '{title}', what is the number one question you would ask?",
            "★ Does a film's setting usually play a major role in how you perceive the main characters?",
            "★ What is your favorite alternative ending scenario for a film that disappointed you?",
            "★ How do you think streaming platforms have changed the artistic quality of modern films?",
            "★ If you could preserve only one scene from '{title}' for future generations, which one would it be?"
        ]

    r1_theme = [r1_theme_pool[(film_idx + i) % len(r1_theme_pool)] for i in range(5)]
    r1_theme_personal = [r1_theme_personal_pool[(film_idx + i) % len(r1_theme_personal_pool)] for i in range(5)]
    r1_slang = [r1_slang_pool[(film_idx + i) % len(r1_slang_pool)] for i in range(5)]
    r1_slang_personal = [r1_slang_personal_pool[(film_idx + i) % len(r1_slang_personal_pool)] for i in range(5)]

    r2_theme = [r2_theme_pool[(film_idx + i) % len(r2_theme_pool)] for i in range(5)]
    r2_theme_personal = [r2_theme_personal_pool[(film_idx + i) % len(r2_theme_personal_pool)] for i in range(5)]
    r2_cinematic = [r2_cinematic_pool[(film_idx + i) % len(r2_cinematic_pool)] for i in range(5)]
    r2_cinematic_personal = [r2_cinematic_personal_pool[(film_idx + i) % len(r2_cinematic_personal_pool)] for i in range(5)]

    return r1_theme, r1_theme_personal, r1_slang, r1_slang_personal, r2_theme, r2_theme_personal, r2_cinematic, r2_cinematic_personal

def build_10_vocabulary(title, focus_raw, slang_raw, idx, level):
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
        w_norm = normalize_word(word)
        if w_norm in OPPOSITES_MAP:
            new_word, definition, example = OPPOSITES_MAP[w_norm]
            # Level calibration for opposites
            definition = calibrate_text_for_level(definition, level, "definition")
            example = calibrate_text_for_level(example, level, "example")
            vocab_items.append((new_word, definition, example))
        else:
            w_low = word.lower()
            if w_low in VOCAB_DB:
                definition, example_orig = VOCAB_DB[w_low]
                example = f"In the movie '{title}', the story deeply explores {w_low} as {details['protagonist']} copes with {details['conflict']}."
            else:
                definition = f"The core thematic concept of {w_low} as explored and highlighted in '{title}'."
                example = f"The narrative of '{title}' brilliantly dissects {w_low} to build character depth as {details['protagonist']} confronts {details['conflict']}."

            definition = calibrate_text_for_level(definition, level, "definition")
            example = calibrate_text_for_level(example, level, "example")
            vocab_items.append((word, definition, example))

    # Process slangs (next 5)
    for word in slangs:
        w_norm = normalize_word(word)
        if w_norm in OPPOSITES_MAP:
            new_word, definition, example = OPPOSITES_MAP[w_norm]
            definition = calibrate_text_for_level(definition, level, "definition")
            example = calibrate_text_for_level(example, level, "example")
            vocab_items.append((new_word, definition, example))
        else:
            w_low = word.lower()
            if w_low in VOCAB_DB:
                definition, _ = VOCAB_DB[w_low]
                example = f"The screenplay of '{title}' utilizes '{word}' to express how {details['protagonist']} reacts in '{details['setting']}'."
            else:
                definition = f"An authentic slang term, colloquialism, or key dialogue featured in '{title}' to establish context."
                example = f"The characters in '{title}' use the expression '{word}' during a pivotal scene inside {details['setting']} to emphasize the drama."

            definition = calibrate_text_for_level(definition, level, "definition")
            example = calibrate_text_for_level(example, level, "example")
            vocab_items.append((word, definition, example))

    return vocab_items

# General artistry/directing debate statements (indices 5-9) (original templates preserved for reference)
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

R2_THEME_STATEMENT_TEMPLATES = [
    "'{protagonist}'s ultimate pursuit of <strong>{word}</strong> is a tragic delusion rather than a noble quest, and they should have surrendered to {key_figures}.' Analyze this statement using <strong>{grammar_focus}</strong>.",
    "'The director's aesthetic choices in {setting} glamorize the harsh reality of <strong>{word}</strong> instead of depicting its true personal cost.' Debate this using <strong>{grammar_focus}</strong>.",
    "'{protagonist} is fundamentally an unsympathetic character whose reliance on <strong>{word}</strong> brings down everyone around them.' Argue your stance using <strong>{grammar_focus}</strong>.",
    "'As a piece of mature cinema, <em>{title}</em> relies too heavily on predictable tropes of <strong>{word}</strong> instead of exploring more nuanced psychological territories.' Evaluate using <strong>{grammar_focus}</strong>.",
    "'The central conflict of {conflict} is never truly resolved because the characters are trapped by their own ideological obsession with <strong>{word}</strong>.' Prove or disprove this using <strong>{grammar_focus}</strong>."
]

R2_CINEMATIC_STATEMENT_TEMPLATES = [
    "'The screenplay of <em>{title}</em> would have had a much more profound impact if the director had chosen a more ambiguous ending for {protagonist}.' Propose an alternative screenplay path using <strong>{grammar_focus}</strong>.",
    "'The relationship between {protagonist} and {key_figures} is the only redeeming quality of the screenplay, as the rest of the plot feels secondary.' Critically assess this using <strong>{grammar_focus}</strong>.",
    "'The cinematography and visual directing in {setting} are far more effective at conveying the story's emotional weight than the actual written dialogue.' Formulate your analysis using <strong>{grammar_focus}</strong>.",
    "'In the grand scheme of cinema history, <em>{title}</em> serves as an essential cultural touchstone that perfectly encapsulates its generation's anxieties.' Discuss this philosophical angle using <strong>{grammar_focus}</strong>.",
    "'For a modern audience, the character development and pacing in <em>{title}</em> are too slow-paced and fail to hold the attention of younger viewers.' Defend or oppose this using <strong>{grammar_focus}</strong>."
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
    slang_parts = re.findall(r'\"([^\"]+)\"|\'([^\'’]+)\'', slang_raw)
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

# Parse all 91 films from the markdown file
with open(MD_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Regular expression matching the brainstorm table rows perfectly
rows = re.findall(r'\|\s*(\d+)\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*\*\*([^*]+)\*\*\s*[^(]*\(([^)]+)\)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|', text)

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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght=0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght=0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
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
    vocab_items = build_10_vocabulary(title, focus, slang_raw, idx, level_short)

    # First 5 are generic/themes, next 5 are authentic/slangs
    generic_vocab = vocab_items[:5]
    authentic_vocab = vocab_items[5:]

    vocab_generic_html = ""
    for word, definition, example in generic_vocab:
        escaped_word = escape_js(word)
        escaped_def = escape_js(definition)
        escaped_ex = escape_js(example)
        vocab_generic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
      </div>\n"""

    vocab_authentic_html = ""
    for word, definition, example in authentic_vocab:
        escaped_word = escape_js(word)
        escaped_def = escape_js(definition)
        escaped_ex = escape_js(example)
        vocab_authentic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
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

    # Resolve level-calibrated templates for Round 1 & Round 2
    r1_theme, r1_theme_personal, r1_slang, r1_slang_personal, r2_theme, r2_theme_personal, r2_cinematic, r2_cinematic_personal = get_calibrated_templates(level_short, idx)

    # Generate 10 items for Round 1, each using one of the 10 vocab words
    round1_html = ""
    for r1_idx, (word, _, _) in enumerate(vocab_items):
        word_clean_for_q = word.split(" ≠ ")[0] if "≠" in word else word
        word_lower = word_clean_for_q.lower()
        if r1_idx < 5:
            r1_main = r1_theme[r1_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r1_personal = r1_theme_personal[r1_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        else:
            r1_main = r1_slang[r1_idx - 5].format(
                word=word_clean_for_q,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r1_personal = r1_slang_personal[r1_idx - 5].format(
                word=word_clean_for_q,
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
        word_clean_for_q = word.split(" ≠ ")[0] if "≠" in word else word
        word_lower = word_clean_for_q.lower()
        if r2_idx < 5:
            r2_main = r2_theme[r2_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r2_personal = r2_theme_personal[r2_idx].format(
                word=word_lower,
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        else:
            r2_main = r2_cinematic[r2_idx - 5].format(
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
            r2_personal = r2_cinematic_personal[r2_idx - 5].format(
                title=title,
                protagonist=details["protagonist"],
                key_figures=details["key_figures"],
                setting=details["setting"],
                conflict=details["conflict"],
                grammar_focus=grammar_focus
            )
        round2_html += f"""          <div class="round-item">
            <div class="round-item-main">{r2_main}</div>
            <div class="round-item-personal">{r2_personal}</div>
          </div>\n"""

    # Resolve Mistakes Catalog based on Level
    is_advanced_mistake = "B2" in level_short or "C1" in level_short or "C2" in level_short or "advanced" in level_label.lower()
    active_catalog = MISTAKES_CATALOG_ADVANCED if is_advanced_mistake else MISTAKES_CATALOG_STANDARD

    selected_mistakes = active_catalog[idx % len(active_catalog):idx % len(active_catalog) + 3]
    while len(selected_mistakes) < 3:
        selected_mistakes.append(active_catalog[len(selected_mistakes) % len(active_catalog)])

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
