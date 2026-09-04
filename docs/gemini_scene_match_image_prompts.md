# Gemini Image Generation Prompts for COSYlanguages Scene Match Game

This document provides comprehensive, production-grade prompts for generating photorealistic background images for all 16 COSYlanguages **Scene Match** interactive environments (A0–A1 Level), along with capital city cultural variants.

---

## Global Generation Standards
* **Style**: Professional interior & architectural photography, realistic lighting, wide-angle 16:10 aspect ratio.
* **Composition**: Uncluttered spatial layout with clearly defined, non-overlapping physical objects that match exact SVG hotspot geometry (`800x500` coordinate space).
* **Storyline Continuity**: Visual aesthetic should feel like a continuous "A Day in the Life" walkthrough through an authentic European apartment, neighborhood, and city center.

---

## 1. Living Room / Apartment (`apartment.js`)
```text
A wide-angle, eye-level photorealistic interior photograph of a cozy European apartment living room bathed in natural morning sunlight coming from a large glass window on the left.
Composition elements:
- Large modern royal blue sofa centered at the bottom (x:280, y:280) with soft fabric texture.
- Classic wooden coffee table in front of the sofa (x:290, y:400) holding a clean white coffee cup.
- Red plush armchair on the left side (x:80, y:300).
- Tall dark-wood bookshelf on the far left wall (x:60, y:80) neatly filled with colorful books.
- Modern flat-screen TV mounted on a sleek stand on the right (x:580, y:220).
- Tall brass floor lamp beside the TV (x:530, y:260).
- Lush potted houseplant sitting between the armchair and sofa (x:210, y:260).
- Framed landscape painting hanging above the TV (x:520, y:80).
- Oval woven area rug under the coffee table (x:240, y:420).
- Elegant wooden doorways visible on the left and right walls.
Style: Warm, inviting, 8k resolution, architectural digest interior photography.
```

---

## 2. Bedroom (`bedroom.js`)
```text
A photorealistic photograph of a bright, sunlit modern master bedroom with warm oak hardwood flooring.
Composition elements:
- Neat double bed with crisp white linens and navy blue pillows positioned in the center (x:280, y:240).
- Tall wooden wardrobe closet on the right wall (x:580, y:120).
- Bedside nightstand with an illuminated table lamp on the left (x:180, y:280).
- Full-length standing mirror with a thin gold frame (x:80, y:180).
- Soft curtains framing a large sunlit window.
- Plaid throw blanket folded at the foot of the bed.
Style: Clean, peaceful, Scandinavian design aesthetics, soft morning light.
```

---

## 3. Kitchen (`kitchen.js`)
```text
A photorealistic photo of a modern, immaculate residential kitchen with stainless steel and marble accents.
Composition elements:
- Double-door silver refrigerator on the left (x:60, y:100).
- Stainless steel oven and cooktop in the center counter (x:280, y:260).
- Deep kitchen sink with a chrome faucet (x:450, y:260).
- Sleek wall-mounted cupboards above the counter (x:260, y:80).
- Shiny metallic kettle sitting on the stove (x:380, y:220).
- Small dining table with two wooden chairs in the foreground (x:580, y:320).
- Cooking pot sitting on the counter.
Style: Bright, pristine, natural daylight, high detail marble counter texture.
```

---

## 4. Bathroom (`bathroom.js`)
```text
A photorealistic photograph of a contemporary white tiled bathroom with teal accent tiles.
Composition elements:
- White porcelain bathtub on the left (x:60, y:240).
- Glass-enclosed walk-in shower on the far right (x:600, y:140).
- Bathroom sink vanity with chrome faucet (x:340, y:280).
- Circular illuminated mirror on the wall above the sink (x:360, y:140).
- Modern white toilet fixture (x:500, y:300).
- Plush folded bath towel hanging on a rail (x:280, y:260).
- Bar of soap and electric toothbrush neatly set on the sink counter.
- Hairdryer resting on a side shelf.
Style: Clean, hygienic, bright white light, realistic water droplet reflections on glass.
```

---

## 5. Daily Routine (`routine.js`)
```text
A conceptual split-view photo illustrating a person's daily routine timeline from morning to night.
Composition elements:
- Digital alarm clock showing 07:00 AM on a bedside table.
- Healthy breakfast plate with toast and orange juice.
- City bus stop in morning light.
- Office desk with a laptop and coffee.
- Cozy evening dinner table with ambient warm lighting.
Style: Vibrant, energetic, cinematic morning-to-evening lighting progression.
```

---

## 6. Four Seasons (`seasons.js`)
```text
A quad-split landscape photo showing a single scenic park bench across Spring, Summer, Autumn, and Winter.
Composition elements:
- Top-Left (Spring): Blooming pink cherry blossoms and fresh green grass.
- Top-Right (Summer): Bright golden sunshine and lush full tree canopy.
- Bottom-Left (Autumn): Falling red and orange maple leaves on moist ground.
- Bottom-Right (Winter): Soft white snow covering the bench and tree branches.
Style: Vibrant, high contrast seasonal colors, natural landscape photography.
```

---

## 7. Wardrobe & Clothing (`clothing.js`)
```text
A photorealistic photograph of an organized walk-in closet dressing room.
Composition elements:
- Hanging dress shirts and tailored jackets on wooden hangers.
- Elegant summer dress on display.
- Folded trousers and skirts neatly stacked on shelves.
- Leather shoes and sneakers arranged on a lower shoe rack.
- Winter hat and socks in open storage cubbies.
Style: Boutique retail display lighting, warm wood finish, clean fold lines.
```

---

## 8. Farm Animals & Nature (`animals.js`)
```text
A photorealistic outdoor photo of a lush green farm pasture under a clear blue sky.
Composition elements:
- Gentle dairy cow grazing in the field (x:120, y:220).
- Brown horse standing near a wooden fence (x:300, y:180).
- Fluffy white sheep resting on the grass (x:500, y:260).
- Small pig near a wooden trough (x:620, y:320).
- Duck swimming in a small pond in the foreground.
Style: Bright daylight, vibrant green countryside, sharp animal textures.
```

---

## 9. City Street (`city.js`)
```text
A photorealistic street-level photo of a charming European pedestrian avenue.
Composition elements:
- Brick school building with large arched windows on the left.
- Modern hospital building with a green cross sign in the distance.
- Supermarket storefront with fruit displays outside.
- Bank with stone pillars.
- Outdoor café terrace with red umbrellas.
- Red city bus at a bus stop.
Style: Sunny afternoon, realistic cobblestone street texture, vibrant city life.
```

---

## 10. Café & Bistro (`cafe.js`)
```text
A photo of a cozy Parisian-style café interior with dark wood paneling and warm ambient pendant lights.
Composition elements:
- Professional espresso coffee machine behind a polished wooden counter (x:140, y:140).
- Chalkboard menu board on the wall displaying drinks and prices (x:320, y:40).
- Glass bakery display case filled with fresh golden croissants and cakes (x:480, y:180).
- Small round bistro table with a porcelain coffee cup (x:530, y:395).
Style: Warm, atmospheric, aroma-evoking bistro interior.
```

---

## 11. Fresh Market (`market.js`)
```text
A vibrant outdoor farmers' market stall under a red-and-white striped awning.
Composition elements:
- Wooden crates filled with bright red apples (x:140, y:180).
- Fresh yellow bananas neatly stacked (x:340, y:180).
- Silver fish resting on crushed ice at a seafood counter (x:540, y:180).
- Traditional brass weighing scale hanging above the stall (x:375, y:160).
Style: Sunny morning market, rich natural food colors, crisp focus.
```

---

## 12. School & Office (`school_office.js`)
```text
A photo of a modern, sunlit classroom and study office.
Composition elements:
- Large dark green chalkboard with math and alphabet notes (x:220, y:50).
- Wooden teacher's desk centered in front (x:240, y:290).
- Open laptop computer glowing on the desk (x:320, y:240).
- Stack of colorful hardcover textbooks (x:255, y:260).
- Purple student backpack leaning against the desk (x:120, y:345).
Style: Bright educational environment, clean slate and wood textures.
```

---

## 13. Airport & Terminal (`airport.js`)
```text
A photo of a modern airport departure terminal inside with floor-to-ceiling glass windows.
Composition elements:
- Commercial airplane visible outside on the tarmac (x:200, y:70).
- Digital flight departure board displaying flight times (x:260, y:50).
- Luggage conveyor belt in the foreground with red and blue suitcases (x:120, y:320).
Style: High-tech airport architecture, bright daylight, sleek metal reflections.
```

---

## 14. Hospital & Pharmacy (`hospital.js`)
```text
A photo of a clean, brightly lit hospital room and pharmacy counter.
Composition elements:
- Adjustable white hospital bed with blue linens (x:120, y:250).
- Digital heart rate monitor displaying a green ECG wave (x:370, y:220).
- Organized pharmacy shelf stocked with medicine bottles (x:520, y:140).
- Medical thermometer resting on a tray.
Style: Sterile, reassuring, bright white and green lighting.
```

---

## 15. Park & Nature (`park_nature.js`)
```text
A photo of a sunny city park with lush oak trees and green lawn.
Composition elements:
- Large leafy oak tree shading a path (x:80, y:100).
- Classic wooden park bench (x:300, y:310).
- Red city bicycle parked nearby (x:170, y:360).
- Black-and-white soccer ball sitting on the grass (x:540, y:410).
Style: Crisp summer daylight, vivid greens, relaxing outdoor atmosphere.
```

---

## 16. Restaurant & Dining (`restaurant.js`)
```text
An atmospheric photo of an elegant fine-dining restaurant table set for dinner.
Composition elements:
- Round dining table set with a red tablecloth and white centerpiece (x:200, y:370).
- Polished white dinner plate and silver cutlery (x:275, y:395).
- Crystal wine glass reflecting warm candlelight (x:335, y:385).
- Small receipt bill folder resting on the table (x:380, y:420).
Style: Intimate, warm candlelight, luxury dining atmosphere.

---

## Capital City Cultural Overlay Prompts

When generating localized variants for specific language portals, append the following background window/skyline prompt modifications:

* **French (`fr` - Paris)**: `"...visible through the window is the faint, elegant silhouette of the Eiffel Tower and Parisian Haussmann zinc rooftops."`
* **Italian (`it` - Rome)**: `"...visible through the window is a sunny Roman street view featuring the warm terracotta arches of the Colosseum."`
* **Russian (`ru` - Moscow)**: `"...visible through the window is the winter skyline of Moscow featuring the colorful onion domes of St. Basil's Cathedral."`
* **Greek (`el` - Athens)**: `"...visible through the window is a bright Mediterranean blue sky framing the marble pillars of the Acropolis."`
* **Spanish (`es` - Madrid)**: `"...visible through the window is the grand stone architecture of Madrid's Plaza Mayor."`
* **German (`de` - Berlin)**: `"...visible through the window is the Berlin skyline with the Brandenburg Gate and TV Tower."`
* **Armenian (`hy` - Yerevan)**: `"...visible through the window is a clear view of Mount Ararat rising above pink tuff stone buildings."`
* **Georgian (`ka` - Tbilisi)**: `"...visible through the window are the carved wooden balconies and Narikala Fortress of Old Tbilisi."`
* **English (`en` - London)**: `"...visible through the window is the iconic London skyline featuring Big Ben and red double-decker buses."`
