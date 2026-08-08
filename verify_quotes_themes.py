import time
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # 1. Start on the Intellect and Wisdom session (Einstein)
    print("Navigating to Einstein Passionately Curious session (Intellect & Wisdom theme)...")
    page.goto("http://localhost:8080/events/sessions/the-greatest-quotes/einstein-passionately-curious-quote.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/quotes_intellect_theme.png")
    print("Saved screenshots/quotes_intellect_theme.png")

    # 2. Go to Art and Creativity session (AI opposite of art)
    print("Navigating to AI opposite of art session (Art & Creativity theme)...")
    page.goto("http://localhost:8080/events/sessions/the-greatest-quotes/ai-opposite-of-art-intermediate.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/quotes_art_theme.png")
    print("Saved screenshots/quotes_art_theme.png")

    # 3. Go to Nostalgia and Home session (Home is a time)
    print("Navigating to Home is a Time session (Nostalgia & Home theme)...")
    page.goto("http://localhost:8080/events/sessions/the-greatest-quotes/home-is-a-time.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/quotes_nostalgia_theme.png")
    print("Saved screenshots/quotes_nostalgia_theme.png")

    # 4. Demonstrate link-free mode gating in Wonder Club (Is Bad Weather)
    print("Navigating to Is Bad Weather (Wonder Club) in Big Group mode...")
    page.goto("http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/is-bad-weather-gods-anger.html?mode=big")
    page.wait_for_timeout(1000)
    # The Related References block should be hidden
    page.screenshot(path="/home/jules/verification/screenshots/wonder_big_group_linkfree.png")
    print("Saved screenshots/wonder_big_group_linkfree.png")

    # Hold final state briefly
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
