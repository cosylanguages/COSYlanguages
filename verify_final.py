from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8080/index.html")
    page.get_by_role("link", name="See full curriculum →").first.scroll_into_view_if_needed()
    page.screenshot(path="final_index_check.png")
    page.goto("http://localhost:8080/courses/index.html")
    page.screenshot(path="final_hub_check.png")
    browser.close()
