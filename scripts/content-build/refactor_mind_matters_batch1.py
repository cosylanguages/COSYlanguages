import os
import re
from bs4 import BeautifulSoup

# Define our session paths relative to the repo root
MM_DIR = "events/sessions/mind-matters"

BATCH1_SPECS = {
    "limerence.html": {
        "title": "Limerence — The Psychology of Infatuation",
        "h1": "Limerence — The Science of Infatuation",
        "desc": "This session examines the biological and psychological mechanisms behind intense limerence. We will discuss the distinction between obsessive neurochemical spikes and long-term companionate love, exploring how our childhood attachment patterns quietly fuel our romantic illusions.",
        "profile": {
            "tendency": "Obsessive Romantic Idealization",
            "trigger": "Intermittent Reinforcement & Distance",
            "phenomenon": "Dopamine-Driven Romance Fantasy",
            "anchor": "Grounding Romantic Longing in Real Connection"
        },
        "vocab": [
            ("Limerence", "a state of profound, obsessive cognitive infatuation with a romantic target.", "He realized that his intense, painful obsession was a textbook case of limerence rather than companionate love."),
            ("Infatuation", "an intense, brief, and dopamine-heavy passion or admiration for someone.", "The summer romance was a whirlwind of neurochemical infatuation that quickly faded under winter's routine."),
            ("Intrusive thoughts", "unwelcome, repetitive mental narratives that disrupt daily cognitive focus.", "When experiencing limerence, intrusive thoughts about the romantic target occur with paralyzing frequency."),
            ("Idealization", "the cognitive mechanism of overestimating a person's qualities while ignoring their flaws.", "The subconscious engages in active idealization, painting a complete stranger as a flawless savior."),
            ("Vulnerability", "the state of emotional exposure that carries a substantial risk of rejection or hurt.", "Sharing your deepest fears with a romantic interest requires raw, courageous vulnerability."),
            ("Attachment style", "the psychological model of interpersonal bonding formed during childhood.", "An anxious attachment style is the primary emotional fuel that keeps a state of limerence burning."),
            ("Intermittent reinforcement", "a conditioning pattern where rewards are delivered unpredictably, heightening obsession.", "Her hot-and-cold behavior was a form of intermittent reinforcement, keeping him hooked on hope."),
            ("Reciprocation", "the mutual exchange of emotional feelings, effort, and validation.", "The absence of direct reciprocation is precisely what prevents limerence from maturing into secure love."),
            ("Dopamine-spike", "a sudden surge of the pleasure-associated neurotransmitter driving obsessive seeking.", "A single text message triggered a massive dopamine-spike that temporarily cured his underlying anxiety."),
            ("Illusion", "a deceptive cognitive representation of a person that masks reality.", "He clung to the sweet illusion that they were destined to be together, ignoring the objective red flags.")
        ],
        "warmup": [
            "Are our romantic obsessions true choices, or are they simply mirrors of our deepest, unfulfilled longings?",
            "Dorothy Tennov coined the term 'limerence' in 1979. Why do you think psychology took so long to define this state?"
        ],
        "r1": [
            ("How does <strong>Limerence</strong> hijack our rational decision-making processes during major life transitions?", "★ Have you ever experienced a state of intense <strong>Limerence</strong> that made you act completely against your values?"),
            ("Why does childhood neglect or early emotional instability make us more vulnerable to romantic <strong>Infatuation</strong> as adults?", "★ How do you personally distinguish between a passing <strong>Infatuation</strong> and a secure, mature connection?"),
            ("How do constant <strong>Intrusive thoughts</strong> about a romantic interest undermine our professional performance and mental health?", "★ Have you ever had to fight off persistent, <strong>Intrusive thoughts</strong> when trying to focus on an urgent task?"),
            ("Which cognitive defense mechanisms are operating when we succumb to extreme, ungrounded <strong>Idealization</strong> of a stranger?", "★ Why is it psychologically comforting to engage in the <strong>Idealization</strong> of a person we barely know?"),
            ("How does a fear of emotional <strong>Vulnerability</strong> prevent a passionate crush from ever becoming a stable relationship?", "★ What makes exposing your raw <strong>Vulnerability</strong> to a romantic target feel so deeply terrifying?"),
            ("To what extent does a person's adult <strong>Attachment style</strong> dictate how they respond to romantic rejection?", "★ Have you identified how your own childhood <strong>Attachment style</strong> influences your modern relationships?"),
            ("Why does <strong>Intermittent reinforcement</strong> trigger a far stronger chemical obsession than steady, predictable affection?", "★ Have you ever been trapped in a behavior loop driven by the psychological trap of <strong>Intermittent reinforcement</strong>?"),
            ("Why does the ego desperately crave the <strong>Reciprocation</strong> of a person who has already demonstrated complete indifference?", "★ How do you restore your sense of self-worth when a profound feeling lacks <strong>Reciprocation</strong>?"),
            ("Is modern social media designed to exploit our craving for a quick <strong>Dopamine-spike</strong> in dating contexts?", "★ Where do you seek a safe, healthy <strong>Dopamine-spike</strong> when you are feeling emotionally exhausted?"),
            ("How does our mind convince us that a romantic <strong>Illusion</strong> is more valuable than a complex, flawed reality?", "★ When was the last time a sweet romantic <strong>Illusion</strong> of yours was completely shattered by reality?")
        ],
        "lst": "The Fantasy Ledger: Imagine you are forced to write a letter to your past self during your most obsessive romantic infatuation. Explain what you would change using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            # 2nd
            ("If you fell in love with a flawless AI tomorrow, would you choose to remain in that secure fantasy indefinitely?", "second"),
            ("If society banned all romantic movies, do you think we would still experience the state of <strong>Infatuation</strong> as intensely?", "second"),
            ("If your brain could automatically block all <strong>Intrusive thoughts</strong>, would you activate this feature at the cost of your creativity?", "second"),
            # 3rd
            ("If you had recognized the signs of trauma projection, would you have avoided your last major emotional setback?", "third"),
            ("If your first romantic partner had treated your <strong>Vulnerability</strong> with absolute respect, would you feel more secure today?", "third"),
            ("If your parents had understood attachment theory, how might your personal <strong>Attachment style</strong> have developed differently?", "third"),
            ("If they had provided steady validation, would you have escaped the toxic loop of <strong>Intermittent reinforcement</strong>?", "third"),
            # mixed
            ("If you had received mutual emotional <strong>Reciprocation</strong> back then, how different would your life be today?", "mixed"),
            ("If your brain had not been rewired by that initial <strong>Dopamine-spike</strong>, would you now feel more grounded in reality?", "mixed"),
            ("If you had surrendered that romantic <strong>Illusion</strong> years ago, would your self-concept be stronger today?", "mixed")
        ],
        "mistakes": [
            ("If I <u>would have</u> loved her, I would have stayed.", "If I <strong>had</strong> loved her, I would have stayed.", "In the 'if'-clause of a third conditional, use the past perfect ('had loved') instead of 'would have'."),
            ("She made me <u>to feel</u> like a fool.", "She made me <strong>feel</strong> like a fool.", "The causative verb 'make' is followed by a bare infinitive without 'to'."),
            ("I am struggle with <u>intrusives</u> thoughts.", "I am struggling with <strong>intrusive</strong> thoughts.", "Use the adjective form 'intrusive' to modify nouns; pluralizing adjectives is incorrect in English.")
        ]
    },
    "finding-the-right-person.html": {
        "title": "Finding the Right Person — COSYlanguages",
        "h1": "The Right Person — Finding vs. Becoming",
        "desc": "This session explores the psychological myth of the 'soulmate' as a projection of our unfulfilled childhood needs. We will discuss whether the pursuit of a perfect partner is a convenient defense mechanism that distracts us from our own core self-improvement and personal development.",
        "profile": {
            "tendency": "Desire for Perfect Unconditional Belonging",
            "trigger": "Romantic Media Representations",
            "phenomenon": "The Myth of the Soulmate",
            "anchor": "Accepting Human Flaws in Romantic Intimacy"
        },
        "vocab": [
            ("Projection", "the displacement of one's own unconscious desires or unfulfilled needs onto another person.", "She realized that her idealization of him was a simple projection of her own unmet emotional needs."),
            ("Compatibility", "the state of being able to coexist harmoniously, built through shared values and emotional maturity.", "True, long-term compatibility is not a random discovery; it is actively built through mutual adaptation."),
            ("Belonging", "an affinity for a situation or group characterized by security, comfort, and acceptance.", "Looking for absolute belonging in another person often masks a severe lack of self-acceptance."),
            ("Expectation", "a strong belief or blueprint regarding how a partner or relationship should behave.", "An unrealistic expectation of a painless romance is the leading cause of modern relationship failures."),
            ("Self-concept", "the mental model and belief system that an individual holds about their own identity.", "A fragile self-concept causes us to desperately seek external approval to validate our existence."),
            ("Resilience", "the psychological capacity to recover from emotional setbacks, rejection, and relationship challenges.", "Emotional resilience prevents us from treating a single broken connection as a catastrophic failure."),
            ("Validation", "the pursuit of external affirmation to prove one's worth, attractiveness, or social status.", "Dating apps exploit our subconscious need for instant validation, turning romance into a game of metrics."),
            ("Reciprocation", "the mutual, balanced exchange of affection, care, and emotional investment.", "A stable partnership cannot survive unless both individuals actively practice emotional reciprocation."),
            ("Intimacy", "the psychological state of close familiarity and deep trust, achieved by sharing one's true self.", "True intimacy requires shedding our protective social masks and allowing ourselves to be fully seen."),
            ("Self-actualization", "the complete realization of one's creative, intellectual, and social potential.", "Looking for a partner to complete us is a cheap substitute for our own journey toward self-actualization.")
        ],
        "warmup": [
            "Are we looking for a partner to share our journey, or are we looking for a savior to rescue us from ourselves?",
            "Why does modern culture place so much value on 'finding' the right person rather than 'becoming' the right person?"
        ],
        "r1": [
            ("How does psychological <strong>Projection</strong> distort our perception of a partner during the first few months of dating?", "★ Can you recall a past relationship where your admiration was actually a <strong>Projection</strong> of your own unfulfilled needs?"),
            ("Is long-term <strong>Compatibility</strong> primarily a matter of shared hobbies, or is it rooted in similar emotional maturity levels?", "★ What is the hardest test of <strong>Compatibility</strong> you have ever had to face in a personal connection?"),
            ("Why do we mistake the temporary excitement of a crush for a genuine, secure sense of <strong>Belonging</strong>?", "★ How do you cultivate a deep feeling of <strong>Belonging</strong> within yourself when you are not in a relationship?"),
            ("How does holding a rigid, romanticized <strong>Expectation</strong> of a partner set a relationship up for inevitable failure?", "★ What is one unrealistic <strong>Expectation</strong> you had to dismantle to achieve peace in your personal life?"),
            ("To what extent does a healthy, stable <strong>Self-concept</strong> protect us from entering toxic relationship dynamics?", "★ How has your personal <strong>Self-concept</strong> evolved after surviving a difficult emotional transition?"),
            ("Why is emotional <strong>Resilience</strong> far more critical in the modern dating landscape than in previous generations?", "★ Which life event has contributed the most to building your emotional <strong>Resilience</strong>?"),
            ("Why does seeking external <strong>Validation</strong> from a partner always leave us feeling insecure in the long run?", "★ How do you break the habit of chasing external <strong>Validation</strong> when you feel lonely or anxious?"),
            ("Can a relationship survive if one partner is entirely responsible for driving emotional <strong>Reciprocation</strong>?", "★ Have you ever had to withdraw your energy from a connection because there was no active <strong>Reciprocation</strong>?"),
            ("Why is true psychological <strong>Intimacy</strong> far more terrifying to achieve than physical closeness?", "★ What defensive barriers do you still struggle to drop when building deep, authentic <strong>Intimacy</strong>?"),
            ("How does our partner's personality either accelerate or hinder our individual path toward <strong>Self-actualization</strong>?", "★ Do you believe that true <strong>Self-actualization</strong> can be fully achieved while sharing your life with another person?")
        ],
        "lst": "The Mirror Journal: Imagine you could speak to the person you were before your very first relationship. Detail the advice you would give about finding vs. becoming using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            ("If dating apps calculated your core psychological compatibility, would you let them choose your future spouse?", "second"),
            ("If you stopped projecting your ideal self onto others, do you think you would find more peace in solitude?", "second"),
            ("If society completely stopped romanticizing the 'soulmate' myth, would the divorce rate drop significantly?", "second"),
            ("If you had built a more secure <strong>Self-concept</strong> earlier, would you have tolerated that past toxic relationship?", "third"),
            ("If your past partner had met your realistic <strong>Expectation</strong> of honesty, would you still be together today?", "third"),
            ("If you had focused entirely on your own <strong>Resilience</strong>, would you have recovered faster from your first heartbreak?", "third"),
            ("If they had provided constant, unconditional validation, would you have stopped searching for self-acceptance?", "third"),
            ("If you had received mutual <strong>Reciprocation</strong> back then, would you still feel the need to prove your worth today?", "mixed"),
            ("If you had cultivated true emotional <strong>Intimacy</strong> with yourself first, would you now feel more secure in relationships?", "mixed"),
            ("If your path to <strong>Self-actualization</strong> had not been interrupted by family duty, where would you be living today?", "mixed")
        ],
        "mistakes": [
            ("If I <u>would be</u> more resilient, I would not mind rejection.", "If I <strong>were</strong> more resilient, I would not mind rejection.", "In the 'if'-clause of a second conditional, use the past subjunctive 'were' instead of 'would be'."),
            ("She is the right person for me <u>since</u> five years.", "She <strong>has been</strong> the right person for me <strong>for</strong> five years.", "Use the present perfect with 'for' to describe a state that started in the past and continues to the present."),
            ("I am very <u>interesting</u> in compatibility.", "I am very <strong>interested</strong> in compatibility.", "Use the '-ed' participle adjective ('interested') to describe a person's feelings; '-ing' describes the thing causing the feeling.")
        ]
    }
}

# The remaining specs can be handled with similar targeted precision
def refactor_file(filename, spec):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Update Title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"{spec['title']} — COSYlanguages"

    # Update H1
    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = spec['h1']

    # Update Description Box (the div under metadata with inline style containing margin-bottom)
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
            # parse bold strings
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

            for main_q, _ in spec['r2_cond']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Mistakes Block
    mistake_el = soup.find(id='s-mistakes')
    if mistake_el:
        body = mistake_el.find(class_='mistake-body')
        if body:
            body.clear()
            for wrong, right, note in spec['mistakes']:
                item_div = soup.new_tag('div', attrs={"class": "mistake-item"})

                wrong_span = soup.new_tag('span', attrs={"class": "mistake-wrong"})
                wrong_soup = BeautifulSoup(wrong, 'html.parser')
                for el in list(wrong_soup.contents):
                    wrong_span.append(el)

                arrow_span = soup.new_tag('span', attrs={"class": "mistake-arrow"})
                arrow_span.string = "→"

                right_span = soup.new_tag('span', attrs={"class": "mistake-right"})
                right_soup = BeautifulSoup(right, 'html.parser')
                for el in list(right_soup.contents):
                    right_span.append(el)

                note_span = soup.new_tag('span', attrs={"class": "mistake-note-text"})
                note_span.string = f"({note})"

                item_div.append(wrong_span)
                item_div.append('\n')
                item_div.append(arrow_span)
                item_div.append('\n')
                item_div.append(right_span)
                item_div.append('\n')
                item_div.append(note_span)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Save file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.prettify(formatter=None))
    print(f"Refactored: {filepath}")

def main():
    print("Beginning Mind Matters Batch 1 Refactoring...")
    for filename, spec in BATCH1_SPECS.items():
        refactor_file(filename, spec)
    print("Batch 1 completed!")

if __name__ == "__main__":
    main()
