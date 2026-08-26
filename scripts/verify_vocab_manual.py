#!/usr/bin/env python3
"""
Playwright screenshot verification script for Russian Vocabulary Manual.
"""

from playwright.sync_api import sync_playwright
import os

os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})

    # 1. Index page screenshot
    page.goto("http://localhost:8080/leksika-russkogo-yazyka/index.html")
    page.screenshot(path="/home/jules/verification/screenshots/russian_vocab_index.png")

    # 2. Topic page screenshot
    page.goto("http://localhost:8080/leksika-russkogo-yazyka/topics/privetstvie-i-znakomstvo.html")
    page.screenshot(path="/home/jules/verification/screenshots/russian_vocab_topic.png")

    browser.close()

print("Vocabulary manual screenshots captured successfully.")
