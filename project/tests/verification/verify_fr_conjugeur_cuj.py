import http.server
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

PORT = 8888

def start_server():
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)
    httpd.serve_forever()

def run_cuj(page):
    page.goto(f"http://localhost:{PORT}/apps/fr-conjugeur/index.html")
    page.wait_for_timeout(1000)

    # Search for verb "parler"
    search_input = page.locator("#verb-search-input")
    search_input.fill("parler")
    page.wait_for_timeout(500)

    # Press Enter
    search_input.press("Enter")
    page.wait_for_timeout(1000)

    # Take screenshot of the conjugation result card
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/fr_conjugeur_verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
