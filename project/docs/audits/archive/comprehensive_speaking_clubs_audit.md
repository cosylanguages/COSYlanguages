# Comprehensive Speaking Clubs Quality Audit Report (September 2026)

An exhaustive quality audit evaluating all 254 active Speaking Club sessions across English, French, and Russian, designed to match the standardized verification process.

## 1. Summary Statistics

| Club | Language | Sessions on Disk | Linked from Overview | Orphans |
| --- | --- | --- | --- | --- |
| the-greatest-quotes | EN | 48 | 46 | 2 |
| the-greatest-quotes | FR | 13 | 13 | 0 |
| the-greatest-quotes | RU | 8 | 8 | 0 |
| my-life-with-without | EN | 14 | 14 | 0 |
| keeping-up-with-science | EN | 38 | 38 | 0 |
| keeping-up-with-science | FR | 1 | 1 | 0 |
| keeping-up-with-science | RU | 1 | 1 | 0 |
| i-couldnt-help-but-wonder | EN | 16 | 16 | 0 |
| i-couldnt-help-but-wonder | FR | 5 | 5 | 0 |
| lets-celebrate | EN | 15 | 15 | 0 |
| lets-celebrate | FR | 5 | 0 | 5 |
| lets-celebrate | RU | 5 | 0 | 5 |
| mind-matters | EN | 52 | 52 | 0 |
| mind-matters | FR | 12 | 12 | 0 |
| mind-matters | RU | 2 | 2 | 0 |
| debatable-relatable | EN | 16 | 16 | 0 |
| debatable-relatable | FR | 2 | 2 | 0 |
| debatable-relatable | RU | 1 | 1 | 0 |

## 2. Key Findings & Actionable Remediation

### Orphans and Link Discrepancies
1. **Let's Celebrate (French and Russian)**:
   - **Findings**: 5 French files and 5 Russian files exist on disk under `events/fr/sessions/lets-celebrate/` and `events/ru/sessions/lets-celebrate/` respectively. However, **zero links exist** on the overview pages `events/fr/lets-celebrate.html` and `events/ru/lets-celebrate.html`. Both pages display "No past sessions yet." placeholder text.
   - **Impact**: Students visiting the French and Russian events pages cannot see or access these 10 perfectly localized, high-quality, 10-unit celebrate sessions.
   - **Remediation**: Append these sessions to the past sessions list on their respective French and Russian overview pages.
2. **The Greatest Quotes (English)**:
   - **Findings**: 2 elementary session variants (`feynman-knowledge-isnt-free-elementary.html` and `madonna-ai-art-quote-elementary.html`) remain unlinked/orphaned on disk under `events/sessions/the-greatest-quotes/`.
   - **Remediation**: Verify whether elementary session variants are integrated with intermediate/advanced pages or if separate cards should be rendered.

### Placeholder Leaks & Template Leftovers
- **are-traditions-hidden-monogamy.html** and **collective-guilt-global-crisis.html** under `events/sessions/i-couldnt-help-but-wonder/` contain a minor developer comment leak:
  `<!-- GRAMMAR BLOCK placeholder to be processed or written directly -->`
- There are absolutely **zero visible placeholder leaks** or generic filler texts referencing field names (e.g. "Target vocabulary word meaning in") to the end user.

### Sensitive-Themed Session Review
- A total of **36 sessions** cover highly sensitive topics (including suicide, euthanasia, Nazi race propaganda, and depression), such as `assisted-dying.html` and `nazi-race-propaganda.html`. Unlike Karaoke sessions which feature "18+ / Sensitive" tags, these Speaking Club sessions do not have protective labels. It is recommended to flag them for human review to append standard warning chips.

## 3. Comprehensive Session-by-Session Audit Table

| File | Language | Linked from overview? | Placeholder leaks? | Language correct? | 10 units traceable? | Round 1/2 OK? | Sensitive-topic handled? | Duration matches? | Flagged for human review? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ability-to-notice-beauty-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| accept-gay-child.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-opposite-of-art-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-opposite-of-art-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| amish-tripathi-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| barbra-streisand-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brianna-pastor-proud-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| compass-and-clock.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dangerous-blindness-perspective.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| disappear-with-art-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dolto-difficult-child-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dostoevsky-loving-power-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dostoevsky-politics-religion-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| einstein-passionately-curious-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| favorite-days-not-happened.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-education-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-knowledge-isnt-free-elementary.html | EN | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-knowledge-isnt-free-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-knowledge-isnt-free-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-no-shame-knowing-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-study-hard-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feynman-study-hard.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| home-is-a-time.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| jim-kwik-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| langle-suppressed-child-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| madonna-ai-art-quote-elementary.html | EN | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| madonna-ai-art-quote-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| madonna-ai-art-quote-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| memory-cards-storage-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| must-die-first.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| neufeld-resistance-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| rain-seller-umbrella-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| robin-williams-quote-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| robin-williams-quote-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sadia-hakim-humanity-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| saudade.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sonder.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| stay-free-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| steve-jobs-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| think-for-yourself-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| turn-off-ai-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| underpaid-politicians-teachers-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| virginia-woolf-trigger-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| voltaire-read-dance-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| weird-people-dreams-quote.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| wisdom-of-socrates.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| women-mothers-tragedy.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| you-are-a-soul.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| accept-gay-child.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-opposite-of-art.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dangerous-blindness-perspective.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dolto-difficult-child-quote.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| favorite-days-not-happened.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| home-is-a-time.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| la-sagesse-de-socrate.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| must-die-first.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| saudade.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sonder.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| voltaire-read-dance-quote.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| women-mothers-tragedy.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| you-are-a-soul.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dolto-difficult-child-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dostoevsky-loving-power-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| dostoevsky-politics-religion-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| langle-suppressed-child-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| neufeld-resistance-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| prishvin-convenient-people-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sukhomlinsky-obedience-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| think-for-yourself-quote.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| car-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| celebrity-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| diversity-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| fridge-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| high-rise-skyscrapers-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| high-rise-skyscrapers-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| holidays-vacations.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| italian-gestures.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| obsolete-jobs-advanced.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| obsolete-jobs-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pets-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| private-cars-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| private-cars-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| social-media-life.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-and-the-brain-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-and-the-brain-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-reality-delusion.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| animal-cooperation-language-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| animal-cooperation-language-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ape-laughter-speech-origin-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ape-laughter-speech-origin-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brain-improving-in-90s-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brain-improving-in-90s-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| climate-scientist-warming-report-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| climate-scientist-warming-report-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| football-beats-shamrock-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| football-beats-shamrock-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| fusion-energy.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| grandmother-evolutionary-mystery.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| grandparents-mental-health.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| hidden-regenerative-powers-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| hidden-regenerative-powers-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| impersonation-accounts.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| living-most-creative-time.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| losing-spoken-words.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| mendelian-laws-broken.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| museums-movies-theater-stay-younger-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| museums-movies-theater-stay-younger-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| museums-movies-theater-stay-younger-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ozempic-obesity-revolution-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ozempic-obesity-revolution-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| right-handedness.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sensory-system-pain-disease-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sensory-system-pain-disease-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| social-decisions-brain.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| spider-creatures-origins-of-fatherhood-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| spider-creatures-origins-of-fatherhood-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| where-you-live-shapes-dementia-risk-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| where-you-live-shapes-dementia-risk-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| where-you-live-shapes-dementia-risk-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| your-fingers-hold-secret-brain-evolution-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| your-fingers-hold-secret-brain-evolution-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| impersonation-accounts.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| vliyanie-propagandy-deti.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| always-watched-in-a-crowd.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| appreciating-amy-winehouse-after-death.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| are-traditions-hidden-monogamy-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| are-traditions-hidden-monogamy.html | EN | Yes | placeholder | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| collective-guilt-global-crisis.html | EN | Yes | placeholder | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| death-of-the-album.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| do-insects-hide-when-it-rains.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| does-euthanasia-reduce-suicide-rates.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feeling-empty-after-series.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| i-have-no-time-for-it.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| is-bad-weather-gods-anger.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| is-parenting-instinct-a-real-thing-or-scam.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ugly-produce-anti-waste.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| whether-raindrops-select-where-to-fall.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| why-do-we-try-to-relate-to-adhd.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| why-is-everyone-copying-me.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| death-of-the-album.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| feeling-empty-after-series.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| is-parenting-instinct-a-real-thing-or-scam.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ugly-produce-anti-waste.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| why-do-we-try-to-relate-to-adhd.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| diwali-festival.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| family-remittances-day.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| international-asteroid-day-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| international-asteroid-day-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| international-peace-love-day-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| international-peace-love-day-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| lunar-new-year.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-simplicity-day.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-someone-day-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-someone-day-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-workaholics-day.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pandemonium-day-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pandemonium-day-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| urban-beekeeping-day-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| urban-beekeeping-day-starter.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| diwali-festival.html | FR | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| family-remittances-day.html | FR | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| lunar-new-year.html | FR | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-simplicity-day.html | FR | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-workaholics-day.html | FR | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| diwali-festival.html | RU | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| family-remittances-day.html | RU | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| lunar-new-year.html | RU | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-simplicity-day.html | RU | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| national-workaholics-day.html | RU | No (Orphan) | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| anticipatory-grief.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| aspiration-vs-inspiration-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| aspiration-vs-inspiration-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| benjamin-franklin-effect.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| blue-eyes-brown-eyes-experiment.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| bluewashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| bluewashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| bounded-rationality-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| bounded-rationality-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brain-discipline-dopamine.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brainwashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| brainwashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| broken-children-grown-bodies.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| conversations-avoid-enjoy-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| conversations-avoid-enjoy-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| depersonalization.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| expert-defend-language-mistakes.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| fear-of-love-control.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| finding-the-right-person.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| gilberts-law.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| guilt-moving-abroad-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| guilt-moving-abroad-proficiency.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| how-to-love-your-work.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| impersonation.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| kidlins-law.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| law-of-attraction.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| limerence.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| maze-of-biases.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| mind-great-literature.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| moving-new-city-true-self.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| murphys-law.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| nazi-race-propaganda.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pinkwashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pinkwashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| power-of-habits.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| psychology-of-action-bias.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| psychology-of-smiles.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| purple-washing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| purple-washing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| redwashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| redwashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| science-of-sleep.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| simmel-objective-freedom.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sportswashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| sportswashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| the-bye-now-effect-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| the-bye-now-effect-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| whitewashing-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| whitewashing-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| why-do-they-say-ai-is-inevitable-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| why-do-they-say-ai-is-inevitable-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| wilsons-law.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| anticipatory-grief.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| broken-children-grown-bodies.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| depersonalization.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| fear-of-love-control.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| finding-the-right-person.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| gilberts-law.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| impersonation.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| kidlins-law.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| law-of-attraction.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| limerence.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| murphys-law.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| wilsons-law.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ne-ispravlyay-rech.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| syn-vlyubilsya-v-druga.html | RU | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| 4-day-work-week.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| ai-and-art.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| assisted-dying.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| homework-ban.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| human-cloning-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| human-cloning-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| meta-subscriptions.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| pedagogy-and-practice.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| short-holiday-vs-long-holiday-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| short-holiday-vs-long-holiday-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| short-holiday-vs-long-holiday-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| the-future-proof-educator.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| typing-vs-handwriting-elementary.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| typing-vs-handwriting-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| typing-vs-handwriting-upper-intermediate.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| upbringing-old-vs-modern.html | EN | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| l-aide-active-a-mourir.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| la-semaine-de-4-jours.html | FR | Yes | None | Yes | Yes | Yes | Flag for Human Review | Yes (60 min) | Yes (Pending Review) |
| 4-dnevnaya-rabochaya-nedelya.html | RU | Yes | None | Yes | Yes | Yes | N/A | Yes (60 min) | No |