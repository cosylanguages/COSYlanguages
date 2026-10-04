import http.server
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

PORT = 8892

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

def verify_manual_button_auth():
    httpd = start_server()
    time.sleep(0.5)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # Test 1: Guest user (unauthenticated) - button must NOT be visible
            page1 = browser.new_page()
            url1 = f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=a1&theme=a-vs-an"
            page1.goto(url1)
            page1.wait_for_selector("#practice-section.active", timeout=5000)

            button_visible_guest = page1.is_visible("a:has-text('Open Lesson Manual')")
            print(f"Test 1 (Guest): 'Open Lesson Manual' button visible? {button_visible_guest}")
            assert not button_visible_guest, "Guest users should NOT see the Open Lesson Manual button"
            page1.close()

            # Test 2: Authenticated student user - button MUST be visible
            page2 = browser.new_page()
            page2.goto(f"http://localhost:{PORT}/practice/index.html")
            page2.evaluate("localStorage.setItem('cosy_user', JSON.stringify({ role: 'student', email: 'student@cosy.com' }))")

            url2 = f"http://localhost:{PORT}/practice/index.html?lang=en&cat=Grammar&level=a1&theme=a-vs-an"
            page2.goto(url2)
            page2.wait_for_selector("#practice-section.active", timeout=5000)

            button_visible_auth = page2.is_visible("a:has-text('Open Lesson Manual')")
            print(f"Test 2 (Authenticated Student): 'Open Lesson Manual' button visible? {button_visible_auth}")
            assert button_visible_auth, "Authenticated students MUST see the Open Lesson Manual button"
            page2.close()

            browser.close()
    finally:
        httpd.shutdown()

    print("\nAUTHENTICATION MANUAL BUTTON RESTRICTION VERIFIED SUCCESSFULLY! 🚀")

if __name__ == "__main__":
    verify_manual_button_auth()
