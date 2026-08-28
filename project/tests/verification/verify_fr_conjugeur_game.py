import http.server
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

PORT = 8889

def start_server():
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)
    httpd.serve_forever()

def run_cuj(page):
    # 1. Load app and search verb "parler" to verify color-coded endings
    page.goto(f"http://localhost:{PORT}/apps/fr-conjugeur/index.html")
    page.wait_for_timeout(1000)

    search_input = page.locator("#verb-search-input")
    search_input.fill("parler")
    page.wait_for_timeout(500)
    search_input.press("Enter")
    page.wait_for_timeout(1000)

    # Take screenshot of color-coded endings
    page.screenshot(path="project/tests/verification/screenshots/fr_conjugeur_color_endings.png")
    page.wait_for_timeout(1000)

    # 2. Toggle Game Mode
    page.click("#toggle-game-btn")
    page.wait_for_timeout(1000)

    # Take screenshot of game mode UI
    page.screenshot(path="project/tests/verification/screenshots/fr_conjugeur_game_mode.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
