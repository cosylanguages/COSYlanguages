import http.server
import socketserver
import threading
import time
import os
from playwright.sync_api import sync_playwright

PORT = 8891

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

def test_practice_grammar_topics():
    httpd = start_server()
    time.sleep(0.5)

    os.makedirs("/home/jules/project/tests/verification/screenshots", exist_ok=True)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # Test Case 1: Topic slug in theme param (to-be)
            page = browser.new_page()
            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=a1&theme=to-be")
            page.wait_for_selector("#practice-section.active", timeout=5000)

            practice_visible = page.is_visible("#practice-section")
            title_text = page.text_content("#pe-session-title")

            print("Test 1 (Granular topic slug via theme: to-be):")
            print(f"  Practice section visible: {practice_visible}")
            print(f"  Session title: {title_text}")
            assert practice_visible, "Practice section should be visible"
            assert "EN" in title_text and "grammar" in title_text.lower(), f"Unexpected title: {title_text}"
            page.close()

            # Test Case 2: Topic slug in topic param (second-conditional)
            page = browser.new_page()
            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=a2&topic=second-conditional")
            page.wait_for_selector("#practice-section.active", timeout=5000)

            practice_visible_topic = page.is_visible("#practice-section")
            title_text_topic = page.text_content("#pe-session-title")

            print("\nTest 2 (Granular topic slug via topic param: second-conditional):")
            print(f"  Practice section visible: {practice_visible_topic}")
            print(f"  Session title: {title_text_topic}")
            assert practice_visible_topic, "Practice section should be visible"
            page.close()

            # Test Case 3: Invalid topic slug (fallback + warning)
            page = browser.new_page()
            warn_logs = []
            page.on("console", lambda msg: warn_logs.append(msg.text) if "Unknown" in msg.text or "invalid" in msg.text.lower() else None)

            page.goto(f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=a1&topic=nonexistent_grammar_topic_xyz")
            page.wait_for_timeout(1000)

            setup_visible_invalid = page.is_visible("#setup-section")
            practice_visible_invalid = page.is_visible("#practice-section.active")

            print("\nTest 3 (Invalid topic slug fallback):")
            print(f"  Setup section visible: {setup_visible_invalid}")
            print(f"  Practice section active: {practice_visible_invalid}")
            print(f"  Console warnings: {warn_logs}")

            assert setup_visible_invalid, "Setup section should remain visible on invalid topic"
            assert not practice_visible_invalid, "Practice section should NOT be active on invalid topic"
            assert any("Unknown theme URL parameter" in w for w in warn_logs), f"Should log console warning, got: {warn_logs}"
            page.close()

            browser.close()
    finally:
        httpd.shutdown()

    print("\nALL GRAMMAR TOPICS VERIFICATION TESTS PASSED SUCCESSFULLY! 🚀")

if __name__ == "__main__":
    test_practice_grammar_topics()
