from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        levels = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency']

        for lvl in levels:
            res = page.evaluate(f"""async () => {{
                await window.ensureDataLoaded('en', '{lvl}');
                const pool = window.gameUtils.getVocabPool('en', '{lvl}', 'all', 'all', {{ excludeExtra: true }});
                const filtered = window.gameUtils.filterVocabulary(pool, {{ lang: 'en', level: '{lvl}', category: 'Vocabulary', strict: true }});
                return {{ level: '{lvl}', poolCount: pool.length, filteredCount: filtered.length, sample: filtered[0]?.word }};
            }}""")
            print(f"Level {lvl.upper()}: Pool={res['poolCount']}, Filtered={res['filteredCount']}, Sample={res['sample']}")

        # Test fallback behavior with unknown level or empty pool
        res_fallback = page.evaluate("""async () => {
            // Call beginSession with empty pool scenario by selecting non-existent theme on a level or mock empty
            const poolEmpty = window.gameUtils.getVocabPool('en', 'starter', 'non_existent_theme_9999', 'all', { excludeExtra: true });
            return poolEmpty.length;
        }""")
        print(f"Fallback check (empty pool count): {res_fallback}")

        browser.close()

if __name__ == "__main__":
    run_test()
