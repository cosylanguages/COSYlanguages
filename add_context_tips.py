import re

with open('blog/top-10-verbs.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Enhance the top explanatory banner of top-10-verbs.html to explicitly guide beginners on practical daily use
old_intro = "For each verb: a <strong>grammar note</strong> flags where languages genuinely diverge"
new_intro = "For each verb: a <strong>practical beginner breakdown</strong> shows real-world daily survival phrases (ordering food, asking directions, introducing yourself, expressing needs); a <strong>grammar note</strong> flags false friends and structural traps; a <strong>14-language grid</strong> links directly to COSYdata; and a <strong>phrase bank</strong> provides instant 8-language translations with progressive learning milestones."

if old_intro in html:
    html = html.replace(old_intro, new_intro)
    with open('blog/top-10-verbs.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Updated introductory guidance banner successfully.")
else:
    print("Introductory text snippet not found directly, checking...")
