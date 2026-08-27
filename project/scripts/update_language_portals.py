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
        <img src="../../images/logos/cosylanguages.png" alt="COSYlanguages logo">
        <span class="fb-name">COSYlanguages</span>
      </div>
      <p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_courses">Courses</h5>
      <a href="../../apps/premium-courses/general/" data-translate-key="course_general">General Course 📖</a>
      <a href="../../apps/premium-courses/spoken/" data-translate-key="course_spoken">Spoken Course 🗣️</a>
      <a href="../../apps/premium-courses/exam/" data-translate-key="course_exam">Exam Preparation 📝</a>
      <a href="../../apps/premium-courses/travelling/" data-translate-key="course_travelling">Travelling Course ✈️</a>
      <a href="../../apps/premium-courses/professional/" data-translate-key="course_professional">Professional Course 💼</a>
      <a href="../../apps/premium-courses/relocation/" data-translate-key="course_relocation">Relocation Course 🏡</a>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_explore">Explore</h5>
      <a href="../../#languages" data-translate-key="nav_languages">Languages 🌍</a>
      <a href="../../practice/index.html" data-translate-key="nav_practice">Free Practice 💡</a>
      <a href="../../events/index.html" data-translate-key="nav_events">Events 🎉</a>
      <a href="../../games/index.html" data-translate-key="nav_games">Games 🎮</a>
    </div>
    <div class="footer-links-col">
      <h5>Project</h5>
      <a href="../../privacy.html">Privacy &amp; Safety 🛡️</a>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_contact">Contact</h5>
      <a href="https://wa.me/330766784195">WhatsApp 📱</a>
      <a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
      <a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
    </div>
  </div>
  <div class="footer-bottom" data-translate-key="footer_copy">© 2026 COSYlanguages, All rights reserved</div>
</footer>"""

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
    langs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br']
    for l in langs:
        process_portal(l)

if __name__ == '__main__':
    main()
