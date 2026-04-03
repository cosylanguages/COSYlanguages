import os
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Start server
        os.system("python3 -m http.server 8080 > server.log 2>&1 &")
        time.sleep(2)

        page.goto("http://localhost:8080/practice.html")

        # Select English
        page.click('.lang-selection-card[data-value="en"]')
        page.click('#start-btn')

        # We need to find specific words. The practice engine is random.
        # But we can mock the data or just use the console to trigger showWordDefinition.

        enriched_words = ["doctor", "in", "explain", "nurse", "possible"]

        if not os.path.exists('verification'):
            os.makedirs('verification')

        for word in enriched_words:
            print(f"Verifying {word}...")
            # Trigger definition modal via JS
            page.evaluate(f"""
                const findWord = (w) => {{
                    return (window.vocabularyData['en'] || []).find(e => e.word === w) ||
                           (window.verbsData['en'] || []).find(e => e.word === w) ||
                           (window.adjectivesData['en'] || []).find(e => e.word === w);
                }};
                const entry = findWord('{word}');
                if (entry) {{
                    window.showWordDefinition(entry);
                }}
            """)
            time.sleep(1)
            page.screenshot(path=f"verification/{word}_definition.png")
            page.evaluate("document.querySelector('#definition-modal').style.display = 'none'")

        browser.close()
        os.system("pkill -f 'http.server'")

run()
