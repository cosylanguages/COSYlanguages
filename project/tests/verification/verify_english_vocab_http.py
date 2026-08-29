from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        logs = []
        page.on("console", lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
        failed_requests = []
        page.on("requestfailed", lambda req: failed_requests.append(req.url))

        page.goto("http://localhost:8088/practice/index.html")
        page.wait_for_load_state("networkidle")

        page.evaluate("async () => await window.ensureDataLoaded('en', 'advanced')")
        page.wait_for_load_state("networkidle")

        print("Failed requests:", failed_requests)

        browser.close()

if __name__ == "__main__":
    run_test()
