from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Scroll to New Sessions section
    upcoming = page.locator("#upcoming")
    upcoming.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Take screenshot of New Sessions table
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

    # Navigate to the new Wonder session
    page.goto("http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/do-bisexuals-have-to-choose.html")
    page.wait_for_timeout(1000)

    # Take screenshot of the new Wonder session page showing Cassandra credit
    page.screenshot(path="/home/jules/verification/screenshots/verification_wonder_session.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
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
