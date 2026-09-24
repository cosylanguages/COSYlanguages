import re

with open('blog/top-10-verbs.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect the sections in v-know, v-want, v-like, v-work_study, v-eat_drink, etc.
# We want to add clear 'What you can say now...' / progressive learning callouts to sections and reorder if needed.

# Let's check how phrase-table is structured in top-10-verbs.html
tables = re.findall(r'<div class="phrase-table">(.*?)</div>\s*</section>', content, re.DOTALL)
print(f"Found {len(tables)} phrase tables")
