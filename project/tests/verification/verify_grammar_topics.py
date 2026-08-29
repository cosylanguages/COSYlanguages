import http.server
import socketserver
import threading
import time
import os
from playwright.sync_api import sync_playwright

PORT = 8890

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

def verify_grammar_topics():
    httpd = start_server()
    time.sleep(0.5)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            # Navigate to practice hub
            page.goto(f"http://localhost:{PORT}/practice/index.html")
            page.wait_for_timeout(500)

            # Test 1: Check window.COSY_GRAMMAR_TOPICS object structure in browser
            topics = page.evaluate("window.COSY_GRAMMAR_TOPICS")
            assert topics is not None, "window.COSY_GRAMMAR_TOPICS should exist"
            assert "a1" in topics and "a2" in topics and "b1" in topics and "b2" in topics
            counts = {k: len(v) for k, v in topics.items()}
            total_count = sum(counts.values())
            print(f"Test 1 - window.COSY_GRAMMAR_TOPICS counts: {counts}, total: {total_count}")
            assert counts == {'a1': 42, 'a2': 46, 'b1': 47, 'b2': 36}, f"Unexpected counts: {counts}"
            assert total_count == 171, f"Expected 171 topics, got {total_count}"

            page.close()

            # Test 2: Test URL params with specific topic slugs across levels
            test_slugs = [
                ("a1", "to-be"),
                ("a1", "past-simple-irregular"),
                ("a2", "second-conditional"),
                ("b1", "question-tags"),
                ("b2", "cleft-sentences-and-emphasis")
            ]

            for level, slug in test_slugs:
                test_page = browser.new_page()
                warn_logs = []
                test_page.on("console", lambda msg: warn_logs.append(msg.text) if "Unknown" in msg.text else None)

                url = f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level={level}&theme={slug}"
                test_page.goto(url)
                test_page.wait_for_selector("#practice-section.active", timeout=5000)

                practice_active = test_page.is_visible("#practice-section.active")
                title_text = test_page.text_content("#pe-session-title")

                print(f"Test 2 ({level} / {slug}): active={practice_active}, title='{title_text}', warnings={warn_logs}")
                assert practice_active, f"Practice section should auto-launch for topic '{slug}'"
                assert len(warn_logs) == 0, f"Unexpected warning logs for valid slug '{slug}': {warn_logs}"
                test_page.close()

            browser.close()
    finally:
        httpd.shutdown()

    print("\nALL GRAMMAR TOPIC VERIFICATION TESTS PASSED SUCCESSFULLY! 🚀")

if __name__ == "__main__":
    verify_grammar_topics()
