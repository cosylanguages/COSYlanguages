with open('blog/top-10-verbs.html', 'r', encoding='utf-8') as f:
    text = f.read()

old_p = '<p class="post-header-intro">\n                Inspired by the <a href="https://youtu.be/-pU2IpA1R2U" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:underline;">COSYlanguages podcast episode</a> on the verbs every beginner needs first. These 10 verbs exist in all 14 languages we teach, each one linked straight to its live entry in <strong>COSYdata</strong> — our single source of truth — with the real grammar traps (like <em>to be</em> vs. <em>to have</em> for age) called out explicitly instead of glossed over.\n            </p>'

new_p = '''<p class="post-header-intro">
                Inspired by the <a href="https://youtu.be/-pU2IpA1R2U" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:underline;">COSYlanguages podcast episode</a> on the verbs every beginner needs first. Designed as a practical survival guide for new language learners, this post focuses on essential high-utility sentences (introducing yourself, asking for help, ordering food, finding places) broken down step-by-step with progressive milestones across all 14 COSY languages — each verb linked straight to its live entry in <strong>COSYdata</strong> with structural traps called out explicitly.
            </p>'''

if old_p in text:
    text = text.replace(old_p, new_p)
    with open('blog/top-10-verbs.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Enhanced header intro paragraph successfully.")
else:
    print("Pattern mismatch, checking...")
