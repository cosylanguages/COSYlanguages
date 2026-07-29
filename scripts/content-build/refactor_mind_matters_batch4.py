import os
import re
from bs4 import BeautifulSoup

MM_DIR = "events/sessions/mind-matters"

BATCH4_THEMES = {
    "anticipatory-grief": {
        "title": "Anticipatory Grief: Mourning the Living",
        "h1": "Anticipatory Grief — Mourning the Living",
        "desc": "This session explores the unique emotional landscape of anticipatory grief—the subconscious rehearsal of loss before it actually transpires. We will analyze the psychological conflict between protective emotional shielding and the desire to remain present, examining how caregivers navigate the bittersweet 'long goodbye'. Together, we will reflect on finding groundedness in temporary moments of connection.",
        "profile": {
            "tendency": "Emotional Shielding against Loss",
            "trigger": "Terminal Illness or Imminent Transitions",
            "phenomenon": "Anticipatory Grief",
            "anchor": "Sharing Vulnerability inside Grief"
        },
        "vocab": [
            ("Anticipatory grief", "the emotional rehearsal of loss that occurs before the actual separation or death takes place.", "Caregivers often experience intense anticipatory grief, mourning the living long before they are gone."),
            ("Terminal", "predicted to lead to death, especially slowly; incurable.", "The sudden reality of a terminal diagnosis changes the psychological timeline of the entire family."),
            ("Pre-emptive", "done to forestall or prepare for a future event, especially to shield oneself from trauma.", "Her detachment was a pre-emptive defense mechanism designed to soften the coming blow of separation."),
            ("Somatic", "relating to or affecting the body as distinct from the mind; physical manifestation of emotion.", "Deep emotional distress often translates into somatic symptoms like chronic fatigue and chest tightness."),
            ("Bereavement", "the period of grief and mourning after the death or permanent departure of a loved one.", "Understanding anticipatory mourning can make the subsequent bereavement period less disorienting."),
            ("Resilience", "the capacity to recover from or adapt to difficult life transitions and psychological stress.", "True emotional resilience is not about feeling no pain, but about integrating grief into one's life story."),
            ("Compassion fatigue", "physical and emotional exhaustion resulting from a prolonged exposure to others' trauma and caregiving.", "Without self-directed empathy, the primary caregiver fell victim to severe compassion fatigue."),
            ("Existential", "relating to human existence, meaning, and the inevitable transience of life.", "Facing the loss of a parent triggers a profound existential crisis, forcing us to question our own purpose."),
            ("Groundedness", "the state of being sensible, realistic, and psychologically connected to the present reality.", "Mindfulness practices can help caregivers restore a sense of groundedness amidst chaotic hospital environments."),
            ("Transience", "the state of lasting only for a short time; impermanence.", "Accepting the absolute transience of beautiful moments allows us to cherish them without clinging.")
        ],
        "warmup": [
            "Is it possible to prepare for loss without losing our capacity to appreciate the present?",
            "Does knowing a separation is coming make the transition easier, or does it simply prolong the pain?"
        ],
        "r1": [
            ("How does <strong>Anticipatory grief</strong> serve as a subconscious defense mechanism to protect the ego from sudden trauma?", "★ Have you ever felt a premature sadness about an ending that hadn't happened yet?"),
            ("Why is a <strong>Terminal</strong> diagnosis often more psychologically taxing for the family than for the patient?", "★ How do you maintain communication when talking to someone who is facing a difficult crisis?"),
            ("Does a <strong>Pre-emptive</strong> emotional withdrawal help us cope, or does it cheat us of valuable final moments?", "★ Have you ever pre-emptively ended a project or relationship to avoid being hurt?"),
            ("In what ways do repressed anxieties about loss manifest as <strong>Somatic</strong> symptoms in caregiving?", "★ Where in your body do you physically carry stress during times of emotional uncertainty?"),
            ("How does the pain of anticipatory grief differ from the empty silence of actual <strong>Bereavement</strong>?", "★ What is the healthiest way to support a friend who is currently in a state of deep mourning?"),
            ("Is emotional <strong>Resilience</strong> something we inherit, or is it forged through repeated encounters with adversity?", "★ What personal experience has contributed the most to your current psychological strength?"),
            ("What strategies can professional caregivers use to prevent severe <strong>Compassion fatigue</strong>?", "★ Have you ever felt completely emotionally drained after listening to other people's problems?"),
            ("Why does the realization of our own mortality trigger a deep, <strong>Existential</strong> re-evaluation of our values?", "★ What core belief of yours has been most tested by a major life transition?"),
            ("Which daily grounding exercises or environments bring you back to a state of absolute <strong>Groundedness</strong>?", "★ Where is your physical 'safe space' when you feel completely overwhelmed by chaotic events?"),
            ("How can we learn to celebrate the beautiful <strong>Transience</strong> of life without falling into despair?", "★ What temporary, fleeting aspect of your daily routine do you appreciate the most?")
        ],
        "lst": "The Long Goodbye: Imagine you are speaking at a support group for families facing terminal diagnoses. Deliver a monologue offering perspective, using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you experienced intense <strong>Anticipatory grief</strong> tomorrow, would you seek professional therapy or family support?",
            "If a close colleague were diagnosed with a <strong>Terminal</strong> illness, would you treat them differently in the office?",
            "If we took <strong>Pre-emptive</strong> action against caregiver burnout today, would healthcare systems be more sustainable?",
            "If your subconscious expressed your stress through <strong>Somatic</strong> pain, would you immediately change your lifestyle?",
            "If you had not experienced that profound <strong>Bereavement</strong> years ago, would you now be as empathetic as you are today?",
            "If they had trained caregivers to handle <strong>Compassion fatigue</strong> back then, would their staff turnover have been lower?",
            "If you had not built such solid emotional <strong>Resilience</strong> in childhood, would you have survived that major setback?",
            "If you had faced that <strong>Existential</strong> crisis last year, would you have prioritized a different career today?",
            "If you had practiced daily mindfulness, would you feel a stronger sense of <strong>Groundedness</strong> in your life today?",
            "If you truly accepted the <strong>Transience</strong> of all relationships, would you love more boldly today?"
        ],
        "mistakes": [
            ("I am mourning about him", "I am mourning him / I am in mourning for him", "(Preposition usage: the verb 'mourn' is transitive and does not require a preposition)"),
            ("He is inevitable to fail", "It is inevitable that he will fail / His failure is inevitable", "(Structural error: we use 'It is inevitable that' or make 'failure' the subject)"),
            ("I have many compassion for her", "I have a lot of compassion / great compassion for her", "(Quantifiers with uncountable nouns: use 'a lot of' or 'great' instead of 'many')"),
            ("I was sympathizing with her struggles", "I was empathizing with her struggles / showed deep empathy", "('Sympathize' implies simple pity, while 'empathize' denotes deep psychological understanding)")
        ]
    },
    "depersonalization": {
        "title": "Depersonalization: The Outsider Within",
        "h1": "Depersonalization — The Outsider Within",
        "desc": "This session explores the unsettling psychological phenomenon of depersonalization—the mind's ultimate dissociative shield when reality or emotional stress becomes too heavy to bear. We will analyze the feeling of detached self-perception, how the subconscious alters our cognitive reality, and discuss grounding techniques to restore physical realness.",
        "profile": {
            "tendency": "Sensory & Emotional Shielding",
            "trigger": "Prolonged Psychological Stress & Exhaustion",
            "phenomenon": "Dissociative De-realization",
            "anchor": "Grounding Yourself in Present Physical Reality"
        },
        "vocab": [
            ("Depersonalization", "a psychological state where an individual feels detached from their own body, thoughts, or mental processes.", "Under extreme panic, she experienced depersonalization, feeling as if she were watching her own life on a screen."),
            ("Dissociation", "the mental process of disconnecting from one's thoughts, identity, or physical surroundings.", "Psychology views mild dissociation as a survival adaptation to manage acute childhood trauma."),
            ("Surreal", "having the bizarre, disorienting, or dreamlike qualities of a projection.", "Walking through the completely empty, silent metropolis at midnight felt incredibly surreal."),
            ("Subconscious", "the part of the mind that operates below the level of conscious, active awareness.", "Our subconscious mind often triggers depersonalization when our conscious limits have been breached."),
            ("Perception", "the cognitive process of organizing and interpreting sensory data to understand the environment.", "Sleep deprivation can introduce severe distortions into our spatial and temporal perception."),
            ("Authenticity", "the quality of being genuine, real, and aligned with one's core self.", "To restore our authenticity, we must learn to integrate our painful emotional realities."),
            ("Introspection", "the focused examination of one's own internal mental and emotional state.", "While introspection is valuable, excessive analyzing can occasionally trigger a sense of detachment."),
            ("Cognitive load", "the total amount of mental effort being used in the working memory.", "High cognitive load and constant multitasking make individuals more susceptible to dissociative states."),
            ("Groundedness", "the state of being sensible, stable, and firmly connected to physical reality and the body.", "Splashing cold water on your face is a pragmatic grounding technique to restore physical groundedness."),
            ("Alienation", "the state of feeling isolated from oneself, one's community, or physical reality.", "The relentless pressure of modern social media directly contributes to acute feelings of alienation.")
        ],
        "warmup": [
            "Have you ever experienced a brief moment where your hands, your voice, or your surroundings felt completely foreign to you?",
            "Is feeling unreal a pathological symptom, or is it a natural psychological defense against modern sensory overload?"
        ],
        "r1": [
            ("How does <strong>Depersonalization</strong> act as a mental shock absorber to protect the ego from emotional collapse?", "★ Have you ever felt like a detached spectator of your own behavior during an argument?"),
            ("Why is <strong>Dissociation</strong> so difficult for clinicians to diagnose compared to standard anxiety disorders?", "★ What is your primary mental strategy when you need to disconnect from temporary physical discomfort?"),
            ("What makes an environment feel <strong>Surreal</strong>, and how does this affect our cognitive memory of events?", "★ Can you recall a highly stressful situation in your past that now feels like a movie you watched?"),
            ("How does the <strong>Subconscious</strong> decide when to activate a dissociative shield without our conscious consent?", "★ Do you believe your <strong>Subconscious</strong> is currently hiding a stressor you have refused to address?"),
            ("How can we distinguish a distorted <strong>Perception</strong> of reality from a genuine sensory hallucination?", "★ Has your <strong>Perception</strong> of a close friend's character ever changed overnight due to a single action?"),
            ("Why does a chronic lack of emotional <strong>Authenticity</strong> in social situations trigger a dissociative response?", "★ How many social 'masks' do you wear, and which one feels closest to your true self?"),
            ("At what point does healthy <strong>Introspection</strong> cross the boundary into obsessive, unhealthy over-analysis?", "★ How do you stop your mind from falling into a loop of negative self-criticism?"),
            ("How can we reduce our daily <strong>Cognitive load</strong> to protect our brain from dissociative exhaustion?", "★ What is the biggest drain on your <strong>Cognitive load</strong> in your current professional schedule?"),
            ("Which physical grounding techniques contribute the most to restoring your sense of physical <strong>Groundedness</strong>?", "★ How do you ground yourself when you feel your anxiety beginning to spin out of control?"),
            ("How does systemic social <strong>Alienation</strong> in highly digitized societies accelerate feelings of unreality?", "★ Have you ever felt deeply alone and alienated while sitting in a crowded, noisy coffee shop?")
        ],
        "lst": "The Grounding Formula: Imagine you are a counselor advising a client who feels completely detached from their body and environment during high-stress corporate meetings. Deliver your advice, explaining how they can regain realness using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you experienced sudden <strong>Depersonalization</strong> during a critical presentation tomorrow, would you stop and breathe or push through?",
            "If modern workspaces did not impose such massive cognitive loads, would <strong>Dissociation</strong> be less common?",
            "If a highly stressful environment started to feel completely <strong>Surreal</strong>, would you leave immediately?",
            "If your <strong>Subconscious</strong> had not initiated that protective shield last year, would your mental breakdown have been worse?",
            "If your <strong>Perception</strong> of time had been doubled during that crisis, would you have made a better choice?",
            "If they had prioritized raw emotional <strong>Authenticity</strong> in their family years ago, would they suffer from alienation today?",
            "If you had not engaged in such deep, painful <strong>Introspection</strong>, would you have resolved your core conflict today?",
            "If your overall <strong>Cognitive load</strong> had been managed properly last semester, would you have avoided that burnout?",
            "If you had practiced daily somatic exercises, would you now feel a stronger sense of physical <strong>Groundedness</strong>?",
            "If that crushing sense of social <strong>Alienation</strong> had not forced you to adapt, would you still be living in your hometown today?"
        ],
        "mistakes": [
            ("It feels like a surreal dream", "It feels like a dream / It feels surreal", "(Redundancy: Surreal already implies dream-like qualities, making 'surreal dream' repetitive)"),
            ("I am feeling detachment", "I feel detached / I feel a sense of detachment", "(Part of speech: use the adjective 'detached' or the full noun phrase 'sense of detachment')"),
            ("I'm not used to dissociation", "I'm not used to dissociation", "(Spelling correction: 'dissociation' contains double-s and single-c)")
        ]
    },
    "fear-of-love-control": {
        "title": "The Fear of Love: The Loss of Control",
        "h1": "Fear of Love — The Loss of Control",
        "desc": "This session deconstructs the profound psychological fear of love—which is fundamentally a fear of losing cognitive control and surrendering autonomy. We will explore attachment theory, avoidant defensive adaptations, and analyze the psychological courage required to embrace emotional vulnerability over the illusion of invulnerability.",
        "profile": {
            "fancy_title": "🧠 Subconscious Mind Profile",
            "tendency": "Self-Protection & Vulnerability Avoidance",
            "trigger": "Deepening Emotional Intimacy",
            "phenomenon": "Avoidant Attachment Patterns",
            "anchor": "Overcoming Defensive Relational Barriers"
        },
        "vocab": [
            ("Vulnerability", "the state of being exposed to emotional risk, uncertainty, and potential hurt.", "Embracing vulnerability is not a weakness; it is the ultimate measure of psychological courage."),
            ("Intimacy", "the psychological closeness characterized by deep mutual disclosure and emotional safety.", "True intimacy requires us to dismantle the protective walls we built to survive past rejection."),
            ("Autonomy", "the capacity of an individual to make independent choices and retain self-governance.", "He feared that marriage would destroy his personal autonomy and restrict his creative freedom."),
            ("Defensive", "characterized by a hyper-vigilant stance designed to shield the ego from perceived threats.", "His sarcastic humor was a defensive shield designed to prevent people from getting too close."),
            ("Codependency", "a dysfunctional relationship pattern characterized by excessive psychological reliance on a partner.", "They confused their extreme codependency for true, mature romantic love."),
            ("Attachment style", "the characteristic pattern of relational bonding formed in early childhood with caregivers.", "Recognizing your avoidant attachment style is the first step toward breaking destructive romantic loops."),
            ("Self-sabotage", "the subconscious behavior of undermining one's own relationships or success to preserve familiarity.", "She engaged in self-sabotage, picking a fight whenever her partner brought up moving in together."),
            ("Rejection", "the painful psychological experience of being excluded, dismissed, or refused by a desired other.", "The raw fear of rejection often paralyzes people, keeping them from expressing their true desires."),
            ("Resilience", "the capacity to adapt to emotional heartbreak and recover from deep relational setbacks.", "Her emotional resilience allowed her to heal from the divorce without losing faith in connection."),
            ("Authenticity", "the practice of aligning one's external behavior with their internal feelings and values.", "To build a lasting connection, we must trade performative perfection for raw authenticity.")
        ],
        "warmup": [
            "Why do we naturally crave deep connection while simultaneously running away when it begins to feel real?",
            "Is the desire for absolute control over our emotions a sign of maturity, or is it an anxious defense mechanism?"
        ],
        "r1": [
            ("How does our subconscious confuse emotional <strong>Vulnerability</strong> with actual physical danger?", "★ When was the last time you felt a physical urge to escape during a highly emotional conversation?"),
            ("Why is true psychological <strong>Intimacy</strong> far more terrifying for high-achievers than professional failure?", "★ How easily can you share your deepest insecurities with a romantic partner?"),
            ("Does committing to a partner require us to sacrifice a portion of our personal <strong>Autonomy</strong>?", "★ How do you maintain a healthy boundary between your social life and your romantic commitments?"),
            ("What are the long-term psychological costs of maintaining a highly <strong>Defensive</strong> emotional posture?", "★ Have you ever been accused of being too defensive when received constructive relationship feedback?"),
            ("How does systemic <strong>Codependency</strong> subtly masquerade as passionate, romantic devotion in popular media?", "★ Have you ever felt responsible for managing your partner's emotional stability?"),
            ("How does an insecure <strong>Attachment style</strong> perpetuate a repetitive loop of attracting emotionally unavailable partners?", "★ How would you describe the attachment dynamics you witnessed in your childhood home?"),
            ("Why do we resort to subconscious <strong>Self-sabotage</strong> when a relationship is progressing perfectly?", "★ Can you recall a time you pushed someone away because their stability made you uncomfortable?"),
            ("How does the brain process the pain of social <strong>Rejection</strong>, and why does it feel like actual physical injury?", "★ How do you handle the fear of rejection when pitching an idea or expressing romantic interest?"),
            ("How can we cultivate emotional <strong>Resilience</strong> without turning our hearts into cold, impenetrable stone?", "★ What is the most valuable lesson a past heartbreak has taught you about your inner strength?"),
            ("Why is showing complete <strong>Authenticity</strong> the hardest choice to make when we are desperately seeking validation?", "★ Have you ever pretended to like something you hated just to make a new partner happy?")
        ],
        "lst": "The Attachment Audit: Imagine you are advising a friend who systematically self-sabotages their relationships out of a fear of losing control. Help them understand their attachment patterns using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you embraced complete <strong>Vulnerability</strong> tomorrow, do you think your current relationship would deepen or dissolve?",
            "If society valued deep emotional <strong>Intimacy</strong> over digital metrics, would loneliness rates drop significantly?",
            "If committing to a partner required you to surrender your personal <strong>Autonomy</strong>, would you choose to stay single?",
            "If you stopped taking a <strong>Defensive</strong> posture during conflicts today, how would your partner respond?",
            "If we had not mistaken severe <strong>Codependency</strong> for passion back then, would we have saved years of emotional drama?",
            "If you had worked on your insecure <strong>Attachment style</strong> years ago, would your present relationship be more stable?",
            "If you had not engaged in subconscious <strong>Self-sabotage</strong>, would you still be with your previous partner today?",
            "If you had not experienced that devastating <strong>Rejection</strong>, would your self-concept be as independent today?",
            "If your emotional <strong>Resilience</strong> had not been tested by past heartbreak, would you possess your current maturity today?",
            "If you had to trade complete romantic validation for absolute personal <strong>Authenticity</strong>, which would you prioritize today?"
        ],
        "mistakes": [
            ("I am afraid of lose control", "I am afraid of losing control", "(Prepositional syntax: prepositions like 'of' must be followed by a gerund [-ing])"),
            ("It makes me feeling vulnerable", "It makes me feel vulnerable", "(Verb patterning: 'make' + object takes a bare infinitive without -ing)"),
            ("I should of been more open", "I should have been more open", "(Grammar structure: use the auxiliary verb 'have' instead of the phonetically similar preposition 'of')")
        ]
    },
    "broken-children-grown-bodies": {
        "title": "Broken Children in Grown Bodies — COSYlanguages",
        "h1": "Broken Children — In Grown Bodies",
        "desc": "This session explores the profound psychological concept of the 'inner child' and repetition compulsion—the reality that our adult personalities are heavily shaped by unresolved childhood wounds and adaptations. We will discuss how early relational trauma manifests in adult behavioral shadows, and analyze the journey of self-awareness required to heal.",
        "profile": {
            "tendency": "Internalizing Childhood Adaptations",
            "trigger": "Current Relational Conflicts & Triggers",
            "phenomenon": "Inner Child Activation & Repetition Compulsion",
            "anchor": "Healing Adult Behavioral Shadows"
        },
        "vocab": [
            ("Unresolved", "not settled, resolved, or integrated into one's conscious psychological narrative.", "Many adult anxieties are driven by unresolved emotional wounds from early family dynamics."),
            ("Manifestation", "the clear, visible, or behavioral embodiment of a hidden psychological trigger.", "His explosive temper during stressful meetings was a somatic manifestation of childhood fear."),
            ("Authenticity", "the psychological alignment of one's external actions with their genuine internal values.", "Trading social approval for raw authenticity is the cornerstone of adult self-actualization."),
            ("Vulnerability", "the courageous state of being exposed to emotional risk, uncertainty, and judgment.", "To heal past wounds, we must find the courage to expose our vulnerability to those we trust."),
            ("Resilience", "the capacity of the mind to recover quickly from emotional setbacks and trauma.", "Childhood resilience is built when caregivers provide consistent emotional validation and safety."),
            ("Subconscious", "the part of the mind that processes memories, fears, and instincts below active awareness.", "Our adult defense mechanisms are often automated by the subconscious to protect our inner child."),
            ("Introspection", "the structured, critical examination of one's own mental and emotional processes.", "Through quiet introspection, we can trace our current triggers back to their developmental roots."),
            ("Cognitive", "relating to the mental processes of perception, memory, reasoning, and judgment.", "A cognitive reframing exercise helps us rewrite the painful narratives we adopted in childhood."),
            ("Projection", "the unconscious transfer of one's own repressed emotions or flaws onto another person.", "Her criticism of her husband's dependency was a classic projection of her own hidden fragility."),
            ("Perspective", "a particular cognitive lens or attitude toward regarding historical or personal events.", "Gaining a mature perspective on our parents' limitations allows us to forgive their mistakes.")
        ],
        "warmup": [
            "Are our adult personalities genuinely authentic, or are they just a collection of survival habits we learned as children?",
            "Why is it so much easier to react with childish panic during a crisis than to maintain adult composure?"
        ],
        "r1": [
            ("How do <strong>Unresolved</strong> developmental deficits in childhood silently dictate our choice of romantic partners?", "★ Is there an unresolved childhood conflict that you still find yourself rehashing today?"),
            ("Why is chronic people-pleasing considered a behavioral <strong>Manifestation</strong> of early emotional neglect?", "★ What physical manifestation of stress does your body trigger when you feel criticized?"),
            ("How can we maintain our <strong>Authenticity</strong> when interacting with family members who still treat us like children?", "★ In which professional or social setting do you find it most difficult to be authentic?"),
            ("Why is exposing our emotional <strong>Vulnerability</strong> necessary for dismantling our childhood survival strategies?", "★ Do you view sharing your vulnerability as a form of strength or a sign of weakness?"),
            ("How does early caregiver stability contribute to a child's psychological <strong>Resilience</strong> against future trauma?", "★ Where do you think your personal capacity for emotional resilience was originally forged?"),
            ("How do our <strong>Subconscious</strong> defenses seek to prevent us from feeling the pain of childhood memories?", "★ What is a recurring belief or dream of yours that seems to emerge directly from your subconscious?"),
            ("Why is courageous, painful <strong>Introspection</strong> required to break the cycle of generational trauma?", "★ How much time do you dedicate to active introspection versus passive entertainment?"),
            ("How do we use <strong>Cognitive</strong> behavioral techniques to reprogram our automated emotional triggers?", "★ When was the last time you felt your cognitive rationalizing was completely hijacked by childhood fear?"),
            ("How does our mind use interpersonal <strong>Projection</strong> to avoid facing our own unresolved flaws?", "★ Have you ever realized your anger at a colleague was actually a projection of your own insecurities?"),
            ("How does gaining a broader historical <strong>Perspective</strong> on our ancestors' lives help us release anger?", "★ How has your perspective on what constitutes a successful life shifted over the last ten years?")
        ],
        "lst": "The Inner Child Dialogue: Imagine you are speaking to your childhood self at a moment when they felt completely helpless. Deliver a monologue of reassurance and wisdom, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you could settle one <strong>Unresolved</strong> childhood memory tomorrow, would you choose to erase it completely?",
            "If every behavioral <strong>Manifestation</strong> of trauma was treated with empathy, would society be less violent?",
            "If total personal <strong>Authenticity</strong> became a social requirement, would you change your professional role?",
            "If you showed raw <strong>Vulnerability</strong> to your boss today, do you think they would respect you more?",
            "If human <strong>Resilience</strong> was a finite resource, would you spend more time protecting your mental energy?",
            "If your <strong>Subconscious</strong> defense patterns were displayed on your face, would you feel exposed?",
            "If deep <strong>Introspection</strong> was the only key to career advancement, would you be at the top of your field today?",
            "If our automated <strong>Cognitive</strong> habits had not been formed in childhood, would we have any personality today?",
            "If you stopped every subconscious <strong>Projection</strong> today, would your daily conflicts disappear?",
            "If you had not gained a broader <strong>Perspective</strong> on your family's history, would you still hold onto your anger today?"
        ],
        "mistakes": [
            ("I am same like my father", "I am just like my father / I am the same as my father", "(Comparative grammar: we use 'just like' or 'the same as', never 'same like')"),
            ("It makes me feeling small", "It makes me feel small", "(Syntactic pattern: the causative 'make' + object requires a bare infinitive verb)"),
            ("I'm thinking to start therapy", "I'm thinking of/about starting therapy", "(Verb complementation: the verb phrase 'thinking' requires 'of' or 'about' followed by a gerund [-ing])")
        ]
    }
}

def refactor_file(filename, spec_key):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    spec = BATCH4_THEMES[spec_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # All Batch 4 files are Advanced (C1)
    level_suffix = ""
    level_full = "Advanced (C1)"

    # Update Title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"{spec['title']}"

    # Update H1
    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = spec['h1']

    # Update Breadcrumb current level text
    breadcrumbs = soup.find(class_='cosy-breadcrumbs')
    if breadcrumbs:
        current_span = breadcrumbs.find(class_='current')
        if current_span:
            base_name = spec_key.replace("-", " ").title()
            current_span.string = f"{base_name}"

    # Update Meta Level and Topic
    meta_grid = soup.find(class_='session-meta-grid')
    if meta_grid:
        for item in meta_grid.find_all(class_='meta-item'):
            h4 = item.find('h4')
            if h4:
                text = h4.get_text(strip=True)
                if text == "Level":
                    p = item.find('p')
                    if p:
                        p.string = level_full
                elif text in ["Topic", "Theme"]:
                    p = item.find('p')
                    if p:
                        p.string = f"Psychology of {spec['profile']['phenomenon']}"

    # Update Description Box
    desc_p = soup.find(style=re.compile("margin-bottom: 2rem;"))
    if desc_p:
        inner_p = desc_p.find('p')
        if inner_p:
            inner_p.string = spec['desc']
        else:
            desc_p.string = spec['desc']

    # Update Profile Box
    profile_box = soup.find(class_='mind-profile-box')
    if profile_box:
        grid = profile_box.find(class_='mind-profile-grid')
        if grid:
            items = grid.find_all(class_='mind-profile-item')
            if len(items) >= 4:
                items[0].find('span').string = spec['profile']['tendency']
                items[1].find('span').string = spec['profile']['trigger']
                items[2].find('span').string = spec['profile']['phenomenon']
                items[3].find('span').string = spec['profile']['anchor']

    # Update Vocabulary Section
    vocab_grid = soup.find(class_='vocab-grid-10')
    if vocab_grid:
        vocab_grid.clear()
        for word, definition, example in spec['vocab']:
            card_html = f"""<div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word.replace("'", "\\'")}', definition:'{definition.replace("'", "\\'")}', example:'{example.replace("'", "\\'")}'}}, this)">Add to Dictionary</button>
      </div>"""
            card_soup = BeautifulSoup(card_html, 'html.parser')
            vocab_grid.append(card_soup)

    # Update Warm-up Block
    warmup_el = soup.find(id='s-warm')
    if warmup_el:
        body = warmup_el.find(class_='round-body')
        if body:
            questions_ul = body.find('ul', class_='round-questions')
            if questions_ul:
                questions_ul.clear()
                for q in spec['warmup']:
                    li = soup.new_tag('li')
                    li.string = q
                    questions_ul.append(li)

    # Update Round 1 Block
    r1_el = soup.find(id='s-r1')
    if r1_el:
        body = r1_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Questions"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Use .round-item-main and .round-item-personal."
            body.append(vi)

            for main_q, pers_q in spec['r1']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                pers_div = soup.new_tag('div', attrs={"class": "round-item-personal"})
                pers_soup = BeautifulSoup(pers_q, 'html.parser')
                for el in list(pers_soup.contents):
                    pers_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                item_div.append(pers_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Let's Speak Together Block
    lst_el = soup.find(id='s-lst')
    if lst_el:
        body = lst_el.find(class_='round-body')
        if body:
            body.clear()
            p_note = soup.new_tag('p', attrs={"class": "round-note"})
            p_soup = BeautifulSoup(spec['lst'], 'html.parser')
            for el in list(p_soup.contents):
                p_note.append(el)
            body.append(p_note)

    # Update Round 2 Block
    r2_el = soup.find(id='s-r2')
    if r2_el:
        body = r2_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Dilemmas & Projections"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Speculate, brainstorm, and share your personal opinions and ideas."
            body.append(vi)

            for main_q in spec['r2_cond']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Teacher's Note (Linguistic Corrections)
    mistakes_el = soup.find(id='s-mistakes')
    if mistakes_el:
        header = mistakes_el.find(class_='mistake-header')
        if header:
            span = header.find('span')
            if span:
                span.clear()
                span.string = "✏️ Teacher's Note (Linguistic Corrections)"

        m_body = mistakes_el.find(class_='mistake-body')
        if m_body:
            m_body.clear()
            for wrong, right, note in spec['mistakes']:
                item_html = f"""<div class="mistake-item">
        <span class="mistake-wrong">{wrong}</span>
        <span class="mistake-arrow">→</span>
        <span class="mistake-right">{right}</span>
        <span class="mistake-note-text">{note}</span>
      </div>"""
                item_soup = BeautifulSoup(item_html, 'html.parser')
                m_body.append(item_soup)

    # Save file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.prettify(formatter=None))
    print(f"Refactored: {filepath}")

def main():
    print("Beginning Mind Matters Batch 4 Refactoring...")
    for spec_key in BATCH4_THEMES.keys():
        if spec_key == "broken-children-grown-bodies":
            filename = "broken-children-grown-bodies.html"
        else:
            filename = f"{spec_key}.html"
        refactor_file(filename, spec_key)
    print("Batch 4 completed successfully!")

if __name__ == "__main__":
    main()
