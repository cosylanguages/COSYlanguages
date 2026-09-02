import os

pronunciation_pages = {
    'en': {'code': 'en', 'title': 'English Pronunciation & Phonetics', 'hub': 'index.html'},
    'fr': {'code': 'fr', 'title': 'Guide de Prononciation du Français', 'hub': 'index.html'},
    'it': {'code': 'it', 'title': 'Guida alla Pronuncia Italiana', 'hub': 'index.html'},
    'ru': {'code': 'ru', 'title': 'Русское произношение и фонетика', 'hub': 'index.html'},
    'el': {'code': 'el', 'title': 'Οδηγός Ελληνικής Προφοράς', 'hub': 'index.html'}
}

for lang, data in pronunciation_pages.items():
    path = f'languages/{lang}/pronunciation.html'
    if not os.path.exists(path):
        continue

    html = f'''<!DOCTYPE html>
<html lang="{data['code']}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{data['title']} · COSY</title>
<link rel="stylesheet" href="../../css/lang-pages.css">
<link rel="stylesheet" href="../../css/lang-accents.css">
<link rel="stylesheet" href="../../css/mobile.css">
<link rel="stylesheet" href="../../css/components.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<main style="max-width: 800px; margin: 0 auto; padding: 4rem 1.5rem; font-family: 'Nunito', sans-serif; line-height: 1.6;">
  <p><a href="{data['hub']}" style="color: #157c6c; text-decoration: none; font-weight: 700;">← Back to {data['code'].upper()} Hub</a></p>
  <h1 style="color: #0c3f38; margin-top: 1rem;">🗣️ {data['title']}</h1>
  <p style="color: #3c5450; font-size: 1.05rem;">Practice sounds, stress patterns, and intonation with our interactive practice tools and audio engines.</p>

  <ul style="list-style: none; padding: 0; margin: 2rem 0;">
    <li style="margin-bottom: 1rem; padding: 16px; background: #faf8f3; border-left: 4px solid #1c9483; border-radius: 6px;">
      <a href="../../practice/index.html?lang={data['code'].upper()}" style="font-weight: 700; color: #0c3f38; text-decoration: none; font-size: 1.1rem;">💡 Free Interactive Listening & Pronunciation Practice →</a>
      <p style="margin: 4px 0 0; font-size: 0.95rem; color: #3c5450;">Master phonetics, word stress, and audio drills with immediate feedback.</p>
    </li>
  </ul>
</main>
<script src="../../js/data/languages.js"></script>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/i18n.js"></script>
<script src="../../js/core/ui.js"></script>
</body>
</html>'''

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)

print('Updated pronunciation subpages successfully!')
