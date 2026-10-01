#!/usr/bin/env python3
"""
scripts/update_language_portals.py
Updates and enriches all 13 language portals in languages/{lang}/index.html.
Excludes paid manuals from public pages as requested.
"""

import os
import re
import subprocess

STANDARD_FOOTER = """<footer>

  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">
        <img src="../../images/logos/cosylanguages.png" alt="COSYlanguages logo" loading="lazy" decoding="async" width="38" height="38">
        <span class="fb-name">COSYlanguages</span>
      </div>
      <p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_courses">Courses</h3>
      <a href="../../courses/index.html">All Courses 📖</a>
      <a href="../../courses/general.html" data-translate-key="course_general">General Course</a>
      <a href="../../courses/spoken.html" data-translate-key="course_spoken">Spoken Course</a>
      <a href="../../courses/exam-preparation.html" data-translate-key="course_exam">Exam Preparation</a>
      <a href="../../courses/travelling.html" data-translate-key="course_travelling">Travelling Course</a>
      <a href="../../courses/professional.html" data-translate-key="course_professional">Professional Course</a>
      <a href="../../courses/relocation.html" data-translate-key="course_relocation">Relocation Course</a>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_explore">Explore</h3>
      <a href="https://cosylanguages.github.io/COSYmanuals/" target="_blank" rel="noopener">Manuals Hub 🔒 (for students)</a>
      <a href="../../comparative/index.html">Grammar Atlas 🌐</a>
      <a href="../../placement-quiz.html">Placement Quiz 📝</a>
      <a href="../../hybrid/index.html">Hybrid &amp; Community 🌿</a>
      <a href="../../blog/index.html">Blog & Top 100 📝</a>
      <a href="../../apps/index.html">Reference Engines 🔎</a>
      <a href="../../apps/premium-events/index.html">Events 🎉</a>
    </div>
    <div class="footer-links-col">
      <h3>Project</h3>
      <a href="../../about/index.html">Our Story 🏡</a>
      <a href="../../privacy.html">Privacy &amp; Safety 🛡️</a>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_contact">Contact</h3>
      <a href="https://wa.me/330766784195">WhatsApp 📱</a>
      <a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
      <a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
    </div>
  </div>
  <div class="footer-bottom" data-translate-key="footer_copy">© 2020–2026 COSYlanguages, All rights reserved</div>

</footer>"""

SECTION_TRANSLATIONS = {
    'en': {
        'skills': 'Skill Portals',
        'daily-dose': 'Daily Dose',
        'interactive-tools': 'Apps & Practice',
        'resources': 'Resources',
        'media-culture': 'Media & Culture',
        'daily-life': 'Daily Life'
    },
    'fr': {
        'skills': "Portails d'apprentissage",
        'daily-dose': 'Dose quotidienne',
        'interactive-tools': 'Applications & Pratique',
        'resources': 'Ressources',
        'media-culture': 'Médias & Culture',
        'daily-life': 'Vie quotidienne'
    },
    'it': {
        'skills': 'Portali di competenze',
        'daily-dose': 'Dose giornaliera',
        'interactive-tools': 'App e Pratica',
        'resources': 'Risorse',
        'media-culture': 'Media e Cultura',
        'daily-life': 'Vita quotidiana'
    },
    'ru': {
        'skills': 'Языковые порталы',
        'daily-dose': 'Ежедневный раздел',
        'interactive-tools': 'Приложения и Практика',
        'resources': 'Ресурсы',
        'media-culture': 'Медиа и Культура',
        'daily-life': 'Повседневная жизнь'
    },
    'el': {
        'skills': 'Πύλες δεξιοτήτων',
        'daily-dose': 'Ημερήσια δόση',
        'interactive-tools': 'Εφαρμογές & Εξάσκηση',
        'resources': 'Πηγές',
        'media-culture': 'Μέσα & Πολιτισμός',
        'daily-life': 'Καθημερινή ζωή'
    },
    'es': {
        'skills': 'Portales de habilidades',
        'daily-dose': 'Dosis diaria',
        'interactive-tools': 'Aplicaciones y Práctica',
        'resources': 'Recursos',
        'media-culture': 'Medios y Cultura',
        'daily-life': 'Vida cotidiana'
    },
    'de': {
        'skills': 'Kompetenzportale',
        'daily-dose': 'Tägliche Dosis',
        'interactive-tools': 'Apps & Übungen',
        'resources': 'Ressourcen',
        'media-culture': 'Medien & Kultur',
        'daily-life': 'Alltagsleben'
    },
    'pt': {
        'skills': 'Portais de competências',
        'daily-dose': 'Dose diária',
        'interactive-tools': 'Aplicações e Prática',
        'resources': 'Recursos',
        'media-culture': 'Mídia e Cultura',
        'daily-life': 'Vida quotidiana'
    },
    'hy': {
        'skills': 'Հմտությունների պորտալներ',
        'daily-dose': 'Ամենօրյա բաժին',
        'interactive-tools': 'Հավելվածներ և Պրակտիկա',
        'resources': 'Ռեսուրսներ',
        'media-culture': 'Մեդիա և Մշակույթ',
        'daily-life': 'Արտահայտություններ'
    },
    'ka': {
        'skills': 'უნარების პორტალები',
        'daily-dose': 'ყოველდღიური დოზა',
        'interactive-tools': 'აპლიკაციები და პრაქტიკა',
        'resources': 'რესურსები',
        'media-culture': 'მედია და კულტურა',
        'daily-life': 'ყოველდღიური ცხოვრება'
    },
    'tt': {
        'skills': 'Осталык порталлары',
        'daily-dose': 'Көнлек бүлек',
        'interactive-tools': 'Кушымталар һәм Практика',
        'resources': 'Ресурслар',
        'media-culture': 'Медиа һәм Мәдәният',
        'daily-life': 'Көндәлек тормыш'
    },
    'ba': {
        'skills': 'Осталыҡ порталдары',
        'daily-dose': 'Көнлөк бүлек',
        'interactive-tools': 'Ҡушымталар һәм Практика',
        'resources': 'Ресурстар',
        'media-culture': 'Медиа һәм Мәҙәниәт',
        'daily-life': 'Көндәлек тормош'
    },
    'br': {
        'skills': 'Portholoù barregezhioù',
        'daily-dose': 'Dozenn pemdeziek',
        'interactive-tools': 'Arloadoù & Pleustriñ',
        'resources': 'Mammennoù',
        'media-culture': 'Mediaoù & Kulturell',
        'daily-life': 'Buez pemdeziek'
    },
    'cv': {
        'skills': 'Пĕлӳ порталĕсем',
        'daily-dose': 'Кашнин кунри пай',
        'interactive-tools': 'Приложенисемпе Практика',
        'resources': 'Ресурссем',
        'media-culture': 'Медиапа Культура',
        'daily-life': 'Кунсеренхи пурнăç'
    }
}

def update_jump_links(content, lang):
    trans = SECTION_TRANSLATIONS.get(lang, SECTION_TRANSLATIONS['en'])
    def replace_link(match):
        sec_id = match.group(1)
        label = trans.get(sec_id, match.group(2))
        return f'<a href="#{sec_id}" class="sd-jump-link">{label}</a>'
    return re.sub(r'<a href="#([^"]+)" class="sd-jump-link">([^<]+)</a>', replace_link, content)

def process_portal(lang):
    path = f"languages/{lang}/index.html"
    if not os.path.exists(path):
        return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Ensure no manuals links or manuals-apps section
    content = re.sub(r'<!-- Interactive Manuals & Apps -->\s*<section id=\"manuals-apps\">.*?</section>\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'<section id=\"manuals-apps\">.*?</section>\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<a href=\"#manuals-apps\" class=\"sd-jump-link\">.*?</a>', '', content)

    # Translate jump links
    content = update_jump_links(content, lang)

    # Ensure daily_dose.js script tag is present
    if 'daily_dose.js' not in content:
        if '<script src="../../js/core/ui.js"></script>' in content:
            content = content.replace('<script src="../../js/core/ui.js"></script>', '<script src="../../js/data/daily_dose.js"></script>\n<script src="../../js/core/ui.js"></script>')

    # Ensure footer is standard
    footer_pattern = r'<footer>.*?</footer>'
    content = re.sub(footer_pattern, STANDARD_FOOTER, content, flags=re.DOTALL)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated portal {path}")

def main():
    langs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br', 'cv']
    for l in langs:
        process_portal(l)

if __name__ == '__main__':
    main()
