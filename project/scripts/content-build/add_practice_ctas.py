import glob
import os
import re
import difflib

LEVEL_MAP = {
    'a1': 'starter',
    'a2': 'elementary',
    'b1': 'intermediate',
    'b2': 'upper_intermediate',
    'c1': 'advanced'
}

VOCAB_COMM_THEME_MAP = {
    # Vocabulary A2
    'culture-society-and-celebrations': 'art_culture',
    'daily-life-free-time-and-entertainment': 'social',
    'describing-change-and-comparison': 'describing',
    'emergencies-and-accidents': 'health_medicine',
    'encyclopedic-a2-vocabulary-reference-tables': 'all',
    'expanded-transport-and-driving': 'travel',
    'food-health-and-the-body': 'food_drink',
    'functional-english-masterclass': 'social',
    'home-neighbourhood-and-environment': 'places',
    'master-collocations-dictionary': 'language',
    'opinions-feelings-and-social-language': 'emotions',
    'people-relationships-and-life-stages': 'people',
    'personal-development-and-goals': 'psychology',
    'school-work-and-technology': 'work',
    'shopping-and-services': 'shopping',
    'travel-and-getting-around': 'travel',
    'vocabulary-building-toolkit': 'language',

    # Vocabulary B1
    'advanced-computing-cybersecurity-and-ai': 'technology',
    'arts-culture-and-performing-arts': 'art_culture',
    'business-english-leadership-and-negotiation': 'work',
    'current-affairs-and-global-economy': 'social',
    'ecology-climate-and-sustainability': 'environment',
    'education-academic-integrity-and-research': 'school',
    'environment-disasters-and-conservation': 'environment',
    'health-medicine-and-lifestyle': 'health_medicine',
    'housing-homeownership-and-diy': 'furniture',
    'law-crime-and-judicial-system': 'social',
    'life-skills-decision-making-and-critical-thinking': 'psychology',
    'media-digital-life-and-cybersecurity': 'technology',
    'money-personal-finance-and-consumer-rights': 'shopping',
    'personality-psychology-and-emotions': 'psychology',
    'philosophy-values-and-moral-ethics': 'psychology',
    'phrases-verbs-everyday-non-literal-meanings': 'language',
    'phrasal-verbs-everyday-non-literal-meanings': 'language',
    'professional-gastronomy-and-culinary-arts': 'food_drink',
    'science-innovation-and-future-tech': 'technology',
    'society-civics-and-human-rights': 'social',
    'travel-immigration-and-global-mobility': 'travel',
    'work-career-and-business-communication': 'work',

    # Vocabulary B2
    'advanced-vocabulary-toolkit': 'language',
    'business-strategy-management-and-leadership': 'work',
    'culture-arts-and-heritage': 'art_culture',
    'daily-professional-life-and-workplace-dynamics': 'work',
    'economics-trade-and-finance': 'shopping',
    'environment-sustainability-and-circular-economy': 'environment',
    'healthcare-systems-and-preventive-medicine': 'health_medicine',
    'higher-education-and-academic-inquiry': 'school',
    'international-relations-and-geopolitics': 'social',
    'law-justice-and-civil-rights': 'social',
    'media-journalism-and-public-discourse': 'technology',
    'philosophy-ethics-and-moral-logic': 'psychology',
    'psychology-cognition-and-behavior': 'psychology',
    'science-research-and-empirical-methodology': 'technology',
    'society-government-and-public-life': 'social',
    'technology-ai-and-cybernetics': 'technology',

    # Vocabulary C1
    'academic-genres-and-research-publications': 'school',
    'academic-literacy-assessment-and-pedagogy': 'school',
    'aesthetics-literature-and-architectural-heritage': 'art_culture',
    'artificial-intelligence-machine-learning-and-robotics': 'technology',
    'banking-investment-cryptocurrencies-and-crises': 'shopping',
    'civil-law-contracts-and-torts': 'social',
    'climate-adaptation-biodiversity-and-green-tech': 'environment',
    'cognitive-biases-mental-disorders-and-therapy': 'psychology',
    'constitutional-and-international-law': 'social',
    'criminal-law-and-judicial-proceedings': 'social',
    'cybersecurity-big-data-and-digital-ethics': 'technology',
    'diagnostics-clinical-trials-and-specialties': 'health_medicine',
    'executive-leadership-operations-and-hr': 'work',
    'geopolitics-soft-power-and-peacekeeping': 'social',
    'investigative-journalism-and-press-freedom': 'social',
    'microeconomics-macroeconomics-and-behavioural-economics': 'shopping',
    'morality-existentialism-and-epistemology': 'psychology',
    'physics-chemistry-biology-and-genetics': 'technology',
    'research-ethics-peer-review-and-methodology': 'school',
    'risk-management-change-and-entrepreneurship': 'work',
    'statistical-analysis-and-empirical-data-interpretation': 'school',

    # Communication A2
    'asking-for-and-giving-directions': 'travel',
    'comparing-and-choosing-together': 'describing',
    'describing-people-and-places-in-conversation': 'people',
    'describing-symptoms-and-asking-for-help': 'health_medicine',
    'getting-things-done-transactions': 'shopping',
    'giving-simple-advice': 'social',
    'making-plans-together': 'social',
    'putting-it-together-a-full-everyday-exchange': 'social',
    'talking-on-the-phone': 'social',
    'telling-a-simple-story': 'social',

    # Communication B1
    'accepting-criticism-gracefully': 'emotions',
    'apologizing-for-errors': 'social',
    'asking-for-advice': 'social',
    'asking-for-clarification': 'language',
    'asking-for-favors': 'social',
    'asking-for-permission': 'social',
    'checking-progress': 'work',
    'comparing-alternatives': 'describing',
    'congratulating-and-celebrating': 'social',
    'delivering-bad-news': 'social',
    'describing-and-comparing-a-photo-long-turn': 'describing',
    'describing-problems-in-detail': 'social',
    'discussing-advantages-and-disadvantages': 'social',
    'explaining-complex-opinions': 'social',
    'expressing-agreement': 'social',
    'expressing-deep-sympathy': 'emotions',
    'expressing-gratitude': 'social',
    'expressing-hypothetical-situations': 'social',
    'expressing-polite-disagreement': 'social',
    'expressing-preferences': 'emotions',
    'expressing-uncertainty': 'emotions',
    'formal-vs-informal-register-switch': 'language',
    'giving-a-short-structured-talk': 'social',
    'giving-advice': 'social',
    'giving-and-justifying-opinions-in-depth': 'social',
    'giving-constructive-feedback': 'work',
    'giving-instructions': 'social',
    'giving-presentations': 'work',
    'handling-complaints': 'shopping',
    'interrupting-politely': 'social',
    'job-interview-performance': 'jobs',
    'leaving-professional-messages': 'work',
    'making-formal-requests-and-complaints': 'shopping',
    'making-reservations': 'travel',
    'making-suggestions': 'social',
    'narrating-complex-past-experiences': 'social',
    'negotiating-a-joint-decision': 'social',
    'negotiating-trade-offs': 'work',
    'networking-at-conferences': 'work',
    'participating-in-group-discussions': 'social',
    'persuading-and-convincing': 'social',
    'public-announcements-handling': 'social',
    'rejecting-proposals-politely': 'social',
    'reporting-what-someone-said': 'language',
    'speculating-on-options': 'social',
    'summarizing-meetings': 'work',
    'talking-about-future-plans-and-predictions': 'time',
    'telephone-professional-english': 'work',
    'video-call-etiquette': 'technology',

    # Communication B2
    'building-and-defending-an-argument': 'social',
    'chairing-and-managing-a-discussion': 'work',
    'comparing-and-speculating-on-two-images': 'describing',
    'discussing-abstract-and-global-topics-fluently': 'social',
    'expressing-nuanced-agreement-and-disagreement': 'social',
    'hedging-and-diplomatic-language': 'language',
    'negotiating-towards-a-decision': 'work',
    'persuading-and-making-a-case': 'social',
    'speculating-about-past-present-and-future': 'time',
    'structuring-a-formal-talk-or-presentation': 'work'
}

def generate_cta_snippet(file_path):
    filename = os.path.basename(file_path)
    slug = filename[:-5]
    parts = file_path.split('/')
    manual_type = parts[2]
    level_raw = parts[3]
    level = LEVEL_MAP.get(level_raw.lower(), 'starter')

    if manual_type == 'grammar':
        category = 'Grammar'
        theme = slug
    else:
        category = 'Vocabulary'
        theme = VOCAB_COMM_THEME_MAP.get(slug, 'all')

    practice_url = f"../../../../../practice/index.html?lang=en&cat={category}&level={level}&theme={theme}"

    cta_html = f'''<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.
  </div>
  <a href="{practice_url}" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Practice this →</a>
</div>'''
    return cta_html

def process_file(file_path, apply=False):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'practice-cta-banner' in content:
        return content, False

    cta_html = generate_cta_snippet(file_path)

    # Insert after outcome-banner if present
    if 'outcome-banner' in content:
        pattern = r'(<div class="box outcome-banner"[^>]*>.*?</div>)'
        def repl(match):
            return match.group(1) + '\n' + cta_html
        new_content, count = re.subn(pattern, repl, content, count=1, flags=re.DOTALL)
    elif 'page-head' in content:
        pattern = r'(<div class="page-head">.*?</div>)'
        def repl(match):
            return match.group(1) + '\n' + cta_html
        new_content, count = re.subn(pattern, repl, content, count=1, flags=re.DOTALL)
    else:
        new_content = content

    if apply and new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return new_content, new_content != content

def main():
    all_files = glob.glob('manuals/en/**/topics/*.html', recursive=True)
    topic_files = [f for f in sorted(all_files) if not os.path.basename(f).startswith('part-')]

    print(f"Found {len(topic_files)} non-part topic files in manuals/en.")

    modified_count = 0
    for file_path in topic_files:
        _, changed = process_file(file_path, apply=True)
        if changed:
            modified_count += 1

    print(f"Successfully applied 'Practice this' CTA banner to {modified_count} topic files! 🚀")

if __name__ == "__main__":
    main()
