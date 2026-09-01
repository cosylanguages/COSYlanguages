from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        res = page.evaluate("""async () => {
            await window.ensureDataLoaded('en', 'all');

            const testThemes = ['work', 'social', 'art_culture', 'food_drink', 'animals', 'body', 'clothes'];
            const themeResults = {};

            testThemes.forEach(t => {
                const pool = window.gameUtils.getVocabPool('en', 'all', t, 'all', { excludeExtra: true });
                const filteredVocab = window.gameUtils.filterVocabulary(pool, { lang: 'en', level: 'all', theme: t, category: 'Vocabulary' });
                const filteredSpeaking = window.gameUtils.filterVocabulary(pool, { lang: 'en', level: 'all', theme: t, category: 'Speaking' });
                themeResults[t] = { pool: pool.length, vocabCount: filteredVocab.length, speakingCount: filteredSpeaking.length, sampleVocab: filteredVocab[0]?.word };
            });

            return themeResults;
        }""")

        print("Theme mapping results across categories:")
        for t, r in res.items():
            print(f"  Theme '{t}': Total Pool={r['pool']}, Vocab={r['vocabCount']} (sample: {r['sampleVocab']}), Speaking={r['speakingCount']}")

        browser.close()

if __name__ == "__main__":
    run_test()
