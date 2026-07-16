import os
import re

SESSION_REVOICE_DATA = {
    'aspiration-vs-inspiration.html': {
        'prepended_desc': "Perhaps our endless aspiration is merely a symptom of our inability to be content with who we are, a constant chase for a future self that always remains one step out of reach. ",
        'warm_up_question': "Perhaps our endless aspiration is merely a symptom of our inability to be content with who we are. Are we running towards our dreams, or simply running away from ourselves?"
    },
    'how-to-love-your-work.html': {
        'prepended_desc': "Perhaps loving our work isn't about finding the perfect job, but about understanding our own emotional needs and the quiet anxieties that drive us. ",
        'warm_up_question': "Perhaps loving our work isn't about finding the perfect job, but about understanding our own emotional needs. Is it possible that our obsession with professional passion is just a modern fantasy?"
    },
    'psychology-of-smiles.html': {
        'prepended_desc': "Perhaps a smile is not always a sign of joy, but a shield we wear to protect ourselves and others from our sadness. ",
        'warm_up_question': "Perhaps a smile is not always a sign of joy, but a shield we wear to protect ourselves and others from our sadness. What does a forced smile say about our fear of vulnerability?"
    },
    'limerence.html': {
        'prepended_desc': "Perhaps our romantic obsessions are not choices, but mirrors of our deepest, unfulfilled longings. ",
        'warm_up_question': "Perhaps our romantic obsessions are not choices, but mirrors of our deepest, unfulfilled longings. Is limerence the ultimate form of self-delusion?"
    },
    'expert-defend-language-mistakes.html': {
        'prepended_desc': "Perhaps our obsession with linguistic perfection is just another mask for our fear of judgment, preventing us from truly sharing our thoughts. ",
        'warm_up_question': "Perhaps our obsession with linguistic perfection is just another mask for our fear of judgment. Is a mistake really an error, or is it simply a beautiful sign of our desire to connect?"
    },
    'blue-eyes-brown-eyes-experiment.html': {
        'prepended_desc': "Perhaps our schools are not merely halls of learning, but emotional arenas where the young seek safety in cliques and group boundaries. ",
        'warm_up_question': "Perhaps our schools are not merely halls of learning, but emotional arenas where the young seek safety in cliques. Why do we divide ourselves into tribes so easily?"
    },
    'anticipatory-grief.html': {
        'prepended_desc': "Perhaps our grief begins long before the loss itself, as our minds try to rehearse the unbearable in a desperate attempt to soften the blow. ",
        'warm_up_question': "Perhaps our grief begins long before the loss itself, as our minds try to rehearse the unbearable in a desperate attempt to soften the blow. Is it possible to prepare for loss without losing the present?"
    },
    'psychology-of-action-bias.html': {
        'prepended_desc': "Perhaps our urge to act is not always a sign of courage, but a flight from the discomfort of waiting and the anxiety of stillness. ",
        'warm_up_question': "Perhaps our urge to act is not always a sign of courage, but a flight from the discomfort of waiting. Why do we feel compelled to do something—anything—even when doing nothing is wiser?"
    },
    'guilt-moving-abroad.html': {
        'prepended_desc': "Perhaps moving abroad is not just a change of address, but a quiet betrayal of the people and places that made us, a slow tearing of emotional roots. ",
        'warm_up_question': "Perhaps moving abroad is not just a change of address, but a quiet betrayal of the people and places that made us. Why do we carry the weight of the home we left behind?"
    },
    'science-of-sleep.html': {
        'prepended_desc': "Perhaps sleep is not merely a biological necessity, but a nightly surrender where our conscious shields finally collapse to let our subconscious speak. ",
        'warm_up_question': "Perhaps sleep is not merely a biological necessity, but a nightly surrender where our conscious shields finally collapse to let our subconscious speak. What are we truly trying to escape when we crave sleep?"
    },
    'depersonalization.html': {
        'prepended_desc': "Perhaps feeling unreal is the mind's ultimate shield when reality itself becomes too heavy and overwhelming to bear. ",
        'warm_up_question': "Perhaps feeling unreal is the mind's ultimate shield when reality itself becomes too heavy to bear. Have you ever felt like a detached spectator of your own life?"
    },
    'brain-discipline-dopamine.html': {
        'prepended_desc': "Perhaps our struggle with discipline isn't a failure of willpower, but a misunderstanding of our brain's quiet plea for instant comfort. ",
        'warm_up_question': "Perhaps our struggle with discipline isn't a failure of willpower, but a misunderstanding of our brain's quiet plea for instant comfort. How do we negotiate with our ancient impulses?"
    },
    'kidlins-law.html': {
        'prepended_desc': "Perhaps stating a problem clearly is not just a practical step, but an act of emotional courage that strips away the comfortable illusions of denial. ",
        'warm_up_question': "Perhaps stating a problem clearly is not just a practical step, but an act of emotional courage. Why are we so often afraid of looking our troubles in the eye?"
    },
    'power-of-habits.html': {
        'prepended_desc': "Perhaps our habits are the invisible architecture of our daily lives, built stone by stone without our conscious consent. ",
        'warm_up_question': "Perhaps our habits are the invisible architecture of our daily lives, built stone by stone without our consent. How much of who we are is just a repeating pattern of behavior?"
    },
    'impersonation.html': {
        'prepended_desc': "Perhaps our desire to play a role or pretend to be someone else is just a symptom of our exhaustion with being ourselves. ",
        'warm_up_question': "Perhaps our desire to play a role or pretend to be someone else is just a symptom of our exhaustion with being ourselves. Who are we when the mask is off?"
    },
    'broken-children-grown-bodies.html': {
        'prepended_desc': "Perhaps our adult bodies are only fragile shells carrying the quiet, unresolved wounds of our childhood. ",
        'warm_up_question': "Perhaps our adult bodies are only fragile shells carrying the quiet, unresolved wounds of our childhood. How much of our present behavior is dictated by the child we once were?"
    },
    'fear-of-love-control.html': {
        'prepended_desc': "Perhaps our fear of love is really a fear of losing control, of surrendering our carefully constructed defenses to another fallible human. ",
        'warm_up_question': "Perhaps our fear of love is really a fear of losing control, of surrendering our carefully constructed defenses to another fallible human. Why do we run from the very thing we seek?"
    },
    'gilberts-law.html': {
        'prepended_desc': "Perhaps the hardest part of any task is not the execution, but the silent burden of figuring out how to do it alone. ",
        'warm_up_question': "Perhaps the hardest part of any task is not the execution, but the silent burden of figuring out how to do it alone. Why do we equate asking for help with weakness?"
    },
    'benjamin-franklin-effect.html': {
        'prepended_desc': "Perhaps we do not help people because we like them; perhaps we like them because we have helped them. ",
        'warm_up_question': "Perhaps we do not help people because we like them; perhaps we like them because we have helped them. Is our affection just a story we tell ourselves to justify our actions?"
    },
    'nazi-race-propaganda.html': {
        'prepended_desc': "Perhaps the most terrifying aspect of propaganda is not its falsehood, but its ability to align with our secret fears and prejudices. ",
        'warm_up_question': "Perhaps the most terrifying aspect of propaganda is not its falsehood, but its ability to align with our secret fears and prejudices. How fragile is our moral compass when group belonging is offered?"
    },
    'wilsons-law.html': {
        'prepended_desc': "Perhaps our obsession with intelligence and information is just a shield against the chaotic unpredictability of life. ",
        'warm_up_question': "Perhaps our obsession with intelligence and information is just a shield against the chaotic unpredictability of life. Is intelligence without wisdom just a sophisticated trap?"
    },
    'murphys-law.html': {
        'prepended_desc': "Perhaps our belief that everything that can go wrong will go wrong is not pessimism, but our mind's attempt to disarm the future. ",
        'warm_up_question': "Perhaps our belief that everything that can go wrong will go wrong is not pessimism, but our mind's attempt to disarm the future. Why do we find a strange comfort in expecting the worst?"
    },
    'maze-of-biases.html': {
        'prepended_desc': "Perhaps our minds are not perfectly rational instruments, but storytellers constantly twisting facts to suit our fragile egos. ",
        'warm_up_question': "Perhaps our minds are not perfectly rational instruments, but storytellers constantly twisting facts to suit our fragile egos. Why is it so comforting to believe we are always objective?"
    },
    'law-of-attraction.html': {
        'prepended_desc': "Perhaps our fascination with the law of attraction is a symptom of our deep anxiety about our powerlessness. ",
        'warm_up_question': "Perhaps our fascination with the law of attraction is a symptom of our deep anxiety about our powerlessness. Do we really believe the universe answers our thoughts, or are we just desperate for control?"
    },
    'bounded-rationality.html': {
        'prepended_desc': "Perhaps our choices are never fully free, but confined by the limits of our energy, our history, and our fragile focus. ",
        'warm_up_question': "Perhaps our choices are never fully free, but confined by the limits of our energy, our history, and our fragile focus. How do we make peace with our imperfect decision-making?"
    },
    'finding-the-right-person.html': {
        'prepended_desc': "Perhaps the search for the 'right person' is a beautiful distraction from the much harder work of becoming the right person ourselves. ",
        'warm_up_question': "Perhaps the search for the 'right person' is a beautiful distraction from the much harder work of becoming the right person ourselves. Are we looking for a soulmate or a savior?"
    },
    'conversations-avoid-enjoy.html': {
        'prepended_desc': "Perhaps the conversations we avoid are the very ones that hold the key to our healing and connection. ",
        'warm_up_question': "Perhaps the conversations we avoid are the very ones that hold the key to our healing and connection. Why do we choose the quiet safety of distance over the vulnerability of truth?"
    }
}

SOPHISTICATED_MISTAKES = """          <div class="mistake-item">
            <span class="mistake-wrong">I was <u>sympathizing</u> with her struggles</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">I was <strong>empathizing</strong> with her struggles / showed deep empathy</span>
            <span class="mistake-note-text">(Linguistic register: 'sympathize' suggests feeling pity, while 'empathize' implies a deeper psychological understanding and shared feelings)</span>
          </div>

          <div class="mistake-item">
            <span class="mistake-wrong">We discussed <u>about the psychological impact</u></span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">We discussed the psychological impact / had a discussion <strong>about</strong> the psychological impact</span>
            <span class="mistake-note-text">(Underlined prepositional error. Better collocation: 'discuss' is transitive and takes no preposition, or use 'have a discussion about')</span>
          </div>

          <div class="mistake-item">
            <span class="mistake-wrong">This habit is deeply <u>ingrowed</u> in our brain</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">This habit is deeply <strong>ingrained / embedded</strong> in our subconscious</span>
            <span class="mistake-note-text">(Collocation: 'ingrained' or 'embedded' are the correct advanced adjectives for psychological/behavioural patterns)</span>
          </div>"""

def process_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip files that don't belong to Mind Matters
    if 'class="club-tag">Mind Matters</div>' not in content:
        return

    # Check if we have revoice data for this session
    data = SESSION_REVOICE_DATA.get(filename)
    if not data:
        print(f"No revoice data defined for {filename}, skipping custom revoicing but will do vocabulary & mistakes.")
        data = {
            'prepended_desc': "Perhaps our minds are not puzzles to be solved, but landscapes to be gently wandered through. ",
            'warm_up_question': "Perhaps our minds are not puzzles to be solved, but landscapes to be gently wandered through. How do we navigate our own quiet landscape?"
        }

    # 1. Prepend to description
    # Match the <p> inside the description container
    desc_regex = re.compile(
        r'(<div style="margin-bottom: 2rem;\s*line-height:\s*1\.6;\s*color:\s*var\(--ink-soft\);\s*font-size:\s*0\.95rem;">\s*<p>)'
    )
    if desc_regex.search(content):
        # Only prepend if it hasn't been prepended yet
        if "Perhaps" not in content[content.find('margin-bottom: 2rem'):content.find('margin-bottom: 2rem')+200]:
            content = desc_regex.sub(r'\1' + data['prepended_desc'], content)

    # 2. Update Warm-up question 1
    # Match the first <li> inside the round-questions <ul> of warm-up
    # To be extremely precise, find <div class="round-block warm-up open" id="s-warm"> (or similar) up to the next round-block,
    # and replace the first <li> inside that.
    warm_up_section_regex = re.compile(
        r'(id="s-warm">.*?<ul class="round-questions">\s*<li>)(.*?)(</li>)',
        re.DOTALL
    )
    if warm_up_section_regex.search(content):
        # We replace the content of the first <li> of the warm-up questions
        content = warm_up_section_regex.sub(r'\1' + data['warm_up_question'] + r'\3', content)

    # 3. Vocabulary replacements for specific files
    if filename == 'science-of-sleep.html':
        # Replace Nap -> Somnolence
        content = content.replace(
            '<div class="vocab-word">Nap</div>',
            '<div class="vocab-word">Somnolence</div>'
        )
        content = content.replace(
            '<div class="vocab-def">a short sleep, especially during the day.</div>',
            '<div class="vocab-def">a state of strong desire for sleep, or a feeling of deep drowsiness.</div>'
        )
        content = content.replace(
            '<div class="vocab-example">A 20-minute power nap can boost alertness and mood.</div>',
            '<div class="vocab-example">Our modern lifestyle often leaves us in a state of chronic somnolence during afternoon hours.</div>'
        )
        content = content.replace(
            "word:'Nap', definition:'a short sleep, especially during the day.', example:'A 20-minute power nap can boost alertness and mood.'",
            "word:'Somnolence', definition:'a state of strong desire for sleep, or a feeling of deep drowsiness.', example:'Our modern lifestyle often leaves us in a state of chronic somnolence during afternoon hours.'"
        )
        # Update references in questions/hypotheticals
        content = content.replace('taking daytime naps?', 'feeling daytime somnolence?')
        content = content.replace('(Consider the role of <strong>Nap</strong> here.)', '(Consider the role of <strong>Somnolence</strong> here.)')
        content = content.replace('If napping were mandatory', 'If managing somnolence were mandatory')
        content = content.replace('(How does <strong>Nap</strong> affect this statement?)', '(How does <strong>Somnolence</strong> affect this statement?)')

    elif filename == 'how-to-love-your-work.html':
        # Replace Status -> Socioeconomic Standing
        content = content.replace(
            '<div class="vocab-word">Status</div>',
            '<div class="vocab-word">Socioeconomic Standing</div>'
        )
        content = content.replace(
            '<div class="vocab-def">the relative social or professional standing of someone.</div>',
            '<div class="vocab-def">the relative social or professional standing of someone in a social hierarchy.</div>'
        )
        content = content.replace(
            '<div class="vocab-example">Modern society often measures personal worth by professional status.</div>',
            '<div class="vocab-example">Modern society often conflates a person\'s intrinsic worth with their socioeconomic standing.</div>'
        )
        content = content.replace(
            "word:'Status', definition:'relative professional or social standing.', example:'Modern society often measures personal worth by professional status.'",
            "word:'Socioeconomic Standing', definition:'the relative social or professional standing of someone in a social hierarchy.', example:'Modern society often conflates a person\\\'s intrinsic worth with their socioeconomic standing.'"
        )
        content = content.replace('seeking social <strong>status</strong>', 'seeking social <strong>socioeconomic standing</strong>')
        content = content.replace('professional <strong>status</strong>', 'professional <strong>socioeconomic standing</strong>')
        content = content.replace('social status?', 'socioeconomic standing?')
        content = content.replace('obsessed about his status', 'obsessed about his socioeconomic standing')
        content = content.replace('obsessed with his status', 'obsessed with his socioeconomic standing')

        # Replace Fulfill -> Actualize
        content = content.replace(
            '<div class="vocab-word">Fulfill</div>',
            '<div class="vocab-word">Actualize</div>'
        )
        content = content.replace(
            '<div class="vocab-def">to achieve or realize one\'s character, potential, or abilities.</div>',
            '<div class="vocab-def">to make reality of one\'s deepest potential, character, or abilities.</div>'
        )
        content = content.replace(
            '<div class="vocab-example">A job is just one of many ways to fulfill your life\'s purpose.</div>',
            '<div class="vocab-example">A professional career is only one of many avenues to actualize your life\'s quiet purpose.</div>'
        )
        content = content.replace(
            "word:'Fulfill', definition:'realize one\\\'s character or potential.', example:'A job is just one of many ways to fulfill your life\\\'s purpose.'",
            "word:'Actualize', definition:'to make reality of one\\\'s deepest potential, character, or abilities.', example:'A professional career is only one of many avenues to actualize your life\\\'s quiet purpose.'"
        )
        content = content.replace('must <strong>fulfill</strong> our identity', 'must <strong>actualize</strong> our identity')
        content = content.replace('need a job to <strong>fulfill</strong> their potential', 'need a job to <strong>actualize</strong> their potential')
        content = content.replace('fulfill my potential', 'actualize my potential')

    elif filename == 'power-of-habits.html':
        # Replace Reward -> Gratification
        content = content.replace(
            '<div class="vocab-word">Reward</div>',
            '<div class="vocab-word">Gratification</div>'
        )
        content = content.replace(
            '<div class="vocab-def">a thing given in recognition of service, effort, or achievement.</div>',
            '<div class="vocab-def">pleasure or satisfaction, especially when gained from the satisfaction of a desire.</div>'
        )
        content = content.replace(
            '<div class="vocab-example">Treat yourself to a small reward after a productive week.</div>',
            '<div class="vocab-example">Our modern brain is constantly seeking immediate gratification through digital notifications.</div>'
        )
        content = content.replace(
            "word:'Reward', definition:'a thing given in recognition of service, effort, or achievement.', example:'Treat yourself to a small reward after a productive week.'",
            "word:'Gratification', definition:'pleasure or satisfaction, especially when gained from the satisfaction of a desire.', example:'Our modern brain is constantly seeking immediate gratification through digital notifications.'"
        )
        content = content.replace('role of "rewards"', 'role of "gratification"')
        content = content.replace('reward yourself', 'gratify yourself')
        content = content.replace('(Consider the role of <strong>Reward</strong> here.)', '(Consider the role of <strong>Gratification</strong> here.)')

        # Replace Routine -> Habituation
        content = content.replace(
            '<div class="vocab-word">Routine</div>',
            '<div class="vocab-word">Habituation</div>'
        )
        content = content.replace(
            '<div class="vocab-def">a sequence of actions regularly followed.</div>',
            '<div class="vocab-def">the psychological process of automatically behaving through repeating actions.</div>'
        )
        content = content.replace(
            '<div class="vocab-example">A morning routine can set a positive tone for the day.</div>',
            '<div class="vocab-example">Through quiet habituation, tasks that once required effort become entirely second nature.</div>'
        )
        content = content.replace(
            "word:'Routine', definition:'a sequence of actions regularly followed.', example:'A morning routine can set a positive tone for the day.'",
            "word:'Habituation', definition:'the psychological process of automatically behaving through repeating actions.', example:'Through quiet habituation, tasks that once required effort become entirely second nature.'"
        )
        content = content.replace('Maintaining a daily routine', 'Maintaining daily habituation')
        content = content.replace('new routine?', 'new habituation?')
        content = content.replace('build a new routine?', 'build a new habituation?')
        content = content.replace('daily routines', 'daily habituations')
        content = content.replace('(Consider the role of <strong>Routine</strong> here.)', '(Consider the role of <strong>Habituation</strong> here.)')
        # Also replace "cue-routine-reward" loop in description
        content = content.replace('"cue-routine-reward" loop', '"cue-habituation-gratification" loop')

    # 4. Standardize mistake corrections (Replace low-level mistakes with sophisticated ones)
    # Match the whole mistake-body container or its items and replace the basic ones
    # We will look for <div class="mistake-body" ...> up to </div> and replace basic items
    # Basic items are those that have "I am agree with you" or "It is depend on you".
    # Let's find any <div class="mistake-item"> that contains "I am agree" or "It is depend"
    # and replace them with the sophisticated mistakes.
    # To make it very clean, let's write a regex that matches mistake items containing "I am agree" or "It is depend" or "I agree with you"
    # and replace them.
    # Let's do it by finding <div class="mistake-item">...</div> containing "I am agree" or "It is depend on you" and replacing them.
    item_regex_agree = re.compile(
        r'<div class="mistake-item">[^<]*<span class="mistake-wrong">[^<]*I am agree[^<]*</span>.*?</div>',
        re.DOTALL
    )
    item_regex_depend = re.compile(
        r'<div class="mistake-item">[^<]*<span class="mistake-wrong">[^<]*It is depend[^<]*</span>.*?</div>',
        re.DOTALL
    )

    content, count_agree = item_regex_agree.subn(SOPHISTICATED_MISTAKES.split('\n\n')[0], content)
    content, count_depend = item_regex_depend.subn(SOPHISTICATED_MISTAKES.split('\n\n')[1], content)

    # Let's also check if "I am agree" or "It is depend" still remains anywhere inside .mistake-body
    # If there is a simple "I am agree with you" (or variations) left, we do a global replace
    # we can also replace it directly using simple string replace
    content = re.sub(
        r'<div class="mistake-item"><span class="mistake-wrong">I am agree with you</span>.*?</div>',
        SOPHISTICATED_MISTAKES.split('\n\n')[0],
        content,
        flags=re.DOTALL
    )
    content = re.sub(
        r'<div class="mistake-item"><span class="mistake-wrong">It is depend on you</span>.*?</div>',
        SOPHISTICATED_MISTAKES.split('\n\n')[1],
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Processed {filename}: prepended description, updated warm-up, updated simple vocabulary and simplified mistake corrections.")

def run():
    session_dir = 'events/sessions'
    for filename in os.listdir(session_dir):
        if filename.endswith('.html') and not filename.startswith('template'):
            filepath = os.path.join(session_dir, filename)
            process_file(filepath, filename)

if __name__ == '__main__':
    run()
