import os
import re
from bs4 import BeautifulSoup

# Define unique linguistic descriptions mapped by filename
DESCRIPTIONS_MAP = {
    "ai-and-the-brain-intermediate.html": (
        "Neurolinguists trace syntactic processing and neural pathways in Broca's area using fMRI scans during "
        "sentence comprehension. How close are artificial neural networks to mimicking the biological syntax trees "
        "of the human brain? As we build machine language models, we must ask: can digital algorithms truly replicate "
        "the organic, silent computations that formulate our innermost thoughts?"
    ),
    "ai-and-the-brain-upper-intermediate.html": (
        "Neurolinguists trace syntactic processing and neural pathways in Broca's area using fMRI scans during "
        "sentence comprehension. How close are artificial neural networks to mimicking the biological syntax trees "
        "of the human brain? As we build machine language models, we must ask: can digital algorithms truly replicate "
        "the organic, silent computations that formulate our innermost thoughts?"
    ),
    "ai-reality-delusion.html": (
        "Computational linguists study semantic drift and hallucination rates in neural language generators by mapping "
        "high-dimensional vector spaces. When language models construct flawless syntactic structures that contain "
        "absolute delusions, they expose a deep vulnerability in human cognitive parsing: our tendency to equate "
        "syntactic fluency with objective truth. If a machine speaks beautifully, do we automatically believe it?"
    ),
    "animal-cooperation-language-intermediate.html": (
        "Bio-linguists capture acoustic wave frequencies and formant structures on digital spectrographs to decode "
        "alerting calls. Looking at wildlife, we find sophisticated communicative networks coordinating cooperative "
        "hunting and defensive alarms. Do these systems possess primitive semantic syntax, or are we witnessing "
        "the deep evolutionary precursors that eventually gave rise to human grammar?"
    ),
    "animal-cooperation-language-upper-intermediate.html": (
        "Bio-linguists capture acoustic wave frequencies and formant structures on digital spectrographs to decode "
        "alerting calls. Looking at wildlife, we find sophisticated communicative networks coordinating cooperative "
        "hunting and defensive alarms. Do these systems possess primitive semantic syntax, or are we witnessing "
        "the deep evolutionary precursors that eventually gave rise to human grammar?"
    ),
    "ape-laughter-speech-origin-elementary.html": (
        "Evolutionary phoneticians study the mechanical limits of the larynx, air-pressure modulation, and vocal-tract "
        "resonance in primates. Laughter, that raw acoustic burst, actually shares a shared evolutionary root with "
        "the articulation of human vowels. By tracing primate laughter, language scientists are unearthing the precise "
        "anatomical moment where physical reflex transformed into structured, intentional conversation."
    ),
    "ape-laughter-speech-origin-intermediate.html": (
        "Evolutionary phoneticians study the mechanical limits of the larynx, air-pressure modulation, and vocal-tract "
        "resonance in primates. Laughter, that raw acoustic burst, actually shares a shared evolutionary root with "
        "the articulation of human vowels. By tracing primate laughter, language scientists are unearthing the precise "
        "anatomical moment where physical reflex transformed into structured, intentional conversation."
    ),
    "brain-improving-in-90s-intermediate.html": (
        "Psycholinguists study lexical retrieval speeds and semantic fluency in elderly polyglots to measure cognitive reserves. "
        "Just as the brain restructures its synaptic pathways to acquire a new dialect late in life, neuroplasticity keeps "
        "our mental maps resilient even into our nineties. Can keeping our language systems active and complex be the "
        "ultimate scientific shield against cognitive decline?"
    ),
    "brain-improving-in-90s-upper-intermediate.html": (
        "Psycholinguists study lexical retrieval speeds and semantic fluency in elderly polyglots to measure cognitive reserves. "
        "Just as the brain restructures its synaptic pathways to acquire a new dialect late in life, neuroplasticity keeps "
        "our mental maps resilient even into our nineties. Can keeping our language systems active and complex be the "
        "ultimate scientific shield against cognitive decline?"
    ),
    "childhood-obesity-theory-elementary.html": (
        "Applied linguists analyze semantic framing and behavior-shaping metaphors used in public health advertising and parental discourse. "
        "The words we use to describe wellness and nutrition construct a child’s mental model of their own body. If our cultural "
        "vocabulary is saturated with consumerist framing, how can we rewire the neural associations that govern childhood habits?"
    ),
    "childhood-obesity-theory-intermediate.html": (
        "Applied linguists analyze semantic framing and behavior-shaping metaphors used in public health advertising and parental discourse. "
        "The words we use to describe wellness and nutrition construct a child’s mental model of their own body. If our cultural "
        "vocabulary is saturated with consumerist framing, how can we rewire the neural associations that govern childhood habits?"
    ),
    "climate-scientist-warming-report-intermediate.html": (
        "Sociolinguists trace lexical dispersion, semantic bleaching, and rhetorical persuasion strategies within policy documents and scientific debates. "
        "Translating raw, terrifying thermodynamic data into a persuasive narrative that drives policy is fundamentally a problem of "
        "cognitive framing. If science speaks only in sterile statistics, does the human mind fail to register the urgency of a warming planet?"
    ),
    "climate-scientist-warming-report-upper-intermediate.html": (
        "Sociolinguists trace lexical dispersion, semantic bleaching, and rhetorical persuasion strategies within policy documents and scientific debates. "
        "Translating raw, terrifying thermodynamic data into a persuasive narrative that drives policy is fundamentally a problem of "
        "cognitive framing. If science speaks only in sterile statistics, does the human mind fail to register the urgency of a warming planet?"
    ),
    "football-beats-shamrock-intermediate.html": (
        "Psycholinguists use eye-tracking and lexical decision tasks to measure how phonetic associations and wordplay affect reaction times. "
        "The fascinating cognitive overlap between physical motor coordination and rapid verbal associations reveals that our brain "
        "maps physical games and language puzzles on the very same neural substrates. Does mastering a sport actually sharpen our linguistic agility?"
    ),
    "football-beats-shamrock-upper-intermediate.html": (
        "Psycholinguists use eye-tracking and lexical decision tasks to measure how phonetic associations and wordplay affect reaction times. "
        "The fascinating cognitive overlap between physical motor coordination and rapid verbal associations reveals that our brain "
        "maps physical games and language puzzles on the very same neural substrates. Does mastering a sport actually sharpen our linguistic agility?"
    ),
    "fusion-energy.html": (
        "Science communication researchers study the conceptual metaphors and homologies used to translate complex quantum states into comprehensible language. "
        "Conceptualizing nuclear fusion—recreating a star in a laboratory—forces us to stretch our vocabulary to its absolute limits. "
        "How do language scientists design new terms to describe phenomena that defy our everyday physical experiences?"
    ),
    "grandmother-evolutionary-mystery.html": (
        "Anthropological linguists trace the maternal transmission of rare oral histories and phonetic variations across multigenerational kinship groups. "
        "The post-reproductive longevity of human grandmothers represents a unique evolutionary mystery. Beyond biological support, "
        "could grandmotherhood have been the crucial social crucible that allowed the complex transmission of human language to survive across millennia?"
    ),
    "grandparents-mental-health.html": (
        "Discourse analysts study patterns of emotional prosody, pitch variation, and lexical alignment during intergenerational dialogue. "
        "The acoustic warmth of a grandparent's voice serves as a neurological anchor for a child's developing emotional system. "
        "How does the presence of elder speakers within a family network stabilize our mental health and enrich our linguistic variety?"
    ),
    "gut-brain-memory-intermediate.html": (
        "Neurolinguists study how systemic inflammation affects chemical neurotransmitters in Wernicke's area, disrupting active word-finding and verbal memory. "
        "If our digestive microbiome directly regulates the neural plasticity required for memory retention, then our physical health "
        "and our vocabulary retrieval are deeply intertwined. Can a healthy gut literally improve our linguistic precision?"
    ),
    "hidden-regenerative-powers-intermediate.html": (
        "Biolinguists compare cell-signaling pathways to the combinatorial rules of generative grammar, seeking structural patterns in organic self-repair. "
        "Just as our biological tissue coordinates invisible cell networks to heal a wound, our linguistic system self-heals grammar "
        "errors on the fly during speech. Does nature use the same foundational coding principles for both physical regeneration and human language?"
    ),
    "hidden-regenerative-powers-upper-intermediate.html": (
        "Biolinguists compare cell-signaling pathways to the combinatorial rules of generative grammar, seeking structural patterns in organic self-repair. "
        "Just as our biological tissue coordinates invisible cell networks to heal a wound, our linguistic system self-heals grammar "
        "errors on the fly during speech. Does nature use the same foundational coding principles for both physical regeneration and human language?"
    ),
    "impersonation-accounts.html": (
        "Forensic linguists use stylometry and lexical fingerprinting to detect identity fraud by analyzing punctuation rhythms and syntactical quirks. "
        "In the digital age, a malicious actor can copy your profile picture, but they cannot easily replicate your idiosyncratic writing voice. "
        "How does our unique linguistic signature protect us against online deception, and what happens when AI learns to copy our personal syntax?"
    ),
    "inside-the-backrooms-elementary.html": (
        "Cognitive linguists examine spatial prepositions and somatic metaphors used to navigate unfamiliar, repetitive physical landscapes. "
        "The eerie, endless corridors of 'the backrooms' capture a deep psychological fear of liminal space. How does our language "
        "system struggle to map and articulate environments that lack logical physical boundaries or semantic landmarks?"
    ),
    "inside-the-backrooms-intermediate.html": (
        "Cognitive linguists examine spatial prepositions and somatic metaphors used to navigate unfamiliar, repetitive physical landscapes. "
        "The eerie, endless corridors of 'the backrooms' capture a deep psychological fear of liminal space. How does our language "
        "system struggle to map and articulate environments that lack logical physical boundaries or semantic landmarks?"
    ),
    "living-most-creative-time.html": (
        "Corpus linguists track the explosive emergence of novel neologisms, internet slang, and linguistic hybrids in online creator networks. "
        "With digital platforms democratizing artistic production, we are witnessing an unprecedented global explosion of creative output. "
        "Does this constant communicative overflow represent a golden age of language evolution, or is digital abundance diluting the depth of human expression?"
    ),
    "losing-spoken-words.html": (
        "Sociolinguists measure lexical attrition and syntactic simplification in native populations due to the dominance of digital texting. "
        "As keyboard layouts and autocomplete software streamline our daily interactions, rare and expressive words are slowly fading "
        "from our active vocabulary. Are we voluntarily trimming our linguistic diversity in exchange for digital efficiency, and what "
        "happens when we lose the words that define our culture?"
    ),
    "mendelian-laws-broken.html": (
        "Biolinguists analyze genetic sequencing as a linear, recursive code, mapping DNA strands to phonological and morphological hierarchies. "
        "Just as modern genetics has discovered exceptions that bypass 'unbreakable' Mendelian inheritance, language scientists "
        "find dialects that challenge universal grammar rules. Are both biology and human language far more dynamic, rebellious, and non-linear "
        "than our neat scientific models assume?"
    ),
    "museums-movies-theater-stay-younger-elementary.html": (
        "Psycholinguists analyze cognitive vitality and lexical access rates in older adults participating in theater and art-based discussion groups. "
        "Engaging with rich cultural narratives at museums or theaters stimulates complex semantic networks in the aging brain. "
        "Can immersing ourselves in artistic dialogue act as a powerful neurological therapy, keeping our vocabulary agile and our minds young?"
    ),
    "museums-movies-theater-stay-younger-intermediate.html": (
        "Psycholinguists analyze cognitive vitality and lexical access rates in older adults participating in theater and art-based discussion groups. "
        "Engaging with rich cultural narratives at museums or theaters stimulates complex semantic networks in the aging brain. "
        "Can immersing ourselves in artistic dialogue act as a powerful neurological therapy, keeping our vocabulary agile and our minds young?"
    ),
    "museums-movies-theater-stay-younger-upper-intermediate.html": (
        "Psycholinguists analyze cognitive vitality and lexical access rates in older adults participating in theater and art-based discussion groups. "
        "Engaging with rich cultural narratives at museums or theaters stimulates complex semantic networks in the aging brain. "
        "Can immersing ourselves in artistic dialogue act as a powerful neurological therapy, keeping our vocabulary agile and our minds young?"
    ),
    "ozempic-obesity-revolution-intermediate.html": (
        "Cognitive semanticists trace the changing metaphors of 'willpower' and 'metabolism' within clinical logs and public media framing. "
        "The pharmacological revolution in weight management rewires physical satiety signals in the brain. How does transforming "
        "a chronic condition from a moral battle of 'will' into a chemical equation alter our cultural vocabulary and our psychological narratives of self-control?"
    ),
    "ozempic-obesity-revolution-upper-intermediate.html": (
        "Cognitive semanticists trace the changing metaphors of 'willpower' and 'metabolism' within clinical logs and public media framing. "
        "The pharmacological revolution in weight management rewires physical satiety signals in the brain. How does transforming "
        "a chronic condition from a moral battle of 'will' into a chemical equation alter our cultural vocabulary and our psychological narratives of self-control?"
    ),
    "recycling-distraction-test-intermediate.html": (
        "Applied linguists analyze the framing effects of corporate 'greenwashing' slogans to understand how they soothe environmental guilt. "
        "Does focusing our active vocabulary on minor habits like recycling distract us from the necessary systemic climate conversations? "
        "By analyzing public discourse, language scientists reveal how strategic verbal framing can either catalyze political action or "
        "lull an entire society into complacency."
    ),
    "right-handedness.html": (
        "Neurolinguists investigate hemispheric lateralization, mapping how the brain's physical handedness connects to the left-hemisphere localization of speech. "
        "The persistent 9:1 ratio of right-to-left handedness across human history is deeply linked to the evolutionary emergence of "
        "our brain's language center. Does our physical motor dominance hold the secret key to how and why human speech first lateralized?"
    ),
    "sensory-system-pain-disease-intermediate.html": (
        "Clinical linguists compile and classify qualitative pain scales, studying how patients construct sensory metaphors to articulate abstract physical suffering. "
        "Pain is an intensely isolated neurological event that defies simple explanation. How do our language centers struggle "
        "to translate raw sensory nociception into precise vocabulary, and can the metaphors we choose actually alter how our brain processes physical pain?"
    ),
    "sensory-system-pain-disease-upper-intermediate.html": (
        "Clinical linguists compile and classify qualitative pain scales, studying how patients construct sensory metaphors to articulate abstract physical suffering. "
        "Pain is an intensely isolated neurological event that defies simple explanation. How do our language centers struggle "
        "to translate raw sensory nociception into precise vocabulary, and can the metaphors we choose actually alter how our brain processes physical pain?"
    ),
    "social-decisions-brain.html": (
        "Neurolinguists map micro-second differences in brain activity to see how social judgments form before the conscious mind can articulate them. "
        "If our brains formulate social judgments and decisions long before we consciously select the words to express them, is our "
        "post-hoc language merely a creative narrator? Does this biological delay challenge our fundamental definitions of free will and honest conversation?"
    ),
    "spider-creatures-origins-of-fatherhood-intermediate.html": (
        "Comparative semioticians study tactile signaling and vibrational vibrations used by arachnids during courtship and territory defense. "
        "By examining the prehistoric environmental pressures that first drove male spiders toward protective paternal care, we trace the deep "
        "evolutionary roots of family bonding. How does the emergence of parenting behaviors correlate with the development of social communication?"
    ),
    "spider-creatures-origins-of-fatherhood-upper-intermediate.html": (
        "Comparative semioticians study tactile signaling and vibrational vibrations used by arachnids during courtship and territory defense. "
        "By examining the prehistoric environmental pressures that first drove male spiders toward protective paternal care, we trace the deep "
        "evolutionary roots of family bonding. How does the emergence of parenting behaviors correlate with the development of social communication?"
    ),
    "tv-midlife-shrink-brain-intermediate.html": (
        "Phoneticians and psycholinguists measure the impact of passive, low-engagement media consumption on semantic variety and speech complexity in midlife. "
        "Passive television watching has been linked to a physical reduction in brain volume during midlife. If our cognitive health depends "
        "on active verbal and physical engagement, how does the loss of rich, bidirectional conversation accelerate the mental aging process?"
    ),
    "vliyanie-propagandy-deti.html": (
        "Дискурс-аналитики и психолингвисты исследуют методы семантического манипулирования, речевого кодирования и внушения в детских медиа. "
        "Изучая когнитивную уязвимость развивающегося мозга, ученые-лингвисты показывают, как языковые конструкции и повторяющиеся "
        "нарративы формируют ментальную модель реальности у детей. Как синтаксические структуры пропаганды обходят критические барьеры мышления "
        "и можно ли выработать лингвистический иммунитет к манипуляциям?"
    ),
    "where-you-live-shapes-dementia-risk-elementary.html": (
        "Sociolinguists study how living in urban environments with low linguistic diversity and high noise pollution impacts dialect survival and cognitive processing. "
        "Our geographic surroundings do more than shape our physical bodies—they actively restructure our neural wiring. If urban design "
        "directly influences our neurological risk for dementia, can access to green spaces and peaceful environments preserve our linguistic agility?"
    ),
    "where-you-live-shapes-dementia-risk-intermediate.html": (
        "Sociolinguists study how living in urban environments with low linguistic diversity and high noise pollution impacts dialect survival and cognitive processing. "
        "Our geographic surroundings do more than shape our physical bodies—they actively restructure our neural wiring. If urban design "
        "directly influences our neurological risk for dementia, can access to green spaces and peaceful environments preserve our linguistic agility?"
    ),
    "where-you-live-shapes-dementia-risk-upper-intermediate.html": (
        "Sociolinguists study how living in urban environments with low linguistic diversity and high noise pollution impacts dialect survival and cognitive processing. "
        "Our geographic surroundings do more than shape our physical bodies—they actively restructure our neural wiring. If urban design "
        "directly influences our neurological risk for dementia, can access to green spaces and peaceful environments preserve our linguistic agility?"
    ),
    "your-fingers-hold-secret-brain-evolution-intermediate.html": (
        "Neurolinguists map the overlapping motor cortex regions responsible for both fine manual dexterity and the rapid articulatory gestures of speech. "
        "The opposable thumb did not just allow us to craft primitive tools—it may have physically sculpted the neural pathways that "
        "enabled human syntax. Could our complex manual coordination have been the direct evolutionary midwife for human language?"
    ),
    "your-fingers-hold-secret-brain-evolution-upper-intermediate.html": (
        "Neurolinguists map the overlapping motor cortex regions responsible for both fine manual dexterity and the rapid articulatory gestures of speech. "
        "The opposable thumb did not just allow us to craft primitive tools—it may have physically sculpted the neural pathways that "
        "enabled human syntax. Could our complex manual coordination have been the direct evolutionary midwife for human language?"
    )
}

FRENCH_DESCRIPTIONS_MAP = {
    "impersonation-accounts.html": (
        "Les linguistes légistes utilisent la stylométrie et l'analyse des empreintes lexicales pour détecter la fraude "
        "à l'identité en analysant les rythmes de ponctuation et les bizarreries syntaxiques. À l'ère numérique, un acteur malveillant "
        "peut copier votre photo de profil, mais il ne peut pas facilement reproduire votre voix écrite idiosyncrasique. "
        "Comment notre signature linguistique unique nous protège-t-elle contre la tromperie en ligne, et que se passe-t-il lorsque "
        "l'IA apprend à copier notre syntaxe personnelle ?"
    )
}

def rewrite_session_file(filepath, filename, desc):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the summary div tag
    # Format: <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">...</div>
    pattern = re.compile(
        r'<div style="margin-bottom: 2rem; line-height: 1\.6; color: var\(--ink-soft\); font-size: 0\.95rem;">.*?</div>',
        re.DOTALL
    )

    is_french = 'fr/sessions' in filepath.replace('\\', '/')
    is_russian = 'ru/sessions' in filepath.replace('\\', '/')

    summary_title = "🎙️ Audio Briefing Transcription / Science Digest"
    if is_french:
        summary_title = "🎙️ Transcription du Briefing Audio / Résumé Scientifique"
    elif is_russian:
        summary_title = "🎙️ Расшифровка аудиозаписи / Научный дайджест"

    # Replace with beautiful details element
    replacement = f"""<details class="transcript-details" id="description" style="margin-bottom: 2rem; background: var(--cream); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; box-sizing: border-box;">
<summary style="font-weight: 700; cursor: pointer; color: var(--indigo); font-family: 'Playfair Display', serif; display: flex; align-items: center; justify-content: space-between; user-select: none;">
  <span>{summary_title}</span>
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
        print(f"Successfully replaced description in {filepath}")
    else:
        # Fallback if the pattern doesn't match perfectly, parse with beautifulsoup to find the block
        soup = BeautifulSoup(content, 'html.parser')
        target_div = None
        for div in soup.find_all('div'):
            style = div.get('style', '')
            if 'margin-bottom: 2rem;' in style and 'color: var(--ink-soft)' in style:
                target_div = div
                break

        if target_div:
            # Replace target_div with the replacement parsed html
            rep_soup = BeautifulSoup(replacement, 'html.parser')
            target_div.replace_with(rep_soup)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print(f"Successfully replaced description via fallback bs4 in {filepath}")
        else:
            print(f"⚠️ Could not find description div in {filepath}!")

def main():
    # 1. English sessions
    en_dir = "events/sessions/keeping-up-with-science"
    for filename, desc in DESCRIPTIONS_MAP.items():
        filepath = os.path.join(en_dir, filename)
        if os.path.exists(filepath):
            rewrite_session_file(filepath, filename, desc)

    # 2. French sessions
    fr_dir = "events/fr/sessions/keeping-up-with-science"
    for filename, desc in FRENCH_DESCRIPTIONS_MAP.items():
        filepath = os.path.join(fr_dir, filename)
        if os.path.exists(filepath):
            rewrite_session_file(filepath, filename, desc)

    # 3. Russian sessions
    ru_dir = "events/ru/sessions/keeping-up-with-science"
    filename = "vliyanie-propagandy-deti.html"
    desc = DESCRIPTIONS_MAP[filename]
    filepath = os.path.join(ru_dir, filename)
    if os.path.exists(filepath):
        rewrite_session_file(filepath, filename, desc)

if __name__ == "__main__":
    main()
