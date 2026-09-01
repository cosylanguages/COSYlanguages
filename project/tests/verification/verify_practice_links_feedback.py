import sys
from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        # Start a custom session with a question that has practice_links set
        page.evaluate("""() => {
            const sampleQ = {
                type: 'mc',
                q: 'What is the word order in English?',
                opts: ['Subject-Verb-Object', 'Verb-Subject-Object'],
                ans: 0,
                level: 'starter',
                theme: 'syntax_word_order',
                practice_links: ['manuals/en/grammar/a1/topics/word-order.html']
            };
            window.beginSession('en', 'Grammar', 'starter', 'syntax_word_order', false, [sampleQ]);
        }""")
        page.wait_for_timeout(500)

        # Click the correct answer
        page.click(".mc-opt:has-text('Subject-Verb-Object')")
        page.wait_for_timeout(500)

        # Verify bottom bar is active and contains the "📖 Learn more" link
        bar_visible = page.is_visible("#pe-bottom-bar.active")
        desc_html = page.inner_html("#pe-bb-desc")
        link_href = page.get_attribute("#pe-bb-desc a", "href")
        link_text = page.inner_text("#pe-bb-desc a")

        print(f"Bottom Bar Visible: {bar_visible}")
        print(f"Link Text: '{link_text}'")
        print(f"Link Href: '{link_href}'")

        assert bar_visible, "Bottom feedback bar not visible"
        assert "📖 Learn more" in link_text, "Learn more text not present in link"
        assert "manuals/en/grammar/a1/topics/word-order.html" in link_href, f"Incorrect href: {link_href}"

        browser.close()
        print("\nPRACTICE LINKS FEEDBACK VERIFICATION PASSED! 🚀")

if __name__ == "__main__":
    run_test()
