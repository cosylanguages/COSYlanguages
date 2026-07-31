# Python script to generate all 91 Cinema Club sessions programmatically.
# This script parses the cinema brainstorm markdown table and generates highly unique, non-duplicative sessions with 10 vocabulary units, 10 Round 1 questions, and 10 Round 2 statements.
import os
import re

MD_PATH = "planning/notebook/cinema_club_brainstorm.md"
GRAMMAR_MD_PATH = "planning/notebook/grammatical_topics_brainstorm.md"
OUTPUT_DIR = "events/sessions/cinema-club"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Parse grammar mappings from planning/notebook/grammatical_topics_brainstorm.md
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
                   'Admitting fear is portrayed as a source of strength and emotional vulnerability.'),
 'cinematography': ('the art of making motion pictures, including camera work and lighting.',
                    'The film is celebrated for its stunning cinematography and visual storytelling.'),
 'narrative pacing': ('the speed at which a story unfolds, balancing fast action with slow reflection.',
                      'The director uses tight narrative pacing to maintain continuous tension.'),
 'character arc': ('the evolutionary journey of a character over the course of a story.',
                   'Her compelling character arc shows a shift from vulnerability to complete independence.'),
 'visual motifs': ('recurring visual elements or symbols that carry thematic significance.',
                   'The movie utilizes recurring visual motifs of shadows to highlight isolation.'),
 'climax': ('the most intense, exciting, or important point of the story.',
            'The dramatic climax of the film resolves the long-standing conflict.'),
 'protagonist': ('the leading character or one of the major characters in a drama.',
                 'The protagonist struggles to find truth amidst a web of deception.'),
 'antagonist': ('a person who actively opposes or is hostile to someone or something; an adversary.',
                'The antagonist orchestrates a complex plan to control the city.'),
 'screenplay': ('the written text of a play, movie, or broadcast.',
                'The brilliant screenplay features sharp dialogues and deep emotional layers.'),
 'dialogue': ('conversation between two or more people in a film or play.',
              'The natural, witty dialogue adds realism to the high-society setting.'),
 'thematic depth': ('the profound exploration of complex ideas and universal human truths.',
                    'The film achieves incredible thematic depth by exploring grief and devotion.'),
 'opening scene': ('the introductory sequence that sets the tone, style, and context of the film.',
                   'The opening scene immediately immerses the audience in the chaotic setting.'),
 'pivotal moment': ('a critical turning point that significantly influences the outcome of the story.',
                    'A pivotal moment occurs when the main characters decide to escape.'),
 'dramatic irony': ('a literary technique where the audience knows full well what the characters do not.',
                    'The film uses dramatic irony to build suspense as the deception unfolds.'),
 'cinematic adaptation': ('the transfer of a written work, such as a novel, to a feature film.',
                          'This cinematic adaptation preserves the emotional essence of the original book.'),
 'fourth-wall break': ('an instance where a character addresses the audience directly, bypassing the story barrier.',
                       'Her frequent fourth-wall breaks create a unique, humorous connection with the viewer.'),
 'mise-en-scène': ('the arrangement of scenery, props, and stage properties in a film.',
                   'The meticulous mise-en-scène evokes a warm, nostalgic atmosphere.'),
 'subtext': ('the underlying or implicit meaning of a spoken dialogue or scene.',
             'The intense dinner scene is filled with silent subtext and unvoiced resentment.'),
 'monologue': ('a long speech by one actor in a play or movie.',
               'His passionate monologue at the courtroom is the emotional peak of the story.'),
 'tone marker': ('a linguistic or visual cue that indicates the emotional register of a scene.',
                 'The sudden shift in music acts as a dark tone marker for the upcoming scene.'),
 'genre convention': ('a common element, trope, or technique associated with a specific film genre.',
                      'The director subverts standard horror genre conventions to surprise the audience.')}

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
           'setting': 'a conservative Eastern European shtetl in the early 20th century'},
 'The Odyssey': {'conflict': 'overcoming unhealthy relationships and finding emotional healing',
                 'key_figures': 'her past partners, storm spirits, and inner shadows',
                 'protagonist': 'Florence',
                 'setting': 'stormy seas, nostalgic motel rooms, and abstract landscapes'},
 'Lending My Wings': {'conflict': 'building therapeutic trust and exploring emotional vulnerability',
                      'key_figures': 'her patients, colleagues, and family members',
                      'protagonist': 'the therapist',
                      'setting': 'a quiet counseling office and personal memory spaces'},
 "L'attente": {'conflict': 'navigating patience, romantic tension, and expectation under subconscious illusions',
               'key_figures': 'the loved one, passing strangers, and inner voice',
               'protagonist': 'the waiting protagonist',
               'setting': 'a nostalgic Parisian train station and quiet platforms'},
 'Karlik Nos (Dwarf Nose)': {'conflict': 'overcoming a witch\'s curse, discovering inner beauty, and proving loyalty',
                             'key_figures': 'the evil witch, the goose Mimi, and his family',
                             'protagonist': 'Jacob (the dwarf Nose)',
                             'setting': 'a bustling fairy tale marketplace and the royal palace kitchen'},
 'Destino': {'conflict': 'chasing destiny across surreal desert landscapes and shifting monuments of time',
             'key_figures': 'Chronos, the stone statues, and the flying dancers',
             'protagonist': 'the mortal woman',
             'setting': 'Salvador Dali\'s surreal desert dreamscapes and hollow monuments'},
 '"Once Upon A Time..."': {'conflict': 'launching a revolutionary millinery boutique against traditional standards of high society',
                           'key_figures': 'her sister Antoinette, Boy Capel, and wealthy society customers',
                           'protagonist': 'Gabrielle Chanel',
                           'setting': 'her hat shop in 1913 Deauville, France'},
 '"Once and Forever"': {'conflict': 'confronting artistic vanity, challenging acting roles, and the legacy of Coco Chanel',
                        'key_figures': 'the film director, the older Coco Chanel, and the film crew',
                        'protagonist': 'the young actress',
                        'setting': 'Parisian film studios and lavish dress rehearsals'}}

CLEAN_FILM_DETAILS = {k.replace('"', '').strip(): v for k, v in FILM_DETAILS.items()}

HANDCRAFTED_LANG_EXTRAS = {
    "Ratatouille": {
        "themes": ["cuisine de Paris", "passion du goût", "chef de cuisine"],
        "slangs": ["bonne recette", "restaurateur"]
    },
    "Incendies": {
        "themes": ["secret de famille", "promesse de mère", "recherche de vérité"],
        "slangs": ["testament", "notaire"]
    },
    "Radin": {
        "themes": ["obsession d'argent", "économie extrême", "générosité cachée"],
        "slangs": ["banquier", "calculateur"]
    },
    "L'attente": {
        "themes": ["patience et silence", "illusion amoureuse", "espoir sur le quai"],
        "slangs": ["retrouvailles", "chemin de fer"]
    },
    "Once Upon A Time...": {
        "themes": ["création de mode", "couture révolutionnaire", "haute société de Deauville"],
        "slangs": ["boutique de chapeaux", "simplicité moderne"]
    },
    "Serebryanye Konki (Silver Skates)": {
        "themes": ["петербургские каналы", "классовые барьеры", "кража на льду"],
        "slangs": ["карманники", "зимний дворец"]
    },
    "Karlik Nos (Dwarf Nose)": {
        "themes": ["ведьмино проклятие", "верная гусыня", "рыночная площадь"],
        "slangs": ["чудо-зелье", "королевский повар"]
    },
    "La Valla (The Barrier)": {
        "themes": ["barrera de Madrid", "resistencia clandestina", "control de fronteras"],
        "slangs": ["salvoconducto", "toque de queda"]
    },
    "Lending My Wings": {
        "themes": ["vulnerabilidad mental", "empatía terapéutica", "búsqueda de confianza"],
        "slangs": ["psicoterapeuta", "sesión de apoyo"]
    }
}

def get_film_specific_extras(title, details, lang="en"):
    title_clean = title.replace('"', '').strip()
    if title_clean in HANDCRAFTED_LANG_EXTRAS:
        return (
            HANDCRAFTED_LANG_EXTRAS[title_clean]["themes"],
            HANDCRAFTED_LANG_EXTRAS[title_clean]["slangs"]
        )
    return [], []

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
    is_b1 = "B1" in level or "intermediate" in level.lower() and "upper" not in level.lower()
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
    elif is_b1:
        text = text.replace("meticulously", "carefully").replace("scrutinizes", "examines")
        text = text.replace("existential", "personal").replace("sociological", "social")
        text = text.replace("psychological", "mental").replace("paradigm", "model")
        text = text.replace("deconstruct", "analyze").replace("Deconstruct", "Analyze")
        text = text.replace("ramifications", "consequences")
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
            "When we first start '{title}' in {setting}, how do we see <strong>{word}</strong>? Talk about it using <strong>{grammar_focus}</strong>.",
            "How does the opening of the film show <strong>{word}</strong> to make us feel the atmosphere? Describe it using <strong>{grammar_focus}</strong>.",
            "As the story goes on, does <strong>{word}</strong> make things hard for {protagonist}? Use <strong>{grammar_focus}</strong> to explain.",
            "How do {protagonist} and {key_figures} feel when they face <strong>{word}</strong> in {setting}? Use <strong>{grammar_focus}</strong>.",
            "What does {protagonist} do because of <strong>{word}</strong>? Answer using <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you were in {setting}, how would you live with <strong>{word}</strong>?",
            "★ Have you ever felt a similar feeling of <strong>{word}</strong> in your own life?",
            "★ Does the story of <strong>{word}</strong> in the movie feel like real life to you?",
            "★ What is the best way to handle <strong>{word}</strong> when you are stressed?",
            "★ If you could help {protagonist} with <strong>{word}</strong>, what would you say?"
        ]
        r1_slang_pool = [
            "The characters say <strong>'{word}'</strong> when they have a secret in {setting}. Why do they say it? Use <strong>{grammar_focus}</strong>.",
            "Why does {protagonist} use the word <strong>'{word}'</strong> during a very important scene? Talk about it with <strong>{grammar_focus}</strong>.",
            "When {key_figures} say <strong>'{word}'</strong>, what does it tell us about their plans? Answer with <strong>{grammar_focus}</strong>.",
            "How does the ending change when we learn the truth about <strong>'{word}'</strong>? Use <strong>{grammar_focus}</strong>.",
            "If {protagonist} did not use <strong>'{word}'</strong>, how would the story end? Speculate with <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Do you like learning slang words like <strong>'{word}'</strong>, or do you prefer normal words?",
            "★ Have you ever heard a word like <strong>'{word}'</strong> in other movies?",
            "★ Is there a word like <strong>'{word}'</strong> in your own language? What is it?",
            "★ When you speak, do you use slang like <strong>'{word}'</strong>?",
            "★ What is your favorite new word from the movie '{title}'?"
        ]
        r2_theme_pool = [
            "'{protagonist}'s story of <strong>{word}</strong> in '{title}' is very sad, and they should be more careful.' Do you agree? Use <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie makes the world of {setting} look too beautiful, but it has a high cost.' Discuss using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is not a nice person because they only care about <strong>{word}</strong>.' Give your opinion using <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie '{title}' is too simple and does not show deep feelings about <strong>{word}</strong>.' Talk about this with <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s problem of {conflict} never ends because they cannot agree on <strong>{word}</strong>.' Explain using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were a film maker, would you make a movie about <strong>{word}</strong>?",
            "★ Do you like movies with beautiful pictures or movies with great dialogue?",
            "★ Do you like the ending of the movie '{title}', or do you want a different ending?",
            "★ Did your ideas about <strong>{word}</strong> change after watching this movie?",
            "★ What was the most beautiful scene in the movie?"
        ]
        r2_cinematic_pool = [
            "'The movie '{title}' would be better if {protagonist} had a happy ending.' Talk about this using <strong>{grammar_focus}</strong>.",
            "'The friendship between {protagonist} and {key_figures} is the best part of the movie.' Explain using <strong>{grammar_focus}</strong>.",
            "'The music and pictures in {setting} are better than the words spoken.' Share your ideas using <strong>{grammar_focus}</strong>.",
            "'The story in '{title}' moves too slowly for a modern audience.' Agree or disagree using <strong>{grammar_focus}</strong>.",
            "'The director does a great job showing {setting} in a realistic way.' Explain using <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Would you like to act in a movie like '{title}'?",
            "★ What kind of movies make you feel happy?",
            "★ If you could meet {protagonist}, what would you say to them?",
            "★ Do you watch movies to learn a language or just for fun?",
            "★ If you could make a movie, what would it be about?"
        ]
    elif is_c1:
        r1_theme_pool = [
            "Deconstruct the visceral opening sequence of '{title}'. How does the visual establishment of <strong>{word}</strong> within {setting} initiate the dramatic tension? Use <strong>{grammar_focus}</strong>.",
            "How does the director strategically introduce the motif of <strong>{word}</strong> early on to prepare the audience for the upcoming conflict? Deploy <strong>{grammar_focus}</strong>.",
            "Analyze the psychological disintegration of {protagonist} as their obsession with <strong>{word}</strong> alienates {key_figures}. Formulate your thesis using <strong>{grammar_focus}</strong>.",
            "In what ways do the quiet, domestic intervals in {setting} heighten the subtextual friction of <strong>{word}</strong>? Discuss using <strong>{grammar_focus}</strong>.",
            "To what degree does {protagonist}'s defense mechanism regarding <strong>{word}</strong> shield them from accepting their ultimate fate? Use <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you had to navigate the intense psychological parameters of {setting}, how would you safeguard your values against <strong>{word}</strong>?",
            "★ Have you ever experienced a paradigm shift where your own understanding of <strong>{word}</strong> was radically challenged?",
            "★ Does the cinematic representation of <strong>{word}</strong> align with the socio-psychological realities you observe today?",
            "★ How do you personally maintain equilibrium when caught in an ideological conflict concerning <strong>{word}</strong>?",
            "★ If you were called upon to intervene in {protagonist}'s descent into <strong>{word}</strong>, what cognitive intervention would you suggest?"
        ]
        r1_slang_pool = [
            "The screenplay deploys the nuanced colloquialism <strong>'{word}'</strong> to mask a dark secret in {setting}. How does this choice build suspense? Focus on <strong>{grammar_focus}</strong>.",
            "How does the organic integration of the phrase <strong>'{word}'</strong> during a crucial confrontation illuminate the power dynamics? Use <strong>{grammar_focus}</strong>.",
            "Deconstruct the linguistic subtext of the scene where <strong>'{word}'</strong> is used to convey a hidden motive during {conflict}. Use <strong>{grammar_focus}</strong>.",
            "How does the climactic revelation of <strong>'{word}'</strong> fundamentally reframe the narrative trajectory and alter our perception? Use <strong>{grammar_focus}</strong>.",
            "If {protagonist} had surrendered their denial of <strong>'{word}'</strong> earlier, how would the screenplay's resolution have changed? Speculate with <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Do you find that acquiring highly idiomatic registers like <strong>'{word}'</strong> enhances your linguistic empathy, or do you prefer formal competence?",
            "★ Have you ever integrated a highly localized idiom like <strong>'{word}'</strong> into your conversational repertoire? Detail the outcome.",
            "★ What conceptual challenges arise when attempting to translate a specialized expression like <strong>'{word}'</strong> into your native tongue?",
            "★ In high-stakes communications, do you tend to resort to indirect colloquial markers like <strong>'{word}'</strong> to soften your delivery?",
            "★ What does your favorite piece of dialogue from '{title}' reveal about your own aesthetic preferences in dramatic writing?"
        ]
        r2_theme_pool = [
            "'{protagonist}'s story of <strong>{word}</strong> in '{title}' is very sad, and they should be more careful.' Do you agree? Use <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie makes the world of {setting} look too beautiful, but it has a high cost.' Discuss using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is not a nice person because they only care about <strong>{word}</strong>.' Give your opinion using <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie '{title}' is too simple and does not show deep feelings about <strong>{word}</strong>.' Talk about this with <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s problem of {conflict} never ends because they cannot agree on <strong>{word}</strong>.' Explain using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were a film maker, would you make a movie about <strong>{word}</strong>?",
            "★ Do you like movies with beautiful pictures or movies with great dialogue?",
            "★ Do you like the ending of the movie '{title}', or do you want a different ending?",
            "★ Did your ideas about <strong>{word}</strong> change after watching this movie?",
            "★ What was the most beautiful scene in the movie?"
        ]
        r2_cinematic_pool = [
            "'The screenplay of '{title}' would have achieved a far more profound existential resonance had the director opted for a non-linear structure.' Speculate using <strong>{grammar_focus}</strong>.",
            "'The supporting cast, specifically {key_figures}, serve as the true ideological engine of '{title}', overshadowing {protagonist}.' Evaluate using <strong>{grammar_focus}</strong>.",
            "'The precise framing and meticulous sound design (or use of silence) in {setting} visually represent absolute entrapment.' Deconstruct with <strong>{grammar_focus}</strong>.",
            "'The recursive visual motifs throughout '{title}' function as a sophisticated subtextual dialogue with the viewer.' Discuss using <strong>{grammar_focus}</strong>.",
            "'The film's ultimate worldview is one of uncompromising nihilism, offering no avenues of redemption.' Debate this using <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Under what circumstances would you consider translating your personal experiences into a dramatic screenplay?",
            "★ Which aspect of cinematic craftsmanship (sound design, color grading, editing tempo) has the most visceral impact on your emotions?",
            "★ If you were executive producing a contemporary reimagining of '{title}', what structural modifications would you introduce?",
            "★ If you were granted an audience with the director of '{title}', what specific stylistic choice would you ask them to defend?",
            "★ If you were to archive a single frame from '{title}' as a representative artifact of modern visual culture, which would you select?"
        ]
    else:
        # Standard Intermediate / Upper-Intermediate
        r1_theme_pool = [
            "When we first enter the world of {setting}, how does the opening scene establish tension through <strong>{word}</strong>? Integrate <strong>{grammar_focus}</strong>.",
            "How does the director introduce the theme of <strong>{word}</strong> early in '{title}' to set the atmospheric tone? Focus on <strong>{grammar_focus}</strong>.",
            "As the narrative progresses, how do the rising anxieties of {protagonist} regarding <strong>{word}</strong> complicate their relationship with {key_figures}? Frame using <strong>{grammar_focus}</strong>.",
            "How do the quiet scenes in {setting} reveal a hidden friction of <strong>{word}</strong> between {protagonist} and {key_figures}? Use <strong>{grammar_focus}</strong>.",
            "What psychological defense mechanisms does {protagonist} use when coping with the harsh reality of <strong>{word}</strong>? Discuss using <strong>{grammar_focus}</strong>."
        ]
        r1_theme_personal_pool = [
            "★ If you were placed in {setting}, how would you personally handle the challenges of <strong>{word}</strong>?",
            "★ Have you ever faced a dilemma where you had to prioritize <strong>{word}</strong> over your relationship with someone like {key_figures}?",
            "★ Does the cinematic portrayal of <strong>{word}</strong> in '{title}' match your own experiences in the real world?",
            "★ What is your personal strategy for keeping <strong>{word}</strong> in balance when facing stressful situations?",
            "★ If you had the opportunity to change one choice made by {protagonist} regarding <strong>{word}</strong>, what would it be?"
        ]
        r1_slang_pool = [
            "Which subtle narrative clues and secrets about <strong>'{word}'</strong> are hidden from us in {setting}? How would you express your deduction using <strong>{grammar_focus}</strong>?",
            "How does the screenplay use the expression <strong>'{word}'</strong> during a crucial turning point to accelerate the suspense? Respond with <strong>{grammar_focus}</strong>.",
            "How does the characters' usage of <strong>'{word}'</strong> reveal their true motives and lies during {conflict}? Formulate with <strong>{grammar_focus}</strong>.",
            "How does the final revelation of <strong>'{word}'</strong> change the audience's entire understanding of the characters' actions? Analyze utilizing <strong>{grammar_focus}</strong>.",
            "If {protagonist} had accepted the truth about <strong>'{word}'</strong> earlier in '{title}', how would the ending have changed? Speculate using <strong>{grammar_focus}</strong>."
        ]
        r1_slang_personal_pool = [
            "★ Have you ever used a slang term or colloquial expression like <strong>'{word}'</strong> in your own life? Tell us about it.",
            "★ Do you think learning informal slang like <strong>'{word}'</strong> is essential for fluency, or do you prefer formal language?",
            "★ Is there an equivalent idiom in your native language for the expression <strong>'{word}'</strong>? How does it compare?",
            "★ When you want to express a complex feeling, do you rely on direct words or colloquial markers like <strong>'{word}'</strong>?",
            "★ What is your favorite piece of informal dialogue from '{title}', and why does it stick with you?"
        ]
        r2_theme_pool = [
            "'{protagonist}'s story of <strong>{word}</strong> in '{title}' is very sad, and they should be more careful.' Do you agree? Use <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie makes the world of {setting} look too beautiful, but it has a high cost.' Discuss using <strong>{grammar_focus}</strong>.",
            "'{protagonist} is not a nice person because they only care about <strong>{word}</strong>.' Give your opinion using <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s movie '{title}' is too simple and does not show deep feelings about <strong>{word}</strong>.' Talk about this with <strong>{grammar_focus}</strong>.",
            "'{protagonist}'s problem of {conflict} never ends because they cannot agree on <strong>{word}</strong>.' Explain using <strong>{grammar_focus}</strong>."
        ]
        r2_theme_personal_pool = [
            "★ If you were a director, how would you visually represent the abstract concept of <strong>{word}</strong>?",
            "★ Do you agree that the visual environment of a film is more powerful than its written dialogue?",
            "★ Have you ever felt that a movie's alternative ending would have been more meaningful than the actual one?",
            "★ If you had to select a soundtrack from your own life to match the theme of <strong>{word}</strong>, what would it be?",
            "★ What was the most visually striking scene in '{title}' that made you pause and reflect?"
        ]
        r2_cinematic_pool = [
            "'The film would have achieved a far more powerful dramatic effect if the director had chosen a completely different setting for '{title}'.' Speculate using <strong>{grammar_focus}</strong>.",
            "'The secondary characters, particularly {key_figures}, are far more interesting and complex than the main protagonist.' Evaluate with <strong>{grammar_focus}</strong>.",
            "'The music and sound design (or the absolute use of silence) are what make '{title}' a cinematic masterpiece.' Discuss using <strong>{grammar_focus}</strong>.",
            "'The recursive visual motifs (like locked doors, fog, or recurring colors) are essential to understanding the film's deeper meaning.' Critique using <strong>{grammar_focus}</strong>.",
            "'The screenplay of '{title}' is ultimately a critique of real-world human behavior rather than just an entertaining genre film.' Argue your thesis using <strong>{grammar_focus}</strong>."
        ]
        r2_cinematic_personal_pool = [
            "★ Would you ever want to write a screenplay based on your own life experiences? Why or why not?",
            "★ Which cinematic technique (lighting, music, camera angles) do you find has the most visceral impact on your emotions?",
            "★ If you were casting a remake of '{title}', which modern actors would you choose for {protagonist}?",
            "★ Do you enjoy analyzing films on a technical level, or do you prefer to just enjoy the story?",
            "★ If you could preserve only one scene from '{title}' for future generations, which one would it be?"
        ]

    # Chronological progression: Map the 5 elements directly from indices 0-4
    r1_theme = r1_theme_pool
    r1_theme_personal = r1_theme_personal_pool
    r1_slang = r1_slang_pool
    r1_slang_personal = r1_slang_personal_pool

    r2_theme = r2_theme_pool
    r2_theme_personal = r2_theme_personal_pool
    r2_cinematic = r2_cinematic_pool
    r2_cinematic_personal = r2_cinematic_personal_pool

    return r1_theme, r1_theme_personal, r1_slang, r1_slang_personal, r2_theme, r2_theme_personal, r2_cinematic, r2_cinematic_personal

def build_10_vocabulary(title, focus_raw, slang_raw, idx, level):
    title_clean = title.replace('"', '').strip()
    if title_clean in HANDCRAFTED_VOCAB_DB:
        return HANDCRAFTED_VOCAB_DB[title_clean]

    themes_raw, slangs_raw = parse_themes_and_slangs(focus_raw, slang_raw)

    # 1. Deduplicate themes and slangs while keeping order
    seen_words = set()
    themes = []
    for t in themes_raw:
        t_norm = normalize_word(t)
        if t_norm not in seen_words:
            themes.append(t)
            seen_words.add(t_norm)

    slangs = []
    for s in slangs_raw:
        s_norm = normalize_word(s)
        if s_norm not in seen_words:
            slangs.append(s)
            seen_words.add(s_norm)

    details = CLEAN_FILM_DETAILS.get(title.replace('"', '').strip(), {
        "protagonist": "the main characters",
        "key_figures": "other figures in the story",
        "setting": "the cinematic world",
        "conflict": "the central conflict"
    })

    extra_themes, extra_slangs = get_film_specific_extras(title, details)

    # 2. Pad themes with extra_themes or fallback themes to exactly 5
    t_idx = 0
    while len(themes) < 5:
        if t_idx < len(extra_themes):
            candidate = extra_themes[t_idx]
        else:
            candidate = FALLBACK_THEMES[(idx + t_idx) % len(FALLBACK_THEMES)]
        t_idx += 1
        candidate_norm = normalize_word(candidate)
        if candidate_norm not in seen_words:
            themes.append(candidate)
            seen_words.add(candidate_norm)

    # 3. Pad slangs with extra_slangs or fallback slangs to exactly 5
    s_idx = 0
    while len(slangs) < 5:
        if s_idx < len(extra_slangs):
            candidate = extra_slangs[s_idx]
        else:
            candidate = FALLBACK_SLANGS[(idx + s_idx) % len(FALLBACK_SLANGS)]
        s_idx += 1
        candidate_norm = normalize_word(candidate)
        if candidate_norm not in seen_words:
            slangs.append(candidate)
            seen_words.add(candidate_norm)

    themes = themes[:5]
    slangs = slangs[:5]

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

# Handcrafted premium atmospheric vocabulary database for specific milestone movies
HANDCRAFTED_VOCAB_DB = {
    "The Others": [
        ("Mourning ≠ Celebration", "the expression of deep sorrow for someone who has died.", "Grace's strict rules in the Victorian mansion are born from her endless state of mourning for her lost husband."),
        ("Seclusion ≠ Exposure", "the state of being private and away from other people.", "Her photosensitive children are kept in absolute seclusion, with heavy curtains blocking out all external light."),
        ("Apparition ≠ Reality", "a ghost or ghost-like image of a person.", "Anne claims she saw an apparition of a boy named Victor, but Grace refuses to believe her."),
        ("Denial ≠ Acceptance", "a defense mechanism where a person refuses to accept an obvious truth.", "The tragic twist reveals that Grace is living in complete denial about the horrific events that took place."),
        ("Faith ≠ Skepticism", "strong belief in religious doctrines or spiritual teachings.", "Grace relies on her rigid religious faith to control her children, even as supernatural signs challenge her reality."),
        ("Gothic Horror", "a genre characterized by dark castles, extreme isolation, family secrets, and supernatural elements.", "The filmmaker uses classic gothic horror tropes like creaking floorboards, heavy keys, and dense fog to elevate the tension."),
        ("Paranoia", "an unjustified, intense suspicion and mistrust of others.", "As doors unlock themselves, Grace's maternal instinct quickly spirals into a dangerous, blinding paranoia."),
        ("Guilt-stricken", "experiencing severe feelings of guilt or remorse.", "The silent subtext of the screenplay suggests that Grace is guilt-stricken over her actions before the servants arrived."),
        ("Revelation", "a surprising and previously unknown fact, especially one that is disclosed in a dramatic way.", "The final revelation shifts the audience's entire understanding of who is actually haunting the Victorian mansion."),
        ("Macabre", "disturbing and horrifying because of involvement with or depiction of death and injury.", "The old album filled with photos of deceased individuals adds a chilling, macabre element to the scene study.")
    ],
    "Don't Look Up": [
        ("Media spin", "a heavily biased portrayal of a situation designed to influence public opinion.", "The talk show hosts use media spin to downplay the severity of the incoming doomsday comet."),
        ("To laugh off", "to dismiss or treat something serious with a laugh or lighthearted attitude.", "Instead of taking the science seriously, the politicians try to laugh off the urgent doomsday warning."),
        ("Doomsday", "complete final destruction, ruin, or the end of the world.", "Dr. Randall Mindy struggles to explain the impending doomsday scenario to a tech-obsessed president."),
        ("To buy into", "to believe, accept, or support an idea or theory, often without critical questioning.", "Many citizens refuse to buy into the scientists' findings, preferring the comfort of political denial."),
        ("Omen", "a sign or warning of something to come, especially something evil or disastrous.", "The sudden appearance of the comet in the night sky acts as a terrifying omen of global catastrophe."),
        ("Out of hand", "out of control, or dismissed immediately without any consideration.", "The experts' peer-reviewed study was dismissed out of hand by corporate leaders looking for profit."),
        ("Hype", "extravagant, intensive, or exaggerated publicity and promotion.", "The technology company built immense hype around their plan to safely harvest the comet's minerals."),
        ("To call out", "to challenge, expose, or publicly criticize someone for their lies or misbehavior.", "During the live broadcast, Kate decides to call out the media hosts for their superficial questions."),
        ("To tune out", "to stop paying attention, listen to, or ignore what is being said.", "Faced with constant political squabbling, many ordinary citizens begin to tune out the news entirely."),
        ("Comet", "a celestial object consisting of a nucleus of ice and dust, forming a tail when near the sun.", "The discovery of a massive comet on a direct collision course with Earth sets off the film's chaotic plot.")
    ],
    "What Women Want": [
        ("Man's man", "a man who is traditionally masculine and highly admired or respected by other men.", "Nick Marshall prides himself on being a traditional man's man, completely unaware of how women perceive his behavior."),
        ("To read someone's mind", "to know exactly what someone is thinking or feeling without them saying it.", "A freak electrical accident grants Nick the literal superpower to read someone's mind, changing his perspective."),
        ("Sales pitch", "a speech, presentation, or talk designed to persuade someone to buy or accept something.", "Nick delivers a confident sales pitch for the new marketing campaign, hoping to win the agency's approval."),
        ("To get a pass", "to be excused from a rule, standard, or expectation.", "Because of his high sales numbers, Nick used to get a pass for his chauvinistic behavior in the workplace."),
        ("Deal-breaker", "a factor, issue, or condition that is sufficient to terminate an agreement, negotiation, or relationship.", "For Darcy, a lack of creative authenticity is a total deal-breaker in any marketing collaboration."),
        ("To overstep", "to go beyond what is proper, polite, permitted, or acceptable.", "Nick realizes he has started to overstep his boundaries by using women's private thoughts to get ahead."),
        ("Behind closed doors", "in private, out of the public view or away from others.", "Nick is shocked to discover what women really think of him behind closed doors when they are alone."),
        ("To hit home", "to cause someone to feel a sudden, strong, painful, or profound emotional realization.", "The honest criticisms he overheard finally began to hit home, forcing him to re-evaluate his ego."),
        ("Double standard", "a rule, principle, or expectation that is unfairly applied in different ways to different people or genders.", "The film highlights the double standard in the corporate world, where assertive men are praised but women are criticized."),
        ("Blind spot", "an area in which a person lacks understanding, judgment, self-awareness, or perspective.", "His chauvinistic attitude was a major blind spot that prevented him from establishing genuine connections with his colleagues.")
    ],
    "The First Wives Club": [
        ("To get even", "to take revenge, get retribution, or inflict equal harm on someone who has wronged you.", "The film's most famous line reminds us that you don't get mad, you get even."),
        ("Pre-nup", "a prenuptial agreement made before marriage to outline asset division in case of divorce.", "The characters utilize legal secrets, including an old pre-nup, to seize control of their ex-husbands' assets."),
        ("Gold digger", "a person who associates with or marries someone purely for their financial wealth.", "The ex-husbands find themselves manipulated by younger, opportunistic gold diggers who drain their bank accounts."),
        ("To kick someone to the curb", "to abruptly discard, reject, abandon, or get rid of someone in a heartless way.", "The wives decide to retaliate after being kicked to the curb by their husbands after decades of marriage."),
        ("Divorcée", "a divorced woman.", "The three old college friends find themselves reunited as middle-aged divorcées facing new life beginnings."),
        ("To take someone to the cleaners", "to take all of someone's money or assets, especially in a divorce or lawsuit.", "With the help of a clever lawyer, they prepare to take their cheating ex-husbands to the cleaners."),
        ("Trophy wife", "a young, attractive wife who is regarded as a status symbol for an older, wealthy husband.", "The men quickly realize that replacing their loyal partners with a trophy wife comes with a huge financial cost."),
        ("To stick together", "to remain united, support each other, and cooperate during difficult times.", "The three divorcées realize they can only succeed in their plans if they agree to stick together."),
        ("Sweet revenge", "the immense satisfaction of seeing someone who wronged you face consequences.", "Their strategic business takeover turns their bitter anger into a taste of sweet revenge."),
        ("To move on", "to accept a difficult life change, stop dwelling on the past, and start looking forward to the future.", "By founding a crisis center, the women show they are finally ready to heal and move on with their lives.")
    ],
    "On a Clear Day You Can See...": [
        ("To ring a bell", "to sound familiar, or trigger a vague, half-forgotten memory.", "When she hears the name Melinda, it starts to ring a bell deep within her subconscious mind."),
        ("Out of the blue", "completely unexpected, sudden, and without any warning.", "During her session, Daisy starts speaking in a sophisticated 19th-century British accent completely out of the blue."),
        ("Gut feeling", "a strong personal intuition, instinct, or feeling about something.", "The psychiatrist has a strong gut feeling that Daisy is not just pretending to be someone else."),
        ("To lose track", "to lose awareness of time, details, or a sequence of events.", "Under hypnosis, Daisy seems to completely lose track of the modern world around her."),
        ("To catch a glimpse", "to see something briefly, partially, or for a very short moment.", "Daisy claims she can catch a glimpse of old English estates and historical gardens in her mind."),
        ("Skeptical", "having doubts, reservations, or not being easily convinced of a claim.", "At first, Dr. Marc Chabot is highly skeptical of past-life regression, believing it is a psychological hoax."),
        ("Trance", "a half-conscious state of deep focus and suggestibility induced by hypnosis.", "Daisy enters a deep hypnotic trance, allowing her historical past-life persona to speak freely."),
        ("Vague", "unclear, indistinct, or not precisely recalled in one's memory.", "Daisy's conscious memories of her childhood are vague, but her hypnotic regressions are incredibly detailed."),
        ("To lock away", "to hide, suppress, or bury thoughts, memories, or feelings deep in the mind.", "She had locked away her extraordinary intuitive gifts until the therapist helped her uncover them."),
        ("Past-life", "memories or identities originating from previous historical lifetimes.", "The film explores whether Daisy is truly recalling a past-life as Melinda or if it is an elaborate dream.")
    ]
}

# General high-quality theme & slang words to pad if needed (upgraded to cinematic atmosphere first)
FALLBACK_THEMES = [
    "Mourning", "Seclusion", "Apparition", "Denial", "Faith",
    "Gothic Horror", "Paranoia", "Guilt-stricken", "Revelation", "Macabre",
    "Obsession", "Trauma", "Redemption", "Deception", "Betrayal",
    "Memory", "Legacy", "Greed", "Sacrifice", "Survival"
]
FALLBACK_SLANGS = [
    "Silence", "Illusion", "Desire", "Hope", "Pivotal Scene",
    "Atmospheric Tone", "Narrative Clue", "Subtextual Friction", "Unvoiced Resentment", "Dramatic Payoff",
    "Directorial Remake", "Cinematic Medium", "Tonal Shift", "Visual Symbol", "Aesthetic Choice",
    "Story Arc", "Climactic Revelation", "Emotional Resonance", "Scene Study", "Dialogue Exchange"
]

# Localized labels for Theme Snapshot block
LOCALIZED_LABELS = {
    "en": {
        "theme_snapshot": "Theme Snapshot",
        "discuss": "In this session, we will discuss:",
        "protagonist": "Protagonist",
        "key_figures": "Supporting Figures",
        "setting": "Setting",
        "conflict": "Core Conflict",
        "grammar": "Grammar Focus",
        "watch_trailer": "Watch Official Trailer 🎥"
    },
    "fr": {
        "theme_snapshot": "Aperçu du Thème",
        "discuss": "Dans cette session, nous aborderons :",
        "protagonist": "Protagoniste",
        "key_figures": "Personnages secondaires",
        "setting": "Cadre de l'histoire",
        "conflict": "Conflit principal",
        "grammar": "Focus Grammatical",
        "watch_trailer": "Regarder la bande-annonce officielle 🎥"
    },
    "ru": {
        "theme_snapshot": "Обзор темы",
        "discuss": "На этой сессии мы обсудим:",
        "protagonist": "Главный герой",
        "key_figures": "Второстепенные персонажи",
        "setting": "Место действия",
        "conflict": "Главный конфликт",
        "grammar": "Грамматический фокус",
        "watch_trailer": "Смотреть официальный трейлер 🎥"
    },
    "es": {
        "theme_snapshot": "Resumen del Tema",
        "discuss": "En esta sesión, discutiremos:",
        "protagonist": "Protagonista",
        "key_figures": "Personajes secundarios",
        "setting": "Escenario",
        "conflict": "Conflicto principal",
        "grammar": "Enfoque Gramatical",
        "watch_trailer": "Ver Tráiler Oficial 🎥"
    }
}

# Curated high-impact trailer links for centralized YouTube player conversion
TRAILER_LINKS = {
    "The Devil Wears Prada": "https://www.youtube.com/watch?v=6ZOZw3ofJHg",
    "Fleabag": "https://www.youtube.com/watch?v=I5Uv6cb9YvA",
    "Ratatouille": "https://www.youtube.com/watch?v=NgsQ8mPk7XE",
    "Serebryanye Konki (Silver Skates)": "https://www.youtube.com/watch?v=l_N4K36yCgo",
    "La Valla (The Barrier)": "https://www.youtube.com/watch?v=Vl8b3Z-Rj9A",
    "Breakfast at Tiffany's": "https://www.youtube.com/watch?v=urHVUXZ6b98",
    "Crazy Ex-Girlfriend": "https://www.youtube.com/watch?v=H7S86X8rV7g",
    "The Others": "https://www.youtube.com/watch?v=0bMEGtUxajY",
    "Don't Worry Darling": "https://www.youtube.com/watch?v=Co0tW9gSgQM",
    "How I Live Now": "https://www.youtube.com/watch?v=R9XvILe93_M",
    "A Quiet Place": "https://www.youtube.com/watch?v=WR7cc5t7tvA",
    "Bohemian Rhapsody": "https://www.youtube.com/watch?v=mP0VHJYFO0Y",
    "The Queen's Gambit": "https://www.youtube.com/watch?v=oDx7K0fB8M0",
    "Mrs. Harris Goes to Paris": "https://www.youtube.com/watch?v=iO9JQP_pBy8",
    "About Time": "https://www.youtube.com/watch?v=T7A810duHvw",
    "Free Guy": "https://www.youtube.com/watch?v=X2m-08cOAbc",
    "Now You See Me": "https://www.youtube.com/watch?v=KzJNYYkkhzc",
    "The Hunger Games": "https://www.youtube.com/watch?v=PbA63a7H0bo",
    "Gone Girl": "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
    "Midsommar": "https://www.youtube.com/watch?v=1VnghdsjZ-s",
    "V for Vendetta": "https://www.youtube.com/watch?v=lSA7mAHolAw",
    "The Pianist": "https://www.youtube.com/watch?v=u_jE7-6Uv74",
    "Kinky Boots": "https://www.youtube.com/watch?v=2G9WdtP9p3E",
    "Heathers: The Musical": "https://www.youtube.com/watch?v=gTsh5z1mH2o",
    "Mamma Mia": "https://www.youtube.com/watch?v=8R71_O66Eis",
    "Lost": "https://www.youtube.com/watch?v=K7A2O-D9At8",
    "Lucy": "https://www.youtube.com/watch?v=MVt32qoyhi0",
    "The Odyssey": "https://youtu.be/HajiEqEtIRY?is=SwZf-7TAvBn2sgQw",
    "Lending My Wings": "https://youtu.be/YMzl7wmHFj4?is=IOOcxWbdTb5gjkSX",
    "L'attente": "https://youtu.be/T-k7Bu3UCwY?is=w_6nzVvBrdy2QnEL",
    "Karlik Nos (Dwarf Nose)": "https://youtu.be/1_JB2Qtt7DQ?is=_8owWIXniBcVhGxx",
    "Destino": "https://youtu.be/y_TlaxmOKqs?is=kMbEE-8Kn6Sy2Y22",
    "Once Upon A Time...": "https://youtu.be/0o9dTCl0hkY?is=1GK1Iv51ILFdjI4m",
    "Once and Forever": "https://youtu.be/6O2gmRPj-UI?is=pAvUaMuOprrFjtz-"
}

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
<body class="theme-cinema">
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

  {theme_box_html}

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

{director_block_html}

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

DISCLAIMERS = {
    "en": "Note: This material is used strictly for educational purposes only.",
    "fr": "Note : Ce matériel est utilisé uniquement à des fins éducatives.",
    "ru": "Примечание: Данный материал используется исключительно в образовательных целях.",
    "es": "Nota: Este material se utiliza únicamente con fines educativos.",
    "it": "Nota: Questo materiale viene utilizzato esclusivamente a scopo didattico.",
    "el": "Σημείωση: Αυτό το υλικό χρησιμοποιείται αποκλειστικά για εκπαιδευτικούς σκοπούς."
}

# Construct the expanded list of sessions to generate (splitting B1/B2 as requested)
sessions_to_generate = []
for idx, r in enumerate(rows):
    title = r[1].strip()
    level_short = r[2].strip()
    level_label = r[3].strip()
    variety = r[4].strip()
    focus = r[5].strip()
    slang_raw = r[6].strip()

    slug_base = get_slug(title)
    if "serebryanye" in slug_base:
        slug_base = "serebryanye-konki"
    elif "barrier" in slug_base:
        slug_base = "la-valla"
    elif "tiffanys" in slug_base:
        slug_base = "breakfast-at-tiffanys"
    elif "prada" in slug_base:
        slug_base = "the-devil-wears-prada"
    elif "queens" in slug_base:
        slug_base = "the-queens-gambit"

    if "french language" in variety.lower() or "french / arabic" in variety.lower():
        lang = "fr"
    elif "russian language" in variety.lower():
        lang = "ru"
    elif "spanish language" in variety.lower():
        lang = "es"
    else:
        lang = "en"

    if level_short == "B1/B2":
        # Split B1/B2 into B1 and B2 separate sessions
        sessions_to_generate.append({
            "idx": idx,
            "title": title,
            "level_short": "B1",
            "level_label": "Intermediate (B1)",
            "variety": variety,
            "focus": focus,
            "slang_raw": slang_raw,
            "slug": f"{slug_base}-intermediate",
            "lang": lang
        })
        sessions_to_generate.append({
            "idx": idx,
            "title": title,
            "level_short": "B2",
            "level_label": "Upper-Intermediate (B2)",
            "variety": variety,
            "focus": focus,
            "slang_raw": slang_raw,
            "slug": f"{slug_base}-upper-intermediate",
            "lang": lang
        })
    else:
        sessions_to_generate.append({
            "idx": idx,
            "title": title,
            "level_short": level_short,
            "level_label": level_label,
            "variety": variety,
            "focus": focus,
            "slang_raw": slang_raw,
            "slug": slug_base,
            "lang": lang
        })

for s_idx, session_data in enumerate(sessions_to_generate):
    idx = session_data["idx"]
    title = session_data["title"]
    level_short = session_data["level_short"]
    level_label = session_data["level_label"]
    variety = session_data["variety"]
    focus = session_data["focus"]
    slang_raw = session_data["slang_raw"]
    slug = session_data["slug"]
    lang = session_data["lang"]

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
        vocab_generic_html += (
            f"      <div class=\"vocab-card\"><div class=\"vocab-word\">{word}</div>\n"
            f"<div class=\"vocab-def\">{definition}</div>\n"
            f"<div class=\"vocab-example\">{example}</div>\n"
            f"<button class=\"btn-add-dict\" onclick=\"COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)\">Add to Dictionary</button>\n"
            f"</div>\n"
        )

    vocab_authentic_html = ""
    for word, definition, example in authentic_vocab:
        escaped_word = escape_js(word)
        escaped_def = escape_js(definition)
        escaped_ex = escape_js(example)
        vocab_authentic_html += (
            f"      <div class=\"vocab-card\"><div class=\"vocab-word\">{word}</div>\n"
            f"<div class=\"vocab-def\">{definition}</div>\n"
            f"<div class=\"vocab-example\">{example}</div>\n"
            f"<button class=\"btn-add-dict\" onclick=\"COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)\">Add to Dictionary</button>\n"
            f"</div>\n"
        )

    details = CLEAN_FILM_DETAILS.get(title.replace('"', '').strip(), {
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

    # Theme Snapshot block generation: Retro Director's Production Slate layout
    loc = LOCALIZED_LABELS.get(lang, LOCALIZED_LABELS["en"])
    trailer_url = TRAILER_LINKS.get(title, f"https://www.youtube.com/results?search_query={title.replace(' ', '+')}+trailer")
    disclaimer_text = DISCLAIMERS.get(lang, DISCLAIMERS["en"])
    theme_box_html = f"""  <!-- THEME SNAPSHOT BLOCK: DIRECTOR'S PRODUCTION SLATE -->
  <div class="cinema-slate-box">
    <div class="clapper-strip" style="margin: -1.5rem -1.5rem 1.5rem -1.5rem;"></div>
    <h3>🎬 {loc["theme_snapshot"]}: {title}</h3>
    <p style="color: rgba(250, 247, 242, 0.8); margin-bottom: 1.5rem;">{loc["discuss"]}</p>
    <div class="cinema-slate-grid">
      <div class="cinema-slate-item">
        <strong>{loc["protagonist"]}</strong>
        <span>{details["protagonist"]}</span>
      </div>
      <div class="cinema-slate-item">
        <strong>{loc["setting"]}</strong>
        <span>{details["setting"]}</span>
      </div>
      <div class="cinema-slate-item">
        <strong>{loc["conflict"]}</strong>
        <span>{details["conflict"]}</span>
      </div>
      <div class="cinema-slate-item">
        <strong>{loc["grammar"]}</strong>
        <span>{grammar_focus}</span>
      </div>
    </div>
    <div class="theme-video-link" style="margin-top: 1.5rem; border-top: 1px dashed rgba(250, 247, 242, 0.25); padding-top: 1rem;">
      <a href="{trailer_url}" target="_blank" class="btn-trailer" style="color: #BA7517 !important;">
        <span>🎬</span> {loc["watch_trailer"]}
      </a>
      <p class="video-disclaimer" style="margin-top: 0.5rem; font-size: 0.75rem; color: rgba(250, 247, 242, 0.5); font-style: italic;">{disclaimer_text}</p>
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
        round1_html += (
            f"          <div class=\"round-item\"><div class=\"round-item-main\">{r1_main}</div>\n"
            f"<div class=\"round-item-personal\">{r1_personal}</div>\n"
            f"</div>\n"
        )

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
        round2_html += (
            f"          <div class=\"round-item\"><div class=\"round-item-main\">{r2_main}</div>\n"
            f"<div class=\"round-item-personal\">{r2_personal}</div>\n"
            f"</div>\n"
        )

    # Build the 'You're the Director' final challenge HTML block
    director_block_html = f"""      <!-- Final Challenge — You're the Director -->
      <div class="round-block director open" id="s-director">
        <div class="round-header" style="background:#FFF9E6;" onclick="COSY.toggleRound('s-director')">
          <span>🎬 Final Challenge — You're the Director!</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block; background: #FFFDF5; border: 1px solid #FFE0B2; border-radius: 12px; padding: 1.5rem; margin-top: 1rem;">
          <p style="font-weight: 600; margin-top: 0; color: #E65100; font-size: 1.1rem; font-family: 'Playfair Display', serif;">You have been hired to remake this classic film! You must alter ONE key element. Choose your directorial pivot:</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; margin-top: 1rem;">
            <div style="background: white; border: 1px solid #FFE0B2; padding: 1rem; border-radius: 8px; box-shadow: var(--shadow-sm);">
              <strong style="color: #BA7517; display: block; margin-bottom: 0.5rem; font-size: 0.95rem;">1. The Setting 🌲</strong>
              Move the story from <em>{details["setting"]}</em> to a completely different location, universe, or era. How does this shift the atmosphere?
            </div>
            <div style="background: white; border: 1px solid #FFE0B2; padding: 1rem; border-radius: 8px; box-shadow: var(--shadow-sm);">
              <strong style="color: #BA7517; display: block; margin-bottom: 0.5rem; font-size: 0.95rem;">2. The Ending 🔚</strong>
              Alter the final twist or resolution of the central conflict of <em>{details["conflict"]}</em>. How does this affect the audience's emotional payoff?
            </div>
            <div style="background: white; border: 1px solid #FFE0B2; padding: 1rem; border-radius: 8px; box-shadow: var(--shadow-sm);">
              <strong style="color: #BA7517; display: block; margin-bottom: 0.5rem; font-size: 0.95rem;">3. The Soundtrack 🎵</strong>
              Swap the current score for something radically different (e.g., electronic synth-wave, classical silence, or heavy rock) to completely redefine the tone.
            </div>
            <div style="background: white; border: 1px solid #FFE0B2; padding: 1rem; border-radius: 8px; box-shadow: var(--shadow-sm);">
              <strong style="color: #BA7517; display: block; margin-bottom: 0.5rem; font-size: 0.95rem;">4. The Protagonist 👤</strong>
              Change <em>{details["protagonist"]}</em>'s primary motivation, gender, or core beliefs. How does this rewrite the emotional core of the film?
            </div>
          </div>
          <p style="margin-bottom: 0; font-style: italic; color: var(--ink-soft); font-size: 0.92rem; line-height: 1.5;"><strong>Speaking Assignment:</strong> Pitch your new remake version to the class. Use your target vocabulary words and the grammar focus <strong>{grammar_focus}</strong> to explain how your directorial choices would reshape the film's artistic impact!</p>
        </div>
      </div>"""

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
            theme_box_html=theme_box_html,
            round1_html=round1_html,
            round2_html=round2_html,
            director_block_html=director_block_html,
            mistakes_html=mistakes_html
        ))

print(f"Successfully generated all {len(sessions_to_generate)} Cinema Club sessions with 100% unique cinema-specific vocabulary, 10-unit discussion structure, and screen-specific Grammar Focus!")
