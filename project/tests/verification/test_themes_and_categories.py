from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        res = page.evaluate("""async () => {
            await window.ensureDataLoaded('en', 'all');

            const themes = ['animals', 'food_drink', 'body', 'clothes', 'colours', 'debates', 'fluency', 'opinions'];
            const themeResults = {};

            themes.forEach(t => {
                const pool = window.gameUtils.getVocabPool('en', 'all', t, 'all', { excludeExtra: true });
                const filtered = window.gameUtils.filterVocabulary(pool, { lang: 'en', level: 'all', theme: t, category: 'Vocabulary' });
                themeResults[t] = { pool: pool.length, filtered: filtered.length, sample: filtered[0]?.word };
            });

            return themeResults;
        }""")

        print("Theme filter test results:")
        for t, r in res.items():
            print(f"  Theme '{t}': Pool={r['pool']}, Filtered={r['filtered']}, Sample={r['sample']}")

        browser.close()

if __name__ == "__main__":
    run_test()
