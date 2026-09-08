import os
import glob
import re

def extract_topic_info(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    filename = os.path.basename(filepath)
    slug = filename.replace('.html', '')

    title_m = re.search(r'<h1>(.*?)</h1>', content)
    title = re.sub(r'<.*?>', '', title_m.group(1)).strip() if title_m else slug.replace('-', ' ').title()

    sub_m = re.search(r'<p class="subtitle">(.*?)</p>', content)
    subtitle = re.sub(r'<.*?>', '', sub_m.group(1)).strip() if sub_m else ""

    raw_examples = re.findall(r'<li>(.*?)</li>|<td>(.*?)</td>|<em>(.*?)</em>', content)
    flat_examples = []
    for tup in raw_examples:
        for item in tup:
            if item:
                clean = re.sub(r'<.*?>', '', item).strip()
                if len(clean) > 8 and not clean.startswith('http') and not clean.startswith('Part') and not clean.startswith('Unit') and not ('Score' in clean) and not ('Topic:' in clean) and not ('Sentence:' in clean) and not ('Check your' in clean):
                    flat_examples.append(clean)

    return slug, title, subtitle, flat_examples, content

def build_topic_ccqs(slug, title, subtitle, examples):
    t_lower = (title + " " + slug).lower()

    ex1 = examples[0] if len(examples) > 0 else f"Example sentence using {title}"
    ex2 = examples[1] if len(examples) > 1 else f"Another example sentence using {title}"

    if "adjective" in t_lower or "comparative" in t_lower or "superlative" in t_lower:
        ex = "She has a new phone." if ("Example" in ex1 or "Topic:" in ex1 or "size ·" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does the adjective describe a quality of the noun?",
                "opts": [("Yes, describes noun quality", True), ("No, describes verb speed", False), ("Uncertain", False)],
                "exp": "Adjectives modify nouns to describe their qualities or characteristics."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Do English adjectives change ending for plural nouns (e.g. 'two new phones')?",
                "opts": [("No, adjectives never add plural -s", True), ("Yes, always add -s to adjectives", False), ("Uncertain", False)],
                "exp": "English adjectives remain unchanged regardless of whether the noun is singular or plural."
            }
        ]
    elif "adverb" in t_lower:
        ex = "He drives carefully." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does the adverb describe how the action is performed?",
                "opts": [("Yes, modifies the verb action", True), ("No, modifies a noun", False), ("Uncertain", False)],
                "exp": "Adverbs modify verbs to describe manner, degree, or frequency."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Do adverbs of frequency go BEFORE main verbs in statements?",
                "opts": [("Yes, before main verbs", True), ("No, after main verbs", False), ("Uncertain", False)],
                "exp": "Adverbs of frequency precede main verbs (e.g. 'always works') but follow 'to be'."
            }
        ]
    elif "past continuous" in t_lower or "past-continuous" in slug:
        ex = "I was reading when the phone rang." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Was the reading action in progress over a period of time in the past?",
                "opts": [("Yes, ongoing in the past", True), ("No, happening right now", False), ("Future plan", False)],
                "exp": "Past continuous describes an action in progress in the past."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Was the reading action interrupted by the shorter past event (phone rang)?",
                "opts": [("Yes, interrupted while in progress", True), ("No, reading was finished long ago", False), ("Uncertain", False)],
                "exp": "Past continuous sets the background action interrupted by a Past Simple event."
            }
        ]
    elif "past simple" in t_lower or "past-simple" in slug or "past" in t_lower or "yesterday" in t_lower:
        ex = "We visited Paris last year." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Did this visit take place and finish in the past?",
                "opts": [("Yes, completely finished", True), ("No, still happening right now", False), ("Future plan", False)],
                "exp": "Past simple describes actions that started and completed in past time."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does this action continue into the present moment?",
                "opts": [("No, it is in the past", True), ("Yes, it continues now", False), ("Uncertain", False)],
                "exp": "Past simple actions are completed and isolated in past time."
            }
        ]
    elif "present perfect" in t_lower or "present-perfect" in slug:
        ex = "I have lived in London for three years." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does this experience or state connect to the present time?",
                "opts": [("Yes, connected to the present", True), ("No, finished in distant past", False), ("Future event", False)],
                "exp": "Present perfect links past actions or experiences with present relevance."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Can you use specific finished time adverbs like 'yesterday' with present perfect?",
                "opts": [("No, finished time words are incorrect", True), ("Yes, always allowed", False), ("Uncertain", False)],
                "exp": "Present perfect does not take specific finished past time markers like 'yesterday'."
            }
        ]
    elif "future" in t_lower or "going to" in t_lower or "will" in t_lower:
        ex = "She is going to start university next month." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Has she started university already?",
                "opts": [("No, it is in the future", True), ("Yes, last year", False), ("Right now", False)],
                "exp": "Future structures refer to events or plans occurring after the present moment."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is the speaker referring to a future intention or plan?",
                "opts": [("Yes, future plan / intention", True), ("No, past habit", False), ("Present state", False)],
                "exp": "'Going to' expresses future intentions and plans."
            }
        ]
    elif "conditional" in t_lower or "if" in t_lower:
        ex = "If it rains, we will stay inside." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is staying inside dependent on the condition of rain?",
                "opts": [("Yes, result depends on 'if' condition", True), ("No, happens unconditionally", False), ("Uncertain", False)],
                "exp": "Conditionals state that an outcome depends on whether the 'if' clause occurs."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "If it does NOT rain, does the condition apply?",
                "opts": [("No, the result requires rain", True), ("Yes, stays inside anyway", False), ("Uncertain", False)],
                "exp": "The outcome is contingent on the 'if' condition."
            }
        ]
    elif "passive" in t_lower:
        ex = "The letter was delivered yesterday." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is the main focus on the letter (receiver of action) rather than the mail carrier?",
                "opts": [("Yes, focus on receiver / object", True), ("No, focus on the doer", False), ("Uncertain", False)],
                "exp": "Passive voice places focus on the object receiving the action."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is the doer mandatory if unknown or unimportant?",
                "opts": [("No, agent can be omitted", True), ("Yes, agent is always mandatory", False), ("Uncertain", False)],
                "exp": "The agent can be omitted in passive voice when obvious or unimportant."
            }
        ]
    elif "modal" in t_lower or "should" in t_lower or "must" in t_lower or "can" in t_lower or "could" in t_lower or "might" in t_lower:
        ex = "You should eat more vegetables." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": f"Does this modal verb express {subtitle if subtitle else 'advice, ability, or obligation'}?",
                "opts": [("Yes, modal meaning", True), ("No, simple physical action only", False), ("Uncertain", False)],
                "exp": "Modal verbs express stances like advice, ability, permission, or obligation."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does the modal verb add -s for third person (he/she/it)?",
                "opts": [("No, modals never add -s", True), ("Yes, always add -s", False), ("Uncertain", False)],
                "exp": "Modal verbs remain unchanged across all subject pronouns."
            }
        ]
    elif "preposition" in t_lower or "in-on-at" in slug or "movement" in slug:
        ex = "The book is on the table." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does the preposition show spatial position or relationship?",
                "opts": [("Yes, spatial / temporal relationship", True), ("No, verb tense", False), ("Uncertain", False)],
                "exp": "Prepositions link nouns to express location, direction, or time."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is 'on' used because the book is touching a surface?",
                "opts": [("Yes, 'on' specifies surface contact", True), ("No, 'on' means inside a box", False), ("Uncertain", False)],
                "exp": "'On' indicates contact with a surface."
            }
        ]
    elif "pronoun" in t_lower or "possessive" in t_lower:
        ex = "She gave him the key." if ("Example" in ex1 or "Topic:" in ex1) else ex1
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Does 'She' perform the action and 'him' receive the key?",
                "opts": [("Yes, Subject 'She' / Object 'him'", True), ("No, 'him' performs the action", False), ("Uncertain", False)],
                "exp": "Subject pronouns perform actions; object pronouns receive actions."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Do pronouns prevent repeating full nouns in conversation?",
                "opts": [("Yes, avoids noun repetition", True), ("No, pronouns change verb tense", False), ("Uncertain", False)],
                "exp": "Pronouns replace nouns to keep speech concise and natural."
            }
        ]
    else:
        ex = ex1 if ("Example" not in ex1 and "Topic:" not in ex1) else f"Sample sentence for {title}"
        return [
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": f"Does this structure express {subtitle if subtitle else 'the core grammar rule'} accurately?",
                "opts": [("Yes, accurate usage", True), ("No, incorrect meaning", False), ("Uncertain", False)],
                "exp": f"Using {title} accurately conveys clear sentence meaning."
            },
            {
                "ctx": f"Sentence: \"{ex}\"",
                "q": "Is correct word order essential for clear English communication?",
                "opts": [("Yes, essential for clarity", True), ("No, word order doesn't matter", False), ("Uncertain", False)],
                "exp": "Correct word order prevents ambiguity in English sentences."
            }
        ]

def update_topic_ccqs(filepath, level):
    slug, title, subtitle, examples, content = extract_topic_info(filepath)
    ccqs = build_topic_ccqs(slug, title, subtitle, examples)

    qitems_html = ""
    for idx, item in enumerate(ccqs, 1):
        opts_html = ""
        for opt_text, is_corr in item["opts"]:
            corr_attr = ' data-correct="true"' if is_corr else ''
            opts_html += f'      <button type="button" class="qopt"{corr_attr} style="text-align:left; padding:8px 12px; border:1px solid #d0d7de; border-radius:6px; background:#ffffff; cursor:pointer; font-size:0.95rem;">{opt_text}</button>\n'

        qitems_html += f'''  <div class="qitem" style="margin-bottom:16px; background:#ffffff; padding:14px 16px; border-radius:8px; border:1px solid var(--line, #e6e2d8);">
    <div class="qtext" style="font-weight:600; margin-bottom:10px; color:var(--teal-900, #0c3f38);">{idx}. {item["ctx"]} — {item["q"]}</div>
    <div class="qopts" style="display:flex; flex-direction:column; gap:8px;">
{opts_html}    </div>
    <div class="qexplain" style="display:none; margin-top:10px; padding:8px 12px; background:#eaf6f1; border-left:3px solid var(--teal-600, #1c9483); font-size:0.9rem; color:var(--teal-800, #0f5c50); font-weight:600;">{item["exp"]}</div>
  </div>\n'''

    interactive_ccq_box = f'''<div class="box ccq-panel" style="background:var(--teal-050, #f2faf8); border:1px solid var(--teal-500, #25a894); border-left:4px solid var(--teal-600, #1c9483); padding:18px 20px; border-radius:8px; margin-bottom:24px;">
  <h3 style="margin-top:0; color:var(--teal-900, #0c3f38); font-size:1.1rem;">💡 Check your understanding (CCQs)</h3>
  <p style="margin-bottom:14px; font-style:italic; font-size:0.95rem;">Answer these quick questions to verify meaning:</p>
{qitems_html}</div>\n'''

    pos_start = content.find('ccq-panel')
    if pos_start == -1: pos_start = content.find('ccq-section')
    if pos_start == -1: pos_start = content.find('Check your understanding')

    if pos_start != -1:
        box_start = content.rfind('<div', 0, pos_start)

        classes = ['<div class="box mint"', '<div class="table-wrap"', '<div class="box rule-box"', '<div class="box why"', '<div class="box native"', '<div class="pron-callout"', '<div class="examples"']
        box_end = -1
        for cls in classes:
            p = content.find(cls, pos_start + 100)
            if p != -1 and (box_end == -1 or p < box_end):
                box_end = p

        if box_start != -1 and box_end != -1:
            content = content[:box_start] + interactive_ccq_box + content[box_end:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return True

def process_all():
    levels = ['a1', 'a2', 'b1', 'b2']
    total = 0
    for l in levels:
        files = sorted(glob.glob(f'manuals/en/grammar/{l}/topics/*.html'))
        for f in files:
            update_topic_ccqs(f, l)
            total += 1
    print(f"Refitted all {total} A1-B2 topic files with rich, topic-specific interactive CCQs.")

if __name__ == '__main__':
    process_all()
