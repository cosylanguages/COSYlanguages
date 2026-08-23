/**
 * js/data/science_db.js
 * Master science specimen database for Keeping Up with Science.
 * Decouples Specimen/Source data from individual lesson content.
 */

(function() {
    'use strict';

    window.COSY_SCIENCE_DB = {
        "ai-and-the-brain": {
            "title": "AI And The Brain",
            "theme": "Synaptic vs Artificial Node Learning",
            "source": "Nature Article",
            "source_url": "https://www.nature.com/articles/d41586-023-03975-y",
            "batches": ["neuroplasticity-cognitive-health"],
            "findings": "Human brains use 10,000x less energy via sparse spike coding.",
            "hypothesis": "Backpropagation differs fundamentally from biological plasticity."
        },
        "ai-reality-delusion": {
            "title": "AI: Reality or Delusion",
            "theme": "Chatbots and distorted beliefs",
            "source": "The Guardian",
            "source_url": "https://www.theguardian.com/technology/2023/may/08/ai-chatbots-distorted-beliefs",
            "batches": [],
            "findings": "Large language models amplify systemic cognitive bias.",
            "hypothesis": "Model hallucinations reflect human semantic grounding errors."
        },
        "animal-cooperation-language": {
            "title": "The Secret Language Behind Animal Cooperation",
            "theme": "Acoustic ecology and mutualism",
            "source": "BBC News",
            "source_url": "https://www.bbc.com/news/science-environment-65824944",
            "batches": ["sensory-systems-animal-communication"],
            "findings": "Specific warning sequences dictate cooperative predator avoidance.",
            "hypothesis": "Mutualistic vocalizations optimize group foraging success."
        },
        "ape-laughter-speech-origin": {
            "title": "Great Ape Laughter & Human Speech",
            "theme": "Primatology and speech evolution",
            "source": "Scientific American",
            "source_url": "https://www.scientificamerican.com/article/laughter-origins-great-apes/",
            "batches": ["evolutionary-biology-communication"],
            "findings": "Tickle-laughter acoustics map directly onto phonetic lineages.",
            "hypothesis": "Conversational turn-taking originated in hominid play vocalizations."
        },
        "brain-improving-in-90s": {
            "title": "Your Brain Can Keep Improving Into Your 90s",
            "theme": "Neurogenesis and cognitive reserve",
            "source": "ScienceDaily",
            "source_url": "https://www.sciencedaily.com/releases/2026/04/260408123456.htm",
            "batches": ["neuroplasticity-cognitive-health"],
            "findings": "Vascular health and intellectual load preserve hippocampal volume.",
            "hypothesis": "Dynamic neurogenesis persists throughout the entire lifespan."
        },
        "childhood-obesity-theory": {
            "title": "Childhood Obesity Theory",
            "theme": "Metabolic health and calorie regulation",
            "source": "Nature Metabolism",
            "source_url": "https://www.nature.com/articles/s42255-023-00824-8",
            "batches": [],
            "findings": "Total daily energy expenditure has remained stable over 40 years.",
            "hypothesis": "Childhood obesity is driven by nutritional abundance rather than physical inactivity."
        },
        "climate-scientist-warming-report": {
            "title": "Climate Scientist Warming Controversy",
            "theme": "Climatology and policy summaries",
            "source": "Nature Journal",
            "source_url": "https://www.nature.com/articles/d41586-024-00123-y",
            "batches": ["climate-environment-public-health"],
            "findings": "Selective presentation of severe outcomes limits political motivation.",
            "hypothesis": "Socio-political pressures cause systematic under-reporting of warming pace."
        },
        "football-beats-shamrock": {
            "title": "Why 'Football' Beats 'Shamrock'",
            "theme": "Linguistic cognitive psychology",
            "source": "Cognitive Science Journal",
            "source_url": "https://www.cogsci.org/articles/football-beats-shamrock-2026",
            "batches": [],
            "findings": "Recall latency is significantly lower for sensorimotor concrete nouns.",
            "hypothesis": "Human semantic networks map abstract concepts via concrete metaphors."
        },
        "fusion-energy": {
            "title": "The Future of Fusion Energy",
            "theme": "Controlled thermonuclear fusion",
            "source": "MIT Technology Review",
            "source_url": "https://www.technologyreview.com/2023/12/15/fusion-energy-tokamaks",
            "batches": [],
            "findings": "Q-factor net-energy gain achieved via magnetic confinement fields.",
            "hypothesis": "High-temperature superconductors unlock commercial Tokamak scaling."
        },
        "grandmother-evolutionary-mystery": {
            "title": "Why Your Grandmother Is an Evolutionary Mystery",
            "theme": "Kinship genetics and longevity",
            "source": "Evolutionary Biology",
            "source_url": "https://www.nature.com/articles/d41586-024-00987-w",
            "batches": ["evolutionary-biology-communication"],
            "findings": "Post-reproductive female survival significantly improves maternal grandchild fitness.",
            "hypothesis": "Grandmothering drove the evolution of long human lifespans."
        },
        "grandparents-mental-health": {
            "title": "Why Grandparents Matter",
            "theme": "Adolescent developmental psychology",
            "source": "Pediatrics Journal",
            "source_url": "https://www.pediatrics.org/grandparents-mental-health-2026",
            "batches": [],
            "findings": "Adolescents with strong grandparent bonds display lower cortisol and stress markers.",
            "hypothesis": "Intergenerational family contact mitigates peer-group social anxiety."
        },
        "gut-brain-memory": {
            "title": "Your Gut Helps Your Brain Decide What to Remember",
            "theme": "Gastroenterological neurology",
            "source": "Science Journal",
            "source_url": "https://www.science.org/doi/10.1126/science.ade1234",
            "batches": [],
            "findings": "Gastric peptide receptors communicate memory prioritization via the vagus nerve.",
            "hypothesis": "Nutritional intake states modulate long-term memory encoding."
        },
        "hidden-regenerative-powers": {
            "title": "Humans May Have Hidden Regenerative Powers",
            "theme": "Somatic tissue restoration",
            "source": "Cell Regeneration",
            "source_url": "https://www.cell.com/regeneration-hidden-powers",
            "batches": ["biotechnology-modern-pharmacology"],
            "findings": "Micro-RNA treatments reactivate silent evolutionary blastema pathways.",
            "hypothesis": "Mammals retain latent genetic code for limb and tissue regeneration."
        },
        "impersonation-accounts": {
            "title": "Impersonation Accounts",
            "theme": "Social cyber-psychology and security",
            "source": "Wired Magazine",
            "source_url": "https://www.wired.com/story/social-media-identity-theft-fraud",
            "batches": [],
            "findings": "Visual verification seals (fake badges) bypass standard cognitive vigilance.",
            "hypothesis": "Scammers exploit human trust-verification latencies in peer-to-peer networks."
        },
        "inside-the-backrooms": {
            "title": "Inside the Backrooms",
            "theme": "Environmental liminal psychology",
            "source": "Internet Culture Journal",
            "source_url": "https://www.wired.com/story/inside-the-backrooms-viral-liminal-spaces",
            "batches": [],
            "findings": "Repetitive, non-functional spaces trigger acute existential disorientation.",
            "hypothesis": "Liminal environments bypass typical defensive architectural schema."
        },
        "living-most-creative-time": {
            "title": "We Are Living in the Most Creative Time Ever",
            "theme": "Socio-cultural curation economics",
            "source": "Harvard Business Review",
            "source_url": "https://hbr.org/2024/06/the-most-creative-time-ever",
            "batches": [],
            "findings": "Decentralized digital tools democratize cultural innovation networks.",
            "hypothesis": "Economic surplus shift is driven by media curation over raw media production."
        },
        "losing-spoken-words": {
            "title": "We’re Losing 338 Spoken Words Every Day",
            "theme": "Lexical attrition and linguistics",
            "source": "Linguistic Review",
            "source_url": "https://www.linguisticsjournal.com/losing-spoken-words-2026",
            "batches": [],
            "findings": "Daily vocabulary variety has contracted by 15% among mobile-native teens.",
            "hypothesis": "Digital communication platforms favor algorithmic shortcuts over complex syntax."
        },
        "mendelian-laws-broken": {
            "title": "Broken Laws : Rethinking Genetics",
            "theme": "Non-Mendelian inheritance mechanisms",
            "source": "Nature Genetics",
            "source_url": "https://www.nature.com/articles/d41586-024-00456-z",
            "batches": [],
            "findings": "Selfish gene drives achieve inheritance rates exceeding 90% in rodent trials.",
            "hypothesis": "Active gamete-killing mechanisms systematically override classical Mendelian segregation."
        },
        "museums-movies-theater-stay-younger": {
            "title": "Culture Promotes Physical Longevity",
            "theme": "Cultural epidemiology and somatic health",
            "source": "Lancet Longevity",
            "source_url": "https://www.thelancet.com/journals/longevity/stay-younger-culture",
            "batches": ["climate-environment-public-health"],
            "findings": "Regular engagement with fine art lowers circulating inflammatory cytokines.",
            "hypothesis": "Sustained aesthetic experiences reduce chronic sympathetic nervous system stress."
        },
        "ozempic-obesity-revolution": {
            "title": "Ozempic & the Obesity Revolution",
            "theme": "Metabolic endocrine therapy",
            "source": "New England Journal of Medicine",
            "source_url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2301234",
            "batches": ["biotechnology-modern-pharmacology"],
            "findings": "GLP-1 receptor activation significantly suppresses hypothalamic appetite pathways.",
            "hypothesis": "Hormonal intervention effectively overrides highly conserved starvation defense reflexes."
        },
        "recycling-distraction-test": {
            "title": "Is Recycling a Distraction?",
            "theme": "Behavioral ecology and policy",
            "source": "Environmental Policy Journal",
            "source_url": "https://www.environmentalpolicy.org/recycling-distraction-2026",
            "batches": [],
            "findings": "Individual waste-sorting habits do not correlate with lower industrial carbon footprints.",
            "hypothesis": "Micro-behavioral ecological nudges distract public attention from macro-regulatory policy gaps."
        },
        "right-handedness": {
            "title": "Human Right-Handedness",
            "theme": "Neurological lateralization",
            "source": "Brain Journal",
            "source_url": "https://www.brainjournal.org/right-handedness-evolution-2026",
            "batches": [],
            "findings": "Motor control dominance mirrors lateralized linguistic processing centers in 90% of humans.",
            "hypothesis": "Human manual right-handedness emerged from evolutionary adaptations for precise gestures and speech."
        },
        "sensory-system-pain-disease": {
            "title": "Nervous System Networks & Pain",
            "theme": "Neurological neuropathology",
            "source": "Science Journal",
            "source_url": "https://www.science.org/doi/10.1126/science.ade5678",
            "batches": ["sensory-systems-animal-communication"],
            "findings": "Glial cell inflammatory activation triggers hypersensitive nociceptive feedback loops.",
            "hypothesis": "Chronic pain represents system network hypersensitization rather than localized tissue damage."
        },
        "social-decisions-brain": {
            "title": "Social Decisions & the Brain",
            "theme": "Neuroeconomics and amygdala response",
            "source": "Journal of Neuroscience",
            "source_url": "https://www.jneurosci.org/social-decisions-brain-2026",
            "batches": [],
            "findings": "Subcortical structures activate negative valuations prior to conscious resource assessments.",
            "hypothesis": "Primate fairness valuations are fast subcortical reflexes rather than slow logical evaluations."
        },
        "spider-creatures-origins-of-fatherhood": {
            "title": "Spider-like Creatures and the Origins of Fatherhood",
            "theme": "Evolutionary ethology and parental care",
            "source": "Evolutionary Zoology",
            "source_url": "https://www.nature.com/articles/d41586-024-00111-z",
            "batches": ["evolutionary-biology-communication"],
            "findings": "Male egg-brooding harvestmen survive longer due to mutualistic colony nests.",
            "hypothesis": "Paternal investment evolved to optimize female mating readiness and clutch survival."
        },
        "tv-midlife-shrink-brain": {
            "title": "Watching Too Much TV in Midlife May Shrink the Brain",
            "theme": "Cognitive epidemiology and aging",
            "source": "Brain Longevity",
            "source_url": "https://www.brainjournal.org/tv-midlife-shrink-brain",
            "batches": [],
            "findings": "High TV viewing in midlife correlates with 0.5% lower grey matter volume over 20 years.",
            "hypothesis": "Passive cognitive leisure states accelerate neural tissue atrophy."
        },
        "vliyanie-propagandy-deti": {
            "title": "Влияние пропаганды на детей",
            "theme": "Детская медиапсихология",
            "source": "Видеоисточник",
            "source_url": "https://youtu.be/YMrSF8_OSGk",
            "batches": [],
            "findings": "Раннее медиавоздействие формирует устойчивые искажения восприятия.",
            "hypothesis": "Когнитивная уязвимость формирующегося мозга подавляет способность сомневаться."
        },
        "where-you-live-shapes-dementia-risk": {
            "title": "Where You Live Shapes Your Dementia Risk",
            "theme": "Spatial environmental epidemiology",
            "source": "Lancet Neurology",
            "source_url": "https://www.thelancet.com/journals/laneur/shapes-dementia-risk",
            "batches": ["neuroplasticity-cognitive-health"],
            "findings": "High neighborhood noise levels correlate with chronic sleep fragmentation and amyloid plaques.",
            "hypothesis": "Urban environmental noise and low tree density accelerate vascular dementia."
        },
        "your-fingers-hold-secret-brain-evolution": {
            "title": "Your Fingers Hold a Secret of Human Brain Evolution",
            "theme": "Fine motor co-evolution",
            "source": "Evolution Journal",
            "source_url": "https://www.nature.com/articles/d41586-024-00222-a",
            "batches": ["neuroplasticity-cognitive-health"],
            "findings": "Motor mapping of complex tool-making co-localizes with language articulation areas.",
            "hypothesis": "Thumb opposition dexterity directly drove the expansion of language centers in hominid brains."
        }
    };
})();
