import os

DOMAINS = [
    {
        "num": 1,
        "id": "dom-1",
        "title": "Courtesy &amp; Communication",
        "emoji": "💬",
        "goal": "First Contact &amp; Fundamental Dialogue",
        "desc": "The starting point for every beginner. Unlocks greetings, politeness, digital actions, and core question words required on Day 1.",
        "milestone": "Can greet others, ask basic question-word queries (Who/What/Where), perform polite requests, and handle initial contact.",
        "chains": [
            {"id": 1, "title": "Greetings", "items": ["👋 Hello", "🚪 Goodbye"], "rel": "≠"},
            {"id": 2, "title": "Politeness", "items": ["🙏 Please", "💐 Thank you"], "rel": "≠"},
            {"id": 3, "title": "Confirmation", "items": ["✅ Yes", "❌ No"], "rel": "≠"},
            {"id": 4, "title": "Inquiry", "items": ["❓ Ask", "💡 Answer"], "rel": "≠"},
            {"id": 5, "title": "Oral Communication", "items": ["👂 Listen", "🗣️ Speak"], "rel": "≠"},
            {"id": 6, "title": "Literacy", "items": ["📖 Read", "✍️ Write"], "rel": "≠"},
            {"id": 7, "title": "Phone Call", "items": ["📱 Call", "💬 Talk", "🤙 Hang up"], "rel": "➔"},
            {"id": 8, "title": "Digital Message", "items": ["💻 Open", "⌨️ Type", "✉️ Send"], "rel": "➔"},
            {"id": 9, "title": "Power Control", "items": ["🔌 Turn on", "💡 Turn off"], "rel": "≠"},
            {"id": 10, "title": "Question Primitives", "items": ["❓ Who", "What", "Where", "When", "Why 🧐"], "rel": "➔"}
        ]
    },
    {
        "num": 2,
        "id": "dom-2",
        "title": "People, Family &amp; Identity",
        "emoji": "👥",
        "goal": "Self &amp; Social Connections",
        "desc": "Moves from greetings into personal identity—enabling learners to introduce themselves, state their age group, and describe family relationships.",
        "milestone": "Can introduce oneself and others, state age categories, and identify core family relationships.",
        "chains": [
            {"id": 11, "title": "Pronouns &amp; Group", "items": ["🙋 Me", "🫵 You", "👥 Us"], "rel": "➔"},
            {"id": 12, "title": "Male Lifecycle", "items": ["👦 Boy", "👨 Man"], "rel": "➔"},
            {"id": 13, "title": "Female Lifecycle", "items": ["👧 Girl", "👩 Woman"], "rel": "➔"},
            {"id": 14, "title": "Gender Contrast", "items": ["👨 Man", "👩 Woman"], "rel": "≠"},
            {"id": 15, "title": "Age Growth", "items": ["👶 Baby", "🧒 Child", "🧑 Adult"], "rel": "➔"},
            {"id": 16, "title": "Age Spectrum", "items": ["👶 Young", "👵 Old"], "rel": "≠"},
            {"id": 17, "title": "Spouses", "items": ["🤵 Husband", "👰 Wife"], "rel": "≠"},
            {"id": 18, "title": "Siblings", "items": ["👦 Brother", "👧 Sister"], "rel": "≠"},
            {"id": 19, "title": "Family Tree", "items": ["👴 Grandparents", "👨‍👩‍👧 Parents", "🧒 Children"], "rel": "➔"},
            {"id": 20, "title": "Social Relations", "items": ["🤝 Friend", "👤 Stranger"], "rel": "≠"}
        ]
    },
    {
        "num": 3,
        "id": "dom-3",
        "title": "Time, Calendar &amp; Sequence",
        "emoji": "⏰",
        "goal": "Temporal Grounding &amp; Scheduling",
        "desc": "Anchors actions in time, navigation of calendars, frequency expressions, and event sequencing.",
        "milestone": "Can tell relative time, specify days/seasons, set schedules, and sequence events logically.",
        "chains": [
            {"id": 21, "title": "Immediate Timeline", "items": ["⏳ Before", "⏱️ Now", "⌛ After"], "rel": "➔"},
            {"id": 22, "title": "Time of Day", "items": ["🌅 Morning", "☀️ Afternoon", "🌆 Evening", "🌙 Night"], "rel": "➔"},
            {"id": 23, "title": "Relative Days", "items": ["⏮️ Yesterday", "🔴 Today", "⏭️ Tomorrow"], "rel": "➔"},
            {"id": 24, "title": "Duration Units", "items": ["⏱️ Minute", "⏰ Hour", "📅 Day"], "rel": "➔"},
            {"id": 25, "title": "Weekly Rhythm", "items": ["🗓️ Weekday", "🥳 Weekend"], "rel": "➔"},
            {"id": 26, "title": "Four Seasons", "items": ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"], "rel": "➔"},
            {"id": 27, "title": "Time Horizons", "items": ["📜 Past", "📍 Present", "🔮 Future"], "rel": "➔"},
            {"id": 28, "title": "Sequential Order", "items": ["1️⃣ First", "2️⃣ Next", "🏁 Last"], "rel": "➔"},
            {"id": 29, "title": "Speed Scale", "items": ["🐢 Slow", "🚶 Normal", "🚀 Fast"], "rel": "➔"},
            {"id": 30, "title": "Frequency Spectrum", "items": ["🔄 Always", "🔀 Sometimes", "🚫 Never"], "rel": "➔"}
        ]
    },
    {
        "num": 4,
        "id": "dom-4",
        "title": "Daily Routine &amp; Actions",
        "emoji": "🌅",
        "goal": "Life Habits &amp; Physical Controls",
        "desc": "Combines time and identity to describe personal habits, work schedules, and physical operational controls.",
        "milestone": "Can describe a full daily routine from waking to sleeping and manage basic physical action controls.",
        "chains": [
            {"id": 31, "title": "Morning Wakeup", "items": ["⏰ Wake up", "🛏️ Get up"], "rel": "➔"},
            {"id": 32, "title": "Hygiene", "items": ["🧼 Wash", "🪥 Brush teeth"], "rel": "➔"},
            {"id": 33, "title": "Clothing Actions", "items": ["👔 Put on", "🧥 Take off"], "rel": "≠"},
            {"id": 34, "title": "Workday Rhythm", "items": ["💼 Start work", "☕ Break", "🏠 Finish work"], "rel": "➔"},
            {"id": 35, "title": "Evening Transition", "items": ["🏠 Go home", "🛋️ Relax"], "rel": "➔"},
            {"id": 36, "title": "Rest Cycle", "items": ["😴 Sleep", "⏰ Wake up"], "rel": "≠"},
            {"id": 37, "title": "Execution Control", "items": ["▶️ Start", "⏹️ Stop"], "rel": "≠"},
            {"id": 38, "title": "Access Control", "items": ["🔓 Open", "🔒 Close"], "rel": "≠"},
            {"id": 39, "title": "Cleanliness State", "items": ["✨ Clean", "🧹 Dirty"], "rel": "≠"},
            {"id": 40, "title": "Moisture State", "items": ["🌵 Dry", "💧 Wet"], "rel": "≠"}
        ]
    },
    {
        "num": 5,
        "id": "dom-5",
        "title": "Home &amp; Living Spaces",
        "emoji": "🏡",
        "goal": "Physical Environment &amp; Living Quarters",
        "desc": "Focuses on immediate surroundings—naming house types, rooms, furniture, and indoor/outdoor boundaries.",
        "milestone": "Can describe domestic spaces, name rooms and furniture, and specify indoor or outdoor locations.",
        "chains": [
            {"id": 41, "title": "Housing Types", "items": ["🏠 House", "🏢 Apartment"], "rel": "≠"},
            {"id": 42, "title": "Home Entry &amp; Rooms", "items": ["🚪 Door", "🛋️ Living room", "🛏️ Bedroom"], "rel": "➔"},
            {"id": 43, "title": "Dining Quarters", "items": ["🍳 Kitchen", "🍽️ Dining room"], "rel": "➔"},
            {"id": 44, "title": "Spatial Location", "items": ["🛋️ Inside", "🌳 Outside"], "rel": "≠"},
            {"id": 45, "title": "Basic Furniture", "items": ["🪵 Table", "🪑 Chair"], "rel": "≠"},
            {"id": 46, "title": "Rest Furniture", "items": ["🛏️ Bed", "💤 Sleep"], "rel": "➔"},
            {"id": 47, "title": "Security Objects", "items": ["🔑 Key", "🔒 Lock"], "rel": "➔"},
            {"id": 48, "title": "Apertures", "items": ["🪟 Window", "🚪 Door"], "rel": "≠"},
            {"id": 49, "title": "Room Structure", "items": ["🧱 Floor", "🏠 Ceiling"], "rel": "≠"},
            {"id": 50, "title": "Illumination", "items": ["💡 Light", "🌙 Dark"], "rel": "≠"}
        ]
    },
    {
        "num": 6,
        "id": "dom-6",
        "title": "Food, Drink &amp; Dining",
        "emoji": "🍽️",
        "goal": "Survival Dining &amp; Taste Communication",
        "desc": "Essential survival capability for ordering meals, expressing appetite, describing basic food types, and dining out.",
        "milestone": "Can navigate café and restaurant interactions, order food/drinks, and communicate dining preferences.",
        "chains": [
            {"id": 51, "title": "Appetite Flow", "items": ["😋 Hungry", "🍽️ Eat", "🫃 Full"], "rel": "➔"},
            {"id": 52, "title": "Daily Meals", "items": ["🥣 Breakfast", "🥗 Lunch", "🍲 Dinner"], "rel": "➔"},
            {"id": 53, "title": "Culinary Sequence", "items": ["🍳 Cook", "🍽️ Eat", "🧽 Wash dishes"], "rel": "➔"},
            {"id": 54, "title": "Produce Categories", "items": ["🍎 Fruit", "🥦 Vegetable"], "rel": "≠"},
            {"id": 55, "title": "Protein Staples", "items": ["🥩 Meat", "🐟 Fish"], "rel": "≠"},
            {"id": 56, "title": "Food Temperature", "items": ["🔥 Hot", "🧊 Cold"], "rel": "≠"},
            {"id": 57, "title": "Seasoning Contrast", "items": ["🧂 Salt", "🍬 Sugar"], "rel": "≠"},
            {"id": 58, "title": "Flavor Spectrum", "items": ["🍰 Sweet", "🍋 Sour"], "rel": "≠"},
            {"id": 59, "title": "Hot Beverages", "items": ["☕ Coffee", "🍵 Tea"], "rel": "≠"},
            {"id": 60, "title": "Dining Drinks", "items": ["🍷 Wine", "🍺 Beer"], "rel": "≠"}
        ]
    },
    {
        "num": 7,
        "id": "dom-7",
        "title": "Shopping &amp; Money",
        "emoji": "🛒",
        "goal": "Commercial Autonomy &amp; Payments",
        "desc": "Unlocks economic independence—inquiring about prices, choosing goods, understanding discounts, and paying.",
        "milestone": "Can shop independently, ask for costs, choose between payment methods (card/cash), and handle exchanges.",
        "chains": [
            {"id": 61, "title": "Shopping Intent", "items": ["💭 Need", "🔍 Choose", "🛒 Buy"], "rel": "➔"},
            {"id": 62, "title": "Store Venue Types", "items": ["🛒 Supermarket", "🥦 Market"], "rel": "➔"},
            {"id": 63, "title": "Store Status", "items": ["🚪 Open", "🔒 Closed"], "rel": "≠"},
            {"id": 64, "title": "Store Roles", "items": ["👤 Customer", "🧑‍💼 Cashier"], "rel": "≠"},
            {"id": 65, "title": "Price &amp; Sale", "items": ["🏷️ Price", "🏷️ Discount"], "rel": "≠"},
            {"id": 66, "title": "Price Scale", "items": ["💸 Cheap", "💎 Expensive"], "rel": "≠"},
            {"id": 67, "title": "Package Sizing", "items": ["🤏 Small", "🐘 Large"], "rel": "≠"},
            {"id": 68, "title": "Payment Options", "items": ["💳 Card", "💵 Cash"], "rel": "≠"},
            {"id": 69, "title": "Checkout Flow", "items": ["🛍️ Buy", "🧾 Pay", "🛍️ Take home"], "rel": "➔"},
            {"id": 70, "title": "Money Management", "items": ["💰 Earn", "🏦 Save", "🛍️ Spend"], "rel": "➔"}
        ]
    },
    {
        "num": 8,
        "id": "dom-8",
        "title": "Travel &amp; City Navigation",
        "emoji": "🗺️",
        "goal": "Mobility &amp; Spatial Exploration",
        "desc": "Expands independence beyond home and shop to urban transit, directions, transit tickets, and accommodations.",
        "milestone": "Can navigate urban spaces, ask for and follow directions, buy transit tickets, and check into lodging.",
        "chains": [
            {"id": 71, "title": "Relative Position", "items": ["📍 Here", "🫵 There"], "rel": "≠"},
            {"id": 72, "title": "Distance Scale", "items": ["📏 Near", "🔭 Far"], "rel": "≠"},
            {"id": 73, "title": "Direction Vectors", "items": ["⬅️ Left", "⬆️ Straight", "➡️ Right"], "rel": "➔"},
            {"id": 74, "title": "Map Search", "items": ["🗺️ Map", "📍 Location"], "rel": "➔"},
            {"id": 75, "title": "Transit Hierarchy", "items": ["🚌 Bus", "🚆 Train", "✈️ Plane"], "rel": "➔"},
            {"id": 76, "title": "Transit Boarding", "items": ["🚉 Station", "🚉 Platform"], "rel": "➔"},
            {"id": 77, "title": "Travel Ticket", "items": ["🎟️ Ticket", "🧳 Journey"], "rel": "➔"},
            {"id": 78, "title": "Trip Movement", "items": ["🛬 Arrive", "🛫 Leave"], "rel": "≠"},
            {"id": 79, "title": "Settlement Scale", "items": ["🏙️ City", "🏡 Village"], "rel": "≠"},
            {"id": 80, "title": "Accommodation", "items": ["🏨 Hotel", "🛏️ Hostel"], "rel": "≠"}
        ]
    },
    {
        "num": 9,
        "id": "dom-9",
        "title": "Health &amp; Body",
        "emoji": "🩺",
        "goal": "Physical Well-Being &amp; Medical Care",
        "desc": "Critical safety net capability—identifying body parts, indicating symptoms, visiting doctors, and getting medicine.",
        "milestone": "Can explain health symptoms, point out body parts, visit pharmacies or doctors, and follow basic care steps.",
        "chains": [
            {"id": 81, "title": "Facial Anatomy", "items": ["👤 Face", "👁️ Eyes", "👃 Nose", "👄 Mouth"], "rel": "➔"},
            {"id": 82, "title": "Upper Extremities", "items": ["🖐️ Hand", "🖐️ Fingers"], "rel": "➔"},
            {"id": 83, "title": "Lower Extremities", "items": ["🦶 Foot", "🦶 Toes"], "rel": "➔"},
            {"id": 84, "title": "Limbs Contrast", "items": ["🦾 Arm", "🦵 Leg"], "rel": "≠"},
            {"id": 85, "title": "Health Condition", "items": ["🏃 Healthy", "🤒 Sick"], "rel": "≠"},
            {"id": 86, "title": "Symptom &amp; Relief", "items": ["🩺 Pain", "💊 Medicine"], "rel": "➔"},
            {"id": 87, "title": "Recovery Cycle", "items": ["🌡️ Fever", "🛌 Rest", "🔋 Recover"], "rel": "➔"},
            {"id": 88, "title": "Medical Facility", "items": ["👨‍⚕️ Doctor", "🏥 Hospital", "💊 Pharmacy"], "rel": "➔"},
            {"id": 89, "title": "Care Journey", "items": ["🤒 Sick", "👨‍⚕️ Doctor", "💊 Medicine"], "rel": "➔"},
            {"id": 90, "title": "Hygiene Routine", "items": ["🧼 Wash hands", "🧻 Dry hands"], "rel": "➔"}
        ]
    },
    {
        "num": 10,
        "id": "dom-10",
        "title": "Feelings, Qualities &amp; Opposites",
        "emoji": "🌟",
        "goal": "Descriptive Mastery &amp; Emotional Nuance",
        "desc": "Capstone domain—providing emotional depth, qualitative evaluations, intensity contrasts, and complete A0 fluency.",
        "milestone": "Possesses a complete 100-chain foundational vocabulary map across 10 progressive real-life domains!",
        "chains": [
            {"id": 91, "title": "Primary Emotions", "items": ["😄 Happy", "😢 Sad"], "rel": "≠"},
            {"id": 92, "title": "Emotional Intensity", "items": ["🧘 Calm", "😡 Angry"], "rel": "≠"},
            {"id": 93, "title": "Consciousness State", "items": ["😴 Awake", "💤 Asleep"], "rel": "≠"},
            {"id": 94, "title": "Basic Evaluation", "items": ["👍 Good", "👎 Bad"], "rel": "≠"},
            {"id": 95, "title": "Task Complexity", "items": ["🟢 Easy", "🔴 Difficult"], "rel": "≠"},
            {"id": 96, "title": "Size Scale", "items": ["🐘 Big", "🐁 Small"], "rel": "≠"},
            {"id": 97, "title": "Stature Scale", "items": ["📏 Short", "🦒 Tall"], "rel": "≠"},
            {"id": 98, "title": "Capacity State", "items": ["📦 Full", "📭 Empty"], "rel": "≠"},
            {"id": 99, "title": "Safety State", "items": ["🔒 Safe", "⚠️ Dangerous"], "rel": "≠"},
            {"id": 100, "title": "A0 Mastery Capstone", "items": ["💯 100 Words", "🎯 A0 Mastery!"], "rel": "➔"}
        ]
    }
]

def render_html():
    html = []
    html.append('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 100 A0–A1 Semantic Master List (100 Chains) — COSY Blog</title>
    <meta name="description" content="The complete 100-chain A0-A1 beginner vocabulary tree across 10 progressive real-life domains with milestone goals and COSYdata live linkage.">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="#FAF7F2">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&amp;family=DM+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/blog.css">
    <style>
        .domain-section { margin-bottom: 3.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-color, #e5e7eb); }
        .domain-head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .domain-num { font-family: var(--font-heading, 'Fraunces', serif); font-size: 2.2rem; font-weight: 700; color: var(--teal, #0d9488); line-height: 1; }
        .domain-goal { font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--teal, #0d9488); margin-bottom: 0.25rem; }
        .domain-desc { font-size: 1rem; color: var(--text-muted, #4b5563); line-height: 1.5; margin-bottom: 1.5rem; }
        .milestone-box { background: linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0.02) 100%); border-left: 4px solid var(--teal, #0d9488); padding: 1.25rem 1.5rem; border-radius: 0 12px 12px 0; margin-top: 1.75rem; }
        .milestone-title { font-weight: 700; color: var(--teal, #0d9488); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem; }
        .chains-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .chain-card { background: var(--bg-card, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1rem 1.25rem; transition: transform 0.2s, box-shadow 0.2s; }
        .chain-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .chain-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; font-size: 0.85rem; font-weight: 700; color: var(--text-muted, #64748b); }
        .chain-badge { background: var(--bg-subtle, #f1f5f9); padding: 0.15rem 0.5rem; border-radius: 6px; font-size: 0.75rem; }
        .chain-body { font-size: 1.05rem; font-weight: 600; color: var(--text-main, #0f172a); display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem; }
        .chain-rel { font-weight: 700; padding: 0 0.2rem; }
        .rel-seq { color: var(--teal, #0d9488); }
        .rel-opp { color: #e11d48; }
    </style>
</head>
<body class="blog-page">
    <div class="reading-progress-bar" id="readingProgress"></div>

    <nav id="cosy-nav"></nav>

    <div class="blog-wrapper">
        <header class="post-header-simple">
            <div class="post-breadcrumb">
                <a href="index.html">← Back to Blog &amp; Editorial Hub</a>
            </div>
            <h1>🌍 Top 100 A0–A1 Semantic Master List (100 Progressive Knowledge Chains)</h1>
            <div class="post-header-meta-row">
                <span class="post-author-avatar">C</span>
                <span>Written by <strong>COSY Editorial Team</strong></span>
                <span>·</span>
                <span>📅 Updated September 2026</span>
                <span>·</span>
                <span>⏱️ 12 min read</span>
                <span>·</span>
                <span>💬 14 Languages Matrix</span>
            </div>
            <p class="post-header-intro">
                Organized by real-world human experience rather than random alphabetical lists, this master guide provides <strong>100 progressive semantic chains</strong> across <strong>10 core life domains</strong> for absolute A0–A1 beginners. Each domain builds directly on the last to expand student communicative capability, ending in a concrete <strong>Can-Do Milestone Goal</strong> linked live to <strong>COSYdata</strong> across all 14 target languages.
            </p>
            <div class="blog-header-meta" style="margin-top:1rem;">
                <a href="https://github.com/cosylanguages/COSYdata" target="_blank" rel="noopener" class="blog-meta-chip" style="text-decoration:none;">📁 COSYdata source repo</a>
                <a href="top-10-verbs.html" class="blog-meta-chip" style="text-decoration:none;">🎯 Top 10 Verbs Guide</a>
                <a href="#dom-1" class="blog-meta-chip" style="text-decoration:none;">💬 Start Domain 1</a>
            </div>
        </header>

        <div class="blog-layout">
            <main class="blog-main-col">
''')

    for dom in DOMAINS:
        num_str = f"0{dom['num']}" if dom['num'] < 10 else str(dom['num'])
        html.append(f'''
    <section class="domain-section" id="{dom['id']}">
        <div class="domain-head">
            <div class="domain-num">{num_str}</div>
            <div>
                <div class="domain-goal">{dom['emoji']} Domain {dom['num']}: {dom['goal']}</div>
                <h2>{dom['title']}</h2>
            </div>
        </div>
        <p class="domain-desc">{dom['desc']}</p>

        <div class="chains-grid">''')

        for chain in dom['chains']:
            rel_class = "rel-seq" if chain['rel'] == "➔" else "rel-opp"
            items_html = []
            for idx, item in enumerate(chain['items']):
                items_html.append(f'<span>{item}</span>')
                if idx < len(chain['items']) - 1:
                    items_html.append(f'<span class="chain-rel {rel_class}">{chain["rel"]}</span>')

            chain_body_str = " ".join(items_html)

            html.append(f'''
            <div class="chain-card">
                <div class="chain-head">
                    <span>Chain {chain['id']} · {chain['title']}</span>
                    <span class="chain-badge">A0 Level</span>
                </div>
                <div class="chain-body">
                    {chain_body_str}
                </div>
            </div>''')

        html.append(f'''
        </div>

        <div class="milestone-box">
            <div class="milestone-title">🎯 Milestone {dom['num']} Can-Do Goal</div>
            <p style="margin:0; font-size:0.95rem; color:var(--text-main, #1e293b);">{dom['milestone']}</p>
        </div>
    </section>''')

    html.append('''
            </main>

            <!-- Blog Sidebar -->
            <aside class="blog-sidebar">
                <div class="sidebar-box">
                    <h3 class="sidebar-h">📚 Domain Navigation</h3>
                    <ul class="sidebar-list" style="list-style:none; padding:0; margin:0; font-size:0.9rem; line-height:1.8;">
                        <li><a href="#dom-1">💬 1. Courtesy &amp; Communication</a></li>
                        <li><a href="#dom-2">👥 2. People &amp; Family</a></li>
                        <li><a href="#dom-3">⏰ 3. Time &amp; Calendar</a></li>
                        <li><a href="#dom-4">🌅 4. Daily Routine &amp; Actions</a></li>
                        <li><a href="#dom-5">🏡 5. Home &amp; Living Spaces</a></li>
                        <li><a href="#dom-6">🍽️ 6. Food, Drink &amp; Dining</a></li>
                        <li><a href="#dom-7">🛒 7. Shopping &amp; Money</a></li>
                        <li><a href="#dom-8">🗺️ 8. Travel &amp; Navigation</a></li>
                        <li><a href="#dom-9">🩺 9. Health &amp; Body</a></li>
                        <li><a href="#dom-10">🌟 10. Feelings &amp; Qualities</a></li>
                    </ul>
                </div>

                <div class="sidebar-box" style="margin-top:1.5rem; background:var(--bg-subtle, #f8fafc); border-radius:12px; padding:1.25rem;">
                    <h3 class="sidebar-h">📁 COSYdata Integration</h3>
                    <p style="font-size:0.85rem; color:var(--text-muted, #64748b); line-height:1.5;">
                        All words in this master list link directly to canonical index entries in <strong>COSYdata</strong> across 14 target languages (EN, FR, IT, ES, PT, DE, EL, RU, HY, KA, TT, BA, BR, CV).
                    </p>
                    <a href="https://github.com/cosylanguages/COSYdata" target="_blank" rel="noopener" class="button" style="display:inline-block; width:100%; text-align:center; margin-top:0.5rem; background:var(--teal, #0d9488); color:#fff; padding:0.5rem; border-radius:8px; text-decoration:none; font-weight:600; font-size:0.85rem;">View COSYdata Repo ↗</a>
                </div>
            </aside>
        </div>
    </div>

    <!-- Footer -->
    <footer id="cosy-footer" style="margin-top:4rem; padding:2rem 0; border-top:1px solid var(--border-color, #e2e8f0); text-align:center; font-size:0.9rem; color:var(--text-muted, #64748b);">
        <p>© 2026 COSYlanguages · 100% Free Public Ecosystem. Built for learners worldwide.</p>
    </footer>

    <script src="../js/core/engine.js"></script>
</body>
</html>
''')

    with open('blog/top-100-a0-a1.html', 'w', encoding='utf-8') as f:
        f.write("".join(html))

    print("Successfully generated blog/top-100-a0-a1.html")

if __name__ == "__main__":
    render_html()
