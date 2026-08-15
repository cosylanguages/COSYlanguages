import os
import re

# Define engaging, prompt-driven descriptions following the 3-part framework:
# 1. The Hook / Scientific Curiosity
# 2. Key Questions & Debate Focus
# 3. Call to Action / Invitation to Participate

DESCRIPTIONS_MAP = {
    "ai-and-the-brain-intermediate.html": (
        "What if artificial intelligence and your biological brain process reality in completely opposite ways? "
        "While AI supercomputers consume vast amounts of electricity to simulate neural nodes, your biological brain achieves incredible feats of reasoning on just twenty watts of power. "
        "In this session, we will examine how synaptic plasticity differs from machine backpropagation, unpack the true efficiency of biological memory, and practice contrast connectors to express complex differences. "
        "Step into our laboratory of ideas, test your assumptions about digital mind power, and share your perspective on the future of AI!"
    ),
    "ai-and-the-brain-upper-intermediate.html": (
        "What if artificial intelligence and your biological brain process reality in completely opposite ways? "
        "While AI supercomputers consume vast amounts of electricity to simulate neural nodes, your biological brain achieves incredible feats of reasoning on just twenty watts of power. "
        "In this session, we will examine how synaptic plasticity differs from machine backpropagation, unpack the true efficiency of biological memory, and practice contrast connectors to express complex differences. "
        "Step into our laboratory of ideas, test your assumptions about digital mind power, and share your perspective on the future of AI!"
    ),
    "ai-reality-delusion.html": (
        "Can a computer algorithm speak with perfect grammatical fluency yet be completely out of touch with reality? "
        "Large language models can generate eloquent paragraphs that sound convincing, yet contain absolute hallucinations and distorted beliefs. "
        "In this session, we explore why human minds easily mistake syntactic fluency for objective truth, debate how AI shapes our perception of reality, and master evaluative vocabulary. "
        "Join us to challenge your cognitive biases, analyze artificial logic, and engage in a thrilling debate on the boundaries of machine truth!"
    ),
    "animal-cooperation-language-intermediate.html": (
        "Do animals possess secret dialects and hidden grammars that allow them to coordinate complex survival strategies? "
        "From warning calls in bird flocks to synchronized hunting tactics in wolf packs, nature is full of sophisticated acoustic communication networks. "
        "In this session, we delve into bio-linguistics, explore whether animal signals qualify as true language, and practice comparative structures. "
        "Come discover the acoustic secrets of the animal kingdom, share your insights, and join our lively discussion on the roots of communication!"
    ),
    "animal-cooperation-language-upper-intermediate.html": (
        "Do animals possess secret dialects and hidden grammars that allow them to coordinate complex survival strategies? "
        "From warning calls in bird flocks to synchronized hunting tactics in wolf packs, nature is full of sophisticated acoustic communication networks. "
        "In this session, we delve into bio-linguistics, explore whether animal signals qualify as true language, and practice comparative structures. "
        "Come discover the acoustic secrets of the animal kingdom, share your insights, and join our lively discussion on the roots of communication!"
    ),
    "ape-laughter-speech-origin-elementary.html": (
        "Did human conversation begin millions of years ago with a shared laugh among our primate ancestors? "
        "Phonetic research suggests that the acoustic rhythms of ape tickle-laughter share deep evolutionary origins with human speech articulation. "
        "In this session, we trace how physical play turned into intentional vocalization, learn essential vocabulary for discussing evolutionary science, and practice simple past storytelling. "
        "Join our supportive circle to explore the origins of human laughter and voice your opinions with confidence!"
    ),
    "ape-laughter-speech-origin-intermediate.html": (
        "Did human conversation begin millions of years ago with a shared laugh among our primate ancestors? "
        "Phonetic research suggests that the acoustic rhythms of ape tickle-laughter share deep evolutionary origins with human speech articulation. "
        "In this session, we trace how physical play turned into intentional vocalization, learn essential vocabulary for discussing evolutionary science, and practice simple past storytelling. "
        "Join our supportive circle to explore the origins of human laughter and voice your opinions with confidence!"
    ),
    "brain-improving-in-90s-intermediate.html": (
        "Did you know that your brain has the remarkable ability to grow new neural pathways well into your nineties? "
        "Scientific breakthroughs show that intellectual challenge, lifelong learning, and active language use keep hippocampal volume resilient throughout old age. "
        "In this session, we examine neuroplasticity in senior polyglots, discuss strategies for cognitive longevity, and practice cause-and-effect connectors. "
        "Come share your personal learning habits, debate longevity theories, and energize your mind in a stimulating group dialogue!"
    ),
    "brain-improving-in-90s-upper-intermediate.html": (
        "Did you know that your brain has the remarkable ability to grow new neural pathways well into your nineties? "
        "Scientific breakthroughs show that intellectual challenge, lifelong learning, and active language use keep hippocampal volume resilient throughout old age. "
        "In this session, we examine neuroplasticity in senior polyglots, discuss strategies for cognitive longevity, and practice cause-and-effect connectors. "
        "Come share your personal learning habits, debate longevity theories, and energize your mind in a stimulating group dialogue!"
    ),
    "childhood-obesity-theory-elementary.html": (
        "Why are modern children facing unprecedented health challenges despite our growing awareness of nutrition? "
        "Recent metabolic studies challenge the old belief that lack of exercise is the main culprit, pointing instead to nutritional abundance and cultural metaphors around food. "
        "In this session, we examine how public health discourse shapes habits, practice vocabulary related to lifestyle and health, and build clear opinion statements. "
        "Bring your unique thoughts, explore fresh scientific angles, and participate in a welcoming community conversation!"
    ),
    "childhood-obesity-theory-intermediate.html": (
        "Why are modern children facing unprecedented health challenges despite our growing awareness of nutrition? "
        "Recent metabolic studies challenge the old belief that lack of exercise is the main culprit, pointing instead to nutritional abundance and cultural metaphors around food. "
        "In this session, we examine how public health discourse shapes habits, practice vocabulary related to lifestyle and health, and build clear opinion statements. "
        "Bring your unique thoughts, explore fresh scientific angles, and participate in a welcoming community conversation!"
    ),
    "climate-scientist-warming-report-intermediate.html": (
        "How do scientists turn overwhelming climate data into compelling narratives that inspire real political change? "
        "When raw thermodynamic data is communicated in sterile statistics, society often fails to grasp the urgency of global warming. "
        "In this session, we analyze the power of linguistic framing, explore how public policy reports are crafted, and practice persuasive language techniques. "
        "Step up to voice your perspective on environmental policy, sharpen your debate skills, and contribute to an important global dialogue!"
    ),
    "climate-scientist-warming-report-upper-intermediate.html": (
        "How do scientists turn overwhelming climate data into compelling narratives that inspire real political change? "
        "When raw thermodynamic data is communicated in sterile statistics, society often fails to grasp the urgency of global warming. "
        "In this session, we analyze the power of linguistic framing, explore how public policy reports are crafted, and practice persuasive language techniques. "
        "Step up to voice your perspective on environmental policy, sharpen your debate skills, and contribute to an important global dialogue!"
    ),
    "football-beats-shamrock-intermediate.html": (
        "Why does your brain recall words like 'football' faster than abstract words like 'shamrock'? "
        "Cognitive psychology reveals that concrete motor concepts activate rich neural networks, making sensorimotor words dramatically easier to retrieve under pressure. "
        "In this session, we test our own verbal reaction times, explore the overlap between physical agility and mental fluency, and practice dynamic vocabulary idioms. "
        "Join us for an energetic session filled with mental games, lively debates, and practical fluency practice!"
    ),
    "football-beats-shamrock-upper-intermediate.html": (
        "Why does your brain recall words like 'football' faster than abstract words like 'shamrock'? "
        "Cognitive psychology reveals that concrete motor concepts activate rich neural networks, making sensorimotor words dramatically easier to retrieve under pressure. "
        "In this session, we test our own verbal reaction times, explore the overlap between physical agility and mental fluency, and practice dynamic vocabulary idioms. "
        "Join us for an energetic session filled with mental games, lively debates, and practical fluency practice!"
    ),
    "fusion-energy.html": (
        "Imagine unleashing the power of a star inside a laboratory—could nuclear fusion solve humanity's clean energy needs forever? "
        "Recreating solar reactions on Earth requires pushing scientific innovation and language to its absolute limit as scientists describe states of matter that defy imagination. "
        "In this session, we explore cutting-edge Tokamak technology, debate the economic future of clean energy, and practice hypothetical conditionals. "
        "Come share your vision of the future, debate big technological questions, and power up your English skills!"
    ),
    "grandmother-evolutionary-mystery.html": (
        "Why do human females live decades past their reproductive years, unlike almost every other mammal on Earth? "
        "The 'Grandmother Hypothesis' suggests that elder matriarchs were essential to human survival, passing down oral knowledge, language, and social stability. "
        "In this session, we unravel this evolutionary mystery, discuss intergenerational wisdom, and practice narrative connectors. "
        "Join us to celebrate family dynamics, debate human evolution, and engage in a heartwarming, thought-provoking exchange!"
    ),
    "grandparents-mental-health.html": (
        "Can a strong relationship with grandparents act as a neurological shield against adolescent stress and anxiety? "
        "Studies in developmental psychology show that intergenerational bonds lower cortisol levels and provide emotional grounding in a fast-paced world. "
        "In this session, we discuss the psychological power of family connection, examine pitch and tone in empathetic dialogue, and practice reflective vocabulary. "
        "Bring your personal stories, explore psychological insights, and share a warm, meaningful conversation with fellow learners!"
    ),
    "gut-brain-memory-intermediate.html": (
        "Is your stomach secretly dictating what your brain remembers and forgets? "
        "Neuroscientists have discovered that the gut microbiome communicates directly with brain memory centers via the vagus nerve, affecting daily mental clarity and recall. "
        "In this session, we explore the gut-brain axis, discuss how lifestyle impacts cognitive sharpness, and practice health-related phrasal verbs. "
        "Step in to discover how physical health shapes your mind, test your knowledge, and join our lively health and science discussion!"
    ),
    "hidden-regenerative-powers-intermediate.html": (
        "Could human bodies possess hidden genetic codes for regenerating lost tissue and repairing organ damage? "
        "Biologists are discovering latent cellular pathways in mammals that mirror the self-healing mechanisms seen in salamanders and starfish. "
        "In this session, we examine micro-RNA breakthroughs, compare organic regeneration to language self-correction, and practice passive voice constructions. "
        "Uncover the mysteries of medical biotechnology, voice your hopes for future health, and practice expressing complex ideas with ease!"
    ),
    "hidden-regenerative-powers-upper-intermediate.html": (
        "Could human bodies possess hidden genetic codes for regenerating lost tissue and repairing organ damage? "
        "Biologists are discovering latent cellular pathways in mammals that mirror the self-healing mechanisms seen in salamanders and starfish. "
        "In this session, we examine micro-RNA breakthroughs, compare organic regeneration to language self-correction, and practice passive voice constructions. "
        "Uncover the mysteries of medical biotechnology, voice your hopes for future health, and practice expressing complex ideas with ease!"
    ),
    "impersonation-accounts.html": (
        "In a digital world of AI avatars and fake profiles, how can you prove your identity is genuinely yours? "
        "Forensic linguists use stylometry to analyze writing quirks, proving that while someone can copy your picture, your unique linguistic fingerprint is nearly impossible to fake. "
        "In this session, we explore digital security, analyze stylistic writing patterns, and practice cautious modalities. "
        "Join our cyber-detective table, test your awareness of online deception, and discuss how to protect your digital presence!"
    ),
    "inside-the-backrooms-elementary.html": (
        "Why do endless, repetitive corridors and empty rooms trigger an intense psychological feeling of unease? "
        "The viral sensation of 'liminal spaces' captures how our brains struggle when environments lack familiar semantic landmarks and social cues. "
        "In this session, we explore environmental psychology, practice spatial prepositions, and describe mysterious atmospheres in simple English. "
        "Step into the mystery, describe strange landscapes, and build your confidence in a fun, immersive speaking club!"
    ),
    "inside-the-backrooms-intermediate.html": (
        "Why do endless, repetitive corridors and empty rooms trigger an intense psychological feeling of unease? "
        "The viral sensation of 'liminal spaces' captures how our brains struggle when environments lack familiar semantic landmarks and social cues. "
        "In this session, we explore environmental psychology, practice spatial prepositions, and describe mysterious atmospheres in simple English. "
        "Step into the mystery, describe strange landscapes, and build your confidence in a fun, immersive speaking club!"
    ),
    "living-most-creative-time.html": (
        "Are we living through the most creative golden age in human history, or is digital noise diluting true artistic depth? "
        "Decentralized digital platforms allow millions of people to publish music, writing, and art daily, giving rise to unprecedented cultural expression. "
        "In this session, we debate creator economy trends, explore new vocabulary for digital culture, and practice expressing nuanced agreement or disagreement. "
        "Come share your favorite creative outlets, debate the impact of tech on art, and spark your imagination in our club!"
    ),
    "losing-spoken-words.html": (
        "Are autocomplete tools, emojis, and rapid texting causing hundreds of expressive words to vanish from our daily speech? "
        "Sociolinguists warn that daily vocabulary variety is contracting among mobile-native generations as digital shortcuts replace nuanced syntax. "
        "In this session, we investigate lexical attrition, discover endangered words, and practice rich descriptive adjectives to expand our speech. "
        "Reclaim your vocabulary power, debate digital communication trends, and enrich your spoken English with us!"
    ),
    "mendelian-laws-broken.html": (
        "What happens when nature breaks its own fundamental laws of inheritance? "
        "Recent genetics trials reveal 'gene drives' that systematically override classical Mendelian inheritance, mirroring how living dialects rebel against rigid grammar rules. "
        "In this session, we draw parallels between genetic codes and human language systems, debate genetic engineering ethics, and practice complex conditionals. "
        "Challenge your understanding of biology, debate bold scientific frontiers, and refine your argumentation skills!"
    ),
    "museums-movies-theater-stay-younger-elementary.html": (
        "Can visiting art museums, watching plays, and engaging in cultural discussions literally keep your brain young? "
        "Epidemiological research reveals that active engagement with fine arts lowers stress hormones, stimulates memory networks, and boosts physical longevity. "
        "In this session, we talk about our favorite cultural experiences, practice art and entertainment vocabulary, and share simple opinions. "
        "Join our warm cultural lounge, share what inspires you, and enjoy a cheerful, life-affirming English discussion!"
    ),
    "museums-movies-theater-stay-younger-intermediate.html": (
        "Can visiting art museums, watching plays, and engaging in cultural discussions literally keep your brain young? "
        "Epidemiological research reveals that active engagement with fine arts lowers stress hormones, stimulates memory networks, and boosts physical longevity. "
        "In this session, we talk about our favorite cultural experiences, practice art and entertainment vocabulary, and share simple opinions. "
        "Join our warm cultural lounge, share what inspires you, and enjoy a cheerful, life-affirming English discussion!"
    ),
    "museums-movies-theater-stay-younger-upper-intermediate.html": (
        "Can visiting art museums, watching plays, and engaging in cultural discussions literally keep your brain young? "
        "Epidemiological research reveals that active engagement with fine arts lowers stress hormones, stimulates memory networks, and boosts physical longevity. "
        "In this session, we talk about our favorite cultural experiences, practice art and entertainment vocabulary, and share simple opinions. "
        "Join our warm cultural lounge, share what inspires you, and enjoy a cheerful, life-affirming English discussion!"
    ),
    "ozempic-obesity-revolution-intermediate.html": (
        "How is a new generation of metabolic medications reshaping how society views willpower, health, and self-control? "
        "The GLP-1 pharmaceutical revolution rewires brain hunger signals, shifting weight management from a personal moral battle into a biological equation. "
        "In this session, we analyze changing public narratives, debate medical ethics, and practice discourse markers for sensitive topics. "
        "Engage in a respectful, balanced debate, explore modern medical shifts, and articulate your thoughts with clarity!"
    ),
    "ozempic-obesity-revolution-upper-intermediate.html": (
        "How is a new generation of metabolic medications reshaping how society views willpower, health, and self-control? "
        "The GLP-1 pharmaceutical revolution rewires brain hunger signals, shifting weight management from a personal moral battle into a biological equation. "
        "In this session, we analyze changing public narratives, debate medical ethics, and practice discourse markers for sensitive topics. "
        "Engage in a respectful, balanced debate, explore modern medical shifts, and articulate your thoughts with clarity!"
    ),
    "recycling-distraction-test-intermediate.html": (
        "Is individual household recycling genuinely saving the planet, or is it distracting us from major industrial changes? "
        "Environmental policy researchers examine how micro-behavioral green habits can sometimes create a false sense of accomplishment while macro-regulations lag behind. "
        "In this session, we evaluate environmental slogans, debate sustainability strategies, and practice balanced argumentation structures. "
        "Bring your ecological perspectives, challenge greenwashing clichés, and join a passionate environmental debate!"
    ),
    "right-handedness.html": (
        "Why are 90% of humans worldwide right-handed, and how does this physical trait link to speech development in the brain? "
        "Neurological mapping shows that motor control dominance in the right hand directly mirrors left-hemisphere localization for spoken language. "
        "In this session, we explore human brain lateralization, test simple motor-speech coordination tasks, and practice precision vocabulary. "
        "Uncover fascinating brain facts, share your left vs right-handed experiences, and enjoy an engaging mind session!"
    ),
    "sensory-system-pain-disease-intermediate.html": (
        "Why is physical pain so difficult to articulate in words, and how do sensory metaphors shape our perception of suffering? "
        "Clinical neurologists study how glial cell inflammatory responses trigger pain loops, while linguists examine how patients construct sensory metaphors to describe illness. "
        "In this session, we examine qualitative medical scales, practice empathetic expressions, and discuss sensory vocabulary. "
        "Explore the deep connection between language and physical sensation, practice empathetic communication, and share your perspective!"
    ),
    "sensory-system-pain-disease-upper-intermediate.html": (
        "Why is physical pain so difficult to articulate in words, and how do sensory metaphors shape our perception of suffering? "
        "Clinical neurologists study how glial cell inflammatory responses trigger pain loops, while linguists examine how patients construct sensory metaphors to describe illness. "
        "In this session, we examine qualitative medical scales, practice empathetic expressions, and discuss sensory vocabulary. "
        "Explore the deep connection between language and physical sensation, practice empathetic communication, and share your perspective!"
    ),
    "social-decisions-brain.html": (
        "Does your brain make social decisions seconds before you consciously decide what words to say? "
        "Neuroeconomics demonstrates that subcortical emotional centers process fairness and trust long before our conscious mind constructs a logical explanation. "
        "In this session, we examine subcortical valuation pathways, debate human free will vs instinct, and practice rapid reasoning phrases. "
        "Test your decision-making instincts, debate human psychology, and practice spontaneous speaking in a supportive group!"
    ),
    "spider-creatures-origins-of-fatherhood-intermediate.html": (
        "What can prehistoric spider-like creatures teach us about the evolutionary origins of fatherhood and parental care? "
        "Ethological discoveries show that male egg-brooding harvestmen evolved protective nesting habits millions of years ago to ensure colony survival. "
        "In this session, we explore animal behavior evolution, practice storytelling tenses, and discuss family roles in nature. "
        "Delve into fascinating animal ethology, share your thoughts on nature's surprises, and grow your vocabulary with us!"
    ),
    "spider-creatures-origins-of-fatherhood-upper-intermediate.html": (
        "What can prehistoric spider-like creatures teach us about the evolutionary origins of fatherhood and parental care? "
        "Ethological discoveries show that male egg-brooding harvestmen evolved protective nesting habits millions of years ago to ensure colony survival. "
        "In this session, we explore animal behavior evolution, practice storytelling tenses, and discuss family roles in nature. "
        "Delve into fascinating animal ethology, share your thoughts on nature's surprises, and grow your vocabulary with us!"
    ),
    "tv-midlife-shrink-brain-intermediate.html": (
        "Could passive television viewing in midlife physically reduce your brain's grey matter volume over time? "
        "Cognitive epidemiology reveals a strong connection between low-engagement passive entertainment and accelerated cognitive aging. "
        "In this session, we contrast passive consumption with active conversation, discuss brain-friendly daily routines, and practice advice structures. "
        "Share your daily media habits, debate digital screen balance, and keep your mind active in a lively group discussion!"
    ),
    "where-you-live-shapes-dementia-risk-elementary.html": (
        "Can the physical neighborhood you live in directly influence your brain health and dementia risk as you age? "
        "Spatial epidemiology reveals that urban noise, lack of green spaces, and high stress environments contribute to long-term cognitive strain. "
        "In this session, we talk about town vs country living, practice descriptive vocabulary for city environments, and express personal choices. "
        "Describe your dream living environment, explore environmental health facts, and practice English with friendly peers!"
    ),
    "where-you-live-shapes-dementia-risk-intermediate.html": (
        "Can the physical neighborhood you live in directly influence your brain health and dementia risk as you age? "
        "Spatial epidemiology reveals that urban noise, lack of green spaces, and high stress environments contribute to long-term cognitive strain. "
        "In this session, we talk about town vs country living, practice descriptive vocabulary for city environments, and express personal choices. "
        "Describe your dream living environment, explore environmental health facts, and practice English with friendly peers!"
    ),
    "where-you-live-shapes-dementia-risk-upper-intermediate.html": (
        "Can the physical neighborhood you live in directly influence your brain health and dementia risk as you age? "
        "Spatial epidemiology reveals that urban noise, lack of green spaces, and high stress environments contribute to long-term cognitive strain. "
        "In this session, we talk about town vs country living, practice descriptive vocabulary for city environments, and express personal choices. "
        "Describe your dream living environment, explore environmental health facts, and practice English with friendly peers!"
    ),
    "your-fingers-hold-secret-brain-evolution-intermediate.html": (
        "How did the fine motor dexterity of human fingers help build the neural architecture for complex human speech? "
        "Neuro-mapping shows that the brain regions controlling opposable thumb movements are closely linked to language articulation centers in Broca's area. "
        "In this session, we explore tool-making co-evolution, practice linking cause and effect, and discuss human evolutionary milestones. "
        "Discover the secret links behind human dexterity, test your ideas, and sharpen your spoken English!"
    ),
    "your-fingers-hold-secret-brain-evolution-upper-intermediate.html": (
        "How did the fine motor dexterity of human fingers help build the neural architecture for complex human speech? "
        "Neuro-mapping shows that the brain regions controlling opposable thumb movements are closely linked to language articulation centers in Broca's area. "
        "In this session, we explore tool-making co-evolution, practice linking cause and effect, and discuss human evolutionary milestones. "
        "Discover the secret links behind human dexterity, test your ideas, and sharpen your spoken English!"
    )
}

FRENCH_DESCRIPTIONS_MAP = {
    "impersonation-accounts.html": (
        "À l'ère des avatars IA et des faux profils numériques, comment prouver que votre voix écrite est authentique ? "
        "Les linguistes légistes utilisent la stylométrie pour analyser les habitudes d'écriture, prouvant que la signature linguistique d'une personne reste unique. "
        "Dans cette session, nous explorons la sécurité numérique, analysons les styles de rédaction et pratiquons le vocabulaire de la prudence. "
        "Rejoignez notre table de détective numérique, découvrez les secrets de la stylométrie et partagez votre avis en français !"
    )
}

RUSSIAN_DESCRIPTIONS_MAP = {
    "vliyanie-propagandy-deti.html": (
        "Как повторяющиеся информационные нарративы и медиа воздействуют на формирующийся мозг ребёнка? "
        "Психолингвистические исследования показывают, как языковые конструкции формируют ментальную картину мира и обходят критическое восприятие. "
        "На этом занятии мы разберём механизмы семантического влияния, обсудим развитие критического мышления и отработаем дискуссионные фразы. "
        "Присоединяйтесь к нашему клубу, чтобы вместе проанализировать важные аспекты медиаграмотности и высказать своё мнение!"
    )
}

def update_file(filepath, desc, title):
    if not os.path.exists(filepath):
        print(f"⚠️ File not found: {filepath}")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex search for details block with class transcript-details
    pattern = re.compile(
        r'<details\s+class="transcript-details"[^>]*>.*?</details>',
        re.DOTALL
    )

    replacement = f"""<details class="transcript-details" id="description" style="margin-bottom: 2rem; background: var(--cream); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; box-sizing: border-box;">
<summary style="font-weight: 700; cursor: pointer; color: var(--indigo); font-family: 'Playfair Display', serif; display: flex; align-items: center; justify-content: space-between; user-select: none;">
  <span>{title}</span>
  <span class="round-toggle">▼</span>
</summary>
<div style="margin-top: 1rem; line-height: 1.7; color: var(--ink); font-size: 0.95rem;">
  <p>{desc}</p>
</div>
</details>"""

    if pattern.search(content):
        new_content = pattern.sub(replacement, content, count=1)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Updated: {filepath}")
        return True
    else:
        print(f"❌ Failed to locate transcript-details in: {filepath}")
        return False

def main():
    en_base = "apps/premium-events/clubs/kus/sessions/keeping-up-with-science"
    fr_base = "apps/premium-events/clubs/kus/fr/sessions/keeping-up-with-science"
    ru_base = "apps/premium-events/clubs/kus/ru/sessions/keeping-up-with-science"

    updated_count = 0

    # 1. Update English files
    title_en = "🎙️ Audio Briefing Transcription / Science Digest"
    for filename, desc in DESCRIPTIONS_MAP.items():
        filepath = os.path.join(en_base, filename)
        if update_file(filepath, desc, title_en):
            updated_count += 1

    # 2. Update French files
    title_fr = "🎙️ Transcription du Briefing Audio / Résumé Scientifique"
    for filename, desc in FRENCH_DESCRIPTIONS_MAP.items():
        filepath = os.path.join(fr_base, filename)
        if update_file(filepath, desc, title_fr):
            updated_count += 1

    # 3. Update Russian files
    title_ru = "🎙️ Расшифровка аудиозаписи / Научный дайджест"
    for filename, desc in RUSSIAN_DESCRIPTIONS_MAP.items():
        filepath = os.path.join(ru_base, filename)
        if update_file(filepath, desc, title_ru):
            updated_count += 1

    print(f"\n🎉 Successfully processed and updated {updated_count} files!")

if __name__ == "__main__":
    main()
