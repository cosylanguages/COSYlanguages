# Accessibility Audit Report

This report contains accessibility violations found during the automated scan of the following pages:
- `index.html`
- `practice/index.html`
- `events/karaoke-club.html`
- `games/what_gender_is_it/index.html`

## Critical Violations

### 1. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#profile-switcher`
- **HTML**: `<select id="profile-switcher" onchange="COSY.switchProfile(this.value)" class="styled-sel" style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 32px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 2. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#calc-lang`
- **HTML**: `<select id="calc-lang" onchange="calcPrice()" class="styled-sel">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 3. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#calc-type`
- **HTML**: `<select id="calc-type" onchange="calcPrice()" class="styled-sel">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 4. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#calc-dur`
- **HTML**: `<select id="calc-dur" onchange="calcPrice()" class="styled-sel">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 5. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#calc-pack`
- **HTML**: `<select id="calc-pack" onchange="calcPrice()" class="styled-sel">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 6. select-name
- **Page**: `index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#calc-cur`
- **HTML**: `<select id="calc-cur" onchange="calcPrice()" class="styled-sel">
          <option value="EUR">Euro (€)</option>
          <option value="USD">Dollar ($)</option>
          <option value="RUB">Ruble (₽)</option>
        </select>`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 7. select-name
- **Page**: `practice/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#profile-switcher`
- **HTML**: `<select id="profile-switcher" onchange="COSY.switchProfile(this.value)" class="styled-sel" style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 32px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 8. select-name
- **Page**: `practice/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#level-filter`
- **HTML**: `<select id="level-filter" onchange="window.cosyPractice.updateThemes()" class="styled-select">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 9. select-name
- **Page**: `practice/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#theme-filter`
- **HTML**: `<select id="theme-filter" onchange="window.cosyPractice.updateSubThemes()" class="styled-select">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 10. select-name
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#profile-switcher`
- **HTML**: `<select id="profile-switcher" onchange="COSY.switchProfile(this.value)" class="styled-sel" style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 32px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 11. select-name
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#profile-switcher`
- **HTML**: `<select id="profile-switcher" onchange="COSY.switchProfile(this.value)" class="styled-sel" style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 32px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 12. select-name
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#s-level`
- **HTML**: `<select class="styled-sel" id="s-level">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

### 13. select-name
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure select element has an accessible name
- **Selector**: `#s-lang`
- **HTML**: `<select class="styled-sel" id="s-lang">`
- **Failure Summary**:
```
Fix any of the following:
  Element does not have an implicit (wrapped) <label>
  Element does not have an explicit <label>
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"
```

## Serious Violations

### 1. color-contrast
- **Page**: `index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.hero-tag`
- **HTML**: `<div class="hero-tag" data-translate-key="hero_tag">🏡 COSYlanguages</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.11 (foreground color: #6b8f71, background color: #e8f0e9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1
```

### 2. color-contrast
- **Page**: `index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.sb-label`
- **HTML**: `<span class="sb-label" data-translate-key="hero_badge_label">Speaking-first approach</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 1.96 (foreground color: #e8a838, background color: #fff8e7, font size: 8.4pt (11.2px), font weight: bold). Expected contrast ratio of 4.5:1
```

### 3. color-contrast
- **Page**: `index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="courses/index.html"]`
- **HTML**: `<a href="courses/index.html" class="btn-secondary" data-translate-key="hero_cta_courses" data-i18n="button.exploreTypes">View all 6 course types →</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 1.02 (foreground color: #ffffff, background color: #fdfcf9, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 4. color-contrast
- **Page**: `index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="coming-soon.html"]`
- **HTML**: `<a href="languages/coming-soon.html" class="btn-secondary" data-i18n="button.seeUpcomingLanguages">See upcoming languages →</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 1.02 (foreground color: #ffffff, background color: #fdfcf9, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 5. link-name
- **Page**: `index.html`
- **Description**: Ensure links have discernible text
- **Selector**: `#calc-cta`
- **HTML**: `<a id="calc-cta" href="https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20book%20a%20lesson." class="calc-book" data-translate-key="calc_cta_book" data-i18n="button.bookNow"></a>`
- **Failure Summary**:
```
Fix all of the following:
  Element is in tab order and does not have accessible text

Fix any of the following:
  Element does not have text that is visible to screen readers
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
```

### 6. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="../index.html"]`
- **HTML**: `<a href="../index.html" data-translate-key="breadcrumb_home" data-i18n="breadcrumb.home">Home</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.2pt (13.6px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 7. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.dash-stat:nth-child(1) > div:nth-child(2) > .ds-lbl`
- **HTML**: `<div class="ds-lbl">Total Score</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 8. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.dash-stat:nth-child(2) > div:nth-child(2) > .ds-lbl`
- **HTML**: `<div class="ds-lbl">Correct Today</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 9. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.dash-stat:nth-child(3) > div:nth-child(2) > .ds-lbl`
- **HTML**: `<div class="ds-lbl">Sessions</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 10. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `#setup-section > .sec-title > span`
- **HTML**: `<span>Configure your session</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 11. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(1) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">animals</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 12. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(1) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 13. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(2) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">body</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 14. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(2) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 15. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(3) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">clothes</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 16. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(3) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 17. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(4) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">colours</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 18. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(4) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 19. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(5) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">describing</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 20. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(5) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 21. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(6) > .progress-tracker-info > .tracker-theme-name`
- **HTML**: `<span class="tracker-theme-name">emotions</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 22. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.progress-tracker-row:nth-child(6) > .progress-tracker-info > .tracker-theme-val`
- **HTML**: `<span class="tracker-theme-val" style="color: var(--coral)">0%</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.28 (foreground color: #c4522a, background color: #faf7f2, font size: 9.1pt (12.16px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 23. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `label[data-translate-key="select_practice_language"]`
- **HTML**: `<label class="field-label" data-translate-key="select_practice_language">Language</label>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 24. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="fr"]`
- **HTML**: `<div class="lang-pill " data-value="fr">🇫🇷 Français</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 25. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="it"]`
- **HTML**: `<div class="lang-pill " data-value="it">🇮🇹 Italiano</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 26. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="ru"]`
- **HTML**: `<div class="lang-pill " data-value="ru">🇷🇺 Русский</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 27. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="el"]`
- **HTML**: `<div class="lang-pill " data-value="el">🇬🇷 Ελληνικά</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 28. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="es"]`
- **HTML**: `<div class="lang-pill " data-value="es">🇪🇸 Español</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 29. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="de"]`
- **HTML**: `<div class="lang-pill " data-value="de">🇩🇪 Deutsch</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 30. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="pt"]`
- **HTML**: `<div class="lang-pill " data-value="pt">🇵🇹 Português</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 31. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="hy"]`
- **HTML**: `<div class="lang-pill " data-value="hy">🇦🇲 Հայերեն</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 32. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="ka"]`
- **HTML**: `<div class="lang-pill " data-value="ka">🇬🇪 ქართული</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 33. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="tt"]`
- **HTML**: `<div class="lang-pill " data-value="tt">🏴 Татарча</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 34. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="ba"]`
- **HTML**: `<div class="lang-pill " data-value="ba">🏴 Башҡортса</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 35. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="br"]`
- **HTML**: `<div class="lang-pill " data-value="br">🏴 Brezhoneg</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 36. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `label[data-translate-key="category_label"]`
- **HTML**: `<label class="field-label" data-translate-key="category_label">Category</label>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.17 (foreground color: #a8a29e, background color: #f5ede0, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 37. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="Vocabulary"]`
- **HTML**: `<div class="cat-pill active" data-value="Vocabulary">Vocabulary 📖</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.34 (foreground color: #2d7d6f, background color: #e6f4f1, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 38. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="Grammar"]`
- **HTML**: `<div class="cat-pill" data-value="Grammar">Grammar 📐</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 39. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="Speaking"]`
- **HTML**: `<div class="cat-pill" data-value="Speaking">Speaking 🗣️</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 40. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-value="Pronunciation"]`
- **HTML**: `<div class="cat-pill" data-value="Pronunciation">Pronunciation 🔊</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 41. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `label[data-translate-key="select_level"]`
- **HTML**: `<label class="field-label" data-translate-key="select_level">Level</label>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.17 (foreground color: #a8a29e, background color: #f5ede0, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 42. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `label[data-translate-key="select_theme"]`
- **HTML**: `<label class="field-label" data-translate-key="select_theme">Theme</label>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.17 (foreground color: #a8a29e, background color: #f5ede0, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 43. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `#quickstart-section > .sec-title > span`
- **HTML**: `<span>Jump right in</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.35 (foreground color: #a8a29e, background color: #faf7f2, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 44. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `#recent-list > .info-card-empty`
- **HTML**: `<div class="info-card-empty">No sessions yet - start practising!</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 45. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `#mistake-list > .info-card-empty`
- **HTML**: `<div class="info-card-empty">No mistakes saved yet - well done!</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.5 (foreground color: #a8a29e, background color: #fffefb, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 46. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `p[data-translate-key="footer_fb_p"]`
- **HTML**: `<p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 47. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="general/"]`
- **HTML**: `<a href="../courses/general/" data-translate-key="course_general">General Course 📖</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 48. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="spoken/"]`
- **HTML**: `<a href="../courses/spoken/" data-translate-key="course_spoken">Spoken Course 🗣️</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 49. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="exam/"]`
- **HTML**: `<a href="../courses/exam/" data-translate-key="course_exam">Exam Preparation 📝</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 50. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="travelling/"]`
- **HTML**: `<a href="../courses/travelling/" data-translate-key="course_travelling">Travelling Course ✈️</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 51. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="professional/"]`
- **HTML**: `<a href="../courses/professional/" data-translate-key="course_professional">Professional Course 💼</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 52. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="relocation/"]`
- **HTML**: `<a href="../courses/relocation/" data-translate-key="course_relocation">Relocation Course 🏡</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 53. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="../#languages"]`
- **HTML**: `<a href="../#languages" data-translate-key="nav_languages">Languages 🌍</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 54. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="../practice/index.html"]`
- **HTML**: `<a href="../practice/index.html" data-translate-key="nav_practice">Free Practice 💡</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 55. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="../events/index.html"]`
- **HTML**: `<a href="../events/index.html" data-translate-key="nav_events">Events 🎉</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 56. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="../games/index.html"]`
- **HTML**: `<a href="../games/index.html" data-translate-key="nav_games">Games 🎮</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 57. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href$="privacy.html"]`
- **HTML**: `<a href="../privacy.html">Privacy &amp; Safety 🛡️</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 58. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.footer-links-col:nth-child(5) > a[href="https://wa.me/330766784195"]`
- **HTML**: `<a href="https://wa.me/330766784195">WhatsApp 📱</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 59. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.footer-links-col:nth-child(5) > a:nth-child(3)`
- **HTML**: `<a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 60. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `a[href="mailto:cosylanguages@gmail.com"]`
- **HTML**: `<a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 4.48 (foreground color: #78716c, background color: #faf7f2, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 61. color-contrast
- **Page**: `practice/index.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.footer-bottom`
- **HTML**: `<div class="footer-bottom" data-translate-key="footer_copy">© 2026 COSYlanguages - All rights reserved</div>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 2.35 (foreground color: #a8a29e, background color: #faf7f2, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 62. scrollable-region-focusable
- **Page**: `practice/index.html`
- **Description**: Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Selector**: `#progress-trackers-list`
- **HTML**: `<div id="progress-trackers-list" class="progress-trackers-list">`
- **Failure Summary**:
```
Fix any of the following:
  Element should have focusable content
  Element should be focusable
```

### 63. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `.join-btn`
- **HTML**: `<a class="join-btn" href="https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20join%20Karaoke%20Club." style="background: var(--teal); color: white;" data-i18n="events.registerInterest">💬 Register Interest</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.62 (foreground color: #ffffff, background color: #6b8f71, font size: 10.0pt (13.28px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 64. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(1) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/toutes-les-machines-ont-le-coeur.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Toutes les machines ont le cœur</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 65. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(1) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/je-taime-comme-je-taime.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">je t'aime comme je t'aime</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 66. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(2) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/me-and-i.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">me &amp; I</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 67. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(2) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/angeleyes.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">angeleyes</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 68. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(3) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/seventeen.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Seventeen</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 69. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(3) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/lifeboat.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Lifeboat</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 70. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="a2"][data-lang="en"][data-type="challenge"] > div > div > .club-tag`
- **HTML**: `<span class="club-tag" style="background:#FAF0E6; color:#B9770E; border-color:#F5CBA7; border:1px solid #F5CBA7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">A2</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.27 (foreground color: #b9770e, background color: #faf0e6, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 71. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="a2"][data-lang="en"][data-type="challenge"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/make-your-own-kind-of-music.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Make Your Own Kind of Music</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 72. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="a2"][data-lang="en"][data-type="challenge"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/its-getting-better.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">It's Getting Better</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 73. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="it"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/it/chi-sara-con-te.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">chi sara con te</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 74. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="it"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/it/lamore-e-un-attimo.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">l'amore e un attimo</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 75. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/el/kapoies-nychtes.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">κάποιες νύχτες</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 76. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/el/o-gatos.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">ο γάτος</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 77. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="es"][data-type="challenge"][data-level="b1"] > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 78. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="es"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/es/amor-libre.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">amor libre</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 79. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="es"][data-type="challenge"][data-level="b1"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/es/te-alejas-mas-de-mi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">te alejas mas de mi</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 80. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(8) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 81. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(8) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/oui-ou-non.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">oui ou non</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 82. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(8) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/balance-ton-quoi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">balance ton quoi</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 83. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(9) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 84. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(9) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/le-soleil-noir.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">le soleil noir</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 85. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(9) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/la-tour-eiffel-est-pour-moi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">la tour eiffel est pour moi</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 86. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(10) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 87. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(10) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/la-complainte-de-la-serveuse-automate.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">La serveuse automate</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 88. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(10) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/le-monde-est-stone.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Le monde est stone</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 89. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(10) > div > p > span > a:nth-child(3)`
- **HTML**: `<a href="sessions/karaoke-club/fr/un-garcon-pas-comme-les-autres.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Un garçon pas comme les autres</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 90. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(10) > div > p > span > a:nth-child(4)`
- **HTML**: `<a href="sessions/karaoke-club/fr/les-uns-contre-les-autres.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Les uns contre les autres</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 91. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="b2"][data-type="challenge"][data-lang="fr"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/nos-ames-sont.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">nos âmes sont</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 92. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="b2"][data-type="challenge"][data-lang="fr"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/couleur.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Couleur</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 93. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="b2"][data-type="challenge"][data-lang="fr"] > div > p > span > a:nth-child(3)`
- **HTML**: `<a href="sessions/karaoke-club/fr/speed.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Speed</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 94. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="b2"][data-type="challenge"][data-lang="fr"] > div > p > span > a:nth-child(4)`
- **HTML**: `<a href="sessions/karaoke-club/fr/je-suis-un-homme.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Je suis un homme</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 95. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="challenge"] > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/el/to-idio-to-theo.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Τον ίδιο το Θεό</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 96. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="challenge"] > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/el/fovamai.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Φοβάμαι</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 97. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(13) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/fr/diva.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Diva</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 98. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-type="challenge"][data-lang="fr"][data-level="b1"]:nth-child(13) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/fr/tu-ten-iras.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Tu t'en iras</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 99. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(14) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/army-dreamers.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Army Dreamers</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 100. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(14) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/oh-to-be-in-love.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Oh to Be in Love</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 101. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(15) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 102. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(15) > div > p > span > a:nth-child(1)`
- **HTML**: `<a href="sessions/karaoke-club/a-diagnosis.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">A Diagnosis</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 103. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(15) > div > p > span > a:nth-child(2)`
- **HTML**: `<a href="sessions/karaoke-club/you-stupid-bitch.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">You Stupid Bitch</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 104. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="en"][data-type="challenge"][data-level="b1"]:nth-child(15) > div > p > span > a:nth-child(3)`
- **HTML**: `<a href="sessions/karaoke-club/im-a-good-person.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">I'm a Good Person</a>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.39 (foreground color: #6b8f71, background color: #faf7f2, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 105. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="ru"][data-level="b1"][data-type="standalone"]:nth-child(12) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 106. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="es"][data-level="b1"][data-type="standalone"]:nth-child(17) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 107. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="es"][data-level="b1"][data-type="standalone"]:nth-child(18) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 108. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(20) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 109. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(22) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 110. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(28) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 111. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(29) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 112. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(41) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 113. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(42) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 114. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-level="b1"][data-type="standalone"]:nth-child(44) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 115. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="standalone"]:nth-child(45) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 116. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="standalone"]:nth-child(46) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 117. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(47) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 118. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(48) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 119. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(49) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 120. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(50) > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensible</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

### 121. color-contrast
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Selector**: `div[data-lang="ru"][data-level="b2"][data-type="standalone"] > div > div > .club-tag:nth-child(2)`
- **HTML**: `<span class="club-tag" style="background:#FFF5F5; color:#E53E3E; border-color:#FED7D7; border:1px solid #FED7D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">🔞 18+ / Sensitive</span>`
- **Failure Summary**:
```
Fix any of the following:
  Element has insufficient color contrast of 3.85 (foreground color: #e53e3e, background color: #fff5f5, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1
```

## Moderate Violations

### 1. heading-order
- **Page**: `index.html`
- **Description**: Ensure the order of headings is semantically correct
- **Selector**: `h5[data-translate-key="footer_h5_courses"]`
- **HTML**: `<h5 data-translate-key="footer_h5_courses">Courses</h5>`
- **Failure Summary**:
```
Fix any of the following:
  Heading order invalid
```

### 2. region
- **Page**: `index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.wa-fab`
- **HTML**: `<a href="https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20COSYlanguages." class="wa-fab" aria-label="Chat on WhatsApp">💬</a>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 3. heading-order
- **Page**: `practice/index.html`
- **Description**: Ensure the order of headings is semantically correct
- **Selector**: `h5[data-translate-key="footer_h5_courses"]`
- **HTML**: `<h5 data-translate-key="footer_h5_courses">Courses</h5>`
- **Failure Summary**:
```
Fix any of the following:
  Heading order invalid
```

### 4. landmark-one-main
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure the document has a main landmark
- **Selector**: `html`
- **HTML**: `<html lang="en" data-theme="light">`
- **Failure Summary**:
```
Fix all of the following:
  Document does not have a main landmark
```

### 5. landmark-unique
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure landmarks are unique
- **Selector**: `.cosy-breadcrumbs`
- **HTML**: `<nav class="cosy-breadcrumbs">
<a href="../" data-i18n="breadcrumb.home">Home</a> <span class="sep">/</span>
<a href="index.html" data-i18n="breadcrumb.events" class="active">Events</a> <span class="sep">/</span>
<span class="current" data-i18n="breadcrumb.events">Karaoke Club</span>
</nav>`
- **Failure Summary**:
```
Fix any of the following:
  The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable
```

### 6. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.back-link`
- **HTML**: `<a class="back-link" href="index.html" style="margin-bottom: 2rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; color: var(--muted); font-size: 0.9rem;">← All Live Events</a>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 7. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.club-main > div > .section-header`
- **HTML**: `<div class="section-header" style="margin-bottom: 1.5rem;">
<h2 style="font-size: 1.5rem;" data-i18n="events.nextLiveSession">📅 Next Live Session</h2>
</div>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 8. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.session-info`
- **HTML**: `<div class="session-info">`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 9. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.join-btn`
- **HTML**: `<a class="join-btn" href="https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20join%20Karaoke%20Club." style="background: var(--teal); color: white;" data-i18n="events.registerInterest">💬 Register Interest</a>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 10. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `#sc-hist > .section-header`
- **HTML**: `<div class="section-header" style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
<h2 style="font-size: 1.5rem; margin: 0;" data-i18n="events.pastSessions">🕒 Past Sessions</h2>
</div>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 11. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `h3[data-i18n="karaoke.stickyTitle"]`
- **HTML**: `<h3 style="margin: 0; font-size: 1.1rem; color: #4A154B;" data-i18n="karaoke.stickyTitle">🎵 Past Sessions Filter</h3>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 12. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `span[data-i18n="karaoke.filterContentLanguage"]`
- **HTML**: `<span style="font-weight: bold; font-size: 0.85rem;" data-i18n="karaoke.filterContentLanguage">Song Language:</span>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 13. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `span[data-i18n="karaoke.filterLevel"]`
- **HTML**: `<span style="font-weight: bold; font-size: 0.85rem;" data-i18n="karaoke.filterLevel">Target Level:</span>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 14. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `span[data-i18n="karaoke.filterType"]`
- **HTML**: `<span style="font-weight: bold; font-size: 0.85rem;" data-i18n="karaoke.filterType">Format Type:</span>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 15. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.pinned-challenges-section`
- **HTML**: `<div class="pinned-challenges-section" style="margin-bottom: 3.5rem; background: rgba(74, 21, 75, 0.03); border: 2px dashed #4A154B; border-radius: 28px; padding: 2rem;">`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 16. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.history-body > h3`
- **HTML**: `<h3 style="font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; color: var(--ink);">
            🎵 Standalone Song Sessions (90-120 min)
          </h3>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 17. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(4)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 18. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(5)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 19. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="a2"][data-lang="fr"][data-type="standalone"]`
- **HTML**: `<div class="history-session" data-level="a2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 20. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(7)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 21. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="it"][data-level="b1"][data-type="standalone"]:nth-child(8)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 22. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="it"][data-level="b1"][data-type="standalone"]:nth-child(9)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 23. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="it"][data-level="b1"][data-type="standalone"]:nth-child(10)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 24. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="en"][data-level="b1"][data-type="standalone"]`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 25. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="ru"][data-level="b1"][data-type="standalone"]:nth-child(12)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 26. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="it"][data-level="b1"][data-type="standalone"]:nth-child(13)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 27. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="it"][data-level="b1"][data-type="standalone"]:nth-child(14)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 28. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b1"][data-type="standalone"]:nth-child(15)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 29. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="a2"][data-lang="el"][data-type="standalone"]`
- **HTML**: `<div class="history-session" data-level="a2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 30. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="es"][data-level="b1"][data-type="standalone"]:nth-child(17)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 31. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="es"][data-level="b1"][data-type="standalone"]:nth-child(18)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 32. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(19)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 33. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(20)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 34. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="es"][data-level="b1"][data-type="standalone"]:nth-child(21)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 35. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(22)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 36. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(23)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 37. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(24)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 38. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(25)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 39. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(26)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 40. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(27)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 41. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(28)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 42. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(29)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 43. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(30)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 44. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="en"][data-level="b2"][data-type="standalone"]:nth-child(31)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 45. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(32)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 46. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(33)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 47. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="en"][data-level="b2"][data-type="standalone"]:nth-child(34)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 48. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(35)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 49. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="b2"][data-lang="fr"][data-type="standalone"]:nth-child(36)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 50. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="ru"][data-level="b1"][data-type="standalone"]:nth-child(37)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 51. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="a2"][data-lang="en"][data-type="standalone"]:nth-child(38)`
- **HTML**: `<div class="history-session" data-level="a2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 52. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-level="a2"][data-lang="en"][data-type="standalone"]:nth-child(39)`
- **HTML**: `<div class="history-session" data-level="a2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 53. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b1"][data-type="standalone"]:nth-child(40)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 54. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(41)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 55. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(42)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 56. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b1"][data-type="standalone"]:nth-child(43)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 57. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b1"][data-type="standalone"]:nth-child(44)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 58. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="standalone"]:nth-child(45)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 59. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="el"][data-level="b2"][data-type="standalone"]:nth-child(46)`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 60. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(47)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 61. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(48)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 62. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(49)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 63. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="fr"][data-level="b1"][data-type="standalone"]:nth-child(50)`
- **HTML**: `<div class="history-session" data-level="b1" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 64. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `div[data-lang="ru"][data-level="b2"][data-type="standalone"]`
- **HTML**: `<div class="history-session" data-level="b2" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;" data-type="standalone" ...>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 65. region
- **Page**: `events/karaoke-club.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.club-sidebar`
- **HTML**: `<div class="club-sidebar">`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 66. landmark-one-main
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure the document has a main landmark
- **Selector**: `html`
- **HTML**: `<html lang="en" data-theme="light">`
- **Failure Summary**:
```
Fix all of the following:
  Document does not have a main landmark
```

### 67. page-has-heading-one
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure that the page, or at least one of its frames contains a level-one heading
- **Selector**: `html`
- **HTML**: `<html lang="en" data-theme="light">`
- **Failure Summary**:
```
Fix all of the following:
  Page must have a level-one heading
```

### 68. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.go-topbar > div:nth-child(2)`
- **HTML**: `<div>
          <div class="go-title" id="go-title">What Gender Is It? ♀️♂️</div>
          <div class="go-meta" id="go-meta">Grammar &amp; Etymology · Solo</div>
        </div>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 69. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.setup-screen > div:nth-child(1)`
- **HTML**: `<div style="font-size: 4rem; margin-bottom: 1rem;">♀️♂️</div>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 70. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `h2`
- **HTML**: `<h2>What Gender Is It?</h2>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 71. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.setup-screen > p`
- **HTML**: `<p>Practice grammatical genders in our gendered languages (French, Spanish, Italian, German, Russian, Greek, Breton) and learn the fascinating historical/linguistic reasons why they have them!</p>`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 72. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.setup-field:nth-child(4)`
- **HTML**: `<div class="setup-field">`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

### 73. region
- **Page**: `games/what_gender_is_it/index.html`
- **Description**: Ensure all page content is contained by landmarks
- **Selector**: `.setup-field:nth-child(5)`
- **HTML**: `<div class="setup-field">`
- **Failure Summary**:
```
Fix any of the following:
  Some page content is not contained by landmarks
```

## Minor Violations

No violations found.
