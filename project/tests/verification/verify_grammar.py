import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to active English grammar manual page
    page.goto("http://localhost:8080/manuals/en/grammar/a1/topics/to-be.html")
    page.wait_for_timeout(1000)

    # Scroll down to the examples and CCQ area
    page.evaluate("window.scrollTo(0, 300)")
    page.wait_for_timeout(1000)

    # Scroll down to interactive quiz
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
