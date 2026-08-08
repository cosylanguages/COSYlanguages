import os
import re

SONG_NARRATIVES = {
    "love-kernels": {
        "character": "Rebecca Bunch",
        "action": "desperately waiting for tiny droplets of affection from Josh Chan",
        "context": "a highly-dramatic, high-budget music video parody featuring desert landscapes",
        "details": "Josh Chan, Colorado, hamster in a cage",
        "theme": "Satire & Infatuation"
    },
    "lets-generalize-about-men": {
        "character": "Rebecca, Paula, Valencia, and Heather",
        "action": "venting their collective romantic frustration and anger at all men",
        "context": "an upbeat 80s synth-pop girl-group anthem filled with sweeping stereotypes",
        "details": "three billion men, opposite sex, Valencia, Heather, Paula",
        "theme": "Generalizations & Satire"
    },
    "so-maternal": {
        "character": "Rebecca Bunch",
        "action": "aggressively trying to prove to everyone that she has perfect parenting instincts",
        "context": "a high-energy 90s hip-hop bragging track about domestic overachievement",
        "details": "babysitting, BPA-free plastic, organic purees, neighborhood mothers",
        "theme": "Parenting & Overachieving"
    },
    "face-your-fears": {
        "character": "Paula Proctor",
        "action": "giving Rebecca absurdly dangerous and literal advice about bravery",
        "context": "a passionate gospel anthem with a backing choir singing with absolute conviction",
        "details": "running with scissors, staring at the sun, hugging a bear, bee hives",
        "theme": "Fear & Absurd Advice"
    },
    "sexy-getting-ready-song": {
        "character": "Rebecca Bunch",
        "action": "going through a painful, messy cosmetic routine to prepare for her date",
        "context": "a smooth, sensual R&B parody contrasted with body hair removal and shaping shapewear",
        "details": "date with Josh, body waxing, plucking, Spanx, male rapper horror",
        "theme": "Social Expectations of Beauty"
    },
    "sex-with-a-stranger": {
        "character": "Rebecca Bunch",
        "action": "bringing a new date back to her hotel room while dealing with paranoid thoughts",
        "context": "a sensual slow R&B track where romantic fantasies are interrupted by thoughts of murder",
        "details": "hotel room, lock on the door, safety vs excitement, true-crime fears",
        "theme": "Intimacy & Safe Dating"
    },
    "settle-for-me": {
        "character": "Greg Serrano",
        "action": "pleading with Rebecca to compromise and choose him over Josh Chan",
        "context": "a classic, elegant Fred Astaire-style tap-dance duet with highly self-deprecating lyrics",
        "details": "Josh Chan, Greg, second choice, compromise, stable vs exciting",
        "theme": "High Standards & Compromise"
    },
    "im-a-good-person": {
        "character": "Rebecca Bunch",
        "action": "aggressively declaring her benevolence to everyone she meets",
        "context": "a loud, brassy Broadway-style showtune where good deeds are done with intense anger",
        "details": "giving money, helping the poor, demanding approval, public shouting",
        "theme": "The Need for Social Approval"
    },
    "whatll-it-be": {
        "character": "Greg Serrano",
        "action": "serving drinks at his bar in West Covina while feeling trapped and lonely",
        "context": "a melancholic piano-man ballad expressing small-town despair and big dreams",
        "details": "West Covina, bartending, Emory University, leaving the town, drinks",
        "theme": "Escaping the Small Town Mentality"
    },
    "sexy-french-depression": {
        "character": "Rebecca Bunch",
        "action": "wallowing in sadness inside her apartment while trying to make it look artistic",
        "context": "a black-and-white French new-wave cinema parody with heavy accents and heavy sighs",
        "details": "melancholy, drinking wine in bed, unwashed hair, black and white",
        "theme": "Emotional Melancholy & Escapism"
    },
    "wheres-the-bathroom": {
        "character": "Naomi Bunch (Rebecca's mother)",
        "action": "unleashing a rapid-fire torrent of passive-aggressive criticism upon entering Rebecca's flat",
        "context": "a fast, frantic theatrical patter-song filled with maternal guilt and anxiety",
        "details": "Jewish mother, Naomi, dirty apartment, weight critique, maternal pressure",
        "theme": "Parental Expectations & Boundaries"
    },
    "women-gotta-stick-together": {
        "character": "Valencia Perez",
        "action": "pretending to sing a feminist anthem about solidarity while insulting every woman around her",
        "context": "a bright, sunny beach-pop song where praise is immediately followed by backhanded critiques",
        "details": "female solidarity, Valencia, backhanded compliments, beauty standards",
        "theme": "Female Solidarity vs Rivalry"
    },
    "you-stupid-bitch": {
        "character": "Rebecca Bunch",
        "action": "singing a grand, self-critical ballad in her own mind after sabotaging her situation",
        "context": "a soaring, dramatic Broadway eleven o'clock number where she insults herself with orchestral passion",
        "details": "karma, self-sabotage, ruins, orchestra, audience participation",
        "theme": "Self-Sabotage & Regret"
    },
    "group-hang": {
        "character": "Rebecca Bunch",
        "action": "trying to fit in during a highly awkward group dinner with Josh's friends",
        "context": "a rhythmic Latin-pop track about the complete failure of group conversations",
        "details": "Hector, White Josh, group date, inside jokes, awkward silence",
        "theme": "The Awkwardness of Modern Socializing"
    },
    "im-the-villain-in-my-own-story": {
        "character": "Rebecca Bunch",
        "action": "realizing that her obsessive actions make her the bad guy in other people's lives",
        "context": "a grand Disney-villain style theatrical song where she embraces her dark role",
        "details": "princess, evil witch, Valencia's perspective, Paula",
        "theme": "Self-Perception & Moral Responsibility"
    },
    "oh-my-god-i-think-i-like-you": {
        "character": "Rebecca Bunch",
        "action": "panicking upon realizing she is developing real, vulnerable feelings for Greg",
        "context": "an upbeat, bouncy pop song filled with physical panic and emotional denial",
        "details": "Greg Serrano, vulnerability, panic, physical symptoms of liking someone",
        "theme": "Vulnerability in New Relationships"
    },
    "after-everything-ive-done-for-you": {
        "character": "Paula Proctor",
        "action": "demanding absolute gratitude and obedience from Rebecca Bunch",
        "context": "a dramatic Broadway showstopper where a friend lists all their toxic, manipulative favors",
        "details": "Paula's schemes, blackmail, hacking, toxic loyalty, demanding thank-yous",
        "theme": "Unconditional Love & Hidden Agendas"
    },
    "whos-the-new-guy": {
        "character": "the law office staff",
        "action": "reacting with extreme suspicion and panic to the arrival of Nathaniel Plimpton",
        "context": "a theatrical office-patter song where employees fear that any change will ruin their tribe",
        "details": "Nathaniel Plimpton, law office, office tribe, fear of change, mysterious boss",
        "theme": "Dealing with Sudden Change at Work"
    },
    "a-diagnosis": {
        "character": "Rebecca Bunch",
        "action": "celebrating her arrival at a psychiatric clinic to receive a mental health label",
        "context": "an uplifting, hope-filled Broadway anthem about the relief of medical answers",
        "details": "mental health stigma, psychiatric label, neurosis, hope for a cure",
        "theme": "The Relief of Mental Health Labels"
    },
    "fit-hot-guys-have-problems-too": {
        "character": "Josh Chan and Nathaniel Plimpton",
        "action": "crying in a gym and pool while complaining about their perfect lives",
        "context": "a dramatic boyband-style pop ballad parodying handsome male privilege and insecurities",
        "details": "Josh, Nathaniel, gym pool, handsome privilege, crying behind the perfect image",
        "theme": "Insecurity Behind the Perfect Image"
    },
    "without-love-you-can-save-the-world": {
        "character": "Rebecca Bunch and the cast",
        "action": "sarcastically singing about how romantic isolation frees up brainpower for global impact",
        "context": "a grand, theatrical ensemble song filled with absurd claims about saving humanity",
        "details": "no drama, solving global warming, ending wars, peace in isolation",
        "theme": "Romantic Isolation vs Global Impact"
    },
    "dont-be-a-lawyer": {
        "character": "Jim",
        "action": "warning students and professionals against choosing law as a career path",
        "context": "a high-energy, funky dance track comparing corporate law to literal misery",
        "details": "Glendale, student debt, corporate law, billing fees, alternative trades",
        "theme": "Career Advice & Pursuing Passion"
    },
    "i-hate-everything-but-you": {
        "character": "Greg Serrano",
        "action": "singing to Rebecca about his complete cynicism toward the modern world",
        "context": "a raw, sincere acoustic-rock love song filled with complaints about crowds and politics",
        "details": "hating crowds, politicians, traffic, Greg's cynicism, loving Rebecca",
        "theme": "Coping with Modern Cynicism"
    },
    "antidepressants-are-so-not-a-big-deal": {
        "character": "Rebecca Bunch and the cast",
        "action": "performing a joyful tap-dance to destigmatize taking psychiatric medication",
        "context": "a colorful, upbeat Broadway tap-dance number comparing brain chemistry to regular physical health",
        "details": "brain chemistry, tap dance, destigmatizing medication, insulin comparison",
        "theme": "Stigma & Mental Well-being"
    },
    "slow-motion": {
        "character": "Rebecca, Paula, Valencia, and Heather",
        "action": "walking in dramatic slow motion down a street while their lives are a complete mess",
        "context": "a cool, heavy hip-hop beat satirizing action-movie entrances and swagger",
        "details": "slow motion, walking in slow-mo, swagger, messy lives behind the cool walk",
        "theme": "The Illusion of Confidence"
    },
    "eleven-oclock": {
        "character": "Rebecca Bunch",
        "action": "struggling to resolve her past mistakes and find her true voice late at night",
        "context": "a soaring, introspective Broadway medley summarizing her entire psychological journey",
        "details": "eleven o'clock, awake late, resolving past mistakes, final trial",
        "theme": "Overthinking & Decisive Moments"
    }
}


def build_cxg_questions(slug, title, artist, vocab_cleaned):
    narrative = SONG_NARRATIVES[slug]

    # 1. Warmup Questions
    warmup_html = f"""            <li>How does the theme of <strong>{narrative['theme']}</strong> play a major role in the comedic story of '{title}'?</li>
            <li>In the song, {narrative['character']} is {narrative['action']}. How do you think this challenge shapes their actions?</li>
            <li>Have you ever experienced a situation in your own life that relates to {narrative['theme']}?</li>
            <li style="list-style-type: '🎵 ';"><strong>Predict:</strong> Based on the context of {narrative['context']}, what kind of musical tone do you expect from {artist}?</li>"""

    # 2. Round 1 Questions (10 items)
    r1_templates_main = [
        "In '{title}', {character} deals with <strong>{w}</strong> as they are {action}. How does this shape their immediate reactions?",
        "The lyrics of '{title}' highlight how <strong>{w}</strong> is directly tied to the song's main theme of {theme}. Discuss this connection.",
        "Why does the dramatic context of {context} make the presence of <strong>{w}</strong> feel so powerful or ironic?",
        "How does {character}'s struggle with <strong>{w}</strong> reflect the wider social expectations or conflicts in their life?",
        "In '{title}', the character's choice regarding <strong>{w}</strong> leads to a highly memorable moment. What does this reveal about them?",
        "How does the musical style of '{title}' emphasize the feeling of <strong>{w}</strong> during {character}'s performance?",
        "How does the mention of <strong>{w}</strong> in the lyrics of {artist} help us understand the relationship between the characters?",
        "Why is <strong>{w}</strong> such a crucial keyword for describing the emotional state of {character} at this point in the story?",
        "How does the songwriter use <strong>{w}</strong> to satirize or critique modern attitudes toward {theme}?",
        "If {character} had completely avoided <strong>{w}</strong>, how would the narrative of the song or their situation have changed?"
    ]

    r1_templates_personal = [
        "★ Have you ever had to manage a major challenge involving <strong>{w}</strong> in your personal or professional life?",
        "★ Do you agree that <strong>{w}</strong> is something we must actively cultivate, or does it happen naturally?",
        "★ How has your personal perspective on <strong>{w}</strong> changed as you have gained more life experience?",
        "★ What is the first thing that comes to your mind when you think of <strong>{w}</strong> in daily communication?",
        "★ In your daily routine, how do you handle situations that require great <strong>{w}</strong> and focus?",
        "★ Can you share a funny or memorable story where <strong>{w}</strong> played a key role?",
        "★ Do you think that <strong>{w}</strong> is more important for individual success, or is it crucial for group harmony?",
        "★ What advice would you give to someone who is currently struggling with <strong>{w}</strong>?",
        "★ How does our modern digital environment affect how we experience or express <strong>{w}</strong>?",
        "★ If you could teach a class on the importance of <strong>{w}</strong>, what would be your main message?"
    ]

    r1_questions_html = ""
    for idx, w in enumerate(vocab_cleaned):
        t_idx = idx % 10
        q_main = r1_templates_main[t_idx].format(
            title=title, artist=artist, character=narrative["character"],
            action=narrative["action"], context=narrative["context"], theme=narrative["theme"], w=w
        )
        q_pers = r1_templates_personal[t_idx].format(w=w)
        r1_questions_html += f'<div class="round-item"><div class="round-item-main">{q_main}</div>\n<div class="round-item-personal">{q_pers}</div>\n</div>\n'

    # Add interactive musical checkpoint at the end of Round 1
    checkpoint_r1_html = f"""
        <div class="lyrics-checkpoint" style="background: var(--cream); border-left: 4px solid var(--teal); padding: 1.25rem; border-radius: 8px; margin-top: 2rem; margin-bottom: 1.5rem; font-family: 'Nunito', sans-serif;">
          <strong style="color: var(--teal); display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">🎵 Interactive Musical Checkpoints (Karaoke Identity)</strong>
          <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft);">
            <li><strong>Before Listening:</strong> Discuss the context: {narrative['character']} is {narrative['action']} in {narrative['context']}. What do you expect?</li>
            <li><strong>During Listening:</strong> Notice the detail of {narrative['details']}. How does this build the story?</li>
            <li><strong>Lyrical Takeaway:</strong> Why is the mention of {vocab_cleaned[0]} and {vocab_cleaned[1]} so important for the song's ultimate message?</li>
          </ul>
        </div>
    """
    r1_questions_html += checkpoint_r1_html

    # 3. Round 2 Debate Statements (3 items)
    r2_templates = [
        "The portrayal of <strong>{w1}</strong> in '{title}' suggests that {theme} is ultimately a self-sabotaging behavior. Let's debate this.",
        "Without a healthy balance of <strong>{w2}</strong>, {character}'s attempts to resolve their conflict will always fail under social pressure. Share your thoughts.",
        "The genius of '{title}' by {artist} lies in showing that <strong>{w3}</strong> is simply a shield we use to hide our deep vulnerabilities. Discuss."
    ]

    r2_statements_html = ""
    w1 = vocab_cleaned[0] if len(vocab_cleaned) > 0 else "action"
    w2 = vocab_cleaned[1] if len(vocab_cleaned) > 1 else "motivation"
    w3 = vocab_cleaned[2] if len(vocab_cleaned) > 2 else "concept"

    for idx, tpl in enumerate(r2_templates):
        stmt = tpl.format(
            title=title, artist=artist, character=narrative["character"],
            theme=narrative["theme"], w1=w1, w2=w2, w3=w3
        )
        r2_statements_html += f'<div class="round-item"><div class="round-item-main">{stmt}</div>\n</div>\n'

    # Add creative reaction checkpoints at the end of Round 2
    checkpoint_r2_html = f"""
        <div class="lyrics-checkpoint" style="background: #FAEEE8; border-left: 4px solid var(--orange); padding: 1.25rem; border-radius: 8px; margin-top: 2rem; font-family: 'Nunito', sans-serif;">
          <strong style="color: var(--orange); display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">❤️ Emotional &amp; Creative Reaction Activities</strong>
          <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft);">
            <li><strong>The Lyric Spotlight:</strong> Which specific line or metaphor from '{title}' by {artist} felt most meaningful or funny to you? Why?</li>
            <li><strong>Roleplay or Creative Pitch:</strong> Imagine you are advising {narrative['character']} about their choice of {narrative['action']}. Pitch your advice to the class!</li>
          </ul>
        </div>
    """
    r2_statements_html += checkpoint_r2_html

    return warmup_html, r1_questions_html, r2_statements_html


def enrich_file(filepath, slug):
    if not os.path.exists(filepath):
        print(f"File {filepath} not found, skipping...")
        return False

    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    title_m = re.search(r"<h1>(.*?)</h1>", html)
    title = title_m.group(1).strip() if title_m else slug.replace("-", " ").title()

    artist_m = re.search(r'<p class="session-date">(.*?) • (.*?)</p>', html)
    artist = artist_m.group(1).strip() if artist_m else "Rachel Bloom"

    # Extract vocabulary words
    vocab_words = re.findall(r'<div class="vocab-word"[^>]*>(.*?)</div>', html)
    vocab_cleaned = []
    for v in vocab_words:
        v = v.strip()
        if ">" in v:
            v = re.sub(r'<[^>]+>', '', v)
        vocab_cleaned.append(v)

    # Build custom questions
    warmup_html, r1_questions_html, r2_statements_html = build_cxg_questions(slug, title, artist, vocab_cleaned)

    # 1. Enrich Warmup Questions
    warmup_block_pattern = r'(<div class="round-block warm-up open" id="s-warm">.*?<ul class="round-questions">)(.*?)(</ul>.*?</div>)'
    warmup_match = re.search(warmup_block_pattern, html, re.DOTALL)
    if warmup_match:
        html = re.sub(
            warmup_block_pattern,
            rf"\1\n{warmup_html}\n\3",
            html,
            flags=re.DOTALL
        )

    # 2. Replace the Stage 4 discussion block entirely
    discussion_block_pattern = r'(<div class="round-block open" id="discussion">.*?💬 Stage 4: Discussion.*?<div class="round-body" style="display:block; padding-top: 1.5rem;">)(.*?)(</div>\s*</div>\s*<div class="round-block open" id="lang-focus">)'

    discussion_replacement = f"""
        <div class="round-1" style="margin-bottom: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{r1_questions_html}        </div>
        <div class="round-2" style="margin-top: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{r2_statements_html}        </div>
      """

    html = re.sub(
        discussion_block_pattern,
        rf"\1\n{discussion_replacement}\n\3",
        html,
        flags=re.DOTALL
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"Successfully enriched {filepath} with custom handcrafted questions! ✨")
    return True


def main():
    print("======================================================================")
    print("🌟 RUNNING HIGH-QUALITY CUSTOM DISCUSSION ENRICHMENT FOR CXG SESSIONS")
    print("======================================================================\n")

    enriched_count = 0
    for slug in SONG_NARRATIVES.keys():
        path = f"events/sessions/karaoke-club/{slug}.html"
        if enrich_file(path, slug):
            enriched_count += 1

    print(f"\n🎉 Enriched {enriched_count} Crazy Ex-Girlfriend song pages with highly-focused narrative questions!")

if __name__ == "__main__":
    main()
