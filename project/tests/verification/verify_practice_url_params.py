import http.server
import socketserver
import threading
import time
import os
from playwright.sync_api import sync_playwright

PORT = 8889

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

class ReuseTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def start_server():
    httpd = ReuseTCPServer(("", PORT), QuietHandler)
    server_thread = threading.Thread(target=httpd.serve_forever)
    server_thread.daemon = True
    server_thread.start()
    return httpd

def test_practice_url_params():
    httpd = start_server()
    time.sleep(0.5)

    os.makedirs("/home/jules/project/tests/verification/screenshots", exist_ok=True)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # Test Case 1: Valid URL parameters (en + Grammar + starter + to_be)
            page = browser.new_page()
            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=starter&theme=to_be")
            page.wait_for_selector("#practice-section.active", timeout=5000)

            practice_visible = page.is_visible("#practice-section")
            setup_visible = page.is_visible("#setup-section")
            title_text = page.text_content("#pe-session-title")

            print("Test 1 (Valid params - en/Grammar/starter/to_be):")
            print(f"  Practice section visible: {practice_visible}")
            print(f"  Setup section visible: {setup_visible}")
            print(f"  Session title: {title_text}")
            assert practice_visible, "Practice section should be visible for valid params"
            assert not setup_visible, "Setup section should be hidden when session is active"
            assert "EN" in title_text and "grammar" in title_text.lower(), f"Title should contain EN and Grammar, got: {title_text}"

            page.screenshot(path="/home/jules/project/tests/verification/screenshots/practice_url_valid_to_be.png")
            page.close()

            # Test Case 2: Valid URL parameters (fr + vocab)
            page = browser.new_page()
            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=fr&cat=vocab&level=all&theme=all")
            page.wait_for_selector("#practice-section.active", timeout=5000)

            practice_visible_fr = page.is_visible("#practice-section")
            title_text_fr = page.text_content("#pe-session-title")
            print("\nTest 2 (Valid params - fr/vocab):")
            print(f"  Practice section visible: {practice_visible_fr}")
            print(f"  Session title: {title_text_fr}")
            assert practice_visible_fr, "Practice section should be visible for fr/vocab"
            assert "FR" in title_text_fr, f"Title should contain FR, got: {title_text_fr}"
            page.close()

            # Test Case 3: Invalid theme parameter (fallback to landing screen + console.warn)
            page = browser.new_page()
            warn_logs = []
            page.on("console", lambda msg: warn_logs.append(msg.text) if msg.type == "warning" or "Unknown" in msg.text or "invalid" in msg.text.lower() else None)

            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=starter&theme=unknown_theme_123")
            page.wait_for_timeout(1000)

            setup_visible_invalid = page.is_visible("#setup-section")
            practice_visible_invalid = page.is_visible("#practice-section.active")

            print("\nTest 3 (Invalid theme param - unknown_theme_123):")
            print(f"  Setup section visible: {setup_visible_invalid}")
            print(f"  Practice section active: {practice_visible_invalid}")
            print(f"  Console warnings: {warn_logs}")

            assert setup_visible_invalid, "Setup section should remain visible on invalid theme"
            assert not practice_visible_invalid, "Practice section should NOT be active on invalid theme"
            assert any("Unknown theme URL parameter" in w for w in warn_logs), f"Should log console warning for bad theme, got: {warn_logs}"

            page.screenshot(path="/home/jules/project/tests/verification/screenshots/practice_url_invalid_theme.png")
            page.close()

            # Test Case 4: Default landing screen (no params)
            page = browser.new_page()
            page.goto(f"http://localhost:{PORT}/practice/index.html")
            page.wait_for_timeout(500)

            setup_visible_default = page.is_visible("#setup-section")
            practice_visible_default = page.is_visible("#practice-section.active")

            print("\nTest 4 (Default landing - no params):")
            print(f"  Setup section visible: {setup_visible_default}")
            print(f"  Practice section active: {practice_visible_default}")

            assert setup_visible_default, "Setup section should be visible by default"
            assert not practice_visible_default, "Practice section should NOT be active by default"
            page.close()

            browser.close()
    finally:
        httpd.shutdown()

    print("\nALL 4 VERIFICATION TESTS PASSED SUCCESSFULLY! 🚀")

if __name__ == "__main__":
    test_practice_url_params()
