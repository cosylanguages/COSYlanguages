import json
import os

# Definition of all 69 topics with exact entries from the user prompt
TOPICS_DATA = []

def add_topic(part, slug, title, sub, content_html, checklist, quiz):
    TOPICS_DATA.append({
        "part": part, "slug": slug, "title": title, "sub": sub,
        "content_html": content_html, "checklist": checklist, "quiz": quiz
    })

def make_table(headers, rows):
    th_html = "".join([f"<th>{h}</th>" for h in headers])
    tr_html = []
    for r in rows:
        td_html = "".join([f"<td>{cell}</td>" for cell in r])
        tr_html.append(f"<tr>{td_html}</tr>")
    return f'<div class="table-wrap"><table><thead><tr>{th_html}</tr></thead><tbody>{"".join(tr_html)}</tbody></table></div>'

def vocab_table(rows):
    formatted = []
    for r in rows:
        w, m, ex = r[0], r[1], r[2]
        formatted.append([f'<span class="vocab-word">{w}</span>', f'<span class="vocab-def">{m}</span>', f'<span class="vocab-ex">{ex}</span>'])
    return make_table(["Word", "Meaning", "Example"], formatted)

# PART 0
add_topic(0, "how-this-manual-works", "How This Manual Works", "A few visual signs that will help you find what you need quickly",
"""<div class="box note"><h3>💡 Word Entries</h3><p>Every word or phrase is shown with three things: the word, its meaning in simple English, and an example sentence showing it in use. A small dashed box marks where a picture will be added later.</p></div>
<div class="box rule-box"><h3>Opposites & Badges</h3><p><strong>The ≠ symbol:</strong> marks opposite words, for example <em>hot ≠ cold</em>.<br><strong>Regional Badges:</strong> <span class="badge uk">UK</span> British (also close to Australian & New Zealand English), <span class="badge us">US</span> American English, <span class="badge ca">CA</span> Canadian English, <span class="badge au">AU</span> Australian English.<br>Example: <span class="badge uk">UK</span> flat / <span class="badge us">US</span> apartment &mdash; both words mean the same thing.</p></div>
<div class="box confusable"><h3>⚡ Confusable Word Boxes</h3><p>A bordered box compares two or more words that learners often mix up, such as <em>make vs do</em>, showing exactly when to use each one.</p></div>
<div class="mistakes"><div class="m-title">⚠️ Common Mistakes Boxes</div><div class="mflip"><div class="wrong-line"><span class="x">❌</span><span class="wrong-text">This are my keys.</span></div><span class="hint">tap to see the correct form</span><div class="right-line"><span class="c">✅</span><span>These are my keys.</span></div></div></div>
<div class="box trick"><h3>⭐ Memory Trick Boxes</h3><p>A golden box gives a short trick, rhyme, or association to help a genuinely tricky word or pair stick in your memory &mdash; for example, remembering that LISTEN and SILENT share the same letters.</p></div>""",
["Identify opposite symbol (≠)", "Recognise regional badges (UK, US, CA, AU)", "Use mistake flippers to test memory"],
[{"q": "What does the ≠ symbol mean?", "opts": ["The same as", "The opposite of", "Used only in American English"], "correct": 1, "ex": "≠ indicates opposite meanings (e.g. hot ≠ cold)."},
 {"q": "What does a green note box contain?", "opts": ["A common mistake", "A tip, pattern or hint", "A test question"], "correct": 1, "ex": "Light green boxes provide tips, patterns, or hints."}])

add_topic(0, "the-alphabet", "The Alphabet", "26 letters · say each letter, then spell your name out loud",
make_table(["Letter", "Example Word", "Say the letter like..."], [
["<strong>Aa</strong>", "apple", "'ay' (as in day)"], ["<strong>Bb</strong>", "banana", "'bee'"], ["<strong>Cc</strong>", "cat", "'see'"],
["<strong>Dd</strong>", "dog", "'dee'"], ["<strong>Ee</strong>", "egg", "'ee'"], ["<strong>Ff</strong>", "fish", "'eff'"],
["<strong>Gg</strong>", "girl", "'jee'"], ["<strong>Hh</strong>", "hat", "'aitch'"], ["<strong>Ii</strong>", "ice cream", "'eye'"],
["<strong>Jj</strong>", "juice", "'jay'"], ["<strong>Kk</strong>", "key", "'kay'"], ["<strong>Ll</strong>", "lemon", "'ell'"],
["<strong>Mm</strong>", "milk", "'em'"], ["<strong>Nn</strong>", "nose", "'en'"], ["<strong>Oo</strong>", "orange", "'oh'"],
["<strong>Pp</strong>", "pen", "'pee'"], ["<strong>Qq</strong>", "queen", "'kyoo'"], ["<strong>Rr</strong>", "rain", "'ar'"],
["<strong>Ss</strong>", "sun", "'ess'"], ["<strong>Tt</strong>", "table", "'tee'"], ["<strong>Uu</strong>", "umbrella", "'yoo'"],
["<strong>Vv</strong>", "van", "'vee'"], ["<strong>Ww</strong>", "water", "'double-u'"], ["<strong>Xx</strong>", "box", "'ex'"],
["<strong>Yy</strong>", "yellow", "'why'"], ["<strong>Zz</strong>", "zoo", "'zed' <span class=\"badge uk\">UK</span> / 'zee' <span class=\"badge us\">US</span>"]
]),
["Say all 26 letters of the English alphabet", "Spell your first name and surname out loud", "Distinguish between UK 'zed' and US 'zee'"],
[{"q": "How is the letter Z pronounced in British English?", "opts": ["Zee", "Zed", "Zoo"], "correct": 1, "ex": "In UK English, Z is pronounced 'zed'."},
 {"q": "How is the letter H pronounced?", "opts": ["Ha", "Aitch", "Hee"], "correct": 1, "ex": "H is pronounced 'aitch'."}])

add_topic(0, "pronunciation-basics", "Pronunciation Basics", "How English sounds: vowels, letter combinations, stress and silence",
"""<div class="box note"><h3>Vowels: A, E, I, O, U (and Y)</h3><p>The same vowel letter can sound different depending on the word (short, long, or soft 'uh' schwa sound).</p></div>""" +
make_table(["Vowel", "Sound 1", "Sound 2", "Sound 3"], [
["<strong>a</strong>", "cat, apple (short)", "name, cake (long, says its name)", "about, banana (soft 'uh' sound)"],
["<strong>e</strong>", "bed, pen (short)", "he, we (long 'ee')", "the, taken (soft 'uh' sound)"],
["<strong>i</strong>", "sit, big (short)", "time, like (long, says its name)", "machine (long 'ee')"],
["<strong>o</strong>", "hot, dog (short)", "go, home (long, says its name)", "to, do (sounds like 'oo')"],
["<strong>u</strong>", "cup, sun (short)", "blue, use (long, says its name)", "put, full (short 'oo')"]
]) +
"""<div class="box rule-box"><h3>Vowel Combinations (Two letters, one sound)</h3><p>When two vowels go walking, the first one does the talking (e.g. <em>rain, tea, boat</em>).</p></div>""" +
make_table(["Letters", "Sound", "Example"], [
["<strong>ai / ay</strong>", "long a", "rain, day"],
["<strong>ee / ea</strong>", "long e", "see, tea"],
["<strong>oa</strong>", "long o", "boat, road"],
["<strong>ow</strong>", "two sounds: long o, or 'ow' as in cow", "snow, know (long o) / how, now (like cow)"],
["<strong>oo</strong>", "two sounds: short or long", "book (short) / moon (long)"],
["<strong>ou</strong>", "usually 'ow' as in cow", "house, round"],
["<strong>oi / oy</strong>", "'oy' as in boy", "coin, boy"],
["<strong>ar</strong>", "as in car", "car, park"],
["<strong>or</strong>", "as in for", "for, sport"],
["<strong>er / ir / ur</strong>", "soft sound", "her, bird, turn"]
]) +
make_table(["Word", "Silent Letter", "Example Sentence"], [
["know, knee", "<strong>k</strong> is silent", "I know the answer."],
["hour, honest", "<strong>h</strong> is silent", "The film starts in an hour."],
["island", "<strong>s</strong> is silent", "We visited a small island."],
["write, wrong", "<strong>w</strong> is silent", "Write your name here."],
["listen, castle", "<strong>t</strong> is silent", "Listen to the teacher."],
["walk, half", "<strong>l</strong> is silent", "We walk to school every day."],
["lamb, comb", "<strong>b</strong> is silent", "She has a comb in her bag."],
["night, light", "<strong>gh</strong> is silent", "It was dark at night."]
]) +
"""<div class="box trick"><h3>⭐ Memory Trick: Silent Letters</h3><p>Words starting with <strong>kn-</strong> (know, knee, knife) always have a silent K &mdash; imagine the K getting 'knocked' out. Words starting with <strong>wr-</strong> (write, wrong, wrist) always have a silent W.</p></div>""",
["Identify long and short vowel sounds", "Recognise silent letters in words like know, hour, write", "Pronounce stressed syllables correctly"],
[{"q": "Which letter is silent in 'know'?", "opts": ["n", "o", "k"], "correct": 2, "ex": "Kn- words have a silent K."},
 {"q": "Which letter is silent in 'island'?", "opts": ["s", "i", "l"], "correct": 0, "ex": "S in island is silent."}])

add_topic(0, "describing-a-word-you-dont-know", "Describing a Word You Don't Know", "Forgot a word? Don't stop talking &mdash; describe it instead",
"""<div class="box note"><h3>💡 Don't Stop Talking: Describe It!</h3><p>You will not always remember every word &mdash; and that's completely normal! Instead of stopping, describe it using these natural patterns.</p></div>""" +
make_table(["Phrase", "Meaning / Use", "Example"], [
["<strong>It's a place / a country where...</strong>", "used for locations, buildings and countries", "It's a place where you buy bread. (a bakery)"],
["<strong>It's a job / a person who...</strong>", "used for people and professions", "It's a person who fixes teeth. (a dentist)"],
["<strong>It's a thing / an object which...</strong>", "used for objects", "It's a thing which you use to cut paper. (scissors)"],
["<strong>It's an animal that...</strong>", "used for animals", "It's an animal that says 'moo'. (a cow)"],
["<strong>It's when...</strong>", "used for events, times or situations", "It's when you stay up very late. (a late night)"],
["<strong>It's how you feel when...</strong>", "used for feelings", "It's how you feel when you haven't slept. (tired)"],
["<strong>It's what you use to...</strong>", "used for tools and objects with a function", "It's what you use to open a door. (a key)"],
["<strong>It's the opposite of...</strong>", "used for adjectives", "It's the opposite of 'expensive'. (cheap)"],
["<strong>It looks like... / It sounds like...</strong>", "used for appearance or similar-sounding words", "It looks like an apple, but it's yellow. (a lemon)"],
["<strong>It starts with the letter...</strong>", "a last-resort hint if nothing else works", "It starts with the letter B."]
]),
["Describe an object using 'It's a thing which...'", "Describe a job using 'It's a person who...'", "Use opposites to describe an adjective"],
[{"q": "How can you describe a dentist if you forget the word?", "opts": ["It's a thing which cuts paper.", "It's a person who fixes teeth.", "It's a place where you buy bread."], "correct": 1, "ex": "Use 'person who' for jobs."},
 {"q": "Which phrase is best for describing an object?", "opts": ["It's a thing which...", "It's how you feel when...", "It's a country where..."], "correct": 0, "ex": "'It's a thing which...' describes objects."}])

print("Part 0 generated.")
