import re

with open('blog/top-10-verbs.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect each verb section and add "What You Can Say Now" summary callouts to make each verb feel like a progressive step-by-step milestone
# For each verb section, after the phrase-table, we can add a <div class="what-you-can-say-box"> or progressive note summarizing what the learner has built up!

# Let's check how each verb section ends
pattern = r'(<section class="verb-section" id="(v-[^"]+)">.*?</section>)'

def add_progressive_milestones(content):
    milestones = {
        'v-be': "🎯 <strong>Milestone Unlocked with 'To Be':</strong> You can now introduce yourself (name, age, nationality, profession), state your location, express physical states (hungry/thirsty), and comment on the weather!",
        'v-have': "🎯 <strong>Milestone Unlocked with 'To Have':</strong> You can now talk about possessions, time/money availability, family, meals, physical aches, and basic obligations ('have to')!",
        'v-think': "🎯 <strong>Milestone Unlocked with 'To Think':</strong> You can now share opinions, agree/disagree, evaluate ideas, ask others for input, and express careful reflection!",
        'v-know': "🎯 <strong>Milestone Unlocked with 'To Know':</strong> You can now distinguish facts vs. familiar people/places, state skills ('know how to'), inform others ('let me know'), and make new acquaintances!",
        'v-like': "🎯 <strong>Milestone Unlocked with 'To Like':</strong> You can now express hobbies, compare similarities, describe tastes in food/cities, and order politely in cafes and restaurants ('would like')!",
        'v-want': "🎯 <strong>Milestone Unlocked with 'To Want':</strong> You can now ask for basic needs, invite friends out, make polite requests, and express personal wishes clearly!",
        'v-work_study': "🎯 <strong>Milestone Unlocked with 'To Work & Study':</strong> You can now describe your career, workplace, field of study, preparation for exams, and fitness routines!",
        'v-go': "🎯 <strong>Milestone Unlocked with 'To Go':</strong> You can now navigate cities (left/right/straight), discuss travel/vacations, talk about transportation modes, and express near-future plans ('going to')!",
        'v-can': "🎯 <strong>Milestone Unlocked with 'Can':</strong> You can now state abilities, ask for permission, express rules/prohibitions, offer help, and request assistance!",
        'v-eat_drink': "🎯 <strong>Milestone Unlocked with 'To Eat & Drink':</strong> You can now discuss food/drink quantities, dining in vs. eating out, healthy habits, and social meal invites!"
    }

    def replace_sec(match):
        sec_html = match.group(1)
        v_id = match.group(2)
        if v_id in milestones:
            box = f'\n        <div class="phrase-note" style="margin-top:1.5rem; background:#EFF7F4; border-left:4px solid var(--teal); color:var(--ink); font-size:0.95rem;">{milestones[v_id]}</div>\n'
            # Insert before </section>
            sec_html = sec_html[:-10] + box + '    </section>'
        return sec_html

    return re.sub(pattern, replace_sec, content, flags=re.DOTALL)

updated_html = add_progressive_milestones(html)

with open('blog/top-10-verbs.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

print("Successfully added progressive milestone callouts to all 10 verb sections.")
