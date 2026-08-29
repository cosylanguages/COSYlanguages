import sys
from playwright.sync_api import sync_playwright

def run_test():
    all_passed = True
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        # Test 1: Verify all 6 CEFR levels load dynamic vocabulary
        levels = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency']
        for lvl in levels:
            res = page.evaluate(f"""async () => {{
                await window.ensureDataLoaded('en', '{lvl}');
                const pool = window.gameUtils.getVocabPool('en', '{lvl}', 'all', 'all', {{ excludeExtra: true }});
                const filtered = window.gameUtils.filterVocabulary(pool, {{ lang: 'en', level: '{lvl}', category: 'Vocabulary', strict: true }});
                return {{ poolCount: pool.length, filteredCount: filtered.length, sample: filtered[0]?.word }};
            }}""")
            print(f"[Test 1] Level {lvl.upper()}: Pool={res['poolCount']}, Filtered={res['filteredCount']}, Sample={res['sample']}")
            if res['filteredCount'] == 0:
                print(f"FAILED: Level {lvl} returned 0 filtered questions.")
                all_passed = False

        # Test 2: QuickStart Practice Session launch for C1 (advanced) and C2 (proficiency)
        for lvl in ['advanced', 'proficiency']:
            page.evaluate(f"async () => await window.cosyPractice.quickStart('en', 'Vocabulary', '{lvl}', 'all')")
            page.wait_for_timeout(500)
            practice_active = page.is_visible("#practice-section")
            title = page.inner_text("#pe-session-title")
            print(f"[Test 2] QuickStart {lvl.upper()}: Active={practice_active}, Title='{title}'")
            if not practice_active:
                print(f"FAILED: Practice section not active for level {lvl}")
                all_passed = False

            # Exit session
            page.evaluate("window.cosyPractice.endSession()")
            page.wait_for_timeout(500)

        browser.close()

    if all_passed:
        print("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY! 🚀")
    else:
        print("\nSOME TESTS FAILED!")
        sys.exit(1)

if __name__ == "__main__":
    run_test()
