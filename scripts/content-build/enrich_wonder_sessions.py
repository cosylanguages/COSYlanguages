import os
import re
from bs4 import BeautifulSoup

SESSIONS_EN = {
    "is-bad-weather-gods-anger.html": {
        "warmup": """
<ul class="round-questions">
<li>Are you someone who views a wild winter storm as a cozy invitation to stay indoors, or do you feel a sense of ancient foreboding?</li>
<li>When things go wrong in your personal life, do you secretly look for external "signs" or retrograde planets to justify your distress?</li>
</ul>
""",
        "round1": """
<div class="round-type-badge">Questions</div>
<div class="round-item"><div class="round-item-main">Why are we so obsessed with interpreting sudden natural events as the personal <strong>wrath</strong> of a sky <strong>deity</strong>? Is it because we cannot tolerate a universe that is completely indifferent to us?</div>
<div class="round-item-personal">★ When you face a personal crisis, does your emotional <strong>wrath</strong> make you look for someone to blame, or do you seek quiet <strong>rationality</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main">How do we attempt to <strong>propitiate</strong> our modern fears of isolation? Do we buy things we don't need **merely** to feel safe?</div>
<div class="round-item-personal">★ What is your ultimate way of trying to <strong>propitiate</strong> a partner or close friend after a huge argument?</div>
</div>
<div class="round-item"><div class="round-item-main">When a relationship ends, why does it feel like a sudden environmental <strong>cataclysm</strong> rather than a slow, predictable change?</div>
<div class="round-item-personal">★ Have you ever survived a personal, emotional <strong>cataclysm</strong> that forced you to completely rebuild your daily routine?</div>
</div>
<div class="round-item"><div class="round-item-main">Does your family's personal <strong>mythology</strong> shape how you deal with failure, or do you rely on modern <strong>rationality</strong>?</div>
<div class="round-item-personal">★ Which ancient myth or fairy tale do you think represents your own life struggles most accurately?</div>
</div>
<div class="round-item"><div class="round-item-main">Why do city dwellers still search for cosmic <strong>omens</strong> in the sky—like a grey morning—to decide whether they should stay in bed?</div>
<div class="round-item-personal">★ Have you ever taken a minor weather coincidence as one of those positive <strong>omens</strong> to go ahead with a risky decision?</div>
</div>
<div class="round-item"><div class="round-item-main">Can we truly believe in a <strong>benevolent</strong> nature, or is nature **simply** indifferent to our human hopes and plans?</div>
<div class="round-item-personal">★ How do you find peace when you realize that the world around you is not always <strong>benevolent</strong> and supportive?</div>
</div>
<div class="round-item"><div class="round-item-main">Is our modern reliance on daily horoscopes and personality tests **merely** a form of ancient <strong>superstition</strong> packaged as science?</div>
<div class="round-item-personal">★ Do you find comfort in <strong>superstition</strong> when your plans are disrupted, or do you demand strict <strong>rationality</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main">Why do we crave <strong>anthropomorphic</strong> explanations for natural disasters, as if a storm possesses a human heart?</div>
<div class="round-item-personal">★ Have you ever given an <strong>anthropomorphic</strong> name to an inanimate object, like a car or a plant, to feel less alone?</div>
</div>
<div class="round-item"><div class="round-item-main">Does a majestic lightning storm fill you with reverential <strong>awe</strong>, or does it trigger direct survival anxiety?</div>
<div class="round-item-personal">★ What is the most <strong>awe</strong>-inspiring natural setting you have ever experienced in your travels?</div>
</div>
<div class="round-item"><div class="round-item-main">If a powerful <strong>deity</strong> controlled our relationships, would we be happier, or do we need the freedom of chaos?</div>
<div class="round-item-personal">★ Do you think your current path is guided by a higher power, or is it **precisely** what you have built yourself?</div>
</div>
""",
        "lst": """
<!-- PRIORITY COPE SCALE -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">⚡ Activity 1 — The Propitiation Scale</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
When life gets chaotic, how do you appease the universe? Tap on the modern "cataclysms" below to match them with your favorite modern "rituals" to find your emotional balance!
</p>
<div class="ranker-container" id="propitiation-ranker" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 1rem;">
<div class="rank-card" data-reason="Text Left on Read" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">💬</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Text Left on Read</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Rainy Weekend" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">🌧️</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">A Ruined Rainy Weekend</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Career setback" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">📉</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Career Setback</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Awkward interaction" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">🤐</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Awkward Encounter</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
</div>
<button class="btn-primary" onclick="resetRanking()" style="background:#9d81d9; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; cursor:pointer; font-weight:700;">Reset Appeasement 🔄</button>
</div>

<!-- COINCIDENCE DECODER -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">⚖️ Activity 2 — The Coincidence Decoder</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
Is it written in the stars, or is it just pure math? Tap on either interpretation for these daily events to read Carrie's secret thoughts!
</p>
<div class="honesty-spectrums-grid" style="display: flex; flex-direction: column; gap: 15px;">
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"Running into an ex during a storm is a cosmic sign."</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"It's just geographical probability in a small neighborhood."</button>
</div>
<div class="comment-reveal-box" id="comment-1" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, 2, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"My phone broke because of mercury retrograde."</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, 2, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I simply dropped it because I was rushing."</button>
</div>
<div class="comment-reveal-box" id="comment-2" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
</div>
</div>

<!-- CLOSING METAPHOR -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🧭 Activity 3 — The Final Decision</h4>
<div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 1rem;">
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">⚡</span><div style="font-weight:600; margin-top: 5px;">A universe where the sky has a specific plan for your drama (Angry Gods)</div></div>
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🌪️</span><div style="font-weight:600; margin-top: 5px;">A universe that is completely random and beautifully indifferent (Cold Physics)</div></div>
</div>
<p style="margin-top:1rem; text-align:center; font-weight: 600; color: #3F2B96;">Which universe brings you more comfort? Why?</p>
</div>
""",
        "round2": """
<div class="round-type-badge">Debate</div>
<div class="round-item"><div class="round-item-main">Our ancestors viewed storms as a divine, emotional conversation, <strong>although</strong> modern rationalism has reduced the sky to atmospheric pressure, stripping away all <strong>wrath</strong> and awe.</div>
<div class="round-item-personal">★ When was the last time you felt a deep, almost spiritual sense of wonder looking at the night sky?</div>
</div>
<div class="round-item"><div class="round-item-main">In older times, we personified the weather as an emotional <strong>deity</strong>; today, we **merely** view natural disasters through the cold, transactional lens of insurance liabilities.</div>
<div class="round-item-personal">★ Have you ever found yourself talking to nature or a storm as if it possessed a human mind?</div>
</div>
<div class="round-item"><div class="round-item-main">Ancient people united in elaborate rituals to propitiate their fears of nature, **whereas** modern city dwellers **simply** complain about flight delays on social media.</div>
<div class="round-item-personal">★ Does unexpected bad weather make you feel cozy and reflective, or does it trigger direct frustration?</div>
</div>
<div class="round-item"><div class="round-item-main">A sudden weather <strong>cataclysm</strong> in the past was a warning to correct moral behavior, <strong>nonetheless</strong>, we now treat it **solely** as a policy failure.</div>
<div class="round-item-personal">★ Do you feel a personal sense of guilt or responsibility when you read about global climate disasters?</div>
</div>
<div class="round-item"><div class="round-item-main">We have built climate-controlled urban bubbles, separating ourselves from the raw geographic <strong>mythology</strong> our ancestors lived by.</div>
<div class="round-item-personal">★ Would you prefer a life of perfect, artificial climate control, or do you crave the raw drama of four seasons?</div>
</div>
<div class="round-item"><div class="round-item-main">Older generations relied on natural <strong>omens</strong> to schedule their labor, **whereas** modern humans view any natural delay as an unacceptable systemic error.</div>
<div class="round-item-personal">★ How do you react when an unexpected storm completely ruins your carefully scheduled weekend?</div>
</div>
<div class="round-item"><div class="round-item-main">Ancient cultures surrendered to a non-benevolent nature, **whereas** modern technology feeds the dangerous illusion that humans can control the climate.</div>
<div class="round-item-personal">★ Do you check your smartphone weather app multiple times a day, or do you prefer to look out the window?</div>
</div>
<div class="round-item"><div class="round-item-main">We have replaced ancient <strong>superstition</strong> with scientific data; **nonetheless**, we have lost the comforting belief that everything happens for a reason.</div>
<div class="round-item-personal">★ Do you think our modern <strong>rationality</strong> has made us happier, or are we **merely** more anxious?</div>
</div>
<div class="round-item"><div class="round-item-main">Modern architecture uses brute force to ignore local winds, unlike older societies that built <strong>anthropomorphic</strong> structures that blended with the environment.</div>
<div class="round-item-personal">★ What is your favorite traditional building or interior that makes you feel safe during bad weather?</div>
</div>
<div class="round-item"><div class="round-item-main">The modern dread of rainy days is a product of indoor lifestyles; to our ancestors, rain was the ultimate symbol of <strong>awe</strong> and life.</div>
<div class="round-item-personal">★ Do you find rainy days gloomy and unmotivating, or do they bring out your creative side?</div>
</div>
"""
    },
    "do-insects-hide-when-it-rains.html": {
        "warmup": """
<ul class="round-questions">
<li>When raindrops start falling, is it your natural instinct to immediately run for shelter, or do you enjoy the sudden, chaotic shift?</li>
<li>Do you find insects' highly organized, communal lives fascinating, or does their perfect conformity terrify you?</li>
</ul>
""",
        "round1": """
<div class="round-type-badge">Questions</div>
<div class="round-item"><div class="round-item-main">Why are we so quick to <strong>evacuate</strong> our emotional commitments the moment a minor relationship storm appears on the horizon?</div>
<div class="round-item-personal">★ Have you ever decided to immediately <strong>evacuate</strong> a difficult conversation **merely** because it felt too uncomfortable?</div>
</div>
<div class="round-item"><div class="round-item-main">Does finding a cozy, temporary <strong>sanctuary</strong> during a rainstorm feel more intimate because we are forced to share a small space?</div>
<div class="round-item-personal">★ Where is your favorite physical <strong>sanctuary</strong> in your city when you need to escape the urban rush?</div>
</div>
<div class="round-item"><div class="round-item-main">Do humans build an <strong>impenetrable</strong> shield of cynicism around their hearts to avoid being hurt by others?</div>
<div class="round-item-personal">★ Who in your life has an <strong>impenetrable</strong> personality, and how do you attempt to connect with them?</div>
</div>
<div class="round-item"><div class="round-item-main">Why is an insect seeking shelter under a broad leaf such a powerful <strong>metaphor</strong> for our own search for safety in relationships?</div>
<div class="round-item-personal">★ What animal or weather pattern is the most accurate <strong>metaphor</strong> for your current emotional life?</div>
</div>
<div class="round-item"><div class="round-item-main">Are we more <strong>vulnerable</strong> to falling in love when our daily routines are disrupted by a sudden, chaotic event?</div>
<div class="round-item-personal">★ When was the last time you allowed yourself to be completely <strong>vulnerable</strong> with someone you barely knew?</div>
</div>
<div class="round-item"><div class="round-item-main">Does a sudden summer <strong>deluge</strong> wash away our sophisticated social masks, exposing the raw human underneath?</div>
<div class="round-item-personal">★ Have you ever been caught unprepared in a heavy <strong>deluge</strong>? How did you react?</div>
</div>
<div class="round-item"><div class="round-item-main">Is our survival <strong>instinct</strong> **solely** about protecting ourselves, or does it include protecting our community?</div>
<div class="round-item-personal">★ Do you trust your rational mind more than your gut <strong>instinct</strong> when making major life choices?</div>
</div>
<div class="round-item"><div class="round-item-main">Why does seeking temporary <strong>shelter</strong> in a busy café feel so much more comforting than staying in our own empty apartments?</div>
<div class="round-item-personal">★ Where do you seek <strong>shelter</strong> when you feel emotionally overwhelmed by societal expectations?</div>
</div>
<div class="round-item"><div class="round-item-main">Is there a <strong>poetic</strong> beauty in the way a city falls silent during a heavy downpour, as if everyone is holding their breath?</div>
<div class="round-item-personal">★ Do you write, draw, or listen to <strong>poetic</strong> music when you are feeling introspective on a rainy day?</div>
</div>
<div class="round-item"><div class="round-item-main">Does the highly organized <strong>communal</strong> life of an anthill show us the beauty of cooperation, or the horror of losing individuality?</div>
<div class="round-item-personal">★ Would you prefer a highly independent life, or do you crave a tight, <strong>communal</strong> living arrangement?</div>
</div>
""",
        "lst": """
<!-- COMMUNE VS LEAF -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🐜 Activity 1 — The Hive Mind Test</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
In a storm, do you stick with the colony or fly solo? Tap on the choices below to assemble your personal storm-survival profile!
</p>
<div class="ranker-container" id="propitiation-ranker" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 1rem;">
<div class="rank-card" data-reason="Group Chat" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">👥</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Check the Group Chat</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Silent Mode" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">📴</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Go completely offline</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Cozy up" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">☕</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Hide in a crowded café</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
</div>
<button class="btn-primary" onclick="resetRanking()" style="background:#9d81d9; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; cursor:pointer; font-weight:700;">Reset Profile 🔄</button>
</div>

<!-- COMMUNE SPECTRUM -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">⚖️ Activity 2 — The Hive vs Leaf Analyzer</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
Where lies your ultimate sanctuary? Tap a style below to reveal Carrie's diagnostic commentary on your survival instincts!
</p>
<div class="honesty-spectrums-grid" style="display: flex; flex-direction: column; gap: 15px;">
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I need a crowded, warm hive (Communal comfort)"</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I need a solitary, dry leaf (Isolated peace)"</button>
</div>
<div class="comment-reveal-box" id="comment-1" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
</div>
</div>

<!-- CLOSING METAPHOR -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🧭 Activity 3 — The Final Decision</h4>
<div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 1rem;">
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🐜</span><div style="font-weight:600; margin-top: 5px;">The Cozy Anthill (Communal Dependency)</div></div>
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🦋</span><div style="font-weight:600; margin-top: 5px;">The Solitary Leaf (Exposed Autonomy)</div></div>
</div>
<p style="margin-top:1rem; text-align:center; font-weight: 600; color: #3F2B96;">When a life storm hits, do you seek comfort in a communal hive or a solitary leaf? Why?</p>
</div>
""",
        "round2": """
<div class="round-type-badge">Debate</div>
<div class="round-item"><div class="round-item-main">When an emotional storm hits, we are expected to stay and perform, **whereas** a natural <strong>instinct</strong> tells us to immediately <strong>evacuate</strong> and seek quiet <strong>shelter</strong>.</div>
<div class="round-item-personal">★ How do you set boundaries when you need to disappear from social or professional life?</div>
</div>
<div class="round-item"><div class="round-item-main">Finding a true psychological <strong>sanctuary</strong> in another person has become a rare luxury in a world that values hyper-independence.</div>
<div class="round-item-personal">★ Do you have a physical place where you go to escape stress and feel safe?</div>
</div>
<div class="round-item"><div class="round-item-main">We build <strong>impenetrable</strong> emotional walls to protect ourselves from being hurt, only to find that we've locked out the very connection we crave.</div>
<div class="round-item-personal">★ Is it easy or hard for you to let new people into your inner circle?</div>
</div>
<div class="round-item"><div class="round-item-main">A rainy window pane is the perfect visual <strong>metaphor</strong> for our modern relationships — close enough to watch, but forever separated by glass.</div>
<div class="round-item-personal">★ Do you keep a private diary or journal to process your thoughts?</div>
</div>
<div class="round-item"><div class="round-item-main">Showing your raw, <strong>vulnerable</strong> side is like a butterfly opening its wings in a storm; it is dangerous, but it is the only way to fly.</div>
<div class="round-item-personal">★ Who is the one person you can be completely raw and <strong>vulnerable</strong> with?</div>
</div>
<div class="round-item"><div class="round-item-main">An unexpected <strong>deluge</strong> of emotions can wash away months of carefully built composure in a single, overwhelming afternoon.</div>
<div class="round-item-personal">★ Do you feel guilty when you spend a rainy day doing absolutely nothing?</div>
</div>
<div class="round-item"><div class="round-item-main">We rely so heavily on external comfort that our inner survival <strong>instinct</strong> has grown soft, leaving us panicked by any sudden life change.</div>
<div class="round-item-personal">★ What is the most physically challenging environment you have ever stayed in?</div>
</div>
<div class="round-item"><div class="round-item-main">It is tempting to run for temporary <strong>shelter</strong> in casual connections, but true warmth is only found when we weather the storm together.</div>
<div class="round-item-personal">★ Do you prefer resolving disagreements over text or in person?</div>
</div>
<div class="round-item"><div class="round-item-main">There is something beautifully <strong>poetic</strong> about a city that slows down during a downpour, forcing us to pause our endless rushing.</div>
<div class="round-item-personal">★ Do you find your mood and energy levels changing drastically with the seasons?</div>
</div>
<div class="round-item"><div class="round-item-main">Just like ants in an anthill, we are bound by <strong>communal</strong> expectations, but unlike them, we often dream of breaking free from the colony.</div>
<div class="round-item-personal">★ How do you usually respond when a friend suddenly shuts down or withdraws?</div>
</div>
"""
    },
    "ugly-produce-anti-waste.html": {
        "warmup": """
<ul class="round-questions">
<li>Would you ever buy a misshapen, bruised tomato simply because of its price, or do you demand visual perfection even in your food?</li>
<li>Do we filter our romantic partners using the same aesthetic criteria we use when selecting vegetables in a supermarket?</li>
</ul>
""",
        "round1": """
<div class="round-type-badge">Questions</div>
<div class="round-item"><div class="round-item-main">Why are we **utterly** repulsed by minor physical flaws in organic produce, yet we expect ourselves to accept our partners' psychological imperfections?</div>
<div class="round-item-personal">★ When was the last time you felt **utterly** critical of a partner's minor flaw on the first date?</div>
</div>
<div class="round-item"><div class="round-item-main">Is a slightly blemished apple **perfectly** acceptable to you, or do you feel a subconscious anxiety that blemish represents decay?</div>
<div class="round-item-personal">★ What is one personal habit of yours that is **perfectly** imperfect, yet you refuse to change it?</div>
</div>
<div class="round-item"><div class="round-item-main">Why are modern consumers **highly** sensitive to supermarket aesthetics, while our ancestors celebrated any harvest regardless of its shape?</div>
<div class="round-item-personal">★ Do you consider yourself **highly** visual when choosing products, or do you value substance over form?</div>
</div>
<div class="round-item"><div class="round-item-main">Are you **deeply** concerned about the scale of global organic waste, or do you view it **simply** as an inevitable byproduct of modern logistics?</div>
<div class="round-item-personal">★ Have you ever felt **deeply** connected to a social cause, or do you prefer to focus on your immediate personal circle?</div>
</div>
<div class="round-item"><div class="round-item-main">Is purchasing 'ugly' produce an **exceptionally** smart way to reduce anti-waste, or is it **merely** a trendy moral decoy?</div>
<div class="round-item-personal">★ What is the most **exceptionally** creative way you have ever recycled or reused something to avoid waste?</div>
</div>
<div class="round-item"><div class="round-item-main">Why has natural, unmodified food become such an **elusive** luxury in metropolitan cities like New York?</div>
<div class="round-item-personal">★ How do you find your calm amidst the **elusive** peace of a bustling urban center?</div>
</div>
<div class="round-item"><div class="round-item-main">Do supermarkets **prioritize** corporate profits over environmental ethics when they discard tons of edible vegetables?</div>
<div class="round-item-personal">★ How do you **prioritize** your spending when choosing between cheap convenience and organic, ethical options?</div>
</div>
<div class="round-item"><div class="round-item-main">When a company advertises its anti-waste campaigns, do you suspect it's **merely** a clever **pretext** for marketing?</div>
<div class="round-item-personal">★ Have you ever used an environmental **pretext** **solely** to avoid doing something you disliked?</div>
</div>
<div class="round-item"><div class="round-item-main">Does the artificial **scarcity** of perfect produce make us feel that we are eating something more premium and elite?</div>
<div class="round-item-personal">★ How do you deal with the psychological sense of **scarcity** in your own daily routines?</div>
</div>
<div class="round-item"><div class="round-item-main">Do you **reckon** that future generations will look back at our food waste with complete disgust and **apathy**?</div>
<div class="round-item-personal">★ Do you **reckon** you could live a zero-waste lifestyle for a single week?</div>
</div>
""",
        "lst": """
<!-- UGLY VEGGIE PROFILE -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🍅 Activity 1 — The Ugly Veggie dating Match</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
We demand flawless partners. Tap on the misshapen veggies below to see their 'dating profiles' and decide if you'd swipe right!
</p>
<div class="ranker-container" id="propitiation-ranker" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 1rem;">
<div class="rank-card" data-reason="Misshapen Carrot" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">🥕</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Twisted Carrot (Flexible but weird)</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Bumpy Potato" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">🥔</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Bumpy Potato (Messy but sweet)</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
</div>
<button class="btn-primary" onclick="resetRanking()" style="background:#9d81d9; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; cursor:pointer; font-weight:700;">Reset Swipe 🔄</button>
</div>

<!-- COMPASSION MATRIX -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">⚖️ Activity 2 — The Surface vs Organic Filter</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
Are we aesthetic snobs? Tap below to select where you filter out flaws, and read Carrie's diagnostic commentary!
</p>
<div class="honesty-spectrums-grid" style="display: flex; flex-direction: column; gap: 15px;">
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I filter on visual perfection (Aesthetic safety)"</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I embrace organic, messy realities (Organic truth)"</button>
</div>
<div class="comment-reveal-box" id="comment-1" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
</div>
</div>

<!-- CLOSING METAPHOR -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🧭 Activity 3 — The Final Decision</h4>
<div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 1rem;">
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">👑</span><div style="font-weight:600; margin-top: 5px;">A curated, visually perfect life of surface aesthetics. (Curated Safety)</div></div>
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🌱</span><div style="font-weight:600; margin-top: 5px;">An asymmetrical, organic, messy life of raw flaws. (Misshapen Truth)</div></div>
</div>
<p style="margin-top:1rem; text-align:center; font-weight: 600; color: #3F2B96;">Which life would you rather choose? Why?</p>
</div>
""",
        "round2": """
<div class="round-type-badge">Debate</div>
<div class="round-item"><div class="round-item-main">In the future, supermarkets will be legally forced to sell misshapen food, **simply** because resource <strong>scarcity</strong> will make visual snobbery **utterly** unsustainable.</div>
<div class="round-item-personal">★ Do you think we are **highly** spoiled by the endless availability of perfect goods?</div>
</div>
<div class="round-item"><div class="round-item-main">The Instagram-aesthetic has trained us to reject organic blemishes, creating a dangerous illusion that life must be **perfectly** curated at all times.</div>
<div class="round-item-personal">★ Have you ever felt **deeply** inadequate after comparing your real life with someone's flawless social media feed?</div>
</div>
<div class="round-item"><div class="round-item-main">One day, we will look back at our food waste and realize it was **merely** a protective <strong>armor</strong> to hide our collective fear of physical decay.</div>
<div class="round-item-personal">★ Why do we **prioritize** superficial beauty when it comes to things we **simply** consume?</div>
</div>
<div class="round-item"><div class="round-item-main">True intimacy cannot survive when we screen potential partners on the **pretext** of minor aesthetic or lifestyle mismatch.</div>
<div class="round-item-personal">★ Have you ever brushed off a good person **solely** due to a superficial first impression?</div>
</div>
<div class="round-item"><div class="round-item-main">Supermarkets use plastic packaging as a stylized **decoy** to hide the organic, asymmetrical nature of the food they sell.</div>
<div class="round-item-personal">★ Do you prefer raw, unpackaged market vegetables, or do you feel safer with standardized, wrapped produce?</div>
</div>
<div class="round-item"><div class="round-item-main">In a highly optimized city, finding a space that embraces messy, unstructured growth has become an **elusive** luxury.</div>
<div class="round-item-personal">★ Do you feel more at peace in a perfectly manicured French garden or a wild, untamed forest?</div>
</div>
<div class="round-item"><div class="round-item-main">To reduce global waste, societies must learn to **prioritize** environmental survival over immediate consumer comfort.</div>
<div class="round-item-personal">★ Would you accept a higher tax on non-recyclable packaging, or do you **reckon** it is the government's job to solve?</div>
</div>
<div class="round-item"><div class="round-item-main">Most economists **reckon** that the smarter our waste management systems become, the less personal responsibility citizens will feel.</div>
<div class="round-item-personal">★ Do you actively sort your trash, or do you feel a creeping **apathy** about your personal impact?</div>
</div>
<div class="round-item"><div class="round-item-main">Our obsession with food expiration dates is **merely** a modern <strong>superstition</strong> that has replaced our natural sensory instincts.</div>
<div class="round-item-personal">★ Do you trust your nose and taste buds, or do you strictly follow the printed date on the box?</div>
</div>
<div class="round-item"><div class="round-item-main">We have built a highly sanitized lifestyle to escape the raw truth of nature, but we have **simply** ended up with emotional **apathy**.</div>
<div class="round-item-personal">★ How do you reconnect with your raw, organic self when you feel completely numb?</div>
</div>
"""
    },
    "why-do-we-try-to-relate-to-adhd.html": {
        "warmup": """
<ul class="round-questions">
<li>Do you find it virtually impossible to focus on a single task without checking your smartphone, or can you barely tolerate distractions?</li>
<li>When you read about psychological symptoms online, do you immediately relate to them, or do you maintain strict skepticism?</li>
</ul>
""",
        "round1": """
<div class="round-type-badge">Questions</div>
<div class="round-item"><div class="round-item-main">Why are we so **highly** anxious to adopt clinical labels for our routine struggles? Is it a convenient **pretext** to avoid personal accountability?</div>
<div class="round-item-personal">★ Have you ever blamed a bad day on your "temperament" **solely** to avoid apologizing for your behavior?</div>
</div>
<div class="round-item"><div class="round-item-main">Is staying focused on a long book **virtually** impossible today, or do we **merely** lack the patience we **used to** have?</div>
<div class="round-item-personal">★ When was the last time you read a full page without reaching for your smartphone?</div>
</div>
<div class="round-item"><div class="round-item-main">Why do we experience a creeping sense of **apathy** toward our actual responsibilities while feeling **highly** motivated by digital distractions?</div>
<div class="round-item-personal">★ How do you fight off a wave of professional **apathy** when your schedule is overloaded?</div>
</div>
<div class="round-item"><div class="round-item-main">Is self-diagnosing on social media a stylized **decoy** to distract ourselves from the real, unstructured dilemmas in our lives?</div>
<div class="round-item-personal">★ Have you ever used a minor physical symptom as a **decoy** to get out of an awkward social event?</div>
</div>
<div class="round-item"><div class="round-item-main">Why has quiet, undistracted time become such an **elusive** luxury—is it **precisely** because our attention has been commercialized?</div>
<div class="round-item-personal">★ How do you create an **elusive** bubble of stillness in your daily routine?</div>
</div>
<div class="round-item"><div class="round-item-main">Do we **prioritize** immediate sensory stimulation over deep, long-term goals **simply** because our brains have gotten **used to** instant rewards?</div>
<div class="round-item-personal">★ How do you decide which tasks to **prioritize** when your mind feels completely fragmented?</div>
</div>
<div class="round-item"><div class="round-item-main">When someone claims they cannot focus on the **pretext** of "burnout", do you suspect they are **merely** bored?</div>
<div class="round-item-personal">★ Have you ever used the **pretext** of being exhausted just to escape an awkward conversation?</div>
</div>
<div class="round-item"><div class="round-item-main">Does the constant **scarcity** of deep attention make our rare, focused conversations feel **particularly** precious?</div>
<div class="round-item-personal">★ Do you struggle with a sense of time **scarcity** even on your days off?</div>
</div>
<div class="round-item"><div class="round-item-main">Do you **reckon** that digital technology has freed our hours, or has it **simply** fragmented our minds?</div>
<div class="round-item-personal">★ Do you **reckon** you would be more creative in a slower, less connected era?</div>
</div>
<div class="round-item"><div class="round-item-main">Can a clinical label act as a protective **armor** against the harsh, competitive demands of modern society?</div>
<div class="round-item-personal">★ What kind of mental **armor** do you wear when you feel you cannot meet people's expectations?</div>
</div>
""",
        "lst": """
<!-- DISTRACTION CHECKLIST -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🧠 Activity 1 — The Distraction Checklist</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
Are you clinical, or just modern? Tap the symptoms below that you have experienced today to calculate your attention profile!
</p>
<div class="ranker-container" id="propitiation-ranker" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 1rem;">
<div class="rank-card" data-reason="Multiple Tabs" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">📂</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Over 10 browser tabs open</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Double Screen" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">📺</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Scrolling while watching TV</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
<div class="rank-card" data-reason="Forgot purpose" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">🚪</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">Forgot why I entered a room</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
</div>
<button class="btn-primary" onclick="resetRanking()" style="background:#9d81d9; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; cursor:pointer; font-weight:700;">Reset Checklist 🔄</button>
</div>

<!-- DIAGNOSIS ANALYZER -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">⚖️ Activity 2 — Clinical Label vs Modern Environment</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
Why can't you focus? Tap an explanation below to reveal Carrie's diagnostic entry on our fragmented lives!
</p>
<div class="honesty-spectrums-grid" style="display: flex; flex-direction: column; gap: 15px;">
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"I have a biochemical attention deficit (Clinical perspective)"</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, 1, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">"My environment has been optimized to distract me (Systemic perspective)"</button>
</div>
<div class="comment-reveal-box" id="comment-1" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
</div>
</div>

<!-- CLOSING METAPHOR -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">🧭 Activity 3 — The Final Decision</h4>
<div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 1rem;">
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🛡️</span><div style="font-weight:600; margin-top: 5px;">A clinical label that explains your boundaries. (The Protective Armor)</div></div>
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">🔓</span><div style="font-weight:600; margin-top: 5px;">A self-designed discipline without acronyms. (The Raw Autonomy)</div></div>
</div>
<p style="margin-top:1rem; text-align:center; font-weight: 600; color: #3F2B96;">Which path would you rather walk? Why?</p>
</div>
""",
        "round2": """
<div class="round-type-badge">Debate</div>
<div class="round-item"><div class="round-item-main">Future societies will treat distraction as an environmental hazard **rather than** a personal cognitive failure.</div>
<div class="round-item-personal">★ Do you think we are **highly** addicted to the feeling of cognitive overload?</div>
</div>
<div class="round-item"><div class="round-item-main">The term "ADHD" has become **merely** a trendy social **decoy** utilized by neurotypical adults to excuse poor planning.</div>
<div class="round-item-personal">★ Have you ever felt that trendy acronyms are **simply** oversimplifying deep, human dilemmas?</div>
</div>
<div class="round-item"><div class="round-item-main">In a highly optimized world, achieving uninterrupted, quiet boredom will become the most **elusive** mental luxury.</div>
<div class="round-item-personal">★ Would you pay for a service that guarantees **elusive**, distraction-free time, or can you create it **simply** on your own?</div>
</div>
<div class="round-item"><div class="round-item-main">To survive the upcoming attention crisis, future corporations must learn to **prioritize** slow, offline workflows over hyper-responsiveness.</div>
<div class="round-item-personal">★ Would you accept a lower salary if a company promised to **prioritize** your free time and mental peace?</div>
</div>
<div class="round-item"><div class="round-item-main">True friendship cannot survive when encounters are scheduled weeks in advance on the **pretext** of professional efficiency.</div>
<div class="round-item-personal">★ Do you feel that scheduling a meet-up weeks in advance is **merely** a cold **pretext**, or is it a realistic necessity for adults?</div>
</div>
<div class="round-item"><div class="round-item-main">Future generations will view our obsession with multitasking as a collective psychological disease **rather than** a career asset.</div>
<div class="round-item-personal">★ Do you think we are **particularly** addicted to the feeling of being busy because it makes us feel important?</div>
</div>
<div class="round-item"><div class="round-item-main">Most futurists **reckon** that the smarter our devices become, the less patience we will have for slow, unstructured human interactions.</div>
<div class="round-item-personal">★ Do you **reckon** that instant digital replies have **simply** ruined our ability to enjoy a slow-paced relationship?</div>
</div>
<div class="round-item"><div class="round-item-main">In our relentless pursuit of optimization, we are heading toward a future of complete sensory and emotional **apathy** where nothing makes our hearts beat faster.</div>
<div class="round-item-personal">★ How can we **precisely** combat the creeping **apathy** of modern life if we are always running after the next task?</div>
</div>
<div class="round-item"><div class="round-item-main">Our ancestors viewed deep attention as a spiritual practice, **whereas** modern education has reduced it to a clinical commodity.</div>
<div class="round-item-personal">★ Have you ever experienced a state of "flow" where you forgot about time entirely?</div>
</div>
<div class="round-item"><div class="round-item-main">A clinical label is the perfect **armor** for a modern adult who **simply** wants to say "I cannot do this anymore" to a demanding boss.</div>
<div class="round-item-personal">★ Have you ever wanted to say "no" but found yourself searching for a **bulletproof** excuse **solely** to be polite?</div>
</div>
"""
    }
}

COMMENTS_JS = {
    "is-bad-weather-gods-anger.html": """
  const honestyComments = {
    1: {
      polite: "✍️ Carrie's thought: 'How comforting to think that the giant grey sky has put on a lightning show just for your relationship drama. Talk about a star-studded cast for a very personal play.'",
      raw: "✍️ Carrie's thought: 'Ouch. Cold, flat, and extremely sober. It cuts the drama, but doesn't it leave New York feeling a little too quiet?'"
    },
    2: {
      polite: "✍️ Carrie's thought: 'Blaming the stars is the ultimate velvet glove. It's polite, highly mystical, and perfectly unprovable.'",
      raw: "✍️ Carrie's thought: 'Simple gravity, simple human error. Sometimes a broken screen is just a broken screen, no cosmic alignment required.'"
    }
  };
""",
    "do-insects-hide-when-it-rains.html": """
  const honestyComments = {
    1: {
      polite: "✍️ Carrie's thought: 'A crowded hive, a busy coffee shop, a room full of warm bodies. It keeps the cold drops off, but are you actually connecting, or just hiding in the noise?'",
      raw: "✍️ Carrie's thought: 'A single dry leaf, a quiet apartment, a silenced phone. It is peaceful, safe, and dry. But is it a sanctuary, or just a beautiful, isolated cage?'"
    }
  };
""",
    "ugly-produce-anti-waste.html": """
  const honestyComments = {
    1: {
      polite: "✍️ Carrie's thought: 'Ah, the supermarket shelf of life. Standardized, shiny, and completely predictable. Perfect for a picture-perfect display, but does it have any real flavor?'",
      raw: "✍️ Carrie's thought: 'Embracing the messy bumps, the weird curves, the organic truth. It is asymmetrical, unpredictable, and extremely real. But are we brave enough to buy it?'"
    }
  };
""",
    "why-do-we-try-to-relate-to-adhd.html": """
  const honestyComments = {
    1: {
      polite: "✍️ Carrie's thought: 'A clinical label, a safe, biochemical defense. It provides a community, a name for the chaos, and a very soft armor. But does it cure the notifications?'",
      raw: "✍️ Carrie's thought: 'A structural matrix optimized to steal your attention and monetize your distraction. The problem isn't in your head, it's on your screen.'"
    }
  };
"""
}

def enrich_session(filepath, key):
    data = SESSIONS_EN[key]
    print(f"Reading {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # Update Warm-up
    warmup_block = soup.find(id="s-warm")
    if warmup_block:
        body = warmup_block.find(class_="round-body")
        if body:
            # Clear body except header if there is one
            body.clear()
            body.append(BeautifulSoup(data["warmup"], "html.parser"))

    # Update Round 1
    r1_block = soup.find(class_="round-1")
    if r1_block:
        body = r1_block.find(class_="round-body")
        if body:
            body.clear()
            body.append(BeautifulSoup(data["round1"], "html.parser"))

    # Update Let's Speak Together
    lst_block = soup.find(id="s-lst")
    if lst_block:
        body = lst_block.find(class_="round-body")
        if body:
            body.clear()
            body.append(BeautifulSoup(data["lst"], "html.parser"))

    # Update Round 2
    r2_block = soup.find(class_="round-2")
    if r2_block:
        body = r2_block.find(class_="round-body")
        if body:
            body.clear()
            body.append(BeautifulSoup(data["round2"], "html.parser"))

    # Update Script Tag to include custom logic
    script_tag = soup.find("script", string=re.compile("quotes"))
    if script_tag:
        script_content = script_tag.string
        # Let's clean and inject priority ranker and honesty comments script
        new_script = f"""
document.addEventListener('DOMContentLoaded', () => {{
  const quotes = [
    '"Is \\'I have no time\\' the single most polite way of saying \\'You simply do not make my heart beat fast enough\\'?"',
    '"We complain about packed schedules and relentless rush, but maybe we secretly crave the chaos to avoid sitting quietly with our own desires."',
    '"If we can magically find two hours to binge-watch a new TV series, do we really get to claim that we are too busy to call a friend?"'
  ];
  let index = 0;
  const quoteText = document.getElementById('diary-quote');
  const nextBtn = document.getElementById('diary-next-btn');

  if (nextBtn && quoteText) {{
    nextBtn.addEventListener('click', () => {{
      index = (index + 1) % quotes.length;
      quoteText.innerText = quotes[index];
    }});
  }}

  // Priority Ranker Logic
  let currentRank = 1;
  window.toggleRankItem = function(card) {{
    const badge = card.querySelector('.rank-badge');
    if (card.classList.contains('ranked')) {{
      return;
    }}
    card.classList.add('ranked');
    card.style.borderColor = '#3F2B96';
    card.style.background = '#EEEDFE';
    badge.innerText = currentRank;
    badge.style.background = '#3F2B96';
    badge.style.color = '#fff';
    currentRank++;
  }};

  window.resetRanking = function() {{
    currentRank = 1;
    const cards = document.querySelectorAll('.rank-card');
    cards.forEach(card => {{
      card.classList.remove('ranked');
      card.style.borderColor = 'var(--border)';
      card.style.background = '#fff';
      const badge = card.querySelector('.rank-badge');
      badge.innerText = '?';
      badge.style.background = '#e2e8f0';
      badge.style.color = '#4a5568';
    }});
  }};

  // Honesty Spectrum logic
{COMMENTS_JS[key]}

  window.revealHonestyComment = function(btn, pairId, type) {{
    // Reset other button styles in the same pair
    const pairContainer = btn.closest('.honesty-pair');
    const buttons = pairContainer.querySelectorAll('.honesty-btn');
    buttons.forEach(b => {{
      b.style.background = 'transparent';
      b.style.color = '#3F2B96';
    }});

    // Highlight the clicked button
    btn.style.background = '#3F2B96';
    btn.style.color = 'white';

    const commentBox = pairContainer.querySelector('.comment-reveal-box');
    if (commentBox) {{
      commentBox.innerText = honestyComments[pairId][type];
      commentBox.style.marginTop = '1rem';
      commentBox.style.maxHeight = '200px';
    }}
  }};
}});
"""
        script_tag.string = new_script

    print(f"Writing {filepath}...")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

def main():
    en_dir = "events/sessions/i-couldnt-help-but-wonder/"
    for filename in SESSIONS_EN.keys():
        filepath = os.path.join(en_dir, filename)
        if os.path.exists(filepath):
            enrich_session(filepath, filename)

if __name__ == "__main__":
    main()
