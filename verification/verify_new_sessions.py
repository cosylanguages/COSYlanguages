from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Going to English Events Hub...")
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Screenshot of index page
    page.screenshot(path="/home/jules/verification/screenshots/events_hub.png")
    print("Screenshot saved to /home/jules/verification/screenshots/events_hub.png")

    print("Going to a new session page: Single Working Women's Day...")
    page.goto("http://localhost:8080/events/sessions/lets-celebrate/single-working-womens-day.html")
    page.wait_for_timeout(1000)

    # Click on some elements, let's toggle a round or something
    page.get_by_text("🟠 Warm-up - Celebrating Autonomy").click()
    page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/single_working_women_session.png")
    print("Screenshot saved to /home/jules/verification/screenshots/single_working_women_session.png")

    print("Going to the new Wonder session page: Why Do I Spend More When I Earn More...")
    page.goto("http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/why-do-i-spend-more-when-i-earn-more.html")
    page.wait_for_timeout(1000)

    # Flip the diary card!
    page.get_by_role("button", name="Flip to Next Page ✍️").click()
    page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/spend_more_session.png")
    print("Screenshot saved to /home/jules/verification/screenshots/spend_more_session.png")

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
