import os
import re
from bs4 import BeautifulSoup

# Define unique journal configurations for all science session topics
JOURNAL_SPECS = {
    # 1. Spits B1/B2
    "your-fingers-hold-secret-brain-evolution": {
        "subject": "Homo Sapiens Hominid Dexterity",
        "hypothesis": "Precise thumb opposition accelerated neural wiring.",
        "findings": "Neuro-imaging shows shared pathways for manual grip and speech syntax.",
        "grammar": "Speculative Conditionals (e.g. If hominids had not developed opposable thumbs...)"
    },
    "spider-creatures-origins-of-fatherhood": {
        "subject": "Harvestmen Opiliones (Paternal care)",
        "hypothesis": "Environmental stress favors male egg-guarding behavior.",
        "findings": "Egg-guarding species exhibit significantly higher offspring survival rates.",
        "grammar": "Past Perfect vs Past Simple in evolutionary history."
    },
    "sensory-system-pain-disease": {
        "subject": "Neural Pain Pathways",
        "hypothesis": "Chronic pain functions as a runaway network loop.",
        "findings": "Disabling hyper-active network nodes mitigates systemic discomfort.",
        "grammar": "Passives with modal verbs (e.g., Pain can be interpreted as...)"
    },
    "climate-scientist-warming-report": {
        "subject": "Anthropogenic Thermal Dynamics",
        "hypothesis": "Self-censorship occurs among clima-researchers to avoid alarmism.",
        "findings": "Over 70% of polled meteorologists admit to softening report titles.",
        "grammar": "Reported speech & softening devices (e.g. He claimed that, it is believed that)"
    },
    "ozempic-obesity-revolution": {
        "subject": "GLP-1 Receptor Agonists",
        "hypothesis": "Synthesized hormones rewire reward circuitry in the hypothalamus.",
        "findings": "Substantial somatic fat reduction alongside diminished addictive urges.",
        "grammar": "Verbs followed by gerunds vs infinitives (e.g. stop eating, choose to inject)"
    },
    "animal-cooperation-language": {
        "subject": "Invertebrate Communication",
        "hypothesis": "Semantic syntax exists in social mammal/insect alerting calls.",
        "findings": "Context-dependent frequency variations indicate separate predator classes.",
        "grammar": "Relative clauses of defining/non-defining type (e.g., The wolf, which was alpha...)"
    },
    "hidden-regenerative-powers": {
        "subject": "Somatic Regeneration Matrices",
        "hypothesis": "Dormant blastema genes can be chemically reactivated in humans.",
        "findings": "Induced signaling cascades initiate localized cellular de-differentiation.",
        "grammar": "Hypothetical 'wishes' and 'if only' constructs."
    },
    "brain-improving-in-90s": {
        "subject": "Senior Neuroplasticity",
        "hypothesis": "Hippocampal neurogenesis persists into late senescent decades.",
        "findings": "Complex visual stimuli trigger dendritic branching in nonagenarians.",
        "grammar": "Gerunds as subjects and objects (e.g., Staying active is beneficial)"
    },
    "football-beats-shamrock": {
        "subject": "Cognitive Word Memory Metrics",
        "hypothesis": "Concrete semantic nouns are recalled faster than abstract symbols.",
        "findings": "Higher sensory-motor association score yields 40% superior recall latency.",
        "grammar": "Comparative and superlative modifiers (e.g. far more concrete, slightly faster)"
    },
    "ai-and-the-brain": {
        "subject": "Synaptic vs Artificial Node Learning",
        "hypothesis": "Backpropagation differs fundamentally from biological plasticity.",
        "findings": "Human brains use 10,000x less energy via sparse spike coding.",
        "grammar": "Contrast connectors (e.g. whereas, on the contrary, conversely)"
    },
    "museums-movies-theater-stay-younger": {
        "subject": "Cultural Gerontology Dynamics",
        "hypothesis": "Aesthetic appreciation triggers cortisol reduction cascades.",
        "findings": "Regular artistic immersion corresponds with 12% lower systemic inflammation.",
        "grammar": "Adverbs of degree (e.g., significantly lower, exceptionally beneficial)"
    },
    "where-you-live-shapes-dementia-risk": {
        "subject": "Spatial Epidemiology of Dementia",
        "hypothesis": "High urban particulate matter accelerates cognitive decline.",
        "findings": "Proximity to green spaces correlates with preserved cognitive reserve.",
        "grammar": "Cause and effect linkers (e.g. due to, consequently, resulting in)"
    },
    # 2. Others (B1/B2/C1, Russian, French)
    "grandmother-evolutionary-mystery": {
        "subject": "Cooperative Breeding & Anthropology",
        "hypothesis": "Elder post-reproductive foraging supports offspring viability.",
        "findings": "Hunter-gatherer grandmothers supply up to 60% of child dietary energy.",
        "grammar": "Present Perfect Continuous."
    },
    "living-most-creative-time": {
        "subject": "Cognitive Sapiens Innovation",
        "hypothesis": "Distributed global networks catalyze collective creative output.",
        "findings": "Open-source and digital collaborations show exponential design scaling.",
        "grammar": "Double comparatives (e.g. the more connected we are, the more we create)."
    },
    "grandparents-mental-health": {
        "subject": "Family Cohesion Psychometrics",
        "hypothesis": "Regular contact with grandparents mitigates child emotional disorders.",
        "findings": "Children with close grandparental bonds score 30% lower on anxiety indices.",
        "grammar": "Used to / Would for childhood memories."
    },
    "right-handedness": {
        "subject": "Neurological Lateralization",
        "hypothesis": "Hand dominance is a byproduct of left-hemisphere speech localization.",
        "findings": "Right-hand bias exists in all human populations at a stable 9:1 ratio.",
        "grammar": "Relative clauses (e.g., Right-handedness, which is unique to humans...)."
    },
    "ai-reality-delusion": {
        "subject": "Large Language Model Hallucinations",
        "hypothesis": "Statistical prediction lacks semantic groundings, producing illusions.",
        "findings": "Hallucination rate is directly proportional to abstract prompt complexity.",
        "grammar": "Distinguishing 'make' vs 'do'."
    },
    "impersonation-accounts": {
        "subject": "Social Media Identity Fraud",
        "hypothesis": "Trust verification latency is exploited by automated bot accounts.",
        "findings": "High social-proof signals (such as fake badges) bypass manual visual scrutiny.",
        "grammar": "Phrasal verbs with 'look' (e.g. look into, look out for)."
    },
    "fusion-energy": {
        "subject": "Controlled Thermonuclear Fusion",
        "hypothesis": "Tokamak magnetic confinement can produce sustained net energy.",
        "findings": "Laser-ignition systems achieve Q-factor ignition threshold exceeding 1.5.",
        "grammar": "Future passive voice (e.g. Fusion energy will be commercialized)."
    },
    "losing-spoken-words": {
        "subject": "Language Attrition & Cognition",
        "hypothesis": "Digital screen saturation accelerates native lexical attrition.",
        "findings": "Speech variety in teenagers has contracted by 15% over a 10-year study.",
        "grammar": "Passive voice vs Active voice in news."
    },
    "social-decisions-brain": {
        "subject": "Game Theory & Neuroeconomics",
        "hypothesis": "Amygdala response overrides rational choice in unfair negotiations.",
        "findings": "Insula activation levels predict rejection of unfair resource offers.",
        "grammar": "Inversion with negative adverbials (e.g., Seldom do we make purely rational choices)."
    },
    "mendelian-laws-broken": {
        "subject": "Meiotic Drive & Non-Mendelian Genetics",
        "hypothesis": "Super-mendelian 'selfish' alleles force their own inheritance.",
        "findings": "Gene-drive mechanisms achieve 99% inheritance bias in mouse cohorts.",
        "grammar": "Speculative continuous conditions (e.g. If the gene-drive were mutating...)."
    },
    "vliyanie-propagandy-deti": {
        "subject": "Детская медиапсихология (Child Media Psychology)",
        "hypothesis": "Раннее медиавоздействие формирует устойчивые искажения восприятия (Early media exposure forms stable perceptual distortions).",
        "findings": "Систематическое вещание снижает критический порог оценки на 40% (Systematic broadcasting lowers critical evaluation threshold by 40%).",
        "grammar": "Сложные союзы и вводные слова (Complex conjunctions and parenthetical words)."
    },
    "ape-laughter-speech-origin-elementary": {
        "subject": "Evolutionary Primate Vocalization",
        "hypothesis": "Laughter in great apes is structurally homologous to human speech origins.",
        "findings": "Acoustic profiling reveals phonetic and breath-control overlaps during play.",
        "grammar": "Basic comparisons and descriptors."
    },
    "ape-laughter-speech-origin-intermediate": {
        "subject": "Comparative Vocal Primatology",
        "hypothesis": "Ape tickle-laughter evolved into human speech phoneme boundaries.",
        "findings": "Breath control limits separate ape vocalizations from human speech agility.",
        "grammar": "Modal verbs of deduction and comparison."
    }
}

# Vocabulary specifications for split levels (B1 Intermediate vs B2 Upper-Intermediate)
# B1 uses simpler terms, B2 uses more advanced/academic terms. All have exactly 10 cards.
VOCAB_B1 = {
    "your-fingers-hold-secret-brain-evolution": [
        ("Evolution", "the process by which living things develop and change over time.", "We can study human evolution by looking at old bones."),
        ("Dexterity", "skill in performing physical tasks, especially with your hands.", "Playing guitar requires a lot of finger dexterity."),
        ("Prehistoric", "relating to the period of time before written history.", "Prehistoric people made simple tools from stones."),
        ("Primate", "a group of mammals that includes monkeys, apes, and humans.", "A chimpanzee is a very smart primate."),
        ("Grip", "to hold something very tightly with your hand.", "Be sure to grip the handrail when you walk down the stairs."),
        ("Coordinated", "moving different parts of the body together in a smooth way.", "Gymnasts are exceptionally coordinated and balanced."),
        ("Structure", "the way in which the parts of something are put together.", "The anatomical structure of human hands is highly complex."),
        ("Muscle", "a band of tissue in the body that produces movement.", "We use our thumb muscles to grip objects."),
        ("Perfect", "having all the required elements or qualities; complete.", "Opposable thumbs are a perfect adaptation for holding tools."),
        ("Human", "relating to or characteristic of humankind.", "Only human hands have such precise coordination.")
    ],
    "spider-creatures-origins-of-fatherhood": [
        ("Fatherhood", "the state of being a father and caring for offspring.", "Paternal care and fatherhood are rare in insect species."),
        ("Protection", "the act of keeping someone or something safe from harm.", "The father spider offers vital protection for the fragile eggs."),
        ("Offspring", "the young children or animal babies of parents.", "The mother bird feeds her hungry offspring in the nest."),
        ("Behavior", "the way that a living organism acts or conducts itself.", "Egg-guarding is a very unusual male behavior in nature."),
        ("Survival", "the state of continuing to live or exist in a difficult environment.", "Parental care improves the survival rate of young insects."),
        ("Predator", "an animal that naturally hunts and eats other animals.", "A large spider is a dangerous predator for small insects."),
        ("Territory", "an area of land that is defended by an animal or group.", "Male harvestmen defend their territory from other males."),
        ("Nurture", "to care for and encourage the growth or development of someone.", "Fathers nurture their offspring by guarding them from enemies."),
        ("Benefit", "an advantage or positive result gained from something.", "There is a massive biological benefit to male egg-guarding."),
        ("Instinct", "a natural way of behaving that an animal is born with.", "Protecting the nest is a powerful natural instinct.")
    ],
    "sensory-system-pain-disease": [
        ("Network", "a complex system of paths or lines that connect with each other.", "The brain has a massive network of nerve cells."),
        ("Sensation", "a physical feeling in your body resulting from something.", "I felt a burning sensation on my skin."),
        ("Discomfort", "a state of physical pain, worry, or embarrassment.", "This simple medical test causes only mild discomfort."),
        ("Signal", "a physical gesture or electrical impulse that carries information.", "Nerves send a pain signal directly to your brain."),
        ("Chronic", "lasting for a long time and difficult to cure or solve.", "Chronic diseases require constant medical attention."),
        ("Reaction", "an action or response that happens because of something else.", "Your immediate reaction to pain is to pull your hand away."),
        ("Symptom", "a physical sign of a disease or medical problem.", "A high fever is a common symptom of an infection."),
        ("Sensitivity", "the state of being easily influenced or affected by something.", "Sunburn increases the sensitivity of your skin to heat."),
        ("Protect", "to keep safe from danger, harm, or illness.", "Pain exists to protect our bodies from further injury."),
        ("Treatment", "medical care given to a patient for an illness or injury.", "Physical therapy is an excellent treatment for back pain.")
    ],
    "climate-scientist-warming-report": [
        ("Controversy", "a lot of disagreement or public discussion about a topic.", "The construction of a new factory caused a major controversy."),
        ("Warming", "the process of becoming warmer or hotter in temperature.", "Global warming is causing glaciers to melt rapidly."),
        ("Censor", "to block or remove parts of a report that are considered bad.", "The government decided to censor the sensitive report."),
        ("Softness", "the quality of being gentle, mild, or less severe.", "The scientist adjusted the title to add softness to the report."),
        ("Pressure", "strong persuasion or influence to force a decision.", "He felt constant pressure from his boss to change the results."),
        ("Impact", "a powerful effect or consequence of an action or event.", "Climate change has a severe impact on farming."),
        ("Predict", "to say or estimate that a specific thing will happen in the future.", "Meteorologists predict heavy rain for the weekend."),
        ("Evidence", "facts or information indicating whether a belief is true.", "Scientists found clear evidence of rising sea levels."),
        ("Reduce", "to make something smaller or less in size, amount, or value.", "We must reduce our carbon emissions to protect the planet."),
        ("Support", "to agree with or give assistance to a person or cause.", "Many countries support the new climate agreement.")
    ],
    "ozempic-obesity-revolution": [
        ("Obesity", "the state of being extremely overweight in an unhealthy way.", "Obesity is a major public health problem worldwide."),
        ("Hormone", "a chemical substance produced in the body that controls organs.", "Insulin is a vital hormone that regulates sugar levels."),
        ("Injection", "an act of putting medicine into the body using a needle.", "The patient requires a daily injection of medicine."),
        ("Appetite", "a natural desire to eat food or consume nutrients.", "He had a very small appetite because he was feeling sick."),
        ("Somatic", "relating to the body, as distinct from the mind.", "The drug has positive somatic effects on weight reduction."),
        ("Therapy", "treatment intended to heal or relieve a medical condition.", "Hormone therapy is highly effective for weight loss."),
        ("Reduce", "to make smaller or less in amount, degree, or size.", "This drug helps reduce strong food cravings."),
        ("Urge", "a strong desire or impulse to do something.", "He felt a sudden urge to eat a sweet chocolate bar."),
        ("Result", "a consequence, effect, or outcome of something.", "The somatic result of the therapy was outstanding."),
        ("Health", "the state of being free from illness or injury.", "Maintaining a normal weight is essential for good health.")
    ],
    "animal-cooperation-language": [
        ("Cooperation", "working together with others to achieve a shared goal.", "The colony's survival depends on close cooperation."),
        ("Syntax", "the arrangement of words and phrases to create sentences.", "Human language uses complex grammatical syntax."),
        ("Alert", "to warn someone of a dangerous or urgent situation.", "Birds use loud calls to alert their flock about predators."),
        ("Predator", "an animal that naturally hunts and kills others for food.", "Lions are the primary predator of zebras in the wild."),
        ("Signal", "an action or sound used to send information.", "Meerkats use a high-pitched signal to warn of eagles."),
        ("Vocal", "relating to the human voice or animal sounds.", "Dolphins have a wide range of vocal expressions."),
        ("Syntax", "the structure of communication signals or grammar.", "Simple syntax allows animals to combine warning sounds."),
        ("Context", "the situation or circumstances in which something happens.", "The meaning of an animal call depends on the context."),
        ("Response", "an answer or reaction to a call or action.", "The monkey's response to the alarm was to climb a tree."),
        ("Meaning", "the message or concept that a word or signal conveys.", "Different pitches of bird calls have distinct meanings.")
    ],
    "hidden-regenerative-powers": [
        ("Regeneration", "the process of growing back lost body parts or tissues.", "Lizards are famous for their rapid tail regeneration."),
        ("Somatic", "relating to the physical body rather than the mind.", "Humans have limited somatic healing capabilities."),
        ("Heal", "to become healthy or sound again after an injury.", "Minor cuts on your skin will heal within a few days."),
        ("Dormant", "inactive or sleeping, but capable of becoming active.", "Many desert plants remain dormant during the dry summer."),
        ("Cell", "the smallest structural and functional unit of an organism.", "Our body's stem cells help repair damaged tissue."),
        ("Active", "engaging or ready to engage in physically energetic pursuits.", "The dormant genes became active after the chemical treatment."),
        ("Trigger", "to cause an event or situation to happen or exist.", "Severe injuries trigger a complex healing response."),
        ("Somatic", "relating to bodily tissues and systems.", "The medical team observed profound somatic recovery."),
        ("Restore", "to return something to its original or former condition.", "The therapy helped restore full movement to his leg."),
        ("Ability", "the physical or mental power to do something.", "Humans lack the ability to grow back entire limbs.")
    ],
    "brain-improving-in-90s": [
        ("Plasticity", "the ability of the brain to change and adapt over time.", "Adult neurogenesis is clear evidence of brain plasticity."),
        ("Improve", "to make or become better in quality, strength, or ability.", "Reading daily is an easy way to improve your memory."),
        ("Elder", "an older person, especially one who is highly respected.", "Elders play an essential role in preserving family history."),
        ("Cognitive", "relating to the mental processes of perception and memory.", "Solving puzzles helps maintain strong cognitive functions."),
        ("Stimulus", "something that causes a reaction or activity in an organism.", "A complex visual stimulus keeps the brain active."),
        ("Memory", "the faculty by which the mind stores and recalls information.", "Her grandmother has an exceptionally sharp memory."),
        ("Habit", "a settled or regular tendency or practice.", "Learning a language is a wonderful mental habit for seniors."),
        ("Active", "participating in activities or physical exercise.", "Seniors who stay active have much better brain health."),
        ("Science", "the intellectual and practical study of the physical world.", "Modern science shows that our brains can grow new cells."),
        ("Capacity", "the maximum amount that something can contain or produce.", "Our mental capacity does not have to decline as we age.")
    ],
    "football-beats-shamrock": [
        ("Memory", "the mental power to store and recall past experiences.", "A good memory is essential for learning new vocabulary."),
        ("Concrete", "existing in a material or physical form; real and solid.", "'Apple' is a concrete noun, while 'love' is abstract."),
        ("Abstract", "existing as an idea or quality, not a physical object.", "'Freedom' is an abstract concept that is hard to visualize."),
        ("Recall", "to bring a fact or memory back into one's mind.", "I struggled to recall his phone number in the emergency."),
        ("Visual", "relating to seeing or sight.", "Creating a visual image of a word helps you remember it."),
        ("Association", "a mental connection between ideas, words, or things.", "We have a strong association between red and danger."),
        ("Noun", "a word used to identify any of a class of people, places, or things.", "Concrete nouns are much easier for language learners."),
        ("Familiar", "well known from long or close association.", "He felt comfortable because the settings were familiar."),
        ("Experiment", "a scientific procedure undertaken to make a discovery.", "The university conducted an experiment on word memory."),
        ("Result", "a consequence or outcome of an action or process.", "The experiment's result proved that concrete words are memorable.")
    ],
    "ai-and-the-brain": [
        ("Synapse", "a junction between two nerve cells in the brain.", "Signals travel across the synapse to connect brain cells."),
        ("Artificial", "made or produced by human beings rather than occurring naturally.", "Large neural networks are a form of artificial intelligence."),
        ("Contrast", "the state of being strikingly different from something else.", "There is a massive contrast between biological and digital brains."),
        ("Synapse", "the structural junction where brain signals travel.", "A single biological synapse is highly complex."),
        ("Energy", "power derived from physical or chemical resources.", "The brain uses very little energy to perform complex calculations."),
        ("Plasticity", "the brain's ability to adapt and change its structure.", "Synaptic plasticity is the biological basis of learning."),
        ("Node", "a connection point in a system or artificial network.", "An artificial neural network consists of thousands of nodes."),
        ("Efficiency", "the state or quality of being efficient and saving resources.", "Biological brains possess superior energy efficiency."),
        ("Structure", "the arrangement of and relations between parts of something.", "The brain's structure is fundamentally different from a chip."),
        ("Compare", "estimate, measure, or note the similarity or dissimilarity.", "Scientists compare artificial nodes to biological synapses.")
    ],
    "museums-movies-theater-stay-younger": [
        ("Longevity", "long life or existence beyond the average span.", "Creative hobbies are highly associated with superior longevity."),
        ("Somatic", "relating to the body, as distinct from the mind.", "Stress can manifest as severe somatic symptoms."),
        ("Aesthetic", "concerned with beauty or the appreciation of beauty.", "The museum's clean aesthetic design created a peaceful air."),
        ("Stimulate", "encourage development of or activity in something.", "Viewing art can stimulate neural pathways in the brain."),
        ("Engagement", "the action of engaging; active participation.", "Active cultural engagement is key for physical well-being."),
        ("Beneficial", "favorable or advantageous; resulting in good.", "Spending time in art museums is highly beneficial for health."),
        ("Physiological", "relating to the normal functions of living organisms.", "The physiological benefits of laughter include low blood pressure."),
        ("Exhibition", "a public display of works of art or items of interest.", "The Louvre launched a temporary exhibition of sketches."),
        ("Culture", "the ideas, customs, and social behavior of a society.", "Appreciating theater is an accessible way to engage with culture."),
        ("Mitigate", "make something bad less severe, serious, or painful.", "We can mitigate feelings of loneliness by joining discussion clubs.")
    ],
    "where-you-live-shapes-dementia-risk": [
        ("Dementia", "a chronic mental disorder marked by memory failures.", "Dementia is a challenging condition for aging families."),
        ("Risk", "the possibility of something bad or unpleasant happening.", "Living near a busy highway increases your health risk."),
        ("Particulate", "relating to or made of very small separate particles.", "Particulate matter in smoke can severely damage your lungs."),
        ("Greenery", "green plants or vegetation considered collectively.", "We enjoyed the lush greenery of the national park."),
        ("Cognitive", "relating to the mental action of acquiring knowledge.", "Keeping your mind active preserves your cognitive reserve."),
        ("Pollution", "the presence of harmful substances in the environment.", "Air pollution is a major environmental issue in cities."),
        ("Urban", "relating to, or characteristic of a town or city.", "Urban planning should prioritize parks and pedestrian zones."),
        ("Resilience", "the capacity to recover quickly from difficulties.", "Physical exercise builds great resilience against illness."),
        ("Affect", "have an effect on; make a difference to.", "Environmental factors directly affect our neurological health."),
        ("Epidemiology", "the branch of medicine dealing with disease incidence.", "Epidemiology studies help us identify national health trends.")
    ]
}

VOCAB_B2 = {
    "your-fingers-hold-secret-brain-evolution": [
        ("Evolutionary", "relating to the gradual development of organisms over generations.", "Palaeontologists study skeletal remains to trace human evolutionary milestones."),
        ("Dexterity", "manual skill in performing complex tasks with precision.", "Surgeons require exceptional manual dexterity to perform delicate operations."),
        ("Prehistoric", "relating to the epoch before written historical records.", "Prehistoric hominids crafted primitive hand-axes from flint."),
        ("Opposable", "capable of being placed opposite the fingers, denoting the thumb.", "An opposable thumb is a critical physical adaptation of primates."),
        ("Anatomical", "relating to the structural makeup of an organism's body.", "The anatomical structure of the human hand is uniquely flexible."),
        ("Coordinated", "manipulating separate muscle groups in a smooth, efficient manner.", "Neurological pathways ensure that our fingers execute coordinated movements."),
        ("Neurological", "relating to the structure, functions, and disorders of nerves.", "The hands occupy a massive portion of our neurological sensory cortex."),
        ("Primate", "a mammal of the order containing prosimians, monkeys, apes, and humans.", "Primate evolutionary lines branched off millions of years ago."),
        ("Precision Grip", "holding objects delicately between the tips of the fingers and thumb.", "The precision grip allows humans to write, paint, and thread needles."),
        ("Hypothesis", "a proposed scientific explanation based on limited empirical evidence.", "The cognitive-coevolution hypothesis links manual dexterity with speech.")
    ],
    "spider-creatures-origins-of-fatherhood": [
        ("Paternal Care", "parental investment provided by a male to ensure offspring survival.", "Paternal care is exceptionally rare among arachnids."),
        ("Opiliones", "an order of arachnids commonly known as harvestmen or daddy longlegs.", "Opiliones species provide excellent models for behavioral ecology."),
        ("Offspring", "the immediate descendants or young generated by an organism.", "The male guards the eggs to protect the vulnerable offspring from predators."),
        ("Aggression", "hostile or destructive behavior intended to dominate others.", "Male harvestmen display intense aggression when defending egg clutches."),
        ("Arachnid", "a class of joint-legged invertebrates, including spiders and scorpions.", "The harvestman is an arachnid, but it is not a true spider."),
        ("Ecology", "the branch of biology dealing with organisms' relations to one another.", "Behavioral ecology analyzes the evolutionary benefits of nesting habits."),
        ("Predation", "the preying of one animal on others for nutritional survival.", "The nest is continuously exposed to intense insect predation."),
        ("Somatic", "relating to the physical body as opposed to genetic lineage.", "Egg-guarding imposes a severe somatic cost on the father spider."),
        ("Adaptation", "a physical or behavioral trait that enhances survival in an environment.", "Paternal nesting is a behavioral adaptation against harsh weather."),
        ("Evolutionary", "relating to gradual development over deep biological time.", "These paternal instincts represent an elegant evolutionary milestone.")
    ],
    "sensory-system-pain-disease": [
        ("Systemic", "relating to the entire body system rather than a localized part.", "Systemic inflammation can elevate neurological pain sensitivity."),
        ("Neurological", "relating to the anatomy, functions, and disorders of nerves.", "Neurological studies aim to map the exact pathways of pain sensation."),
        ("Nociception", "the sensory nervous system's response to harmful stimuli.", "Nociception alerts the brain to potential tissue damage immediately."),
        ("Chronic", "persisting for an extended duration and resistant to standard cures.", "Chronic neuropathic pain can disrupt a patient's sleep cycle."),
        ("Hyper-sensitivity", "an abnormal or extreme physical reaction to external stimuli.", "Injury can cause long-term hyper-sensitivity in the surrounding area."),
        ("Synapse", "the structural junction where signals pass between nerve cells.", "Neurotransmitters travel across the synapse to propagate pain signals."),
        ("Pathological", "relating to or caused by a physical disease or chronic condition.", "Pathological pain serves no protective purpose and causes misery."),
        ("Attenuation", "the reduction of the force, effect, or value of something.", "Medication achieves pain attenuation by blocking receptor sites."),
        ("Somatic", "relating to the body, especially as distinct from the mind.", "Severe stress can amplify somatic pain symptoms through tension."),
        ("Therapeutic", "relating to the healing of disease or mitigation of symptoms.", "Mindfulness training offers significant therapeutic benefits for sufferers.")
    ],
    "climate-scientist-warming-report": [
        ("Self-censorship", "the withholding of one's true findings due to external pressure.", "The researcher admitted to practicing self-censorship to preserve funding."),
        ("Alarmism", "the exaggerated raising of public fear regarding potential disasters.", "Critics accused the meteorologists of unscientific climate alarmism."),
        ("Softening", "the deliberate dilution of strong statements to make them palatable.", "The softening of report summaries was criticized by younger researchers."),
        ("Socio-political", "relating to the combination of social and political factors.", "Climate data is inevitably scrutinized through a socio-political lens."),
        ("Mitigation", "the action of reducing the severity, seriousness, or painfulness of something.", "Global mitigation strategies require unprecedented international cooperation."),
        ("Discrepancy", "an illogical difference or inconsistency between two sets of data.", "They found a glaring discrepancy between the raw readings and the summary."),
        ("Consensus", "a general agreement among a group of scientific experts.", "An overwhelming scientific consensus exists regarding anthropogenic warming."),
        ("Dilution", "the action of making something weaker in force, content, or value.", "Politicians demanded a dilution of the strict emission regulations."),
        ("Scepticism", "a doubting or questioning attitude towards popular dogmas.", "Healthy scientific scepticism is vital, but climate denialism is dangerous."),
        ("Policy-maker", "a person responsible for formulating governmental strategies.", "The team presented their carbon-cycle modeling directly to policy-makers.")
    ],
    "ozempic-obesity-revolution": [
        ("Agonist", "a chemical substance that activates a specific receptor in the body.", "This novel GLP-1 agonist mimic natural satiety signals."),
        ("Satiety", "the physical feeling of being completely full and satisfied after eating.", "The hormone regulates satiety pathways in the human hypothalamus."),
        ("Hypothalamus", "the region of the brain controlling body temperature, thirst, and hunger.", "The drug acts directly on the reward center of the hypothalamus."),
        ("Endocrine", "relating to glands that secrete hormones directly into the blood.", "Obesity is a complex endocrine disorder, not a simple lack of willpower."),
        ("Agonist", "a drug that mimics natural hormones to trigger cellular responses.", "Weekly GLP-1 agonist injections have revolutionized diabetes care."),
        ("Therapeutic", "having a beneficial or curative effect on a somatic disease.", "This peptide drug offers profound therapeutic outcomes for cardiovascular health."),
        ("Addictive", "causing or likely to cause physical or psychological dependency.", "Satiety agonists appear to mitigate addictive urges for alcohol as well."),
        ("Metabolic", "relating to the chemical processes occurring within a living cell.", "Weight reduction triggers a highly positive metabolic adaptation."),
        ("Efficacy", "the ability of a medical treatment to produce the desired result.", "Clinical trials confirmed the superior weight-loss efficacy of the drug."),
        ("Endogenous", "having an internal cause or originating from within an organism.", "The synthesized compound is far more stable than the endogenous peptide.")
    ],
    "animal-cooperation-language": [
        ("Syntax", "the grammatical rules governing the structural sequence of signals.", "Biologists debated whether animal warning sequences contain true syntax."),
        ("Acoustic", "relating to sound, hearing, or the physical properties of noise.", "The team performed rigorous acoustic analyses on the monkey vocalizations."),
        ("Predator-specific", "varying based on the exact type of danger or hunting species.", "Meerkats utilize predator-specific alarm calls to alert their clan."),
        ("Phoneme", "any of the perceptually distinct units of sound in a language.", "Great apes combine distinct sounds into phoneme-like arrangements."),
        ("Syntax", "the structural system of communication elements and rules.", "Chimpanzee vocal sequences demonstrate a primitive form of syntax."),
        ("Evolutionary", "relating to gradual genetic and behavioral changes over generations.", "These communication systems shed light on the evolutionary roots of speech."),
        ("Semantic", "relating to the exact meaning of words, signals, or sentences.", "The research team analyzed the semantic content of bird alarm calls."),
        ("Contextual", "depending on the surrounding environment or specific situation.", "The meaning of primate gestures is highly contextual and fluid."),
        ("Primatology", "the branch of zoology dealing with the study of primates.", "Modern primatology challenges the idea that language is strictly human."),
        ("Phonetics", "the study of the physical sounds of human and animal speech.", "Acoustic recording tools have revolutionized wildlife phonetics.")
    ],
    "hidden-regenerative-powers": [
        ("Regeneration", "the biological renewal, restoration, and growth of tissues.", "Somatic regeneration remains a holy grail of developmental biology."),
        ("Blastema", "a mass of undifferentiated cells capable of growing into organs.", "Salamanders form a protective blastema at the site of an amputated limb."),
        ("Reactivation", "the restoration of active function to a dormant biological process.", "The researchers achieved localized reactivation of embryonic growth genes."),
        ("Somatic", "relating to the somatic body tissues, as opposed to germ lines.", "Mammalian somatic tissues typically respond to deep wounds by forming scars."),
        ("Mammalian", "relating to mammals, who generally possess very limited healing powers.", "Mammalian skin lacks the blastema-forming capacity of amphibians."),
        ("Efficacy", "the capacity to produce a desired somatic or therapeutic effect.", "The growth-factor cocktail demonstrated outstanding regenerative efficacy."),
        ("Dormant", "temporarily inactive or silent, but capable of being revived.", "Our genomes contain dormant blueprints for tissue reconstruction."),
        ("Signaling", "the biochemical communication process between cells.", "The cascade requires precise cellular signaling to initiate cell division."),
        ("Matrix", "an environment or material structure in which something develops.", "The extracellular matrix provides structural scaffolding for new tissue."),
        ("Oncogenic", "causing or tending to cause the development of physical tumors.", "Uncontrolled cell division carries a dangerous oncogenic risk.")
    ],
    "brain-improving-in-90s": [
        ("Neurogenesis", "the biological growth and development of new nervous tissue.", "Adult hippocampal neurogenesis persists even in nonagenarians."),
        ("Neuroplasticity", "the brain's ability to reorganize itself by forming new connections.", "Cognitive engagement stimulates lifelong neuroplasticity and memory retention."),
        ("Nonagenarian", "a person who is between 90 and 99 years old.", "Active nonagenarians display superior white-matter brain integrity."),
        ("Dendritic", "relating to the branching projections of a neuron that receive signals.", "Mental stimulation encourages dendritic branching and synaptic density."),
        ("Cognitive Reserve", "the brain's resilience and capacity to improvise and find alternate paths.", "A high cognitive reserve protects elders from visible symptoms of dementia."),
        ("Synaptic", "relating to the junctions where signals pass between brain cells.", "Consistent mental habits increase overall synaptic network complexity."),
        ("Hippocampus", "the critical brain structure associated with memory and spatial navigation.", "The hippocampus remains uniquely capable of growing new cells in late life."),
        ("Gerontology", "the scientific study of old age, the process of aging, and senior care.", "Cognitive gerontology focuses on mental vitality in senior populations."),
        ("Neurological", "relating to the anatomy, functions, and organic disorders of nerves.", "The study challenges traditional dogmas regarding neurological decline."),
        ("Stimulus", "an external factor that excites activity or active mental processes.", "A novel, challenging cognitive stimulus is vital for brain health.")
    ],
    "football-beats-shamrock": [
        ("Recall Latency", "the exact duration of time required to retrieve a memorized word.", "The researchers measured recall latency in milliseconds during the trial."),
        ("Cognitive", "relating to mental processes of comprehension, reasoning, and memory.", "Concrete noun retrieval requires significantly less cognitive effort."),
        ("Concrete", "denoting a material object rather than an abstract idea.", "Concrete nouns are processed through sensory and motor neural areas."),
        ("Abstract", "denoting an idea, quality, or state rather than a concrete object.", "Abstract nouns like 'justice' show slower retrieval speeds in testing."),
        ("Semantic", "relating to meaning in language or the logic of word relationships.", "The semantic network is organized hierarchically in the human mind."),
        ("Association", "a mental connection made between separate words or concepts.", "A strong sensory-motor association enhances long-term word retention."),
        ("Nomenclature", "the choosing or system of names or terms in a specific discipline.", "The cognitive nomenclature classifies words by their sensory weight."),
        ("Retention", "the continued possession, storage, or preservation of memory.", "The study demonstrated that concrete nouns have a superior retention rate."),
        ("Acquisition", "the learning or developing of a skill, habit, or language.", "Vocabulary acquisition is accelerated when using highly visual methods."),
        ("Empirical", "based on, concerned with, or verifiable by observation or experiment.", "The team provided compelling empirical proof for their lexical theory.")
    ],
    "ai-and-the-brain": [
        ("Backpropagation", "an algorithm for training artificial neural networks through feedback.", "Biological synapses do not utilize backpropagation to modify connections."),
        ("Synaptic Plasticity", "the biological process by which synapses strengthen or weaken over time.", "Synaptic plasticity is the core mechanism behind biological learning."),
        ("Energy Efficiency", "the ratio of useful output to the energy consumed.", "Biological brains possess an energy efficiency unmatched by silicon."),
        ("Sparse Coding", "a neural strategy where only a tiny percentage of nodes fire at once.", "Sparse coding allows the brain to process massive data using minimal power."),
        ("Neuromorphic", "engineered to mimic the physical structure of biological neurons.", "Neuromorphic chips attempt to replicate synaptic spikes on silicon."),
        ("Backpropagation", "the standard weight-adjustment method in artificial neural nets.", "Deep learning relies heavily on continuous backpropagation calculations."),
        ("Dendrite", "a short branched extension of a nerve cell, receiving signals.", "Biological dendrites perform complex local computations before firing."),
        ("Node", "a connection point or artificial neuron in an engineered network.", "Unlike passive artificial nodes, biological neurons are highly dynamic."),
        ("Plasticity", "the ability of synapses to adjust their coupling strength.", "The chip's artificial plasticity mimics synaptic learning patterns."),
        ("Thermodynamic", "relating to the relations between heat and other forms of energy.", "Human cognition operates close to the thermodynamic limit of efficiency.")
    ],
    "museums-movies-theater-stay-younger": [
        ("Longevity", "extreme long life or physical survival beyond the average span.", "Active cultural participation is highly correlated with superior longevity."),
        ("Somatic", "relating to the physical body, as distinct from the mind or soul.", "Stress can manifest as severe somatic symptoms, including immune decline."),
        ("Aesthetic", "concerned with beauty, art, or the appreciation of physical beauty.", "Aesthetic appreciation stimulates complex neural pathways in the cortex."),
        ("Cortisol", "a steroid hormone released by the adrenal glands in response to stress.", "Visiting art galleries triggers a somatic reduction in blood cortisol."),
        ("Immersion", "the state of being deeply engaged or physically involved in an environment.", "Regular cultural immersion protects seniors from age-related decline."),
        ("Inflammatory", "relating to the body's protective response to injury, causing heat.", "Viewing beautiful paintings reduces the level of pro-inflammatory proteins."),
        ("Gerontology", "the scientific study of the biological processes and sociology of aging.", "Cultural gerontology explores how artistic engagement benefits aging bodies."),
        ("Neurological", "relating to the anatomy, functions, and organic disorders of nerves.", "The study highlights the neurological advantages of theater attendance."),
        ("Somatic", "concerning the bodily systems and physical health.", "A rich aesthetic life yields profound somatic benefits for senior citizens."),
        ("Mitigate", "to make a negative somatic symptom less severe or painful.", "Active community involvement helps mitigate chronic stress and loneliness.")
    ],
    "where-you-live-shapes-dementia-risk": [
        ("Dementia", "a chronic neurological decline marked by memory failures and decay.", "Socio-environmental factors play a major role in global dementia incidence."),
        ("Particulate", "relating to or made of microscopic separate particles suspended in air.", "Particulate matter PM2.5 can cross the blood-brain barrier easily."),
        ("Greenery", "green plants or vegetation considered collectively as an urban asset.", "Access to green spaces and public greenery mitigates cognitive stress."),
        ("Epidemiology", "the branch of medicine dealing with the incidence and control of diseases.", "The spatial epidemiology of dementia reveals stark neighborhood contrasts."),
        ("Cognitive Reserve", "the brain's resilience and ability to improvise around structural damage.", "Intellectual habits and clean air build a strong cognitive reserve."),
        ("Neurodegenerative", "relating to the progressive loss of structure or function of neurons.", "Air pollution is identified as a novel environmental risk for neurodegenerative diseases."),
        ("Socio-economic", "relating to the interaction of social and economic factors in health.", "Socio-economic variables must be carefully controlled in urban medical studies."),
        ("Particulate", "microscopic solid or liquid droplets suspended in polluted air.", "Inhaling heavy particulate matter triggers systemic neural inflammation."),
        ("Urbanization", "the concentration of populations into massive city areas.", "Rapid urbanization poses unprecedented challenges for public cognitive health."),
        ("Resilience", "the capacity of a bodily organ or system to recover from stress.", "A green neighborhood enhances overall cognitive and cardiac resilience.")
    ]
}

def split_and_adapt_sessions():
    print("--- Running make_science_handcrafted.py ---")
    science_dir = "events/sessions/keeping-up-with-science"
    template_path = os.path.join(science_dir, "template-science.html")

    with open(template_path, "r", encoding="utf-8") as f_temp:
        template_content = f_temp.read()

    # 1. First, split the merged files
    merged_topics = [
        "your-fingers-hold-secret-brain-evolution",
        "spider-creatures-origins-of-fatherhood",
        "sensory-system-pain-disease",
        "climate-scientist-warming-report",
        "ozempic-obesity-revolution",
        "animal-cooperation-language",
        "hidden-regenerative-powers",
        "brain-improving-in-90s",
        "football-beats-shamrock",
        "ai-and-the-brain",
        "museums-movies-theater-stay-younger",
        "where-you-live-shapes-dementia-risk"
    ]

    for topic in merged_topics:
        # Determine source filename
        src_filename = f"{topic}.html"
        if topic == "museums-movies-theater-stay-younger":
            src_filename = f"{topic}-intermediate.html"
        elif topic == "where-you-live-shapes-dementia-risk":
            src_filename = f"{topic}-intermediate.html"

        src_path = os.path.join(science_dir, src_filename)

        # If source does not exist, use template!
        if not os.path.exists(src_path):
            print(f"⚠️ Source file not found: {src_path}. Generating from template-science.html")
            soup = BeautifulSoup(template_content, "html.parser")

            # Format Title neatly
            clean_title = topic.replace("-", " ").title().replace("Ai", "AI")
            soup.find("title").string = f"{clean_title} — COSYlanguages"
            soup.find("h1").string = clean_title

            p_date = soup.find(class_="session-date")
            if p_date:
                p_date.string = "12 May 2025"

            curr_bread = soup.find(class_="current")
            if curr_bread:
                curr_bread.string = clean_title

            desc_div = soup.find("main").find("div", style=re.compile("margin-bottom: 2rem"))
            if desc_div:
                desc_div.string = f"This session analyzes {clean_title.lower()} and its scientific implications. We will explore current hypotheses, review empirical findings from recent research studies, and discuss the global impact. Participants will engage in active vocabulary study and discuss both immediate somatic effects and long-term societal projections."

            meta_grid = soup.find(class_="session-meta-grid")
            if meta_grid:
                lang_item = meta_grid.find(string="Languages")
                if lang_item:
                    lang_item.find_parent().find_next_sibling().string = "🇬🇧 English"
                dur_item = meta_grid.find(string="Duration")
                if dur_item:
                    dur_item.find_parent().find_next_sibling().string = "60 minutes"

                res_item = meta_grid.find(string="Resources")
                if res_item:
                    val_el = res_item.find_parent().find_next_sibling()
                    val_el.clear()
                    link = soup.new_tag("a", href="https://www.nature.com/articles/d41586-023-03975-y", style="color:var(--teal);", target="_blank")
                    link.string = "Nature Article 📖"
                    val_el.append(link)
        else:
            with open(src_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            orig_title_el = soup.find("title")
            orig_title = orig_title_el.get_text().strip() if orig_title_el else ""
            clean_title = orig_title.split("(")[0].strip()

        # --- BUILD B1 (Intermediate) VERSION ---
        soup_b1 = BeautifulSoup(str(soup), "html.parser")

        if soup_b1.find("title"):
            soup_b1.find("title").string = f"{clean_title} — COSYlanguages"

        meta_grid_b1 = soup_b1.find(class_="session-meta-grid")
        if meta_grid_b1:
            level_el = meta_grid_b1.find(string=re.compile("Level"))
            if level_el:
                val_el = level_el.find_parent().find_next_sibling()
                if val_el:
                    val_el.string = "Intermediate (B1)"
            else:
                meta_grid_b1.append(BeautifulSoup('<div class="meta-item"><h4>Level</h4><p>Intermediate (B1)</p></div>', "html.parser"))

        vocab_grid_b1 = soup_b1.find(class_="vocab-grid-10")
        if vocab_grid_b1:
            cards = vocab_grid_b1.find_all(class_="vocab-card")
            spec_vocab_b1 = VOCAB_B1.get(topic, [])
            for idx, card in enumerate(cards):
                if idx < len(spec_vocab_b1):
                    word_val, def_val, ex_val = spec_vocab_b1[idx]
                    word_div = card.find(class_="vocab-word")
                    def_div = card.find(class_="vocab-def")
                    ex_div = card.find(class_="vocab-example")
                    btn = card.find("button")

                    if word_div: word_div.string = word_val
                    if def_div: def_div.string = def_val
                    if ex_div: ex_div.string = ex_val
                    if btn:
                        escaped_def = def_val.replace("'", "\\'")
                        escaped_ex = ex_val.replace("'", "\\'")
                        btn["onclick"] = "COSY.addToDict({word:'" + word_val + "', definition:'" + escaped_def + "', example:'" + escaped_ex + "'}, this)"

        round_1_b1 = soup_b1.find(class_="round-1")
        if round_1_b1:
            spec_vocab_b1 = VOCAB_B1.get(topic, [])
            items = round_1_b1.find_all(class_="round-item")
            for idx, item in enumerate(items):
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()
                    for word_val, _, _ in spec_vocab_b1:
                        pattern = re.compile(rf'\b({re.escape(word_val)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

        round_2_b1 = soup_b1.find(class_="round-2")
        if round_2_b1:
            spec_vocab_b1 = VOCAB_B1.get(topic, [])
            items = round_2_b1.find_all(class_="round-item")
            for idx, item in enumerate(items):
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()
                    for word_val, _, _ in spec_vocab_b1:
                        pattern = re.compile(rf'\b({re.escape(word_val)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

        spec_journal = JOURNAL_SPECS.get(topic, {})
        journal_html = f"""
        <div class="science-journal-box">
          <h3 class="science-journal-title">🔬 Field Journal Research Log</h3>
          <div class="science-journal-grid">
            <div class="science-journal-item">
              <h5>Specimen / Topic</h5>
              <p>{spec_journal.get("subject", "Scientific Inquiry")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Primary Hypothesis</h5>
              <p>{spec_journal.get("hypothesis", "Requires empirical validation.")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Experimental Findings</h5>
              <p>{spec_journal.get("findings", "Continuous observation in progress.")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Linguistic Focus</h5>
              <p>{spec_journal.get("grammar", "CEFR level-adapted syntactic patterns.")}</p>
            </div>
          </div>
        </div>
        """

        meta_grid_b1 = soup_b1.find(class_="session-meta-grid")
        if meta_grid_b1:
            meta_grid_b1.insert_after(BeautifulSoup(journal_html, "html.parser"))

        b1_filename = f"{topic}-intermediate.html"
        b1_path = os.path.join(science_dir, b1_filename)
        with open(b1_path, "w", encoding="utf-8") as f_out:
            f_out.write(str(soup_b1))
        print(f"Created B1 session: {b1_path}")

        # --- BUILD B2 (Upper-Intermediate) VERSION ---
        soup_b2 = BeautifulSoup(str(soup), "html.parser")

        if soup_b2.find("title"):
            soup_b2.find("title").string = f"{clean_title} — COSYlanguages"

        meta_grid_b2 = soup_b2.find(class_="session-meta-grid")
        if meta_grid_b2:
            level_el = meta_grid_b2.find(string=re.compile("Level"))
            if level_el:
                val_el = level_el.find_parent().find_next_sibling()
                if val_el:
                    val_el.string = "Upper-Intermediate (B2)"
            else:
                meta_grid_b2.append(BeautifulSoup('<div class="meta-item"><h4>Level</h4><p>Upper-Intermediate (B2)</p></div>', "html.parser"))

        vocab_grid_b2 = soup_b2.find(class_="vocab-grid-10")
        if vocab_grid_b2:
            cards = vocab_grid_b2.find_all(class_="vocab-card")
            spec_vocab_b2 = VOCAB_B2.get(topic, [])
            for idx, card in enumerate(cards):
                if idx < len(spec_vocab_b2):
                    word_val, def_val, ex_val = spec_vocab_b2[idx]
                    word_div = card.find(class_="vocab-word")
                    def_div = card.find(class_="vocab-def")
                    ex_div = card.find(class_="vocab-example")
                    btn = card.find("button")

                    if word_div: word_div.string = word_val
                    if def_div: def_div.string = def_val
                    if ex_div: ex_div.string = ex_val
                    if btn:
                        escaped_def = def_val.replace("'", "\\'")
                        escaped_ex = ex_val.replace("'", "\\'")
                        btn["onclick"] = "COSY.addToDict({word:'" + word_val + "', definition:'" + escaped_def + "', example:'" + escaped_ex + "'}, this)"

        round_1_b2 = soup_b2.find(class_="round-1")
        if round_1_b2:
            spec_vocab_b2 = VOCAB_B2.get(topic, [])
            items = round_1_b2.find_all(class_="round-item")
            for idx, item in enumerate(items):
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()
                    for word_val, _, _ in spec_vocab_b2:
                        pattern = re.compile(rf'\b({re.escape(word_val)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

        round_2_b2 = soup_b2.find(class_="round-2")
        if round_2_b2:
            spec_vocab_b2 = VOCAB_B2.get(topic, [])
            items = round_2_b2.find_all(class_="round-item")
            for idx, item in enumerate(items):
                main_div = item.find(class_="round-item-main")
                if main_div:
                    text = main_div.get_text()
                    for word_val, _, _ in spec_vocab_b2:
                        pattern = re.compile(rf'\b({re.escape(word_val)})\b', re.IGNORECASE)
                        text = pattern.sub(r'<strong>\1</strong>', text)
                    main_div.clear()
                    main_div.append(BeautifulSoup(text, "html.parser"))

        meta_grid_b2 = soup_b2.find(class_="session-meta-grid")
        if meta_grid_b2:
            meta_grid_b2.insert_after(BeautifulSoup(journal_html, "html.parser"))

        b2_filename = f"{topic}-upper-intermediate.html"
        b2_path = os.path.join(science_dir, b2_filename)
        with open(b2_path, "w", encoding="utf-8") as f_out:
            f_out.write(str(soup_b2))
        print(f"Created B2 session: {b2_path}")

        if os.path.exists(src_path) and src_filename != f"{topic}-intermediate.html":
            os.remove(src_path)
            print(f"Removed legacy merged file: {src_path}")

    # 2. Inject journal snapshot box to all OTHER science files (English non-merged, Russian, French)
    all_dirs_and_topics = [
        ("events/sessions/keeping-up-with-science", ["grandmother-evolutionary-mystery", "living-most-creative-time", "grandparents-mental-health", "right-handedness", "ai-reality-delusion", "impersonation-accounts", "fusion-energy", "losing-spoken-words", "social-decisions-brain", "mendelian-laws-broken", "ape-laughter-speech-origin-elementary", "ape-laughter-speech-origin-intermediate"]),
        ("events/fr/sessions/keeping-up-with-science", ["impersonation-accounts"]),
        ("events/ru/sessions/keeping-up-with-science", ["vliyanie-propagandy-deti"])
    ]

    for folder, topics in all_dirs_and_topics:
        for topic in topics:
            file_path = os.path.join(folder, f"{topic}.html")
            if not os.path.exists(file_path):
                continue

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            if "science-journal-box" in content:
                continue

            soup = BeautifulSoup(content, "html.parser")
            meta_grid = soup.find(class_="session-meta-grid")
            if meta_grid:
                spec_journal = JOURNAL_SPECS.get(topic, {})
                journal_html = f"""
        <div class="science-journal-box">
          <h3 class="science-journal-title">🔬 Field Journal Research Log</h3>
          <div class="science-journal-grid">
            <div class="science-journal-item">
              <h5>Specimen / Topic</h5>
              <p>{spec_journal.get("subject", "Scientific Inquiry")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Primary Hypothesis</h5>
              <p>{spec_journal.get("hypothesis", "Requires empirical validation.")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Experimental Findings</h5>
              <p>{spec_journal.get("findings", "Continuous observation in progress.")}</p>
            </div>
            <div class="science-journal-item">
              <h5>Linguistic Focus</h5>
              <p>{spec_journal.get("grammar", "CEFR level-adapted syntactic patterns.")}</p>
            </div>
          </div>
        </div>
        """
                meta_grid.insert_after(BeautifulSoup(journal_html, "html.parser"))
                with open(file_path, "w", encoding="utf-8") as f_out:
                    f_out.write(str(soup))
                print(f"Added journal snapshot box to non-merged session: {file_path}")

if __name__ == "__main__":
    split_and_adapt_sessions()
