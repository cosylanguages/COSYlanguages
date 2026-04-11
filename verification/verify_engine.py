from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:8080/practice.html?lang=en&cat=vocabulary&level=starter")
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(2000)

    print("Checking for Exercise Engine...")
    is_ex_visible = page.is_visible("#exercise-area")
    print(f"Exercise area visible: {is_ex_visible}")
    page.screenshot(path="verification/screenshots/engine_running.png")

    # Interaction
    options = page.query_selector_all(".ex-option")
    if len(options) > 0:
        print(f"Found {len(options)} options, clicking one...")
        options[0].click()
        page.wait_for_timeout(1500)

    # Click Next
    next_btn = page.get_by_role("button", name="Next Word ➡️")
    if next_btn.is_visible():
        next_btn.click()
        page.wait_for_timeout(1000)

    # Speed Round
    print("Testing Speed Round via direct call...")
    page.evaluate("() => startSpeedRound()")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/speed_round_running.png")

    know_btn = page.query_selector(".ex-option")
    if know_btn:
        for _ in range(5):
            know_btn.click()
            page.wait_for_timeout(300)

    # Category Sort
    print("Testing Category Sort via direct call...")
    page.goto("http://localhost:8080/practice.html?lang=en&cat=vocabulary&level=starter")
    page.wait_for_timeout(1000)
    page.evaluate("() => startCategorySort()")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/category_sort_running.png")

    words = page.query_selector_all("#sort-items .word-chip")
    buckets = page.query_selector_all(".sort-bucket")
    if len(words) > 0 and len(buckets) > 0:
        for i in range(min(len(words), 3)):
            words[i].click()
            page.wait_for_timeout(300)
            buckets[i % len(buckets)].click()
            page.wait_for_timeout(300)

    page.screenshot(path="verification/screenshots/final_state.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 375, 'height': 812},
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
