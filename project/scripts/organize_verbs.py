import re

with open('blog/top-10-verbs.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Verify HTML read properly
print("Read HTML length:", len(html))

# Let's inspect where verb-sections are located in top-10-verbs.html
