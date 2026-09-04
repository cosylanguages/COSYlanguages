# COSYlanguages — Master Unified Vocabulary Taxonomy & Scene Match Integration Matrix

## 1. Executive Summary & Pedagogical Directives

This document provides a single, unified source of truth for all vocabulary metadata, thematic classification, curriculum roadmaps, manual structures, visual dictionary specifications, and interactive game integrations across COSYlanguages.

### Core Objectives
1. **Multi-Tiered Taxonomy Standardization**: Establish a granular 4-tier tree structure (`macro_domain` -> `theme` -> `sub_theme` -> `micro_topic`) encompassing all CEFR levels (A0 through C2), visual dictionary categories, and specialized technical/academic fields.
2. **Atomic Sub-Domain Isolation**: Divide broad vocabulary domains into discrete, self-contained atomic sub-domains (e.g., isolating `racket_sports`, `ball_sports`, `combat_sports`, `winter_sports`, `aquatic_sports`, `track_field`, `gymnastics`, `equestrian`, `motor_sports`, `cycling`, `precision_sports`, `strength_sports`, `sports_facilities` as standalone sub-domain units).
3. **Deep Micro-Topic Specialization**: Break down every daily life, situational, and domain concept into atomic sub-domains (e.g. `routine` -> `morning_routine`, `afternoon_routine`, `evening_routine`, `night_routine`, `commute`, `household_chores`, `workday_vs_weekend`, `shopping_errands`).
4. **Pedagogical Integrity for Visual Games**: Enforce strict CEFR tiering rules for the **Scene Match Game**, reserving 2D hotspot scene environments for concrete physical terms (A0–A2) and specialized physical environments (B1), while designating non-scene visual diagrams (Collocation Webs, System Maps, and Process Flow Diagrams) for abstract higher-level domains (B2–C2).
5. **Cross-System Dynamic Scalability**: Ensure seamless querying and interoperability across the Vocabulary Database (`vocabulary/`), Curriculums (`curriculum/`), Monolingual Manuals (`manuals/`), Event Taxonomies (`speaking_club_theme_taxonomy.md`), and Game Engines (`games/scene_match/`).

---

## 2. Macro Domains & Higher-Order Taxonomy Architecture

All vocabulary across COSYlanguages is grouped into **12 Higher-Order Macro Domains**. Each domain contains standardized top-level themes, sub-themes, and micro-topics.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           COSY MACRO DOMAINS (12)                                       │
├────────────────────┬────────────────────┬────────────────────┬──────────────────────────┤
│ 1. SELF_IDENTITY   │ 2. HOME_LIVING     │ 3. FOOD_DINING     │ 4. TRAVEL_COMM           │
│ 5. WORK_LEARNING   │ 6. SOCIETY_CULTURE │ 7. MIND_HEALTH     │ 8. NATURE_ENV            │
│ 9. SCIENCE_SPACE   │ 10. INDUSTRY_ENERGY│ 11. LAW_HISTORY    │ 12. SPORTS_LEISURE       │
└────────────────────┴────────────────────┴────────────────────┴──────────────────────────┘
```

---

## 3. Comprehensive Granular Taxonomy Matrix (4-Tier Tree)

Below is the complete taxonomy matrix registered in `window.COSY_THEME_TREE`. Theme slugs are lower_snake_case and permanent once assigned.

### 1. SELF_IDENTITY (People, Body, Clothing, Personal Life)
* **`people` (People & Family)**
  * `family`: nuclear_family · extended_family · in_laws · genealogy · ancestors · parenting
  * `relationships`: romance · dating · friendship · colleagues · acquaintances · social_bonds
  * `nationality`: citizenship · origins · ethnic_identity · migration · foreign_languages
  * `physical_desc`: height_build · hair_eyes · facial_features · age_groups · gestures
  * `character`: personality_traits · virtues · vices · moral_qualities · habits
  * `babies`: infancy · newborn_care · nursery · milestones · baby_gear
  * `kids`: childhood · play · adolescence · parenting_challenges
  * `groups`: crowds · teams · associations · communities · subcultures
* **`body` (Body, Anatomy & Physiology)**
  * `face`: eyes · nose · mouth_teeth · ears · cheeks_chin · forehead
  * `limbs`: arms_hands · legs_feet · joints · fingers_toes · shoulders
  * `organs`: heart · lungs · brain · liver_kidneys · stomach · circulatory_system
  * `senses`: sight · hearing · smell · taste · touch · proprioception
  * `health`: hygiene · skincare · dental_care · grooming · posture
  * `appearance`: beauty · aesthetics · body_art · tattoos · piercings
  * `digestive_system`: esophagus · intestines · digestion_metabolism · enzymes
  * `anatomy`: skeleton · muscles · nervous_system · endocrine_system · lymphatic_system · urinary_system · reproductive_system
* **`clothes` (Clothing & Personal Articles)**
  * `everyday`: shirts_tops · pants_jeans · dresses_skirts · underwear · socks
  * `formal`: suits_tuxedos · evening_gowns · ties_bowties · formal_shoes
  * `accessories`: belts · scarves_gloves · hats_caps · sunglasses · umbrellas · leather_goods
  * `weather_gear`: raincoats · heavy_jackets · windbreakers · boots
  * `winter_clothing`: thermal_layers · overcoats · parkas · woolen_hats
  * `jewelry`: rings · necklaces · bracelets · earrings · watches · cufflinks
  * `sleepwear`: pajamas · robes · nightgowns · slippers
  * `sewing`: fabrics · needles_thread · tailoring · knitting_embroidery · care_symbols
  * `traditional`: folk_costumes · ceremonial_attire · vestments · historical_costume
* **`colours` (Colours, Shades & Materials)**
  * `basic`: primary_colours · secondary_colours · neutral_tones
  * `shades`: pastel_shades · vibrant_tones · dark_tints · metallic_colours
  * `materials`: fabrics_textiles · metals · woods · plastics · ceramics · glass

---

### 2. HOME_LIVING (House, DIY, Time, Schedule, Money)
* **`furniture` (House, Furniture & Living Spaces)**
  * `rooms`: living_room · dining_room · hallway · balcony · attic_cellar · main_rooms
  * `furniture_items`: sofas_armchairs · tables_desks · beds_mattresses · storage_cabinets
  * `appliances`: refrigerators · stoves_ovens · washing_machines · vacuum_cleaners · microwaves · domestic_appliances
  * `household_items`: cookware · tableware · linens_blankets · lighting_fixtures · decor
  * `doors_locks`: exterior_doors · locks_keys · windows_blinds · hinges
  * `garden`: lawn · patio_deck · flowerbeds · greenhouse · outdoor_furniture · pleasure_garden
  * `bedroom`: bedding · wardrobes · nightstands · alarm_clocks · dressers
  * `bathroom`: bathtub_shower · sink_faucets · toilet_plumbing · towels_toiletry · pedestal_sump_pump
  * `utility_room`: laundry_supplies · ironing · cleaning_agents · storage_racks
  * `house_structure`: frame · foundation · roof_truss · wood_flooring · stairs_steps
  * `climate_control`: forced_warm_air · forced_hot_water · heat_pump · auxiliary_heating · air_conditioning
* **`diy_construction` (DIY, Tools & Home Maintenance)**
  * `hand_tools`: hammers · screwdrivers · pliers · wrenches · measuring_tapes
  * `building_materials`: timber · concrete_masonry · insulation · drywalls · tiles · covering_materials
  * `carpentry`: sawing · drilling · nailing · sanding · joining · shaping_tools · gripping_tools · marking_tools
  * `plumbing`: pipes · fittings · valves · sump_pumps · drainage · plumbing_tools
  * `electrical`: wiring · switches · outlets · circuit_breakers · distribution_panels · electricity_tools
  * `masonry`: bricks · mortar · trowels · plastering · foundations · masonry_tools
  * `soldering_welding`: soldering_iron · welding_torch · flux · protective_mask
  * `painting_upkeep`: brushes · rollers · ladders · stepladders
* **`shopping` (Shopping, Retail & Commerce)**
  * `stores`: supermarkets · department_stores · boutiques · markets · pharmacies
  * `items`: groceries · consumer_goods · packaging · price_tags
  * `transactions`: cash · credit_cards · digital_payments · receipts · refunds · discounts
  * `online`: e_commerce · shopping_carts · deliveries · order_tracking
* **`time` (Time, Calendar & Daily Routines)**
  * `clock`: hours_minutes · seconds · analogue_digital · timers
  * `days`: weekdays · weekends · yesterday_today_tomorrow
  * `months`: seasons · annual_dates · leap_years · calendar_years
  * `seasons`: spring · summer · autumn · winter · seasonal_changes
  * `periods`: decades · centuries · eras · duration · intervals
  * `frequency`: daily · weekly · monthly · rarely · always · never
  * `telling_time`: o_clock · half_past · quarter_to · am_pm
  * `schedule`: morning_routine · afternoon_routine · evening_routine · night_routine · workday_flow · weekend_leisure · commute · chores
  * `hourglass`: passage_of_time · punctuality · deadlines · delays
* **`numbers` (Numbers, Math & Geometry)**
  * `cardinal`: basic_counting · large_numbers · decimals
  * `ordinal`: first_second · rankings · centuries
  * `fractions`: halves_quarters · percentages · ratios
  * `money`: currencies · banknotes_coins · exchange_rates · savings
  * `shapes`: 2d_shapes · 3d_solids · symmetry · angles
  * `geometry`: lines_points · area_volume · perimeter · theorems

---

### 3. FOOD_DINING (Food, Cooking, Culinary Arts, Drinks)
* **`food_drink` (Food, Beverages & Gastronomy)**
  * `fruit`: citrus · berries · tropical_fruits · stone_fruits · melons
  * `vegetables`: root_vegetables · leafy_greens · legumes · mushrooms · nightshades
  * `drinks`: water_juices · hot_beverages · alcoholic_drinks · sodas · teas_coffees
  * `cooking`: baking · frying · boiling_steaming · roasting_grilling · culinary_techniques
  * `meals`: breakfast · lunch · dinner · snacks · appetizers · desserts
  * `snacks`: pastries · nuts_seeds · chips_crisps · confectionery
  * `diet`: nutrition · vegetarian_vegan · allergies_intolerances · calorie_intake
  * `breakfast`: cereals · eggs_bacon · toast_jam · pastries_pancakes
  * `meat`: poultry · beef_pork · lamb · game · cured_meats_delicatessen · variety_meat
  * `sweets`: chocolates · candies · cakes_pies · ice_cream
  * `spices_condiments`: herbs · spices · sauces_dressings · oils_vinegars
  * `kitchen_utensils`: knives_cutlery · pots_pans · bowls_plates · glassware · gadgets · coffee_makers
  * `packaging`: cans_bottles · boxes_cartons · plastic_wraps · containers
  * `dairy_fats`: milk_cheese · yogurt_butter · oils_fats

---

### 4. TRAVEL_COMM (Travel, Transport, Geography, Technology)
* **`travel` (Travel, Tourism & Hospitality)**
  * `transport`: public_transit · personal_vehicles · long_distance · fares_tickets
  * `accommodation`: hotels · hostels · vacation_rentals · camping · check_in
  * `tourism`: sightseeing · guided_tours · landmarks · souvenirs · itineraries
  * `directions`: navigation · maps_gps · lost_found · street_signs
  * `documents`: passports · visas · boarding_passes · custom_forms
  * `air_travel`: airport_terminals · flight_checkin · security_screening · inflight
  * `land_travel`: road_trips · train_journeys · bus_routes · highway_driving
  * `sea_travel`: cruises · ferries · sailing_yachts · ports_harbors
  * `luggage`: suitcases · backpacks · carry_on · baggage_claim
* **`transport_machinery` (Heavy Transport & Machinery)**
  * `road_transport`: automobiles · buses · trucks · motorcycles · bicycles · electric_vehicles · service_stations · road_systems · bridges_tunnels
  * `rail_transport`: high_speed_trains · subways · locomotives · tracks_stations · passenger_cars · yards
  * `maritime_transport`: cargo_ships · tankers · tugboats · navigation_buoys · harbors · canal_locks · anchors · sails_rigs
  * `air_transport`: commercial_jets · helicopters · turboprops · flight_decks · turbofan_engines
  * `heavy_machinery`: bulldozers · excavators · cranes · tractors · dump_trucks · graders · agricultural_machinery
  * `material_handling`: forklifts · conveyor_belts · loading_docks · containers · cranes_hoists
* **`places` (Places, Urban Spaces & Architecture)**
  * `city`: metropolitan_areas · downtown · suburbs · plazas · pedestrian_zones · street_cross_sections
  * `buildings`: skyscrapers · office_towers · residential_blocks · civic_buildings · convention_centers
  * `rooms`: public_spaces · private_chambers · auditoriums · corridors
  * `geography`: landforms · water_bodies · maps_globes · coordinates
  * `landmarks`: monuments · historic_sites · bridges · towers · fountains
  * `countryside`: villages · farmland · forests · mountains · valleys
  * `downtown`: commercial_districts · shopping_malls · financial_centers
* **`technology` (Technology, Electronics & Office Automation)**
  * `devices`: smartphones · tablets · smartwatches · audio_equipment
  * `internet`: websites · search_engines · cloud_storage · cybersecurity
  * `software`: operating_systems · applications · databases · programming
  * `social_media`: messaging_apps · social_networks · content_creation · streaming
  * `computers`: desktops · laptops · processors_memory · peripherals · input_devices · output_devices
  * `office_automation`: printers_scanners · copiers · networking · ups_systems · storage_devices

---

### 5. WORK_LEARNING (Work, Business, Education, Language)
* **`work` (Workplace, Business & Economics)**
  * `office`: corporate_culture · cubicles · conference_rooms · executive_suites
  * `meetings`: presentations · negotiations · video_calls · agendas_minutes
  * `career`: hiring_recruitment · promotions · resumes_cvs · retirement
  * `documents`: contracts · reports · spreadsheets · memos · invoices
  * `remote_work`: home_office · digital_nomadism · asynchronous_comm
  * `finance`: banking · investments · stocks_bonds · accounting · taxation · currencies
  * `economy`: macroeconomics · trade · inflation · markets · supply_demand
* **`jobs` (Professions & Careers)**
  * `professions`: medical_professionals · engineers · educators · creative_arts
  * `workplace`: factory_floor · office_building · outdoor_site · retail_floor
  * `career`: vocational_training · mentorship · career_ladder · freelancing
  * `business_lang`: jargon · corporate_terms · client_relations · sales_marketing
* **`school` (School & Academic Education)**
  * `stationery`: pens_pencils · notebooks_binders · rulers_erasers · backpacks
  * `subjects`: mathematics · literature · history · sciences · arts · physical_ed
  * `classroom`: desks_chairs · whiteboards · projectors · lab_benches
  * `studying`: exams_tests · homework · research · tutoring · graduation
* **`language` (Language, Linguistics & Writing Systems)**
  * `grammar_terms`: parts_of_speech · tenses · syntax · morphology · semantics
  * `phonetics`: vowels_consonants · pronunciation · accents · intonation
  * `discourse`: rhetoric · pragmatics · conversation · public_speaking
  * `learning`: language_acquisition · vocabulary_building · fluency_drills
  * `writing_system`: alphabets · scripts · calligraphy · typography
  * `punctuation`: periods_commas · quotation_marks · colons_semicolons · hyphens · diacritics

---

### 6. SOCIETY_CULTURE (Social Life, Arts, Music, Institutions)
* **`social` (Social Life & Human Communication)**
  * `celebrations`: birthdays · weddings · anniversaries · holidays · festivals
  * `going_out`: dining_out · nightlife · concerts · cinema_theater
  * `invitations`: host_guest · RSVP · etiquette · party_planning
  * `communication`: small_talk · debate · active_listening · body_language
* **`society` (Society, Institutions & Religion)**
  * `metropolitan`: urban_planning · public_services · civic_infrastructure
  * `education`: school_systems · universities · libraries · research_institutes
  * `religion`: belief_systems · places_of_worship · sacred_texts · rituals · churches_mosques_synagogues
  * `politics`: government_branches · elections · diplomacy · public_policy
  * `heraldry`: flags · coats_of_arms · state_symbols · anthems
* **`art_culture` (Arts, Architecture & Literature)**
  * `art`: painting · sculpture · drawing · galleries_museums
  * `literature`: fiction_nonfiction · poetry · drama · literary_criticism
  * `film`: cinematography · directing · genres · film_sets · movie_theaters
  * `theatre`: stagecraft · acting · musicals · opera
  * `traditions`: folklore · cultural_heritage · customs · rites_of_passage
  * `fine_arts`: classical_arts · restoration · curation · aesthetics · wood_carving
  * `graphic_arts`: printing_processes · lithography · bookbinding · graphic_design · intaglio
  * `crafts`: pottery · weaving · glassblowing · woodworking · sewing_knitting · bobbin_lace · embroidery
  * `photography`: cameras_lenses · lighting · darkrooms · digital_editing
  * `architecture`: pyramids · greek_temples · castles · cathedrals · pagodas · elevators_escalators
* **`music` (Music, Audio & Performance)**
  * `instruments`: strings · woodwinds · brass · percussion · keyboards · electronic
  * `genres`: classical · jazz · rock_pop · traditional_folk · electronic_dance
  * `performance`: concerts · recitals · rehearsals · stage_lighting
  * `listening`: audio_players · headphones · acoustics · sound_systems
  * `orchestra`: symphony_conductors · section_seating · scores
  * `notation`: sheet_music · clefs_notes · rhythm_tempo · scales_chords

---

### 7. MIND_HEALTH (Psychology, Health, Emotions, Describing)
* **`emotions` (Emotions & Expressive States)**
  * `positive`: joy · contentment · enthusiasm · love · hope · gratitude
  * `negative`: sadness · anger · fear · anxiety · guilt · shame · jealousy
  * `complex`: nostalgia · ambivalence · awe · grief · empathy
  * `expressing`: body_language · facial_expressions · vocal_tone · venting
* **`health_medicine` (Health, Medicine & First Aid)**
  * `symptoms`: fever · pain · fatigue · nausea · coughing · inflammation
  * `treatment`: surgeries · therapies · consultations · rehabilitation
  * `hospital`: emergency_rooms · wards · operating_theaters · intensive_care
  * `wellbeing`: mental_health · fitness · sleep_hygiene · stress_management
  * `sport_injury`: sprains · fractures · dislocations · physical_therapy
  * `medications`: prescriptions · antibiotics · painkillers · dosages · pharmacies · clinical_thermometers · blood_pressure_monitors
  * `safety_equipment`: first_aid_kits · ambulances · protective_gear · emergency_symbols · walking_aids · wheelchairs
* **`psychology` (Psychology, Cognition & Mind)**
  * `biases`: cognitive_biases · heuristics · logical_fallacies · prejudice
  * `cognitive_processes`: memory · perception · reasoning · decision_making
  * `behavior`: habits · motivation · personality_development · social_behavior
  * `psychoanalysis`: subconscious · dreams · defense_mechanisms · therapy
  * `concepts`: epistemology · consciousness · ethics · free_will
* **`describing` (Describing, Texture, Quality & Comparison)**
  * `size_shape`: dimensions · weights · geometric_profiles · scale
  * `texture`: rough_smooth · hard_soft · sticky · slippery · flexible
  * `quality`: durability · excellence · flaws · purity · authenticity
  * `quantity`: abundance · scarcity · measurements · estimates
  * `comparing`: similarities · differences · superlatives · contrasts

---

### 8. NATURE_ENV (Animals, Plants, Earth, Climate)
* **`animals` (Animal Kingdom)**
  * `pets`: dogs · cats · rodents · caged_birds · aquariums
  * `farm`: cattle · horses · sheep_goats · poultry · swine
  * `wild`: big_cats · bears · wolves · elephants · primates
  * `insects`: butterflies · bees_wasps · beetles · ants · spiders_arachnids
  * `birds`: songbirds · birds_of_prey · waterfowl · seabirds
  * `sea`: whales_dolphins · sharks · coral_reef_fish · sea_turtles
  * `mammals`: ungulates · carnivores · rodents · marsupials · bats · insectivorous_mammals · lagomorphs · flying_mammals
  * `reptiles_amphibians`: snakes · lizards · turtles · frogs_salamanders
  * `animal_groups`: herds · packs · flocks · schools · colonies
  * `crustaceans_mollusks`: lobsters_crabs · snails_octopuses · bivalves · sponges · echinoderms
  * `fishes`: bony_fish · cartilaginous_fish · freshwater · saltwater
* **`nature` (Nature, Weather & Outdoor Life)**
  * `landscape`: mountains · forests · rivers_lakes · deserts · prairies · caves · glaciers
  * `weather`: sunshine · rain_storms · snow_ice · wind · clouds · tornadoes · tropical_cyclones · precipitation
  * `plants`: trees_conifers · flowers · mosses_ferns · fungi_mushrooms · lichens · algae · cereals · grapes
  * `gardening`: pleasure_gardens · seeding_planting_tools · loosening_tools · watering_tools · pruning_cutting_tools · lawn_care
  * `seasons`: seasonal_phenomena · foliage · hibernation · blooms
  * `sky`: atmosphere · clouds_types · rainbows · sunrise_sunset
  * `sea`: ocean_currents · tides · waves · coastal_cliffs · ocean_floors_trenches
  * `camping`: tents · campfires · hiking_gear · survival_skills · knots · fishing · hunting
* **`environment` (Environment, Ecology & Earth Systems)**
  * `ecology`: ecosystems · food_chains · biodiversity · habitats
  * `climate`: global_warming · greenhouse_effect · microclimates
  * `recycling`: waste_sorting · composting · renewable_materials
  * `natural_disasters`: earthquakes · tornadoes_hurricanes · floods · wildfires · landslides
  * `pollution`: air_pollution · water_contamination · land_waste · acid_rain
  * `biosphere`: conservation · national_parks · endangered_species · hydrologic_cycle
* **`geography` (Geography, Geology & Earth Sciences)**
  * `continents`: europe · asia · africa · americas · oceania · antarctica
  * `europe`: regions · mountain_ranges · major_rivers · capital_cities
  * `asia`: regions · mountain_ranges · major_rivers · capital_cities
  * `geology`: plate_tectonics · volcanoes · caves · rock_types · erosion · earth_structure · section_earth_crust
  * `oceanography`: ocean_floors · trenches · ridges · marine_currents
  * `landforms`: peninsulas · islands · canyons · deltas · plateaus
  * `cartography`: remote_sensing · topographical_maps · coordinates · scales

---

### 9. SCIENCE_SPACE (Physics, Chemistry, Astronomy, Biology)
* **`science` (Fundamental Sciences & Laboratory)**
  * `physics_mechanics`: force_motion · gearing_systems · levers_pulleys · double_pulley
  * `optics`: light_reflection · lenses · lasers · microscopes · binoculars · electromagnetic_spectrum · color_synthesis · prisms
  * `chemistry`: periodic_table · chemical_reactions · matter_states · solutions · chemistry_symbols
  * `laboratory`: glassware_beakers · Bunsen_burners · safety_goggles · scales · lab_equipment
  * `measuring_devices`: thermometers · barometers · callipers · voltmeters · temperature_time_weight_thickness_distance_angle_measures
  * `biology`: genetics · cell_structures · evolution · microbiology · plant_cell · animal_cell · unicellulars
  * `scientific_symbols`: international_system_units · geometry_shapes
* **`astronomy` (Astronomy & Space Exploration)**
  * `celestial_bodies`: planets · moons · stars · galaxies · meteorites · comets · sun
  * `astronomical_observation`: telescopes · observatories · planetariums · refracting_reflecting_radio_telescopes · hubble_space_telescope
  * `astronautics`: space_shuttles · space_stations · probes · spacesuits · space_launchers
  * `solar_system`: sun · inner_planets · gas_giants · asteroid_belts

---

### 10. INDUSTRY_ENERGY (Energy Systems & Heavy Industry)
* **`energy` (Energy Production & Power Grids)**
  * `fossil_energy`: petroleum_refineries · coal_mining · natural_gas · oil
  * `hydroelectricity`: dams · turbines · power_generation · tidal_power · generator_units · electricity_transmission
  * `nuclear_energy`: nuclear_reactors · fuel_bundles · radiation_safety · heavy_water_boiling_water_reactors
  * `solar_energy`: photovoltaic_cells · solar_panels · solar_furnaces · flat_plate_collectors
  * `wind_energy`: wind_turbines · wind_farms · mechanical_conversion · windmills

---

### 11. LAW_HISTORY (Law, Military, History, Fantasy)
* **`law_order` (Law, Justice & Enforcement)**
  * `justice`: courtrooms · judges_lawyers · trials · verdicts
  * `prison`: correctional_facilities · security · rehabilitation
  * `court`: legal_procedures · testimony · evidence · sentencing
  * `law_enforcement`: police_patrols · crime_prevention · investigations
* **`military` (Defense, Military & Arms)**
  * `weapons`: firearms · artillery · edged_weapons · missiles · Stone_age_weapons · Roman_weapons · armor · bows_crossbows · revolvers_pistols · machine_guns · mortars · grenades · landmines
  * `armor`: historic_armor · body_armor · helmets · shielding
  * `combat_vehicles`: tanks · fighter_jets · frigates · submarines · aircraft_carriers
  * `defense`: fortification · strategic_defense · radar_systems
* **`history_fantasy` (History, Fantasy & Mythology)**
  * `ancient_history`: civilizations · archaeology · ancient_empires
  * `modern_history`: industrial_revolution · world_wars · space_age
  * `fantasy`: mythical_creatures · magic · legendary_kingdoms
  * `mythology`: pantheons · folklore_tales · epic_sagas

---

### 12. SPORTS_LEISURE (Sports, Games, Outdoor Recreation)
* **`sports` (Sports & Physical Athletics - Atomic Sub-Domains)**
  * `sports_facilities`: fields · complexes · arenas · competition_scoreboards
  * `track_field`: sprinting · long_jump · high_jump · shot_put · marathon · decathlon · heptathlon · speed_walking
  * `ball_sports`: soccer · rugby · basketball · volleyball · handball · baseball · softball · cricket · field_hockey · netball · canadian_football
  * `racket_sports`: tennis · table_tennis · badminton · squash · racquetball
  * `gymnastics`: rhythmic_gymnastics · artistic_vault · trampoline · acrobatic · aquatic_gymnastics · stretching
  * `aquatic_sports`: swimming · diving · water_polo · sailing · sailboard · whitewater_kayak · rowing · water_skiing · surfing · scuba_diving
  * `combat_sports`: boxing · wrestling · judo · karate · kung_fu · jujitsu · aikido · kendo · sumo · fencing
  * `strength_sports`: weightlifting · powerlifting · bodybuilding · fitness_equipment
  * `equestrian`: show_jumping · dressage · horse_racing_turf · harness_racing · polo · riding
  * `precision_sports`: archery · shotgun_shooting · rifle_shooting · pistol_shooting · billiards · lawn_bowling · petanque · bowling · golf
  * `cycling`: road_racing · mountain_biking · track_cycling · bmx
  * `motor_sports`: car_racing · motorcycling · snowmobile · personal_watercraft
  * `winter_sports`: alpine_skiing · snowboarding · figure_skating · speed_skating · ice_hockey · curling · bobsled · luge · skeleton · ski_resorts · freestyle_skiing · ski_jumping · cross_country_skiing · biathlon · snowshoes
  * `sports_on_wheels`: skateboarding · in_line_skating
  * `aerial_sports`: skydiving · hang_gliding · gliders · ballooning · parachuting
  * `mountain_sports`: mountaineering · rock_climbing · ice_climbing
* **`games` (Games, Hobbies & Tabletop)**
  * `board_games`: chess · checkers · monopoly · strategy_games · mah_jongg
  * `cards`: poker · bridge · traditional_deck · trading_cards
  * `dice_dominoes`: dice_games · dominoes · roulette_table
  * `puzzles`: jigsaw_puzzles · crosswords · sudoku · brainteasers
  * `video_games`: consoles · PC_gaming · esports · mobile_games · video_entertainment_systems
  * `casino_games`: roulette · slot_machines · blackjack · darts
  * `outdoor_leisure`: darts · lawn_bowling · petanque · frisbee · fishing · hunting · camping · soccer_table

---

## 4. Legacy Dataset Synonym Reconciliation Map

To maintain backwards compatibility while enforcing clean runtime querying, legacy theme identifiers found in dataset files are mapped as follows:

| Legacy Theme Tag | Canonical Theme Slug | Default Sub-Theme Assignment |
| :--- | :--- | :--- |
| `food` | `food_drink` | `meals` |
| `furniture_objects` | `furniture` | `furniture_items` |
| `numbers_0_9` | `numbers` | `cardinal` |
| `countries_capitals` | `people` | `nationality` |
| `personal_identity` | `people` | `nationality` |
| `feelings_emotions` | `emotions` | `positive` |
| `daily_life` | `time` | `schedule` |
| `hobbies` | `games` | `outdoor_leisure` |
| `lifestyle` | `social` | `going_out` |
| `career` | `jobs` | `career` |
| `work_employment` | `work` | `career` |
| `education` | `school` | `studying` |
| `culture` / `culture_arts` / `art` | `art_culture` | `art` |
| `society_politics` / `politics` / `governance` | `society` | `politics` |
| `ethics` / `ethics_philosophy` / `philosophy` / `epistemology` | `psychology` | `concepts` |
| `bioethics` / `transhumanism` | `psychology` | `concepts` |
| `ecology` | `environment` | `ecology` |
| `economy` / `economics` / `consumerism` | `work` | `economy` |
| `linguistics` | `language` | `phonetics` |
| `media` | `technology` | `social_media` |
| `tools` | `diy_construction` | `hand_tools` |

---

## 5. Scene Match Game Visual Tiering Scope Matrix

Per `docs/scene_match_curriculum_strategy.md`, visual interactive activities follow a strict CEFR-tiered strategy:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      SCENE MATCH CEFR PROGRESSION                      │
├─────────────────────────┬────────────────────────┬──────────────────────┤
│ TIER 1: CEFR A0–A2      │ TIER 2: CEFR B1        │ TIER 3: CEFR B2–C2   │
│ Full Scene Match (SVGs) │ Selective Task Scenes  │ System Maps & Webs   │
│ 16 Active Environments  │ Specialized Workflows  │ Non-Scene Diagrams   │
└─────────────────────────┴────────────────────────┴──────────────────────┘
```

| CEFR Tier | Visual Format | Target Vocabulary Domain | Active Scene Match SVGs |
| :--- | :--- | :--- | :--- |
| **Tier 1 (A0–A2)** | **Full Scene Match** (2D SVG room & environment hotspots) | Concrete physical nouns, immediate physical environment, daily objects, clothing, food, transport. | `apartment`, `bedroom`, `kitchen`, `bathroom`, `routine`, `clothing`, `seasons`, `animals`, `city`, `market`, `cafe`, `restaurant`, `park_nature`, `school_office` |
| **Tier 2 (B1)** | **Selective Specialized Scenes** (Task-based physical environments) | Concrete domain-specific workflows, medical instruments, technical tools, transit hubs. | `hospital` (Medical ward), `airport` (Terminal/Transit hub) |
| **Tier 3 (B2–C2)** | **System Maps & Collocation Webs** (Interactive non-scene diagrams) | Abstract concepts, jurisprudence, macroeconomics, cybernetics, philosophy, ethics, linguistics. | *Excluded from 2D Scene Match* (Routed to interactive collocation webs & concept maps) |

---

## 6. Detailed Scene Match Hotspot to Theme Taxonomy Directory

Below is the exact mapping of all 16 active Scene Match game environments (`games/data/scenes/*.js`) to the unified taxonomy:

### 1. Apartment (`apartment.js`)
* **Macro Domain**: `HOME_LIVING`
* **Primary Theme**: `furniture`
* **Sub-Theme**: `rooms` / `furniture_items`
* **Hotspots & Taxonomy**:
  - `sofa` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `television` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `bookshelf` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `window` ➔ Theme: `furniture` | Sub-Theme: `rooms`
  - `lamp` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `rug` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `painting` ➔ Theme: `art_culture` | Sub-Theme: `art`
  - `door` ➔ Theme: `furniture` | Sub-Theme: `doors_locks`

### 2. Bedroom (`bedroom.js`)
* **Macro Domain**: `HOME_LIVING`
* **Primary Theme**: `furniture`
* **Sub-Theme**: `bedroom`
* **Hotspots & Taxonomy**:
  - `bed` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `pillow` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `wardrobe` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `desk` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `alarm_clock` ➔ Theme: `time` | Sub-Theme: `clock`
  - `mirror` ➔ Theme: `furniture` | Sub-Theme: `household_items`

### 3. Kitchen (`kitchen.js`)
* **Macro Domain**: `FOOD_DINING` / `HOME_LIVING`
* **Primary Theme**: `food_drink` / `furniture`
* **Sub-Theme**: `cooking` / `appliances`
* **Hotspots & Taxonomy**:
  - `refrigerator` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `stove` ➔ Theme: `food_drink` | Sub-Theme: `cooking`
  - `sink` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `frying_pan` ➔ Theme: `food_drink` | Sub-Theme: `kitchen_utensils`
  - `table` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `chair` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`

### 4. Bathroom (`bathroom.js`)
* **Macro Domain**: `HOME_LIVING` / `MIND_HEALTH`
* **Primary Theme**: `furniture` / `body`
* **Sub-Theme**: `bathroom` / `health`
* **Hotspots & Taxonomy**:
  - `bathtub` ➔ Theme: `furniture` | Sub-Theme: `bathroom`
  - `shower` ➔ Theme: `furniture` | Sub-Theme: `bathroom`
  - `towel` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `toothbrush` ➔ Theme: `body` | Sub-Theme: `health`
  - `soap` ➔ Theme: `body` | Sub-Theme: `health`
  - `mirror_bath` ➔ Theme: `furniture` | Sub-Theme: `bathroom`

### 5. Routine (`routine.js`)
* **Macro Domain**: `HOME_LIVING` / `SELF_IDENTITY`
* **Primary Theme**: `time` / `body`
* **Sub-Theme**: `telling_time` / `schedule`
* **Hotspots & Taxonomy**:
  - `waking_up` ➔ Theme: `time` | Sub-Theme: `schedule`
  - `breakfast` ➔ Theme: `food_drink` | Sub-Theme: `breakfast`
  - `brushing_teeth` ➔ Theme: `body` | Sub-Theme: `health`
  - `dressing` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `sleeping` ➔ Theme: `time` | Sub-Theme: `schedule`

### 6. Clothing & Wardrobe (`clothing.js`)
* **Macro Domain**: `SELF_IDENTITY`
* **Primary Theme**: `clothes`
* **Sub-Theme**: `everyday` / `accessories`
* **Hotspots & Taxonomy**:
  - `shirt` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `pants` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `jacket` ➔ Theme: `clothes` | Sub-Theme: `weather_gear`
  - `shoes` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `hat` ➔ Theme: `clothes` | Sub-Theme: `accessories`

### 7. Four Seasons & Weather (`seasons.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `nature`
* **Sub-Theme**: `seasons` / `weather`
* **Hotspots & Taxonomy**:
  - `sun` ➔ Theme: `nature` | Sub-Theme: `weather`
  - `rain_cloud` ➔ Theme: `nature` | Sub-Theme: `weather`
  - `snow_crystal` ➔ Theme: `nature` | Sub-Theme: `seasons`
  - `autumn_leaf` ➔ Theme: `nature` | Sub-Theme: `seasons`

### 8. Animals & Wildlife (`animals.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `animals`
* **Sub-Theme**: `pets` / `farm` / `wild`
* **Hotspots & Taxonomy**:
  - `dog` ➔ Theme: `animals` | Sub-Theme: `pets`
  - `cat` ➔ Theme: `animals` | Sub-Theme: `pets`
  - `cow` ➔ Theme: `animals` | Sub-Theme: `farm`
  - `bird` ➔ Theme: `animals` | Sub-Theme: `birds`
  - `fish` ➔ Theme: `animals` | Sub-Theme: `fishes`

### 9. City Street & Buildings (`city.js`)
* **Macro Domain**: `TRAVEL_COMM`
* **Primary Theme**: `places`
* **Sub-Theme**: `city` / `buildings`
* **Hotspots & Taxonomy**:
  - `bus` ➔ Theme: `travel` | Sub-Theme: `land_travel`
  - `traffic_light` ➔ Theme: `travel` | Sub-Theme: `directions`
  - `bank` ➔ Theme: `work` | Sub-Theme: `finance`
  - `supermarket` ➔ Theme: `shopping` | Sub-Theme: `stores`
  - `pedestrian` ➔ Theme: `people` | Sub-Theme: `physical_desc`

### 10. Supermarket & Market (`market.js`)
* **Macro Domain**: `HOME_LIVING` / `FOOD_DINING`
* **Primary Theme**: `shopping` / `food_drink`
* **Sub-Theme**: `stores` / `fruit`
* **Hotspots & Taxonomy**:
  - `apple` ➔ Theme: `food_drink` | Sub-Theme: `fruit`
  - `bread` ➔ Theme: `food_drink` | Sub-Theme: `snacks`
  - `milk` ➔ Theme: `food_drink` | Sub-Theme: `drinks`
  - `shopping_cart` ➔ Theme: `shopping` | Sub-Theme: `items`
  - `cashier` ➔ Theme: `jobs` | Sub-Theme: `professions`

### 11. Cafe (`cafe.js`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Primary Theme**: `food_drink` / `social`
* **Sub-Theme**: `drinks` / `going_out`
* **Hotspots & Taxonomy**:
  - `coffee_cup` ➔ Theme: `food_drink` | Sub-Theme: `drinks`
  - `croissant` ➔ Theme: `food_drink` | Sub-Theme: `snacks`
  - `menu` ➔ Theme: `food_drink` | Sub-Theme: `meals`
  - `barista` ➔ Theme: `jobs` | Sub-Theme: `professions`

### 12. Restaurant (`restaurant.js`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Primary Theme**: `food_drink` / `social`
* **Sub-Theme**: `meals` / `going_out`
* **Hotspots & Taxonomy**:
  - `waiter` ➔ Theme: `jobs` | Sub-Theme: `professions`
  - `menu_card` ➔ Theme: `food_drink` | Sub-Theme: `meals`
  - `plate` ➔ Theme: `food_drink` | Sub-Theme: `kitchen_utensils`
  - `bill_check` ➔ Theme: `numbers` | Sub-Theme: `money`

### 13. Park & Nature (`park_nature.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `nature`
* **Sub-Theme**: `landscape` / `plants`
* **Hotspots & Taxonomy**:
  - `tree` ➔ Theme: `nature` | Sub-Theme: `plants`
  - `bench` ➔ Theme: `places` | Sub-Theme: `city`
  - `fountain` ➔ Theme: `places` | Sub-Theme: `landmarks`
  - `flower` ➔ Theme: `nature` | Sub-Theme: `plants`

### 14. School & Office (`school_office.js`)
* **Macro Domain**: `WORK_LEARNING`
* **Primary Theme**: `school` / `work`
* **Sub-Theme**: `stationery` / `office`
* **Hotspots & Taxonomy**:
  - `whiteboard` ➔ Theme: `school` | Sub-Theme: `classroom`
  - `laptop` ➔ Theme: `technology` | Sub-Theme: `computers`
  - `notebook` ➔ Theme: `school` | Sub-Theme: `stationery`
  - `pen` ➔ Theme: `school` | Sub-Theme: `stationery`

### 15. Airport & Terminal (`airport.js` - Selective B1)
* **Macro Domain**: `TRAVEL_COMM`
* **Primary Theme**: `travel`
* **Sub-Theme**: `air_travel` / `documents`
* **Hotspots & Taxonomy**:
  - `airplane` ➔ Theme: `travel` | Sub-Theme: `air_travel`
  - `departure_board` ➔ Theme: `travel` | Sub-Theme: `tourism`
  - `suitcase` ➔ Theme: `travel` | Sub-Theme: `luggage`
  - `conveyor_belt` ➔ Theme: `transport_machinery` | Sub-Theme: `material_handling`

### 16. Hospital Ward (`hospital.js` - Selective B1)
* **Macro Domain**: `MIND_HEALTH`
* **Primary Theme**: `health_medicine`
* **Sub-Theme**: `hospital` / `treatment`
* **Hotspots & Taxonomy**:
  - `hospital_bed` ➔ Theme: `health_medicine` | Sub-Theme: `hospital`
  - `stethoscope` ➔ Theme: `health_medicine` | Sub-Theme: `treatment`
  - `doctor` ➔ Theme: `jobs` | Sub-Theme: `professions`
  - `medicine_bottle` ➔ Theme: `health_medicine` | Sub-Theme: `medications`

---

## 7. CEFR Exam & International Benchmark Alignment

This taxonomy maps directly to international CEFR vocabulary criteria across 14 languages:

| Standard / Exam | Target Level | Aligned Macro Domains | Key CEFR Competency Focus |
| :--- | :--- | :--- | :--- |
| **Oxford 3000 / 5000** | A1–C1 | All 12 Macro Domains | High-frequency CEFR word bands, multi-part of speech coverage. |
| **DELF / DALF (French)** | A1–C2 | `SELF_IDENTITY`, `TRAVEL_COMM`, `WORK_LEARNING`, `LAW_HISTORY` | Daily interactions, argumentation, professional discourse. |
| **DELE / SIELE (Spanish)** | A1–C2 | `HOME_LIVING`, `FOOD_DINING`, `SOCIETY_CULTURE` | Pan-Hispanic variants, formal/informal registers (tú/usted). |
| **CELI / CILS (Italian)** | A1–C2 | `FOOD_DINING`, `SOCIETY_CULTURE`, `MIND_HEALTH` | Regional idioms, cultural heritage, social expressiveness. |
| **TORFL (Russian)** | A1–C2 | `SELF_IDENTITY`, `WORK_LEARNING`, `NATURE_ENV`, `SCIENCE_SPACE` | Case government, motion verbs, register, academic discourse. |

---

## 8. Governance & Developer Guidelines

1. **Tagging New Vocabulary Entries**:
   - Every word entry in `vocabulary/` MUST specify a valid `theme` matching a top-level key in `window.COSY_THEME_TREE`.
   - `sub_theme` SHOULD be populated using a valid sub-theme string from `window.COSY_THEME_TREE`.
2. **Scene Match Hotspot Additions**:
   - New 2D scene SVGs must be restricted to CEFR A0–B1 concrete physical terms.
   - Hotspot IDs in scene SVG definitions MUST correlate with corresponding word entry IDs or exact terms in `vocabulary/`.
3. **Runtime Updates**:
   - Any modification to `project/docs/THEMES.md` must be mirrored in `js/core/ui.js` (`window.COSY_THEME_TREE`) and `js/games/utils/shared.js`.
