import os
import re
import random
from bs4 import BeautifulSoup

DATABASE_EN = {
    "short-holiday-vs-long-holiday-elementary.html": {
        "focus": "Expressing Preferences",
        "explanation": "Use <strong>would rather</strong>, <strong>prefer ... to</strong>, or <strong>had better</strong> to discuss and compare travel options.",
        "rule_part_a": "Complete the rule: We use 'would rather' followed by the <span class=\"grammar-gap\" data-answer=\"base\">_____</span> form of the verb. We use 'prefer' followed by a gerund or noun, and connect choices with <span class=\"grammar-gap\" data-answer=\"to\">_____</span>.",
        "tasks": [
            "I would rather <span class=\"grammar-gap\" data-answer=\"travel\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> close to home than go on long-distance flights.",
            "He prefers packing a suitcase <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> carrying a backpack.",
            "You had better <span class=\"grammar-gap\" data-answer=\"plan\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> your summer trip early to save money.",
            "She would rather <span class=\"grammar-gap\" data-answer=\"relax\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> on the beach than do sports.",
            "They prefer short weekend trips <span class=\"grammar-gap\" data-answer=\"to\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> long vacations."
        ],
        "chips": ["base", "to", "travel", "to", "plan", "relax", "to"],
        "speaking": "Talk with your partner. Would you rather travel only once a year if the trip is long, or do you prefer short weekend trips to long ones?",
        "keywords": ["rather", "prefer", "preferring", "better"]
    },
    "short-holiday-vs-long-holiday-intermediate.html": {
        "focus": "Hypothetical Preferences",
        "explanation": "Use <strong>would rather + base verb</strong> or <strong>would prefer + to-infinitive</strong> to speculate on alternative vacation scenarios.",
        "rule_part_a": "Complete the rule: 'Would rather' takes a <span class=\"grammar-gap\" data-answer=\"bare infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> (verb without 'to'). 'Would prefer' takes a <span class=\"grammar-gap\" data-answer=\"to-infinitive\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "I would rather <span class=\"grammar-gap\" data-answer=\"recuperate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in absolute silence than travel to an active resort.",
            "They would prefer <span class=\"grammar-gap\" data-answer=\"to design\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a highly spontaneous itinerary.",
            "She would rather <span class=\"grammar-gap\" data-answer=\"not carry\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a heavy suitcase during her leisure time.",
            "Would you prefer <span class=\"grammar-gap\" data-answer=\"to take\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> frequent short breaks or one long trip?",
            "We had better <span class=\"grammar-gap\" data-answer=\"consider\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the complex logistics before choosing our destination."
        ],
        "chips": ["bare infinitive", "to-infinitive", "recuperate", "to design", "not carry", "to take", "consider"],
        "speaking": "Speculate on your dream sabbatical. Would you rather spend six months in an immersive cultural retreat, or would you prefer to keep moving between destinations?",
        "keywords": ["rather", "prefer", "preferring", "better"]
    },
    "short-holiday-vs-long-holiday-upper-intermediate.html": {
        "focus": "Adversative Connectors & Comparison",
        "explanation": "Use <strong>whereas</strong>, <strong>while</strong>, <strong>on the contrary</strong>, and <strong>conversely</strong> to contrast travel values.",
        "rule_part_a": "Complete the rule: Use <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> or 'while' to connect two directly opposite facts in a single sentence. Use <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to start a new sentence showing the reverse perspective.",
        "tasks": [
            "Some travelers love meticulous planning, <span class=\"grammar-gap\" data-answer=\"whereas\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> others thrive on spontaneity.",
            "Short holidays offer immediate stress relief; <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, long trips provide complete cultural immersion.",
            "Frequent getaways generate high excitement, <span class=\"grammar-gap\" data-answer=\"while\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> long vacations allow for restorative deep rest.",
            "He prefers backpacking; on the <span class=\"grammar-gap\" data-answer=\"contrary\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, she refuses to travel without luxury suitcase comfort.",
            "Excessive flights are detrimental; <span class=\"grammar-gap\" data-answer=\"conversely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, staying home is highly beneficial for local ecosystems."
        ],
        "chips": ["whereas", "conversely", "whereas", "conversely", "while", "contrary", "conversely"],
        "speaking": "Compare the profiles of an active cultural explorer versus a lazy resort vacationer. Use at least two adversative connectors.",
        "keywords": ["whereas", "while", "contrary", "conversely"]
    },
    "4-day-work-week.html": {
        "focus": "Mixed Conditionals",
        "explanation": "Use <strong>Mixed Conditionals</strong> to link past events or actions with present results, or vice versa (e.g., <em>If we had transitioned sooner, we would be more productive today</em>).",
        "rule_part_a": "Complete the rule: To connect a past hypothetical cause with a present result, use 'If' + Past Perfect in the if-clause, and <span class=\"grammar-gap\" data-answer=\"would + base verb\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the main clause. To connect a permanent state with a past result, use Past Simple in the if-clause and <span class=\"grammar-gap\" data-answer=\"would have + past participle\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in the main clause.",
        "tasks": [
            "If the company had launched the trial last year, we <span class=\"grammar-gap\" data-answer=\"would enjoy\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> higher employee retention today.",
            "We <span class=\"grammar-gap\" data-answer=\"would not be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suffering from burnout now if they had reduced our workload.",
            "If they <span class=\"grammar-gap\" data-answer=\"cared\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> about our well-being, they would have implemented the schedule changes sooner.",
            "If we had optimized our output, the manager <span class=\"grammar-gap\" data-answer=\"would have approved\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the extra day off.",
            "Our corporate overhead <span class=\"grammar-gap\" data-answer=\"would be\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> significantly lower today if we had closed the office on Fridays."
        ],
        "chips": ["would + base verb", "would have + past participle", "would enjoy", "would not be", "cared", "would have approved", "would be"],
        "speaking": "How would your personal well-being be different today if your company had adopted a 4-day work week five years ago?",
        "keywords": ["if", "would", "had", "could"]
    }
}

DATABASE_FR = {
    "la-semaine-de-4-jours.html": {
        "focus": "Le Conditionnel Présent & Passé",
        "explanation": "Utilisez le <strong>Conditionnel Présent</strong> pour exprimer une possibilité actuelle et le <strong>Conditionnel Passé</strong> pour exprimer un regret ou une hypothèse sur le passé.",
        "rule_part_a": "Complétez la règle : Le conditionnel présent se forme sur le radical du futur avec les terminaisons de <span class=\"grammar-gap\" data-answer=\"l'imparfait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>. Le conditionnel passé utilise l'auxiliaire être ou avoir au <span class=\"grammar-gap\" data-answer=\"conditionnel présent\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> suivi du participe passé.",
        "tasks": [
            "Si nous avions réduit le temps de trajet, nous <span class=\"grammar-gap\" data-answer=\"aurions évité\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> le surmenage des équipes.",
            "Les salariés <span class=\"grammar-gap\" data-answer=\"apprécieraient\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> grandement la flexibilité d'un week-end prolongé.",
            "Si la direction était plus moderne, elle <span class=\"grammar-gap\" data-answer=\"aurait lancé\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> cet essai l'année dernière.",
            "Le rendement global <span class=\"grammar-gap\" data-answer=\"serait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> bien meilleur avec des employés reposés.",
            "Nous <span class=\"grammar-gap\" data-answer=\"aurions diminué\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> nos frais généraux si nous avions fermé le vendredi."
        ],
        "chips": ["l'imparfait", "conditionnel présent", "aurions évité", "apprécieraient", "aurait lancé", "serait", "aurions diminué"],
        "speaking": "Comment votre bien-être personnel aurait-il évolué si votre entreprise avait mis en œuvre la semaine de 4 jours plus tôt ?",
        "keywords": ["si", "serait", "aurait", "aurions", "apprécieraient"]
    }
}

DATABASE_RU = {
    "4-dnevnaya-rabochaya-nedelya.html": {
        "focus": "Условное наклонение (Сослагательное)",
        "explanation": "Используйте частицу <strong>бы</strong> с глаголами в прошедшем времени для выражения гипотетических сценариев и условий (например, <em>Если бы мы перешли на этот график, удержание кадров улучшилось бы</em>).",
        "rule_part_a": "Заполните пропуск: Сослагательное наклонение образуется при помощи глагола в форме <span class=\"grammar-gap\" data-answer=\"прошедшего времени\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> и частицы <span class=\"grammar-gap\" data-answer=\"бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
        "tasks": [
            "Если бы мы сократили нагрузку, выгорание сотрудников <span class=\"grammar-gap\" data-answer=\"снизилось бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>.",
            "Наша продуктивность <span class=\"grammar-gap\" data-answer=\"выросла бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span>, если бы руководство согласилось на эксперимент.",
            "Компания <span class=\"grammar-gap\" data-answer=\"сохранила бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> доход, если бы вовремя оптимизировала затраты.",
            "Я <span class=\"grammar-gap\" data-answer=\"согласился бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> работать сверхурочно ради трех выходных.",
            "Такой подход <span class=\"grammar-gap\" data-answer=\"привлек бы\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> лучших специалистов на рынке."
        ],
        "chips": ["прошедшего времени", "бы", "снизилось бы", "выросла бы", "сохранила бы", "согласился бы", "привлек бы"],
        "speaking": "Согласились бы вы работать по 10 часов в день, если бы взамен у вас был гарантированный трехдневный выходной?",
        "keywords": ["бы", "если", "хотел", "мог"]
    }
}

def enrich_file(filepath, is_fr=False, is_ru=False):
    filename = os.path.basename(filepath)
    if is_fr:
        db = DATABASE_FR
        lang = "fr"
    elif is_ru:
        db = DATABASE_RU
        lang = "ru"
    else:
        db = DATABASE_EN
        lang = "en"

    data = db.get(filename)
    if not data:
        return

    print(f"Adding interactive grammar to {filename} ({lang})")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # Decompose existing grammar blocks to avoid duplication
    for el in soup.find_all(id="s-grammar"):
        el.decompose()
    for el in soup.find_all(class_="grammar"):
        el.decompose()

    # Determine labels based on language
    if is_fr:
        header_label = "🎯 Focus Linguistique (Grammaire)"
        task1a_label = "Tâche 1A : Formulation des règles"
        task1b_label = "Tâche 1B : Pratique structurée"
        task2_label = "Tâche 2 : Application orale libre"
        check_btn_label = "Vérifier"
        reset_btn_label = "Réinitialiser"
    elif is_ru:
        header_label = "🎯 Лингвистический фокус (Грамматика)"
        task1a_label = "Задание 1А: Формулирование правила"
        task1b_label = "Задание 1Б: Практика в контексте"
        task2_label = "Задание 2: Практика говорения"
        check_btn_label = "Проверить"
        reset_btn_label = "Сбросить"
    else:
        header_label = "🎯 Linguistic Focus (Interactive Grammar)"
        task1a_label = "Task 1A: Rule Formulation"
        task1b_label = "Task 1B: Structured Practice"
        task2_label = "Task 2: Task-Specific Speaking Prompt"
        check_btn_label = "Verify Answers"
        reset_btn_label = "Reset Board"

    chips = list(data["chips"])
    random.shuffle(chips)

    # Terracotta styled chips (#993C1D) for Debate Club matching rules
    chips_html_list = []
    for chip in chips:
        chips_html_list.append(f'<span class="grammar-tap-chip" style="background:#FFFDF9; border:1px solid #993C1D; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#993C1D; font-size:0.85rem; user-select:none; transition:all 0.2s;" onclick="COSY.selectGrammarChip(this)">{chip}</span>')
    chips_html = "\n            ".join(chips_html_list)

    tasks_html_list = []
    for t in data["tasks"]:
        tasks_html_list.append(f'<li style="margin-bottom:0.8rem;">{t}</li>')
    tasks_html = "\n            ".join(tasks_html_list)

    grammar_html = f"""
<div class="round-block grammar open" id="s-grammar" style="margin-bottom: 2rem;">
<div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-grammar')">
<span>{header_label}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding: 1.5rem;">
<p class="round-note" style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink);">
{data['explanation']}
</p>
<div style="margin: 1.5rem 0;">
<div class="grammar-word-bank" style="background: #FFFDF9; border: 2px dashed #993C1D; padding: 1.25rem; border-radius: 12px; min-height: 50px;">
<strong style="display: block; margin-bottom: 0.75rem; color: #993C1D; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">📦 Word Bank (Tap to select)</strong>
<div class="grammar-chips-container" style="display: flex; flex-wrap: wrap; gap: 8px;">
{chips_html}
</div>
</div>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task1a_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.8;">
{data['rule_part_a']}
</p>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task1b_label}</strong>
<ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
{tasks_html}</ol>
</div>
<div style="display:flex; gap:10px; margin-bottom:1.5rem;">
<button class="btn-verify" style="background:#993C1D; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.verifyGrammarGame(this)">{check_btn_label}</button>
<button class="btn-reset" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;" onclick="COSY.resetGrammarGame(this)">{reset_btn_label}</button>
</div>
<div class="grammar-task-item" style="background: rgba(153, 60, 29, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #993C1D; box-shadow: var(--shadow-sm);">
<strong style="display: block; margin-bottom: 0.5rem; color: #993C1D;">{task2_label}</strong>
<p style="margin: 0; font-size: 0.95rem; color: var(--ink); line-height: 1.6;">
{data['speaking']}
</p>
</div>
</div>
</div>"""

    # Insert grammar block immediately after Warm-up (s-warm)
    warmup_block = soup.find(id="s-warm")
    grammar_block_soup = BeautifulSoup(grammar_html, "html.parser")
    if warmup_block:
        warmup_block.insert_after(grammar_block_soup)
    else:
        rounds_container = soup.find(class_="rounds-container")
        if rounds_container:
            rounds_container.insert(0, grammar_block_soup)

    # Write changes back
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

    print(f"Successfully processed {filename}")

def main():
    # Process all English files
    en_dir = "events/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(en_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(en_dir, filename), is_fr=False, is_ru=False)

    # Process all French files
    fr_dir = "events/fr/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(fr_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(fr_dir, filename), is_fr=True, is_ru=False)

    # Process all Russian files
    ru_dir = "events/ru/sessions/debatable-relatable/"
    for filename in sorted(os.listdir(ru_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            enrich_file(os.path.join(ru_dir, filename), is_fr=False, is_ru=True)

if __name__ == "__main__":
    main()
