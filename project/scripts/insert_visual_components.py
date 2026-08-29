import os
import re

components = [
    # --- GRAMMAR A0-A1 ---
    {
        "file": "manuals/en/grammar/a1/topics/much-many.html",
        "tag": "quantifiers-countable-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">none / no<small>0%</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">a few / some<small>small quantity</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">many / a lot of<small>large quantity</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">most<small>majority</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">all / every<small>100%</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/a1/topics/some-vs-any.html",
        "tag": "quantifiers-uncountable-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">none / no<small>0%</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">a little / some<small>small amount</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">much / a lot of<small>large amount</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">most<small>majority</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">all<small>100%</small></div>
  </div>
</div>"""
    },

    # --- GRAMMAR A2 ---
    {
        "file": "manuals/en/grammar/a2/topics/have-to-must-mustnt.html",
        "tag": "obligation-tree",
        "html": """<div class="tree">
  <div class="tree-q">Is it necessary or prohibited?</div>
  <div class="tree-branches">
    <div class="branch">
      <div class="lbl">Obligation</div>
      <div class="box2" style="background: var(--teal-700, #1c9483);">must / have to</div>
      <div class="ex">You must wear a seatbelt.</div>
    </div>
    <div class="branch">
      <div class="lbl">No Obligation</div>
      <div class="box2" style="background: #132321;">don't have to</div>
      <div class="ex">You don't have to pay today.</div>
    </div>
    <div class="branch">
      <div class="lbl">Prohibition</div>
      <div class="box2" style="background: #a3195b;">mustn't</div>
      <div class="ex">You mustn't smoke here.</div>
    </div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/a2/topics/may-might.html",
        "tag": "past-certainty-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">can't have<small>impossible</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">might have<small>weak possibility</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">could have<small>possible</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">should have<small>expectation</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">must have<small>certainty</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/a2/topics/too-and-enough.html",
        "tag": "degree-intensifiers-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">barely<small>almost not</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">slightly<small>a little bit</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">quite<small>fairly</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">very<small>high degree</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">extremely<small>maximum</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/a2/topics/could.html",
        "tag": "ability-progression-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">cannot<small>no ability</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">can<small>present general</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">could<small>past general</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">manage to<small>specific success</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">be able to<small>full flexibility</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/a2/topics/defining-relative-clauses.html",
        "tag": "relative-pronoun-tree",
        "html": """<div class="tree">
  <div class="tree-q">What are you referring to?</div>
  <div class="tree-branches">
    <div class="branch">
      <div class="lbl">Person</div>
      <div class="box2" style="background: #1c9483;">who / that</div>
      <div class="ex">The teacher who helped me.</div>
    </div>
    <div class="branch">
      <div class="lbl">Thing</div>
      <div class="box2" style="background: #c9740a;">which / that</div>
      <div class="ex">The book which I bought.</div>
    </div>
    <div class="branch">
      <div class="lbl">Place</div>
      <div class="box2" style="background: #132321;">where</div>
      <div class="ex">The café where we met.</div>
    </div>
    <div class="branch">
      <div class="lbl">Possession</div>
      <div class="box2" style="background: #a3195b;">whose</div>
      <div class="ex">The boy whose dog ran away.</div>
    </div>
  </div>
</div>"""
    },

    # --- GRAMMAR B1 ---
    {
        "file": "manuals/en/grammar/b1/topics/modals-of-deduction-present.html",
        "tag": "deductive-certainty-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">can't be<small>99% sure NO</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">might be<small>30% possible</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">could be<small>50% possible</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">should be<small>80% expectation</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">must be<small>99% sure YES</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/b1/topics/reporting-verbs.html",
        "tag": "reporting-verb-strength-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">deny<small>reject statement</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">admit<small>concede truth</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">suggest<small>gentle idea</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">claim<small>assert unproven</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">insist<small>strong demand</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/b1/topics/embedded-indirect-questions.html",
        "tag": "indirect-question-tree",
        "html": """<div class="tree">
  <div class="tree-q">What type of direct question is it?</div>
  <div class="tree-branches">
    <div class="branch">
      <div class="lbl">Wh- Question</div>
      <div class="box2" style="background: #1c9483;">keep question word</div>
      <div class="ex">Where is it? &rarr; Do you know where it is?</div>
    </div>
    <div class="branch">
      <div class="lbl">Yes / No Question</div>
      <div class="box2" style="background: #c9740a;">use 'if' or 'whether'</div>
      <div class="ex">Is he coming? &rarr; Can you tell me if he is coming?</div>
    </div>
  </div>
</div>"""
    },

    # --- GRAMMAR B2 ---
    {
        "file": "manuals/en/grammar/b2/topics/inversion-after-negative-adverbials.html",
        "tag": "negative-inversion-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">never<small>0% frequency</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">rarely<small>infrequent</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">seldom<small>uncommon</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">hardly<small>scarcely / barely</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">no sooner<small>immediate sequence</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/grammar/b2/topics/discourse-markers.html",
        "tag": "discourse-connectors-tree",
        "html": """<div class="tree">
  <div class="tree-q">What logical connection are you making?</div>
  <div class="tree-branches">
    <div class="branch">
      <div class="lbl">Contrast</div>
      <div class="box2" style="background: #1c9483;">nevertheless / whereas</div>
      <div class="ex">He was tired; nevertheless, he kept going.</div>
    </div>
    <div class="branch">
      <div class="lbl">Addition</div>
      <div class="box2" style="background: #c9740a;">furthermore / moreover</div>
      <div class="ex">Furthermore, the results were positive.</div>
    </div>
    <div class="branch">
      <div class="lbl">Consequence</div>
      <div class="box2" style="background: #a3195b;">consequently / hence</div>
      <div class="ex">Consequently, the decision was revoked.</div>
    </div>
  </div>
</div>"""
    },

    # --- VOCABULARY MANUAL ---
    {
        "file": "vocabulary-manual/topics/weather.html",
        "tag": "temperature-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">freezing<small>&lt; 0°C</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">cold<small>~5°C</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">cool<small>~15°C</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">warm<small>~22°C</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">boiling / hot<small>&gt; 35°C</small></div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/feelings-and-emotions.html",
        "tag": "mood-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">miserable<small>deeply unhappy</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">sad<small>unhappy</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">okay / fine<small>neutral</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">happy<small>positive</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">ecstatic<small>overjoyed</small></div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/shopping-and-money.html",
        "tag": "price-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">very cheap<small>bargain</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">cheap<small>low cost</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">average<small>standard price</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">expensive<small>high cost</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">very expensive<small>luxury</small></div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/directions-and-location.html",
        "tag": "distance-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">very close<small>right here</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">near<small>short walk</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">medium distance<small>few miles</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">far<small>long drive</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">very far<small>long trip</small></div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/family-and-relationships.html",
        "tag": "family-tree",
        "html": """<div class="tree">
  <div class="tree-q">Family Structure & Generation</div>
  <div class="tree-branches">
    <div class="branch">
      <div class="lbl">Generation 1</div>
      <div class="box2" style="background: #1c9483;">Grandparents</div>
      <div class="ex">grandmother, grandfather</div>
    </div>
    <div class="branch">
      <div class="lbl">Generation 2</div>
      <div class="box2" style="background: #c9740a;">Parents & Uncles/Aunts</div>
      <div class="ex">mother, father, uncle, aunt</div>
    </div>
    <div class="branch">
      <div class="lbl">Generation 3</div>
      <div class="box2" style="background: #132321;">Self, Siblings & Cousins</div>
      <div class="ex">brother, sister, cousin</div>
    </div>
    <div class="branch">
      <div class="lbl">Generation 4</div>
      <div class="box2" style="background: #a3195b;">Children</div>
      <div class="ex">son, daughter, niece, nephew</div>
    </div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/extra-time-expressions.html",
        "tag": "seasons-cycle",
        "html": """<div class="cycle-wrap">
  <h3>🔄 Seasons Cycle</h3>
  <div class="cycle-grid">
    <div class="cycle-step"><span class="num">1</span><div class="title">Spring</div><div class="sub">March - May</div></div>
    <div class="cycle-step"><span class="num">2</span><div class="title">Summer</div><div class="sub">June - August</div></div>
    <div class="cycle-step"><span class="num">3</span><div class="title">Autumn</div><div class="sub">September - November</div></div>
    <div class="cycle-step"><span class="num">4</span><div class="title">Winter</div><div class="sub">December - February</div></div>
  </div>
</div>"""
    },
    {
        "file": "vocabulary-manual/topics/clothes-and-accessories.html",
        "tag": "clothing-stack",
        "html": """<div class="stack-wrap">
  <div class="stack-block">
    <span class="label">👒 Head & Neck</span>
    <span class="value">hat, cap, beanie, scarf, sunglasses</span>
  </div>
  <div class="stack-block">
    <span class="label">👕 Torso & Arms</span>
    <span class="value">shirt, t-shirt, sweater, coat, jacket</span>
  </div>
  <div class="stack-block">
    <span class="label">👖 Waist & Legs</span>
    <span class="value">trousers, jeans, shorts, skirt, belt</span>
  </div>
  <div class="stack-block">
    <span class="label">👟 Feet & Ankles</span>
    <span class="value">shoes, boots, trainers, socks</span>
  </div>
</div>"""
    },

    # --- COMMUNICATION MANUAL ---
    {
        "file": "manuals/en/communication/part-2.html",
        "tag": "requests-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">Would you mind...?<small>very polite</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">Could you...?<small>polite standard</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">Can you...?<small>casual / direct</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">Please...<small>simple request</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">[Imperative]<small>blunt command</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-3.html",
        "tag": "agreement-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">I completely agree<small>100% agreement</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">I agree<small>standard positive</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">I'm not sure<small>neutral / hesitant</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">I disagree<small>negative</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">I completely disagree<small>strong refusal</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-4.html",
        "tag": "apologies-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">I'm terribly sorry<small>formal / deep</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">I'm sorry<small>standard polite</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">Sorry<small>quick / casual</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">My bad<small>informal</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">Oops<small>minor slip-up</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-5.html",
        "tag": "reactions-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">That's amazing!<small>high enthusiasm</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">That's nice<small>pleasant</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">That's okay<small>neutral</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">That's not great<small>mild concern</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">That's terrible<small>strong negative</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-6.html",
        "tag": "farewells-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">It was a pleasure, goodbye<small>formal</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">Goodbye<small>standard polite</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">Bye<small>casual standard</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">See you<small>friendly</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">Later<small>informal slang</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-7.html",
        "tag": "offering-help-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">Allow me to help you<small>formal</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">Can I help you?<small>standard polite</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">Need help?<small>casual / direct</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">Want a hand?<small>friendly informal</small></div>
  </div>
</div>"""
    },
    {
        "file": "manuals/en/communication/part-8.html",
        "tag": "suggestions-scale",
        "html": """<div class="scale-wrap">
  <div class="scale-bar" style="background: linear-gradient(90deg, #e4f4f0, #1c9483);">
    <div class="scale-pt" style="left: 5%;"></div>
    <div class="scale-lbl" style="left: 5%;">I would suggest...<small>formal / gentle</small></div>
    <div class="scale-pt" style="left: 28%;"></div>
    <div class="scale-lbl" style="left: 28%;">How about...?<small>friendly idea</small></div>
    <div class="scale-pt" style="left: 52%;"></div>
    <div class="scale-lbl" style="left: 52%;">Why don't we...?<small>collaborative</small></div>
    <div class="scale-pt" style="left: 76%;"></div>
    <div class="scale-lbl" style="left: 76%;">Let's...<small>direct proposal</small></div>
    <div class="scale-pt" style="left: 95%;"></div>
    <div class="scale-lbl" style="left: 95%;">We should...<small>strong recommendation</small></div>
  </div>
</div>"""
    }
]

def main():
    modified_count = 0
    for comp in components:
        filepath = comp["file"]
        if not os.path.exists(filepath):
            print(f"Skipping missing file: {filepath}")
            continue

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Check if component already inserted
        if comp["tag"] in content or "scale-wrap" in content or "tree" in content or "cycle-wrap" in content or "stack-wrap" in content:
            # Let's check if the specific HTML snippet is present
            if comp["html"][:30] in content:
                print(f"Already present in {filepath}")
                continue

        # Find good insertion point (after outcome-banner or notice box or before table-wrap/examples)
        target_marker = '</div>\n<div class="box mint"'
        if target_marker in content:
            # Insert after the mint box
            mint_end = content.find('</div>', content.find('<div class="box mint"'))
            if mint_end != -1:
                insert_pos = mint_end + 6
                new_content = content[:insert_pos] + "\n" + comp["html"] + content[insert_pos:]
            else:
                new_content = content.replace('</h1>', '</h1>\n' + comp["html"], 1)
        elif 'class="outcome-banner"' in content:
            banner_end = content.find('</div>', content.find('class="outcome-banner"'))
            insert_pos = banner_end + 6
            new_content = content[:insert_pos] + "\n" + comp["html"] + content[insert_pos:]
        else:
            # Insert after <h1> / header block
            new_content = content.replace('</h1>', '</h1>\n' + comp["html"], 1)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        modified_count += 1
        print(f"Inserted {comp['tag']} into {filepath}")

    print(f"\nDone! Updated {modified_count} files.")

if __name__ == "__main__":
    main()
