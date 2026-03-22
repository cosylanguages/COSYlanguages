from playwright.sync_api import sync_playwright, expect

def verify_redesign(page):
    # Desktop View
    page.set_viewport_size({"width": 1280, "height": 800})
    page.goto("http://localhost:8080/index.html")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/desktop_home.png")

    # Check if hero text is correctly localized
    hero_h1 = page.locator("h1")
    expect(hero_h1).to_contain_text("Learn languages")

    # Mobile View
    page.set_viewport_size({"width": 375, "height": 667})
    page.goto("http://localhost:8080/index.html")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/mobile_home.png")

    # Check mobile navigation hiding
    # Links: How it works (0), Courses (1), Languages (2), Practice (3), Pricing (4), Events (5), My Lessons (6), Contact (7)
    how_it_works = page.locator("nav .nav-links li").nth(0)
    expect(how_it_works).not_to_be_visible()
    courses = page.locator("nav .nav-links li").nth(1)
    expect(courses).not_to_be_visible()

    # Languages should still be visible
    languages = page.locator("nav .nav-links li").nth(2)
    expect(languages).to_be_visible()

    print("Mobile navigation verification passed.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            verify_redesign(page)
        finally:
            context.close()
            browser.close()
