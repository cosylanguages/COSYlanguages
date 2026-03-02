from playwright.sync_api import sync_playwright, expect

def test_np_task(page):
    # Start server
    page.set_viewport_size({"width": 1280, "height": 800})
    page.goto("http://localhost:8080/practice.html?lang=it&lesson=4&cat=grammar&mode=linear")

    # Wait for the task to load
    page.wait_for_selector('#task-instruction')

    # Ensure it's scrolled to top
    page.evaluate("window.scrollTo(0, 0)")

    # Take a screenshot of the NP task
    page.screenshot(path="verification/np_task_verification_v2.png", full_page=True)
    print("Screenshot saved to verification/np_task_verification_v2.png")

if __name__ == "__main__":
    import subprocess
    import time
    server = subprocess.Popen(["python3", "-m", "http.server", "8080"])
    time.sleep(2)
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            test_np_task(page)
            browser.close()
    finally:
        server.terminate()
