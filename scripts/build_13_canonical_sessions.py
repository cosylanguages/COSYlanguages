import os
from scripts.generate_15_canonical_sessions import render_session_html

# 1. KUS Screen Time Kids
render_session_html(
    club_type='kus',
    title='Scientists Tracked Kids for 8 Years: The Screen Time Result',
    cefr_label='Intermediate (B1)',
    topic_summary='An eight-year longitudinal study reveals surprising cognitive, emotional, and social effects of childhood screen exposure.',
    feature_box_title='🔬 Field Journal Research Log',
    feature_box_content='<p>Researchers followed a cohort of over 2,000 children from age 2 to 10, measuring daily digital media usage against executive functioning, attention span, and emotional regulation metrics. The findings show nuanced trade-offs between interactive educational media and passive content viewing.</p>',
    vocab_list=[
        {'word': 'Longitudinal', 'phonetic': '/ˌlɒn.dʒɪˈtjuː.dɪ.nəl/', 'pos': 'adj.', 'definition': 'conducted over a long period of time to track changes.', 'example': 'Longitudinal studies help scientists understand developmental patterns over decades.', 'antonym': 'Cross-sectional'},
        {'word': 'Executive Functioning', 'phonetic': '/ɪɡˈzek.jə.tɪv/', 'pos': 'n.', 'definition': 'cognitive processes including self-control, working memory, and focus.', 'example': 'High executive functioning helps children solve complex puzzles.', 'antonym': 'Impulsivity'},
        {'word': 'Sedentary', 'phonetic': '/ˈsed.ən.tər.i/', 'pos': 'adj.', 'definition': 'involving a lot of sitting and little physical exercise.', 'example': 'A sedentary lifestyle can harm both physical health and attention span.', 'antonym': 'Active'},
        {'word': 'Cognitive Load', 'phonetic': '/ˈkɒɡ.nə.tɪv loʊd/', 'pos': 'n.', 'definition': 'the total amount of mental effort used in working memory.', 'example': 'Fast-paced videos increase cognitive load in young minds.', 'antonym': 'Mental ease'},
        {'word': 'Regulation', 'phonetic': '/ˌreɡ.jəˈleɪ.ʃən/', 'pos': 'n.', 'definition': 'the ability to manage and control emotional responses.', 'example': 'Emotional regulation improves when children spend time outdoors.', 'antonym': 'Dysregulation'},
        {'word': 'Exposure', 'phonetic': '/ɪkˈspoʊ.ʒər/', 'pos': 'n.', 'definition': 'the state of experiencing or being subjected to an influence.', 'example': 'Limiting screen exposure before bedtime leads to better sleep quality.', 'antonym': 'Protection'},
        {'word': 'Attentive', 'phonetic': '/əˈten.tɪv/', 'pos': 'adj.', 'definition': 'paying close attention to something.', 'example': 'Children are more attentive when engaging in interactive storytelling.', 'antonym': 'Distracted'},
        {'word': 'Intervention', 'phonetic': '/ˌɪn.təˈven.ʃən/', 'pos': 'n.', 'definition': 'action taken to improve a situation or prevent harm.', 'example': 'Parental intervention can guide healthier digital media habits.', 'antonym': 'Neglect'},
        {'word': 'Stimulation', 'phonetic': '/ˌstɪm.jəˈleɪ.ʃən/', 'pos': 'n.', 'definition': 'encouraging activity, growth, or interest.', 'example': 'Over-stimulation from rapid animations can cause fatigue.', 'antonym': 'Boredom'},
        {'word': 'Correlation', 'phonetic': '/ˌkɒr.əˈleɪ.ʃən/', 'pos': 'n.', 'definition': 'a mutual relationship or connection between two things.', 'example': 'The study highlighted a strong correlation between outdoor play and focus.', 'antonym': 'Independence'}
    ],
    r1_units=[
        {'main': 'According to the eight-year study, how does early screen exposure affect a child\'s <strong>executive functioning</strong> and attention?', 'personal': 'How many hours of screen time did you have during your own childhood?'},
        {'main': 'Why do scientists emphasize the difference between passive video viewing and interactive <strong>stimulation</strong>?', 'personal': 'Do you feel that your current phone habits impact your daily attention span?'},
        {'main': 'What role does parental <strong>intervention</strong> play in establishing healthy digital routines for young kids?', 'personal': 'How do you set boundaries for yourself when using digital devices?'},
        {'main': 'How can excessive <strong>sedentary</strong> behavior during early development influence long-term physical health?', 'personal': 'What physical activities help you recharge after sitting at a desk all day?'},
        {'main': 'Is there a clear <strong>correlation</strong> between early device usage and emotional <strong>regulation</strong> challenges later in school?', 'personal': 'What strategies do you use when you feel overwhelmed by digital notifications?'}
    ],
    r2_units=[
        {'main': 'Should schools implement mandatory digital detox periods to reduce students\' daily <strong>cognitive load</strong>?', 'personal': 'Would you support a total ban on smartphones in primary schools?'},
        {'main': 'How might future <strong>longitudinal</strong> studies change our understanding of virtual reality in education?', 'personal': 'How do you think technology in education will evolve over the next decade?'},
        {'main': 'What measures can parents take to ensure children stay <strong>attentive</strong> during offline family activities?', 'personal': 'What was your favorite non-digital hobby when growing up?'},
        {'main': 'Could high screen <strong>exposure</strong> alter brain development patterns in ways that current research has not yet identified?', 'personal': 'Are you concerned about how social media affects younger generations?'},
        {'main': 'What public policy <strong>intervention</strong> would best balance technological literacy with healthy child growth?', 'personal': 'If you were a regulator, what age limit would you set for personal smartphones?'}
    ],
    grammar_title='Present Perfect Continuous vs Past Simple (B1)',
    grammar_body='<p>Use the <strong>Present Perfect Continuous</strong> (<em>have been studying, has been tracking</em>) to describe ongoing research or habits starting in the past up to now: <em>"Scientists have been tracking children for eight years."</em> Use the <strong>Past Simple</strong> for completed actions: <em>"The study began in 2018."</em></p>',
    extra_action_html='''<div class="round-block bg-emerald-900 text-white p-6 rounded-xl shadow-md">
        <div class="round-header font-bold text-xl mb-2">🎤 Final Challenge: 1-Minute Scientific Advisory</div>
        <p class="text-emerald-100 text-sm leading-relaxed mb-4">Imagine you are addressing a committee of pediatricians. Deliver a concise 60-second summary advising parents on screen time rules.</p>
      </div>''',
    article_url='https://www.sciencedaily.com/releases/2026/08/260815064803.htm',
    filepath='apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-8-years-intermediate.html'
)

print("Script 1 complete")
