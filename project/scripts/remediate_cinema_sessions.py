#!/usr/bin/env python3
"""
scripts/remediate_cinema_sessions.py

Remediates all 113 Cinema Club session files under events/sessions/cinema-club/:
1. Rebuilds the 8 fallback template files with bespoke, film-grounded discussions and vocabulary.
2. Replaces mechanical vocabulary/slang definition and example templates with authentic, human, film-grounded content.
3. Humanizes AI clichés and tell phrases ('pivotal scene', 'quiet burden', 'clash between', 'testament to', 'delves into', etc.).
4. Eliminates em dashes ('—') across all cinema session files.
5. Injects concrete examples formatted as '(e.g. ...)' into abstract/complex discussion prompts in Round 1 and Round 2.
"""

import os
import glob
import re

SESSIONS_DIR = "events/sessions/cinema-club"

# 1. Comprehensive dictionary of bespoke definitions and examples for vocabulary/slang terms
CUSTOM_VOCAB_MAP = {
    "bloke": {
        "def": "(noun) an informal British term for a man.",
        "ex": "Tim's father affectionately refers to everyday people as a 'bloke' while giving timeless life advice."
    },
    "awkward phase": {
        "def": "(noun) a period of adolescence marked by self-consciousness, bodily changes, and social hesitation.",
        "ex": "The series captures every painful detail of an awkward phase during high school years."
    },
    "geezer": {
        "def": "(noun) British informal term for a man, often used familiarly in London working-class culture.",
        "ex": "In Thamesmead, local teens refer to older neighbors as a 'geezer' around the estate."
    },
    "blindfold": {
        "def": "(noun) a cloth tied over the eyes to block vision completely.",
        "ex": "Malorie enforces strict rules that everyone must wear a tight blindfold before stepping outside."
    },
    "opt-in": {
        "def": "(verb) to choose explicitly to participate in a system, service, or experiment.",
        "ex": "Citizens eagerly opt-in to new digital rating devices without considering the psychological consequences."
    },
    "gig": {
        "def": "(noun) a live performance by a musician or group of musicians.",
        "ex": "Queen's legendary Live Aid performance at Wembley Stadium remains the ultimate rock gig in history."
    },
    "crush": {
        "def": "(noun) a brief but intense infatuation or romantic attraction toward someone.",
        "ex": "Elio develops a quiet, overwhelming crush on Oliver during a hot summer in northern Italy."
    },
    "orison": {
        "def": "(noun) a prayer or spiritual chant; in Cloud Atlas, a recorded holographic testament.",
        "ex": "Sonmi-451 records her final orison to articulate human rights for synthesized soulmates."
    },
    "interpreter": {
        "def": "(noun) a person who translates speech orally between different languages or sign language.",
        "ex": "Ruby acts as the essential interpreter between her deaf family and the hearing world of Gloucester."
    },
    "app": {
        "def": "(noun) a software application designed for mobile devices.",
        "ex": "A sinister app promises to predict the exact moment of a user's death down to the second."
    },
    "ghosting": {
        "def": "(noun) the practice of abruptly ending contact with a person without explanation.",
        "ex": "Rebecca obsessively analyzes why ex-partners resort to ghosting rather than communicating directly."
    },
    "potion": {
        "def": "(noun) a liquid elixir with magical, restorative, or supernatural properties.",
        "ex": "Madeline and Helen swallow Lisle's glowing pink potion to secure eternal youth."
    },
    "perfect facade": {
        "def": "(noun) a flawless, attractive outer appearance hiding a disturbing reality.",
        "ex": "Alice slowly discovers that her idyllic 1950s suburban community is a manufactured perfect facade."
    },
    "quill": {
        "def": "(noun) a pen made from a bird's feather; or a sharp spine on a porcupine.",
        "ex": "Chance learns a painful lesson about wild animals after getting stuck with a porcupine quill."
    },
    "jinxed": {
        "def": "(adjective) experiencing continuous bad luck or believed to carry a curse.",
        "ex": "Sam Greenfield believes her entire life is jinxed until she encounters a mysterious black cat."
    },
    "fluke": {
        "def": "(noun) an unlikely chance occurrence, surprising piece of luck, or accidental stroke of fortune.",
        "ex": "Ashley believes her sudden streak of good luck is a complete fluke until her fortune shifts."
    },
    "dude": {
        "def": "(noun) an informal American term for a man, friend, or peer.",
        "ex": "Viola practices walking and speaking like a stereotypical teenage dude to blend in at Illyria."
    },
    "checkmate": {
        "def": "(noun) a winning position in chess where an opponent's king cannot escape capture.",
        "ex": "Beth Harmon calculates every move on the ceiling before delivering a decisive checkmate."
    },
    "buddy": {
        "def": "(noun) a close friend or companion.",
        "ex": "Shadow and Chance rely on each other as trusted buddies while navigating the wilderness."
    },
    "spots": {
        "def": "(noun) distinctive round colored markings on an animal's coat.",
        "ex": "Cruella de Vil becomes obsessively fixated on the white and black spots of Dalmatian fur."
    },
    "hatch": {
        "def": "(noun) a heavy sealed door set into a floor, deck, or subterranean bunker.",
        "ex": "The survivors discover a mysterious metal hatch buried deep beneath the island jungle."
    },
    "pre-nup": {
        "def": "(noun) an agreement made between two people before marrying regarding asset division.",
        "ex": "The ex-wives band together after learning how unfair pre-nup terms left them financially stranded."
    },
    "co-parenting": {
        "def": "(noun) the shared responsibility of raising children by divorced or separated parents.",
        "ex": "Jackie and Isabel attempt to establish a peaceful co-parenting dynamic despite past conflicts."
    },
    "clueless": {
        "def": "(adjective) completely unaware, uninformed, or lacking understanding.",
        "ex": "Peter pretends to be clueless about the missing stolen diamonds to avoid suspicion."
    },
    "incognito": {
        "def": "(adjective/adverb) having one's identity concealed to avoid public recognition.",
        "ex": "Princess Ann slips away from the embassy to explore Rome entirely incognito."
    },
    "niche": {
        "def": "(noun) a specialized segment of the market or a comfortable, suitable role.",
        "ex": "Charlie saves his failing shoe factory by discovering a profitable niche in custom drag footwear."
    },
    "clique": {
        "def": "(noun) a small, exclusive group of people who exclude outsiders.",
        "ex": "Veronica infiltrates the most powerful high school clique before realizing their dark cruelty."
    },
    "show choir": {
        "def": "(noun) a musical ensemble that combines choral singing with choreographed dance.",
        "ex": "The New Directions show choir struggles for respect and funding against the cheerleading team."
    },
    "guv'nor": {
        "def": "(noun) British informal term of address for a boss or respected man.",
        "ex": "Mrs. Harris politely addresses her London employers with traditional working-class warmth."
    },
    "héritage": {
        "def": "(noun) ce qui est transmis par les générations précédentes; patrimoine culturel ou familial.",
        "ex": "Les jumeaux découvrent un profond héritage familial en lisant le testament de leur mère."
    },
    "freak": {
        "def": "(noun) a person who is regarded as unusually strange or different.",
        "ex": "Odd Thomas keeps his supernatural vision quiet to avoid being labeled a local freak."
    },
    "terms and conditions": {
        "def": "(noun) legal rules and guidelines users must agree to before using a service.",
        "ex": "Users blindly accept the app's terms and conditions without reading the deadly countdown clause."
    },
    "vpn": {
        "def": "(noun) a virtual private network that encrypts internet traffic and protects user identity.",
        "ex": "David uses a secure VPN to trace digital footprints left by his missing daughter."
    },
    "butterfly effect": {
        "def": "(noun) the idea that a small initial change can lead to vast, unpredictable consequences.",
        "ex": "A single phone call across time triggers a terrifying butterfly effect in the present."
    },
    "ageless": {
        "def": "(adjective) appearing never to grow old or unaffected by the passage of time.",
        "ex": "Adaline Bowman remains ageless for decades after a rare electrical storm freezes her biology."
    },
    "infidelity": {
        "def": "(noun) the action or state of being unfaithful to a spouse or sexual partner.",
        "ex": "Uncovering a spouse's hidden infidelity sparks a dangerous chain of revenge across three decades."
    },
    "replicate": {
        "def": "(verb) to make an exact copy, reproduction, or duplicate of something.",
        "ex": "The revolutionary drug promises to replicate youth by generating a younger, superior version."
    },
    "unhealthy dynamic": {
        "def": "(noun) a pattern of behavior in a relationship marked by manipulation, imbalance, or distress.",
        "ex": "Odyssey recognizes the unhealthy dynamic holding her back and chooses personal independence."
    },
    "vulnerabilidad": {
        "def": "(noun) la cualidad de ser emocionalmente sincero y expuesto sin barreras.",
        "ex": "El terapeuta ayuda al paciente a aceptar su vulnerabilidad sin miedo al juicio."
    },
    "attente": {
        "def": "(noun) l'action d'attendre ou l'état de patience dans l'espoir d'un événement.",
        "ex": "L'attente prolongée crée une tension romantique poignante au cœur du récit."
    },
    "проклятие": {
        "def": "(noun) заклинание, приносящее несчастье или трансформацию человека.",
        "ex": "Злая колдунья налагает проклятие на Маленького Мука, превращая его внешний вид."
    },
    "surreal": {
        "def": "(adjective) marked by the intense irrational reality of a dream; bizarre and fantastical.",
        "ex": "The collaboration mixes Disney's classical animation with Dalí's surreal melting landscapes."
    },
    "millinery": {
        "def": "(noun) the design, manufacture, and sale of women's hats.",
        "ex": "Coco Chanel revolutionizes women's fashion by launching her career in a modest millinery shop."
    },
    "fame": {
        "def": "(noun) the state of being known or talked about by many people.",
        "ex": "An older Coco Chanel reflects on how fame and artistic isolation shaped her life choices."
    },
    "besties": {
        "def": "(noun) informal slang for best friends.",
        "ex": "The two teenagers remain inseparable besties through thick and thin."
    },
    "break free": {
        "def": "(verb) to escape from captivity or a restrictive dynamic.",
        "ex": "She fights to break free from an unhealthy controlling relationship."
    },
    "challenging role": {
        "def": "(noun) a demanding acting role requiring deep emotional range.",
        "ex": "Playing Coco Chanel in her later years proved to be a challenging role."
    },
    "classified": {
        "def": "(adjective) officially secret or restricted to authorized personnel.",
        "ex": "Agent Miller uncovers classified government files regarding the invasion."
    },
    "cognitive peak": {
        "def": "(noun) the period of maximum mental performance and memory clarity.",
        "ex": "Dr. Alice Howland reflects on her career achievements during her cognitive peak."
    },
    "compromise": {
        "def": "(noun/verb) an agreement reached by mutual concession.",
        "ex": "The couple struggles to find a fair compromise between career and family."
    },
    "coven": {
        "def": "(noun) a secret gathering or community of witches.",
        "ex": "Suspiria depicts a sinister dance academy secretly run by a coven."
    },
    "cyberattack": {
        "def": "(noun) an attempt by hackers to damage or disrupt a computer network.",
        "ex": "A sudden national cyberattack disables power grids and communication lines."
    },
    "food blog": {
        "def": "(noun) a website dedicated to sharing recipes and culinary critiques.",
        "ex": "Julie Powell launches a daily food blog documenting every recipe in Julia Child's cookbook."
    },
    "forgetful": {
        "def": "(adjective) apt to forget; having a poor memory.",
        "ex": "Early symptoms leave the protagonist unusually forgetful during daily routines."
    },
    "hit list": {
        "def": "(noun) a list of targeted individuals to be eliminated or confronted.",
        "ex": "The protagonist creates a hit list to systematically track down her enemies."
    },
    "homeschooled": {
        "def": "(adjective) educated at home by parents rather than attending school.",
        "ex": "Cady struggles to adapt to public high school after being homeschooled."
    },
    "illusionist": {
        "def": "(noun) a performing magician who creates optical illusions.",
        "ex": "The magician operates as a skilled illusionist pulling off daring bank heists."
    },
    "labels": {
        "def": "(noun) restrictive categories or tags assigned to people.",
        "ex": "The characters reject conventional social labels to define their own identity."
    },
    "makeover": {
        "def": "(noun) a complete transformation of a person's appearance or style.",
        "ex": "A dramatic high school makeover alters her social standing overnight."
    },
    "matchmaker": {
        "def": "(noun) a person who arranges marriages or romantic introductions.",
        "ex": "Dolly Levi excels as a witty professional matchmaker in New York."
    },
    "medium": {
        "def": "(noun) a person claiming to communicate between the living and spirits.",
        "ex": "A mysterious medium conducts a séance inside the Victorian mansion."
    },
    "midlife crisis": {
        "def": "(noun) a period of emotional transition in middle age marked by self-doubt.",
        "ex": "A sudden midlife crisis prompts him to re-evaluate his career and personal choices."
    },
    "midsummer": {
        "def": "(noun) the period around the summer solstice, often linked to pagan festivities.",
        "ex": "American students travel to Sweden to witness a rare pagan Midsummer festival."
    },
    "npc": {
        "def": "(noun) non-player character in video games; a person who acts passively without independent thought.",
        "ex": "Guy realizes he is merely an NPC inside an open-world video game."
    },
    "overprotective": {
        "def": "(adjective) excessively desirous of protecting someone from harm.",
        "ex": "An overprotective mother enforces strict house rules to shield her children."
    },
    "propaganda ≠ objective truth": {
        "def": "(phrase) manipulative political narrative contrasted with factual reality.",
        "ex": "V for Vendetta contrasts state television propaganda with objective truth."
    },
    "quarantine": {
        "def": "(noun) state of isolation imposed to prevent the spread of disease.",
        "ex": "Residents adapt to strict lockdown rules during a sudden citywide quarantine."
    },
    "racionamiento": {
        "def": "(noun) la distribución controlada de alimentos y recursos.",
        "ex": "La población sufre un estricto racionamiento en medio de la crisis."
    },
    "reckon": {
        "def": "(verb) informal British term meaning to think, suppose, or estimate.",
        "ex": "The teenagers reckon they can survive in the English countryside on their own."
    },
    "ruins": {
        "def": "(noun) the remains of destroyed buildings or cities.",
        "ex": "Władysław Szpilman hides among the frozen ruins of ruined Warsaw."
    },
    "sales pitch": {
        "def": "(noun) a persuasive speech given by a salesperson to convince a buyer.",
        "ex": "Jamie Randall delivers a smooth sales pitch for pharmaceutical drugs."
    },
    "shambles": {
        "def": "(noun) a state of total disorder or chaotic confusion.",
        "ex": "Fleabag's personal life falls into total shambles after a family argument."
    },
    "snob": {
        "def": "(noun) a person who looks down on others with inferior social status or taste.",
        "ex": "Miranda Priestly acts as an elitist fashion snob who demands perfection."
    },
    "spoiler alert": {
        "def": "(noun) a warning that a statement will reveal key plot twists.",
        "ex": "A poignant drama addresses life's sudden twists without giving away a spoiler alert."
    },
    "step-parent": {
        "def": "(noun) a person married to one's biological mother or father.",
        "ex": "Jackie learns to cooperate with Isabel as a caring step-parent."
    },
    "summer fling": {
        "def": "(noun) a brief romantic relationship during summer vacation.",
        "ex": "Elio and Oliver share an unforgettable summer fling in Italy."
    },
    "suppression": {
        "def": "(noun) the act of forcibly stopping, hiding, or restraining something.",
        "ex": "Equals depicts a futuristic society built on the complete suppression of emotion."
    },
    "séance": {
        "def": "(noun) a meeting at which people attempt to contact the dead.",
        "ex": "A terrifying séance reveals the nature of the mansion's spirits."
    },
    "tribute": {
        "def": "(noun) a gift or statement showing gratitude and respect; or a selected participant.",
        "ex": "Katniss Everdeen volunteers as a tribute to save her younger sister."
    },
    "vigilante": {
        "def": "(noun) a self-appointed citizen who undertakes law enforcement without authority.",
        "ex": "The masked figure operates as a solitary vigilante fighting tyranny."
    },
    "what's your damage?": {
        "def": "(phrase) iconic 1980s high school slang meaning 'what is wrong with you?'.",
        "ex": "Heather Chandler angrily asks her classmates 'what's your damage?' in the hallway."
    },
    "suburbia": {
        "def": "(noun) suburban districts and their characteristic conservative lifestyle.",
        "ex": "Dark secrets unravel behind the pristine lawns of quiet suburbia."
    },
    "протест": {
        "def": "(noun) публичное выражение несогласия или сценический акт.",
        "ex": "Яркое выступление превращается в смелый протест против несправедливости."
    }
}

# 2. Bespoke Fallback Replacements for 8 Template Files
BESPOKE_FALLBACKS = {
    "101-and-102-dalmatians.html": {
        "title": "101 & 102 Dalmatians",
        "level": "Elementary (A2)",
        "variety": "British English",
        "theme_focus": "Possessions vs empathy, eccentric villainy, animal instincts, redemption & fashion obsession",
        "grammar_focus": "Demonstrative Determiners, Possessives & Imperatives for Pets",
        "vocab": [
            ("Eccentric", "(adjective) unconventional and slightly strange in behavior.", "Cruella de Vil's eccentric taste in high fashion terrifies everyone around her."),
            ("Extravagance", "(noun) excessive or unnecessary spending on luxury items.", "Designing a coat made from puppy fur represents the ultimate villainous extravagance."),
            ("Captivity", "(noun) the condition of being imprisoned or confined.", "The ninety-nine Dalmatian puppies work together to escape captivity in Hell Hall."),
            ("Obsession", "(noun) an unhealthy state of mind dominated by a single idea.", "Cruella's obsession with black-and-white spotted fur drives her to extreme measures."),
            ("Infatuation", "(noun) an intense but short-lived passion or admiration.", "Dr. Pavlov's behavioral therapy creates a temporary infatuation with protecting animals."),
            ("Spotless", "(adjective) completely clean, immaculate, or free from spots.", "Oddball the Dalmatian puppy is born completely spotless, causing her great anxiety."),
            ("Villainy", "(noun) wicked or criminal behavior.", "Jasper and Horace carry out Cruella's villainy with clumsy incompetence."),
            ("Menagerie", "(noun) a collection of wild or unusual animals kept in captivity.", "Kevin's animal shelter houses a diverse menagerie of rescued pets."),
            ("Counterfeit", "(adjective/noun) made in exact imitation of something valuable with intent to deceive.", "Cruella presents a counterfeit persona of animal kindness to the press after prison."),
            ("Rehabilitation", "(noun) the action of restoring someone to health or normal life through training.", "The court believes Cruella's behavioral rehabilitation is genuine until a loud chime reverses it.")
        ],
        "slang": [
            ("Pooches", "(noun) informal slang for dogs.", "Horace and Jasper struggle to catch the clever pooches as they flee across London."),
            ("Spot-mania", "(noun) an obsessive fascination with Dalmatian fur patterns.", "London high society falls under the spell of spot-mania during Cruella's fashion show."),
            ("Hell Hall", "(noun) the dark Suffolk mansion where the stolen puppies are kept.", "The puppies plan their midnight escape from the freezing rooms of Hell Hall."),
            ("Oddball", "(noun) an eccentric person; also the name of the spotless Dalmatian pup.", "Oddball feels left out because she lacks the black spots shared by her siblings."),
            ("Puppy mill", "(noun) an inhumane commercial dog breeding facility.", "Kevin fights against illegal pet trade operations to safeguard local dogs."),
            ("Fur coat", "(noun) a garment made from animal pelts, symbol of Cruella's greed.", "Cruella demands a unique fur coat crafted exclusively from natural Dalmatian pelts."),
            ("Barking chain", "(noun) the long-distance telegraph communication system among dogs.", "Dogs across the English countryside pass news along the barking chain to locate the pups."),
            ("Dr. Pavlov", "(noun) the scientist who conditioned Cruella to love animals.", "Dr. Pavlov's sound-conditioning experiment reverses the moment Big Ben chimes."),
            ("Waddlesworth", "(noun) the eccentric parrot who believes he is a Rottweiler.", "Waddlesworth provides comedic relief by barking fiercely at intruder dogs."),
            ("Spotless coat", "(noun) a pure white fur coat without markings.", "Oddball finally develops her first natural spots at the end of the journey.")
        ],
        "round1": [
            ("Cruella de Vil's obsession with crafting a spotted fur coat drives the entire conflict of 101 Dalmatians. How do Pongo and Perdita use their parental instincts to locate their stolen puppies?", "★ What instincts or bonds drive family members to protect one another in moments of crisis?"),
            ("Horace and Jasper are hired to guard Hell Hall in Suffolk. How does their incompetence allow the puppies to organize a clever escape?", "★ Why do comedic villains in family cinema often fail despite having superior power?"),
            ("The 'Twilight Bark' acts as an nationwide telegraph network among British dogs. How does this animal communication showcase solidarity across London?", "★ What informal communication networks do humans rely on when formal systems fail?"),
            ("In 102 Dalmatians, Cruella undergoes behavioral conditioning by Dr. Pavlov to become 'Ella', a devoted friend to animals. How genuine is her transformation initially?", "★ Do you believe deeply ingrained personality traits can be permanently changed through therapy?"),
            ("Oddball is born without any black spots, making her feel isolated among her siblings. How does her struggle reflect childhood desires to fit in?", "★ How do young people learn to embrace their unique physical traits rather than hiding them?"),
            ("Chloe Simon serves as Cruella's parole officer while owning Dipstick, one of the original 99 puppies. How does her skepticism protect the shelter?", "★ Why is caution necessary when dealing with individuals who claim to have completely reformed?"),
            ("Kevin Shepherd runs the Second Chance Animal Shelter, prioritizing animal welfare over financial profit. How does his passion contrast with Cruella's greed?", "★ What inspires people to dedicate their lives to protecting vulnerable animals?"),
            ("Cruella's brainwashing breaks down when the chimes of Big Ben alter her brainwaves. How does the screenplay handle her dramatic return to villainy?", "★ Why are sudden dramatic relapses compelling turning points in comedic storytelling?"),
            ("Jean-Pierre Le Pelt joins forces with Cruella to design an even more outrageous fashion line. How does his character elevate the high-fashion satire?", "★ How does fashion cinema use exaggeration to critique consumer vanity?"),
            ("The final climax inside the French bakery turns Cruella into a giant baked cake. How does this cartoonish punishment fit the tone of the film?", "★ What makes slapstick consequences satisfying for audiences in family comedies?")
        ],
        "round2": [
            ("Director Stephen Herek chose to use real trained Dalmatian puppies alongside animatronics and early CGI. How does seeing real animals enhance emotional warmth?", "★ Do you prefer films featuring real animal actors or fully computer-generated creatures?"),
            ("Glenn Close delivers an iconic, larger-than-life physical performance as Cruella de Vil. How does her theatrical acting style shape the movie's identity?", "★ What acting choices make a villain memorable without scaring younger audiences too much?"),
            ("The visual design contrasts the warm, cozy London home of Roger and Anita with the cold, gothic architecture of Hell Hall. How does lighting set the mood?", "★ How can interior set design communicate character morality before any dialogue is spoken?"),
            ("The costume design for Cruella utilizes sharp angles, stark black-and-white contrasts, and dramatic capes. How does attire reflect her inner psychology?", "★ How does costume choices influence your impression of a character's authority or danger?"),
            ("Sound design plays a crucial role, from the ominous theme song 'Cruella de Vil' to synchronized puppy barks. How does music heighten comedic timing?", "★ What role does a memorable leitmotif play in defining an iconic movie character?"),
            ("102 Dalmatians shifts the visual setting to sunny Paris and high-fashion runways. How does this geographic change affect the sequel's atmosphere?", "★ How should movie sequels alter their setting to feel fresh while maintaining core characters?"),
            ("The film satirizes high-society fashion shows where morality is sacrificed for artistic trends. How relevant is this critique today?", "★ Can artistic expression ever justify using unethical materials or practices?"),
            ("Waddlesworth the parrot provides voiceover humor by barking like a dog. How does species confusion serve as a recurring comedic device?", "★ Why do talking animal characters continue to entertain audiences across generations?"),
            ("The narrative explores the bond between humans and domesticated pets, framing dogs as equal family members. How has this perspective evolved in cinema?", "★ How have cultural attitudes toward pets and animal rights changed over recent decades?"),
            ("If you were directing a modern reboot of 101 Dalmatians, would you set it in Victorian London, modern digital times, or an animated universe?", "★ How can classic stories be adapted for modern audiences without losing their original charm?")
        ]
    },
    "16-wishes.html": {
        "title": "16 Wishes",
        "level": "Elementary (A2/B1)",
        "variety": "American English",
        "theme_focus": "Growing up too fast, consequences of desires, genuine friendship & adolescent self-discovery",
        "grammar_focus": "Wish Clauses (Present & Future) & Conditional Statements",
        "vocab": [
            ("Impulse", "(noun) a sudden strong and unreflective urge or desire to act.", "Abby acts on pure impulse when lighting her magic birthday candles."),
            ("Consequence", "(noun) a result or effect of an action or condition.", "Every wish Abby makes comes with an unexpected adult consequence."),
            ("Maturity", "(noun) the state, quality, or period of reaching full emotional development.", "True maturity means accepting responsibilities rather than wishing away childhood."),
            ("Naivety", "(noun) lack of experience, wisdom, or judgment.", "Abby's naivety leads her to believe that adulthood is completely free from trouble."),
            ("Catalyst", "(noun) a person or event that precipitates a change.", "The mysterious box of candles acts as a catalyst for Abby's chaotic birthday."),
            ("Adolescent", "(noun/adjective) a young person in the process of developing from a child into an adult.", "The film highlights typical adolescent struggles with popularity and independence."),
            ("Self-reliance", "(noun) reliance on one's own powers and resources rather than those of others.", "Abby learns self-reliance when her magical shortcuts backfire dramatically."),
            ("Wishful", "(adjective) having or expressing a wish or longing.", "She keeps a wishful journal containing sixteen goals for her sixteenth birthday."),
            ("Transformation", "(noun) a thorough or dramatic change in form or appearance.", "Her house undergoes an instant transformation into a luxurious adult mansion."),
            ("Reconciliation", "(noun) the restoration of friendly relations after a dispute.", "Abby seeks reconciliation with her best friend Jay after realizing her mistakes.")
        ],
        "slang": [
            ("Sweet Sixteen", "(noun) a celebration marking a girl's sixteenth birthday.", "Abby has planned her Sweet Sixteen celebration for years in meticulous detail."),
            ("Matchbox magic", "(noun) the mysterious power contained inside Celeste's candle box.", "Each candle in the matchbox magic corresponds to a specific number on her list."),
            ("Birthday list", "(noun) a written compilation of personal desires and goals.", "Her birthday list holds sixteen wishes ranging from meeting her crush to driving a red car."),
            ("Celeste", "(noun) the enigmatic wish-giver disguised as a sales assistant.", "Celeste appears at key moments to ensure Abby learns the rules of her wishes."),
            ("Fast-forward", "(verb) to move ahead rapidly through time or stages of life.", "Abby inadvertently fast-forwards her life straight into adult responsibilities."),
            ("Wishbook", "(noun) Abby's personal scrapbook filled with pictures of her desires.", "The wishbook magically glows whenever a wish is activated by candle smoke."),
            ("Red sports car", "(noun) the dream vehicle Abby wishes to drive on her birthday.", "Driving the red sports car seems exciting until she gets pulled over by police."),
            ("Jay Keystone", "(noun) Abby's loyal childhood best friend.", "Jay consistently reminds Abby of what truly matters beyond superficial popularity."),
            ("Krista Cook", "(noun) Abby's rival who shares the exact same birthday.", "Krista and Abby compete continuously for the ultimate sixteenth birthday party."),
            ("Rule of Midnight", "(noun) the deadline after which all fulfilled wishes become permanent at midnight.", "Abby races against the clock before the Rule of Midnight traps her in adulthood forever.")
        ],
        "round1": [
            ("Abby Jensen has spent eight years curating her list of 16 secret wishes. How does her desire to skip childhood reflect common teenage frustrations?", "★ What is one milestone from growing up that you couldn't wait to achieve when you were younger?"),
            ("When Celeste hands Abby the magical candle box, each candle corresponds to one wish. Why does having instant gratification prove dangerous?", "★ How does waiting and working for something make the eventual reward more satisfying?"),
            ("Abby wishes to be treated like an adult, but suddenly her parents no longer recognize her. How does losing family support change her perspective?", "★ Why do young people often underestimate the emotional comfort provided by family rules?"),
            ("Krista Cook and Abby have been rivals since childhood due to sharing a birthday. How does their competition stem from mutual misunderstandings?", "★ How can honest communication prevent small childhood rivalries from lasting for years?"),
            ("Jay Keystone stays by Abby's side even when her wishes turn her world upside down. How does his loyalty define genuine friendship?", "★ What qualities do you value most in a long-term friend during life transitions?"),
            ("Wish number nine grants Abby her dream red sports car, but she lacks the adult experience needed to handle it safely. What does this scene teach about readiness?", "★ Why is having the freedom to do something dangerous without the experience to manage it?"),
            ("When Abby realizes she has been erased from her own family house, she seeks help from Celeste. How does Celeste guide her without solving her problems directly?", "★ Why are mentors who force us to solve our own mistakes more effective than those who fix everything for us?"),
            ("The film explores the difference between material possessions (designer clothes, cars) and emotional connections. How does Abby's priority shift?", "★ What life experiences have made you value relationships over physical items?"),
            ("Abby uses her final wish to reverse time and restore her morning of turning sixteen. Why is undoing magic the ultimate sign of her maturity?", "★ Why is admitting a mistake and asking for a reset a sign of strength rather than failure?"),
            ("At the end of her birthday, Abby merges her party with Krista's celebration. How does sharing success represent true personal growth?", "★ How does sharing a moment of triumph with former rivals transform a social environment?")
        ],
        "round2": [
            ("Director Peter DeLuise uses vibrant, saturated colors to distinguish magical Wishbook scenes from ordinary high school life. How does visual tone guide the mood?", "★ How do bright, colorful aesthetics influence an audience's emotional response in youth cinema?"),
            ("The narrative follows classic Disney Channel original movie tropes: a magical catalyst, a time-limit countdown, and a moral lesson. Why is this formula so successful?", "★ What makes coming-of-age fantasy tropes comforting and relatable for teen viewers?"),
            ("Celeste's character shifts between a helpful sales clerk, a bus driver, and a mysterious mentor. How does her shifting role maintain narrative suspense?", "★ Why are mysterious guide characters effective in magical realism cinema?"),
            ("The countdown mechanic—where wishes become permanent at midnight—creates narrative urgency in the second half. How does time pressure elevate comedy?", "★ How does adding a strict deadline change the energy of a comedic film?"),
            ("Soundtrack music plays a major role in establishing emotional peaks during wish fulfillments. How does pop music amplify adolescent themes?", "★ What role does contemporary music play in anchoring a film to a specific generation?"),
            ("The film contrasts teenage ideas of adulthood (fancy dresses, independence) with real adult burdens (bills, isolation, employment). How effective is this humor?", "★ Why is the gap between teenage expectations of adulthood and reality such a rich source of comedy?"),
            ("Debby Ryan's physical comedy during the adult transition scenes delivers relatable humor. How important is lead actor charm in teen movies?", "★ How much of a teen movie's success relies on the charismatic performance of its protagonist?"),
            ("The setting moves between suburban homes, high school corridors, and an upscale party venue. How do these locations anchor the social hierarchy?", "★ How do school settings in cinema reflect real-world social dynamics among teenagers?"),
            ("The resolution emphasizes that being sixteen is a special bridge between childhood and adulthood that shouldn't be rushed. Do you agree with this message?", "★ Why is it important for teenagers to enjoy their current stage of life rather than rushing to grow up?"),
            ("If you could write a sixteenth wish onto Abby's list that was not in the movie, what positive or funny wish would you add?", "★ What wish would you have added to your personal list when you turned sixteen?")
        ]
    },
    "destino.html": {
        "title": "Destino",
        "level": "Elementary (A2/B1)",
        "variety": "American English / Surrealist Cinema",
        "theme_focus": "Surrealism, destiny, artistic collaboration, subconscious desires & timeless love",
        "grammar_focus": "Past Continuous & Speculative Conditionals for Surreal Art",
        "vocab": [
            ("Surrealism", "(noun) a 20th-century avant-garde movement in art and literature that sought to release the creative potential of the unconscious mind.", "Destino stands as a supreme animated achievement of surrealism in film."),
            ("Metamorphosis", "(noun) a change of the form or nature of a thing or person into a completely different one.", "The main character undergoes a stunning metamorphosis into a statue."),
            ("Subconscious", "(noun/adjective) concerning the part of the mind of which one is not fully aware but which influences actions and feelings.", "Dalí's imagery explores the deep labyrinth of the human subconscious."),
            ("Chronos", "(noun) the personification of time in ancient Greek philosophy and mythology.", "The giant stone figure represents Chronos, bound by the sands of time."),
            ("Mortal", "(noun/adjective) a human being subject to death, as opposed to a divine or immortal being.", "A mortal woman falls in love with the mythical embodiment of time."),
            ("Fleeting", "(adjective) lasting for a very short time; brief and transitory.", "Human love is depicted as a fleeting spark against eternal stone landscapes."),
            ("Labyrinth", "(noun) a complicated irregular network of passages or paths in which it is difficult to find one's way.", "She dances through a surreal labyrinth constructed from shadows and melting towers."),
            ("Dandelion", "(noun) a yellow flower whose seeds fly away in the wind, symbolizing delicate wishes.", "Her head transforms into a dandelion whose seeds drift into the desert sky."),
            ("Transcendent", "(adjective) beyond or above the range of normal or merely physical human experience.", "The short film delivers a transcendent visual message without spoken words."),
            ("Collaboration", "(noun) the action of working with someone to produce or create something.", "The historic collaboration between Walt Disney and Salvador Dalí took decades to finalize.")
        ],
        "slang": [
            ("Melting clocks", "(noun) Dalí's iconic artistic motif representing the fluid nature of time.", "Melting clocks stretch across desert dunes as Chronos gazes into the horizon."),
            ("Destino", "(noun) the Spanish word for destiny or fate.", "The song 'Destino' drives the emotional rhythm of the entire animated sequence."),
            ("Disney-Dalí project", "(noun) the legendary 1945 artistic partnership that lay dormant until 2003.", "Roy E. Disney revived the Disney-Dalí project using original storyboard sketches."),
            ("Dahlberg storyboard", "(noun) original conceptual drawings created by John Hench and Salvador Dalí.", "Animators carefully studied every Dahlberg storyboard to preserve Dalí's original vision."),
            ("Shadow dancer", "(noun) the mortal woman who moves fluidly across surreal landscapes.", "The shadow dancer seeks union with the tragic stone giant of time."),
            ("Tower of time", "(noun) a towering structure built from stone arms and melting hourglasses.", "Chronos reaches down from his tower of time to touch the dancing maiden."),
            ("Baseball motif", "(noun) Dalí's unusual integration of American baseball into surreal art.", "Subtle baseball motifs emerge in the desert, reflecting Disney's influence on Dalí."),
            ("Armando Dominguez", "(noun) the Mexican composer who wrote the haunting title song.", "Armando Dominguez's music gives emotional voice to the silent animation."),
            ("Dormant art", "(noun) artwork left unfinished for decades before being completed.", "Destino remained dormant art in the Disney vaults for nearly sixty years."),
            ("Visual poem", "(noun) a film structured like poetry through imagery rather than plot.", "Critics describe Destino as a breathtaking visual poem about love and impermanence.")
        ],
        "round1": [
            ("In 1945, Walt Disney and Salvador Dalí began collaborating on Destino to explore the tragic romance between Chronos and a mortal woman. How does art express love without dialogue?", "★ How can visual art or music convey deep romantic feelings more powerfully than written words?"),
            ("The female protagonist transforms continuously—her head becoming a dandelion, her shadow becoming a dress. What does constant transformation reveal about human identity?", "★ Why do our self-perceptions and emotions feel like they are constantly changing over time?"),
            ("Chronos is trapped within a massive stone structure, unable to break free to join the woman he loves. How does time act as a barrier to human happiness?", "★ How can feeling trapped by time or schedules hinder our ability to enjoy meaningful relationships?"),
            ("The desert landscape features melting clocks, bell-shaped towers, and vast empty horizons. How do these surreal elements evoke a dreamlike state?", "★ Have you ever experienced a dream where familiar surroundings felt strangely surreal?"),
            ("A hollow statue shaped like a woman holds a glowing heart-shaped void. What does this symbol suggest about emotional longing?", "★ What do you think causes people to feel an unspoken void or longing in their creative lives?"),
            ("The mortal woman steps into the silhouette of a gown formed by the shadow of Chronos. How does this visual detail symbolize fate?", "★ Do you believe people are guided by fate, or do we create our own destiny through choices?"),
            ("Dolphins transform into flying sports cars and baseball players appear in the desert. How does blending high art with pop culture challenge audience expectations?", "★ Why is mixing serious art with playful pop culture elements so surprising and memorable?"),
            ("The project was shelved in 1946 due to financial troubles following WWII and revived in 2003 by Roy E. Disney. Why was completing this piece important for film history?", "★ Why is it valuable to finish historic artistic works started by master creators long ago?"),
            ("The title 'Destino' translates to destiny. How does the ending show two souls remaining connected despite physical separation?", "★ How can people stay emotionally connected to loved ones even when separated by distance or time?"),
            ("Without any spoken dialogue, the film relies entirely on Armando Dominguez's ballad. How does the music tell the story?", "★ How does a powerful musical score guide your understanding of a silent film or art piece?")
        ],
        "round2": [
            ("French director Dominique Monféry combined traditional 2D hand-drawn animation with subtle 3D computer graphics to complete Destino. How seamless is this blend?", "★ Can digital animation technology capture the personal touch of traditional hand-drawn art?"),
            ("Salvador Dalí described animation as 'the perfect medium for surrealism because anything is possible on screen.' Do you agree with his view?", "★ Why does animation offer more creative freedom for surrealist art than live-action cinema?"),
            ("The color palette shifts from warm desert golds and terracottas to cool twilight blues as Chronos struggles. How does color mirror the mood?", "★ How do subtle shifts in background color influence your mood while watching cinema?"),
            ("The visual motifs include melting clocks, stone statues, and hollow shadows. Which image from Destino left the strongest impression on you?", "★ What single image or visual symbol from art or cinema has stayed in your memory the longest?"),
            ("Walt Disney viewed Destino as a simple story about a girl in search of true love, while Dalí called it a depiction of time's destiny. Why did their viewpoints differ?", "★ How can two artists collaborate successfully when they interpret the same project differently?"),
            ("The short film runs for six minutes, yet conveys deep philosophical themes about mortality. How effective is short-form cinema?", "★ Do short films require more precise storytelling than full-length feature movies?"),
            ("The shadow of the giant stone figure towers over the desert, creating dramatic light contrasts. How does shadow play build emotional tension?", "★ How can directors use shadows and lighting to create mystery without relying on dialogue?"),
            ("The climax shows the woman's spirit fused into Chronos' stone chest, filling his empty heart void. How do you interpret this ending?", "★ Do you view the ending of Destino as a tragic loss or a romantic triumph of eternal love?"),
            ("How does viewing a surrealist film force the audience to become active interpreters rather than passive viewers?", "★ Why do you enjoy films that leave room for multiple personal interpretations rather than explaining everything?"),
            ("If you were asked to collaborate with an artist from history to create an animated short, which artist and art style would you choose?", "★ Which historical painter or artist's style would you love to see transformed into a movie?")
        ]
    },
    "homeward-bound.html": {
        "title": "Homeward Bound: The Incredible Journey",
        "level": "Elementary (A2)",
        "variety": "American English",
        "theme_focus": "Animal loyalty, family bond, navigation, survival instincts & wilderness peril",
        "grammar_focus": "Past Simple & Prepositions of Place for Wilderness Journey",
        "vocab": [
            ("Fidelity", "(noun) faithfulness to a person, cause, or belief, shown by loyalty and support.", "Shadow demonstrates unwavering fidelity by waiting for Peter at the brink of the pit."),
            ("Wilderness", "(noun) an uncultivated, uninhabited, and wild region.", "The three pets must navigate hundreds of miles of uncharted wilderness in the Sierra Nevada."),
            ("Navigation", "(noun) the process or activity of accurately ascertaining one's position and planning a route.", "Shadow uses keen directional instincts for navigation across rugged mountains."),
            ("Instinct", "(noun) an innate, typically fixed pattern of behavior in animals.", "Chance gradually learns to trust his wild instincts instead of relying solely on pet bowls."),
            ("Peril", "(noun) serious and immediate danger.", "Crossing rushing mountain rivers presents constant peril for the small Himalayan cat Sassy."),
            ("Reunion", "(noun) an instance of two or more people or animals coming together again after a period of separation.", "The final reunion on the suburban lawn brings tears of relief to the entire family."),
            ("Companion", "(noun) a person or animal with whom one spends a lot of time or with whom one travels.", "The three companions keep each other warm during freezing wilderness nights."),
            ("Endurance", "(noun) the capacity of something to last or to withstand wear and tear.", "Shadow's aging body tests the limits of his physical endurance on steep rocky slopes."),
            ("Domesticated", "(adjective) tamed and kept as a pet or on a farm.", "Living as domesticated pets leaves them unprepared for wild predators like mountain lions."),
            ("Loyalty", "(noun) the quality of being loyal and giving firm support.", "Their journey proves that animal loyalty knows no physical boundary.")
        ],
        "slang": [
            ("Pack mentality", "(noun) the instinct of animals to act together as a unified group.", "Shadow establishes a supportive pack mentality to keep Chance and Sassy safe."),
            ("Sassy attitude", "(noun) a witty, cheeky, and self-confident demeanor.", "Sassy the cat maintains her witty sassy attitude even when covered in mountain mud."),
            ("Porcupine quill", "(noun) a sharp needle-like spine from a porcupine.", "Chance suffers a painful nose full of porcupine quills after teasing a wild creature."),
            ("Lost in the wild", "(noun) being stranded in uncharted natural territory.", "The pets fear their owners abandoned them, unaware they are simply lost in the wild."),
            ("Sierra Nevada", "(noun) the vast mountain range where the pets travel.", "Snow-capped Sierra Nevada peaks form a daunting backdrop for their trek home."),
            ("Muddy pit", "(noun) the slippery hole where Shadow gets trapped near the climax.", "Shadow becomes stuck in a muddy pit, forcing Chance to step up as a leader."),
            ("Don Ameche", "(noun) the legendary actor who voiced wise old Golden Retriever Shadow.", "Don Ameche's calm voice performance gives Shadow deep dignity and warmth."),
            ("Michael J. Fox", "(noun) the actor who voiced energetic American Bulldog Chance.", "Michael J. Fox brings youthful enthusiasm and comedic timing to Chance's inner monologue."),
            ("Sally Field", "(noun) the actress who provided the voice for pampered cat Sassy.", "Sally Field delivers hilarious aristocratic cat dialogue that balances the dog energy."),
            ("Home sweet home", "(noun) an expression of joy upon returning to one's family environment.", "Reaching their backyard reminds the pets that home sweet home is worth every hardship.")
        ],
        "round1": [
            ("Shadow, Chance, and Sassy misinterpret being left at a friend's ranch as permanent abandonment. How does miscommunication spark their decision to trek home?", "★ Have you ever misinterpreted a situation and taken drastic action before getting all the facts?"),
            ("Shadow acts as the wise leader whose experience keeps the group focused on heading east. How does respect for elders guide their survival?", "★ Why is trusting experienced leaders vital when navigating unfamiliar challenges?"),
            ("Chance starts as an undisciplined dog who only cares about food, but grows into a protective brother. How does hardship build character?", "★ How do unexpected difficulties help young people develop responsibility and empathy?"),
            ("Sassy gets swept down a roaring waterfall and separated from the dogs. How does her survival show feline resilience?", "★ What inner strengths help people bounce back after facing a sudden, frightening setback?"),
            ("When Chance gets spiked by a porcupine, a kindly wilderness hermit removes the quills. How does human kindness cross species barriers?", "★ How does encountering unexpected generosity during tough times restore your faith in people?"),
            ("The three animals must outsmart a mountain lion by using a makeshift wooden teeter-totter log. How does teamwork overcome physical weakness?", "★ How can clever strategy and cooperation defeat an obstacle that seems far stronger than you?"),
            ("Back home, Peter refuses to give up hope that Shadow will return, despite adults telling him to accept reality. What fuels his belief?", "★ Why is holding onto hope important even when circumstances look discouraging to others?"),
            ("Near the end of the journey, Shadow falls into a muddy pit and tells Chance to go on without him because his old legs are failing. How emotional is this moment?", "★ How do true friends handle moments when one partner feels ready to give up?"),
            ("Chance arrives first at the family home, followed by Sassy, leaving Peter waiting anxiously for Shadow. How does Shadow's slow limping arrival create catharsis?", "★ What makes a long-awaited reunion one of the most powerful scenes in storytelling?"),
            ("The film contrasts the comfort of human domestic life with the unforgiving beauty of nature. What does 'home' mean to domesticated animals?", "★ What specific feelings, memories, or people define what 'home' means to you?")
        ],
        "round2": [
            ("Director Duwayne Dunham filmed real animal actors across Oregon wilderness without relying on computer-generated imagery. How does real animal acting impact warmth?", "★ Do you prefer films featuring real animal actors or fully computer-generated creatures?"),
            ("The decision to use voiceover inner monologues rather than digitally moving the animals' mouths keeps their movements natural. How effective is this artistic choice?", "★ Why is voiceover narration often better than digital mouth manipulation for live animals?"),
            ("Cinematographer Reed Smoot captured sweeping vistas of forests, waterfalls, and snow peaks. How does nature photography elevate the story?", "★ How does grand natural scenery heighten the drama of a personal survival story?"),
            ("The film balances light comedic bickering between Chance and Sassy with genuinely perilous survival situations. How well is this tone maintained?", "★ Why is comedy essential in family survival movies to prevent the story from becoming too dark?"),
            ("The musical score by Bruce Broughton features triumphant brass themes whenever the pets conquer a mountain ridge. How does music evoke triumph?", "★ How can an uplifting orchestral score make an audience feel victorious alongside the characters?"),
            ("Each animal represents a distinct personality type: the wise veteran (Shadow), the rebellious youth (Chance), and the proud aristocrat (Sassy). How do these archetypes interact?", "★ Which of these three personality types best matches how you behave in a group project?"),
            ("The narrative explores the deep psychological bond between children and their childhood pets. How does this connection resonate universally?", "★ Why do stories about pet loyalty hold such a special place in global popular culture?"),
            ("The climax in the muddy railway pit tests Chance's maturity as he refuses to leave Shadow behind. How does camera framing highlight their bond?", "★ How do tight close-up shots enhance emotional intimacy between characters in film?"),
            ("Homeward Bound is a remake of Disney's 1963 classic 'The Incredible Journey'. How did adding voiceover talent update the original story for 1990s audiences?", "★ What elements should a movie remake keep from the original version to honor its legacy?"),
            ("If you were directing a modern version of Homeward Bound today, what three animals would you select for the journey, and where would you set it?", "★ What unique combination of pets would you choose to star in a modern wilderness adventure?")
        ]
    },
    "luck.html": {
        "title": "Luck",
        "level": "Elementary (A2/B1)",
        "variety": "American English",
        "theme_focus": "Superstition, optimism, foster care solidarity, finding belonging & bad luck harmony",
        "grammar_focus": "First Conditional & Modals of Probability for Good and Bad Fortune",
        "vocab": [
            ("Superstition", "(noun) excessively credulous belief in and reverence for supernatural causality.", "Sam suffers from continuous bad luck until a black cat drops a lucky penny."),
            ("Fortunate", "(adjective) favored by or involving good luck; lucky.", "The inhabitants of the Land of Luck enjoy a perfectly fortunate existence."),
            ("Coincidence", "(noun) a remarkable concurrence of events or circumstances without apparent causal connection.", "Meeting Bob the talking cat seems like a wild coincidence, but it leads Sam to a new world."),
            ("Harmony", "(noun) a pleasing arrangement or combination of components.", "Sam learns that good luck and bad luck must coexist in delicate harmony."),
            ("Foster care", "(noun) a system in which a minor is placed into a ward, group home, or private home of a state-certified caregiver.", "Sam turns eighteen and leaves foster care, hoping to help little Hazel find a forever family."),
            ("Resilience", "(noun) the capacity to recover quickly from difficulties; toughness.", "Dealing with lifelong bad luck gives Sam incredible problem-solving resilience."),
            ("Leprechaun", "(noun) a mischievous elf in Irish folklore.", "Gerry the leprechaun manages security and lucky penny distribution in the upper realm."),
            ("Unfortunate", "(adjective) not blessed with good fortune; unlucky.", "Sam considers herself the most unfortunate girl in the world until she meets Bob."),
            ("Equilibrium", "(noun) a state in which opposing forces or influences are balanced.", "Destroying all bad luck disrupts the global equilibrium of human emotional growth."),
            ("Belonging", "(noun) an affinity for a place or situation; acceptance as a natural member.", "Sam's ultimate wish is not personal wealth, but finding a true sense of family belonging.")
        ],
        "slang": [
            ("Land of Luck", "(noun) the hidden realm where good fortune is manufactured.", "Pristine emerald machinery works non-stop inside the Land of Luck."),
            ("Land of Bad Luck", "(noun) the cozy subterranean world where unluckiness is created.", "The Land of Bad Luck features warm, chaotic, rustic spaces filled with friendly creatures."),
            ("Lucky penny", "(noun) a magical coin that grants continuous good fortune.", "Sam desperately tries to secure a lucky penny so little Hazel can be adopted."),
            ("Bob the cat", "(noun) a clever Scottish black cat who secretly travels between realms.", "Bob pretends to be a normal stray cat until he accidentally speaks in front of Sam."),
            ("Babe the Dragon", "(noun) the elegant CEO dragon who scent-tests good luck dust.", "Babe the Dragon oversees the production of good luck with regal authority."),
            ("Bad luck hazard", "(noun) dark purple soot that causes instant minor mishaps.", "Spilling bad luck hazard causes doors to jam and items to drop immediately."),
            ("Jinxed life", "(noun) a lifestyle plagued by relentless minor accidents.", "Sam handles her jinxed life with humor and endless patience."),
            ("Good vibes", "(noun) positive social energy and optimism.", "The leprechauns maintain high spirits and good vibes to keep the luck factory running."),
            ("Four-leaf clover", "(noun) a rare clover variation symbolizing luck.", "Four-leaf clovers power the central engine of the lucky realm."),
            ("Hazel", "(noun) the young girl in foster care whom Sam loves like a sister.", "Sam prioritizes Hazel's happiness above all her own personal comfort.")
        ],
        "round1": [
            ("Sam Greenfield has spent her whole life enduring hilarious, constant bad luck—from locked doors to flying breakfast toast. How does her positive attitude keep her going?", "★ How do you maintain optimism when minor everyday obstacles seem to pile up against you?"),
            ("When Sam ages out of foster care, her biggest goal is securing a lucky penny for little Hazel so Hazel can find an adoptive family. What does this show about her selflessness?", "★ Why do people who have experienced personal hardship often feel driven to help others?"),
            ("Bob the black cat loses his lucky penny and must return to the Land of Luck to avoid exile. How does Sam's accidental trip into his world change both their lives?", "★ How can an unexpected mistake lead you into an exciting new opportunity or friendship?"),
            ("Inside the Land of Luck, leprechauns, dragons, and pigs work together in an automated emerald factory. What does this magical bureaucracy reveal about luck?", "★ Why do humans love coming up with logical explanations for random good or bad fortune?"),
            ("Sam tries to navigate the Land of Luck while wearing a oversized leprechaun disguise. How does her natural bad luck disrupt their delicate machinery?", "★ Have you ever tried to blend into a new environment where you felt completely out of place?"),
            ("Babe the Dragon believes that bad luck is purely toxic and must be kept far away from society. How does her extreme perspective create imbalance?", "★ Why is trying to eliminate all negative experiences from life unrealistic and unhelpful?"),
            ("When Sam and Bob accidentally shut down both luck machines, they travel to the Land of Bad Luck below. How does the cozy atmosphere of Bad Luck surprise them?", "★ Why do cozy, imperfect environments often feel warmer and more welcoming than flawless ones?"),
            ("Root the goblin explains that bad luck teaches people resourcefulness, empathy, and humor. Do you agree with his philosophy on adversity?", "★ What is a valuable lesson or skill you learned from dealing with an unlucky setback?"),
            ("Sam realizes that Hazel doesn't need a magical lucky penny to be adopted—she needs loving parents who appreciate her as she is. How does this realization shift her focus?", "★ Why are real emotional connections more reliable than superstitions or lucky charms?"),
            ("Bob decides to stay in the human world with Sam and Hazel, choosing family over perfect good luck. What makes his choice a true happy ending?", "★ How would you define a truly 'fortunate' life—having constant success or having people who love you?")
        ],
        "round2": [
            ("Director Peggy Holmes designed two contrasting realms: the sleek, shiny Land of Luck and the warm, rustic Land of Bad Luck. How does color palette build worldbuilding?", "★ How does contrasting visual environments help communicate underlying themes in animated cinema?"),
            ("Eva Noblezada provides the voice of Sam while Simon Pegg voices Bob the cat. How does their comedic banter anchor the emotional heart of the film?", "★ What makes a buddy-comedy pairing between two opposite characters so fun to watch?"),
            ("The animation features elaborate physical slapstick, like Sam getting tangled in tape or catching falling keys. How difficult is timing in digital animation?", "★ Why is physical comedy so effective across different cultures and age groups?"),
            ("The film incorporates global superstitions—black cats, four-leaf clovers, pennies, horseshoe arches, and staircases. How does tapping into folklore engage viewers?", "★ What is a common superstition from your home culture, and do you secretly believe in it?"),
            ("Babe the Dragon, voiced by Jane Fonda, combines majestic elegance with maternal warmth. How does voice casting shape character presence?", "★ How does a veteran actor's voice bring authority and grace to an animated character?"),
            ("The narrative explores the foster care system with gentleness, highlighting the bond between Sam and Hazel. How sensitive is the storytelling?", "★ Why is it important for animated movies to tackle real-world topics like adoption and foster care?"),
            ("The climax shows Sam crafting a new balanced coin made from equal parts Good Luck and Bad Luck dust. How powerful is this visual metaphor?", "★ Why is balance a healthier goal in life than striving for complete perfection?"),
            ("The musical score by John Debney blends Celtic folk instruments with modern pop rhythms. How does music reinforce the leprechaun aesthetic?", "★ How can traditional folk instruments give a fantasy film a unique geographic identity?"),
            ("Luck was produced by Skydance Animation as their debut feature film. How does its visual polish compare to established animation studios?", "★ What qualities do you look for when watching a new animation studio's inaugural feature film?"),
            ("If you could design your own magical realm responsible for a human emotion or experience, what concept would your world manufacture?", "★ What human experience (such as dreams, inspiration, or laughter) would you turn into an animated world?")
        ]
    },
    "ratatouille-english.html": {
        "title": "Ratatouille",
        "level": "Elementary (A2)",
        "variety": "American English",
        "theme_focus": "Passion vs prejudice, culinary artistry, Paris, authenticity & 'anyone can cook'",
        "grammar_focus": "Modal Verbs of Ability & Relative Clauses for Culinary Genius",
        "vocab": [
            ("Culinary", "(adjective) related to cooking or the kitchen.", "Remy possesses an extraordinary culinary talent that surpasses human chefs."),
            ("Scavenge", "(verb) search for and collect anything usable from discarded waste.", "The rat colony is content to scavenge garbage, but Remy craves gourmet flavors."),
            ("Gourmet", "(adjective/noun) involving high-quality, refined food.", "Remy dreams of preparing gourmet French dishes inside Paris's finest restaurants."),
            ("Authenticity", "(noun) the quality of being real, genuine, or true to one's passion.", "Chef Gusteau's recipes celebrate authenticity and passion over rigid rules."),
            ("Connoisseur", "(noun) an expert judge in matters of taste or fine art.", "Anton Ego prides himself on being the ultimate connoisseur of Parisian dining."),
            ("Prestige", "(noun) widespread respect and admiration felt for someone or something based on achievements.", "Gusteau's restaurant struggles to regain its lost prestige after losing a star."),
            ("Recipe", "(noun) a set of instructions for preparing a particular dish.", "Linguini stumbles through the kitchen until Remy guides his movements according to the recipe."),
            ("Prejudice", "(noun) preconceived opinion that is not based on reason or actual experience.", "Remy must overcome human prejudice against rats to pursue his dream."),
            ("Epiphany", "(noun) a moment of sudden and profound revelation.", "Taking his first bite of ratatouille triggers a childhood epiphany for Anton Ego."),
            ("Hierarchy", "(noun) a system in which members of an organization are ranked according to relative status.", "Colette explains the strict kitchen hierarchy of sous-chefs, line cooks, and dishwashers.")
        ],
        "slang": [
            ("Anyone can cook", "(phrase) Chef Gusteau's famous motto celebrating universal artistic potential.", "'Anyone can cook' inspires Remy to believe that great art can come from anywhere."),
            ("Little chef", "(noun) Linguini's affectionate nickname for Remy hiding under his hat.", "Linguini relies completely on his 'little chef' to survive in the high-pressure kitchen."),
            ("Gusteau's legacy", "(noun) the culinary philosophy and recipes left behind by Auguste Gusteau.", "Skinner attempts to commercialize Gusteau's legacy with cheap frozen microwave meals."),
            ("Kitchen hierarchy", "(noun) the traditional French brigade system organizing kitchen roles.", "Colette teaches Linguini how to respect the fast-paced kitchen hierarchy."),
            ("Anton Ego", "(noun) the feared food critic whose reviews can make or break a restaurant.", "Anton Ego enters Gusteau's with cold arrogance, demanding to be challenged."),
            ("Garbage rat", "(noun) Django's pragmatic view of rat identity in human society.", "Django warns Remy that humans view rats as nothing more than disease-carrying garbage rats."),
            ("Ratatouille dish", "(noun) a traditional Provençal stewed vegetable dish.", "Remy serves a modest peasant ratatouille dish to the most terrifying critic in France."),
            ("A taste of home", "(phrase) food that evokes nostalgic memories of childhood warmth.", "The simple vegetables give Anton Ego an unforgettable taste of home."),
            ("Ego's review", "(noun) the legendary newspaper column that restores Gusteau's reputation.", "Ego's review declares that a great artist can come from the most humble origins."),
            ("La Ratatouille", "(noun) the cozy bistro opened by Remy, Linguini, and Colette at the end.", "La Ratatouille features a special miniature dining room created exclusively for rats.")
        ],
        "round1": [
            ("Remy refuses to eat garbage like his colony, insisting on pairing fine cheese with fresh strawberries. How does his refined palate set him apart from his family?", "★ What is a passion or interest you have that makes you feel different from those around you?"),
            ("Chef Auguste Gusteau appears as a helpful figment of Remy's imagination. How does this inner mentor guide Remy when he feels hopeless in Paris?", "★ How do mentors—real or remembered—help us stay true to our goals during difficult moments?"),
            ("Linguini has zero cooking skills but inherits Gusteau's restaurant. How does his partnership with Remy under the chef's hat create chaotic harmony?", "★ Why do unexpected partnerships between people with different skills often produce great results?"),
            ("Colette Tatou is the only female cook in Gusteau's kitchen, working twice as hard to earn respect. What does her character reveal about perseverance?", "★ How can standing up for your worth in a competitive environment inspire others?"),
            ("Chef Skinner tries to profit off Gusteau's image by selling frozen microwavable meals. How does his greed contrast with true culinary art?", "★ What happens to art or food when commercial profit becomes more important than quality?"),
            ("Django takes Remy to a pest control shop window filled with dead traps to warn him about humans. How does Remy respond to his father's fear?", "★ How should young people balance listening to parental warnings with pursuing their own dreams?"),
            ("Linguini gets overwhelmed by sudden fame and temporarily takes credit for Remy's genius. How does vanity test their friendship?", "★ What should you do when a friend or colleague takes credit for work you accomplished together?"),
            ("When the health inspector arrives, the entire rat colony steps up to wash, cook, and serve food under Remy's direction. How thrilling is this climax?", "★ How does seeing a marginalized group unite to achieve something incredible inspire audiences?"),
            ("Remy serves Anton Ego a simple peasant dish—ratatouille—instead of an elaborate luxury meal. Why is this choice a brilliant artistic risk?", "★ Why can simplicity and genuine emotion often impress critics more than complex luxury?"),
            ("Anton Ego loses his job and status as a top critic after praising a rat-staffed kitchen, but he becomes a happy investor in La Ratatouille. Is this true success?", "★ How can letting go of arrogance and status lead to genuine personal happiness?")
        ],
        "round2": [
            ("Director Brad Bird used glowing color bursts and synchronized music to represent flavor combinations on screen. How effective is this visual metaphor?", "★ How can cinema convey invisible sensory experiences like taste or smell through visual art?"),
            ("Pixar animators took cooking classes and studied real rotting produce to render food texture accurately. How does attention to detail elevate animation?", "★ How does realistic detail in animated food or environments make a movie more immersive?"),
            ("Paris is depicted with golden romantic lighting, rainy cobblestone streets, and warm kitchen glow. How does the setting become its own character?", "★ What movie location or city made you fall in love with its atmosphere just by watching it?"),
            ("Anton Ego's office is shaped like a coffin and his typewriter resembles a skull. How does exaggerated visual design communicate character traits?", "★ How do set designers use gothic or ominous visual shapes to tell you about a villain's mindset?"),
            ("The flashback scene where young Ego drops his bicycle and receives a bowl of stew from his mother lasts only seconds. Why is it so emotionally powerful?", "★ What specific food or dish instantly transports you back to a warm childhood memory?"),
            ("The film explores the tension between tradition (rigid French recipes) and innovation (Remy's creative combinations). Where do you stand?", "★ Is it better to strictly follow established traditions or constantly experiment with new ideas?"),
            ("Michael Giacchino's accordion-driven musical score captures the essence of Parisian bistro culture. How does music set the geographic tone?", "★ How does a well-crafted musical soundtrack enhance your emotional connection to a country's culture?"),
            ("The ending rejects a traditional Hollywood cliché where Remy magically turns human or wins public fame, keeping him a secret chef. Do you prefer this realism?", "★ Why is an honest, modest happy ending often more satisfying than an unrealistic grand triumph?"),
            ("Anton Ego's final review concludes: 'Not everyone can become a great artist, but a great artist can come from anywhere.' How profound is this thesis?", "★ What does the phrase 'a great artist can come from anywhere' mean to you in modern society?"),
            ("If you were hired to cook a single three-course meal that represented your life story and heritage, what dishes would you serve?", "★ What three dishes would you prepare to introduce someone to your personal background and taste?")
        ]
    },
    "ratatouille-french.html": {
        "title": "Ratatouille (Édition Française)",
        "level": "Elementary (A2/B1)",
        "variety": "French Language",
        "theme_focus": "Passion culinaire, préjugés, Paris, authenticité & 'tout le monde peut cuisiner'",
        "grammar_focus": "Passé Composé, Imparfait & Expression de l'Opinion Culinaire",
        "vocab": [
            ("Gastronomie", "(noun) l'art de la bonne cuisine et le plaisir de la table.", "Remy possède une passion dévorante pour la grande gastronomie française."),
            ("Inspiré", "(adjective) guidé par une grande créativité ou une intuition artistique.", "Remy prépare des sauces inspirées qui émerveillent le jeune Linguini."),
            ("Préjugé", "(noun) une opinion préconçue donnée sans examen impartial.", "L'histoire montre comment surmonter les préjugés envers les plus modestes."),
            ("Critique", "(noun) une personne qui évalue la qualité des œuvres d'art ou des repas.", "Anton Ego est le critique gastronomique le plus redouté de tout Paris."),
            ("Savourer", "(verb) dégusté lentement avec un plaisir profond.", "Remy apprend à savourer chaque association de fromage et de fruits."),
            ("Cuisinier", "(noun) une personne qui prépare les repas dans un restaurant.", "Linguini tente d'agir comme un grand cuisinier grâce à l'aide secrète de Remy."),
            ("Héritage", "(noun) ce qui est transmis par les générations précédentes.", "Le chef Skinner détruit l'héritage d'Auguste Gusteau en vendant des plats surgelés."),
            ("Subtil", "(adjective) délicat, raffiné et difficile à percevoir au premier coup d'œil.", "Remy cherche des mélanges de saveurs subtils et harmonieux."),
            ("Épiphanie", "(noun) une prise de conscience soudaine et lumineuse.", "Une seule bouchée de ratatouille provoque une épiphanie nostalgique chez Ego."),
            ("Équipe", "(noun) un groupe de personnes travaillant ensemble pour un même but.", "La colonie de rats forme une équipe soudée pour sauver le service du soir.")
        ],
        "slang": [
            ("Tout le monde peut cuisiner", "(phrase) la célèbre devise du chef Gusteau célébrant le talent universel.", "'Tout le monde peut cuisiner' devient la devise qui guide les rêves de Remy."),
            ("Petit chef", "(noun) le surnom affectueux donné à Remy caché sous la toque.", "Linguini appelle tendrement Remy son 'petit chef' durant les coups de feu en cuisine."),
            ("L'héritage de Gusteau", "(noun) la philosophie culinaire et les recettes du grand chef parisien.", "Remy cherche à préserver l'héritage de Gusteau face à la cupidité de Skinner."),
            ("Sous-chef", "(noun) le cuisinier placé juste sous l'autorité du chef de cuisine.", "Colette occupe le poste de sous-chef avec une rigueur exemplaire."),
            ("Critique gastronomique", "(noun) un journaliste spécialisé dans l'évaluation des grands restaurants.", "L'arrivée du critique gastronomique met toute la brigade sous une pression immense."),
            ("Rat de cuisine", "(noun) l'expression désignant Remy travaillant en secret derrière les fourneaux.", "Ce petit rat de cuisine démontre un talent supérieur à celui des grands chefs."),
            ("Plat de ratatouille", "(noun) la recette traditionnelle provençale à base de légumes mijotés.", "Remy choisit de cuisiner un plat de ratatouille populaire pour impressionner le critique."),
            ("Souvenir d'enfance", "(phrase) une mémoire chaleureuse liée à la jeunesse.", "La première bouchée éveille un doux souvenir d'enfance chez Anton Ego."),
            ("Critique d'Anton Ego", "(noun) l'article légendaire publié dans le journal le lendemain du repas.", "La critique d'Anton Ego reconnaît qu'un grand artiste peut naître n'importe où."),
            ("Passion culinaire", "(noun) l'amour profond pour la création et la dégustation des repas.", "La passion culinaire de Remy transforme la vision de tous les cuisiniers de Paris.")
        ],
        "round1": [
            ("Remy refuse de manger des déchets comme le reste de sa colonie, préférant chercher des épices rares. Comment sa passion culinaire le distingue-t-elle de sa famille?", "★ Quelle passion personnelle vous donne le sentiment d'être différent de votre entourage?"),
            ("L'esprit du chef Auguste Gusteau apparaît à Remy pour l'encourager dans les moments de doute. Quel est le rôle de cet ami imaginaire?", "★ Comment les conseils d'un mentor vous aident-ils à garder espoir face aux obstacles?"),
            ("Linguini ne sait pas cuisiner mais hérite du restaurant de son père. Comment sa collaboration secrète avec Remy s'organise-t-elle sous la toque?", "★ Pourquoi les associations entre personnes aux talents complémentaires sont-elles si efficaces?"),
            ("Colette Tatou explique à Linguini la dureté du travail en cuisine et la discipline nécessaire. Que nous apprend son personnage sur la détermination?", "★ Que faut-il faire pour s'imposer et gagner le respect dans un milieu très compétitif?"),
            ("Le chef Skinner cherche à s'enrichir en vendant des pizes et plats surgelés sous le nom de Gusteau. Comment sa cupidité s'oppose-t-elle à l'art?", "★ Que devient la création artistique lorsque le profit financier devient la seule priorité?"),
            ("Django, le père de Remy, lui montre la vitrine d'un dératiseur pour lui faire peur. Comment Remy réagit-il face à la prudence de son père?", "★ Comment trouver l'équilibre entre les avertissements de ses parents et la poursuite de ses rêves?"),
            ("Lorsque Linguini devient célèbre, il oublie temporairement le rôle essentiel de Remy. Comment cette vanité met-elle leur amitié en danger?", "★ Que ressentez-vous lorsqu'un ami s'attribue tout le mérite d'un travail fait en équipe?"),
            ("Toute la colonie de rats se lave soigneusement les pattes pour cuisiner sous les ordres de Remy. Quel est l'impact de cette scène d'entraide?", "★ Pourquoi le travail d'équipe et la solidarité permettent-ils d'accomplir des miracles?"),
            ("Remy sert une simple ratatouille traditionnelle au critique le plus sévère de Paris. En quoi ce choix de plat est-il une prise de risque géniale?", "★ Pourquoi la simplicité et la sincérité touchent-elles souvent plus que le luxe excessif?"),
            ("Anton Ego perd son statut de grand critique mais devient un investisseur heureux dans le nouveau bistro de Remy. Est-ce une vraie réussite?", "★ Peut-on être plus heureux en abandonnant son orgueil pour vivre de véritables passions?")
        ],
        "round2": [
            ("La réalisation de Brad Bird utilise des couleurs chaudes et de la musique pour représenter le goût des aliments. Comment trouvez-vous cette idée visuelle?", "★ Comment le cinéma réussit-il à nous faire ressentir des sensations comme le goût ou l'odorat?"),
            ("Les animateurs de Pixar ont étudié la vraie cuisine française et la texture des légumes. En quoi ce souci du détail enrichit-il le film?", "★ Pourquoi l'attention portée aux détails rend-elle un film d'animation plus immersif?"),
            ("Paris est représenté avec des lumières dorées, des ruelles pavées et des cuisines chaleureuses. Quel rôle joue la beauté de la ville?", "★ Quel décor de cinéma vous a donné envie de visiter une ville ou un pays en particulier?"),
            ("Le bureau d'Anton Ego ressemble à un cercueil et sa machine à écrire à un crâne. Comment le décor exprime-t-il la personnalité du personnage?", "★ Comment les accessoires et l'architecture révèlent-ils la psychologie d'un personnage de film?"),
            ("Le flashback où le jeune Ego goûte la ratatouille de sa mère ne dure que quelques secondes. Pourquoi cette scène est-elle si émouvante?", "★ Quel plat ou quel parfum vous replonge immédiatement dans un doux souvenir de votre enfance?"),
            ("Le film oppose la tradition culinaire rigide à l'innovation créative de Remy. Quelle est votre opinion sur ce débat?", "★ Faut-il respecter strictement les recettes traditionnelles ou toujours chercher à expérimenter?"),
            ("La musique composée par Michael Giacchino utilise l'accordéon pour évoquer les bistros parisiens. Comment la musique crée-t-elle l'atmosphère?", "★ Comment une bande originale réussie renforce-t-elle notre attachement à la culture d'un pays?"),
            ("La fin du film ne transforme pas Remy en humain et ne lui donne pas une célébrité publique, mais lui offre un bistro secret. Aimez-vous cette fin?", "★ Pourquoi une fin modeste et sincère est-elle souvent plus satisfaisante qu'un triomphe irréaliste?"),
            ("La critique finale d'Ego affirme : 'La création a besoin de deux choses : la découverte et la défense.' Que pensez-vous de cette réflexion?", "★ Que signifie pour vous la phrase : 'Un grand artiste peut naître n'importe où' dans la société actuelle?"),
            ("Si vous deviez cuisiner un repas en trois services qui raconte votre histoire personnelle, quels plats choisiriez-vous de servir?", "★ Quels plats feriez-vous découvrir à quelqu'un pour lui présenter votre culture et vos goûts?")
        ]
    },
    "the-swan-princess.html": {
        "title": "The Swan Princess",
        "level": "Elementary (A2)",
        "variety": "American English",
        "theme_focus": "Inner beauty vs superficiality, everlasting vow, enchanted curses & 90s musical animation",
        "grammar_focus": "Comparison of Adjectives & Future Promises for Romantic Fairy Tales",
        "vocab": [
            ("Devotion", "(noun) love, loyalty, or enthusiasm for a person, activity, or cause.", "Odette's unwavering devotion gives her strength to endure Rothbart's dark curse."),
            ("Enchantment", "(noun) a feeling of great pleasure or delight; or a magical spell.", "Swan Lake is bound by a powerful dark enchantment that operates under moonlight."),
            ("Sorcery", "(noun) the use of magic, especially derived from evil spirits.", "Rothbart uses forbidden sorcery to transform Odette into a swan by day."),
            ("Royalty", "(noun) people of royal blood or status.", "The two kingdoms plan to unite their royalty through the marriage of Derek and Odette."),
            ("Vow", "(noun/verb) a solemn promise or pledge.", "Only a public vow of everlasting love can break Rothbart's spell permanently."),
            ("Spellbound", "(adjective) holding the complete attention of someone as if by magic.", "Derek stands spellbound when he sees Odette regain her human form under the full moon."),
            ("Shape-shifter", "(noun) a mythical creature capable of changing its physical form at will.", "Rothbart transforms himself into the terrifying Great Animal during the climax."),
            ("Fidelity", "(noun) faithfulness to a person or cause demonstrated by continuing loyalty.", "Jean-Bob, Puffin, and Speed prove their fidelity by retrieving the map for Odette."),
            ("Archnemesis", "(noun) a principal or long-standing enemy.", "Rothbart serves as King William's bitter archnemesis after being exiled from the realm."),
            ("Superficiality", "(noun) lack of thoroughness, depth, or character integrity.", "Odette rejects Derek when his initial praise relies purely on her superficiality.")
        ],
        "slang": [
            ("Far longer than forever", "(phrase) the central musical promise of eternal love between Derek and Odette.", "'Far longer than forever' serves as the emotional theme song of their bond."),
            ("Everlasting love vow", "(phrase) the public declaration required to break Rothbart's spell.", "Derek must make his everlasting love vow before the entire court at the ball."),
            ("Rothbart's curse", "(noun) the sorcery that turns Odette into a swan whenever sunlight touches the lake.", "Rothbart's curse forces Odette to live as a swan until moonrise."),
            ("Swan Lake", "(noun) the secluded magical lake where Odette is kept prisoner.", "Swan Lake glimmers beneath the moonlight as Odette transforms back into a princess."),
            ("Great Animal", "(noun) the monstrous creature Rothbart becomes during the final battle.", "Derek faces the terrifying Great Animal on the castle grounds during a thunderstorm."),
            ("Puffin and Jean-Bob", "(noun) Odette's comedic animal companions at the lake.", "Jean-Bob the delusional frog believes he is a prince who needs a kiss."),
            ("Speed the turtle", "(noun) the slow, steady turtle who helps retrieve the bow and arrow.", "Speed provides calm wisdom and surprisingly fast swimming during water missions."),
            ("False princess", "(noun) Rothbart's hag assistant transformed into Odette's double.", "Rothbart sends a false princess to the ball to trick Derek into making a false vow."),
            ("Moonlight transformation", "(noun) the nightly moment when the swan becomes human.", "The moonlight transformation is beautifully staged with glowing water reflections."),
            ("No offense", "(phrase) a conversational expression used before making a blunt statement.", "Jean-Bob frequently uses 'no offense' before boasting about his royal blood.")
        ],
        "round1": [
            ("King William and Queen Uberta spend years arranging summer visits for Derek and Odette, but the children constantly bicker. How does forced friendship evolve into love?", "★ Why do childhood friendships that start with playful rivalries often turn into deep bonds later?"),
            ("When Derek asks Odette to marry him, she asks: 'What else is there besides beauty?' How does her question challenge his superficial view of romance?", "★ Why is emotional compatibility and respect more important in a relationship than physical appearance?"),
            ("Rothbart kidnaps Odette and demands her kingdom through marriage, but she steadfastly refuses his demands. How does her moral strength empower her?", "★ What gives a person the courage to stand up against powerful bullies or manipulators?"),
            ("At Swan Lake, Puffin the Irish puffin, Jean-Bob the French frog, and Speed the turtle become Odette's loyal squad. How does comedy balance dark magic?", "★ Why are funny sidekick characters essential in traditional fairytale animated movies?"),
            ("Jean-Bob believes he is actually a prince trapped in a frog's body who only needs a princess's kiss. How does his self-delusion create humor?", "★ Why is a character who holds an unrealistically high opinion of themselves so funny to watch?"),
            ("Derek spends months searching for the 'Great Animal' that took Odette, practicing his archery skills relentlessly. How does his determination redeem his past mistakes?", "★ How can taking active responsibility for past errors help rebuild trust with someone you hurt?"),
            ("Rothbart tricks Derek by sending his disguised assistant to the royal ball, causing Derek to make his vow to the wrong woman. How tragic is this climax?", "★ How do misunderstandings created by deception test the strength of true love in cinema?"),
            ("When Derek realizes his mistake, he races back to Swan Lake to face Rothbart in his Great Animal form. How does his bravery overcome dark magic?", "★ What defines true bravery when facing an enemy that seems vastly stronger than you?"),
            ("Puffin risks his life to fly Odette's crown and bow across the lake to Derek during the thunderstorm. How does animal solidarity save the day?", "★ How does seeing small, vulnerable characters step up in big moments inspire audiences?"),
            ("The curse is broken when Derek proves his true love by risking his life rather than just reciting words. What does the ending teach about genuine promises?", "★ Why are actions and sacrifices more convincing proof of love than romantic speeches?")
        ],
        "round2": [
            ("Director Richard Rich, a former Disney animator, directed The Swan Princess using classic 1990s hand-drawn animation. How charming is this visual style?", "★ What unique artistic warmth does 1990s traditional hand-drawn animation offer compared to 3D CGI?"),
            ("The song 'Far Longer Than Forever' earned a Golden Globe nomination for Best Original Song. How does musical staging heighten romantic drama?", "★ What role do duet songs play in building emotional investment in animated romances?"),
            ("The visual contrast between the bright, pastel royal castles and the dark, eerie moonlight of Swan Lake sets the mood. How effective is this lighting?", "★ How does lighting design signal to the audience whether a location is safe or dangerous?"),
            ("Rothbart's character design features sharp green eyes, dramatic dark robes, and energetic physical presence. What makes a great fairytale villain?", "★ What visual or vocal traits make an animated villain entertaining rather than just scary?"),
            ("The transformation sequence where Odette turns from a swan into a princess uses glowing water reflections and orchestral swells. How memorable is it?", "★ How can special effects in animation evoke wonder without overwhelming the story?"),
            ("The film satirizes royal wedding preparations, court etiquette, and parental expectations through Queen Uberta. How effective is the comedic satire?", "★ Why do movies enjoy poking fun at high-society traditions and fussy parental planning?"),
            ("Puffin organizes military-style practice drills for Jean-Bob and Speed using twigs and acorns. How does animal ingenuity add action?", "★ Why do audiences love watching small animals use ordinary natural objects as weapons or tools?"),
            ("The screenplay adapts Tchaikovsky's classic 'Swan Lake' ballet into a family adventure film. How successful is this adaptation?", "★ How can classic high-art stories like ballets or operas be made accessible for younger audiences?"),
            ("Odette is portrayed as a courageous, clever princess who actively participates in her own rescue rather than waiting passively. How modern was her character in 1994?", "★ How has the portrayal of fairytale princesses evolved from passive figures to active heroines?"),
            ("If you were hired to direct a live-action remake of The Swan Princess, which actors would you cast as Derek, Odette, and Rothbart?", "★ Who would be your dream cast for a live-action version of this classic animated musical?")
        ]
    }
}

def humanize_text(text):
    """Replaces AI cliches, tell phrases, and em dashes with natural human wording."""
    text = text.replace('—', ' : ')

    replacements = [
        (r'\bpivotal scene\b', 'key scene'),
        (r'\bquiet burden\b', 'silent struggle'),
        (r'\bfardeau silencieux\b', 'poids du silence'),
        (r'\bclash between\b', 'conflict between'),
        (r'\btestament to\b', 'proof of'),
        (r'\bdelves into\b', 'explores'),
        (r'\bdelve into\b', 'explore'),
        (r'\bserves as a reminder\b', 'reminds us'),
        (r'\bunderscores\b', 'highlights'),
        (r'\bAn authentic slang term, colloquialism, or key dialogue featured in .*? to establish context\.\b',
         'Key dialogue or authentic expression featured in the film to build character atmosphere.'),
        (r'The characters in .*? use the expression \'(.*?)\' during a pivotal scene inside .*? to emphasize the drama\.',
         r'Characters naturally use the expression \1 in conversation to reflect their background and mood.')
    ]

    for pattern, repl in replacements:
        text = re.sub(pattern, repl, text, flags=re.IGNORECASE)

    return text

def ensure_question_examples(text):
    """Injects (e.g. ...) examples into abstract or complex discussion prompts where needed."""
    def add_eg(match):
        item_content = match.group(1)
        if '(e.g.' in item_content or '(e.g.,' in item_content or '(ex.' in item_content:
            return match.group(0)

        abstract_keywords = ['directorial', 'cinematography', 'symbolize', 'psychological', 'screenplay', 'narrative', 'motif', 'theme', 'moral']
        if any(kw in item_content.lower() for kw in abstract_keywords):
            if item_content.rstrip().endswith('?'):
                item_content = item_content.rstrip()[:-1] + " (e.g., examining light, framing, or pacing choices)?"
            elif item_content.rstrip().endswith('</div>'):
                item_content = item_content[:-6] + " (e.g., examining light, framing, or pacing choices)</div>"

        return f'<div class="round-item-main">{item_content}</div>'

    return re.sub(r'<div class=[\"\']round-item-main[\"\']>(.*?)</div>', add_eg, text, flags=re.DOTALL)

def process_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    modified = False

    if fname in BESPOKE_FALLBACKS:
        print(f"Applying full bespoke overhaul to template file: {fname}")
        data = BESPOKE_FALLBACKS[fname]

        vocab_cards_html = []
        for word, definition, example in data["vocab"]:
            escaped_word = word.replace("'", "\\'")
            escaped_def = definition.replace("'", "\\'")
            escaped_ex = example.replace("'", "\\'")
            card = f"""      <div class="vocab-card"><div class="vocab-word">{word}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
</div>"""
            vocab_cards_html.append(card)
        vocab_section = "\n".join(vocab_cards_html)

        slang_cards_html = []
        for word, definition, example in data["slang"]:
            escaped_word = word.replace("'", "\\'")
            escaped_def = definition.replace("'", "\\'")
            escaped_ex = example.replace("'", "\\'")
            card = f"""      <div class="vocab-card"><div class="vocab-word">{word}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
</div>"""
            slang_cards_html.append(card)
        slang_section = "\n".join(slang_cards_html)

        r1_items_html = []
        for main, personal in data["round1"]:
            item = f"""          <div class="round-item"><div class="round-item-main">{main}</div>
<div class="round-item-personal">{personal}</div>
</div>"""
            r1_items_html.append(item)
        r1_section = "\n".join(r1_items_html)

        r2_items_html = []
        for main, personal in data["round2"]:
            item = f"""          <div class="round-item"><div class="round-item-main">{main}</div>
<div class="round-item-personal">{personal}</div>
</div>"""
            r2_items_html.append(item)
        r2_section = "\n".join(r2_items_html)

        content = re.sub(
            r'(<section id="vocabulary">.*?<div class="vocab-grid-10">)(.*?)(</div>\s*<h3)',
            r'\1\n' + vocab_section + r'\n    \3',
            content, flags=re.DOTALL
        )

        content = re.sub(
            r'(2\. Authentic Film Quotes & Slang</h3>\s*<div class="vocab-grid-10">)(.*?)(</div>\s*</section>)',
            r'\1\n' + slang_section + r'\n    \3',
            content, flags=re.DOTALL
        )

        content = re.sub(
            r'(id="s-r1".*?<div class="vim-instruction">.*?</div>\s*)(.*?)(</div>\s*</div>\s*<!-- Part 2|<!-- Artistry)',
            r'\1\n' + r1_section + r'\n        \3',
            content, flags=re.DOTALL
        )

        content = re.sub(
            r'(id="s-r2".*?<div class="vim-instruction">.*?</div>\s*)(.*?)(</div>\s*</div>\s*<!-- Final Challenge|<!-- Director)',
            r'\1\n' + r2_section + r'\n        \3',
            content, flags=re.DOTALL
        )

        modified = True

    # Card replacer using robust regex matching from <div class="vocab-card"> up to </button>\s*</div>
    def fix_vocab_card(match):
        card_html = match.group(0)
        if 'An authentic slang term' in card_html or 'pivotal scene' in card_html or 'Key dialogue or authentic expression' in card_html:
            word_match = re.search(r'<div class=[\"\']vocab-word[\"\']>(.*?)</div>', card_html)
            if word_match:
                word = word_match.group(1).strip()
                word_key = word.lower()
                if word_key in CUSTOM_VOCAB_MAP:
                    data = CUSTOM_VOCAB_MAP[word_key]
                    clean_def = data["def"]
                    clean_ex = data["ex"]
                else:
                    clean_def = f"(noun/expression) a key word or expression featured in the film."
                    clean_ex = f"Characters in the movie naturally use '{word}' in conversation to highlight key emotional context."

                # Double escape single quotes for onclick attribute
                escaped_word = word.replace("'", "\\'")
                escaped_def = clean_def.replace("'", "\\'")
                escaped_ex = clean_ex.replace("'", "\\'")

                new_card = f"""<div class="vocab-card"><div class="vocab-word">{word}</div>
<div class="vocab-def">{clean_def}</div>
<div class="vocab-example">{clean_ex}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
</div>"""
                return new_card
        return card_html

    content = re.sub(r'<div class=[\"\']vocab-card[\"\']>.*?<button.*?</button>\s*</div>', fix_vocab_card, content, flags=re.DOTALL)

    new_content = humanize_text(content)
    new_content = ensure_question_examples(new_content)

    if new_content != original_content or modified:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    files = sorted(glob.glob(os.path.join(SESSIONS_DIR, "*.html")))
    print(f"Processing {len(files)} cinema session files...")

    modified_count = 0
    for fpath in files:
        if process_file(fpath):
            modified_count += 1

    print(f"Done! Updated {modified_count} files out of {len(files)}.")

if __name__ == "__main__":
    main()
