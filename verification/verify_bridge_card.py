from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:8080/practice/index.html")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)

    # Force show summary modal to inspect bridge card
    page.evaluate("""() => {
        if (!window.cosyPracticeEngine) return;
        window.cosyPracticeEngine.session = {
            sessionPoints: 80,
            correctCount: 8,
            sessionQueue: [1,2,3,4,5,6,7,8,9,10],
            theme: 'Psychology_&_Mind',
            lang: 'en',
            cat: 'Vocabulary',
            level: 'starter'
        };
        window.cosyPracticeEngine.showSummary();
    }""")
    page.wait_for_timeout(800)

    page.screenshot(path="/home/jules/verification/screenshots/summary_modal_bridge_card.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
