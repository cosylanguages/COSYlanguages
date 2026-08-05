import os
from bs4 import BeautifulSoup

MAPPING = {
    "whether-raindrops-select-where-to-fall.html": (
        "As I sat in a cozy café in Rennes, watching a heavy Breton drizzle turn the granite cobblestones into mirrors, "
        "I flicked my lighter and lit my afternoon Marlboro Red. Across the table lay three open grammar dictionaries—French, "
        "Greek, and Italian. Watching a single raindrop slide down the window pane, I couldn't help but wonder about destination. "
        "In a world where we desperately try to conjugate our futures and map our perfect paths, do raindrops actually select "
        "where they fall—landing on the thirstiest patches of the earth by choice? Or are we all just falling blindly through "
        "a slate-grey sky, hoping to land exactly where we are needed most?"
    ),
    "do-insects-hide-when-it-rains.html": (
        "The wind off the Atlantic was howling over the slate roofs of Brest today, bringing with it a sudden, relentless downpour. "
        "I retreated into a warm tavern, ordered a strong double espresso, and let the smoke of my Marlboro Red drift toward the ceiling. "
        "As I watched people scramble for cover under the awnings, I thought of our tiny, silent co-habitants. "
        "I couldn't help but wonder... When a sudden storm hits, where do the smallest among us go? "
        "Do insects have an unbreakable communal instinct that shelters them, or are they just like us—vulnerable, "
        "confused, and frantically searching for a quick escape from the rain?"
    ),
    "is-bad-weather-gods-anger.html": (
        "As the sky over Brittany turned a bruised, dramatic shade of purple—the kind of weather that makes you crave a deep, "
        "earthy glass of Bordeaux—I stood under the stone archway of a medieval building, watching the storm roll in. "
        "Long before we had meteorologists to blame for ruining our outdoor weekend classes, ancient civilizations looked at a "
        "tempest and saw the wrath of a god. I took a slow drag of my Marlboro Red and couldn't help but wonder... Is bad weather "
        "really a cosmic judgment of our earthly sins? Or is it just our desperate, human desire to believe that even the sky cares "
        "enough to pick a fight with us?"
    ),
    "always-watched-in-a-crowd.html": (
        "I was standing at a busy intersection in Rennes, surrounded by commuters rushing home in the damp evening air. "
        "I had my hands in my trench coat pockets, a warm cup of coffee in one hand, a Marlboro Red in the other. "
        "Even in the middle of a crowd of strangers, I felt this strange, invisible spotlight on me. "
        "I couldn't help but wonder... Why is it that in a city of thousands, we often feel so conspicuous and self-conscious, "
        "as if every passerby is actively translating our inner flaws? Is this feeling of being watched just urban paranoia, "
        "or is it a beautiful delusion that keeps us from accepting our own absolute, terrifying anonymity?"
    ),
    "why-is-everyone-copying-me.html": (
        "I was sitting in my favorite bistro, translating a beautiful Russian poem into Italian, when a colleague walked in, "
        "ordered the exact same niche red wine I've spent years discovering, and sat down wearing a coat almost identical to mine. "
        "I lit a Marlboro Red and watched the smoke curl. I couldn't help but wonder... In a world that celebrates absolute "
        "individuality, why does everyone eventually begin to mimic the originals? Is imitation really the highest form of "
        "flattery—a bridge between languages and souls—or is it a quiet theft of our hard-won personal identity by those "
        "battling their own insecurity?"
    ),
    "feeling-empty-after-series.html": (
        "The rain was tapping softly against my window as I closed my laptop, finishing the final episode of a long series. "
        "The sudden silence in my apartment was its own translation of emptiness. "
        "I poured a glass of red wine, lit a Marlboro Red, and watched the grey sky outside. "
        "I couldn't help but wonder... Why does saying goodbye to fictional characters feel like losing a genuine friend? "
        "Are we genuinely mourning the end of their imaginary journeys, or are we secretly grieving the hours of our own "
        "lives we spent escaping into their world because our own realities felt too difficult to translate?"
    ),
    "death-of-the-album.html": (
        "I was skipping through a streaming playlist of fifteen-second viral tracks on my phone, feeling completely uninspired. "
        "My eyes drifted to the stack of vinyl records in the corner of my room. "
        "I lit a Marlboro Red, took a sip of my black coffee, and couldn't help but wonder... In an era of fragmented digital "
        "singles, what happened to our patience? Have we lost the capacity to sit still and digest a full, carefully sequenced "
        "concept album from start to finish? Or has the speed of modern life simply made the full album a beautiful relic of "
        "a slower, more deliberate past?"
    ),
    "ugly-produce-anti-waste.html": (
        "While walking through a local Breton market, past stalls of organic cider and fresh galettes, "
        "I noticed a small crate of twisted, lumpy carrots and asymmetrical apples. "
        "They were heavily discounted, ignored by shoppers looking for perfect symmetry. "
        "I stood there, smoking a Marlboro Red, and couldn't help but wonder... In a society that constantly filters, edits, "
        "and standardizes our language and our lives, why have we imposed these same sterile beauty standards on the earth? "
        "By rejecting 'ugly' produce, are we slowly starving our souls of the authentic, chaotic beauty of nature?"
    ),
    "does-euthanasia-reduce-suicide-rates.html": (
        "The autumn leaves were falling gracefully outside my study in Rennes, tracing their inevitable descent to the damp earth. "
        "I sat with a glass of red wine, a textbook of ancient Greek philosophy on my lap, and a Marlboro Red in my fingers. "
        "In a world that fights so fiercely to keep us alive at all costs, why is the final exit such an unspeakable taboo? "
        "I couldn't help but wonder... Does having control over the very last sentence of our story bring peace? "
        "Or does the freedom of euthanasia inadvertently shift the boundaries of hope, actually reducing the lonely, "
        "desperate rates of traditional suicide?"
    ),
    "appreciating-amy-winehouse-after-death.html": (
        "I was sitting in a dimly lit bar, the soulful, tragic brass of 'Back to Black' playing softly in the background. "
        "I stared at the red cherry of my Marlboro Red, reflecting on the price of genius. "
        "I couldn't help but wonder... Why is it that we only truly appreciate, celebrate, and canonize brilliant artists after they are gone? "
        "Do we only love the poet once they are safe from the messy, agonizing reality of living—or does death transform "
        "their work into a perfect, untouchable artifact that we can finally consume without guilt?"
    ),
    "why-do-we-try-to-relate-to-adhd.html": (
        "I spent an hour tonight doom-scrolling through social media, watching video after video listing the 'symptoms' of ADHD. "
        "Forgetfulness, open tabs, losing your keys—it felt like the internet was desperately trying to diagnose the entire human race. "
        "I lit a Marlboro Red, took a sip of cold espresso, and couldn't help but wonder... Why are we so eager to find a clinical "
        "label for our daily distractions? Are we craving a medical excuse for our collective, modern burnout, or are we just "
        "desperately searching for a vocabulary to explain why we feel so disconnected?"
    ),
    "is-parenting-instinct-a-real-thing-or-scam.html": (
        "While walking through the Thabor gardens in Rennes, watching young parents exhaustedly managing crying toddlers, "
        "I wondered if they actually possessed a secret biological handbook. In a society that expects us to instantly transform "
        "into selfless, perfect guardians the moment we hold a newborn, is there really a maternal switch that flips? "
        "I took a drag of my Marlboro Red and couldn't help but wonder... Is the parenting instinct a biological truth, "
        "or is it a highly successful social construct designed to guilt-trip us into silent conformity?"
    ),
    "are-traditions-hidden-monogamy.html": (
        "My neighbor was outside, meticulously polishing a heavy brass antique under the grey Breton sky—an heirloom she has "
        "confessed to detesting. It made me smile. In a world where we fear romantic commitment and constantly swipe for the "
        "next best option, why do we pledge such unwavering, monogamous loyalty to old traditions? "
        "I watched the smoke of my Marlboro Red dissipate into the damp air and couldn't help but wonder... Are these cultural "
        "rituals a comforting embrace, or are they just a hidden monopoly on our choices, forcing us to sleep with history "
        "while neglecting our own future?"
    ),
    "collective-guilt-global-crisis.html": (
        "The wind blowing in from the Atlantic coast of Brittany carries a wild, ancient energy. "
        "Yet, when we read the news, we are told that every plastic cup we touch is a nail in the coffin of our planet. "
        "I sat on my terrace with a glass of red wine and a Marlboro Red, looking at the grey horizon. "
        "I couldn't help but wonder... Are we genuinely responsible for healing a wounded Earth, or is this modern "
        "environmental shame just a silent, psychological tax we pay to ease our conscience while enjoying the comfort of modern life?"
    ),
    "are-traditions-hidden-monogamy-upper-intermediate.html": (
        "As I watched the rain stream down the slate roofs of Rennes, my friend was polishing an old copper kettle she "
        "absolutely hated, simply because it belonged to her grandmother. "
        "I lit a Marlboro Red, took a sip of black coffee, and couldn't help but wonder... Why is it that in a world where we "
        "fear romantic commitment, we pledge such absolute, lifelong loyalty to arbitrary traditions? "
        "Are these physical heirlooms comforting, or are we just acting out of social guilt because we are too afraid to break up "
        "with our heritage?"
    ),
    "i-have-no-time-for-it.html": (
        "I was waiting for a delayed train at the Rennes station, surrounded by busy professionals checking their smartwatches "
        "and sighing impatiently. I stood on the platform, enjoying my Marlboro Red in the cool drizzle, and couldn't help but wonder "
        "about our obsession with being busy. We wear our packed calendars like armor, politely brushing off invitations and goals "
        "with the ultimate excuse: 'I just don't have the time.' "
        "But do we really lack the hours, or is 'no time' just a socially acceptable cover-up for a complete lack of desire?"
    ),
    "does-inclusive-language-make-us-equal.html": (
        "As a linguist, I spend my days dissecting grammar, vowels, and syntax. Recently, over a glass of dry red wine in Saint-Malo, "
        "I listened to a grand debate about inclusive French grammar—the endless battle of 'tous et toutes' and median periods. "
        "I lit a Marlboro Red and couldn't help but wonder... We spend so much energy polishing our syllables, hoping to cure "
        "centuries of disparity with a suffix. But does rearranging our grammar genuinely foster equality, or is it merely "
        "an elegant distraction from the stubborn, cold realities of inequality?"
    ),
    "why-do-i-spend-more-when-i-earn-more.html": (
        "I was sitting in a lively bistro in Rennes, watching a young student purchase a ten-euro organic double-shot flat white "
        "right after receiving her scholarship, while complaining about her rent. "
        "I took a sip of my own espresso, lit a Marlboro Red, and couldn't help but wonder about our endless dance with money. "
        "We swear that the next raise will be the one we save, the magic number that finally brings us peace. "
        "But the moment our income grows, our lifestyle expands to meet it. "
        "Do we genuinely want financial freedom, or is our spending simply a comfort blanket we buy to survive the daily grind of earning?"
    )
}

def update_files():
    directory = "events/sessions/i-couldnt-help-but-wonder"
    for filename, intro_text in MAPPING.items():
        filepath = os.path.join(directory, filename)
        if not os.path.exists(filepath):
            print(f"File {filepath} not found, skipping.")
            continue

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        soup = BeautifulSoup(content, "html.parser")

        # Find the editorial paragraph div
        # We know it has border-left: 3px solid #3F2B96
        # Let's search for a div containing this style or class, or find the p tag that contains "couldn't help but wonder" or "wonder"
        target_div = None
        for div in soup.find_all("div"):
            style = div.get("style", "")
            if "border-left: 3px solid #3F2B96" in style or "border-left:3px solid #3F2B96" in style:
                target_div = div
                break

        # Fallback search if style slightly differs
        if not target_div:
            for div in soup.find_all("div"):
                style = div.get("style", "")
                if "border-left" in style and "font-style: italic" in style:
                    target_div = div
                    break

        if target_div:
            # We found the div! Let's find the p tag inside it
            p_tag = target_div.find("p")
            if p_tag:
                p_tag.clear()
                p_tag.string = intro_text
                print(f"Updated intro for {filename}")
            else:
                # If no p tag, create one
                new_p = soup.new_tag("p")
                new_p.string = intro_text
                target_div.clear()
                target_div.append(new_p)
                print(f"Created and updated p tag inside target div for {filename}")
        else:
            # Fallback: search for p tag containing "couldn't help but wonder"
            found_p = False
            for p in soup.find_all("p"):
                if "couldn't help but wonder" in p.get_text() or "I wondered" in p.get_text():
                    p.clear()
                    p.string = intro_text
                    found_p = True
                    print(f"Fallback: Updated text inside p tag containing 'wonder' for {filename}")
                    break
            if not found_p:
                print(f"WARNING: Could not find any target div or p tag for {filename}!")

        # Write the updated content back
        # Ensure we maintain the DOCTYPE
        with open(filepath, "w", encoding="utf-8") as f:
            f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))

if __name__ == "__main__":
    update_files()
