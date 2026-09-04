# COSYlanguages — Scene Match A0–A1 Open World Architecture & Image Generation Prompts

## 1. Executive Summary & Open World Concept Rationale

This document defines the master spatial topology, interconnectivity blueprint, and AI image generation prompt specifications for COSYlanguages' **A0–A1 Scene Match Game**.

### The "Cozy Town" Open World Metaphor
Rather than presenting isolated, disconnected picture flashcards, COSYlanguages models the A0–A1 vocabulary environment as a continuous, interconnected **Open World Exploration Map** ("Cozy Town").

1. **Spatial Continuity**: The learner navigates seamlessly through doorways, street portals, garden gates, transit hubs, and routine windows—experiencing vocabulary in a realistic spatial and situational context.
2. **Door & Portal Mechanics**: Every interior environment (e.g. `apartment`, `bedroom`, `kitchen`, `bathroom`) connects via physical doors to adjacent rooms and to the exterior `city` street. The `city` street acts as a central hub connecting commercial shops (`market`, `cafe`, `restaurant`), civic institutions (`school_office`, `hospital`), nature areas (`park_nature`, `animals` farm), travel terminals (`airport`), and lifestyle spaces (`clothing` boutique, `routine` tower, `seasons` observatory).
3. **CEFR A0–A1 Target Vocabulary Density**: Every image prompt is meticulously engineered to incorporate 10–20 essential A0–A1 vocabulary units (nouns, verbs, adjectives, prepositions) mapped directly to hotspots in `vocabulary/en/A1/`.

---

## 2. Interconnected Open World Spatial Map & Node Network

```
                                  [ 🪐 SEASONS OBSERVATORY ]
                                             │
                                     (Window Portal)
                                             │
 [ 🛏️ BEDROOM ] ─── (Door) ───┐              │
                              ├─── [ 🛋️ APARTMENT LIVING ] ─── (Front Door) ───┐
 [ 🍳 KITCHEN ]  ─── (Door) ───┤              │                                │
                              └─── [ 🚿 BATHROOM ]                             │
                                                                               │
 [ ⏰ DAILY ROUTINE ] ─── (Clock Portal) ──────────────────────────────────────┤
                                                                               │
                                                                               ▼
 [ ✈️ AIRPORT TERMINAL ] ◄── (Bus) ──┐                                  [ 🏙️ CITY STREET ] ── (Gate) ──► [ 🏥 HOSPITAL WARD ]
                                    │                                          │
 [ 🛍️ CLOTHING BOUTIQUE ] ──────────┼──────────────────────────────────────────┤
                                    │                                          │
 [ 🛒 SUPERMARKET MARKET ] ◄─(Street)┤                                          ├─(Gate)──► [ 🌳 PARK & NATURE ]
            │                       │                                          │                   │
         (Door)                     │                                          │                (Fence)
            ▼                       │                                          │                   ▼
 [ 🏫 SCHOOL & OFFICE ] ────────────┴──────────────────────────────────────────┴────────────► [ 🐮 ANIMALS & FARM ]
                                                                │
                                                             (Pavement)
                                                                ▼
                                                    [ ☕ CAFE ] ── (Door) ──► [ 🍕 RESTAURANT ]
```

---

## 3. Master Scene Nodes & Image Generation Prompts (CEFR A0–A1)

Below are the exact, production-ready AI image prompts (optimised for Midjourney v6 / DALL-E 3 / Stable Diffusion XL) for all 16 A0–A1 Scene Match environments, complete with embedded A0–A1 vocabulary hotspot specifications.

---

### Node 1: Cozy Living Room (`apartment`)
* **Spatial Connections**:
  - Door North ➔ `bedroom`
  - Door West ➔ `kitchen`
  - Door South ➔ `bathroom`
  - Front Door East ➔ `city`
* **Target CEFR A0–A1 Vocabulary Hotspots**: sofa, armchair, television, bookshelf, books, coffee_table, rug, lamp, window, curtain, wall_painting, clock, door, floor, ceiling, cushions, plant.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a cozy, bright apartment living room in flat warm pastel style, clean lines, cozy aesthetic. Visible elements include a plush blue sofa with two yellow cushions, a wooden coffee table with a steaming mug of tea, a tall bookshelf filled with colorful books, a television on a low cabinet, a decorative floor lamp, a woven area rug on wooden floorboards, a framed landscape painting on the cream wall, a large glass window showing a sunny city street outside, an interior wooden door on the left leading to a hallway, and a potted monstera plant near the corner. Clean vector art, clear distinct objects, educational language learning illustration style, high contrast, vibrant lighting, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 2: Master Bedroom (`bedroom`)
* **Spatial Connections**:
  - Door South ➔ `apartment`
  - Window East ➔ `seasons`
* **Target CEFR A0–A1 Vocabulary Hotspots**: bed, mattress, pillow, blanket, wardrobe, desk, chair, laptop, alarm_clock, bedside_table, mirror, clothes_hanger, slippers, rug, picture_frame, lamp.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a serene master bedroom, cozy Scandinavian aesthetic, soft pastel color palette. Features a large double bed with a neatly made duvet blanket and two soft white pillows, a wooden nightstand with an digital alarm clock and a small reading lamp, a tall wooden wardrobe cabinet with open doors showing neatly hung clothes on hangers, a study desk with an open laptop and a chair, a wall-mounted full-length mirror, comfortable slippers on a soft bedside rug, and a wide window letting in soft morning sunlight. Flat vector style, bold clean outlines, high object clarity for interactive vocabulary discovery, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 3: Kitchen & Cooking Utensils (`kitchen`)
* **Macro Domain**: `FOOD_DINING` / `HOME_LIVING`
* **Spatial Connections**:
  - Door East ➔ `apartment`
* **Target CEFR A0–A1 Vocabulary Hotspots**: refrigerator, stove, oven, sink, faucet, frying_pan, saucepan, kitchen_table, chair, plate, bowl, cup, spoon, fork, knife, bread, apple, milk, trash_bin.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a clean modern residential kitchen, friendly educational style, pastel tones. Features a white two-door refrigerator, a stainless steel stove with gas burners and an oven below, a kitchen sink with a chrome faucet, a frying pan on the stovetop, a wooden dining table with two chairs, on the table sits a ceramic plate with an apple and a slice of bread, a glass of milk, a bowl, and neatly placed cutlery (knife, fork, spoon). Wall cabinets above, tile splashback, clean vector aesthetic, clear isolated objects suitable for hotspot highlighting, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 4: Bathroom & Hygiene (`bathroom`)
* **Macro Domain**: `HOME_LIVING` / `SELF_IDENTITY`
* **Spatial Connections**:
  - Door North ➔ `apartment`
* **Target CEFR A0–A1 Vocabulary Hotspots**: bathtub, shower, toilet, sink, faucet, mirror, towel, toothbrush, toothpaste, soap, shampoo, toilet_paper, rug, comb, trash_can.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a bright, spotless bathroom, clean pastel blue and teal color scheme. Includes a white porcelain bathtub with a shower head above, a washbasin sink with a chrome faucet, a large lighted bathroom mirror above the sink, a toothbrush and toothpaste tube in a cup, a bar of soap on a dish, a folded fluffy bath towel on a wooden rack, a toilet with a roll of toilet paper beside it, a small bath mat on tiled floor, and a bottle of shampoo on a glass shelf. Flat vector style, clean distinct shapes, cheerful ambiance, high contrast, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 5: Daily Routine & Schedule (`routine`)
* **Macro Domain**: `HOME_LIVING` / `TIME_SCHEDULE`
* **Spatial Connections**:
  - Clock Portal ➔ `city`
* **Target CEFR A0–A1 Vocabulary Hotspots**: waking_up, alarm_clock, brushing_teeth, washing_face, eating_breakfast, drinking_coffee, dressing, commuting, studying, working, eating_dinner, sleeping.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration depicting a multi-panel daily routine story map, cozy flat vector infographic style. Shows sequential panels of daily activities: a person waking up in bed with an alarm clock ringing at 7:00 AM, brushing teeth at the bathroom sink, eating breakfast with a cereal bowl and coffee cup, dressing in front of a wardrobe, riding a bus to school/work, studying at a desk with books, eating dinner at a table, and sleeping peacefully in bed under night stars. Bright pastel colors, clear iconographic representation of daily action verbs, high readability, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 6: Clothing & Wardrobe Boutique (`clothing`)
* **Macro Domain**: `SELF_IDENTITY`
* **Spatial Connections**:
  - Door East ➔ `city` street
* **Target CEFR A0–A1 Vocabulary Hotspots**: shirt, t_shirt, pants, jeans, dress, skirt, sweater, jacket, coat, shoes, sneakers, boots, hat, cap, scarf, gloves, belt, socks, umbrella.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a stylish clothing boutique and wardrobe showroom, flat vector art style. Racks of colorful clothing displaying hanging t-shirts, dresses, jackets, sweaters, and formal suits. Shelves showcasing footwear including sneakers, boots, and leather shoes. Display mannequins wearing winter scarves, hats, and coats. A display counter with accessories including belts, gloves, handbags, and umbrellas. Bright pastel shop interior, clear object separation for interactive matching games, warm lighting, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 7: Four Seasons & Weather Observatory (`seasons`)
* **Macro Domain**: `NATURE_ENV`
* **Spatial Connections**:
  - Window Portal ➔ `bedroom` / `park_nature`
* **Target CEFR A0–A1 Vocabulary Hotspots**: sun, cloud, rain, rainbow, snow, wind, autumn_leaf, flower, tree, umbrella, thermometer, hot, cold, sunny, rainy, snowy, windy.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration divided into four quadrant panels representing the four seasons and weather phenomena, clean educational vector style. Spring panel shows blooming flowers, green trees, a singing bird, and a bright rainbow after rain. Summer panel shows a shining sun in a clear blue sky, a beach umbrella, and a high thermometer reading. Autumn panel shows falling orange and red leaves, gusty wind, grey clouds, and rain drops with an open umbrella. Winter panel shows falling snowflakes, a snowman, ice crystals, and snow-covered pine trees. Flat vector art, vibrant colors, clear thematic contrast, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 8: Animals & Farmstead (`animals`)
* **Macro Domain**: `NATURE_ENV`
* **Spatial Connections**:
  - Farm Gate West ➔ `park_nature`
  - Road South ➔ `city`
* **Target CEFR A0–A1 Vocabulary Hotspots**: dog, cat, horse, cow, pig, sheep, chicken, duck, bird, fish, rabbit, butterfly, bee, barn, fence, grass, pond, tree.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a charming rural farm and countryside landscape, friendly educational vector style. Features a friendly brown dog wagging its tail near a wooden fence, a cat sleeping on a porch, a horse grazing in a green pasture, a dairy cow near a red barn, white sheep on a grassy hill, a hen with little chicks, a duck swimming in a small pond with a fish jumping out, a colorful butterfly fluttering near wildflowers, and a bird flying in a blue sunny sky. Bright cheerful color palette, crisp outlines, high visual clarity, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 9: Central City Street & Buildings (`city`)
* **Macro Domain**: `TRAVEL_COMM` / `PLACES`
* **Spatial Connections**:
  - West ➔ `apartment` (Residential Row)
  - East ➔ `market` (Shopping District)
  - South ➔ `cafe` & `restaurant` (Dining Plaza)
  - North ➔ `school_office` & `hospital` (Civic Center)
  - Bus Transit ➔ `airport`
* **Target CEFR A0–A1 Vocabulary Hotspots**: street, sidewalk, building, skyscraper, shop, bus, car, bicycle, traffic_light, crosswalk, pedestrian, bench, street_lamp, tree, bank, pharmacy.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a vibrant town center street scene, flat vector art style. Features a wide paved road with a yellow bus, a red car, and a person riding a bicycle. Sidewalk with pedestrians walking, a zebra crosswalk with a green pedestrian traffic light. Streetscape lined with colorful two-story buildings: a bank with an ATM, a pharmacy with a green cross, a bakery, and an apartment entrance. A green park bench under a leafy street tree, a street lamp, and clear blue sky overhead. Highly detailed, clean lines, cheerful atmosphere, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 10: Supermarket & Open-Air Market (`market`)
* **Macro Domain**: `HOME_LIVING` / `FOOD_DINING`
* **Spatial Connections**:
  - West ➔ `city` street
  - East ➔ `school_office`
* **Target CEFR A0–A1 Vocabulary Hotspots**: supermarket, market_stall, shopping_cart, basket, cashier, scale, apple, banana, orange, tomato, potato, carrot, bread, milk, cheese, meat, fish, price_tag.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a bustling grocery market and supermarket interior, clean flat vector style. Wooden market stalls displaying fresh fruits (red apples, yellow bananas, oranges) and vegetables (tomatoes, carrots, potatoes, lettuce). A bakery counter with fresh loaves of bread. A dairy cooler with milk cartons and cheese wheels. A shopping cart and a handheld basket in the aisle. A cashier standing behind a checkout counter with a cash register and weighing scale. Bright inviting colors, clearly separated food items for easy interactive identification, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 11: Cozy Cafe (`cafe`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Spatial Connections**:
  - Door West ➔ `city` plaza
  - Door East ➔ `restaurant`
* **Target CEFR A0–A1 Vocabulary Hotspots**: coffee_cup, tea_pot, glass_of_water, croissant, cake, sandwich, menu, table, chair, barista, espresso_machine, counter, window, teapot, napkin.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a warm, inviting neighborhood cafe interior, cozy Scandinavian vector style. Features a wooden service counter with a gleaming stainless steel espresso machine, a barista serving a cup of coffee. On small round wooden tables with chairs sit ceramic cups of coffee and tea, a teapot, a plate with a croissant and a slice of chocolate cake, a sandwich, and a folded menu card. Large front window showing a sunlit city pavement outside. Warm lighting, pastel tones, clear distinct food and furniture elements, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 12: Traditional Restaurant (`restaurant`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Spatial Connections**:
  - Door West ➔ `cafe`
  - Door North ➔ `city` street
* **Target CEFR A0–A1 Vocabulary Hotspots**: waiter, menu_card, table, chair, tablecloth, plate, fork, knife, spoon, glass, napkin, pizza, pasta, soup, salad, bill_check, candle.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a cozy dining restaurant interior, flat vector art. Dressed dining tables with white tablecloths, chairs, and lit candles. On the main foreground table sit ceramic plates with delicious food (a slice of pizza, a bowl of pasta, a fresh green salad, a bowl of soup), water glasses, folded napkins, and cutlery (fork, knife, spoon). A friendly waiter holding a tray with a glass of juice and a menu card. Warm ambient lighting, elegant simple vector style, distinct isolated table settings, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 13: City Park & Nature Trail (`park_nature`)
* **Macro Domain**: `NATURE_ENV`
* **Spatial Connections**:
  - Gate North ➔ `city` street
  - Trail East ➔ `animals` farm
* **Target CEFR A0–A1 Vocabulary Hotspots**: tree, grass, flower, pond, fountain, bench, bridge, path, bird, duck, squirrel, sun, cloud, bicycle, trash_can.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a picturesque city park on a sunny day, clean flat vector aesthetic. Features a winding paved walking path, lush green lawn grass with colorful flowerbeds, tall oak and maple trees, a wooden park bench under a tree shade, a stone fountain spraying water, a small duck pond with a wooden bridge crossing over it, ducks swimming in the water, a squirrel on a tree trunk, birds singing on branches, a trash bin near the path, and fluffy white clouds in a bright blue sky. Peaceful atmosphere, high visual clarity, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 14: School & Office Academy (`school_office`)
* **Macro Domain**: `WORK_LEARNING`
* **Spatial Connections**:
  - West ➔ `market`
  - South ➔ `city` street
* **Target CEFR A0–A1 Vocabulary Hotspots**: school, classroom, teacher, student, desk, chair, whiteboard, laptop, computer, book, notebook, pen, pencil, backpack, ruler, clock, globe.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a modern school classroom and office learning environment, flat vector art style. Features a teacher standing near a large green whiteboard with colorful drawings, student desks and chairs, on a desk sits a laptop computer, open books, notebooks, pens, pencils, a ruler, and a backpack leaning against the chair. A desk globe on a shelf, a wall clock showing 10:00 AM, a large window filling the room with bright daylight. Clean educational illustration style, bright high-contrast colors, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 15: Airport Terminal & Transit Gate (`airport` - Selective B1 Transit Node)
* **Macro Domain**: `TRAVEL_COMM`
* **Spatial Connections**:
  - Bus Transit ➔ `city` street
* **Target CEFR A0–A1 Vocabulary Hotspots**: airport, airplane, departure_board, gate, passport, ticket, suitcase, backpack, conveyor_belt, pilot, flight_attendant, window.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a modern airport terminal gate, clean flat vector illustration style. Large floor-to-ceiling glass panoramic window overlooking an airfield runway with a parked passenger airplane under a blue sky. Inside the terminal, an electronic flight departure board on the wall, passengers sitting on terminal chairs with suitcases and backpacks, a security conveyor belt for luggage, a passport and boarding pass ticket held by a traveler, and airport staff (pilot, flight attendant) in uniform. Bright, spacious, crisp vector outlines, no text, no labels, --ar 16:9 --v 6.0`

---

### Node 16: Hospital Ward & Clinic (`hospital` - Selective B1 Healthcare Node)
* **Macro Domain**: `MIND_HEALTH`
* **Spatial Connections**:
  - Gate North ➔ `city` street
* **Target CEFR A0–A1 Vocabulary Hotspots**: hospital, doctor, nurse, patient, bed, stethoscope, medicine, thermometer, wheelchair, bandage, ambulance, heart, cross.
* **AI Image Generation Prompt**:
  > `High-quality 2D vector graphic illustration of a clean, comforting hospital clinic ward, friendly flat vector style. Features a hospital bed with a white blanket and pillow, a doctor wearing a white coat and stethoscope listening to a patient, a nurse holding a chart clipboard, a medicine bottle and a clinical thermometer on a bedside table, a wheelchair near the door, a red cross symbol on the wall, and through the window an ambulance parked outside. Bright, reassuring pastel tones, clean lines, clear medical items for vocabulary matching, no text, no labels, --ar 16:9 --v 6.0`

---

## 4. Implementation & Integration Workflow for Game Developers

1. **Asset Generation Pipeline**: Run the AI prompts above in Midjourney v6 / Stable Diffusion XL using seed-locking to maintain consistent vector art styles across all 16 scenes.
2. **SVG Hotspot Mapping**: Convert generated PNG images or vector SVGs into coordinate-mapped hotspot boundaries (`x, y, width, height`) registered in `games/data/scenes/*.js`.
3. **Door Navigation Binding**: Wire every door/portal definition in scene JS files using `targetSceneId` to enable the full Open World "Cozy Town" walkthrough experience in `games/scene_match/game.js`.
